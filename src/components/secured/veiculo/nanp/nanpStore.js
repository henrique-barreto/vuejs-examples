import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const nanpStore = new Vuex.Store({
    state: {
        veiculo: {},
        autosSelecionados: [],
        borderos: [],
        borderosSelecionados: [],
        autosErros: []
    },
    getters: {
        veiculo: state => {
            return state.veiculo;
        },
        autosSelecionados: state => {
            return state.autosSelecionados;
        },
        borderos: state => {
            return state.borderos;
        },
        borderosSelecionados: state => {
            return state.borderosSelecionados;
        },
        autosErros: state => {
            return state.autosErros;
        }
    },
    mutations: {
        setAutos: (state, payload) => {
            state.autosSelecionados = payload;
        },
        setVeiculo: (state, payload) => {
            state.veiculo = payload;
        },
        setBorderos: (state, payload) => {
            state.borderos = payload;
        },
        setAutosErros: (state, payload) => {
            state.autosErros = payload;
        },
        setBorderosSelecionados: (state, payload) => {
            state.borderosSelecionados = payload;
        }
    }
});