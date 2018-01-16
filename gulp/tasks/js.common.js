'use strict';

module.exports = function() {
  $.gulp.task('js:common', function() {
    return $.gulp.src($.path.app)
      .pipe($.gp.if($.dev, $.gp.sourcemaps.init({
        loadMaps: true
      })))
      .pipe($.gp.concat('app.js'))
      .pipe($.gulp.dest($.config.root + '/js'))
      .pipe($.gp.if(!$.dev, $.gp.uglifyjs()))
      .pipe($.gp.if($.dev, $.gp.sourcemaps.write("./maps")))
      .pipe($.gp.if(!$.dev, $.gp.rename({ suffix: ".min" })))
      .pipe($.gp.if(!$.dev, $.gulp.dest($.config.root + '/js')))
      .pipe($.browserSync.stream());
  });
};
