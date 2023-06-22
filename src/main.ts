import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

const app = createApp(App)
library.add(fas)
app.use(pinia)
app.use(router)

app.component('vex-icon', FontAwesomeIcon).mount('#app')
