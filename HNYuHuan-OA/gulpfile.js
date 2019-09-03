var gulp = require('gulp'),
    replace = require('gulp-replace');
    
gulp.task('dev', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //OA http://oa1.zjfgs.chng.com/ 环境转移http://59.110.171.69:31011环境
        .pipe(replace(/http:\\{2}\/\\{2}\/oa1\\{2}.zjfgs\\{2}.chng\\{2}.com/gm, 'http:\\\\/\\\\/59\\\\.110\\\\.171\\\\.69:31011'))
        .pipe(replace(/oa1\.zjfgs\.chng\.com/gm, '59.110.171.69:31011'))
        .pipe(gulp.dest('./'));
});

gulp.task('release', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //OA http://59.110.171.69:31011 环境转移 http://oa1.zjfgs.chng.com/ 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/59\\{2}.110\\{2}.171\\{2}.69:31011/gm, 'http:\\\\/\\\\/oa1\\\\.zjfgs\\\\.chng\\\\.com'))
        .pipe(replace(/59\.110\.171\.69:31011/gm, 'oa1.zjfgs.chng.com'))
        .pipe(gulp.dest('./'));
});