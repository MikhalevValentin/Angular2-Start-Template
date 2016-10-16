"use strict";

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

//scss
gulp.task('css', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(prefix('last 25 versions'))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('app/css'))
        .pipe(notify("CSS compile OK!"));
});

//html
gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(notify("HTML change OK!"));
});

//watch
gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['css'])
    gulp.watch('index.html', ['html']);
});

//default
gulp.task('default', ['html', 'css', 'watch']);
