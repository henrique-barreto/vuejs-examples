import Login from './components/login/Login.vue';
import Register from './components/register/Register.vue';
import SecuredArea from './shared/SecuredArea.vue';
import PublicArea from './shared/PublicArea.vue';
import Home from './components/secured/home/Home.vue';
import NotFound from './shared/NotFound.vue';


export const routes = [

    {
        path: '', component: PublicArea,
        children: [
            {path: '/login', component: Login},
            {path: '/register', component: Register},
            {path: '/404', component: NotFound}
        ]
    },
    {
        path: '', component: SecuredArea,
        children: [
            {path: '/account/home', alias: '/account', component: Home}
        ]
    },
    {path: '*', redirect: '/404'}

];
