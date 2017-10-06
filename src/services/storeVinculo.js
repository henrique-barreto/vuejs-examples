
export default {

    state: {
        vinculos: []
    },

    add(veiculo) {
        this.state.vinculos.push(veiculo);
    },

    remove(id) {
        this.state.vinculos = this.state.vinculos.filter(function (v) {
            return v.id === id;
        })
    },

    getVinculos() {
        return this.state.vinculos.slice();
    }

};
