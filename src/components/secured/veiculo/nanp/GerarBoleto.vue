<template>

    <section class="section">

        <div class="page-info">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/area-segura/home">Home</router-link>
                </li>
                <li class="breadcrumb-item active">Notificação de Autuação para Penalidade</li>
            </ol>
            <titulo-pagina :title="'Notificações de Penalidade'" :tipo="'primario'"></titulo-pagina>
            <p>Infrações em penalidade</p>
        </div>
        <!--fim page-info-->

        <div class="conteudo-bordero" v-if="!loading">
            <div class="lista-borderos">

                <div class="borderos" v-if="borderos && borderos.length > 0">
                    <table class="table table-responsive table-striped table-responsive">
                        <thead>
                        <tr>
                            <th class="text-center" colspan="2">Nº Auto de Infração</th>
                            <th scope="col">Data Cometimento</th>
                            <th scope="col">Descrição</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="bordero in borderos">
                            <td class="text-center">
                                <label class="form-check-label">
                                    <input type="checkbox"
                                           class="form-check-input"
                                           :value="bordero"
                                           v-model="borderosSelecionados"
                                           :checked="true">
                                </label>
                            </td>
                            <td>{{ bordero.numeroAuto }}</td>
                            <td>{{ bordero.dataCometimento }}</td>
                            <td>{{ bordero.infracaoDescricao }}</td>
                            <!--<td>{{ bordero }}</td>-->
                        </tr>
                        </tbody>
                    </table>

                    <div class="btns-boleto">
                        <button class="btn btn-success" @click="gerarBoletos">Gerar Boletos</button>
                    </div>

                </div>
                <!--borderos-->

            </div>
            <!-- lista-borderos -->

            <div class="lista-erros" v-if="erros && erros.length > 0">

                <div class="alert alert-danger">
                    <strong>Erros</strong>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adiimi culpa ipsam, iure magni, nemo quaerat quasi quisquam reprehenderit, tempore vero!</p>
                </div>

                <table class="table table-responsive table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Nº Auto de Infração</th>
                        <th scope="col">Erro</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="erro in erros">
                        <td>{{ erro.numeroAuto }}</td>
                        <td>{{ erro.observacao }}</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <!--lista-erros-->
        </div>
        <div v-else>
            <spinner :tipo="'md'"></spinner>
        </div>
    </section>
    <!--fim section-->


</template>
<script>

    import TituloPagina from '../../../../shared/types/TituloPagina.vue';
    import {usuarioStore} from '../../../../store/usuarioStore.js';
    import {VeiculoService} from "../../../../services/veiculoService";
    import Spinner from "../../../../shared/types/Spinner.vue";
    import {nanpStore} from "./nanpStore.js";

    export default {
        components: {
            'titulo-pagina': TituloPagina,
            'spinner': Spinner,
        },
        data() {
            return {
                loading: true,
                borderosSelecionados: []
            }
        },
        computed: {
            autosSelecionados: function () {
                return nanpStore.getters.autosSelecionados;
            },
            veiculo: function () {
                return nanpStore.getters.veiculo;
            },
            borderos: function () {
                return nanpStore.getters.borderos;
            },
            erros: function () {
                return nanpStore.getters.autosErros;
            }
        },
        methods: {


            gerarBoletos: function() {
                if (this.borderosSelecionados.length === 0) {
                    this.$toast.error({
                        title: '',
                        message: 'Selecione um auto de infração para gerar o boleto'
                    });
                    return;
                }
                nanpStore.commit('setBorderosSelecionados', this.borderosSelecionados);
                this.$router.push({path: '/area-segura/transformar-na-np/boleto'});
            },
            buildRequest: function () {
                let request = {placa: this.veiculo.placa, infracoes: []};
                this.autosSelecionados.forEach(function (value) {
                    request.infracoes.push({
                        numeroAuto: value.numeroAuto,
                        numeroSequencial: value.numeroSequencial,
                        codigoOrgaoAutuador: value.codigoOrgaoAutuador
                    });
                });
                return request;
            }
        },
        created: function () {
            if (!this.autosSelecionados ||
                this.autosSelecionados.length === 0 ||
                !this.veiculo) {
                this.$router.push({path: '/area-segura/transformar-na-np'});
            }
            this.loading = true;
            let request = this.buildRequest();
            new VeiculoService(this.$http).transformarNaNp(request).then(
                response => {
                    this.loading = false;
                    nanpStore.commit('setBorderos', response.body.borderos);
                    nanpStore.commit('setAutosErros', response.body.erros);
                },
                error => {
                    this.loading = false;
                    alert('Erro ao gerar penalidades');
                }
            );
        }
    }

</script>


<style scoped>

    /*.autos-list {*/
        /*margin-top: 20px;*/
    /*}*/

    /*.autos-list .table th, .autos-list .table td {*/
        /*padding-left: 4px;*/
    /*}*/

    .btns-boleto {
        text-align: center;
        margin-top: 10px;
    }

</style>