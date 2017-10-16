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


        <table>
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
        </table>

        <select class="form-control"
                name="purchase_order_number"
                id="purchase_order_number"
                @change="changed"
                v-model="veiculoSelecionado">
            <!--<option value="">Select PO number</option>-->
            <option v-for="(vinculos, index) in dadosUsuario.vinculos"
                    :value="vinculos.placa">
                {{ vinculos.placa }} {{ index }}
            </option>

        </select>

        {{ veiculoSelecionado }}
    </section>


</template>
<script>

    import TituloPagina from '../../../shared/types/TituloPagina.vue';
    import {usuarioStore} from '../../../store/usuarioStore.js';

    export default {

        data() {

            return {
                indexSelecionado: 0,
                veiculoSelecionado: {}
            }
        },
        computed: {
            dadosUsuario: function () {
                return usuarioStore.getters.dadosUsuarioLogado;
            },
        },
        methods: {

            changed: function () {
                console.log('changed');
            }
        },
        components: {
            'titulo-pagina': TituloPagina
        },
        created: function () {


        }


    }

</script>


<style scoped>


</style>