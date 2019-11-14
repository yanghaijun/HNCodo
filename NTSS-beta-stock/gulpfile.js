var gulp = require('gulp'),
    replace = require('gulp-replace');
    
gulp.task('dev', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        // http://59.110.171.69:30002/ 环境转移http://59.110.171.69:31002/环境
        .pipe(replace(/http:\\{2}\/\\{2}\/59\\{2}.110\\{2}.171\\{2}.69:30002/gm, 'http:\\\\/\\\\/59\\\\.110\\\\.171\\\\.69:31002'))
        .pipe(replace(/59\.110\.171\.69:30002/gm, '59.110.171.69:31002'))
        .pipe(gulp.dest('./'));
});

gulp.task('release', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        // http://59.110.171.69:31003 环境转移 http://oa1.chngsc.cn/ 环境
        .pipe(replace(/http:\\{2}\/\\{2}\/59\\{2}.110\\{2}.171\\{2}.69:31003/gm, 'http:\\\\/\\\\/oa1\\\\.chngsc\\\\.cn'))
        .pipe(replace(/59\.110\.171\.69:31003/gm, 'oa1.chngsc.cn'))
        .pipe(gulp.dest('./'));
});

gulp.task('31002TO31099', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        .pipe(replace(/http:\\{2}\/\\{2}\/59\\{2}.110\\{2}.171\\{2}.69:31002/gm, 'http:\\\\/\\\\/59\\\\.110\\\\.171\\\\.69:31099'))
        .pipe(replace(/59\.110\.171\.69:31002/gm, '59.110.171.69:31099'))
        .pipe(gulp.dest('./'));
});      
//gulp.task('dev', function() {
    //gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //OA http://oa1.chngsc.cn/ 环境转移 http://123.56.221.127:20070 环境
        //.pipe(replace(/http:\\{2}\/\\{2}\/oa1\\{2}.chngsc\\{2}.cn/gm, 'http:\\\\/\\\\/123\\\\.56\\\\.221\\\\.127:20070'))
        //.pipe(replace(/oa1\.chngsc\.cn/gm, '123.56.221.127:20070'))
        //.pipe(gulp.dest('./'));
//});

//gulp.task('release', function() {
    //gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        //OA http://123.56.221.127:20070 环境转移 http://oa1.chngsc.cn/ 环境
        //.pipe(replace(/http:\\{2}\/\\{2}\/123\\{2}.56\\{2}.221\\{2}.127:20070/gm, 'http:\\\\/\\\\/oa1\\\\.chngsc\\\\.cn'))
        //.pipe(replace(/123\.56\.221\.127:20070/gm, 'oa1.chngsc.cn'))
        //.pipe(gulp.dest('./'));
//});