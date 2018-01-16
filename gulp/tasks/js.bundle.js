'use strict';

module.exports = function() {
  $.gulp.task('js:bundle', function() {
    return $.gulp.src($.path.jsFoundation)
      .pipe($.gp.concat('bundle.js'))
      .pipe($.gulp.dest($.config.root + '/js'))
      .pipe($.gp.if(!$.dev, $.gp.uglifyjs()))
      .pipe($.gp.if(!$.dev, $.gp.rename({ suffix: ".min" })))
      .pipe($.gp.if(!$.dev, $.gulp.dest($.config.root + '/js')))
      .pipe($.browserSync.stream());
  })
};



