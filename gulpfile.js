var gulp = require('gulp');
var inject = require('gulp-inject');
var app = './app/';
var bower = app + 'bower_components/';
var dist = './dist/';
var temp = './temp/';
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var js = [
    bower + 'showdown/compressed/Showdown.js',
    bower + 'angular/angular.js',
    bower + 'angular-resource/angular-resource.js',
    bower + 'angular-route/angular-route.js',
    bower + 'angular-sanitize/angular-sanitize.js',
    bower + 'angular-bootstrap/ui-bootstrap-tpls.js',
    bower + 'angular-markdown-directive/markdown.js',
    app + 'app.js',
    app + '/exercise1/solution1.js',
    app + '/exercise2/solution2.js',
    app + '/exercise3/solution3.js'
];
var tempJS = [
    temp + 'Showdown.js',
    temp + 'angular.js',
    temp + 'angular-resource.js',
    temp + 'angular-route.js',
    temp + 'angular-sanitize.js',
    temp + 'ui-bootstrap-tpls.js',
    temp + 'markdown.js',
    temp + 'app.js',
    temp + 'solution1.js',
    temp + 'solution2.js',
    temp + 'solution3.js'
];


var css = [
    app + '/assets/exercises.css',
    app + '/exercise2/solution3.css',
    app + '/exercise2/solution2.css',
    app + '/exercise2/solution1.css'
];
var copyFiles = [
  './app/index.html',
  './app/assets/*.png',
  './app/intro/*.html',
  './app/exercise1/**/*.html',
  './app/exercise2/**/*.html',
  './app/exercise3/**/*.html',
  './app/bower_components/bootstrap/**/*'
];

gulp.task('inject', function () {
  var target = gulp.src('./app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var arr = js.concat(css);
  arr.push(bower + '/bootstrap/dist/css/bootstrap.min.css');
  var sources = gulp.src(arr, {read: false});
 
  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('./app'));
});

gulp.task('ngAnn', function () {
    return gulp.src(js)
        .pipe(ngAnnotate())
        .pipe(gulp.dest('./temp'));
});

gulp.task('compress', ['ngAnn'], function() {
  return gulp.src([
    'temp/*.js'
    ])
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('temp'));
});


gulp.task('concat:js', ['compress'], function () {
  return gulp.src(tempJS)
    .pipe(concat('exercise.js'))
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('concat:css', function () {
  return gulp.src(css)
    .pipe(concat('exercise.css'))
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('copy', function () {
    return gulp.src(copyFiles, {base: './app'})
          .pipe(gulp.dest('./dist'));
});

gulp.task('inject:build', ['copy', 'concat:js'], function () {
  var target = gulp.src('./dist/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(["./dist/bower_components/bootstrap/dist/css/bootstrap.min.css", "./dist/assets/exercise.css", "./dist/assets/exercise.js"], {read: false});
 
  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['ngAnn', 'compress', 'concat:js', 'copy', 'concat:css', 'inject:build']);