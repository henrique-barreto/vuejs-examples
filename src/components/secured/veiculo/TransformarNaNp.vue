<template>

    <section class="section">

        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/area-segura/home">Home</router-link>
            </li>
            <li class="breadcrumb-item active">Notificação de Autuação para Penalidade</li>
        </ol>

        <titulo-pagina :title="'Transformar Notificação de Autuação em Penalidade'" :tipo="'primario'"></titulo-pagina>
        <p>Transforme notificações de autuação em penalidade</p>

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

        <label>Veículo selecionado</label>
        <div v-if="veiculoSelecionado" class="veic-selecionado">

            <div class="veiculo-selecionado">
                <div class="item1"><strong>Placa </strong> {{ veiculoSelecionado.placa }}</div>
                <div class="item2"><strong>Renavam </strong> {{ veiculoSelecionado.renavam }}</div>
                <div class="item3"><strong>Marca/Modelo </strong> {{ veiculoSelecionado.marcaModelo }}</div>
            </div>
            <div class="clearfix"></div>

        </div>

        {{ veiculoSelecionado }}


        <h3>Infracoes</h3>
        {{ infracoesNA }}





    </section>


</template>
<script>

    import TituloPagina from '../../../shared/types/TituloPagina.vue';
    import {usuarioStore} from '../../../store/usuarioStore.js';
    import {VeiculoService} from "../../../services/veiculoService";

    export default {

        data() {

            return {
                veiculoSelecionado: null,
                infracoesNA: []
            }
        },
        computed: {
            dadosUsuario: function () {
                return usuarioStore.getters.dadosUsuarioLogado;
            }
        },
        methods: {
            consultarInfracoes: function (placa) {
                new VeiculoService(this.$http).findAutosNAElegiveisParaNP(placa).then(
                    response => {
                        console.log(response);
                        this.infracoesNA = response.body;
                    },
                    error => {
                        console.log(error);
                    }
                );
            },
            mudouSelecao: function (event) {
                this.consultarInfracoes(this.veiculoSelecionado.placa);
            }
        },
        components: {
            'titulo-pagina': TituloPagina
        },
        created: function () {
            this.veiculoSelecionado = this.dadosUsuario.vinculos[0];
        }


    }

</script>


<style scoped>


    .veiculo-selecionado {

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


</style>