import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes.js';
import {progressBar} from './services/progressBar.js';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import VueMask from 'v-mask'
import {authStore} from './store/authStore.js';
import CxltToastr from 'cxlt-vue2-toastr'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/spinner.css';
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import './assets/css/style.css';

Vue.use(VueRouter);
Vue.use(VueResource);

var toastrConfigs = {
    position: 'top right',
    showDuration: 300,
    hideDuration: 300,
    timeOut: 4000
};
Vue.use(CxltToastr, toastrConfigs);

Vue.http.options.root = 'http://localhost:8080/portal';

Vue.use(VeeValidate);
Vue.use(VueMask);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    console.log('beforeEach', to.fullPath);
    progressBar.start();
    console.log(authStore.getters.authorizationToken);
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!authStore.getters.authorizationToken) {
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


Vue.http.interceptors.push(function(request, next) {

    let token = authStore.getters.authorizationToken;
    if (token)
        request.headers.set('Authorization', token);

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


