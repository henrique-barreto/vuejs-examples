<template>

    <section class="section">

        <div class="page-info">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/area-segura/home">Home</router-link>
                </li>
                <li class="breadcrumb-item active">Notificação de Autuação para Penalidade</li>
            </ol>
            <titulo-pagina :title="'Termo Responsabilidade'"
                           :tipo="'primario'"></titulo-pagina>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cum, dolor dolorum eius illum inventore iusto mollitia pariatur provident, recusandae soluta totam voluptas voluptatibus! Consequatur odio quae qui quia voluptatem.</p>
        </div>
        <!--fim page-info-->


        <div class="confirmacao">

            <strong>Termo de responsabilidade</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam possimus quod ullam voluptatem voluptatum! Adipisci eius explicabo fugiat inventore, natus nesciunt nihil nulla odit, quod recusandae repudiandae sunt ut, voluptate!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam possimus quod ullam voluptatem voluptatum! Adipisci eius explicabo fugiat inventore, natus nesciunt nihil nulla odit, quod recusandae repudiandae sunt ut, voluptate!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam possimus quod ullam voluptatem voluptatum! Adipisci eius explicabo fugiat inventore, natus nesciunt nihil nulla odit, quod recusandae repudiandae sunt ut, voluptate!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam possimus quod ullam voluptatem voluptatum! Adipisci eius explicabo fugiat inventore, natus nesciunt nihil nulla odit, quod recusandae repudiandae sunt ut, voluptate!</p>

            <div class="btns-form">
                <button class="btn btn-outline-secondary" @click="confirmar">Voltar</button>
                <button class="btn btn-success" @click="confirmar">Confirmar</button>
            </div>

        </div>


    </section>
    <!--fim section-->

</template>

<script>

    import TituloPagina from '../../../../shared/types/TituloPagina.vue';
    import Spinner from "../../../../shared/types/Spinner.vue";
    import {nanpStore} from "./nanpStore.js";
    import {VeiculoService} from "../../../../services/veiculoService";

    export default {
        components: {
            'titulo-pagina': TituloPagina
        },
        computed: {
            autosSelecionados: function () {
                return nanpStore.getAutos();
            },
            veiculo: function () {
                return nanpStore.getVeiculo();
            }
        },
        methods: {
            confirmar: function () {
                console.log('confirmar');
                this.$router.push({path: '/area-segura/transformar-na-np/gerar-boleto'});
            }
        },
        mounted: function () {
            if (!this.autosSelecionados ||
                this.autosSelecionados.length === 0 ||
                !this.veiculo) {
                this.$router.push({path: '/area-segura/transformar-na-np'});
            }
        }
    }
</script>


<style scoped>

    .btns-form {
        margin-top: 20px;
        text-align: center;
    }

</style>