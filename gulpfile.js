var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var wiredep = require('wiredep').stream;
var $ = require('gulp-load-plugins')({lazy: true});
var reload = browserSync.reload;


function inject(src, label, order) {
  var options = {
    read: false,
    relative: true
  };
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

gulp.task('inject', ['wiredep'], function() {
  return gulp
    .src('./client/index.html')
    .pipe(inject('./client/css/styles.css'))
    .pipe(gulp.dest('./client/'));
});

// Inject bower dependencies & project js into index.html
gulp.task('wiredep', function () {
  var options = {
    bowerJson: require('./bower.json'),
    directory: './bower_components/',
    ignorePath: '../'
  };
  var jsOrder = [
    '**/app.module.js',
    '**/*.module.js',
    '**/*.js'
  ]
  var js = [
    './client/app/**/*.module.js',
    './client/app/**/*.js',
    '!./client/app/**/*.spec.js'
  ]

  return gulp
    .src('client/index.html')
    .pipe(wiredep(options))
    .pipe(inject(js, '', jsOrder))
    .pipe(gulp.dest('./client'));
});

gulp.task('sass', function() {
  return sass('client/scss/styles.scss')
    .pipe(gulp.dest('client/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('browserSyncReload', reload);

gulp.task('serve-dev', ['inject'], function() {
  browserSync({
    server: {
      baseDir: 'client',
      routes: {
          "/bower_components": "bower_components"
      }
    },
    files: [
      './client/**/*.*'
    ]
  });

  gulp.watch(['client/scss/*.scss', 'client/**/*.html', 'client/**/*.js'], ['sass', 'browserSyncReload']);
});