import { Serializer as PictureSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gallery-picture';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PictureSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
