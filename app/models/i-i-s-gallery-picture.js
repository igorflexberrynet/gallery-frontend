import { Model as PictureMixin, defineNamespace, defineProjections } from
  '../mixins/regenerated/models/i-i-s-gallery-picture';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, PictureMixin, {

});

defineNamespace(Model);
defineProjections(Model);
export default Model;
