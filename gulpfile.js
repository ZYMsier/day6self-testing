var gulp = require('gulp');
var webserver = require('gulp-webserver'); //服务
var sass = require('gulp-sass'); //编译sass
var concat = require('gulp-concat'); //合并文件
var uglify = require('gulp-uglify'); //压缩js
//建任务
gulp.task('sass', function() {
    return gulp.src('./src/sass/*.scss')
        //编译sass
        .pipe(sass())
        //合并文件
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./newsass'))
});
//压缩js
gulp.task('uglify', function() {
    return gulp.src('./src/js/*.js')
        //编译sass
        .pipe(uglify())
        .pipe(gulp.dest('./newjs'))
});
//gulp起服务拦截请求
gulp.task('webserver', function() {
    return gulp.src('./src')
        .pipe(webserver({
            port: 3000,
            open: true, //自动打开浏览器
        }));
});
//监听文件变化
gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('sass'));
});
//建开发环境
gulp.task('dev', gulp.series('sass', 'webserver', 'watch'));
//打包环境
gulp.task('build', gulp.series('uglify'));