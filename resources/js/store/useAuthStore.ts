
import { defineStore } from "pinia"
import { ref } from "vue"
import router from "@/Router"
import axios from "@/modules/axios"


export const useAuthStore = defineStore('Auth', () => {
    const user = ref(null)
    const shop = ref(null)

    async function login(data) {
        const result = await axios.post('login', data)
        if (result.status == 299) return result.data
        else {
            localStorage.setItem('token', `${result.data.type} ${result.data.token}`) // local
            await getUser()
            router.push({ name: 'admin', params: {id: 1} })
        }
    }


    async function getUser() {

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
        await axios.get('user').then(({ data }) => {
            user.value = data
        }).catch(() => { console.clear() })

    }


    async function register(props) {
        const result = await axios.post('register', props)
        if (result.status == 200) login(props)
    }

    async function logout() {
        const data = await axios.get('logout')

        if (data.status == 200) {
            axios.defaults.headers.common['Authorization'] = null
            localStorage.removeItem('token')
            user.value = null
            router.push({ name: 'login' })
        }
    }

    return { user, shop, getUser, login, register, logout }
})