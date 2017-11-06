<template>


    <section class="section">

        <titulo-pagina :title="'Veículos'" :tipo="'primario'"></titulo-pagina>
        <p>Víncule veículos ao seu perfil</p>

        <div class="form-busca-wrapper card card-padding">
            <form @submit.prevent="buscarVeiculo">
                <div class="form-busca">
                    <label for="placa">Placa</label>
                    <div class="input-placa input-group-busca-placa">
                        <input type="text"
                               class="form-control"
                               placeholder="Digite sua placa"
                               aria-label="Buscar placa"
                               id="placa"
                               autocomplete="off"
                               v-model="placaBusca"
                               v-validate="{ required: true, length: 8 }"
                               v-mask="'AAA-####'"
                               name="placaBusca">
                        <small class="invalid-feedback" v-show="isPlacaInvalida">Placa inválida</small>
                    </div>
                    <div class="btn-placa">
                        <button class="btn btn-success btn-block"
                                type="submit"
                                v-bind:class="{'disabled': loading}">
                            <span v-html="buscarMsg"></span>
                        </button>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </form>
        </div>

        <div v-if="resultadoVeiculo" class="resultado-busca-wrapper card card-padding">
            <div class="resultado-busca">
                <label>Resultado</label>
                <div class="veiculo-info">
                    <div class="info-item placa">
                        <label>Placa</label>
                        <span>{{ resultadoVeiculo.placa }}</span>
                    </div>
                    <div class="info-item renavam">
                        <label>Renavam</label>
                        <span>{{ resultadoVeiculo.renavam }}</span>
                    </div>
                    <div class="info-item modelo">
                        <label>Modelo</label>
                        <span>{{ resultadoVeiculo.nomeMarcaModelo }}</span>
                    </div>
                </div>
                <div class="info-btn">
                    <button @click="vincular" class="btn btn-success btn-block"
                            v-bind:class="{'disabled': loadingVinculo}">
                        <span v-html="vincularMsg"></span>
                    </button>
                </div>
            </div>
        </div>

        <div class="lista-veiculos">
            <meus-veiculos v-if="dadosUsuario !== undefined" :dadosUsuarios="dadosUsuario"></meus-veiculos>
        </div>

        <div v-if="dadosUsuario && dadosUsuario.vinculos.length > 0" class="btn-servicos">
            <button class="btn btn-success" @click="goToHome">Acessar Serviços <i class="fa fa-play"
                                                                                  aria-hidden="true"></i></button>
        </div>

    </section>
</template>

<script>


    import {VeiculoService} from '../../../../services/veiculoService.js';
    import {usuarioStore} from '../../../../store/usuarioStore.js';
    import MeusVeiculos from './MeusVeiculos.vue';
    import TituloPagina from '../../../../shared/types/TituloPagina.vue';
    import {VinculoService} from "../../../../services/vinculoService";

    export default {
        data() {
            return {
                placaBusca: '',
                loading: false,
                loadingVinculo: false,
                resultadoVeiculo: null
            }
        },
        components: {
            'meus-veiculos': MeusVeiculos,
            'titulo-pagina': TituloPagina
        },
        computed: {
            dadosUsuario: function () {
                return usuarioStore.getters.dadosUsuarioLogado;
            },
            isPlacaInvalida: function () {
                return this.errors.has('placaBusca') && this.fields.placaBusca && this.fields.placaBusca.touched;
            },
            buscarMsg: function () {
                if (!this.loading)
                    return 'Buscar <i class="fa fa-search"></i>';
                return 'Buscando <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>';
            },
            vincularMsg: function () {
                if (!this.loadingVinculo)
                    return 'Vincular <i class="fa fa-chain"></i>';
                return 'Vinculando <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>';
            }
        },
        methods: {
            buscarVeiculo: function () {

                this.$validator.validateAll().then((result) => {
                    if (!result) {
                        console.log('fomulario invalido');
                        this.$validator.flag('placaBusca', {touched: true});
                        return;
                    }

                    if (this.loading) return;

                    this.loading = !this.loading;
                    this.resultadoVeiculo = null;
                    new VeiculoService(this.$http).findByPlaca(this.placaBusca).then(
                        res => {
                            this.resultadoVeiculo = res.body;
                            this.loading = !this.loading;
                        },
                        error => {
                            this.loading = !this.loading;
                            this.$toast.error({
                                title: 'Erro ao consultar veículo',
                                message: error.body.message
                            });
                        });
                });
            },
            vincular: function () {
                if (this.loadingVinculo)
                    return;
                this.loadingVinculo = true;
                new VinculoService(this.$http).vincularVeiculo(this.resultadoVeiculo.placa).then(
                    response => {
                        console.log(response.body);
                        usuarioStore.commit('setVinculosVeiculo', response.body);
                        this.loadingVinculo = false;
                        this.resultadoVeiculo = null;
                        this.$toast.success({
                            title: 'Veículo vinculado!',
                            message: 'Seu veículo foi vínculo com sucesso!'
                        });
                    },
                    error => {
                        this.loadingVinculo = false;
                        this.resultadoVeiculo = null;
                        this.$toast.error({title: 'Erro ao vincular veículo!', message: error.body.message});
                    }
                );
            },
            goToHome: function () {
                this.$router.push({path: '/area-segura/home'});
            }
        }
    }

</script>


<style scoped>

    section {
        max-width: 730px;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
    }

    .form-busca label {
        display: block;
    }

    .form-busca .btn-placa {
        margin-top: 10px;
    }

    @media (min-width: 768px) {
        .form-busca .btn-placa {
            margin-top: 0px;
            float: left;
            width: 20%;
            padding-left: 10px;
        }

        .form-busca .input-placa {
            float: left;
            width: 80%;
        }
    }

    /*resultado*/
    .resultado-busca-wrapper {
        margin-top: 20px;
    }

    .veiculo-info .info-item label {
        display: block;
        margin-top: 5px;
    }

    .resultado-busca .info-btn {
        margin-top: 10px;
    }

    .resultado-busca label {
        display: block;
    }

    @media (min-width: 768px) {
        .veiculo-info {
            float: left;
            width: 80%;
        }

        .veiculo-info .info-item {
            float: left;
        }

        .veiculo-info .info-item.placa {
            width: 15%;
        }

        .veiculo-info .info-item.renavam {
            width: 22%;
        }

        .veiculo-info .info-item.modelo {
            width: 63%;
        }

        .veiculo-info .info-item label {
            display: block;
            line-height: 0.2;
            margin-top: 5px;
        }

        .resultado-busca .info-btn {
            margin: 0;
            float: left;
            padding-left: 10px;
            width: 20%;
        }
    }

    .btn-servicos {
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        padding-bottom: 20px;
    }

    label {
        font-weight: bold;
    }

    input {
        text-transform: uppercase;
    }

    ::-webkit-input-placeholder {
        text-transform: none;
    }

    :-moz-placeholder {
        text-transform: none;
    }

    ::-moz-placeholder {
        text-transform: none;
    }

    :-ms-input-placeholder {
        text-transform: none;
    }

</style>