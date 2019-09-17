import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  author: DS.belongsTo('i-i-s-gallery-author', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export function defineNamespace(modelClass) {
  modelClass.reopenClass({
    namespace: 'IIS.Gallery',
  });
}

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PictureE', 'i-i-s-gallery-picture', {
    name: Projection.attr('Name', { index: 0 }),
    author: Projection.belongsTo('i-i-s-gallery-author', 'Author', {
      name: Projection.attr('Name', { index: 2 })
    }, { index: 1 })
  });
  modelClass.defineProjection('PictureL', 'i-i-s-gallery-picture', {
    name: Projection.attr('Name', { index: 0 }),
    author: Projection.belongsTo('i-i-s-gallery-author', 'Name', {
      name: Projection.attr('Name', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
