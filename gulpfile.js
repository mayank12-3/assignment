var gulp        = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('default', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});


gulp.task('watch', function() {
  gulp.watch("scripts/*.js", browserSync.reload);
  gulp.watch("*.html", browserSync.reload);
  gulp.watch("css/*.css", browserSync.reload);
});



