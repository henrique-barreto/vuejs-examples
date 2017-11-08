<template>


    <div class="veiculos" v-if="dadosUsuario.habilitacao && dadosUsuario.habilitacao.nome">

        <div style="padding-right: 10px;">


            <div class="row">
                <div class="col-md-6 mb-3">
                    <label>Renach</label>
                    <input type="text"
                           readonly
                           class="form-control-plaintext"
                           :value="dadosUsuario.habilitacao.renach">
                </div>
                <div class="col-md-6 mb-3">
                    <label>Data de Nascimento</label>
                    <input type="text"
                           readonly
                           class="form-control-plaintext"
                           :value="dadosUsuario.habilitacao.dataNascimento | yyyymmddFilter">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 mb-3">
                    <label>Nome</label>
                    <input type="text"
                           readonly
                           class="form-control-plaintext"
                           :value="dadosUsuario.habilitacao.nome">
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 mb-3">
                    <label>Categoria</label>
                    <input type="text"
                           readonly
                           class="form-control-plaintext"
                           :value="dadosUsuario.habilitacao.categoria">
                </div>
                <div class="col-md-4 mb-3">
                    <label>Validade</label>
                    <input type="text"
                           readonly
                           class="form-control-plaintext"
                           :value="dadosUsuario.habilitacao.validadeCNH | yyyymmddFilter">
                </div>
                <div class="col-md-4 mb-3">
                    <label>Tipo</label>
                    <input type="text"
                           readonly
                           class="form-control-plaintext"
                           :value="dadosUsuario.habilitacao.permissionario === 'N' ? 'Condutor' : 'Permissionário'">
                </div>
            </div>


        </div>

    </div>
    <div v-else>

        <p>Condutor não cadastrado na base do DETRAN</p>

    </div>

</template>

<script>

    import {usuarioStore} from "../../../store/usuarioStore";

    export default {
        computed: {
            dadosUsuario: function () {
                return usuarioStore.getters.dadosUsuarioLogado;
            }
        }
    }

</script>

<style scoped>


    .teste {
        width: 100%;
        max-width: 100%;
    }

    label {
        font-weight: bold;
    }

    .form-control-plaintext {
        display: block;
        width: 100%;
        padding: .5rem .75rem;
        border: 1px solid rgba(0, 0, 0, .15);
    }

</style>