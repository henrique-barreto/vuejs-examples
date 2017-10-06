export default {

    state: {
        dadosUsuario: {}
    },

    login(http, username, password) {
        console.log('loggin in');
        username = username.split('.').join("").split('-').join("");
        return new Promise((resolve, reject) => {
            let promisse = http.post('http://localhost:8080/portal/login', {username, password});
            promisse.then(
                response => {
                    let authToken = response.headers.get('authorization');
                    window.localStorage.setItem('token', authToken);
                    resolve(response);
                },
                error => {
                    reject(error);
                });
        });

    },

    getAuthorizationToken() {
        return window.localStorage.getItem('token');
    },

    getDadosUsuario(http) {
        console.log('pegando dados usuario');
        return new Promise((resolve, reject) => {
            let dadosUsuario = this.state.dadosUsuario;
            if (dadosUsuario.cpf) {
                resolve(dadosUsuario);
            } else {
                http.get('http://localhost:8080/portal/area-segura/usuarioLogado', this.buildHeader())
                    .then(
                        response => {
                            this.state.dadosUsuario = response.body;
                            resolve(response.body);
                        },
                        error => {
                            reject(error);
                        });
            }
        });
    },


    logout() {
        console.log('AuthService logout....');
        return new Promise((resolve, reject) => {
            window.localStorage.removeItem('token');
            this.dadosUsuario = {};
            resolve({message: "Deslogado!"});
        });
    },


    buildHeader() {
        let token = this.getAuthorizationToken();
        if (token) {
            return {
                headers: {
                    Authorization: token
                }
            }
        }
    }


};
