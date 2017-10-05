export default {

    state: {
        dadosUsuario: {}
    },

    login(http, username, password) {
        console.log('loggin in');
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
