<template>
    <form @submit.prevent="entrar">
        <div :class="{ 'form-group-invalid': isUsernameInvalid}" class="form-group">
            <label for="cpf" class="is-invalid">CPF</label>
            <input type="text"
                   tabindex="1"
                   class="form-control"
                   id="cpf"
                   placeholder="Digite seu CPF"
                   v-model="username"
                   v-validate="{ required: true, regex: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/ }"
                   v-mask="'###.###.###-##'"
                   name="username">
            <small class="invalid-feedback" v-show="isUsernameInvalid">CPF Inválido</small>
        </div>
        <div :class="{ 'form-group-invalid': isPasswordInvalid}" class="form-group">
            <div>
                <label for="password">Senha</label>
                <span class="pull-right"><router-link to="/recuperar-senha">Esqueceu a senha?</router-link></span>
            </div>
            <input type="password"
                   name="password"
                   tabindex="2"
                   class="form-control"
                   id="password"
                   placeholder="Senha"
                   v-validate="{ required: true, min: 6}"
                   v-model="password">
            <small class="invalid-feedback" v-show="isPasswordInvalid">Senha deve conter pelo menos 6 digitos</small>
        </div>

        <button v-bind:class="{'disabled': loading}"
                type="submit"
                class="btn btn-success btn-block">
            <span v-html="entrarMsg"></span>
        </button>

        <div v-if="usuarioSenhaInvalido === true" class="alert alert-danger" role="alert">
            Usuário ou senha inválidos!
        </div>

        <div v-if="erroServidor  === true" class="alert alert-danger" role="alert">
            Serviço temporariamente indisponível.
        </div>

        <div class="line"><span class="texto">OU</span></div>

        <button type="button" class="btn btn-outline-success btn-block">Registrar-se</button>
    </form>
</template>

<script>

    import {authStore} from '../../store/authStore.js';
    import {UsuarioService} from "../../services/usuarioService";

    export default {

        data() {
            return {
                loading: false,
                username: '',
                password: '',
                usuarioSenhaInvalido: false,
                erroServidor: false
            }
        },
        methods: {
            entrar: function () {
                this.$validator.validateAll().then((result) => {
                    if (!result) {
                        console.log('fomulario invalido');
                        this.$validator.flag('username', {touched: true});
                        this.$validator.flag('password', {touched: true});
                        return;
                    }

                    if (this.loading)
                        return;
                    this.loading = true;
                    this.usuarioSenhaInvalido = false;
                    this.erroServidor = false;

                    let loginData = {
                        username: this.username.split('.').join("").split('-').join(""),
                        password: this.password
                    };

                    new UsuarioService(this.$http).login(loginData).then(
                        response => {
                            this.loading = !this.loading;
                            let authToken = response.headers.get('authorization');
                            authStore.commit('setAuthorizationToken', authToken);
                            this.$router.push({path: '/area-segura/home'});
                        },
                        error => {
                            console.log(error);
                            if (error.status === 401 || error.status === 403)
                                this.usuarioSenhaInvalido = true;
                            else
                                this.erroServidor = true;
                            this.loading = !this.loading;
                        }
                    );

                });
            }
        },
        computed: {

            entrarMsg: function () {

                if (!this.loading) {
                    return 'Entrar';
                }
                return 'Entrando <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>';
            },
            isUsernameInvalid: function () {
                return this.errors.has('username') && this.fields.username && this.fields.username.touched;
            },
            isPasswordInvalid: function () {
                return this.errors.has('password') && this.fields.password && this.fields.password.touched;
            }
        }

    }

</script>


<style scoped>

    .alert {
        margin-top: 20px;
        font-size: 0.9em;
    }

    .line {

        border-bottom: 1px solid #c1c1c1;
        width: 100%;
        display: block;
        margin-top: 8px;
        margin-bottom: 25px;
        text-align: center;
    }

    .line span {

        font-size: 0.7em;
        color: #c1c1c1;
        background-color: #fff;
        padding: 10px;
        top: 10px;
        position: relative;

    }

    label {
        font-weight: bold;
    }

    button {
        cursor: pointer;
    }

</style>