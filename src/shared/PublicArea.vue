<template>
    <div>

        <!--<public-header></public-header>-->
        <router-view></router-view>

    </div>
</template>

<script>

    import PublicHeader from './PublicHeader.vue';

    export default {
        components: {
            'public-header': PublicHeader,

        }
    }




</script>

<style>

</style>