import Welcome from './views/Hello';
import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './views/Board.vue'
import Login from './views/Login'
import Register from './views/Register'
import ResetPassword from './views/ResetPassword'
import * as auth from './services/auth_service';

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
        beforeEnter(to, from , next) {
            if (!auth.isLoggedIn()) {
                next();
             } else {
                 next('/');
             }
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/reset-password',
        name: 'reset',
        component: ResetPassword
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