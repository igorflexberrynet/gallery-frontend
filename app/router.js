import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-gallery-author-l');
  this.route('i-i-s-gallery-author-e',
  { path: 'i-i-s-gallery-author-e/:id' });
  this.route('i-i-s-gallery-author-e.new',
  { path: 'i-i-s-gallery-author-e/new' });
  this.route('i-i-s-gallery-picture-l');
  this.route('i-i-s-gallery-picture-e',
  { path: 'i-i-s-gallery-picture-e/:id' });
  this.route('i-i-s-gallery-picture-e.new',
  { path: 'i-i-s-gallery-picture-e/new' });
});

export default Router;
