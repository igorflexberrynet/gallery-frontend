import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISGalleryAuthorLForm from './forms/i-i-s-gallery-author-l';
import IISGalleryPictureLForm from './forms/i-i-s-gallery-picture-l';
import IISGalleryAuthorEForm from './forms/i-i-s-gallery-author-e';
import IISGalleryPictureEForm from './forms/i-i-s-gallery-picture-e';
import IISGalleryAuthorModel from './models/i-i-s-gallery-author';
import IISGalleryNewClass1Model from './models/i-i-s-gallery-new-class1';
import IISGalleryPictureModel from './models/i-i-s-gallery-picture';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'i-i-s-gallery-author': IISGalleryAuthorModel,
    'i-i-s-gallery-new-class1': IISGalleryNewClass1Model,
    'i-i-s-gallery-picture': IISGalleryPictureModel,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        gallery: {
          caption: 'gallery',
          title: 'gallery',
          'i-i-s-gallery-picture-l': {
            caption: 'i-i-s-gallery-picture-l',
            title: 'i-i-s-gallery-picture-l'
          },
          'i-i-s-gallery-author-l': {
            caption: 'i-i-s-gallery-author-l',
            title: 'i-i-s-gallery-author-l'
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-gallery-author-l': IISGalleryAuthorLForm,
    'i-i-s-gallery-picture-l': IISGalleryPictureLForm,
    'i-i-s-gallery-author-e': IISGalleryAuthorEForm,
    'i-i-s-gallery-picture-e': IISGalleryPictureEForm,
  },

});

export default translations;
