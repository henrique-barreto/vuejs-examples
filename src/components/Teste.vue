<template>

    <div class="wrapper">
        <public-header></public-header>
        <div class="conteudo-wrapper">
            <div class="conteudo">
                <div class="container">
                    <div class="card card-padding">
                        <h2>Ocorreu um erro</h2>


                        <button class="btn btn-success" @click="print">Print</button>
                        <p id="print" class="borderos">
                            Ocorreu um erro ao processar a sua requisição.
                            Ocorreu um erro ao processar a sua requisição.
                            Ocorreu um erro ao processar a sua requisição.
                            Ocorreu um erro ao processar a sua requisição.
                        </p>

                        <p>{{placa | placaFilter }}</p>


                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias corporis deserunt ducimus expedita facilis illum libero magnam maxime mollitia nulla obcaecati odio officia, provident quasi sed suscipit tempora veniam!
                        </p>
                        <p>
                            <button class="btn btn-success">Ir para página principal</button>
                        </p>

                    </div>
                </div>
            </div>
        </div>
        <public-footer></public-footer>
    </div>



</template>

<script>

    import Spinner from '../shared/types/Spinner.vue';
    import PublicHeader from '../shared/PublicHeader.vue';
    import PublicFooter from '../shared/PublicFooter.vue';

    export default {


        methods: {

            print: function() {
                window.print();
            }
        },
        data() {
            return {
                placa: 'JHA5151'
            }
        },
        components: {
            'spinner': Spinner,
            'public-header': PublicHeader,
            'public-footer': PublicFooter
        }

    }

</script>

<style>

    @page {
        size: auto;
        margin: 0;
    }


    @media print {

        body * {
            visibility: hidden;
            margin: 0;

        }

        #print.borderos, #print.borderos * {
            visibility: visible;
        }

        #print.borderos {
            position: absolute;
            left: 0;
            top: 0;
        }

    }

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