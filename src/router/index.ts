import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [{
        path : '/',
        name : 'shell',
        component : () => import('./../views/Shell.vue'),
        meta : {
            routes : [{
                icon : 'gauge-high',
                path : '/',
                name : 'Dashboard',
            }, {
                icon : 'gauge-high',
                path : 'user',
                name : 'Users',
            }]
        },
        children : [{
            path : '',
            name : 'home',
            component : HomeView,
            children : [{
                path : '/',
                name : 'Dashboard',
                component : () => import('./../views/Dashboad.vue')
            }, {
                path : '/user',
                name : 'Users',
                component : () => import('./../views/Users.vue')
            }]
        }]

    }]
})

export default router
