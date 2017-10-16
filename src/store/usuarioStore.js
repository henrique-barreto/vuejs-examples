import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const usuarioStore = new Vuex.Store({

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
    },
    actions: {
        getDadosUsuarioLogado: context => {
            console.log('getDadosUsuarioLogado() ');
            return new Promise((resolve, reject) => {

                let dados = context.getters.dadosUsuarioLogado;
                if (dados.cpf)
                    return resolve(dados);
                else {
                    Vue.http.get('area-segura/usuarioLogado')
                        .then(
                            response => {
                                context.commit('setDadosUsuario', response.body);
                                resolve();
                            },
                            error => {
                                reject(error);
                            });
                }

            });

        },
        vincularVeiculo: (context, payload) => {
            let placa = payload;
            placa = placa.split('-').join('');
            placa = placa.toUpperCase();
            return new Promise((resolve, reject) => {
                Vue.http.post('area-segura/vinculoVeiculo/' + placa, {})
                    .then(
                        response => {
                            context.commit('setVinculosVeiculo', response.body);
                            resolve();
                        },
                        error => {
                            reject(error);
                        });
            });
        },
        desvincularVeiculo: (context, payload) => {

            return new Promise((resolve, reject) => {
                Vue.http.delete('area-segura/vinculoVeiculo/' + payload)
                    .then(
                        response => {
                            context.commit('setVinculosVeiculo', response.body);
                            resolve();
                        },
                        error => {
                            reject(error);
                        });
            });
        }
    }

});