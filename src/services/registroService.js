

export class RegistroService {

    constructor(http){
        this.http = http;
    }

    sendResetPassword(dados) {
        return this.http.post('reset-password', dados);
    }

    findEmailByResetCode(code){
        return this.http.get('email-reset-code?code=' + code);
    }

    setNewPassword(dados) {
        return this.http.post('new-password', dados);
    }

    changePassword(requestBody) {
        return this.http.post('area-segura/change-password', requestBody);
    }

}