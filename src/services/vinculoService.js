export class VinculoService {

    constructor(http) {
        this.http = http;
    }

    vincularVeiculo(placa) {
        return this.http.post('area-segura/vinculoVeiculo/' + placa, {});
    }

    desvincularVeiculo(idVinculo) {
        return this.http.delete('area-segura/vinculoVeiculo/' + idVinculo);
    }

}
