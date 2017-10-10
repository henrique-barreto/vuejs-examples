

export class RegistroService {

    constructor(http){
        this.http = http;
    }

    sendResetPassword(dados) {
        return this.http.post('reset-password', dados);
    }

}