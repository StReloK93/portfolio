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



// Salom!! Mening ismim Aziz. Men 1993-yil
// Navoiy viloyati uchquduq shaxrida tug'ilganman.
// Dasturlashga 2015 yilda universitietni 2 kursida
// qiziqib qolganman. Shundan buyon bu sohada o'z bilimimni
// oshirib kelaman. Ayni damda Fullstack dasturchiman  Internet
// magazin CRM sistema , ERP sistema, telegram botlar va turli
// xil xisob kitob dasturlarini ishlab chiqqanman.

//Portfolio 
