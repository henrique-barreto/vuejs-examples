import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes.js';
import {progressBar} from './services/progressBar.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

Vue.use(VueRouter);

var VueResource = require('vue-resource');

Vue.use(VueResource);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    console.log('beforeEach', to.fullPath);
    progressBar.start();
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (true) {
            next({
                path: '/login',
            });
        } else {
            next();
        }
    } else {
        next();
    }

});

router.afterEach((to, from) => {
    console.log('afterEach' + to.fullPath);
    progressBar.done();
});

export const eventHub = new Vue();

var vue = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});


