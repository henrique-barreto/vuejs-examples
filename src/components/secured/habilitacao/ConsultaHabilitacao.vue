<template>

    <section class="section" v-if="!loading">

        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/area-segura/home">Home</router-link>
            </li>
            <li class="breadcrumb-item active">Habilitação</li>
        </ol>

        <titulo-pagina :title="'Consulta Habilitação'" :tipo="'primario'"></titulo-pagina>

        <div class="habilitacao-wrapper" v-if="habilitado">

            <div class="habilitacao-info">
                <form id="needs-validation" novalidate>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label>Renach</label>
                            <input type="text"
                                   readonly
                                   class="form-control-plaintext"
                                   :value="dadosHabilitacao.renach">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>Data de Nascimento</label>
                            <input type="text"
                                   readonly
                                   class="form-control-plaintext"
                                   :value="dadosHabilitacao.dataNascimento | formatBR">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <label>Nome</label>
                            <input type="text"
                                   readonly
                                   class="form-control-plaintext"
                                   :value="dadosHabilitacao.nomeCNH">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label>Categoria</label>
                            <input type="text"
                                   readonly
                                   class="form-control-plaintext"
                                   :value="dadosHabilitacao.categoriaCNH">
                        </div>
                        <div class="col-md-4 mb-3">
                            <label>Validade</label>
                            <input type="text"
                                   readonly
                                   class="form-control-plaintext"
                                   :value="dadosHabilitacao.validadeCNH | formatBR">
                        </div>
                        <div class="col-md-4 mb-3">
                            <label>Tipo</label>
                            <input type="text"
                                   readonly
                                   class="form-control-plaintext"
                                   :value="dadosHabilitacao.tipo">
                        </div>
                    </div>
                </form>
            </div>


            <div class="habilitacao-pontucao" style="padding-right: 10px;">
                <!--<label>Dados da pontução</label>-->

                <titulo-pagina :title="'Dados da pontução'" :tipo="'secundario'"></titulo-pagina>
                <div class="card card-padding">
                    <table class="table table-responsive table-bordered text-center">
                        <thead>
                        <tr>
                            <th>Grupo de Pontos</th>
                            <th>Quantidade</th>
                            <th>Pontos</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Grupo 1 - Leve</td>
                            <td>{{ dadosHabilitacao.dadosPontuacao.qtdMultasLeve }}</td>
                            <td>{{ dadosHabilitacao.dadosPontuacao.qtdPontosLeve }}</td>
                        </tr>
                        <tr>
                            <td>Grupo 2 - Média</td>
                            <td>{{ dadosHabilitacao.dadosPontuacao.qtdMultasMedia }}</td>
                            <td>{{ dadosHabilitacao.dadosPontuacao.qtdPontosMedia }}</td>
                        </tr>
                        <tr>
                            <td>Grupo 3 - Grave</td>
                            <td>{{ dadosHabilitacao.dadosPontuacao.qtdMultasGrave }}</td>
                            <td>{{ dadosHabilitacao.dadosPontuacao.qtdPontosGrave }}</td>
                        </tr>
                        <tr>
                            <td>Grupo 4 - Gravíssima</td>
                            <td>{{ dadosHabilitacao.dadosPontuacao.qtdMultasGravissima }}</td>
                            <td>{{ dadosHabilitacao.dadosPontuacao.qtdPontosGravissima }} </td>
                        </tr>
                        <tr class="total">
                            <td colspan="2" class="label">Total</td>
                            <td>{{ dadosHabilitacao.dadosPontuacao.pontos}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>

        <div v-else>

            <div class="alert alert-danger">
                {{ naoHabilitadoMsg }}
            </div>
        </div>
    </section>
    <section class="section" v-else>
        <spinner :tipo="'md'"></spinner>
    </section>

</template>

<script>

    import {usuarioStore} from '../../../store/usuarioStore.js';
    import {HabilitacaoService} from '../../../services/habilitacaoService';
    import TituloPagina from '../../../shared/types/TituloPagina.vue';
    import Spinner from '../../../shared/types/Spinner.vue';

    export default {


        data() {
            return {
                dadosHabilitacao: {},
                habilitado: true,
                naoHabilitadoMsg: '',
                loading: true
            }
        },
        filters: {
            formatBR: function (value) {
                if (!value) return '';
                let data = new Date(value);
                let dia = data.getDate();
                if (dia.toString().length === 1)
                    dia = "0" + dia;
                let mes = data.getMonth() + 1;
                if (mes.toString().length === 1)
                    mes = "0" + mes;
                let ano = data.getFullYear();
                return dia + "/" + mes + "/" + ano;
            }
        },
        computed: {
            dadosUsuario: function () {
                return usuarioStore.getters.dadosUsuarioLogado;
            }
        },
        created: function () {

            this.loading = true;
            new HabilitacaoService(this.$http).findHabilitacao().then(
                response => {
                    this.dadosHabilitacao = response.body;
                    this.loading = false;
                },
                error => {
                    this.loading = false;
                    if (error.status === 400) {
                        if (error.body.codigo === 'habilitacao.cpf.notfound') {
                            this.habilitado = false;
                            this.naoHabilitadoMsg = error.body.message;
                        }
                    } else {
                        if (error.status === 500)
                            this.$router.push({path: '/500'});
                    }
                });
        },
        components: {
            'titulo-pagina': TituloPagina,
            'spinner': Spinner
        },
    }
</script>


<style scoped>


    label {
        font-weight: bold;
    }

    table th {
        text-align: center;
    }

    table .total {
        font-weight: bold;
    }

    table .label {
        background-color: #f1f1f1;
    }

    .habilitacao-pontucao {
        margin-top: 20px;
    }

    .form-control-plaintext {
        display: block;
        width: 100%;
        padding: .5rem .75rem;
        border: 1px solid rgba(0, 0, 0, .15);
    }


</style>