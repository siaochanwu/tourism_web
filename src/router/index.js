import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../components/Main.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;