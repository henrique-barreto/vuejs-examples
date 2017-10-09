<template>

    <div class="meus-veiculos-wrapper">
        <label>Meus veículos</label>
        <div class="card card-padding">
            <div class="lista-veiculos">
                <table class="table table-responsive"
                       v-if="dadosUsuario && dadosUsuario.vinculos && dadosUsuario.vinculos.length > 0">
                    <thead>
                    <tr>
                        <th>Placa</th>
                        <th>Renavam</th>
                        <th>Ação</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="vinculo in dadosUsuario.vinculos">
                        <td> {{ vinculo.placa }}</td>
                        <td> {{ vinculo.renavam }}</td>
                        <td>
                            <button class="btn btn-success btn-sm"
                                    type="button"
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

    export default {


        computed: {
            dadosUsuario: function () {
                return usuarioStore.getters.dadosUsuarioLogado;
            },
        },
        methods: {

            desvincular: function (id, event) {

//                let element = document.getElementById(id);
//                target.innerHTML = 'Desvinculando <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>';
//                target.disabled = true;
                usuarioStore.dispatch('desvincularVeiculo', id).then(
                    res => {
                        this.$toast.success({
                            title: 'Veículo desvinculado!',
                            message: 'Veículo desvinculado com sucesso!'
                        });
                    },
                    error => {
                        target.innerHTML = 'Desvincular';
                        target.disabled = false;
                        this.$toast.error({
                            title: 'Erro ao desvincular veículo!',
                            message: error.body.message
                        });
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