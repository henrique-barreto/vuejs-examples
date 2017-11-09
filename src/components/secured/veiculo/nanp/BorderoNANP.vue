<template>

    <section class="section">

        <div class="pagina-bordero">

            <div class="print-helper no-print" style="text-align: right">
                <button class="btn btn-success btn-sm no-print" @click="print">Imprimir <i class="fa fa-print"
                                                                                           aria-hidden="true"></i>
                </button>
            </div>

            <div class="bordero-wrapper">
                <div class="bordero" v-for="bordero in borderosSelecionados">
                    <table width="710" border="0" align="center" cellpadding="0" cellspacing="0"> <!-- tabela geral -->
                        <tr style="border-right: 1px solid #000;"> <!-- linha 1 da tabela geral -->
                            <td> <!-- coluna 1.1 da tabela geral -->
                                <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                       class="voltainteirasembaixo">
                                    <!-- tabela dos dados sem via banco -->
                                    <tr> <!-- linha 1 da tabela dos dados sem via banco -->
                                        <td> <!-- coluna 1.1 da tabela dos dados sem via banco -->
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                   class="sobase">
                                                <!-- tabela dados identificatorios -->
                                                <tr> <!-- linha 1 da tabela dados identificatorios -->
                                                    <td width="70%" rowspan="3" align="center">
                                                        <!-- coluna 1.1 da tabela dados identificatorios -->
                                                        <table width="100%">
                                                            <tr>
                                                                <td width="20%" align="center" valign="middle"
                                                                    rowspan="4">

                                                                    <img src="./../../../../assets/img/logo-detran-df.gif"
                                                                         alt="Logotipo Detran DF">

                                                                </td>
                                                                <td width="75%" class="fonte1">

                                                                    Governo do Distrito Federal

                                                                </td>
                                                            </tr>


                                                            <tr>
                                                                <td class="fonte1">
                                                                    Secretaria de Estado de Seguran&ccedil;a P&uacute;blica
                                                                </td>
                                                            </tr>


                                                            <tr>
                                                                <td class="fonte1">

                                                                    Departamento de Tr&acirc;nsito do Distrito Federal

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="fonte1">
                                                                    Documento de Arrecada&ccedil;&atilde;o de Multa
                                                                </td>
                                                            </tr>
                                                        </table>


                                                    </td> <!-- fim coluna 1.1 tabela dados identificatorios -->
                                                    <td width="30%" colspan="5"
                                                        class="titulos-teste ladoesqbaixo style1">
                                                        &nbsp;
                                                        <!-- coluna 1.2 tabela dados identificatorios -->
                                                        <div align="center">
                                                            <span class="fonte1">NOTIFICAÇÃO DE IMPOSIÇÃO DE PENALIDADE</span>
                                                        </div>
                                                    </td>
                                                    <!-- fim coluna 1.2 tabela dados identificatorios -->
                                                </tr> <!-- fim linha 1 tabela dados identificatorios -->

                                                <!-- fim linha 3 tabela dados identificatorios -->
                                            </table>
                                            <!-- fim tabela dados identificatorios -->
                                        </td>
                                        <!-- fim da coluna 1.1 da tabela dados sem via banco -->
                                    </tr> <!-- fim da linha 1 da tabela dados sem via banco -->

                                    <tr> <!-- linha 2 da tabela dados sem via banco -->
                                        <td> <!-- coluna 2.1 da tabela dados sem via banco -->

                                            <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                   class="sobase">
                                                <!-- tabela titulo dados veiculo -->
                                                <tr>
                                                    <td width="15%" class="style1 fonte1">
                                                        <span class="fonte1">&nbsp;Órgão Autuador &nbsp;</span></td>
                                                    <td width="85%" class="ladodireito style1 fonte1 ">
                                                    <span class="fonte1">&nbsp;{{ bordero.codOrgaoAutuador
                                                        }}&nbsp;&nbsp;{{ bordero.descOrgaoAutuador }} &nbsp;</span>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                   class="sobase">
                                                <tr>
                                                    <td class="style1"><span class="fonte1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pelo presente, fica V.S.ª notificado que lhe foi imposto a penalidade de MULTA em decorrência
                do cometimento de infração <br>&nbsp;de trânsito oriundo do Auto de Infração lavrado na data e circunstâncias abaixo discriminadas. Informo que até a
                data abaixo &nbsp;indicada poderá ser efetuado o pagamento com desconto de 20% (Vinte por Cento) ou interpor RECURSO perante a junta &nbsp;Administrativa
                de Recursos de Infrações.(OBS. Tratando-se de veículo registrado em nome de "Pessoa Jurídica" será &nbsp;obrigatória &nbsp;a indicação do "CONDUTOR INFRATOR".
                sob pena de não o fazendo, incorrer no agravamento da multa a que alude &nbsp;o § 8º do &nbsp;art.257 do Código de Trânsito Brasileiro).<br>
                <br>
                &nbsp;&nbsp;&nbsp;Data Limite para pagamento com desconto de 20%: &nbsp; {{ bordero.dataVencimento | yyyymmddFilter
                                                        }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DIRETOR GERAL DO&nbsp;&nbsp; DETRAN - DF
                </span><br><br></td>
                                                </tr>
                                            </table>
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                   class="sobase">
                                                <!-- tabela titulo dados veiculo -->
                                                <tr>
                                                    <td height="25" align="center" class="style1"><span class="fonte1">Dados do Veículo/Proprietário</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td> <!-- fim da coluna 2.1 da tabela dados sem via banco -->
                                    </tr> <!-- fim da linha 2 da tabela dados sem via banco -->
                                    <tr> <!-- linha 3 tabela dados sem via banco -->
                                        <td colspan="3"> <!-- coluna 3.1 tabela dados sem via banco -->
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                   class="sobase">
                                                <!-- tabela dados veiculo 1 -->
                                                <tr>
                                                    <td width="16%" class="style1 fonte1">
                                                        <span class="fonte1">&nbsp;Placa :&nbsp;</span>
                                                        <span class="fonte0">{{ bordero.placa | placaFilter}}</span>
                                                    </td>
                                                    <td width="20%" class="ladodireito style1 fonte1 ">
                                                        <span class="fonte1">&nbsp;Renavam :&nbsp;</span>
                                                        <span class="fonte0 ">{{ bordero.renavam }}</span></td>
                                                    <td width="39%" class="ladodireito style fonte1 ">
                                                        <span class="fonte1">&nbsp;Marca/Mod :&nbsp;</span>
                                                        <span class="fonte0 ">{{ bordero.descMarcaModelo }}</span></td>
                                                    <td width="25%" class="ladodireito style1 fonte1 ">
                                                        <span class="fonte1">&nbsp;Cor :&nbsp;</span>
                                                        <span class="fonte0 ">{{ bordero.descCor }}</span></td>
                                                </tr>
                                            </table> <!-- fim tabela dados veiculo 1 -->
                                        </td>
                                        <!-- fim coluna 3.1 tabela dados sem via banco -->
                                    </tr> <!-- fim linha 3 tabela dados sem via banco -->
                                    <tr> <!-- linha 4 tabela dados sem via banco -->
                                        <td colspan="3"> <!-- coluna 4.1 tabela dados sem via banco -->
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                   class="sobase">
                                                <!-- tabela dados veiculo 2 -->
                                                <tr>
                                                    <td width="47%" class="style1">
                                                        <span class="fonte1">&nbsp;Propriet&aacute;rio :&nbsp;</span>
                                                        <span class="fonte0"> {{ bordero.nomeProprietario }}</span>
                                                    </td>
                                                    <td width="28%" class="ladodireito style1">
                                                        <span class="fonte1">&nbsp;CPF :&nbsp;</span>
                                                        <span class="fonte0">{{ bordero.cpfCgcProprietario | cpfFilter
                                                            }}</span>
                                                    </td>
                                                    <td width="25%" class="ladodireito style1">
                                                        <span class="fonte1">&nbsp;Espécie :&nbsp;</span>
                                                        <span class="fonte0"> {{ bordero.descEspecie }}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- fim tabela dados veiculo 2 -->
                                        </td>
                                        <!-- fim coluna 4.1 da tabela dados sem via banco -->
                                    </tr> <!-- fim coluna 4 da tabela dados sem via banco -->
                                    <tr> <!-- linha 5 tabela dados sem via banco -->
                                        <td>
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                   class="sobase">
                                                <!-- tabela titulo dados condutor -->
                                                <tr>
                                                    <td height="25" align="center" class="style1"><span class="fonte1">Dados do Infrator/Infração</span>
                                                    </td>
                                                </tr>
                                            </table> <!-- fim tabela titulo dados condutor -->
                                        </td>
                                    </tr> <!-- fim linha 5 tabela dados sem via banco -->
                                    <tr> <!-- linha 6 tabela dados sem via banco -->
                                        <td colspan="3"> <!-- coluna 6.1 tabela dados sem via banco -->
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                   class="sobase">
                                                <!-- tabela dados veiculo 2 -->
                                                <tr>
                                                    <td width="75%" class="style1">
                                                        <span class="fonte1">&nbsp;Nome do Infrator :&nbsp;</span>
                                                        <span class="fonte0">  {{ bordero.nomeProprietario }} </span>
                                                    </td>
                                                    <td width="25%" class="ladodireito style1">
                                                        <span class="fonte1">&nbsp;CNH :&nbsp;</span>
                                                        <span class="fonte0">{{ bordero.numCnh }}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- fim tabela dados veiculo 2 -->
                                        </td> <!-- fim coluna 6.1 da tabela dados sem via banco -->
                                    </tr> <!-- fim coluna 6 da tabela dados sem via banco -->
                                    <tr> <!-- linha 7 tabela dados sem via banco -->
                                        <td class="fonte0"> <!-- coluna 7.1 tabela dados sem via banco -->
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <!-- tabela valores -->
                                                <tr> <!-- linha 1 tabela valores -->
                                                    <td colspan="4" align="center">
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                               class="sobase">
                                                            <!-- tabela titulo via usuario -->
                                                            <tr>
                                                                <td width="25%" align="center" class="style1"><span
                                                                        class="fonte1">&nbsp;Via do Usu&aacute;rio</span>
                                                                </td>
                                                                <td width="50%" class="ladodireito style1">
                                                                    <span class="fonte1">&nbsp;Org&atilde;o Autuador :&nbsp;</span>
                                                                    <span class="fonte0">{{ bordero.codOrgaoAutuador
                                                                        }}&nbsp;&nbsp;{{ bordero.descOrgaoAutuador
                                                                        }}</span>
                                                                </td>
                                                                <td width="25%" class="ladodireito style1">
                                                                    <span class="fonte1">&nbsp;Controle :&nbsp;</span>
                                                                    <span class="fonte0 ">{{ bordero.controle }}</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <!-- fim da tabela titulo via usuario -->
                                                    </td> <!-- fim da coluna 1.1 da tabela valores -->
                                                </tr> <!-- fim da linha 1 da tabela valores -->
                                                <tr> <!-- linha 2 da tabela valores -->
                                                    <td> <!-- coluna 2.1 tabela valores -->
                                                        <table width="100%"> <!-- tabela primeira linha -->
                                                            <tr>
                                                                <!-- linha 1 tabela primeira linha -->
                                                                <td width="29%" class="style1">
                                                                    <span class="fonte1">&nbsp;Auto de Infra&ccedil;&atilde;o :&nbsp;</span>
                                                                    <span class="fonte0">  {{ bordero.numeroAuto
                                                                        }}</span>
                                                                </td>
                                                                <td width="14%" class="style1">
                                                                    <span class="fonte1">&nbsp;Sequencial :&nbsp;</span>
                                                                    <span class="fonte0"> {{ bordero.numeroSequencial
                                                                        }}</span>
                                                                </td>
                                                                <td width="32%" class="style1">
                                                                    <span class="fonte1">&nbsp;Cometimento :&nbsp;</span>
                                                                    <span class="fonte0">{{ bordero.dataCometimento | yyyymmddFilter
                                                                        }}&nbsp;&agrave;s&nbsp;{{ bordero.horaCometimento | horaFilter}}</span>
                                                                </td>
                                                            </tr> <!-- fim linha 1 tabela primeira linha -->
                                                            <tr> <!-- linha 6 tabela valores -->

                                                                <td width="25%" class="style1">
                                                                    <span class="fonte1">&nbsp;Grupo :&nbsp;</span>
                                                                    <span class="fonte0">{{ bordero.grupo }}</span>
                                                                </td>
                                                                <td width="15%" class="style1">
                                                                    <span class="fonte1">&nbsp;Pontos :&nbsp;</span>
                                                                    <span class="fonte0">{{ bordero.pontosInfracao
                                                                        }}</span>
                                                                </td>

                                                            </tr> <!-- fim linha 7 tabela valores -->

                                                        </table>
                                                        <!-- fim tabela primeira linha -->
                                                    </td>
                                                </tr> <!-- fim linha 2 tabela valores -->
                                                <tr> <!-- linha 4 tabela valores -->
                                                    <td>
                                                        <table width="100%"> <!-- tabela terceira linha -->
                                                            <tr> <!-- linha 1 tabela terceira linha -->
                                                                <td width="70%" class="style1">
                                                                    <span class="fonte1">&nbsp;Infra&ccedil;&atilde;o :&nbsp;</span>
                                                                    <span class="fonte0">{{ bordero.infracao }}</span>
                                                                    <span class="fonte1">&nbsp;Desdobramento :&nbsp;</span>
                                                                    <span class="fonte0">{{ bordero.infracaoDescricao
                                                                        }}</span>
                                                                </td>
                                                                <td width="30%" class="style1">
                                                                    <span class="fonte1">&nbsp;Artigo :&nbsp;</span>
                                                                    <span class="fonte0">{{ bordero.infracaoRegulamento
                                                                        }}</span>
                                                                </td>
                                                            </tr> <!-- fim linha 1 tabela terceira linha -->
                                                        </table>
                                                        <!-- fim tabela terceira linha -->
                                                    </td>
                                                </tr> <!-- fim linha 4 tabela valores -->
                                                <tr>
                                                    <td>
                                                        <table width="100%">
                                                            <td width="22%" class="style1">
                                                                <span class="fonte1">&nbsp;Agente :&nbsp;</span>
                                                                <span class="fonte0">{{ bordero.agente }}</span>
                                                            </td>
                                                            <td width="52%" class="style1">
                                                                <span class="fonte1">&nbsp;Medi&ccedil;&atilde;o Permitida / Aferida / Considerada :&nbsp;</span>
                                                                <span class="fonte0">-/ -/ -</span>
                                                            </td>
                                                            <td width="30%" class="style1">
                                                                <span class="fonte1">&nbsp;Unidade de Medida :&nbsp;</span>
                                                                <span class="fonte0">-</span>
                                                            </td>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr> <!-- linha 3 tabela valores -->
                                                    <td>
                                                        <table width="100%"> <!-- tabela segunda linha -->
                                                            <tr> <!-- linha 1 tabela segunda linha -->
                                                                <td class="style1">
                                                                    <span class="fonte1">&nbsp;N&ordm;&nbsp;Notifica&ccedil;&atilde;o :</span>
                                                                    <span class="fonte0">{{ bordero.numeroNotificacao
                                                                        }}</span>
                                                                </td>


                                                                <td class="style1">
                                                                    <span class="fonte1">Data Notif. Penalidade :&nbsp;</span>
                                                                    <span class="fonte0">{{ bordero.dataPenalidade | yyyymmddFilter
                                                                        }}</span>
                                                                </td>
                                                                <td class="style1">
                                                                    <span class="fonte1">&nbsp;Data Notif. Autua&ccedil;&atilde;o :&nbsp;</span>
                                                                    <span class="fonte0">{{ bordero.dataAutuacao | yyyymmddFilter}}</span>
                                                                </td>
                                                            </tr> <!-- fim linha 1 tabela segunda linha -->
                                                        </table>
                                                        <!-- fim tabela segunda linha -->
                                                    </td>
                                                </tr> <!-- fim linha 3 tabela de valores -->

                                                <tr> <!-- linha 3 tabela valores -->
                                                    <td>
                                                        <table width="100%"> <!-- tabela segunda linha -->
                                                            <tr> <!-- linha 1 tabela segunda linha -->
                                                                <td width="50%" class="style1">
                                                                    <span class="fonte1">&nbsp;Local :</span>
                                                                    <span class="fonte0">{{ bordero.localInfracao}} - {{bordero.complementoLocalInfracao}}</span>
                                                                </td>

                                                            </tr> <!-- fim linha 1 tabela segunda linha -->
                                                        </table>
                                                        <!-- fim tabela segunda linha -->
                                                    </td>
                                                </tr> <!-- fim linha 3 tabela de valores -->

                                                <tr> <!-- linha 5 tabela valores -->
                                                    <td>
                                                        <!-- fim tabela quarta linha --></td>
                                                </tr> <!-- fim linha 5 tabela valores -->
                                                <tr> <!-- linha 6 tabela valores -->
                                                    <td>
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                               class="sobase">
                                                            <!-- tabela sexta linha -->
                                                            <tr> <!-- linha 1 tabela sexta linha -->
                                                                <td width="35%" class="style1">
                                                                    <span class="fonte1">&nbsp;&nbsp;Municipio :&nbsp;</span>
                                                                    <span class="fonte0">{{ bordero.descMunicipioVeiculo
                                                                        }}</span>
                                                                </td>
                                                                <td width="15%" class="style1">
                                                                    <span class="fonte1">&nbsp;UF :&nbsp;</span>
                                                                    <span class="fonte0">{{ bordero.ufMunicCometimento
                                                                        }}</span>
                                                                </td>
                                                                <td width="20%" class="style1 ">
                                                                    <span class="fonte1">&nbsp;Valor (R$) :&nbsp;</span>
                                                                    <span class="fonte0 ">{{ bordero.valor }}</span>
                                                                </td>
                                                                <td width="30%" class="style1">
                                                                    <span class="fonte1">&nbsp;Valor c/ Desc. (R$) :&nbsp;</span>
                                                                    <span class="fonte0 ">{{ bordero.valorComDesconto
                                                                        }}</span>
                                                                </td>
                                                            </tr> <!-- fim linha 1 tabela sexta linha -->

                                                        </table>
                                                        <!-- fim tabela sexta linha -->
                                                    </td>
                                                </tr> <!-- fim linha 7 tabela valores -->
                                                <!--<tr>-->
                                                <!--<td style="font-size:6px">&nbsp;</td>-->
                                                <!--</tr>&lt;!&ndash; espacamento &ndash;&gt;-->
                                                <!--<tr>-->
                                                <!--<td style="font-size:6px">&nbsp;</td>-->
                                                <!--</tr>&lt;!&ndash; espacamento &ndash;&gt;-->
                                                <!--<tr>-->
                                                <!--<td style="font-size:6px">&nbsp;</td>-->
                                                <!--</tr>&lt;!&ndash; espacamento &ndash;&gt;-->
                                            </table> <!-- fim tabela valores -->
                                        </td> <!-- fim coluna 7.1 tabela dados sem via banco -->
                                    </tr> <!-- fim linha 7 tabela dados sem via banco -->
                                    <tr> <!-- linha 8 tabela dados sem via banco -->
                                        <td> <!-- coluna 8.1 tabela dados sem via banco -->

                                            <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                   class="basecima">
                                                <!-- tabela observacoes -->
                                                <tr>
                                                    <td width="70%" class="style1"><span class="fonte0">&nbsp;<font
                                                            color="#FF0000">Observa&ccedil;&otilde;es:</font>&nbsp;&nbsp;** Nao tem validade como nada consta **&nbsp;<br>
					&nbsp;Ressalvando o direito da cobran&ccedil;a de multas porventura em processamento e n&atilde;o cadastradas.</span>
                                                    </td>
                                                    <!--Inclusão do termo : "Pagavel no Banco do Brasil, BRB ou Caixa economica" em todos os boletos dos serviços/taxas receita Detran DF e Renainf -->

                                                    <td width="30%" class="style1">
                                                        <span class="fonte1">Pagável no BRB, CAIXA ECONÔMICA. NO BANCO DO BRASIL S/A SOMENTE NOS TERMINAIS DE AUTO-ATENDIMENTO E INTERNET.</span>
                                                    </td>

                                                </tr>
                                            </table> <!-- fim tabela observacoes -->


                                        </td> <!-- fim coluna 8.1 tabela dados sem via banco -->
                                    </tr> <!-- fim linha 8 tabela dados sem via banco -->

                                </table> <!-- fim tabela dados sem via banco -->   </td>
                            <!-- fim da coluna 1.1 da tabela geral -->
                        </tr> <!-- fim da linha 1 tabela geral -->
                    </table>

                    <!-- fim da tabela geral -->
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <!-- tabela titulo dados veiculo -->
                        <tr>
                            <td height="0" align="center" class="style1"><span
                                    class="fonte1">AUTENTICAÇÃO MECÂNICA</span>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" class="style1">&nbsp;

                            </td>
                        </tr>
                        <tr>
                            <td align="center" class="style1">
                                ---------------------------------------------------------------
                                <img src="./../../../../assets/img/tesoura_p.gif" alt="Marca corte">
                                --------------------------------------------------------------
                            </td>
                        </tr>
                    </table>
                    <!-- fim tabela picote -->

                    <table width="710" border="0" align="center" cellpadding="0" cellspacing="0">
                        <!-- tabela via banco -->
                        <tr>
                            <!-- linha 1 tabela via banco -->
                            <td>
                                <!-- coluna 1.1 tabela via banco -->
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" class="voltainteira0">
                                    <!-- tabela dados banco -->
                                    <tr>
                                        <!-- linha 1 tabela dados banco -->
                                        <td colspan="4">
                                            <!-- coluna 1.1 tabela dados banco -->
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <!-- ultima tabela -->
                                                <tr>
                                                    <!-- linha 1 ultima tabela -->
                                                    <td>
                                                        <table>
                                                            <tr>
                                                                <td width="123" align="center" class="style1"><span
                                                                        class="fonte1">Via do Banco</span>
                                                                </td>
                                                                <td width="270" class="ladodireito style1">
                                                                    <span class="fonte1">&nbsp;&nbsp;&nbsp;Org&atilde;o Autuador:&nbsp;</span>
                                                                    <span class="fonte0">107100&nbsp;&nbsp;DETRAN - DF</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td colspan="2" align="center" class="ladodireito style1">
                                                        <span class="fonte1">Placa:&nbsp;</span>
                                                        <span class="fonte0">{{ bordero.placa | placaFilter }}</span>
                                                    </td>
                                                    <td colspan="2" align="center" class="ladodireito style1">
                                                        <span class="fonte1">N&ordm; da Via:</span>
                                                        <span class="fonte0">0001</span> <!-- fixo -->
                                                    </td>
                                                </tr>
                                                <!-- fim linha 1 ultima tabela-->
                                                <tr>
                                                    <!-- linha 2 ultima tabela -->
                                                    <td width="470" class="basecima style1">
                                                        <span class="fonte1">&nbsp;Propriet&aacute;rio :&nbsp;</span>
                                                        <span class="fonte0 "> {{ bordero.nomeProprietario }}</span>
                                                    </td>
                                                    <td width="115" class="baseesqcima style1"><span class="fonte1">&nbsp;Notifica&ccedil;&atilde;o :</span>
                                                    </td>
                                                    <td width="143" align="center" class="baseesqcima style1">
                                                        <span class="fonte0">{{ bordero.numeroNotificacao }}</span>
                                                    </td>
                                                    <td width="133" class="baseesqcima style1"><span class="fonte1">&nbsp;Emiss&atilde;o :</span>
                                                    </td>
                                                    <td width="93" align="center" class="baseesqcima style1">
                                                    <span class="fonte0"> {{ bordero.dataPenalidade | yyyymmddFilter
                                                        }}</span>
                                                    </td>
                                                </tr>

                                                <!-- fim linha 2 ultima tabela -->

                                                <tr>

                                                    <!-- linha 3 ultima tabela -->
                                                    <td width="470" height="110" align="center" rowspan="4"
                                                        class="style1"
                                                        style="max-width: 470px;">
                                                        <!--<img src="../../../util/interleaved.jsp?barra=856000000013041399122419117171081856881680100008"/>-->
                                                        <img :src="bordero.imagem64CodigoBarras" alt="boleto">
                                                    </td>


                                                    <td width="115" rowspan="2" height="20"
                                                        class="ladoesqbaixo style1"><span
                                                            class="fonte1">&nbsp;Controle :</span></td>
                                                    <td width="143" rowspan="2" align="center"
                                                        class="ladoesqbaixo style1">
                                                        <span class="fonte0"> {{ bordero.controle }}</span>
                                                    </td>
                                                    <td class="ladoesqbaixo style1">
                                                        <span class="fonte1"> &nbsp;Vencimento :</span>
                                                    </td>
                                                    <td align="center" class="ladoesqbaixo style1">
                                                    <span class="fonte0"> {{ bordero.dataVencimento | yyyymmddFilter
                                                        }}</span>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="ladoesqbaixo style1">
                                                        <span class="fonte1"> &nbsp;Validade :</span>
                                                    </td>
                                                    <td align="center" class="ladoesqbaixo style1">
                                                    <span class="fonte0"> {{ bordero.dataVencimento | yyyymmddFilter
                                                        }}</span>
                                                    </td>

                                                </tr>
                                                <!-- fim linha 3 ultima tabela -->
                                                <tr>
                                                    <!-- linha 4 ultima tabela -->
                                                    <td class="ladodirbaixo ladodireito ladoesquerdo sobase style1 fonte1"
                                                        colspan="2">
                                                        <span class="fonte1">&nbsp;Valor (R$) :</span></td>
                                                    <td align="center"
                                                        class="ladoesquerdo ladodireito sobase style1 fonte0"
                                                        colspan="2">
                                                        <span class="fonte0"> {{ bordero.valor }}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <!-- linha 5 ultima tabela -->
                                                    <td class="ladodirbaixo ladodireito ladoesquerdo style1 fonte1"
                                                        colspan="2"><span
                                                            class="fonte1">&nbsp;Valor com Desconto (R$) :</span></td>
                                                    <td align="center" class="ladoesquerdo ladodireito style1 fonte0"
                                                        colspan="2">
                                                        <span class="fonte0"> {{ bordero.valorComDesconto }}</span>
                                                    </td>
                                                </tr>
                                                <!-- fim linha 4 ultima tabela -->
                                            </table>
                                            <!-- fim ultima tabela -->
                                        </td>
                                        <!-- fim coluna 1.1 tabela dados banco -->
                                    </tr>
                                    <!-- fim linha 1 tabela dados banco -->
                                </table>
                                <!-- fim tabela dados banco -->
                            </td>
                            <!-- fim coluna 1.1 tabela via banco -->
                        </tr>
                        <!-- fim linha 1 tabela via banco -->
                    </table>

                </div>
            </div>
        </div>
    </section>
</template>

<script>

    import {nanpStore} from "./nanpStore.js";

    export default {

        methods: {
            print: function () {
                window.print();
            }
        },
        computed: {
            borderosSelecionados: function () {
                return nanpStore.getters.borderosSelecionados;
            }
        },
        created: function () {
            if (!this.borderosSelecionados ||
                this.borderosSelecionados.length === 0) {
                this.$router.push({path: '/area-segura/transformar-na-np/gerar-boleto'});
            }
        }
    }

</script>

<style>

    @page {
        /*size: A4;*/

        /*width: 21cm;*/
        /*height: 15.7cm;*/

        size: 21cm 20.0cm;

        margin-left: auto;
        margin-right: auto;
    }

    .print-helper {
        border-bottom: 1px solid #333;
        margin-bottom: 20px;
        padding: 5px;
    }

    @media print {
        .pagina-bordero {
            border: none !important;
        }

        .print-helper {
            display: none;
            visibility: hidden;
        }
    }

    /*fim print*/

    .pagina-bordero {
        width: 750px;
        margin: 0 auto;

        background-color: #fff;
        padding: 10px 10px 30px;
        border: 1px solid #ddd;

        /*padding-top: 20px;*/
        /*padding-bottom: 20px;*/
    }

    .bordero-wrapper {
        width: 700px;
        margin: 0 auto;
    }

    .style1 {
        font-size: 12px
    }

    .bordero {
        margin-bottom: 60px;
        page-break-after: always;
    }

    /* CSS Document */

    .sobase {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #000000;
    }

    .basecima {
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-top-style: solid;
        border-bottom-style: solid;
        border-top-color: #000000;
        border-bottom-color: #000000;
    }

    .baseesqcima {
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-top-style: solid;
        border-right-style: none;
        border-bottom-style: solid;
        border-top-color: #000000;
        border-bottom-color: #000000;
        border-left-width: 1px;
        border-left-style: solid;
        border-left-color: #000000;
    }

    .voltainteira0 {
        border: 1px solid #000000;
    }

    .sobase {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #000000;
    }

    .ladoesqbaixo {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #000000;
        border-left-width: 1px;
        border-left-style: solid;
        border-left-color: #000000;
    }

    .titulos-teste.ladoesqbaixo.style1 {
        padding: 0px;
        margin-top: 30px;
        font-size: 2px;
    }

    .voltainteirasembaixo {
        border-top-width: 1px;
        border-right-width: 1px;
        border-left-width: 1px;
        border-top-style: solid;
        border-right-style: solid;
        border-left-style: solid;
        border-top-color: #000000;
        border-right-color: #000000;
        border-left-color: #000000;
    }

    .ladodireito {
        border-left-width: 1px;
        border-left-style: solid;
        border-left-color: #000000;
    }

    .fonte1 {
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-size: 9px;
        font-weight: bold;
    }

    .fonte0 {
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-size: 9px;
        font-weight: normal;
    }


</style>