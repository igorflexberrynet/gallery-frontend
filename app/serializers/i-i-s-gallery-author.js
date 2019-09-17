import { Serializer as AuthorSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gallery-author';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(AuthorSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
