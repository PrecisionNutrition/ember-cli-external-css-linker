'use strict';

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);

    this.ui.writeDeprecateLine('[ember-cli-external-css-linker] This project is deprecated and will no longer receive updates. Please use https://github.com/ronco/ember-cli-head instead.');
  },

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
