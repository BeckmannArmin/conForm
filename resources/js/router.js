import Welcome from './views/Hello';
import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './views/Board.vue'
import Login from './views/Login'
import Register from './views/Register'

Vue.use(VueRouter);

const routes = [
    {
    path: '/',
    name: 'welcome',
    component: Welcome
    },
    {
        path: '/categories',
        name: 'categorie',
        component: () => import('./views/Categories.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/board',
        name: 'board',
        component: Dashboard,
    }
];

const router = new VueRouter({
    routes: routes,
    linkActiveClass: 'active',
    mode: 'history'
});

export default router;