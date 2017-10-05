<template>
    <div class="wrapper">
        <menu-left></menu-left>
        <secured-header :dadosUsuario="dadosUsuario"></secured-header>
        <main class="padding-side-nav">
            <div class="container-conteudo">
                <router-view></router-view>
            </div>
        </main>
        <public-footer></public-footer>
    </div>
</template>

<script>

    import SecuredHeader from './SecuredHeader.vue';
    import MenuLeft from './MenuLeft.vue';
    import PublicFooter from './PublicFooter.vue';
    import AuthService from '../services/authService.js';

    export default {

        data() {
            return {
                dadosUsuario: {}
            }
        },
        components: {
            'secured-header': SecuredHeader,
            'menu-left': MenuLeft,
            'public-footer': PublicFooter
        },
        created: function () {
            console.log('inicializando area segura');
            AuthService.getDadosUsuario(this.$http).then(
                res => {
                    console.log('response usuario logado: ');
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

    body {
        background-color: #f1f1f1;
    }

    .container-conteudo {
        margin-right: auto;
        margin-left: auto;
        padding-left: 6px;
        padding-right: 6px;
        padding-top: 56px;
        min-height: calc(100vh - 83px); /*footer-size*/
    }


    @media (min-width: 768px) {
        .container-conteudo {
            width: 732px;
        }
    }

    @media (min-width: 992px) {
        .container-conteudo {
            min-width: 700px;
            max-width: 1150px;
            width: 80%;
        }
    }

    @media (min-width: 1200px) {
        .container-conteudo {
            width: 80%;
            max-width: 1150px;
        }
    }

    @media (min-width: 993px) {
        main.padding-side-nav, footer.padding-side-nav {
            padding-left: 280px;
        }
    }

</style>