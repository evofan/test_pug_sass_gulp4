// plug-inインストールしたプラグインを定義
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
// var sass = require("gulp-sass");
var sass = require('gulp-sass')(require('sass'));
var pug = require('gulp-pug');

// sassの仕事 
gulp.task("sass", function () {
  return (
    gulp.src("sass/**/*.scss")
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(gulp.dest("dist/css"))
  );
});

// pugの仕事
gulp.task("pug", function () {
  return (
    gulp.src("pug/**/*.pug")
      .pipe(plumber())
      .pipe(pug())
      .pipe(gulp.dest("dist"))
  );
});

// watchの仕事
gulp.task('watch', function () {
  return (
    // gulp.watch('sass/**/*.scss', ['sass']); // v3
    // gulp.watch('pug/**/*.pug', ['pug']); // v3
    gulp.watch('sass/**/*.scss', gulp.task('sass')), // v4
    gulp.watch('pug/**/*.pug', gulp.task('pug')) // v4
  );
});

// task実行
// gulp.task('default', ['sass', 'pug', 'watch']); // v3
gulp.task('default', gulp.series(gulp.parallel('sass', 'pug', 'watch')));