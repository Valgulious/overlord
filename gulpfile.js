const {src, dest, task, series} = require('gulp');
const useref = require('gulp-useref');
const obf = require('gulp-javascript-obfuscator');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const clean = require('gulp-clean');

task( 'obfc', function () {
    return src('./js/*.js')
        .pipe(uglify())
        .pipe(obf())
        .pipe(dest('dist/js'))
});

task('useRef', function () {
    return src(['./*.html', './*.json'])
        .pipe(useref())
        .pipe(dest('dist'))
});

task('css', function () {
    return src('./css/*.css')
        .pipe(concat('combined.css'))
        .pipe(csso())
        .pipe(dest('dist/css'))
});

task('clear', function () {
    return src('./dist/*', {read: false})
        .pipe(clean())
});

task('image', function () {
    return src('./img/*')
        .pipe(useref())
        .pipe(dest('dist/img'))
});

task('build', series(
    'clear',
    'useRef',
    'css',
    'obfc',
    'image'
));