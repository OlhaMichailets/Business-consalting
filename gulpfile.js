
const { src, dest } = require('gulp');
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')


function html () {
    return src('source/*.html')
        .pipe(dest('build'))
}
exports.html = html

function css () {
        return src('source/scss/**/*.scss')
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(rename('style.min.css'))
            .pipe(sourcemaps.write('./'))
            .pipe(dest('build/css'))
}
exports.css = css