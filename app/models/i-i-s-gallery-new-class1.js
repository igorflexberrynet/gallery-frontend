import { Model as NewClass1Mixin, defineNamespace } from
  '../mixins/regenerated/models/i-i-s-gallery-new-class1';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, NewClass1Mixin, {

});

defineNamespace(Model);
export default Model;
