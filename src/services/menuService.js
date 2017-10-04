

import {eventHub} from '../main.js';

export const MenuService = {

    state: {
        showMenu: false
    },
    toggle() {
        console.log('togglinh menu: ' + this.state.showMenu);
        this.state.showMenu = !this.state.showMenu;
        eventHub.$emit('toggleMenuEvent', this.state.showMenu);
    },
    getShowMenu() {
        return this.state.showMenu;
    }

};