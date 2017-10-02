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

router.beforeEach((to, from, next) => {


    next();
});

router.afterEach((to, from) => {
    console.log('fim');
});

export const eventHub = new Vue();

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
