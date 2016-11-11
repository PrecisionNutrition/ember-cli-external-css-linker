import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | it works');

test('listed stylesheets have link tags inserted', function(assert) {
  visit('/');

  andThen(function() {
    let insertedLinkTag = Ember.$('link[href="/fake.css"]');

    assert.equal(insertedLinkTag.length, 1);
  });
});
