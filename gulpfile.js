const
    gulp = require('gulp'),
    path = require('path'),
    $ = require('gulp-load-plugins')(),
    config = require('./gulpfile-config'),
    paths = config.paths;
    opts = config.opts;


gulp.task('test', () => {
    gulp
        .src(paths.specFiles, { read: false })
        .pipe($.mocha(opts.mocha));

});
