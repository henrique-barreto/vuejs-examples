

export class HabilitacaoService {

    constructor(http){
        this.http = http;
    }

    findHabilitacao() {
        return this.http.get('area-segura/habilitacao');
    }

}