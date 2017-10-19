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
}
