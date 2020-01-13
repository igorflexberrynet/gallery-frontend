import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Gallery',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Gallery',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gallery',
          title: 'Gallery'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        gallery: {
          caption: 'Gallery',
          title: 'Gallery',
          'i-i-s-gallery-picture-l': {
            caption: 'Picture',
            title: ''
          },
          'i-i-s-gallery-author-l': {
            caption: 'Author',
            title: ''
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-gallery-author-l': IISGalleryAuthorLForm,
    'i-i-s-gallery-picture-l': IISGalleryPictureLForm,
    'i-i-s-gallery-author-e': IISGalleryAuthorEForm,
    'i-i-s-gallery-picture-e': IISGalleryPictureEForm,
  },

});

export default translations;
