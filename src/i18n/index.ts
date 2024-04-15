import { createI18n } from "vue-i18n"
import de from "./locales/de.json"
import en from "./locales/en.json"
import es from "./locales/es.json"
import ru from "./locales/ru.json"
import zh from "./locales/zh.json"

export default createI18n({
  locale: "es",
  fallbackLocale: "en",
  globalInjection: true,
  warnHtmlMessage: false,
  legacy: false,
  messages: {
    es,
    en,
    ru,
    de,
    zh,
  },
})

export const availableLocales = {
  es: "Español",
  en: "English",
  ru: "Русский",
  de: "Deutsch",
  zh: "简体中文",
}
