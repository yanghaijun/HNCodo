var gulp = require('gulp'),
    replace = require('gulp-replace');
gulp.task('dev', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //OA http://oa1.chngsc.cn/ 环境转移 http://123.56.221.127:20070 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/oa1\\{2}.chngsc\\{2}.cn/gm, 'http:\\\\/\\\\/123\\\\.56\\\\.221\\\\.127:20070'))
        .pipe(replace(/oa1\.chngsc\.cn/gm, '123.56.221.127:20070'))
        .pipe(gulp.dest('./'));
});

gulp.task('release', function() {
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //OA http://123.56.221.127:20070 环境转移 http://oa1.chngsc.cn/ 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/123\\{2}.56\\{2}.221\\{2}.127:20070/gm, 'https:\\\\/\\\\/oa1\\\\.chngsc\\\\.cn'))
        .pipe(replace(/123\.56\.221\.127:20070/gm, 'oa1.chngsc.cn'))
        .pipe(gulp.dest('./'));
});