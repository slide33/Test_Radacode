var gulp = require('gulp'),
connect = require('gulp-connect'),
concatCss = require('gulp-concat-css'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
cssmin = require('gulp-cssmin'),
uglify = require('gulp-uglify'),
connect = require('gulp-connect'),
browserSync = require('browser-sync');

gulp.task('connect', function() {
  connect.server({
    proxy: "local.dev",
    livereload: true
  });
});

gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss("main-css.css"))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('main/'))
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('main/'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('index.html')
  .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('css/*.css', ['css']);
  gulp.watch('index.html', ['html']);
});



gulp.task('default', ['connect', 'watch' ]);
