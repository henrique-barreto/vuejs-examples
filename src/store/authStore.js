import Vue from 'vue';
import Vuex from 'vuex';
// import VueLocalStorage from 'vue-ls';
import createPersistedState from 'vuex-persistedstate'

// const optionsLS = {
//     namespace: 'vuejs__'
// };

// Vue.use(VueLocalStorage);
Vue.use(Vuex);


export const authStore = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        authorizationToken: null
    },
    getters: {
        authorizationToken: state => {

            return state.authorizationToken;
            // // let token =  Vue.ls.get(state.tokenName);
            // let tokenString = window.localStorage.getItem(state.tokenName);
            //
            //
            //
            // if (tokenString) {
            //     console.log('geting token on authstore');
            //     let tokenObect = JSON.parse(tokenString);
            //     console.log(tokenObect);
            //     return tokenObect;
            // } else {
            //     console.log('sem token no local storage');
            //     return null;
            // }
        }
    },
    mutations: {
        setAuthorizationToken: (state, payload) => {
            // let token = {token: payload};
            // window.localStorage.setItem(state.tokenName, JSON.stringify(token));
            // Vue.ls.set(state.tokenName, payload);
            state.authorizationToken = payload;
        },
        clearCredentials: state => {
            // state.dadosUsuarioLogado = {};
            // Vue.ls.remove(state.tokenName);
            // window.localStorage.removeItem(state.tokenName);
            state.authorizationToken = null;
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