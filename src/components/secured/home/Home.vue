<template>


    <section class="section">
        <!--<h1>Olá, {{ dadosUsuario.nome}}</h1>-->

        <!--:src="dadosUsuario.imagem64" alt="asdff">-->


        <titulo-pagina :title="'Home'" :tipo="'primario'"></titulo-pagina>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi at dolorum eaque ex, facere incidunt ipsa iure minus neque numquam omnis porro quas quidem sit soluta velit vero vitae.</p>

        <titulo-pagina :title="'Veículos'" :tipo="'secundario'"></titulo-pagina>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid assumenda consectetur corporis ducimus earum enim excepturi illum, labore libero minima modi nemo perferendis quisquam reiciendis tenetur ullam veritatis voluptates.</p>
        <home-veiculos></home-veiculos>

        <titulo-pagina :title="'Habilitação'" :tipo="'secundario'"></titulo-pagina>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dicta ea earum facilis fugit illo odio rem, velit? Atque error illo ipsam iste odio officia optio repellendus sequi similique veritatis.</p>
        <home-habilitacao></home-habilitacao>

    </section>


</template>

<script>
    //    import AuthService from '../../../services/authService.js';
    import TituloPagina from '../../../shared/types/TituloPagina.vue';
    import HomeVeiculos from './HomeVeiculos.vue';
    import HomeHabilitacao from './HomeHabilitacao.vue';
    import {usuarioStore} from "../../../store/usuarioStore";

    export default {


        computed: {
            dadosUsuario: function () {
                return usuarioStore.getters.dadosUsuarioLogado;
            }
        },
        components: {
            'titulo-pagina': TituloPagina,
            'home-veiculos': HomeVeiculos,
            'home-habilitacao': HomeHabilitacao
        }
    }

</script>

<style scoped>

    .pagina-titulo h1 {
        display: inline-block;
    }

    .pagina-titulo .fa {
        display: inline-block;
        font-size: 2.0em;
        color: #FFC107;
        /*color: #ddd;*/
        position: relative;
        top: -2px;
    }

    .pagina-titulo-2 h2 {
        display: inline-block;
        font-size: 1.5em;
    }

    .pagina-titulo-2 .fa {
        display: inline-block;
        font-size: 1.2em;

        color: #FFC107;
        /*color: #ddd;*/
        position: relative;
        top: -2px;
    }

</style>