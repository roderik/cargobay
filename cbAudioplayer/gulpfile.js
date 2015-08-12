'use strict';

// Require Gulp
var gulp = require('gulp');

// Load Gulp plugins
var plugins = require('gulp-load-plugins')();

// Config
var cbAudioplayer = {
    scss : 'scss/*.scss',
    js : 'js/*.js',
    test : 'test/*.js',
};

var mocha = require('gulp-mocha');

gulp.task('mocha', function() {
  return gulp.src(cbAudioplayer.test)
    .pipe(mocha());
});

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('js-lint', function() {
  return gulp.src(cbAudioplayer.js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish, { verbose: true }))
    .pipe(jshint.reporter('fail'))
});

var scsslint = require('gulp-scss-lint');

gulp.task('scss-lint', function() {
  gulp.src(cbAudioplayer.scss)
    .pipe(scsslint({
        'config': 'scsslint.yml',
        'bundleExec': true,
        'reporterOutputFormat': 'Checkstyle',
    }))
    .pipe(scsslint.failReporter('E'));

});

gulp.task('test', function () {
    gulp.start('mocha');
    gulp.start('js-lint');
    gulp.start('scss-lint');
});
