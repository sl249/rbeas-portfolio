'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    googleFonts: [
      'Roboto+Condensed:300,400,700'
    ],
    svgJar: {
      sourceDirs: [
        'public'
      ]
    },
    APP: {
     preloader: {
       removeDelay: false,
       loadedClass: false
     }
   }
  };
};
