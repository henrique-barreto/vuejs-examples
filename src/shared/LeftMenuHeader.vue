<template>
    <div class="menu-left-header" ref="dropdownUserMenuChild">
        <div class="row no-gutters user-info">
            <div class="col-4">
                <div class="imagem-usuario">
                    <img v-if="this.dadosUsuario.imagem64" class="rounded-circle" :src="dadosUsuario.imagem64" alt="imagem cnh">
                    <img src="./../assets/img/user.png" class="rounded-circle" alt="imagem cnh" v-else>
                </div>
            </div>
            <div class="col-8 info-right">
                <div class="dadosInfo">
                    <div class="nome"> HENRIQUE GONCALVES BARRETO</div>
                    <div class="email"> henriquegbar@gmail.com</div>
                </div>
                <div class="btn-acc">
                    <button class="btn btn-primary btn-sm">Minha conta</button>
                </div>
            </div>
        </div>
        <div class="acoes-header">
            <div class="encerrar" @click="sair">
                <i class="fa fa-sign-out" aria-hidden="true"></i> Encerrar sessão
            </div>
        </div>
    </div>
</template>

<script>

    import {authStore} from '../store/authStore.js';

    export default {
        props: ['dadosUsuario'],
        methods: {
            sair: function () {

                authStore.dispatch('logout').then(
                    res => {
                        this.$router.push({path: '/'});
                    }, error => {
                        console.log(error);
                        this.$router.push({path: '/'});
                    });
            }
        }
    }
</script>

<style scoped>
    

    /*new*/
    .menu-left-header {
        background-color: rgb(243, 243, 243);
        float: right;
        right: 0;
        position: absolute;
        margin-right: 5px;
        top: 57px;
        border: 1px solid #ccc;
        border-color: rgba(0,0,0,.2);
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,.2);
        z-index: 999999;

        opacity: 1;
        transition: opacity .25s ease-in-out;
        -moz-transition: opacity .25s ease-in-out;
        -webkit-transition: opacity .25s ease-in-out;
    }

    .user-info {
        background-color: #fff;
        padding-bottom: 8px;
        border-radius: 4px;
    }
    .no-gutters {
        margin-right: 0;
        margin-left: 0;
    }

    .col, [class*="col-"] {
        padding-right: 0;
        padding-left: 0;
    }

    .menu-left-header {
        margin-bottom: 10px;
    }

    .imagem-usuario {
        text-align: center;
        margin-top: 8px;
    }

    .imagem-usuario img {
        border: 2px solid #999;
        height: 96px;
        width: 96px;
    }

    .dadosInfo {
        margin-top: 8px;
        word-break: break-all;
        overflow: hidden;
    }

    .col-7.info-right {
        padding-right: 10px;
    }

    .btn-acc {
        text-align: center;
        margin-top: 15px;
    }

    .btn-acc button {
        cursor: pointer;
    }

    .acoes-header {
        /*margin-top: 8px;*/
        border-radius: 4px;
    }

    .acoes-header .encerrar {

        border-radius: 4px;

        padding: 8px;
        border-top: 1px solid #cac5c5;
        border-bottom: 1px solid #cac5c5;
        background-color: #f3f3f3;
        cursor: pointer;
    }

    .acoes-header .encerrar .fa {
        font-size: 1.3em;
        position: relative;
        top: 2px;
        margin-right: 5px;
        margin-left: 5px;
    }

    .acoes-header .encerrar:hover {
        background-color: #e2e2e2;
    }

    .dadosInfo .nome {
        padding: 0px 0px;
        font-size: 0.8em;
        font-weight: bold;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .dadosInfo .email {
        padding: 0px 0px;
        font-size: 0.75em;
        margin-bottom: 8px;
        line-height: 0.8;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .dadosInfo {
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .dadosInfo .conta button {
        cursor: pointer;
    }



    @media (min-width: 435px) {
        .menu-left-header {
            width: 390px;
        }
    }

</style>