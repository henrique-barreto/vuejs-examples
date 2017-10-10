<template>


    <div class="pagina-titulo" v-if="tipo === 'primario'">
            <span>
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                <h1>{{ title }}</h1>
            </span>
    </div>
    <div class="pagina-titulo-2" v-else>
            <span>
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                <h2>{{ title }}</h2>
            </span>
    </div>

</template>


<script>


    export default {


        props: ['title', 'tipo']

    }

</script>

<style scoped>

    .pagina-titulo {
        margin-bottom: 10px;
    }
    .pagina-titulo h1 {
        display: inline-block;
        font-size: 1.8em;
    }

    .pagina-titulo .fa {
        display: inline-block;
        font-size: 1.5em;
        color: #FFC107;
        /*color: #ddd;*/
        position: relative;
        top: -1px;
    }

    .pagina-titulo-2 {
        margin-bottom: 5px;
    }
    .pagina-titulo-2 h2 {
        display: inline-block;
        font-size: 1.3em;
    }

    .pagina-titulo-2 .fa {
        display: inline-block;
        font-size: 1.1em;

        color: #FFC107;
        /*color: #ddd;*/
        position: relative;
        top: -2px;
    }

</style>