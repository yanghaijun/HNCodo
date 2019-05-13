var gulp = require('gulp'),
    replace = require('gulp-replace');
    
gulp.task('dev', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //OA http://oa1.chngsc.cn/ 环境转移 http://123.56.221.127:30011 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/oa1\\{2}.chngsc\\{2}.cn/gm, 'http:\\\\/\\\\/123\\\\.56\\\\.221\\\\.127:30011'))
        .pipe(replace(/oa1\.chngsc\.cn/gm, '123.56.221.127:30011'))
        .pipe(gulp.dest('./'));
});

gulp.task('release', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //OA http://123.56.221.127:30011 环境转移 http://oa1.chngsc.cn/ 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/123\\{2}.56\\{2}.221\\{2}.127:30011/gm, 'http:\\\\/\\\\/oa1\\\\.chngsc\\\\.cn'))
        .pipe(replace(/123\.56\.221\.127:30011/gm, 'oa1.chngsc.cn'))
        .pipe(gulp.dest('./'));
});

gulp.task('scTOhlj', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //从四川OA外网 http://123.56.221.127:30011 环境转 移黑龙江OA内网 http://oa2.hnhlj.chng.com.cn/ 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/123\\{2}.56\\{2}.221\\{2}.127:30011/gm, 'http:\\\\/\\\\/oa2\\\\.hnhlj\\\\.chng\\\\.com\\\\.cn'))
        .pipe(replace(/123\.56\.221\.127:30011/gm, 'oa2.hnhlj.chng.com.cn'))
        .pipe(gulp.dest('./'));
});
