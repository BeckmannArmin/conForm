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
import JsonCSV from 'vue-json-csv'

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
Vue.directive('scrollanimation', ScrollAnimation);
Vue.use(VueI18n);
Vue.component('downloadCsv', JsonCSV);

 const i18n = new VueI18n({
    locale: 'en', // set locale
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
