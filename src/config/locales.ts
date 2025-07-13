export const DEFAULT_LOCALE_SETTING: string = 'en';

interface LocaleSetting {
  [key: Lowercase<string>]: {
    label: string;
    lang?: string;
    dir?: 'rtl' | 'ltr';
  };
}

export const LOCALES_SETTING: LocaleSetting = {
  en: {
    label: 'English',
    lang: 'en-US',
  },
  es: {
    label: 'Español',
    lang: 'es-MX',
  },
};
