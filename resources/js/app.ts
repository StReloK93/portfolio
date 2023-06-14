import { createApp } from "vue"
import { useAuthStore } from './store/useAuthStore'
import { createPinia } from 'pinia'


import App from './Components/App.vue'
import router from "./Router"



const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

const store = useAuthStore()

async function init(){
    await store.getUser()
    app.use(router)
    app.mount("#app")
}
init()