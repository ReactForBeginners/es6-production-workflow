'use strict';

var gulp       = require('gulp');
var babelify   = require('babelify');
var browserify = require('browserify');
var fs         = require('fs');
var watch      = require('gulp-watch');

var build = function() {
  // from babel's example setup.
  // see https://babeljs.io/docs/setup/#browserify
  console.log("Building");
  browserify({ debug: true })
    .transform(babelify)
    .require("./app/client.js", { entry: true })
    .bundle()
    .on("error", function (err) { console.log("error: " + err.message); })
    .pipe(fs.createWriteStream("./public/bundle.js"));
}

gulp.task('build', function() {
  build();
});

gulp.task('default', function() {
  watch('./app/**/*.js', null, 'build');
});