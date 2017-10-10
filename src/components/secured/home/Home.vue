<template>


    <section class="section">
        <!--<h1>Olá, {{ dadosUsuario.nome}}</h1>-->

              <!--:src="dadosUsuario.imagem64" alt="asdff">-->



        <titulo-pagina :title="'Consulta Habilitação'" :tipo="'primario'"></titulo-pagina>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi at dolorum eaque ex, facere incidunt ipsa iure minus neque numquam omnis porro quas quidem sit soluta velit vero vitae.</p>

        <titulo-pagina :title="'Resulta teste'" :tipo="'secundario'"></titulo-pagina>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, pariatur, quo! Ab aspernatur at error eum, magnam mollitia nesciunt numquam perferendis rem repellendus, reprehenderit tempore tenetur totam, velit vero voluptatem!</p>

        <titulo-pagina :title="'Resulta teste 2'" :tipo="'secundario'"></titulo-pagina>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, pariatur, quo! Ab aspernatur at error eum, magnam mollitia nesciunt numquam perferendis rem repellendus, reprehenderit tempore tenetur totam, velit vero voluptatem!</p>


    </section>


</template>

<script>
//    import AuthService from '../../../services/authService.js';
    import TituloPagina from '../../../shared/types/TituloPagina.vue';

    export default {


        data() {
            return {
                dadosUsuario: {}
            }
        },
        components: {
            'titulo-pagina': TituloPagina
        },
        created: function () {
//            console.log('inicializando area segura');
//            AuthService.getDadosUsuario(this.$http).then(
//                res => {
//                    this.dadosUsuario = res;
//                },
//                error => {
//                    console.log('response usuario logado: ');
//                    console.log(error);
//                });
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