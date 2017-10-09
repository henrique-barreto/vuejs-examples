<template>


    <section class="section">

        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/area-segura/home">Home</router-link>
            </li>
            <li class="breadcrumb-item active">Veículos</li>
        </ol>

        <div class="pagina-title">
            <h1 class="title">Veículos Vinculados</h1>
            <h2 class="subtitle">Vincule veículos ao seu perfil</h2>
        </div>


        <div class="busca-veiculo-card card card-padding">

            <div class="busca-veiculo">
                <form @submit.prevent="buscarVeiculo">
                    <div :class="{ 'form-group-invalid': isPlacaInvalida}" class="form-group">
                        <label for="placa" class="is-invalid">Placa</label>
                        <input type="text"
                               class="form-control"
                               id="placa"
                               placeholder="Digite sua placa"
                               v-model="placaBusca"
                               v-validate="{ required: true, length: 8 }"
                               v-mask="'AAA-####'"
                               name="placaBusca">
                        <small class="invalid-feedback" v-show="isPlacaInvalida">Placa inválida</small>
                    </div>
                    <button v-bind:class="{'disabled': loading}"
                            type="submit"
                            class="btn btn-success btn-sm btn-block">
                        <span v-html="buscarMsg"></span>
                    </button>
                </form>
            </div>

        </div>

        <div v-if="resultadoVeiculo" class="resultado-veiculo-wrapper">

            <div class="resultado-veiculo card card-padding">
                <div class="row">
                    <div class="col">
                        <span class="placa">{{ resultadoVeiculo.placa }}</span>
                        <span class="marcaModelo">{{ resultadoVeiculo.nomeMarcaModelo }}</span>
                        <span class="anoModeloFabricacao">{{ resultadoVeiculo.anoFabricacao + '/' + resultadoVeiculo.anoModelo
                            }}</span>
                    </div>
                    <div class="col">
                        <span class="renavam">{{ resultadoVeiculo.renavam }}</span>
                        <span class="cor">{{ resultadoVeiculo.cor }}</span>
                    </div>
                </div>

                <button @click="vincular" class="btn btn-success btn-sm btn-block">
                    <span v-html="vincularMsg"></span>
                </button>

            </div>
        </div>

        <div class="meus-veiculos-wrapper">

            <h3>Meus Véiculos</h3>
            <hr>

            <div class="lista-veiculos">

                <ul>
                    <li>
                        <div class="veiculo">
                            <span class="placa"></span>
                        </div>
                    </li>
                </ul>
            </div>

        </div>

    </section>
</template>

<script>

    import VeiculoService from '../../../services/veiculoService.js';

    import VinculoService from '../../../services/vinculoService.js';


    export default {
        data() {
            return {
                placaBusca: '',
                loading: false,
                loadingVinculo: false,
                resultadoVeiculo: null
            }
        },
        methods: {
            buscarVeiculo: function () {

                if (this.loading)
                    return;

                this.loading = !this.loading;
                this.resultadoVeiculo = null;
                VeiculoService.findByPlaca(this.$http, this.placaBusca).then(
                    res => {
                        console.log(res);
                        this.resultadoVeiculo = res.body;
                        this.loading = !this.loading;
                    },
                    error => {
                        console.log(error);
                        this.loading = !this.loading
                    });
            },
            vincular: function () {

                if (this.loadingVinculo)
                    return;

                this.loadingVinculo = true;

                VinculoService.vincular(this.$http, this.resultadoVeiculo.placa).then(
                        res => {
                            console.log(res);
                            this.loadingVinculo = false;
                            alert(res.body.message);
                            //StoreVinculo.add({placa: 'JHA5151'})
                        },
                        error => {
                            console.log(error);
                            alert(error.body.message);
                            this.loadingVinculo = false;
                        }
                    );


            }
        },
        computed: {
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
                return 'Buscando <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>';
            }
        }
    }

</script>


<style scoped>

    /*estrutura*/
    .resultado-veiculo-wrapper {
        margin-top: 20px;
    }

    .resultado-veiculo span {
        display: block;
    }

    /*estilos*/

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

    .breadcrumb {
        background-color: #f1f1f1;
        /*padding-left: 0px;*/
    }

    .title {
        color: #363636;
        font-size: 2rem;
        font-weight: 600;
        line-height: 1.125;
    }

    .subtitle {
        color: #4a4a4a;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.25;
    }

    .card {
        margin: 0 0 0px;
        border: 0;
        background: #fff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .card-padding {
        padding: 15px;
    }


</style>