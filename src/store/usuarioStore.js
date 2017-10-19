import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export const usuarioStore = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        dadosUsuarioLogado: {}
    },
    getters: {
        dadosUsuarioLogado: state => {
            return state.dadosUsuarioLogado
        }
    },
    mutations: {
        setDadosUsuario: (state, payload) => {
            state.dadosUsuarioLogado = payload;
        },
        setVinculosVeiculo: (state, payload) => {
            state.dadosUsuarioLogado.vinculos = payload;
        }
    }
});