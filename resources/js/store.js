import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiURL: `${process.env.APP_URL}/api`,
        serverPath: 'http://127.0.0.1:8000'
    },
    mutations: {},
    actions: {}
});
