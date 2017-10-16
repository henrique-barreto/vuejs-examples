import Login from './components/login/Login.vue';
import RecuperarSenha from './components/login/RecuperarSenha.vue';
import ResetarSenha from './components/login/ResetarSenha.vue';
import Register from './components/register/Register.vue';
import SecuredArea from './shared/SecuredArea.vue';
import PublicArea from './shared/PublicArea.vue';
import Home from './components/secured/home/Home.vue';
import NotFound from './shared/NotFound.vue';
import SegundaViaCRLV from './components/secured/veiculo/SegungaViaCRLV.vue';
import SegundaViaCRV from './components/secured/veiculo/SegungaViaCRV.vue';
import TransformarNaNp from './components/secured/veiculo/TransformarNaNp.vue';
import Vinculos from './components/secured/veiculo/vinculos/Vinculos.vue';
import ConsultaHabilitacao from './components/secured/habilitacao/ConsultaHabilitacao.vue';
import EmConstrucao from './shared/EmConstrucao.vue';


export const routes = [

    {
        path: '', component: PublicArea,
        children: [
            {path: '/login', alias: '', component: Login},
            {path: '/register', component: Register},
            {path: '/recuperar-senha', component: RecuperarSenha},
            {path: '/resetar-senha', component: ResetarSenha},
            {path: '/404', component: NotFound}
        ]
    },
    {
        path: '', component: SecuredArea,
        children: [
            {path: '/area-segura/home', alias: '/area-segura', component: Home, meta: {requiresAuth: true}},
            {path: '/area-segura/veiculos', component: Vinculos, meta: {requiresAuth: true}},
            {path: '/area-segura/segunda-via-crlv', component: SegundaViaCRLV, meta: {requiresAuth: true}},
            {path: '/area-segura/segunda-via-crv', component: SegundaViaCRV, meta: {requiresAuth: true}},
            {path: '/area-segura/habilitacao', component: ConsultaHabilitacao, meta: {requiresAuth: true}},
            {path: '/area-segura/em-construcao', component: EmConstrucao, meta: {requiresAuth: true}},
            {path: '/area-segura/transformar-na-np', component: TransformarNaNp, meta: {requiresAuth: true}}
        ]
    },
    {path: '*', redirect: '/404'}

];
