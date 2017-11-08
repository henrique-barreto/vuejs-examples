<template>

    <section class="section">

        <div class="page-info">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/area-segura/home">Home</router-link>
                </li>
                <li class="breadcrumb-item active">Solicitação de 2° via CRV</li>
            </ol>
            <titulo-pagina :title="'Solicitação de 2° via CRV'"
                           :tipo="'primario'"></titulo-pagina>
            <p>Solicitação de 2° via CRV</p>
        </div>
        <!--fim page-info-->


        <div class="conteudo" v-if="!loading">


            <div class="emitir-2-via" v-if="vinculosSemSolicitacoes && vinculosSemSolicitacoes.length > 0">
                <table class="table table-responsive">
                    <thead>
                    <tr>
                        <th scope="col">Placa</th>
                        <th scope="col">Marca/Modelo</th>
                        <th scope="col">Ano Fab./Modelo</th>
                        <th scope="col">Solicitação</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="vinculo in vinculosSemSolicitacoes">
                        <td>{{ vinculo.placa }}</td>
                        <td>{{ vinculo.marcaModelo }}</td>
                        <td>{{ vinculo.anoFabMod }}</td>
                        <td>
                            <button class="btn btn-success btn-sm" @click="goTermo(vinculo)">Emitir <i class="fa fa-barcode"
                                                                             aria-hidden="true"></i></button>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>

            <div class="solicitacoes">
                <strong>Solicitações</strong>
                <table class="table table-responsive">
                    <thead>
                    <tr>
                        <th scope="col">Placa</th>
                        <th scope="col">Data</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Status</th>
                        <th scope="col">2º via do Boleto</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="solicitacao in solicitacoes">
                        <td>{{ solicitacao.placa | placaFilter }}</td>
                        <td>{{ solicitacao.data | yyyymmddFilter}}</td>
                        <td>{{ solicitacao.hora | horaFilter }}</td>
                        <td>{{ solicitacao.descStatus }}</td>
                        <td>
                            <span v-if="solicitacao.codStatus === '01'">
                                <button class="btn btn-success btn-sm" @click="reemitirBoleto(solicitacao)">Emitir <i class="fa fa-barcode"
                                                                                 aria-hidden="true"></i></button>
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>

        </div>
        <div v-else>
            <spinner :tipo="'md'"></spinner>
        </div>

    </section>


</template>

<script>


    import TituloPagina from '../../../../shared/types/TituloPagina.vue';
    import {usuarioStore} from '../../../../store/usuarioStore.js';
    import {crv2ViaStore} from './crv2ViaStore.js';
    import {VeiculoService} from "../../../../services/veiculoService";
    import Spinner from "../../../../shared/types/Spinner.vue";


    export default {

        computed: {
            vinculos: function () {
                return usuarioStore.getters.dadosUsuarioLogado.vinculos;
            },
            vinculosSemSolicitacoes: function () {
                let vinculos = usuarioStore.getters.dadosUsuarioLogado.vinculos;
//                return vinculos;
                return vinculos.filter(vinculo => {
                    for (let solicitacao of this.solicitacoes) {
                        if (vinculo.placa === solicitacao.placa && solicitacao.codStatus === '01')
                            return false;
                    }
                    return true;
                });
            }
        },
        methods: {

            goTermo: function(vinculo) {
                crv2ViaStore.commit('setChassi', {chassi: vinculo.chassi, reemitir: false});
                this.$router.push({path: '/area-segura/segunda-via-crv/termo'});
            },
            reemitirBoleto: function(solicitacao) {
                crv2ViaStore.commit('setChassi', {chassi: solicitacao.chassi, reemitir: true});
                this.$router.push({path: '/area-segura/segunda-via-crv/boleto'});
            }

        },
        data() {
            return {
                solicitacoes: [],
                loading: true
            }
        },
        created: function () {
            new VeiculoService(this.$http).findSolicitacoesCrv().then(
                response => {
                    this.solicitacoes = response.body;
                    this.loading = false;
                    this.$forceUpdate();
                },
                error => {
                    this.loading = false;
                    if (error.status === 500)
                        this.$router.push({path: '/500'});
                }
            );
        },
        components: {
            'titulo-pagina': TituloPagina,
            'spinner': Spinner
        }
    }

</script>


<style scoped>

    .solicitacoes {
        margin-top: 20px;
    }


</style>