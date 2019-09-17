import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gallery-picture', 'Unit | Serializer | i-i-s-gallery-picture', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-gallery-picture',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-gallery-author',
    'model:i-i-s-gallery-picture'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
