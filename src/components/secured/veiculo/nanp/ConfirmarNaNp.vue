<template>

    <section class="section">

        <div class="page-info">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/area-segura/home">Home</router-link>
                </li>
                <li class="breadcrumb-item active">Notificação de Autuação para Penalidade</li>
            </ol>
            <titulo-pagina :title="'Confirmar Notificações Selecionadas'"
                           :tipo="'primario'"></titulo-pagina>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cum, dolor dolorum eius illum inventore iusto mollitia pariatur provident, recusandae soluta totam voluptas voluptatibus! Consequatur odio quae qui quia voluptatem.</p>
        </div>
        <!--fim page-info-->


        <div class="confirmacao">

            <strong>Veículo</strong>
            <div class="veiculo-info">
                <div class="row">
                    <div class="col-6 col-md-3">
                        <strong>Placa </strong> {{ veiculo.placa }}
                    </div>
                    <div class="col-6 col-md-3">
                        <strong>Renavam </strong> {{ veiculo.renavam }}
                    </div>
                    <div class="col-12 col-md-6">
                        <strong>Marca/modelo </strong> {{ veiculo.marcaModelo }}
                    </div>
                </div>
            </div>

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

            <div class="btns-form">
                <button class="btn btn-outline-secondary" @click="continuar">Voltar</button>
                <button class="btn btn-success" @click="continuar">Continuar</button>
            </div>

        </div>


    </section>
    <!--fim section-->


</template>
<script>

    import TituloPagina from '../../../../shared/types/TituloPagina.vue';
    import Spinner from "../../../../shared/types/Spinner.vue";
    import {nanpStore} from "./nanpStore.js";
    import {VeiculoService} from "../../../../services/veiculoService";

    export default {
        components: {
            'titulo-pagina': TituloPagina
        },
        computed: {
            autosSelecionados: function () {
                return nanpStore.getters.autosSelecionados;
            },
            veiculo: function () {
                return nanpStore.getters.veiculo;
            }
        },
        methods: {

            continuar: function () {
                console.log('continuar');
                this.$router.push({path: '/area-segura/transformar-na-np/termo'});
            }
        },
        mounted: function () {
            if (!this.autosSelecionados ||
                this.autosSelecionados.length === 0 ||
                !this.veiculo) {
                this.$router.push({path: '/area-segura/transformar-na-np'});
            }
        }
    }

</script>


<style scoped>

    .veiculo-info strong {
        display: block;
    }

    .autos-list {
        margin-top: 20px;
    }

    .autos-list .table th, .autos-list .table td {
        padding-left: 4px;
    }

    .btns-form {
        margin-top: 20px;
        text-align: center;
    }
</style>