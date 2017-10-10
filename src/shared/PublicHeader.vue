<template>

    <header>
        <nav class="my-navbar fixed-top">

            <div class="my-navbar-item brand-middle">
                <div @click="goToLogin" class="brand-middle-wrapper">
                    <img src="./../assets/img/logo-detran.png" alt="logo" style="max-height: 40px;">
                    <span class="brand-titulo">DETRAN-DF</span>
                </div>
            </div>

        </nav>
    </header>
</template>


<script>

    export default {
        methods: {
            goToLogin() {
                this.$router.push({path: '/'});
            }
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
        /*box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);*/
        border-bottom: 1px solid #cac5c5;
    }

    .my-navbar .my-navbar-item {
        height: 40px;
        max-height: 40px;
        margin: 0;
        padding: .5rem 1rem;
        vertical-align: middle;
    }

    .my-navbar .my-navbar-item.brand-middle {
        overflow: hidden;
        display: table-cell;
        text-align: center;
        height: 40px;
        max-height: 40px;
    }



    @media (min-width: 993px) {
        .my-navbar .my-navbar-item.brand-middle {
            overflow: hidden;
            display: table-cell;
            text-align: left;
        }
    }
    /* fim estrutura*/

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

    .user-toggle-icon img {
        border: 2px solid #333;
        max-height: 34px;
        width: 34px;
        max-width: 34px;
    }

    /*fim usuario ============*/

</style>