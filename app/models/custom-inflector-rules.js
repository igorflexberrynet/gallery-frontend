import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('picture', 'Pictures');
inflector.irregular('author', 'Authors');
inflector.irregular('class1', 'Class1s');

export default {};
