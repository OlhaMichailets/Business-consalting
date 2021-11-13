
const { src, dest, watch, series } = require('gulp');
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const server = require('browser-sync')
const imagemin = require('gulp-imagemin')



function html () {
    return src('source/*.html')
        .pipe(dest('build'))
}

function css () {
    return src('source/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('build/css'))
}

function cssNomin () {
    return src('source/scss/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(dest('build/css'))
}

function serve () {
    server.init({
        server: "build/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    })
    watch('source/scss/**/*.scss', series(css, cssNomin, refresh))
    watch('source/*.html', series(html, refresh))
}

function refresh (done) {
    server.reload()
    done()
}

function images () {
    return src('source/img/**/*.{png,jpg,jpeg}')
        pipe(imagemin([
            imagemin.optipng({optimizationLevel1: 3}),
            imagemin.mozjpeg({progressive: true})
        ])).pipe(dest('build/img'))
}



exports.html = html
exports.css = css
exports['css-nomin'] = cssNomin
exports.serve = serve
exports.images = images

