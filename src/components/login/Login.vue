<template>
    <div class="login-container">
        <div class="login-wrapper">
            <div class="login">
                <div class="login-header">
                    <img src="../../assets/img/logo-detran.png" alt="logo detran">
                    DETRAN-DF
                </div>
                <div class="login-forms">
                    <div class="alert alert-danger" v-if="sessaoExpirou">
                        Sua sessão expirou! Faça login novamente.
                    </div>
                    <login-form></login-form>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>

    import LoginForm from './LoginForm.vue';

    export default {
        components: {
            'login-form': LoginForm
        },
        data() {

            return {
                sessaoExpirou: false
            }
        },
        created: function () {
            let erro = this.$route.query.erro;
            if (erro && erro === 'sessaoExpirada') {
                this.sessaoExpirou = true;
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


</style>