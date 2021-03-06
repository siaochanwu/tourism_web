import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../components/Main.vue'),
    },
    {
        path: "/content/:ID",
        name: "content",
        component: () => import("../components/Content.vue"),
    },
        
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;