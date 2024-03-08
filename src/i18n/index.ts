import { createI18n } from 'vue-i18n'
import es from './locales/es.json'

export default createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  globalInjection: true,
  warnHtmlMessage: false,
  legacy: false,
  messages: {
    es
  }
})

export const availableLocales = {
  es: 'Español'
}
