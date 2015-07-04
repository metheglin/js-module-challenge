// cd $APP_ROOT
// -----------------------
// npm install gulp
// npm install browserify
// npm install babelify
// npm install vinyl
// -----------------------

var gulp        = require("gulp");
var browserify  = require("browserify");
var babelify    = require("babelify");
var source      = require("vinyl-source-stream");

var assets_path     = "public/assets/";
var assets_src_path = "public/assets/src/";

gulp.task("browserify", function(){
  browserify( assets_src_path + "js/main.js")
    .transform( babelify )
    .bundle()
    .on("error", function(err) { console.log("Error: " + err.message); })
    .pipe( source("main.js") )
    .pipe( gulp.dest( assets_path + "/javascripts/" ) )
});

gulp.task("watch", function(){
  gulp.watch( assets_src_path + "js/*.js", ["browserify"] );
});

gulp.task("default", ["browserify", "watch"]);
