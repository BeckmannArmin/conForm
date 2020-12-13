import Welcome from './views/Hello';
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/Login'
import Register from './components/Register'
import ResetPassword from './components/ResetPassword'
import * as auth from './services/auth_service';
import KanBan from './components/KanbanBoard.vue';

Vue.use(VueRouter);

const routes = [
    {
    path: '/',
    name: 'welcome',
    component: Welcome
    },
    {
        path: '/conceptPaperCreator',
        name: 'conceptPaperCreator',
        component: () => import('./views/ConceptPaperCreator.vue')
    },
    {
        path: '/conceptPaper/lobby/:joincode',
        name: 'conceptPaper',
        component: () => import('./views/ConceptPaper.vue')
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
        path: '/kanban',
        name: 'kanban',
        component: KanBan,
    },
    {
        path: '/pusher',
        name: 'pusher',
        component: () => import('./components/PusherExample.vue')
    },
];

const router = new VueRouter({
    routes: routes,
    linkActiveClass: 'active',
    mode: 'hash'
});

export default router;