

import {vue} from '../main.js';

export const AuthService = {

    state: {
        dadosUsuario: {}
    },

    login(username, password) {

        console.log('hello');
        // Vue.http.get('https://newsapi.org/v1/sources?language=en')


        return vue.$http.get('https://yesno.wtf/api/');
        // return this._httpResource.get('https://yesno.wtf/api/');

    },

    getAuthorizationToken() {
        return window.localStorage.getItem('token');
    },


    getDadosUsuario() {
        return this.dadosUsuario;
    }



};