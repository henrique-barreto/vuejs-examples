<template>
    <div class="wrapper">
        <public-header></public-header>
        <div class="conteudo-wrapper">
            <div class="conteudo">
                <div class="container">
                    <div class="recuperar-senha card card-padding">
                        <titulo-pagina :title="'Escolher senha'" :tipo="'primario'"></titulo-pagina>
                        <form @submit.prevent="enviar" v-if="!codigoInvalidoMsg">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem excepturi.
                            </p>
                            <div class="form-group">
                                <label>E-mail</label>
                                <input type="text"
                                       readonly
                                       class="form-control-plaintext"
                                       :value="reset.email">
                            </div>
                            <div :class="{ 'form-group-invalid': isPasswordInvalid}" class="form-group">
                                <label for="password" class="is-invalid">Senha</label>
                                <input type="password"
                                       autocomplete="off"
                                       class="form-control"
                                       id="password"
                                       :disabled="reseted"
                                       placeholder="Digite sua senha"
                                       v-model="reset.password"
                                       v-validate="{ required: true, min: 6}"
                                       name="password">
                                <small class="invalid-feedback" v-show="isPasswordInvalid">
                                    Senha deve conter no mínimo 6 dígitos
                                </small>
                            </div>
                            <div :class="{ 'form-group-invalid': isConfirmPasswordInvalid}" class="form-group">
                                <label for="confirmPassword" class="is-invalid">Confirmar Senha</label>
                                <input type="password"
                                       autocomplete="off"
                                       :disabled="reseted"
                                       class="form-control"
                                       id="confirmPassword"
                                       placeholder="Confirme sua senha"
                                       v-model="reset.confirmPassword"
                                       v-validate="{ required: true, min: 6 }"
                                       name="confirmPassword">
                                <small class="invalid-feedback" v-show="isConfirmPasswordInvalid">
                                    Confirma senha deve ser igual ao campo acima
                                </small>
                            </div>

                            <button v-bind:class="{'disabled': loading}"
                                    type="submit"
                                    :disabled="reseted"
                                    class="btn btn-success btn-block">
                                <span v-html="enviarMsg"></span>
                            </button>


                            <div v-if="successMsg">
                                <div class="alert alert-success msg" role="alert">
                                    {{ successMsg }}
                                </div>

                                <button type="button" @click="goToLogin()" class="btn btn-outline-success btn-block">Clique para entrar <i class="fa fa-caret-right" aria-hidden="true"></i></button>
                            </div>

                            <div v-if="codigoInvalidoMsg" class="alert alert-danger msg" role="alert">
                                {{ codigoInvalidoMsg }}
                            </div>
                        </form>
                        <div class="alert alert-danger msg" role="alert" v-else>
                            <p> {{ codigoInvalidoMsg }}</p>
                        </div>
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
                reset: {
                    email: '',
                    password: '',
                    confirmPassword: '',
                    code: ''
                },
                codigoInvalidoMsg: null,
                successMsg: '',
                reseted: false
            }
        },
        methods: {

            enviar: function () {
                if (this.loading)
                    return;
                this.loading = true;

                new RegistroService(this.$http).setNewPassword(this.reset).then(
                    response => {
                        this.loading = false;
                        this.successMsg = response.body.message;

                        this.reset.password = '';
                        this.reset.resetPassword = '';
                        this.errors.clear();
                        this.$validator.clean();
                        this.reseted = true;
                    },
                    error => {
                        this.loading = false;
                        console.log(error);
                        this.codigoInvalidoMsg = error.body.message;
                    });
            },
            goToLogin: function() {
                this.$router.push({path: '/login'});
            }

        },
        created: function () {

            let code = this.$route.query.code;
            this.reset.code = code;
            console.log(code);


            if (this.reset.code) {
                new RegistroService(this.$http).findEmailByResetCode(this.reset.code).then(
                    response => {
                        console.log(response);
                        this.reset.email = response.body.message;
                    },
                    error => {
                        console.log(error);
                        this.codigoInvalidoMsg = error.body.message;
                    }
                );
            } else {
                this.codigoInvalidoMsg = 'Código inválido! Este código já foi utilizado ou não existe';
            }

        },
        computed: {
            enviarMsg: function () {
                if (!this.loading)
                    return 'Enviar <i class="fa fa-caret-right" aria-hidden="true"></i>';
                return 'Enviando... <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>';
            },
            isPasswordInvalid: function () {
                return this.errors.has('password') && this.fields.password && this.fields.password.touched;
            },
            isConfirmPasswordInvalid: function () {
                return this.reset.confirmPassword !== this.reset.password && this.fields.confirmPassword.touched;
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

    .form-control-plaintext {
        display: block;
        width: 100%;
        padding: .5rem 0rem;
        /*border: 1px solid rgba(0, 0, 0, .15);*/
    }


</style>