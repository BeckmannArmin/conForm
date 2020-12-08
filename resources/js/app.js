import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as auth from '../js/services/auth_service';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import BootstrapVue from 'bootstrap-vue';
import FlashMessage from '@smartweb/vue-flash-message';

import Echo from "laravel-echo"

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: false,
    wsHost: window.location.hostname,
    wsPort: 6001,
    disableStats: true,
    auth: {
        headers: {
            Authorization: 'Bearer '+ auth.getAccessToken()
        },
    },
});

Vue.use(BootstrapVue);
Vue.use(FlashMessage);
Vue.component("kanban-board", require("./components/KanbanBoard.vue").default);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
