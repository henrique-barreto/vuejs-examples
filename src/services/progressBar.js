
const Nanobar = require('nanobar');

export const progressBar = {
    options: {
        classname: 'my-class',
        id: 'my-id',
        target: document.getElementById('app')
    },
    nanobar: new Nanobar(this.options),
    state: {
        loading: false
    },
    start() {
        this.state.loading = true;
        this.nanobar.go(60);
    },
    done() {
        this.state.loading = false;
        this.nanobar.go(100);
    }
};