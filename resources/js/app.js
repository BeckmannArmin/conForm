import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import UUID from 'vue-uuid';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import BootstrapVue from 'bootstrap-vue';
import FlashMessage from '@smartweb/vue-flash-message';

Vue.use(UUID);
Vue.use(BootstrapVue);
Vue.use(FlashMessage);
Vue.component("kanban-board", require("./components/KanbanBoard.vue").default);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
