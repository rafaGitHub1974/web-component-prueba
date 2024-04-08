import ToastService from 'primevue/toastservice'
import { App } from 'vue'

export default {
  install: (app: App<Element>) => {
    const vue = app
    vue.use(ToastService)
  }
}
