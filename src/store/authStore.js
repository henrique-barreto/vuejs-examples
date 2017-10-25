import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export const authStore = new Vuex.Store({
    plugins: [createPersistedState({
        key: 'auth'
    })],
    state: {
        authorizationToken: null
    },
    getters: {
        authorizationToken: state => {
            return state.authorizationToken;
        }
    },
    mutations: {
        setAuthorizationToken: (state, payload) => {
            console.log('setAuthorizationToken() token ' + payload);
            state.authorizationToken = payload;
        },
        clearCredentials: state => {
            state.authorizationToken = null;
        }
    },
    actions: {
        logout: context => {
            return new Promise((resolve, reject) => {
                context.commit('clearCredentials');
                resolve();
            });
        }
    }

});