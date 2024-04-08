import ConfirmationService from 'primevue/confirmationservice'
import { App } from 'vue'

export default {
  install: (app: App<Element>) => {
    const vue = app
    vue.use(ConfirmationService)
  }
}
