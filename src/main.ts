import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
// @ts-ignore
import VueKatex from '@hsorby/vue3-katex'
import 'katex/dist/katex.min.css'
import VueClickAway from 'vue3-click-away'

const app = createApp(App)

app.use(i18n)
app.use(VueKatex)
app.use(VueClickAway)

app.mount('#app')
