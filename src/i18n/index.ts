import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

export default createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  globalInjection: true,
  legacy: false,
  messages
})

export const availableLocales = {
  en: 'English',
  es: 'Español'
}
