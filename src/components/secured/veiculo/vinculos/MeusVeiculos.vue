<template>

    <div class="meus-veiculos-wrapper">
        <!--<label>Meus veículos</label>-->
        <titulo-pagina :title="'Meus veículos'" :tipo="'secundario'"></titulo-pagina>
        <div class="card card-padding">
            <div class="lista-veiculos">
                <table class="table table-responsive"
                       v-if="dadosUsuario && dadosUsuario.vinculos && dadosUsuario.vinculos.length > 0">
                    <thead>
                    <tr>
                        <th>Placa</th>
                        <th style="width: 100%;">Marca/Modelo</th>
                        <th class="text-center" style="min-width: 135px;">Ação</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="vinculo in dadosUsuario.vinculos">
                        <td> {{ vinculo.placa}}</td>
                        <td> {{ vinculo.marcaModelo }}</td>
                        <td class="text-center" style="padding-left: 0px; padding-right: 0px;">
                            <button class="btn btn-success btn-outline-success"
                                    type="button"
                                    :id="vinculo.id"
                                    v-on:click="desvincular(vinculo.id, $event)">
                                Desvincular
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div v-else>
                    <p>Você ainda não possui nenhum veículo vínculado</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import {usuarioStore} from '../../../../store/usuarioStore.js';
    import TituloPagina from '../../../../shared/types/TituloPagina.vue';
    import {VinculoService} from "../../../../services/vinculoService";

    export default {

        components: {
            'titulo-pagina': TituloPagina
        },
        computed: {
            dadosUsuario: function () {
                return usuarioStore.getters.dadosUsuarioLogado;
            },
        },
        methods: {

            desvincular: function (id, event) {
                let target = document.getElementById(id);
                target.innerHTML = 'Desvinculando <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>';
                target.className += " disabled";
                new VinculoService(this.$http).desvincularVeiculo(id).then(
                    response => {
                        usuarioStore.commit('setVinculosVeiculo', response.body);
                        this.$toast.success({
                            title: 'Veículo desvinculado!',
                            message: 'Veículo desvinculado com sucesso!'
                        });

                        target.innerHTML = 'Desvincular';
                        target.classList.remove('disabled');
                        this.$forceUpdate();
                    },
                    error => {
                        this.$toast.error({
                            title: 'Erro ao desvincular veículo!',
                            message: error.body.message
                        });
                        target.innerHTML = 'Desvincular';
                        target.classList.remove('disabled');
                        this.$forceUpdate();
                    }
                );
            }
        }

    }
</script>

<style scoped>

    label {
        font-weight: bold;
    }

    .meus-veiculos-wrapper {
        margin-top: 20px;
    }

</style>