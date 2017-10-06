
export default {


    vincular(http, placa) {
        placa = placa.split('-').join('');
        placa = placa.toUpperCase();
        return http.post('http://localhost:8080/portal/area-segura/vinculoVeiculo',
            {placa: placa},
            this.buildHeader());
    },

    getAuthorizationToken() {
        return window.localStorage.getItem('token');
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
