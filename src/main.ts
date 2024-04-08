import './assets/main.css'

import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

//in main.js
// import definePlugin from './plugins/plugins'

// import primeComponent from '@/plugins/ui/primeComponent'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'

import App from './App.ce.vue'
import router from './router'
// @ts-ignore
import { vueDefineCustomElement } from './shared/createCustomeElement.js'

// const app = createApp(App)

const pinia = createPinia()

// app.use(router)
// app.use(PrimeVue, { ripple: true })
// const Primevue1 = PrimeVue
const plugins = [pinia, PrimeVue, router]
const app = vueDefineCustomElement(App, { plugins })
customElements.define('wc-animals', app)
