import { createRouter, createWebHistory } from "vue-router"
import routes from './routes'
import { useAuthStore } from '@/store/useAuthStore'

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
	const store = useAuthStore()
	if (store.user) {
		if (to.meta.guard === 'guest') next({ name: 'home' })
		else next()

	} else {
		if (to.meta.guard === 'auth') next({ name: 'login' })
		else next()
	}
})
export default router