import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import VueMask from 'v-mask'
import {authStore} from './store/authStore.js';
import CxltToastr from 'cxlt-vue2-toastr';
import {cpfFilter, horaFilter, placaFilter, yyyymmddFilter} from "./filters";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/spinner.css';
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import './assets/css/style.css';
import {router} from "./routes";
import {enviroment} from "./portal.config";


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VeeValidate);
Vue.use(VueMask);

const toastrConfigs = {
    position: 'top right',
    showDuration: 300,
    hideDuration: 300,
    timeOut: 4000
};
Vue.use(CxltToastr, toastrConfigs);

Vue.http.options.root = process.env.NODE_ENV === 'production' ? enviroment.URL_API_PROD : enviroment.URL_API_DEV;

Vue.filter('cpfFilter', cpfFilter);
Vue.filter('yyyymmddFilter', yyyymmddFilter);
Vue.filter('horaFilter', horaFilter);
Vue.filter('placaFilter', placaFilter);

Vue.http.interceptors.push(function (request, next) {
    let token = authStore.getters.authorizationToken;
    if (token) {
        console.log('colocando token no header: ' + token);
        request.headers.set('Authorization', token);
    } else {
        console.log('nao possui token');
    }
    next();
});


export const eventHub = new Vue();

export default new Vue({
    el: '#app',
    // router: router,
    router: router,
    render: h => h(App)
});
