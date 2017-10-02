<template>
    <div>


        <menu-left></menu-left>
        <secured-header></secured-header>
        <router-view></router-view>
    </div>
</template>

<script>

    import SecuredHeader from './SecuredHeader.vue';
    import MenuLeft from './MenuLeft.vue';

    export default {
        components: {
            'secured-header': SecuredHeader,
            'menu-left': MenuLeft
        }
    }

</script>

<style>

</style>