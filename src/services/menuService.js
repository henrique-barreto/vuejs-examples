

import {eventHub} from '../main.js';

export const MenuService = {

    state: {
        showMenu: false
    },
    toggle() {
        this.state.showMenu = !this.state.showMenu;
        eventHub.$emit('toggleMenuEvent', this.state.showMenu);
    }

};