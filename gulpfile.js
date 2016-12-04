var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("default", ["watch"]);

gulp.task("build-css", function() {
  return gulp.src("src/scss/application.scss")
    .pipe(sass())
//     .on("error", function(error) {
//       console.log(error.message);
//     })
    .pipe(gulp.dest("src/public/css"));
});

gulp.task("watch", function() {
  gulp.watch("src/scss/**/*.scss", ["build-css"]);
});