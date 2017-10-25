export const nanpStore = {
    state: {
        veiculo: {},
        autosSelecionados: [],
        borderos: []
    },
    addAutos (veiculo, autos) {
        this.state.veiculo = veiculo;
        this.state.autosSelecionados = autos;
    },
    getAutos() {
        return this.state.autosSelecionados;
    },
    getVeiculo() {
        return this.state.veiculo;
    },
    setBorderos(borderos) {
        this.state.borderos = borderos;
    },
    getBorderos(){
        return this.state.borderos;
    }
};
