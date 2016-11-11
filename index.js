/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-external-css-linker',

  contentFor: function (type, config) {
    if (type === 'head') {
      var linkTags;
      var URLs = config.externalStyleSheets || [];

      return URLs
        .map(function(url) {
          return '<link href="' + url + '" rel="stylesheet" type="text/css">';
        })
        .join('');
    }
  }
};
