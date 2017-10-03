import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes.js';



// import 'normalize.css/normalize.css';
// import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

// import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
// import 'bootstrap/dist/css/bootstrap-grid.min.css';



Vue.use(VueRouter);


const router = new VueRouter({

    routes: routes,
    mode: 'history'
});


export const eventHub = new Vue();

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});



var Nanobar = require('nanobar');

var options = {
    classname: 'my-class',
    id: 'my-id',
    target: document.getElementById('app')
};

window.nanobar = new Nanobar( options );
window.nanobar.go(0);

router.beforeEach((to, from, next) => {

    window.nanobar.go(30);
    next();
});

router.afterEach((to, from) => {
    console.log('fim');
    window.nanobar.go(100);
});