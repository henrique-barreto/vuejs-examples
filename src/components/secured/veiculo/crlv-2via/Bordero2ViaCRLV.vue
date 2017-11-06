<template>
    <div class="bordero-wrapper">
        <div class="bordero-crlv" v-if="!loading">
            <table width="700" border="0" cellpadding="2" cellspacing="0" class="bordacompleta">
                <tr>
                    <td width="325" height="17" rowspan="4" class="bordadireita">
                        <table width="100%" border=0    cellspacing=0    bordercolor=#000000>
                            <tr>
                                <td width="21%">
                                    <img class="logo-detran-bordero" src="./../../../../assets/img/logo-detran-df.gif"
                                         width="55" height="67" alt="Logotipo Detran DF">
                                </td>
                                <td width="79%"><strong> <span class="textomenor">
                      Governo do Distrito Federal<br>
                      Secretaria de Seguran&ccedil;a P&uacute;blica <br>
                      Departamento de Tr&acirc;nsito - DETRAN/DF<br>
                      Documento de Arrecada&ccedil;&atilde;o de Servi&ccedil;os - DAS<br>

                    </span></strong></td>
                                <td valing="middle">&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                    <td colspan="2" class="bordabaixo" align="center"><span class="texto11bold">DADOS IDENTIFICAT&Oacute;RIOS</span>
                    </td>
                </tr>
                <tr>
                    <td width="203" class="bordadireitabaixo"><span
                            class="texto10">Emiss&atilde;o:&nbsp;{{ bordero.dataEmissao | yyyymmddFilter }}</span></td>
                    <td width="158" class="bordabaixo"><span class="texto10">Operador: {{ bordero.operador }}</span>
                    </td>
                </tr>
                <tr>
                    <td width="203" class="bordadireita" style="border: 1px solid #333;"><span class="texto10">Validade:&nbsp;{{ bordero.validade | yyyymmddFilter}}</span>
                    </td>
                    <td width="158" style="border: 1px solid #333;"><span
                            class="texto10">Vencimento:&nbsp; {{ bordero.vencimento | yyyymmddFilter}}</span></td>
                </tr>
            </table>
            <table width="700" border="0" cellpadding="3" cellspacing="0" class="bordaesqdir">
                <tr class="texto11bold">
                    <td colspan="4" class="bordabaixo" align="center">DADOS DO VE&Iacute;CULO</td>
                </tr>
                <tr class="texto10">
                    <td width="101" class="bordadireitabaixo">Placa:&nbsp;
                        {{ bordero.placa | placaFilter }}
                    </td>
                    <td width="277" class="bordadireitabaixo">Marca/Mod:&nbsp;
                        {{ bordero.marcaMod }}
                    </td>
                    <td width="162" class="bordadireitabaixo">Cor:&nbsp;
                        {{ bordero.cor }}
                    </td>
                    <td width="134" class="bordabaixo">Fab/Mod:&nbsp;
                        {{ bordero.fabMod }}
                    </td>
                </tr>
                <tr class="texto10">
                    <td colspan="2" class="bordadireita">Propriet&aacute;rio:&nbsp;
                        {{ bordero.proprietario }}
                    </td>
                    <td class="bordadireita">CPF:&nbsp;
                        {{ bordero.cpfCgc | cpfFilter }}
                    </td>
                    <td>Exerc&iacute;cio:&nbsp;
                        {{ bordero.anoExercicio }}
                    </td>
                </tr>
            </table>
            <table width="700" border="0" cellpadding="3" cellspacing="0" class="bordacompleta">
                <tr class="texto11bold">
                    <td colspan="4" align="center" class="bordabaixo">DADOS DO SERVI&Ccedil;O </td>
                </tr>
                <tr class="texto10bold">
                    <td width="40%" align="center" class="bordadireitabaixo">Servi&ccedil;o</td>
                    <td width="16%" align="center" class="bordadireitabaixo">Quantidade</td>
                    <td width="24%" align="center" class="bordadireitabaixo">Tipo de Envio</td>
                    <td width="20%" align="center" class="bordabaixo">Valor R$</td>
                </tr>
                <tr class="texto10">
                    <td width="40%" align="center" class="bordadireita">
                        {{ bordero.descServico }}
                    </td>
                    <td width="16%" align="center" class="bordadireita">1</td>
                    <td width="24%" align="center" class="bordadireita">
                    <span v-if="bordero.tipoEnvio === '01'">
                        ETC
                    </span>
                        <span v-else>
                        {{ bordero.tipoEnvio }}
                    </span>
                    </td>
                    <td width="20%" align="center">
                        {{ bordero.valor }}
                    </td>
                </tr>
            </table>
            <table width="700" border="0" cellspacing="0" cellpadding="4">
                <tr>
                    <td height="45" valign="top" class="bordaesqdir"><span class="texto10bold">AUTENTICA&Ccedil;&Atilde;O
          MEC&Acirc;NICA</span></td>
                </tr>
            </table>
            <table width="700" height="35" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                    <td>
                        <div align="center">--------------------------------------------------------<img
                                src="./../../../../assets/img/tesoura_p.gif">---------------------------------------------------------
                        </div>
                    </td>
                </tr>
            </table>
            <table width="700" border="0" cellpadding="3" cellspacing="0" class="bordacompleta">
                <tr class="texto11bold">
                    <td colspan="4" align="center" class="bordabaixo">VIA DO BANCO</td>
                </tr>
                <tr class="texto10bold">
                    <td width="40%" align="center" class="bordadireitabaixo">Servi&ccedil;o</td>
                    <td width="19%" align="center" class="bordadireitabaixo">Quantidade</td>
                    <td width="21%" align="center" class="bordadireitabaixo">Tipo de Envio</td>
                    <td width="20%" align="center" class="bordabaixo">Valor R$</td>
                </tr>
                <tr class="texto10">
                    <td width="40%" align="center" class="bordadireitabaixo">
                        {{ bordero.descServico }}&nbsp;
                    </td>
                    <td width="19%" align="center" class="bordadireitabaixo">1</td>
                    <td width="21%" align="center" class="bordadireitabaixo">
                    <span v-if="bordero.tipoEnvio === '01'">
                        ETC
                    </span>
                        <span v-else>
                        {{ bordero.tipoEnvio }}
                    </span>&nbsp;
                    </td>
                    <td width="20%" align="center" class="bordabaixo">
                        {{ bordero.valor }}&nbsp;
                    </td>
                </tr>
                <tr class="texto10bold">
                    <td colspan="2" rowspan="5" align="center" class="bordacimadir">
                        <img :src="bordero.codigoBarraImg64"></td>
                    <td height="20" bgcolor="#F0F0F0" class="bordacimabaixodir">Placa:</td>
                    <td height="20" align="center" class="bordacimabaixo">
                        {{ bordero.placa | placaFilter }}&nbsp;
                    </td>
                </tr>
                <tr class="texto10bold">
                    <td height="20" bgcolor="#F0F0F0" class="bordadireitabaixo">Data de Validade:</td>
                    <td height="20" align="center" class="bordabaixo">
                        {{ bordero.validade | yyyymmddFilter}}&nbsp;
                    </td>
                </tr>
                <tr class="texto10bold">
                    <td height="20" bgcolor="#F0F0F0" class="bordadireitabaixo">Data de Emiss&atilde;o:</td>
                    <td height="20" align="center" class="bordabaixo">
                        {{ bordero.dataEmissao | yyyymmddFilter }}&nbsp;
                    </td>
                </tr>
                <tr class="texto10bold">
                    <td height="20" bgcolor="#F0F0F0" class="bordadireitabaixo">Data de Vencimento: </td>
                    <td height="20" align="center" class="bordabaixo">
                        {{ bordero.vencimento | yyyymmddFilter}}&nbsp;
                    </td>
                </tr>
                <tr class="texto10bold">
                    <td height="20" bgcolor="#F0F0F0" class="bordadireita">Ano de Exerc&iacute;cio :</td>
                    <td height="20" align="center">
                        {{ bordero.anoExercicio }}&nbsp;
                    </td>
                </tr>
            </table>


        </div>
        <div v-else>
            <spinner :tipo="'md'"></spinner>
        </div>
    </div>
