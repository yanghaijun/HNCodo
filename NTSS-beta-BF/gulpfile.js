var gulp = require('gulp'),
    replace = require('gulp-replace');
    
gulp.task('dev', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        .pipe(replace(/http:\\{2}\/\\{2}\/123\\{2}.56\\{2}.3\\{2}.72:31036/gm, 'http:\\\\/\\\\/127\\\\.0\\\\.0\\\\.1:20009'))
        .pipe(replace(/123\.56\.3\.72:31036/gm, '127.0.0.1:20009'))
        .pipe(gulp.dest('./'));
});
gulp.task('product', async()=>{
    gulp.src(['**/*', '!./gulpfile.js', '!./lib/images/**/*', '!./**/*.png', '!./**/css/**/*', '!/**/*.ico'])
        .pipe(replace(/http:\\{2}\/\\{2}\/127\\{2}.0\\{2}.0\\{2}.1:20009/gm, 'http:\\\\/\\\\/123\\\\.56\\\\.3\\\\.72:31036'))
        .pipe(replace(/127\.0\.0\.1:20009/gm, '123.56.3.72:31036'))
        .pipe(gulp.dest('./'));
});      
