<template>
    <div class="login-container">
        <div class="login-wrapper">
            <div class="login">
                <div class="login-header">
                    <img src="../../assets/img/logo-detran.png" alt="logo detran">
                    DETRAN-DF
                </div>
                <div class="login-forms">
                    <form>
                        <div class="form-group">
                            <label for="cpf">CPF</label>
                            <input type="text" class="form-control" id="cpf" placeholder="Digite seu CPF">
                        </div>
                        <div class="form-group">
                            <label for="password">Senha</label>
                            <input type="password" class="form-control" id="password" placeholder="Senha">
                        </div>

                        <button @click="entrar"
                                v-bind:class="{'disabled': loading}"
                                type="button"
                                class="btn btn-success btn-block">
                            <span v-html="entrarMsg"></span>
                        </button>

                        <div class="alert alert-danger" role="alert">
                            Usuário ou senha incorreto!
                        </div>

                        <div class="line"><span class="texto">OU</span></div>

                        <button type="button" class="btn btn-outline-success btn-block">Registrar-se</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>

    import {AuthService} from '../../services/authService.js';

    export default {

        data() {
            return {
                loading: false,
                username: '',
                password: ''
            }
        },
        methods: {
            entrar: function () {
//                if (this.loading)
//                    return;

//                let authService = new AuthService(this.$http);

                let promise = AuthService.login('asdasd', '42342343');

//                let promise = this.$http.get('https://yesno.wtf/api/');
                promise.then(res => console.log(res));

                this.loading = !this.loading;
            }

        },
        computed: {

            entrarMsg: function () {

                if (!this.loading) {
                    return 'Entrar';
                }
                return 'Entrando <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>';
            }
        }

    }

</script>


<style scoped>


    .login-container {
        background-image: url('../../assets/img/bg-login2.jpg');
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

    }

    .login-wrapper {
        padding-top: 50px;
    }

    .login {

        background-color: #FFF;
        padding: 10px;
        width: 310px;
        margin: 0 auto;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    }

    @media (min-width: 1024px) {
        .login {
            padding: 48px 40px 36px;
            width: 450px;
            float: right;
            margin: 0px auto;
            height: 100%;
        }

        .login-wrapper {
            padding-top: 0px;
            height: 100%;
        }

        .login-container {
            margin-right: 450px;
            background-position: right 200px top;
        }
    }

    .login-header {
        margin: 0px auto 15px;
        font-size: 2em;
        width: 100%;
        text-align: center;

        font-weight: bold;
    }

    .login-header img {
        height: 70px;
        width: 70px;
    }

    .login-forms .line {

        border-bottom: 1px solid #c1c1c1;
        width: 100%;
        display: block;
        margin-top: 8px;
        margin-bottom: 25px;
        text-align: center;
    }

    .login-forms .line span {

        font-size: 0.7em;
        color: #c1c1c1;
        background-color: #fff;
        padding: 10px;
        top: 10px;
        position: relative;

    }

    .login-forms label {
        font-weight: bold;
    }

    .login-forms button {
        cursor: pointer;
    }

    .alert {
        margin-top: 20px;
        font-size: 0.9em;
    }

</style>