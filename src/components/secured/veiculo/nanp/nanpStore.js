export const nanpStore = {
    state: {
        autosSelecionados: []
    },
    addAutos (autos) {
        this.state.autosSelecionados = autos;
    }
};
