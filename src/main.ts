import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import VueKatex from '@hsorby/vue3-katex'
import 'katex/dist/katex.min.css'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  globalInjection: true,
  messages
})
const app = createApp(App)

app.use(i18n)
app.use(VueKatex)

app.mount('#app')
