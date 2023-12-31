import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
const config = {
  translations: {
    en: { lang },
    uk: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'nav',
      loader: async () => (await import('./en/nav.json')).default,
    },
    {
      locale: 'en',
      key: 'home',
      routes: ['', '/'],
      loader: async () => (await import('./en/home.json')).default,
    },
    {
      locale: 'uk',
      key: 'home',
      routes: ['', '/'],
      loader: async () => (await import('./uk/home.json')).default,
    },
    {
      locale: 'uk',
      key: 'nav',
      loader: async () => (await import('./uk/nav.json')).default,
    },
  ],
};

export const defaultLocale = 'en';

export const { t, locale, locales, loading, addTranslations, loadTranslations, translations, setRoute, setLocale } = new i18n(config);

// Translations logs
loading.subscribe(async ($loading) => {
  if ($loading) {
    console.log('Loading translations...');

    await loading.toPromise();
    console.log('Updated translations', translations.get());
  }
});