ember-cli-external-css-linker [![Build Status](https://travis-ci.org/PrecisionNutrition/ember-cli-external-css-linker.svg?branch=master)](https://travis-ci.org/PrecisionNutrition/ember-cli-external-css-linker)
==============================================================================

This addon allows for programmatic insertion of your external style sheets so that you don't have to see annoying 404s in your test environment, or what have you.

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-external-css-linker
```

Usage
------------------------------------------------------------------------------

In your `config/environment.js` file:

```javascript
module.exports = function(environment) {
  let ENV = {
    externalStyleSheets: [
      '//my-url-to-something-like-font-awesome.css'
    ],
  };
});
```

And we insert `<link` tags for your external CSS into `{{head` of your `app/index.html` as such:

```html
<head>
  <link ref="stylesheet" href="//my-url-to-something-like-font-awesome.css">

  <!-- and now the stuff Ember CLI adds for you in index.html -->
  <link rel="stylesheet" href="{{rootURL}}assets/vendor.css">
</head>
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
