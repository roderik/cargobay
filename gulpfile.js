'use strict';

// Require Gulp
var gulp = require('gulp');


// Load Gulp plugins
var plugins = require('gulp-load-plugins')();

var chalk = require('chalk');

// Config
var basePath = {
    addons: 'add-ons',
    startkit: 'startkit'
};

var cargobay = {
    addons: {
        scss : basePath.addons + '/**/*/styles/scss/**/*.scss',
        js : [basePath.addons + '/**/*/js/**/*.js', '!' + basePath.addons + '/**/*/js/**/*.min.js'] // ! in front of a path excludes that path/those files. This is to prevent double minification.
    },
    startkit: {
        scss : basePath.startkit + '/**/*/styles/scss/**/*.scss'
    }
};


// Styles
gulp.task('styles-addons', function() {
    return gulp.src(cargobay.addons.scss)
        // Scss -> Css
        .pipe(plugins.rubySass({
            'sourcemap=none': true
        }))
        .on('error', function (err) { console.log(err.message); })

        // Combine Media Queries
        .pipe(plugins.combineMediaQueries())

        // Prefix where needed
        .pipe(plugins.autoprefixer('last 1 version'))

        // Use rename function to correctly place the dest path.
        .pipe(plugins.rename(function(path){
            path.dirname += '/../css';
        }))

        // Write to output dest
        .pipe(gulp.dest('./' + basePath.addons + '/')) // Because of rename dest will be: './src/**/*/styles/css/**/*.css'

        // Rename the file again for the minified version of the css
        .pipe(plugins.rename(function(path){
            path.basename += '.min';
        }))

        // Minify output
        .pipe(plugins.minifyCss())

        // Write to output dest
        .pipe(gulp.dest('./' + basePath.addons + '/')) // Because of rename dest will be: './src/**/*/styles/css/**/*.min.css'

        // Show total size of css
        .pipe(plugins.size({
            title: 'css'
        }));
});

gulp.task('styles-startkit', function() {
    return gulp.src(cargobay.startkit.scss)
        // Scss -> Css
        .pipe(plugins.rubySass({
            'sourcemap=none': true
        }))
        .on('error', function (err) { console.log(err.message); })

        // Combine Media Queries
        .pipe(plugins.combineMediaQueries())

        // Prefix where needed
        .pipe(plugins.autoprefixer('last 1 version'))

        // Use rename function to correctly place the dest path.
        .pipe(plugins.rename(function(path){
            path.dirname += '/../css';
        }))

        // Write to output dest
        .pipe(gulp.dest('./' + basePath.startkit + '/')) // Because of rename dest will be: './src/**/*/styles/css/**/*.css'

        // Rename the file again for the minified version of the css
        .pipe(plugins.rename(function(path){
            path.basename += '.min';
        }))

        // Minify output
        .pipe(plugins.minifyCss())

        // Write to output dest
        .pipe(gulp.dest('./' + basePath.startkit + '/')) // Because of rename dest will be: './src/**/*/styles/css/**/*.min.css'

        // Show total size of css
        .pipe(plugins.size({
            title: 'css'
        }));
});


// Scripts
gulp.task('scripts-addons', function () {
    return gulp.src(cargobay.addons.js)
        // JsHint
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter(require('jshint-stylish')))

        // Rename file befoure uglify
        .pipe(plugins.rename(function(path){
            path.basename += '.min';
        }))

        // Uglify
        .pipe(plugins.uglify())

        // Write to output dest
        .pipe(gulp.dest('./' + basePath.addons + '/')) // Because of rename, the dest will be ./src/**/*/js/**/*.min.js

        // Show total size of js
        .pipe(plugins.size({
            title: 'js'
        }));
});


// Watch
gulp.task('watch', function () {
    // Styles
    gulp.watch(cargobay.addons.scss, ['styles-addons']);
    gulp.watch(cargobay.startkit.scss, ['styles-startkit']);

    // Scripts
    gulp.watch(cargobay.addons.js, ['scripts-addons']);

    console.log(chalk.green('Build.complete!'));
});


// Build
gulp.task('build', ['styles-addons', 'scripts-addons'], function(){
    gulp.start('styles-startkit');
    console.log(chalk.green('Build complete!'));
});


// Default
gulp.task('default', ['build'], function () {
    gulp.start('watch');
});
