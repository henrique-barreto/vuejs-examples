<template>

    <div class="wrapper">
        <public-header></public-header>
        <div class="conteudo-wrapper">
            <div class="conteudo">
                <div class="container">
                    <div class="card card-padding">
                        <h2>Ocorreu um erro!</h2>

                        <p>
                            Ocorreu um erro ao processar a sua requisição.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias corporis deserunt ducimus expedita facilis illum libero magnam maxime mollitia nulla obcaecati odio officia, provident quasi sed suscipit tempora veniam!
                        </p>
                        <p>
                            <button class="btn btn-success" @click="goHome">Ir para página principal</button>
                        </p>

                    </div>
                </div>
            </div>
        </div>
        <public-footer></public-footer>
    </div>

</template>

<script>

    import Spinner from '../types/Spinner.vue';
    import PublicHeader from '../PublicHeader.vue';
    import PublicFooter from '../PublicFooter.vue';

    export default {

        components: {
            'spinner': Spinner,
            'public-header': PublicHeader,
            'public-footer': PublicFooter
        },
        methods: {
            goHome() {
                this.$router.push({path: '/area-segura/home'});
            }
        }

    }

</script>

<style scoped>

    .wrapper {
        height: 100%;
        background-color: #f1f1f1;
    }

    .conteudo-wrapper {
        min-height: calc(100vh - 83px);
        padding-top: 56px;
        margin: 0;
    }

    .conteudo {
        height: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
    }


</style>