</template>

<script>

    import {crlv2ViaStore} from './crlv2ViaStore.js';
    import {VeiculoService} from "../../../../services/veiculoService";
    import TituloPagina from '../../../../shared/types/TituloPagina.vue';
    import Spinner from "../../../../shared/types/Spinner.vue";


    export default {

        components: {
            'titulo-pagina': TituloPagina,
            'spinner': Spinner
        },
        data() {
            return {
                loading: true
            }
        },
        computed: {
            bordero: function () {
                return crlv2ViaStore.getters.bordero;
            }
        },
        created: function () {
            if (!crlv2ViaStore.getters.chassi){
                this.$router.push({path: '/area-segura/segunda-via-crlv'});
                return;
            }

            this.loading = true;
            if (crlv2ViaStore.getters.reemitir) {
                new VeiculoService(this.$http).reemitir2ViaCrlv(crlv2ViaStore.getters.chassi).then(
                    response => {
                        console.log(response);
                        crlv2ViaStore.commit('setBordero', response.body);
                        this.loading = false;
                    },
                    error => {
                        this.loading = false;
                        console.log(error);
                    }
                );
            } else {
                new VeiculoService(this.$http).emitir2ViaCrlv(crlv2ViaStore.getters.chassi).then(
                    response => {
                        console.log(response);
                        crlv2ViaStore.commit('setBordero', response.body);
                        this.loading = false;
                    },
                    error => {
                        this.loading = false;
                        console.log(error);
                    }
                );
            }


        }

    }

