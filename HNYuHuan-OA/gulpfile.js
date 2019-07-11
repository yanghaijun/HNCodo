var gulp = require('gulp'),
    replace = require('gulp-replace');
    
gulp.task('dev', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //OA http://oa1.chngsc.cn/ 环境转移 http://123.56.221.127:30011 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/oa1\\{2}.hnrl\\{2}.chng\\{2}.com/gm, 'http:\\\\/\\\\/oa1\\\\.zjfgs\\\\.chng\\\\.com'))
        .pipe(replace(/oa1\.hnrl\.chng\.com/gm, 'oa1.zjfgs.chng.com'))
        .pipe(gulp.dest('./'));
});

gulp.task('release', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //OA http://123.56.221.127:30011 环境转移 http://oa1.hnrl.chng.com/ 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/123\\{2}.56\\{2}.221\\{2}.127:30011/gm, 'http:\\\\/\\\\/oa1\\\\.hnrl\\\\.chng\\\\.cn'))
        .pipe(replace(/123\.56\.221\.127:30011/gm, 'oa1.hnrl.chng.com'))
        .pipe(gulp.dest('./'));
});

gulp.task('20070TO30011', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //OA http://123.56.221.127:20070 环境转移 http://123.56.221.127:30011 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/123\\{2}.56\\{2}.221\\{2}.127:20070/gm, 'http:\\\\/\\\\/123\\\\.56\\\\.221\\\\.127:30011'))
        .pipe(replace(/123\.56\.221\.127:20070/gm, '123.56.221.127:30011'))
        .pipe(gulp.dest('./'));
});