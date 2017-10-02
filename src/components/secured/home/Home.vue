<template>


    <main class="padding-side-nav">

        <div class="container-conteudo">
            <h1>Hello</h1>
            <hr>
        </div>
    </main>

</template>

<script>
    export default {}
</script>

<style>
    .container-conteudo {
        margin-right: auto;
        margin-left: auto;
        padding-left: 6px;
        padding-right: 6px;
        background-color: pink;
    }
    @media (min-width: 768px) {
        .container-conteudo {
            width: 732px;
        }
    }
    @media (min-width: 992px) {
        .container-conteudo {
            min-width: 700px;
            max-width: 1150px;
            width: 80%;
        }
    }
    @media (min-width: 1200px) {
        .container-conteudo {
            width: 80%;
            max-width: 1150px;
        }
    }

    @media (min-width: 993px) {
        main.padding-side-nav, footer.padding-side-nav {
            padding-left: 280px;
        }
    }
</style>