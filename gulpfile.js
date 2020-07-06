// #################################################################################################
//
// Gulp Task Manager settings
//
// Documentation https://gulpjs.com
// https://www.liquidlight.co.uk/blog/how-do-i-update-to-gulp-4
//
// #################################################################################################

// #################################################################################################
// IMPORTS

// https://www.npmjs.com/package/autoprefixer
// PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
// It is recommended by Google and used in Twitter.
var autoprefixer = require('autoprefixer');
var eslint = require('gulp-eslint');
var fs = require('fs');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var header = require('gulp-header');
var iconfont = require('gulp-iconfont');
var iconfont_css = require('gulp-iconfont-css');
// https://www.npmjs.com/package/gulp-clean-css
// https://github.com/jakubpawlowicz/clean-css
var minify_css = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var gulp_sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
// var webpack = require('webpack');
var browser_sync = require('browser-sync').create();

var argv = require('minimist')(process.argv.slice(2));

// #################################################################################################
// SETTINGS

var options = {
    debug: argv.debug
};

var PROJECT_ROOT = __dirname;

var PROJECT_PATH = {
    bower: PROJECT_ROOT + '/vendor',
    css: PROJECT_ROOT + '/stylesheets',
    sass: PROJECT_ROOT + '/src/sass',
};

var PROJECT_PATTERNS = {
    sass: [
        PROJECT_PATH.sass + '/**/*.{scss,sass}'
    ]
};

var DEFAULT_PORT = 8000;
var PORT = parseInt(process.env.PORT, 10) || DEFAULT_PORT;
var DEBUG = argv.debug;

// #################################################################################################
// TASKS

// SASS Task
function sass_task(cb) {
    // sourcemaps can be activated through `gulp sass --debug´
    gulp
        .src(PROJECT_PATTERNS.sass)
        .pipe(gulpif(options.debug, sourcemaps.init()))
        .pipe(gulp_sass())
        .on('error', function(error) {
            gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.messageFormatted));
        })
        .pipe(
            postcss([
                autoprefixer({
                    cascade: false
                })
            ])
        )
        .pipe(
            minify_css({
                rebase: false
            })
        )
        .pipe(header('/* This file was generated automatically on server side on ' + new Date().toISOString() +
                     '. All changes would be lost. */ \n\n'))
        .pipe(gulpif(options.debug, sourcemaps.write()))
        .pipe(gulp.dest(PROJECT_PATH.css))
        .pipe(browser_sync.reload({
            stream: true,
        }));
    cb();
}

// Lint Task
function lint_javascript_task(cb) {
    // http://eslint.org
    gulp
        .src(PROJECT_PATTERNS.js)
        .pipe(gulpif(!process.env.CI, plumber()))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(gulpif(!process.env.CI, plumber.stop()));
    cb();
}

// Browser Sync Task
// gulp.task('browserSync', ['runserver'], function() {});
function browser_sync_task(cb) {
    browser_sync.init({
        notify: false,
        port: DEFAULT_PORT,
        proxy: 'localhost:' + DEFAULT_PORT,
    });
    cb();
}

// Watch Task
function watch_task(cb) {
    gulp.watch(PROJECT_PATTERNS.sass, gulp.series(sass_task));
    // gulp.watch(PROJECT_PATTERNS.js, lint_javascript_task);
    cb();
}

// #################################################################################################

exports.sass = sass_task;
exports.build = gulp.series(sass_task);
exports.default = gulp.series(browser_sync_task, sass_task, watch_task);
exports.lint = gulp.series(lint_javascript_task);

// #################################################################################################

// const { series } = require('gulp');
// 
// var gulp = require('gulp');
// var bower = require('gulp-bower');
// var sass = require('gulp-sass');
// 
// var minify_css = require('gulp-minify-css');
// var autoprefixer = require('gulp-autoprefixer');
// // var sourcemaps = require('gulp-sourcemaps');
// // var gutil = require('gulp-util');
// // var gulpif = require('gulp-if');
// var header = require('gulp-header');
// 
// gulp.task('bower', function() {
//     bower(gulp.dest(opts.PROJECT_PATH.bower));
// });
// 
// // Compile sass into CSS
// gulp.task('sass', function() {
//     return gulp.src(project_patterns.sass)
//         .pipe(sass())
//         .pipe(autoprefixer({
//             // browsers are coming from browserslist file
//             cascade: false
//         }))
//     // .pipe(minify_css({
//     //     rebase: false
//     // }))
//         .pipe(header('/* This file generated automatically on server side. All changes would be lost. */ \n\n'))
//         .pipe(gulp.dest(project_path.css));
// });
// 
// gulp.task('watch', ['sass'], function() {
//     gulp.watch(project_patterns.sass, ['sass']);
// });
// 
// gulp.task('default', ['watch']);
