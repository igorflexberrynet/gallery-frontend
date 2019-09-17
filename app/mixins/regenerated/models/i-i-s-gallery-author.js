import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  birthday: DS.attr('date'),
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
  modelClass.defineProjection('AuthorE', 'i-i-s-gallery-author', {
    name: Projection.attr('Name', { index: 0 }),
    birthday: Projection.attr('Birthday', { index: 1 })
  });
  modelClass.defineProjection('AuthorL', 'i-i-s-gallery-author', {
    name: Projection.attr('Name', { index: 0 }),
    birthday: Projection.attr('Birthday', { index: 1 })
  });
};
