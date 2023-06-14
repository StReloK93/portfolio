export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home/Index.vue'),
        children: [
            {
                path: 'home/resume',
                name: 'homeresume',
                component: () => import('@/pages/Home/Resume.vue'),
            }
        ]
    },
    {
        path: '/resume',
        name: 'resume',
        component: () => import('@/pages/Resume.vue'),
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/Login.vue'),
        meta: {
            guard: 'guest'
        }
    },
]