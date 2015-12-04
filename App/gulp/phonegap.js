'use strict';

var path = require('path');
var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('phonegap', ['clean'],function () {
    return gulp.src('phonegap/**')
        .pipe(gulp.dest(paths.dist+ '/'))
});
