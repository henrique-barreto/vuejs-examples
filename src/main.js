import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes.js';
import {progressBar} from './services/progressBar.js';
import VueResource from 'vue-resource';
import AuthService from './services/authService.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    console.log('beforeEach', to.fullPath);
    progressBar.start();
    // if (to.matched.some(record => record.meta.requiresAuth)) {
    //     if (true) {
    //         next({
    //             path: '/login',
    //         });
    //     } else {
    //         next();
    //     }
    // } else {
    //     next();
    // }

    next();

});

router.afterEach((to, from) => {
    console.log('afterEach' + to.fullPath);
    progressBar.done();
});

export const eventHub = new Vue();

export default new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});


// Vue.http.interceptors.push(function(request, next) {
//
//     let token = AuthService.getAuthorizationToken();
//     if (token)
//         request.headers.set('Authorization', token);
//
//     next();
// });