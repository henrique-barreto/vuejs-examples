<template>
    <div>
        <secured-header></secured-header>
        <router-view></router-view>
    </div>
</template>

<script>

    import SecuredHeader from './SecuredHeader.vue';

    export default {
        components: {
            'secured-header': SecuredHeader
        }
    }

</script>

<style>

</style>