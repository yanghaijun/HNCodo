var gulp = require('gulp'),
    replace = require('gulp-replace');
    
gulp.task('dev', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        // http://59.110.171.69:30002/ 环境转移http://59.110.171.69:31002/环境
        .pipe(replace(/http:\\{2}\/\\{2}\/59\\{2}.110\\{2}.171\\{2}.69:31099/gm, 'http:\\\\/\\\\/127\\\\.0\\\\.0\\\\.1:31099'))
        .pipe(replace(/59\.110\.171\.69:31099/gm, '127.0.0.1:31099'))
        .pipe(gulp.dest('./'));
});

gulp.task('product', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        .pipe(replace(/http:\\{2}\/\\{2}\/127\\{2}.0\\{2}.0\\{2}.1:31099/gm, 'http:\\\\/\\\\/59\\\\.110\\\\.171\\\\.69:31099'))
        .pipe(replace(/127\.0\.0\.1:31099/gm, '59.110.171.69:31099'))
        .pipe(gulp.dest('./'));
});