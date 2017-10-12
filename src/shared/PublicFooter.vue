<template>

    <footer class="footer padding-side-nav">
        <div class="footer-wrapper">
            <div class="infos">
                <div>@Detran DF - Departamento de Trânsito do Distrito Federal</div>
                <div>SAM, Lote "A" Bloco "B" Ed. Sede DETRAN/DF - CEP: 70.620-000</div>
                <div>Telefone: (61) 3120-9800</div>
            </div>


            <ul>
                <li>
                    <a href="/"> Dúvidas</a>
                </li>
                <li>
                    <a href="/"> Site</a>
                </li>
                <li>
                    <a href="/"> Institucional</a>
                </li>
                <li>
                    <a href="/"> Atendimento</a>
                </li>

            </ul>
        </div>


    </footer>

</template>


<script>
    export default {}
</script>

<style scoped>

    footer {
        height: 80px;
        min-height: 80px;
        overflow: hidden;
        width: 100%;
        background-color: #dedede;
        border-top: 1px solid #bbb;
    }

    .footer-wrapper {
        /*padding: 10px;*/
        /*position: relative;*/
        /*background-color: #f2f2f2;*/
    }

    .footer-wrapper {
        margin-top: 8px;
    }
    .footer-wrapper .infos {
        font-size: 0.85em;
        line-height: 0.9;
        text-align: center;
        color: #8a8a8a;
    }

    /*.footer-info {*/
        /*color: #8a8a8a;*/
        /*text-align: center;*/
        /*padding-top: 15px;*/
    /*}*/

    footer ul {
        font-size: 0.8em;
        text-align: center;
        list-style: none;
        margin: 0;
        padding: 10px 0 10px;
    }

    footer ul li {
        display: inline-block;
        margin-right: 10px;
    }

    footer ul li a {
        color: #8a8a8a;
        text-decoration: underline;
    }

    footer ul li a:hover {
        text-decoration: none;
    }
</style>