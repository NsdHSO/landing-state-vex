import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})
pinia.use(piniaPluginPersistedState)

const app = createApp(App)
library.add(fas)
app.use(pinia)
app.use(router)

app.component('vex-icon', FontAwesomeIcon).mount('#app')
