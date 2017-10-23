<template>

    <section class="section">

        <div class="page-info">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/area-segura/home">Home</router-link>
                </li>
                <li class="breadcrumb-item active">Notificação de Autuação para Penalidade</li>
            </ol>
            <titulo-pagina :title="'Transformar Notificação de Autuação em Penalidade'"
                           :tipo="'primario'"></titulo-pagina>
            <p>Transforme notificações de autuação em penalidade</p>
        </div>
        <!--fim page-info-->


        <div class="confirmacao">


            <div class="veiculo-info">
                <p>assdad</p>
                <p>assdad</p>
                <p>assdad</p>
            </div>

            <div class="lista-infracoes">
                <p>asdfsadf</p>
                <p>asdfsadf</p>
                <p>asdfsadf</p>
                <p>asdfsadf</p>
                <p>asdfsadf</p>
            </div>
        </div>


    </section>
    <!--fim section-->


</template>
<script>

    import TituloPagina from '../../../../shared/types/TituloPagina.vue';
    import Spinner from "../../../../shared/types/Spinner.vue";
    //import nanpStore from "nanpStore.js";

    export default {

    }

</script>


<style scoped>

</style>