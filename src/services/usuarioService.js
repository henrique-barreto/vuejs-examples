export class UsuarioService {

    constructor(http) {
        this.http = http;
    }

    login(loginData) {
        return this.http.post('login', loginData);
    }

    getDadosUsuarioLogado() {
        return this.http.get('area-segura/usuarioLogado');
    }

}
