import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gallery-picture', 'Unit | Model | i-i-s-gallery-picture', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-gallery-author',
    'model:i-i-s-gallery-new-class1',
    'model:i-i-s-gallery-picture'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
