import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const authStore = new Vuex.Store({

    state: {
        tokenName: 'authtoken'
    },
    getters: {
        authorizationToken: state => {
            console.log('authorizationToken() ' + window.localStorage.getItem(state.tokenName));
            return window.localStorage.getItem(state.tokenName);
        }
    },
    mutations: {
        setAuthorizationToken: (state, payload) => {
            window.localStorage.setItem(state.tokenName, payload);
        },
        clearCredentials: state => {
            state.dadosUsuarioLogado = {};
            window.localStorage.removeItem(state.tokenName);
        }
    },
    actions: {
        login: (context, payload) => {
            return new Promise((resolve, reject) => {
                let promisse = Vue.http.post('login', payload);
                promisse.then(
                    response => {
                        let authToken = response.headers.get('authorization');
                        context.commit('setAuthorizationToken', authToken);
                        resolve(response);
                    },
                    error => {
                        reject(error);
                    });
            });

        },
        logout: context => {
            return new Promise((resolve, reject) => {
                context.commit('clearCredentials');
                resolve();
            });
        }
    }

});