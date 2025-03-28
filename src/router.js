import { createRouter, createWebHistory } from 'vue-router'
import Home from './home.vue'
import App from './App.vue'

const routes = [
    { path: '/home', name: 'Home', component: Home },
    { path: '/', name: 'App', component: App }
]
 
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
