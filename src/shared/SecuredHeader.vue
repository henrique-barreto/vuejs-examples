<template>

    <header>
        <nav class="my-navbar fixed-top">

            <div class="my-navbar-item toggle-wrapper">
                <span v-bind:class="{'rotate-in': showMenu}" @click="toggleMenu()" class="my-navbar-toggle-icon">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </span>
            </div>

            <div class="my-navbar-item brand-middle">
                <div @click="goToHome" class="brand-middle-wrapper">
                    <img src="./../assets/img/logo-detran.png" alt="logo" style="max-height: 40px;">
                    <span class="brand-titulo">DETRAN-DF</span>
                </div>
            </div>

            <div @click="goToVeiculos" class="my-navbar-item vinculos-icon">
                <div class="vinculos-icon-wrapper">

                    <div class="vinculo-icon"><i class="fa fa-car" aria-hidden="true"></i></div>
                    <div class="vinculo-info">Veículos</div>
                </div>
            </div>

            <div class="my-navbar-item user-icon">
                <div class="user-toggle-icon">
                    <img class="rounded-circle"
                         :src="dadosUsuario.imagem64" alt="asdff">
                </div>
            </div>

        </nav>
    </header>
</template>


<script>

    import {eventHub} from '../main.js';
    import {MenuService} from '../services/menuService';

    export default {

        props: ['dadosUsuario'],
        data() {
            return {
                showMenu: MenuService.getShowMenu(),
            }
        },
        methods: {
            toggleMenu: function () {
                MenuService.toggle();
            },
            updateToggleState: function () {
                this.showMenu = MenuService.getShowMenu();
            },
            goToVeiculos() {
                this.$router.push({path: '/area-segura/veiculos'});
            },
            goToHome() {
                this.$router.push({path: '/area-segura/home'});
            }
        },
        created: function () {
            eventHub.$on('toggleMenuEvent', this.updateToggleState);
        }
    }
</script>

<style scoped>

    .my-navbar {
        background-color: #fff;
        height: 56px;
        max-height: 56px;
        overflow: hidden;
        display: table;
        width: 100%;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
    }

    .my-navbar .my-navbar-item {
        height: 40px;
        max-height: 40px;
        margin: 0;
        padding: .5rem 1rem;
        vertical-align: middle;
    }

    .my-navbar .my-navbar-item.toggle-wrapper {
        display: table-cell;
        width: 50px;
        height: 40px;
        max-height: 40px;
    }

    .my-navbar .my-navbar-item.brand-middle {
        overflow: hidden;
        display: table-cell;
        text-align: center;
        height: 40px;
        max-height: 40px;
    }

    .my-navbar .my-navbar-item.vinculos-icon {
        width: 50px;
        height: 40px;
        max-height: 40px;
        border-right: 1px solid #eee;
        display: none;
        cursor: pointer;
    }

    .my-navbar .my-navbar-item.vinculos-icon:hover {
        background-color: #f1f1f1;
    }

    .my-navbar .my-navbar-item.user-icon {
        display: table-cell;
        width: 50px;
        height: 40px;
        max-height: 40px;
        cursor: pointer;
    }

    .my-navbar .my-navbar-item.user-icon:hover {
        background-color: #f1f1f1;
    }

    @media (min-width: 435px) {
        .my-navbar .my-navbar-item.vinculos-icon {
            display: table-cell;
        }
    }

    @media (min-width: 993px) {
        .my-navbar .my-navbar-item.toggle-wrapper {
            display: none;
        }

        .my-navbar .my-navbar-item.brand-middle {
            overflow: hidden;
            display: table-cell;
            text-align: left;
        }
    }
    /* fim estrutura*/

    /*toggler*/
    .my-navbar .fa {
        font-size: 2em;
        position: relative;
        top: 1.5px;
    }

    .my-navbar-toggle-icon {
        cursor: pointer;
        display: inline-block;
    }

    @media (min-width: 993px) {
        .my-navbar-toggle-icon {
            display: none;
        }
    }

    /*spin efect*/
    .my-navbar-toggle-icon {
        transition: all 0.2s;
        -webkit-transition: all 0.2s;
    }

    .rotate-in {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
    }

    /*fim toggler*/

    /*middle-brand*/
    .my-navbar-item.brand-middle {
        font-size: 1.2em;
        font-weight: bold;
    }

    .my-navbar-item.brand-middle .brand-titulo {
        top: 2px;
        position: relative;
    }


    .brand-middle-wrapper {
        width: 165px;
        cursor: pointer;
    }

    @media (min-width: 993px) {
        .my-navbar-item.brand-middle {
            font-size: 1.5em;
        }
        .brand-middle-wrapper {
            width: 200px;
        }
    }


    /*fim middle-brand*/

    /*usuario ===========*/
    .user-toggle-icon {
        cursor: pointer;
        /*background-color: blue;*/
    }

    .user-toggle-icon img {
        border: 2px solid #333;
        max-height: 34px;
        width: 34px;
        max-width: 34px;
    }

    /*fim usuario ============*/

    /*vinculos*/
    .my-navbar .my-navbar-item.vinculos-icon {
        text-align: center;
    }

    .vinculo-icon {
        font-size: 0.8em;
    }

    .vinculo-info {
        font-size: 0.6em;
    }

    /*fim vinculos*/

</style>