var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var wiredep = require('wiredep').stream;
var reload = browserSync.reload;
var $ = require('gulp-load-plugins')({lazy: true});


function inject(src, label, order) {
    var options = {read: false};
    if (label) {
        options.name = 'inject:' + label;
    }
    return $.inject(orderSrc(src, order), options);
}
function orderSrc (src, order) {
    return gulp
        .src(src)
        .pipe($.if(order, $.order(order)));
}

// Inject bower dependencies & project js into index.html
gulp.task('wiredep', function () {
  var options = {
    bowerJson: require('./bower.json'),
    directory: './bower_components/',
    ignorePath: '../..'
  };
  var jsOrder = [
    '**/app.module.js',
    '**/*.module.js',
    '**/*.js'
  ]
  var js = [
    './app/**/*.module.js',
    './app/**/*.js',
    '!./app/**/*.spec.js'
  ]

  return gulp
    .src('app/index.html')
    .pipe(wiredep(options))
    .pipe(inject(js, '', jsOrder))
    .pipe(gulp.dest('./app'));
});

gulp.task('sass', function() {
  return sass('app/scss/styles.scss')
    .pipe(gulp.dest('app/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('browserSyncReload', reload);

gulp.task('serve', ['sass'], function() {
    browserSync({
        server: {
          baseDir: './',
        }
    });

    gulp.watch(['app/scss/*.scss', 'app/**/*.html', 'app/**/*.js'], ['sass', 'browserSyncReload']);
});