'use strict';

var gulp       = require('gulp');
var babelify   = require('babelify');
var browserify = require('browserify');
var fs         = require('fs');

gulp.task('default', function() {

  // From Babel's example setup.
  // See https://babeljs.io/docs/setup/#browserify
  browserify({ debug: true })
    .transform(babelify)
    .require("./client.js", { entry: true })
    .bundle()
    .on("error", function (err) { console.log("Error: " + err.message); })
    .pipe(fs.createWriteStream("./public/bundle.js"));

});