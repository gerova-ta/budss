"use strict";

const {src, dest, watch, series, parallel} = require('gulp');

const browserSync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const del = require('del');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const webpHtml = require('gulp-webp-html');
const minify = require('gulp-minify');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');

function html () {
  return src('./src/*.html')
  .pipe(plumber())
  .pipe(webpHtml())
  .pipe(htmlmin({collapseWhitespace:true}))
  .pipe(dest('./public'))
  .pipe(browserSync.stream());
}

function css () {
   return src('./src/css/*.css', {sourcemaps: true})
   .pipe(plumber())
   .pipe(concat("main.css"))
   .pipe(autoprefixer())
   .pipe(dest('./public/css', {sourcemaps: true}))
   .pipe(rename({suffix: '.min'}))
   .pipe(csso())
   .pipe(dest('./public/css', {sourcemaps: true}))
   .pipe(browserSync.stream());
}

function js () {
   return src('./src/js/*.js', {sourcemaps: true})
   .pipe(plumber())
   .pipe(minify())
   .pipe(dest('./public/js', {sourcemaps: true}))
   .pipe(browserSync.stream());
}

function img () {
   return src('./src/img/*.png')
   .pipe(webp())
   .pipe(dest('./public/img'))
   .pipe(src('./src/img/*.{png,svg}'))
   .pipe(imagemin())
   .pipe(dest('./public/img'))
   .pipe(browserSync.stream());
}

function fonts () {
   return src('./src/fonts/*.ttf')
   .pipe(fonter({formats:['woff']}))
   .pipe(ttf2woff2())
   .pipe(dest('./public/fonts'))
   .pipe(browserSync.stream());
}

function clear () {
   return del('./public');
}
function watcher () {
   watch('./src/*.html', html);
   watch('./src/css/*.css', css);
   watch('./src/js/*.js', js);
   watch('./src/img/*.*', img);
   watch('./src/fonts/*.*', fonts);
}
function server () {
   browserSync.init({
      server:{
         baseDir: './public'
      },
      browser: 'chrome'
   });
}

exports.html = html;
exports.css = css;
exports.js = js;
exports.img = img;
exports.fonts = fonts;
exports.watch = watcher;
exports.server = server;
exports.clear = clear;

exports.dev = series(
   clear,
   parallel(html,css,js,img,fonts),
   parallel(watcher,server)
);