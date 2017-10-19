<template>
    <div class="wrapper" v-if="!loading">
        <secured-header :dadosUsuario="dadosUsuario" :displayToggle="false"></secured-header>
        <main>
            <div class="container">
                <router-view></router-view>
            </div>
        </main>
        <public-footer></public-footer>
    </div>
    <div v-else>
        <div class="signal"></div>
    </div>
</template>

<script>

    import SecuredHeader from './SecuredHeader.vue';
    import PublicFooter from './PublicFooter.vue';
    import {usuarioStore} from '../store/usuarioStore.js';
    import {UsuarioService} from "../services/usuarioService";

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
            'public-footer': PublicFooter
        },
        mounted: function () {
            console.log('inicializando area simples segura');
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

<style scoped>

    .wrapper {
        background-color: #fafafa;
    }

    .container {
        margin-right: auto;
        margin-left: auto;
        padding-left: 6px;
        padding-right: 6px;
        padding-top: 56px;
        min-height: calc(100vh - 83px); /*footer-size*/
    }

</style>