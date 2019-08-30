var gulp = require('gulp'),
    replace = require('gulp-replace');
    
gulp.task('dev', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //OA http://oa1.chngsc.cn/ 环境转移http://59.110.171.69:31003环境
        .pipe(replace(/http:\\{2}\/\\{2}\/oa1\\{2}.chngsc\\{2}.cn/gm, 'http:\\\\/\\\\/59\\\\.110\\\\.171\\\\.69:31003'))
        .pipe(replace(/oa1\.chngsc\.cn/gm, '59.110.171.69:31003'))
        .pipe(gulp.dest('./'));
});

gulp.task('release', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //OA http://59.110.171.69:31003 环境转移 http://oa1.chngsc.cn/ 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/59\\{2}.110\\{2}.171\\{2}.69:31003/gm, 'http:\\\\/\\\\/oa1\\\\.chngsc\\\\.cn'))
        .pipe(replace(/59\.110\.171\.69:31003/gm, 'oa1.chngsc.cn'))
        .pipe(gulp.dest('./'));
});

gulp.task('3100', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //http://59.110.171.69:31003  http://59.110.171.69:31007
        .pipe(replace(/http:\\{2}\/\\{2}\/59\\{2}.110\\{2}.171\\{2}.69:31003/gm, 'http:\\\\/\\\\/59\\\\.110\\\\.171\\\\.69:31007'))
        .pipe(replace(/59\.110\.171\.69:31003/gm, '59.110.171.69:31007'))
        .pipe(gulp.dest('./'));
});