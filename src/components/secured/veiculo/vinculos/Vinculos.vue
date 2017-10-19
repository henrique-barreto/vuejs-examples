<template>


    <section class="section">

        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/area-segura/home">Home</router-link>
            </li>
            <li class="breadcrumb-item active">Veículos</li>
        </ol>

        <titulo-pagina :title="'Veículos Vinculados'" :tipo="'primario'"></titulo-pagina>
        <p>Víncule veículos ao seu perfil</p>


        <div class="busca-veiculo-card">
            <div class="busca-veiculo">
                <form @submit.prevent="buscarVeiculo">
                    <div :class="{ 'form-group-invalid': isPlacaInvalida}" class="form-group">
                        <label for="placa" class="is-invalid">Placa</label><br>
                        <div class="input-group input-group-busca-placa">
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
                            <span class="input-group-btn">
                                <button class="btn btn-success"
                                        type="submit"
                                        v-bind:class="{'disabled': loading}">
                                    <span v-html="buscarMsg"></span>
                                </button>
                            </span>
                        </div>
                        <small class="invalid-feedback" v-show="isPlacaInvalida">Placa inválida</small>

                    </div>
                </form>
            </div>
        </div>

        <div v-if="resultadoVeiculo" class="resultado-veiculo-wrapper">
            <label>Resultado</label>
            <div class="resultado-veiculo card card-padding">
                <div class="row">
                    <div class="col-5">
                        <span class="placa"><label>Placa: </label> {{ resultadoVeiculo.placa }}</span>
                        <span class="anoModeloFabricacao"><label>Ano: </label> {{ resultadoVeiculo.anoFabricacao + '/' + resultadoVeiculo.anoModelo
                            }}</span>
                    </div>
                    <div class="col-7">
                        <span class="renavam"><label>Renavam: </label> {{ resultadoVeiculo.renavam }}</span>
                        <span class="cor"><label>Cor: </label> {{ resultadoVeiculo.cor }}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <span class="marcaModelo"><label>Marca/Modelo: </label> {{ resultadoVeiculo.nomeMarcaModelo
                            }}</span>
                    </div>
                </div>
                <div class="resultado-btn">
                    <button @click="vincular" class="btn btn-success btn-sm">
                        <span v-html="vincularMsg"></span>
                    </button>
                </div>
            </div>
        </div>

        <meus-veiculos v-if="dadosUsuario !== undefined" :dadosUsuarios="dadosUsuario"></meus-veiculos>

    </section>
</template>

<script>


    import {VeiculoService} from '../../../../services/veiculoService.js';
    import {usuarioStore} from '../../../../store/usuarioStore.js';
    import MeusVeiculos from './MeusVeiculos.vue';
    import TituloPagina from '../../../../shared/types/TituloPagina.vue';

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
                if (!this.loading)
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

                    if (this.loading)
                        return;

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

                usuarioStore.dispatch('vincularVeiculo', this.resultadoVeiculo.placa).then(
                    res => {
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
                        this.$toast.error({
                            title: 'Erro ao vincular veículo!',
                            message: error.body.message
                        });
                    }
                );

            }
        }
    }

</script>


<style scoped>

    /*validacao form*/
    .form-group.form-group-invalid label {
        color: #dc3545;
    }

    .form-group.form-group-invalid input {
        border-color: #dc3545;
    }

    /*estrutura*/
    .resultado-veiculo span {
        display: block;
    }

    .busca-veiculo-card {
        /*margin-top: 30px;*/
    }

    /*estilos*/

    /*resultado*/

    .resultado-veiculo label {
        display: none;
    }

    .resultado-veiculo button {
        text-align: center;
        width: 100%;
    }

    @media (min-width: 992px) {
        .resultado-veiculo label {
            display: inline-block;
        }

        .resultado-veiculo .resultado-btn {
            text-align: center;
        }

        .resultado-veiculo button {
            width: 150px;
        }
    }

    input {
        text-transform: uppercase;
    }

    ::-webkit-input-placeholder { /* WebKit browsers */
        text-transform: none;
    }

    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        text-transform: none;
    }

    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        text-transform: none;
    }

    :-ms-input-placeholder { /* Internet Explorer 10+ */
        text-transform: none;
    }

    label {
        font-weight: bold;
    }

    @media (min-width: 992px) {
        .input-group.input-group-busca-placa {
            width: 280px;
        }
    }

    .input-group.input-group-busca-placa .invalid-feedback {
        display: block;
        clear: both;
    }

</style>