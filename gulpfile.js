var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('browserSyncReload', browserSync.reload);

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch(['app/**/*.html', 'app/**/*.js'], ['browserSyncReload']);
});