</script>

<style scoped>

    .bordero-wrapper {
        /*background-color: #fff;*/
    }

    .bordero-crlv {
        width: 700px;
        margin: 0 auto;

        padding-top: 20px;
        padding-bottom: 20px;
    }

    .bordero-crlv td {
        padding-top: 0;
        padding-bottom: 0;
    }

    .logo-detran-bordero {
        margin-left: 10px;
        margin-right: 10px;
    }

    .bordabaixo {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #000000;
    }

    .bordadireita {
        border-right-width: 1px;
        border-right-style: solid;
        border-right-color: #000000;
    }

    .texto11bold {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 11px;
        font-weight: bold;
    }

    .texto10bold {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 10px;
        font-weight: bold;
    }

    .bordadireitabaixo {
        border-right-width: 1px;
        border-right-style: solid;
        border-right-color: #000000;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #000000;
    }

    .texto10 {

        font-family: Arial, Helvetica, sans-serif;
        font-size: 10px;
    }

    .bordaesqdir {
        border-right-width: 1px;
        border-left-width: 1px;
        border-right-style: solid;
        border-left-style: solid;
        border-right-color: #000000;
        border-left-color: #000000;
    }

    .bordacompleta {
        border: 1px solid #000000;
    }

    .bordacimabaixo {
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-top-style: solid;
        border-bottom-style: solid;
        border-top-color: #000000;
        border-bottom-color: #000000;
    }

    .bordacimabaixodir {

        border-top-width: 1px;
        border-bottom-width: 1px;
        border-right-width: 1px;
        border-top-style: solid;
        border-bottom-style: solid;
        border-right-style: solid;
        border-top-color: #000000;
        border-bottom-color: #000000;
        border-right-color: #000000;
    }

    .bordacimadir {

        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #000000;
        border-right-width: 1px;
        border-right-style: solid;
        border-right-color: #000000;
    }

    .textomenor {
        font-family: Tahoma;
        font-size: 11px;
        font-weight: normal;
    }

    .bordabaixo {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #000000;
    }


</style>