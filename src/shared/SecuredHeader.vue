<template>

    <header>
        <nav class="navbar fixed-top navbar-expand-lg navbar-white bg-white">

            <span v-bind:class="{'rotate-in': showMenu}" @click="toggleMenu(this)" class="toggle-icon">
                <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
            </span>

            <a class="navbar-brand" href="#">DETRAN</a>


        </nav>
    </header>
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
            toggleMenu: function (event) {
                this.showMenu = !this.showMenu;

                eventHub.$emit('toggleMenuEvent', this.showMenu);
            }
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
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
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
</style>