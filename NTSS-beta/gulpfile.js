var gulp = require('gulp'),
    replace = require('gulp-replace');
    
gulp.task('dev', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        .pipe(replace(/http:\\{2}\/\\{2}\/59\\{2}.110\\{2}.171\\{2}.69:31002/gm, 'http:\\\\/\\\\/127\\\\.0\\\\.0\\\\.1:20011'))
        .pipe(replace(/59\.110\.171\.69:31002/gm, '127.0.0.1:20011'))
        .pipe(gulp.dest('./'));
});

gulp.task('product', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        .pipe(replace(/http:\\{2}\/\\{2}\/127\\{2}.0\\{2}.0\\{2}.1:20011/gm, 'http:\\\\/\\\\/59\\\\.110\\\\.171\\\\.69:31002'))
        .pipe(replace(/127\.0\.0\.1:20011/gm, '59.110.171.69:31002'))
        .pipe(gulp.dest('./'));
});      
