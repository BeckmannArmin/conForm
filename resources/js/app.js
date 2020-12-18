import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as auth from '../js/services/auth_service';
import UUID from 'vue-uuid';
import VueI18n from 'vue-i18n';
import en from '../locales/en.json';
import de from '../locales/de.json';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import ScrollAnimation from './directives/scrollanimation';

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

Vue.use(UUID);
Vue.use(BootstrapVue);
Vue.use(FlashMessage);
Vue.component("kanban-board", require("./components/KanbanBoard.vue").default);
Vue.directive('scrollanimation', ScrollAnimation);
Vue.use(VueI18n);

 const i18n = new VueI18n({
    locale: 'de', // set locale
    messages: {
        en,
        de
    }
  })


new Vue({
    el: '#app',
    router,
    i18n,
    store,
    render: h => h(App)
});
