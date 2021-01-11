import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiURL: `${process.env.APP_URL}/api`,
        serverPath: `${process.env.APP_URL}`
    },
    mutations: {},
    actions: {}
});
