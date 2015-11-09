'use strict';

/* ==========================================================================
   Gulpfile

   Tasks:
    - gulp ( = development with livereload injected in demo/*.temp.html)
    - gulp build (minified css, uglified js)
    - gulp deploy (creates github IO pages)
   ========================================================================== */


/* Setup Gulp
   ========================================================================== */

// Require
var gulp = require('gulp'),
    open = require('open'),
    noop = require('gulp-util').noop,
    plugins = require('gulp-load-plugins')(),
    stylish = require('jshint-stylish'),
    runSequence = require('run-sequence');

// Config
var cargobay = {
        scss: 'cb*/scss/*.scss',
        js: 'cb*/js/*.js',
        test: 'cb*/test/*.js',
        demo: 'cb*/demo/*',
    };

// Allow turning dev tools off for production
var dev = false;

/* Errorhandling
   ========================================================================== */
var errorLogger, headerLines;

errorLogger = function(headerMessage,errorMessage){
    var header = headerLines(headerMessage);
        header += '\n             '+ headerMessage +'\n           ';
        header += headerLines(headerMessage);
        header += '\r\n \r\n';
        plugins.util.log(plugins.util.colors.red(header) + '             ' + errorMessage + '\r\n')

    if(showErrorNotifications){
        notifier.notify({
            'title': headerMessage,
            'message': errorMessage
        });
    }
}

headerLines = function(message){
    var lines = '';
    for(var i = 0; i< (message.length + 4); i++){
        lines += '-';
    }
    return lines;
}


/* Default tasks
   ========================================================================== */
gulp.task('styles', function() {
    return gulp.src(cargobay.scss, {base: './'})
        // Sass
        .pipe(plugins.sass().on('error', plugins.sass.logError))

        // Prefix where needed
        .pipe(plugins.autoprefixer([
            "last 2 versions",
            "ie 10",
            "ie 11"
        ]))

        // Minify output
        .pipe(dev? noop() : plugins.minifyCss())

        // Rename the file to respect naming covention.
        .pipe(plugins.rename(function(path){
            path.dirname += '/../dist';
            path.basename += '.min'
        }))

        // Write to output
        .pipe(gulp.dest('./'))
        .pipe(dev? plugins.livereload() : noop() );
});


gulp.task('scripts', function() {
    return gulp.src(cargobay.js, {base: './'})
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter(stylish, { verbose: true }))

        // Uglify output
        .pipe(dev? noop() : plugins.uglify())

        .pipe(plugins.rename(function(path){
            path.dirname += '/../dist';
            path.basename += '.min'
        }))

        .pipe(gulp.dest('./'))
        .pipe(dev? plugins.livereload() : noop() );
});


gulp.task('mocha', function() {
    return gulp.src(cargobay.test)
        .pipe(plugins.mocha());
});


gulp.task('js-lint', function() {
    return gulp.src(cargobay.js)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter(stylish, { verbose: true }))
        .pipe(plugins.jshint.reporter('fail'))
});


gulp.task('scss-lint', function() {
    return gulp.src(cargobay.scss)
        .pipe(plugins.scssLint({
            'config': 'scsslint.yml',
            'bundleExec': true,
            'reporterOutputFormat': 'Checkstyle',
        }))
        .pipe(plugins.scssLint.failReporter('E'));
});


gulp.task('test', function () {
    gulp.start('mocha');
    gulp.start('js-lint');
    gulp.start('scss-lint');
});


gulp.task('webserver', function() {
    plugins.connect.server({
        root: [__dirname],
        port: 8080
    });

});


gulp.task('open', function() {
    open('http://localhost:8080');
});


gulp.task('watch', function() {
    plugins.livereload.listen();
    gulp.watch([cargobay.demo]).on('change', function(file) {
        plugins.livereload.changed(file.path);
    });
    gulp.watch(cargobay.scss, ['styles']);
    gulp.watch(cargobay.js, ['scripts']);
});


gulp.task('injectReload', function(){
    return gulp.src(['cb*/demo/*.html'])
        .pipe(plugins.injectReload({
            host: 'http://localhost'
        }))

        .pipe(plugins.rename(function(path){
            path.dirname += '/../demo';
            path.basename += '.temp'
        }))

        .pipe(gulp.dest('./'))
});


gulp.task('clean', function(){
    return gulp.src(['dist/*', 'cb*/dist/*', 'cb*/demo/*.temp.*'], {read:false})
        .pipe(plugins.debug({title: 'clean:'}))
        .pipe(plugins.clean());
});

gulp.task('build', function(done) {
    dev = false;
    gulp.start(['clean', ]);
    runSequence(
        'clean',
        ['styles', 'scripts'],
        'test',
    done);
});

gulp.task('deploy', function(cb) {
    return gulp.src(['./demo/**/*','./cb*/dist/*', './cb*/demo/*'])
        .pipe(plugins.ghPages({"remoteUrl": "https://"+process.env.GH_TOKEN+"@github.com/Kunstmaan/cargobay.git"}));
});

gulp.task('default', function(done) {
    dev = true;
    runSequence(
        'clean',
        ['styles', 'scripts', 'injectReload'],
        'webserver',
        ['open', 'watch'],
    done);
});
