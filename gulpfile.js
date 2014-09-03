var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    minifyCSS = require('gulp-minify-css'),
    less = require('gulp-less');

gulp.task('default', function() {
    gulp.src('public/css/*.css')
    .pipe(concatCSS('bundle.css'))
    .pipe(minifyCSS())
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(notify('Done!'));
});

gulp.task('less', function () {
  gulp.src('css/*.less')
    .pipe(less())
    .pipe(gulp.dest('public/css'));
    
});

gulp.task('watch', function(){
    gulp.watch('css/*.less' , ['less'])
});

