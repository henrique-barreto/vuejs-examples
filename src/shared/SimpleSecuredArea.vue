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
        <spinner :tipo="'lg'"></spinner>
    </div>
</template>

<script>

    import SecuredHeader from './SecuredHeader.vue';
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
            'public-footer': PublicFooter,
            'spinner': Spinner
        },
        mounted: function () {
            new UsuarioService(this.$http).getDadosUsuarioLogado().then(
                response => {
                    this.loading = false;
                    usuarioStore.commit('setDadosUsuario', response.body);
                },
                error => {
                    if (error.status === 500)
                        this.$router.push({path: '/500'});
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