'use strict';

module.exports = {
  name: 'ember-cli-external-css-linker',

  contentFor(type, config) {
    if (type === 'head') {
      let urls = config.externalStyleSheets || [];

      return urls
        .map(function(url) {
          return `<link href="${url}" rel="stylesheet" type="text/css">`;
        })
        .join('');
    }
  }
};
