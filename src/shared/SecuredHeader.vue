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

            <div ref="dropdownUserMenu" class="my-navbar-item user-icon" @click="toggleUserMenu">
                <div class="user-toggle-icon">
                    <img v-if="this.dadosUsuario.imagem64" class="rounded-circle" :src="getImagem" alt="imagem cnh">
                    <img src="./../assets/img/user.png" class="rounded-circle" alt="imagem cnh" v-else>
                </div>
            </div>

        </nav>

        <div ref="menuUser" class="wrapper">
            <left-menu-header :dadosUsuario="dadosUsuario" v-if="showUserMenu"></left-menu-header>
        </div>


    </header>
</template>


<script>

    import {eventHub} from '../main.js';
    import {MenuService} from '../services/menuService';
    import LeftMenuHeader from './LeftMenuHeader.vue';

    export default {
        props: ['dadosUsuario'],
        data() {
            return {
                showMenu: false,
                showUserMenu: false
            }
        },
        components: {
            'left-menu-header': LeftMenuHeader,
        },
        computed: {
            getImagem: function () {
                return this.dadosUsuario.imagem64;
            }
        },
        methods: {
            toggleMenu: function () {
                MenuService.toggle();
            },
            toggleUserMenu: function () {
                this.showUserMenu = !this.showUserMenu;
            },
            goToVeiculos() {
                this.$router.push({path: '/area-segura/veiculos'});
            },
            goToHome() {
                this.$router.push({path: '/area-segura/home'});
            },
            documentClick(e) {
                console.log('chamou');
                let el = this.$refs.dropdownUserMenu;
                let target = e.target;
                let el2 = this.$refs.menuUser;
                if (el !== target && !el.contains(target) && (el2 && el2 !== target && !el2.contains(target)))
                    this.showUserMenu = false;
            }
        },
        created: function () {

            eventHub.$on('toggleMenuEvent', (show) => {
                this.showMenu = show;
            });

            document.addEventListener('click', this.documentClick);
        },
        destroyed() {
            document.removeEventListener('click', this.documentClick)
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
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.05);
        /*border-bottom: 1px solid #cac5c5;*/
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
        margin: 0 auto;
    }

    @media (min-width: 993px) {
        .my-navbar-item.brand-middle {
            font-size: 1.5em;
        }

        .brand-middle-wrapper {
            width: 200px;
            margin: 0;
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