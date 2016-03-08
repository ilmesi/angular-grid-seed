var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('sass', function() {
  return sass('app/scss/styles.scss')
    .pipe(gulp.dest('app/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('browserSyncReload', reload);

gulp.task('serve', ['sass'], function() {
    browserSync({
        server: {
          baseDir: 'app'
        }
    });

    gulp.watch(['app/scss/*.scss', 'app/**/*.html', 'app/**/*.js'], ['sass', 'browserSyncReload']);
});