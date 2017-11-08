<template>

    <section class="section">

        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/area-segura/home">Home</router-link>
            </li>
            <li class="breadcrumb-item active">Minha conta</li>
        </ol>

        <titulo-pagina :title="'Minha conta'" :tipo="'primario'"></titulo-pagina>



        <div class="acoes">

            <ul class="list-group">
                <li class="list-group-item" @click="goTo('/area-segura/minha-conta/alterar-senha')">Alterar senha</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>

        </div>

    </section>

</template>

<script>

    import TituloPagina from '../../../shared/types/TituloPagina.vue';
    import Spinner from '../../../shared/types/Spinner.vue';

    export default {

        components: {
            'titulo-pagina': TituloPagina,
            'spinner': Spinner
        },
        methods: {
            goTo: function (path) {
                this.$router.push({path: path});
            }
        }

    }

</script>


<style scoped>


    .acoes .list-group .list-group-item:hover {
        cursor: pointer;
        background-color: #f1f1f1;
    }

</style>