import {createRouter,createWebHistory} from "vue-router";

const routes = [
    {
        path:'/home',
        name:'Home',
        component:()=>import('../views/home.vue')
    },
    {
        path:'/',
        name:'welcome',
        component:()=>import('../views/welcome.vue')
    }
]
const router =createRouter({
    history:createWebHistory(),
    routes,
})
export default router