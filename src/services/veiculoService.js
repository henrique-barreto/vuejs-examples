export class VeiculoService {

    constructor(http) {
        this.http = http;
    }

    findByPlaca(placa) {
        placa = placa.split('-').join('');
        placa = placa.toUpperCase();
        return this.http.get('http://localhost:8080/portal/area-segura/veiculo?placa=' + placa);
    }

}
