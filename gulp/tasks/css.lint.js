"use strict";

module.exports = function() {
  const reporterr = require('postcss-reporter');

  $.gulp.task("styles:lint", function() {
    return $.gulp.src("./app/styles/**/*.s+(a|c)ss")
    // .pipe($.gp.stylelint({
    //   failAfterError: true,
    //   reporters: [{
    //     formatter: "string",
    //     console: true
    //   }]
    // }))
    // .pipe($.gp.stylelint.failAfterError())
    // .pipe($.gp.stylelint.reporters([{
    //   formatter: "string",
    //   console: true,
    // }]))
      .pipe($.gp.postcss([
        $.gp.stylelint({
          failAfterError: true,
          reporters: [{
            formatter: "string",
            console: true
          }]}),
        $.postReporter({ clearMessages: true})
      ]))
    // $.postReporter({ clearMessages: true})
    //     .on("error", $.gp.notify.onError({
    //       title: "Styleslint error",
    //       message: "Error: <%= error.message %",
    //     }));
    // .pipe(postcss([
    //   stylelint({ /* options */ }),
    //   reporter({ clearMessages: true })
    // ]));
  })
};

