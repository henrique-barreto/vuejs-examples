<template>

    <header>
        <nav class="navbar fixed-top navbar-white bg-white">


           <span v-bind:class="{'rotate-in': showMenu}" @click="toggleMenu()"
                 class="navbar-toggler navbar-toggler-left toggle-icon">
                        <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
                    </span>


            <a class="navbar-brand" href="#">Detran</a>


            <div class="user-icon">


                <div class="vinculos" style="display: inline-block; border-right: 1px solid #f1f1f1;">

                    <span style="margin-right: 8px;"><i class="fa fa-car fa-2x" aria-hidden="true"></i></span>

                </div>
                <div class="teste" style="display: inline-block;">
                    <span STYLE="font-size: 0.8em;">HENRIQUE GONCALVES BARRETO</span>
                </div>
                <span class="icon-wrapper">
                <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                </span>
            </div>
        </nav>
    </header>
</template>


<script>

    import {eventHub} from '../main.js';
    import {MenuService} from '../services/menuService';

    export default {

        data() {
            return {
                showMenu: MenuService.getShowMenu()
            }
        },
        methods: {
            toggleMenu: function () {
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

<style scoped>

    .toggle-icon {
        margin-right: 15px;
        cursor: pointer;
    }

    .toggle-icon:hover {
        color: #454;
        /*transition: 1s ease-out;*/
    }

    .toggle-icon {
        transition: all 0.2s;
        -webkit-transition: all 0.2s;
    }

    .rotate-in {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
    }

    @-webkit-keyframes fadeout {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes fadeout {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @media (min-width: 993px) {
        .toggle-icon {
            display: none;
        }
    }
</style>