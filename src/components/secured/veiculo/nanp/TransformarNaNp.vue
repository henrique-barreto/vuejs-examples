<template>

    <section class="section">

        <div class="page-info">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/area-segura/home">Home</router-link>
                </li>
                <li class="breadcrumb-item active">Notificação de Autuação para Penalidade</li>
            </ol>
            <titulo-pagina :title="'Transformar Notificação de Autuação em Penalidade'"
                           :tipo="'primario'"></titulo-pagina>
            <p>Transforme notificações de autuação em penalidade</p>
        </div>
        <!--fim page-info-->

        <div class="selecionar-veiculo">
            <label>Selecione o veículo</label>
            <select class="form-control"
                    name="veiculoSelecionado"
                    id="purchase_order_number"
                    @change="mudouSelecao"
                    v-model="veiculoSelecionado">
                <option v-for="vinculo in dadosUsuario.vinculos"
                        v-bind:value="vinculo">
                    {{ vinculo.placa + ' - ' + vinculo.marcaModelo}}
                </option>
            </select>
        </div>
        <!--fim selecionar-veiculo-->

        <div class="veiculo-selecionado" v-if="veiculoSelecionado">
            <label>Veículo selecionado</label>
            <div class="veiculo-info">
                <div class="item1"><strong>Placa </strong> {{ veiculoSelecionado.placa }}</div>
                <div class="item2"><strong>Renavam </strong> {{ veiculoSelecionado.renavam }}</div>
                <div class="item3"><strong>Marca/Modelo </strong> {{ veiculoSelecionado.marcaModelo }}</div>
            </div>
            <div class="clearfix"></div>


        </div>
        <!--fim veiculo-selecionado-info-->

        <div class="autos" v-if="infracoesNA && loadingInfracoes === false">
            <strong>Infrações</strong>

            <div v-if="infracoesNA.length == 0">
                <p>Este veículo não possui nenhuma infração elegível para virar PENALIDADE</p>
            </div>

            <div class="autos-list">
                <div class="auto" v-if="infracoesNA.length > 0" v-for="infracao in infracoesNA">


                    <div class="auto-select">
                        <div class="checkbox-btn">
                            <div class="checklabel">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input"
                                           :value="infracao"
                                           v-model="autosMarcados">
                                </label>
                            </div>
                        </div>
                        <div class="auto-toggle" @click="detalharInfracao(infracao)">
                            <div class="auto-toggle-info">
                                {{ infracao.numeroAuto }} - {{ infracao.descInfracao }}
                            </div>
                        </div>
                    </div>

                    <div class="auto-info" v-if="infracao.detalhada && !infracao.loading && infracao.show">


                        <div class="group">
                            <div class="group-label">
                                <strong>Dados Do Veículo</strong>
                            </div>
                            <div class="group-info">
                                <div class="row">
                                    <div class="col-6 col-md-3">
                                        <strong>Placa </strong> {{ infracao.detalhada.veiculo.placa }}
                                    </div>
                                    <div class="col-6 col-md-3">
                                        <strong>UF </strong> {{ infracao.detalhada.veiculo.uf }}
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <strong>Marca/modelo </strong> {{ infracao.detalhada.veiculo.marcaModelo }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="group">
                            <div class="group-label">
                                <strong>Dados da Infração</strong>
                            </div>
                            <div class="group-info">
                                <div class="row">
                                    <div class="col-6 col-md-3">
                                        <strong>Código </strong> {{ infracao.detalhada.infracao.codigo }}
                                    </div>
                                    <div class="col-6 col-md-3">
                                        <strong>Tipo Infrator </strong> {{ infracao.detalhada.infracao.tipoInfrator }}
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <strong>Desdobramento </strong> {{ infracao.detalhada.infracao.desdobramento }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 col-md-3">
                                        <strong>Competência </strong> {{ infracao.detalhada.infracao.competencia }}
                                    </div>
                                    <div class="col-6 col-md-3">
                                        <strong>Pontos </strong> {{ infracao.detalhada.infracao.pontos }}
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <strong>Grupo </strong> {{ infracao.detalhada.infracao.grupo }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="group">
                            <div class="group-label">
                                <strong>Dados do Cometimento</strong>
                            </div>
                            <div class="group-info">
                                <div class="row">
                                    <div class="col-6 col-md-3">
                                        <strong>Data </strong> {{ infracao.detalhada.cometimento.data }}
                                    </div>
                                    <div class="col-6 col-md-3">
                                        <strong>Hora</strong> {{ infracao.detalhada.cometimento.hora }}
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <strong>UF </strong> {{ infracao.detalhada.cometimento.uf }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-3">
                                        <strong>Município </strong> {{ infracao.detalhada.cometimento.municipio }}
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <strong>Local </strong> {{ infracao.detalhada.cometimento.local }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="group">
                            <div class="group-label">
                                <strong>Dados da Notificação</strong>
                            </div>
                            <div class="group-info">
                                <div class="row">
                                    <div class="col-6 col-md-3">
                                        <strong>Órgão Autuador </strong> {{ infracao.detalhada.notificacao.orgaoAutuador
                                        }}
                                    </div>
                                    <div class="col-6 col-md-3">
                                        <strong>Data autuação</strong>
                                        {{ infracao.detalhada.notificacao.dataNotificacaoAutuacao }}
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <strong>Limite defesa prévia </strong>
                                        {{ infracao.detalhada.notificacao.limiteDefesaPrevia }}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="auto-info" v-if="infracao.detalhada && infracao.loading && infracao.show">
                        <spinner :tipo="'sm'"></spinner>
                        <br/>
                    </div>


                </div>
            </div>
            <!--fim autos-list-->

            <div class="btns-form" v-if="infracoesNA.length > 0">
                <button type="button" class="btn btn-outline-secondary" @click="marcarTodos">Marcar todos</button>
                <button type="button" class="btn btn-success" @click="continuar">Continuar</button>
            </div>
            <!--fim btns-form-->

        </div>
        <!--fim autos-->
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

        data() {

            return {
                veiculoSelecionado: null,
                loadingInfracoes: false,
                infracoesNA: [],
                infracaoDetalhada: null,
                autosMarcados: []
            }
        },
        computed: {
            dadosUsuario: function () {
                return usuarioStore.getters.dadosUsuarioLogado;
            }
        },
        methods: {
            consultarInfracoes: function (placa) {
                this.autosMarcados = [];
                this.loadingInfracoes = true;
                new VeiculoService(this.$http).findAutosNAElegiveisParaNP(placa).then(
                    response => {
                        this.infracoesNA = response.body;
                        this.loadingInfracoes = false;
                    },
                    error => {
                        this.loadingInfracoes = false;
                        if (error.status === 500)
                            this.$router.push({path: '/500'});
                    }
                );
            },
            mudouSelecao: function (event) {
                this.consultarInfracoes(this.veiculoSelecionado.placa);
            },
            detalharInfracao: function (infracao) {

                if (infracao.show) {
                    infracao.show = false;
                    this.$forceUpdate();
                    return;
                }

                if (infracao.detalhada && infracao.detalhada.cometimento) {
                    infracao.show = true;
                    this.$forceUpdate();
                    return;
                }

                infracao.loading = true;
                infracao.show = true;
                infracao.detalhada = {};
                this.$forceUpdate();
                new VeiculoService(this.$http).findInfracaoDetalhada(infracao.numeroAuto, infracao.numeroSequencial, infracao.codigoOrgaoAutuador).then(
                    response => {
                        infracao.detalhada = response.body;
                        infracao.loading = false;
                        this.$forceUpdate();
                    },
                    error => {
                        infracao.loading = false;
                        if (error.status === 500)
                            this.$router.push({path: '/500'});
                    }
                );
            },
            marcarTodos: function () {

                this.autosMarcados = this.infracoesNA;

            },
            continuar: function () {
                if (this.autosMarcados.length === 0) {
                    this.$toast.error({
                        title: '',
                        message: 'Selecione pelo menos uma infração para transformar em penalidade'
                    });
                    return;
                }
                nanpStore.commit('setVeiculo', this.veiculoSelecionado);
                nanpStore.commit('setAutos', this.autosMarcados);
                this.$router.push({path: '/area-segura/transformar-na-np/confirmar'});
            }
        },
        components: {
            'titulo-pagina': TituloPagina,
            'spinner': Spinner
        },
        created: function () {
            this.veiculoSelecionado = this.dadosUsuario.vinculos[0];
            this.consultarInfracoes(this.veiculoSelecionado.placa);
        }


    }

</script>


<style scoped>


    label {
        font-weight: bold;
    }
    /*estrutura*/
    .selecionar-veiculo {
        /*background-color: #f4ffa7;*/
    }

    .veiculo-selecionado {
        margin-top: 20px;
    }

    .autos {
        margin-top: 20px;
        /*background-color: #e9d3ff;*/
    }

    .autos .autos-list {
        background-color: #fcffc8;
    }

    .autos .btns-form {
        margin-top: 20px;
        /*background-color: #a3ffa7;*/
        text-align: center;
    }

    /* ====================================================================== */
    /* ====================== autos formatacao toggle ======================= */
    /* ====================================================================== */

    .auto {
        font-size: 0.9em;
    }

    .auto-select {
        height: 60px;
        max-height: 60px;
    }

    .autos-list .auto:last-child .auto-toggle, .autos-list .auto:last-child .checkbox-btn {
        border-bottom: 1px solid #a1a1a1;
    }

    .checkbox-btn {
        background-color: #fff;
        max-width: 30px;
        line-height: 60px;
        text-align: center;
        float: left;
        max-height: 60px;
    }

    .checklabel {
        max-height: 60px;
        border-left: 1px solid #a1a1a1;
        border-top: 1px solid #a1a1a1;
    }

    .checklabel label {
        min-width: 30px;
        cursor: pointer;
    }

    .checklabel:hover {
        /*background-color: #f1f1f1;*/
    }

    .auto-toggle {
        background-color: #fff;
        border-left: 1px solid #a1a1a1;
        border-right: 1px solid #a1a1a1;
        border-top: 1px solid #a1a1a1;

        float: left;
        height: 60px;
        width: calc(100% - 30px);
        padding-left: 8px;
        padding-right: 5px;
        line-height: 60px;

        word-break: break-all;
        overflow: hidden;
    }

    .auto-toggle-info {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .autos-list .auto:last-child .auto-info {
        border-bottom: 1px solid #a1a1a1;
        border-top: none;
    }

    .auto-toggle:hover {
        cursor: pointer;
        background-color: #f1f1f1;
    }

    /* ====================================================================== */
    /* ====================== autos formatacao toggle ======================= */
    /* ====================================================================== */

    .auto-info {
        background-color: #fff;
        border-left: 1px solid #a1a1a1;
        border-right: 1px solid #a1a1a1;
        border-top: 1px solid #a1a1a1;
        padding: 10px;
    }

    @media (min-width: 992px) {

        .veiculo-selecionado strong {
            display: block;
        }

        .veiculo-selecionado .item1 {
            float: left;
            width: 10%;
        }

        .veiculo-selecionado .item2 {
            float: left;
            width: 20%;
        }

        .veiculo-selecionado .item3 {
            float: left;
            width: 70%;
        }
    }

    /*detalhamento infracao*/
    .auto-info .group .group-label {
        text-align: center;
        margin-bottom: 8px;
        border-bottom: 1px solid #e0e0e0;
    }

    .auto-info .group {
        font-size: 0.9em;
    }

    /* ====================================================================== */
    /* ============================= groups ================================= */
    /* ====================================================================== */

    .auto-info {
        background-color: #f1f1f1;
    }
    .group strong {
        display: block;
    }
    .group:not(:first-child) {
        padding-top: 10px;
    }

    /*.infracao-wrapper {*/
    /*background-color: #e2ffe6;*/
    /*margin: 0 auto;*/
    /*}*/

    /*.autos {*/
    /*margin-top: 10px;*/
    /*}*/

    /*.auto {*/
    /*height: 60px;*/
    /*background-color: #fdd4ff;*/
    /*}*/

    /*.checkbox-btn {*/
    /*background-color: #fff;*/
    /*max-width: 30px;*/
    /*line-height: 60px;*/
    /*text-align: center;*/
    /*float: left;*/
    /*max-height: 60px;*/
    /*}*/

    /*.checklabel {*/
    /*max-height: 60px;*/
    /*border-left: 1px solid #a1a1a1;*/
    /*border-top: 1px solid #a1a1a1;*/
    /*}*/

    /*.checklabel label {*/
    /*min-width: 30px;*/
    /*cursor: pointer;*/
    /*}*/

    /*.checklabel:hover {*/
    /*background-color: #f1f1f1;*/
    /*}*/

    /*.checklabel * {*/
    /*cursor: pointer;*/

    /*background-color: red;*/
    /*}*/

    /*.autos-wrapper:last-child {*/
    /*!*border-bottom: 1px solid #a1a1a1;*!*/
    /*background-color: red !important;*/
    /*height: 400px !important;*/
    /*}*/

    /*.auto-toggle {*/
    /*background-color: #fff;*/
    /*border-left: 1px solid #a1a1a1;*/
    /*border-right: 1px solid #a1a1a1;*/
    /*border-top: 1px solid #a1a1a1;*/

    /*float: left;*/
    /*height: 100%;*/
    /*width: calc(100% - 30px);*/
    /*padding-left: 8px;*/
    /*padding-right: 5px;*/
    /*line-height: 60px;*/

    /*word-break: break-all;*/
    /*overflow: hidden;*/
    /*}*/

    /*.auto-toggle-info {*/
    /*white-space: nowrap;*/
    /*overflow: hidden;*/
    /*text-overflow: ellipsis;*/
    /*}*/

    /*.autos .autos-wrapper:last-child .auto .auto-toggle {*/
    /*!*border-top: none;*!*/
    /*border-bottom: 1px solid #a1a1a1;*/
    /*}*/

    /*.auto-toggle:hover {*/
    /*cursor: pointer;*/
    /*background-color: #f1f1f1;*/
    /*}*/

    /*.veiculo-selecionado {*/

    /*}*/

    /*.auto-info {*/
    /*background-color: #fff;*/
    /*border-left: 1px solid #a1a1a1;*/
    /*border-right: 1px solid #a1a1a1;*/
    /*border-top: 1px solid #a1a1a1;*/
    /*!*border-bottom: 1px solid #a1a1a1;*!*/
    /*padding: 10px;*/
    /*}*/

    /*.autos:last-child .autos-wrapper .auto-info {*/
    /*border-top: none;*/
    /*border-bottom: 1px solid #a1a1a1;*/
    /*}*/

    /*@media (min-width: 992px) {*/

    /*.veiculo-selecionado strong {*/
    /*display: block;*/
    /*}*/

    /*.veiculo-selecionado .item1 {*/
    /*float: left;*/
    /*width: 10%;*/
    /*}*/

    /*.veiculo-selecionado .item2 {*/
    /*float: left;*/
    /*width: 20%;*/
    /*}*/

    /*.veiculo-selecionado .item3 {*/
    /*float: left;*/
    /*width: 70%;*/
    /*}*/
    /*}*/

    /*!*detalhamento infracao*!*/
    /*.auto-info .group .group-label {*/
    /*text-align: center;*/
    /*margin-bottom: 8px;*/
    /*border-bottom: 1px solid #e0e0e0;*/
    /*}*/

    /*.auto-info .group {*/
    /*font-size: 0.9em;*/
    /*}*/

    /*strong {*/
    /*display: block;*/
    /*}*/

    /*.group:not(:first-child) {*/
    /*padding-top: 10px;*/
    /*}*/

    /*.btns-continuar {*/
    /*text-align: right;*/
    /*margin-top: 30px;*/
    /*}*/

</style>