import i18next from 'i18next';

i18next.init({
  fallbackLng: 'en',
  resources: {
    en: {
      translations: require('../languages/english/translations.json')
    },
    cn: {
      translations: require('../languages/chinese/translations.json')
    },
    jp: {
      translations: require('../languages/japanese/translations.json')
    },
    ko: {
      translations: require('../languages/korean/translations.json')
    },
    th: {
      translations: require('../languages/thai/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
});

i18next.languages = ['zh-Hant', 'en'];

export default i18next;