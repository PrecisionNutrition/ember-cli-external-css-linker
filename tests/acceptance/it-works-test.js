import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | it works', function(hooks) {
  setupApplicationTest(hooks);

  test('inserts a link tag into the head tag', async function(assert) {
    await visit('/');

    let insertedLinkTag = document.querySelector('link[href="/fake.css"]');

    assert.ok(insertedLinkTag);
  });
});
