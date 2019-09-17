import { Model as AuthorMixin, defineNamespace, defineProjections } from
  '../mixins/regenerated/models/i-i-s-gallery-author';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, AuthorMixin, {

});

defineNamespace(Model);
defineProjections(Model);
export default Model;
