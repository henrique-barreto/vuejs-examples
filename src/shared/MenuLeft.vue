<template>

    <div>
        <div v-if="showMenu" @click="toggleMenu" class="body-overlay"></div>

        <div id="slide-out" v-bind:class="{'active': showMenu}" class="side-nav fixed">

            <div class="menu-left">
                <span>Detran</span>
            </div>

            <div class="nav-links">

                <div class="nav-group">
                    <div class="nav-item-header">
                        <span>Veiculos</span>
                    </div>
                    <!--./nav-item-header-->
                    <div class="nav-list">
                        <ul class="menu-list">
                            <li>
                                <router-link @click.native="toggleMenu" to="/">Inicio Teste</router-link>
                            </li>
                            <li>
                                <router-link @click.native="toggleMenu" to="/area-segura">Home</router-link>
                            </li>
                            <li>
                                <router-link @click.native="toggleMenu" to="/area-segura/segunda-via-crlv">
                                    Mudança de Endereço do Veículo
                                </router-link>
                            </li>
                            <li>
                                <router-link @click.native="toggleMenu" to="/area-segura/segunda-via-crlv">
                                    Solicitação de 2° via de CRLV
                                </router-link>
                            </li>
                            <li>
                                <router-link @click.native="toggleMenu" to="/area-segura/segunda-via-crlv">
                                    Transformar Notificação de Autuação em Penalidade
                                </router-link>
                            </li>
                            <li>
                                <router-link @click.native="toggleMenu" to="/area-segura/segunda-via-crlv">
                                    Emissão de Autorização de Estacionamento para Idoso
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- ./nav-list-->
                </div>
                <!--./nav-group-->

                <div class="nav-group">
                    <div class="nav-item-header">
                        <span>Habilitacao</span>
                    </div>
                    <!--./nav-item-header-->
                    <div class="nav-list">
                        <ul class="menu-list">
                            <li>
                                <router-link @click.native="toggleMenu" to="/">Inicio</router-link>
                            </li>
                            <li>
                                <router-link @click.native="toggleMenu" to="/area-segura/habilitacao">
                                    Consulta Pontuação
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- ./nav-list-->
                </div>
                <!--./nav-group-->

            </div>
            <!--./ nav-links -->

        </div>
        <!--side-nav-->

    </div>
</template>

<script>

    import {eventHub} from '../main.js';

    import {MenuService} from '../services/menuService';

    export default {

        data() {
            return {
                showMenu: false
            }
        },
        methods: {
            toggleMenu: function () {
                let width = window.innerWidth
                    || document.documentElement.clientWidth
                    || document.body.clientWidth;

                if (width <= 992)
                    MenuService.toggle();
            },
            updateToggleState: function () {
                this.showMenu = MenuService.getShowMenu();
            }
        },
        created: function () {
            eventHub.$on('toggleMenuEvent', this.updateToggleState);
        }
    }
</script>

<style>

    .side-nav {
        transition: all 0.2s;
        -webkit-transition: all 0.2s;
        position: fixed;
        width: 280px;
        left: 0;
        top: 50px;
        margin: 0;
        height: calc(100% - 50px);
        height: -moz-calc(100%);
        padding-bottom: 60px;
        background-color: #2c303b;
        border-right: 1px solid #333;
        z-index: 999;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        overflow-y: auto;
        will-change: transform;
        -webkit-transform: translateX(-105%);
        transform: translateX(-105%);
        padding-left: 0;

        color: #FFF;
    }

    .side-nav ul {
        padding-left: 0px;
        margin: 10px 0 0;
    }

    .side-nav li {
        float: none;
        /*line-height: 48px;*/
        /*min-height: 48px;*/
        border-left: 4px solid #face0e;
        margin-left: 10px;
        margin-bottom: 10px;
    }

    .side-nav li a {
        display:table-cell;
        vertical-align:middle;
        padding: 0 14px;
        height: 32px;
        width: 100%;
        color: #fff;
        font-size: 14px;
    }

    .side-nav li a:hover {
        background-color: blue;
    }

    /*.side-nav a {*/
        /*!*color: rgba(0, 0, 0, 0.87);*!*/
        /*color: #fff;*/
        /*display: block;*/
        /*font-size: 14px;*/
        /*font-weight: 500;*/
        /*height: 32px;*/
    /*}*/

    .side-nav.fixed {
        left: 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
        position: fixed;
    }

    /*menor que 992*/
    @media only screen and (max-width: 992px) {
        .side-nav.fixed {
            -webkit-transform: translateX(-105%);
            transform: translateX(-105%);
        }

        .side-nav a {
            padding: 0 16px;
        }

        .side-nav.fixed.active {
            transition: all 0.6s;
            -webkit-transition: all 0.2s;
            transform: translateX(0);
            -webkit-transform: translateX(0);
        }

    }

    .body-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 120vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 997;
        will-change: opacity;
    }

    #slide-out li {
        list-style: none;
    }


</style>