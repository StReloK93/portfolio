import { createApp } from "vue"

import AppComponent from './Components/App.vue'
import router from "./Router"
createApp(AppComponent)
.use(router)
.mount('#app')