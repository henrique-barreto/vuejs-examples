import Login from './components/login/Login.vue';
import Register from './components/register/Register.vue';
import SecuredArea from './shared/SecuredArea.vue';
import PublicArea from './shared/PublicArea.vue';
import Home from './components/secured/home/Home.vue';
import NotFound from './shared/NotFound.vue';
import SegundaViaCRLV from './components/secured/veiculo/SegungaViaCRLV.vue';


export const routes = [

    {
        path: '', component: PublicArea,
        children: [
            {path: '/login', alias: '', component: Login},
            {path: '/register', component: Register},
            {path: '/404', component: NotFound}
        ]
    },
    {
        path: '', component: SecuredArea,
        children: [
            {path: '/area-segura/home', alias: '/area-segura', component: Home, meta: {requiresAuth: true}},
            {path: '/area-segura/segunda-via-crlv', component: SegundaViaCRLV, meta: {requiresAuth: true}}
        ]
    },
    {path: '*', redirect: '/404'}

];
