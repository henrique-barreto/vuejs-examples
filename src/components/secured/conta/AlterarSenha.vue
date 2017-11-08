<template>


    <section class="section">

        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/area-segura/home">Home</router-link>
            </li>
            <li class="breadcrumb-item">
                <router-link to="/area-segura/minha-conta">Minha Conta</router-link>
            </li>
            <li class="breadcrumb-item active">Alterar conta</li>
        </ol>

        <titulo-pagina :title="'Alterar Senha'" :tipo="'primario'"></titulo-pagina>


        <div class="alterar-senha-wrapper">

            <form @submit.prevent="enviar">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem excepturi.
                </p>
                <div :class="{ 'form-group-invalid': isPasswordAtualInvalid}" class="form-group">
                    <label for="passwordAtual" class="is-invalid">Senha atual</label>
                    <input type="password"
                           autocomplete="off"
                           class="form-control"
                           id="passwordAtual"
                           placeholder="Digite sua senha atual"
                           v-model="reset.passwordAtual"
                           v-validate="{ required: true, min: 6}"
                           name="passwordAtual">
                    <small class="invalid-feedback" v-show="isPasswordAtualInvalid">
                        Senha deve conter no mínimo 6 dígitos
                    </small>
                </div>

                <hr/>
                <div :class="{ 'form-group-invalid': isPasswordInvalid}" class="form-group">
                    <label for="password" class="is-invalid">Nova senha</label>
                    <input type="password"
                           autocomplete="off"
                           class="form-control"
                           id="password"
                           placeholder="Digite sua nova senha"
                           v-model="reset.password"
                           v-validate="{ required: true, min: 6}"
                           name="password">
                    <small class="invalid-feedback" v-show="isPasswordInvalid">
                        Senha deve conter no mínimo 6 dígitos
                    </small>
                </div>
                <div :class="{ 'form-group-invalid': isConfirmPasswordInvalid}" class="form-group">
                    <label for="confirmPassword" class="is-invalid">Confirmar nova senha</label>
                    <input type="password"
                           autocomplete="off"
                           class="form-control"
                           id="confirmPassword"
                           placeholder="Confirme sua nova senha"
                           v-model="reset.confirmPassword"
                           v-validate="{ required: true, min: 6 }"
                           name="confirmPassword">
                    <small class="invalid-feedback" v-show="isConfirmPasswordInvalid">
                        Confirma senha deve ser igual ao campo acima
                    </small>
                </div>

                <div class="btn-form">
                    <button v-bind:class="{'disabled': loading}"
                            type="submit"
                            class="btn btn-success">
                        <span v-html="enviarMsg"></span>
                    </button>
                </div>


            </form>

        </div>


    </section>

</template>

<script>

    import TituloPagina from '../../../shared/types/TituloPagina.vue';
    import Spinner from '../../../shared/types/Spinner.vue';
    import {RegistroService} from './../../../services/registroService.js';

    export default {

        data() {
            return {
                loading: false,
                reset: {
                    passwordAtual: '',
                    password: '',
                    confirmPassword: ''
                }
            }
        },
        methods: {

            enviar: function () {
                if (this.loading)
                    return;

                this.$validator.validateAll().then((result) => {
                    if (!result) {
                        this.$validator.flag('passwordAtual', {touched: true});
                        this.$validator.flag('password', {touched: true});
                        this.$validator.flag('confirmPassword', {touched: true});
                        return;
                    }

                    this.loading = true;
                    let reqBody = {atual: this.reset.passwordAtual, novoPassword: this.reset.password};
                    new RegistroService(this.$http).changePassword(reqBody).then(
                        response => {
                            this.loading = false;

                            this.$toast.success({
                                title: 'Senha alterada',
                                message: response.body.message
                            });

                            this.reset.passwordAtual = '';
                            this.reset.password = '';
                            this.reset.confirmPassword = '';
                            this.errors.clear();
                            this.$validator.clean();
                        },
                        error => {
                            this.loading = false;
                            if (error.status === 400) {
                                this.$toast.error({
                                    title: 'Erro trocar senha',
                                    message: error.body.message
                                });
                            }
                        });

                });
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
            isPasswordAtualInvalid: function () {
                return this.errors.has('passwordAtual') && this.fields.passwordAtual && this.fields.passwordAtual.touched;
            },
            isConfirmPasswordInvalid: function () {
                return this.reset.confirmPassword !== this.reset.password && this.fields.confirmPassword.touched;
            }
        },
        components: {
            'titulo-pagina': TituloPagina,
            'spinner': Spinner
        }
    }

</script>

<style scoped>

    .alterar-senha-wrapper {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50px;
    }

    .btn-form button {
        width: 100%;
    }

    @media (min-width: 768px) {
        .alterar-senha-wrapper {
            width: 450px;
            margin-left: 0;
            margin-right: 0;
        }

        .btn-form button {
            width: auto;
        }
    }


</style>