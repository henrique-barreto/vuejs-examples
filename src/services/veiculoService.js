
export default {


    findByPlaca(http, placa) {

        placa = placa.split('-').join('');
        placa = placa.toUpperCase();
        return http.get('http://localhost:8080/portal/area-segura/veiculo?placa=' + placa);
    }


};
