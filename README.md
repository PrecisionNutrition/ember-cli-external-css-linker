# ember-cli-external-css-linker [![Build Status](https://travis-ci.org/PrecisionNutrition/ember-cli-external-css-linker.svg?branch=master)](https://travis-ci.org/PrecisionNutrition/ember-cli-external-css-linker)

This addon allows for programmatic insertion of your external style sheets so that you don't have to see annoying 404s in your test environment, or what have you.

## Installation

* `ember install ember-cli-external-css-linker`

In your `config/environment.js` file:

```javascript
module.exports = function(environment) {
  var ENV = {
    externalStyleSheets: [
      '//my-url-to-something-like-font-awesome.css'
    ],
  };
});
```
