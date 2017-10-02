<template>

    <div>
        <div v-if="showMenu" class="body-overlay"></div>

        <div id="slide-out" v-bind:class="{'active': showMenu}" class="side-nav fixed">

            <div class="menu-treinoapp">
                <span>TreinoApp</span>
            </div>

        </div>

    </div>
</template>

<script>

    import {eventHub} from '../main.js';
    export default {

        data() {
            return {

                showMenu: true
            }
        },
        methods: {
            alertTest: function (showMenuArg) {
                console.log(showMenuArg);
                this.showMenu = showMenuArg;
            }
        }
        ,
        created: function() {

            eventHub.$on('toggleMenuEvent', this.alertTest);
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
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        height: 100%;
        height: calc(100% - 50px);
        height: -moz-calc(100%);
        padding-bottom: 60px;
        background-color: #1a256e;
        border-right: 1px solid #e8e8e8;
        z-index: 999;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        overflow-y: auto;
        /*overflow: auto;*/
        will-change: transform;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateX(-105%);
        transform: translateX(-105%);
        padding-left: 0;
    }

    /*.side-nav:hover {
        overflow-y: auto;
    }*/

    .side-nav.right-aligned {
        right: 0;
        -webkit-transform: translateX(105%);
        transform: translateX(105%);
        left: auto;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }

    .side-nav .collapsible {
        margin: 0;
    }

    .side-nav li {
        float: none;
        line-height: 48px;
    }

    .side-nav li.active {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .side-nav a {
        color: rgba(0, 0, 0, 0.87);
        display: block;
        font-size: 14px;
        font-weight: 500;
        height: 48px;
        line-height: 48px;
        padding: 0 32px;
    }

    .side-nav.fixed a {
        display: block;
        padding: 0 16px;
    }

    .side-nav.fixed {
        left: 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
        position: fixed;
    }

    .side-nav.fixed.right-aligned {
        right: 0;
        left: auto;
    }

    /*menor que 992*/
    @media only screen and (max-width: 992px) {
        .side-nav.fixed {
            -webkit-transform: translateX(-105%);
            transform: translateX(-105%);
        }

        .side-nav.fixed.right-aligned {
            -webkit-transform: translateX(105%);
            transform: translateX(105%);
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

    #sidenav-overlay {
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