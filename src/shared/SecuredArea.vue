<template>
    <div class="wrapper" v-if="!loading">
        <menu-left :dadosUsuario="dadosUsuario"></menu-left>
        <secured-header :dadosUsuario="dadosUsuario" :displayToggle="true"></secured-header>
        <main class="padding-side-nav">
            <div class="container-conteudo">
                <router-view></router-view>
            </div>
        </main>
        <public-footer></public-footer>
    </div>
    <div v-else>
        <spinner :tipo="'lg'"></spinner>
    </div>
</template>

<script>

    import SecuredHeader from './SecuredHeader.vue';
    import MenuLeft from './MenuLeft.vue';
    import PublicFooter from './PublicFooter.vue';
    import {usuarioStore} from '../store/usuarioStore.js';
    import {UsuarioService} from "../services/usuarioService";
    import Spinner from "../shared/types/Spinner.vue";

    export default {

        data() {
            return {
                loading: true
            }
        },
        computed: {
            dadosUsuario: function () {
                return usuarioStore.getters.dadosUsuarioLogado;
            }
        },
        components: {
            'secured-header': SecuredHeader,
            'menu-left': MenuLeft,
            'public-footer': PublicFooter,
            'spinner': Spinner
        },
        created: function () {
            console.log('inicializando area segura');
            new UsuarioService(this.$http).getDadosUsuarioLogado().then(
                response => {
                    this.loading = false;
                    console.log('securedArea: pegando dados usuario logado');
                    usuarioStore.commit('setDadosUsuario', response.body);
                },
                error => {
                    console.log('securedArea: pegando dados usuario logado ERROR');
                    if (error.status === 400)
                        this.$toast.error({title: 'Erro!', message: error.body.message});
                    else
                        this.$toast.error({title: 'Erro ao conectar com servidor', message: 'Tente novamente mais tarde'});
                }
            );

        }
    }

</script>

<style>

    body {
        background-color: #fafafa;
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