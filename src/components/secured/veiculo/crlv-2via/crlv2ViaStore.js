import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const crlv2ViaStore = new Vuex.Store({
    state: {
        chassi: '',
        bordero: {},
        reemitir: false
    },
    getters: {
        chassi: state => {
            return state.chassi;
        },
        bordero: state => {
            return state.bordero;
        },
        reemitir: state => {
            return state.reemitir;
        }

    },
    mutations: {
        setChassi: (state, payload) => {
            state.chassi = payload.chassi;
            state.reemitir = payload.reemitir;
        },
        setBordero: (state, payload) => {
            state.bordero = payload;
        }

    }
});