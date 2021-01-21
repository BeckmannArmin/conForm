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
import VueBlobJsonCsv from 'vue-blob-json-csv';

Vue.use(UUID);
Vue.use(BootstrapVue);
Vue.use(FlashMessage);
Vue.directive('scrollanimation', ScrollAnimation);
Vue.use(VueI18n);
Vue.use(VueBlobJsonCsv);

var lang = localStorage.getItem('lang');
lang = lang ? lang : 'de';

 const i18n = new VueI18n({
    locale: lang, // set locale
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
