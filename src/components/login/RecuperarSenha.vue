<template>

    <div class="wrapper">

        <public-header></public-header>

        <div class="conteudo-wrapper">

            <div class="conteudo">

                <div class="container">

                    <div class="recuperar-senha card card-padding">

                        <titulo-pagina :title="'Recuperar senha'" :tipo="'primario'"></titulo-pagina>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem excepturi.
                        </p>

                        <form @submit.prevent="enviar">
                            <div :class="{ 'form-group-invalid': isCpfInvalid}" class="form-group">
                                <label for="cpf" class="is-invalid">CPF</label>
                                <input type="text"
                                       autocomplete="off"
                                       class="form-control"
                                       id="cpf"
                                       placeholder="Digite seu CPF"
                                       v-model="cpf"
                                       v-validate="{ required: true, regex: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/ }"
                                       v-mask="'###.###.###-##'"
                                       name="cpf">
                                <small class="invalid-feedback" v-show="isCpfInvalid">CPF Inválido</small>
                            </div>
                            <div :class="{ 'form-group-invalid': isEmailInvalid}" class="form-group">
                                <label for="email">Email</label>
                                <input type="email"
                                       name="email"
                                       autocomplete="off"
                                       class="form-control"
                                       id="email"
                                       placeholder="Seu e-mail"
                                       v-validate="{ required: true, email: true}"
                                       v-model="email">
                                <small class="invalid-feedback" v-show="isEmailInvalid">
                                    E-mail inválido
                                </small>
                            </div>

                            <button v-bind:class="{'disabled': loading}"
                                    type="submit"
                                    class="btn btn-success btn-block">
                                <span v-html="enviarMsg"></span>
                            </button>

                            <div v-if="erroValidacao" class="alert alert-danger msg" role="alert">
                                {{ erroValidacao }}
                            </div>
                            <div v-if="successMessage" class="alert alert-success msg" role="alert">
                                {{ successMessage }}
                            </div>

                        </form>

                    </div>


                </div>

            </div>
        </div>

        <public-footer></public-footer>

    </div>

</template>


<script>

    import PublicHeader from '../../shared/PublicHeader.vue';
    import PublicFooter from '../../shared/PublicFooter.vue';
    import TituloPagina from '../../shared/types/TituloPagina.vue';
    import {RegistroService} from './../../services/registroService.js';

    export default {

        components: {
            'public-header': PublicHeader,
            'public-footer': PublicFooter,
            'titulo-pagina': TituloPagina
        },
        data() {
            return {
                loading: false,
                cpf: '',
                email: '',
                erroValidacao: null,
                successMessage: null
            }
        },
        methods: {

            enviar: function () {
                if (this.loading)
                    return;

                this.$validator.validateAll().then((result) => {
                    if (!result) {
                        this.$validator.flag('cpf', {touched: true});
                        this.$validator.flag('email', {touched: true});
                        return;
                    }


                    this.loading = true;

                    this.erroValidacao = null;
                    this.successMessage = null;
                    let cpfFormatado = this.cpf.split('-').join('');
                    cpfFormatado = cpfFormatado.split('.').join('');
                    new RegistroService(this.$http).sendResetPassword({cpf: cpfFormatado, email: this.email}).then(
                        response => {
                            this.loading = false;
                            this.successMessage = response.body.message;
                            this.cpf = '';
                            this.email = '';
                            this.errors.clear();
                            this.$validator.clean();
                        },
                        error => {
                            this.loading = false;
                            if (error.status === 400) {
                                if (error.body.codigo === 'validacao.error') {
                                    Object.keys(error.body.errors).forEach(key => {
                                        this.erroValidacao = error.body.errors[key];
                                    });
                                } else {
                                    this.erroValidacao = error.body.message;
                                }
                            } else {
                                this.erroValidacao = "Ocorreu um erro ao se conectar com o servidor!";
                            }

                        });

                });
            }

        },
        computed: {
            enviarMsg: function () {
                if (!this.loading)
                    return 'Enviar <i class="fa fa-paper-plane" aria-hidden="true"></i>';
                return 'Enviando... <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>';
            },
            isCpfInvalid: function () {
                return this.errors.has('cpf') && this.fields.cpf && this.fields.cpf.touched;
            },
            isEmailInvalid: function () {
                return this.errors.has('email') && this.fields.email && this.fields.email.touched;
            }
        }

    }

</script>


<style scoped>

    .wrapper {
        height: 100%;
        background-color: #f1f1f1;
    }

    .conteudo-wrapper {
        min-height: calc(100vh - 83px);
        padding-top: 56px;
        margin: 0;
    }

    .conteudo {
        height: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    label {
        font-weight: bold;
    }

    .recuperar-senha {
        margin: 0 auto;
    }

    @media (min-width: 560px) {
        .recuperar-senha {
            width: 450px;
        }
    }

    .msg {
        margin-top: 10px;
    }
</style>