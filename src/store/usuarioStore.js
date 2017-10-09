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

        }
    }

});