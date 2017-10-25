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

        <div class="notificacoes-penalidade" v-if="loading === true">
            <div class="autos-list">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Nº Auto de Infração</th>
                        <th scope="col">Infração</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="auto in autosSelecionados">
                        <td>{{ auto.numeroAuto }}</td>
                        <td>{{ auto.descInfracao }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="notificacoes-erros">

            </div>
            <!--notificacoes-erros-->
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
                loading: true
            }
        },
        computed: {
            autosSelecionados: function () {
                return nanpStore.getAutos();
            },
            veiculo: function () {
                return nanpStore.getVeiculo();
            }
        },
        methods: {

            confirmar: function () {

            },

            buildRequest: function () {
                let request = {placa: this.veiculo.placa, infracoes: []};
                for (let obj of this.autosSelecionados) {
                    request.infracoes.push({
                        numeroAuto: obj.numeroAuto,
                        numeroSequencial: obj.numeroSequencial,
                        codigoOrgaoAutuador: obj.codigoOrgaoAutuador
                    });
                }
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
                    console.log(response);
                    nanpStore.setBorderos(response.body);
                    this.$forceUpdate();
                },
                error => {
                    console.log(error);
                    this.loading = false;
                    alert('Erro ao gerar penalidades');
                    this.$forceUpdate();
                }
            );
        }
    }

</script>


<style scoped>

    .autos-list {
        margin-top: 20px;
    }

    .autos-list .table th, .autos-list .table td {
        padding-left: 4px;
    }


</style>