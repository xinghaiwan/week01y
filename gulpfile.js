const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const minCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const server = require('gulp-webserver');


gulp.task('devSass', () => {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest('./src/css/'))
});

gulp.task('devJs', () => {
    return gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/js/'))
});

gulp.task('watch', () => {
    gulp.watch('./src/', gulp.series('devSass', 'devJs'));
});

gulp.task('server', () => {
    return gulp.src('./src/')
        .pipe(server({
            port: 9889,
            open: true,
            livereload: true
        }))
});

gulp.task('default', gulp.parallel('devSass', 'devJs', 'server', 'watch'));