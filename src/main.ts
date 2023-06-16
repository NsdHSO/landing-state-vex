import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import {
    FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";

const app = createApp(App)
library.add(fas)
app.use(createPinia())
app.use(router)

app.component('icon',
    FontAwesomeIcon)
    .mount('#app')
