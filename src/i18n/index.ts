import { createI18n } from 'vue-i18n'
import es from './locales/es.json'
import en from './locales/en.json'

export default createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  globalInjection: true,
  warnHtmlMessage: false,
  legacy: false,
  messages: {
    es,
    en
  }
})

export const availableLocales = {
  en: 'English',
  es: 'Español'
}
