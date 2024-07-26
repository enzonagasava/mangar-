const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function style(){
    return gulp.src('./src/styles/*scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

function images(){
    return gulp.src('./src/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function compress (){
    return gulp.src('./src/script/*js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/script'))
}

exports.default = gulp.parallel(style, images, compress)

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(style))
}