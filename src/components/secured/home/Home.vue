<template>


    <div>
        <h1>Olá, {{ dadosUsuario.nome}}</h1>

        <img  class="rounded-circle" style="border: 1px solid #333; max-height: 34px;"
              :src="dadosUsuario.imagem64" alt="asdff">

    </div>


</template>

<script>
    import AuthService from '../../../services/authService.js';

    export default {


        data() {
            return {
                dadosUsuario: {}
            }
        },
        created: function () {
            console.log('inicializando area segura');
            AuthService.getDadosUsuario(this.$http).then(
                res => {
                    this.dadosUsuario = res;
                },
                error => {
                    console.log('response usuario logado: ');
                    console.log(error);
                });
        }
    }

</script>

<style>

</style>