<template>


    <div class="veiculos" v-if="dadosUsuario.vinculos && dadosUsuario.vinculos.length > 0">


        <table class="table table-responsive">
            <thead>
            <tr>
                <th scope="col">Placa</th>
                <th scope="col">Marca/Modelo</th>
                <th scope="col">Ano</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="veiculo in dadosUsuario.vinculos">
                <td> {{ veiculo.placa | placaFilter }}</td>
                <td> {{ veiculo.marcaModelo }}</td>
                <td> {{ veiculo.anoFabMod }}</td>
            </tr>
            </tbody>
        </table>

    </div>
    <div v-else>

        <p>Você não possui nenhum veículo vinculado ao seu perfil</p>

    </div>

</template>

<script>

    import {usuarioStore} from "../../../store/usuarioStore";

    export default {

        computed: {
            dadosUsuario: function () {
                return usuarioStore.getters.dadosUsuarioLogado;
            }
        }
    }

</script>


<style scoped>


</style>