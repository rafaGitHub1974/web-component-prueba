import { App } from 'vue'
import confirmationService from './ui/confirmationService'
import primeComponent from './ui/primeComponent'
import toast from './ui/toast'

const definePlugin = (app: App<Element>) => {
  const vue = app
  vue.use(primeComponent)
  vue.use(toast)
  vue.use(confirmationService)
}

export default definePlugin
