var gulp = require('gulp');
var bower = require('gulp-bower');
var sass = require('gulp-sass');

var minify_css = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
// var sourcemaps = require('gulp-sourcemaps');
// var gutil = require('gulp-util');
// var gulpif = require('gulp-if');
var header = require('gulp-header');

var project_root = __dirname;

var project_path = {
    bower: project_root + '/vendor',
    css: project_root + '/stylesheets',
    sass: project_root + '/private/sass',
};

var project_patterns = {
    sass: [
        project_path.sass + '/**/*.{scss,sass}'
    ]
};

gulp.task('bower', function() {
    bower(gulp.dest(opts.PROJECT_PATH.bower));
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(project_patterns.sass)
        .pipe(sass())
        .pipe(autoprefixer({
            // browsers are coming from browserslist file
            cascade: false
        }))
    // .pipe(minify_css({
    //     rebase: false
    // }))
        .pipe(header('/* This file generated automatically on server side. All changes would be lost. */ \n\n'))
        .pipe(gulp.dest(project_path.css));
});

gulp.task('watch', ['sass'], function() {

    gulp.watch(project_patterns.sass, ['sass']);
});

gulp.task('default', ['watch']);
