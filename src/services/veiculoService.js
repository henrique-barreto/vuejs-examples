export class VeiculoService {

    constructor(http) {
        this.http = http;
    }

    findByPlaca(placa) {
        placa = placa.split('-').join('');
        placa = placa.toUpperCase();
        return this.http.get('area-segura/veiculo?placa=' + placa);
    }

    findAutosNAElegiveisParaNP(placa) {
        let uf = 'DF';
        return this.http.get('area-segura/infracoes/na?placa=' + placa + '&uf=' + uf);
    }

    findInfracaoDetalhada(numeroAuto, sequencial, codigoOrgaoAutuador) {
        let url = 'area-segura/infracoes/detalhada?numeroAuto=' + numeroAuto + '&sequencial=' + sequencial + '&codOrgaoAutuador=' + codigoOrgaoAutuador;
        return this.http.get(url);
    }

    transformarNaNp(data) {
        let url = 'area-segura/infracoes/transformar/nanp';
        return this.http.post(url, data);
    }

    findSolicitacoesCrlv() {
        let url = 'area-segura/veiculo/crlv/solicitacao';
        return this.http.get(url);
    }

    emitir2ViaCrlv(chassi) {
        let url = 'area-segura/veiculo/crlv/emiteBordero2Via?chassi=' + chassi;
        return this.http.put(url, {});
    }

    reemitir2ViaCrlv(chassi) {
        let url = 'area-segura/veiculo/crlv/reemitirBordero2Via?chassi=' + chassi;
        return this.http.get(url);
    }
}
