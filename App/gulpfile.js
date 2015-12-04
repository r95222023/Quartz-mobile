'use strict';

var gulp = require('gulp');

gulp.paths = {
    src: 'src',
    dist: 'dist',
    tmp: '.tmp',
    phonegap: 'phonegap',
    e2e: 'e2e'
};

require('require-dir')('./gulp');

gulp.task('build-web', ['clean'], function () {
    gulp.start('buildapp');
});
gulp.task('build', ['phonegap'], function () {
    gulp.paths.dist=gulp.paths.dist+'/www';
    gulp.start('buildapp');
});
