import Login from './components/login/Login.vue';
import RecuperarSenha from './components/login/RecuperarSenha.vue';
import ResetarSenha from './components/login/ResetarSenha.vue';
import Register from './components/register/Register.vue';
import SecuredArea from './shared/SecuredArea.vue';
import SimpleSecuredArea from './shared/SimpleSecuredArea.vue';
import PublicArea from './shared/PublicArea.vue';
import Home from './components/secured/home/Home.vue';
import NotFound from './shared/NotFound.vue';
import SegundaViaCRLV from './components/secured/veiculo/SegungaViaCRLV.vue';
import SegundaViaCRV from './components/secured/veiculo/SegungaViaCRV.vue';
import TransformarNaNp from './components/secured/veiculo/TransformarNaNp.vue';
import Vinculos from './components/secured/veiculo/vinculos/Vinculos.vue';
import Veiculos from './components/secured/veiculo/vinculos/Veiculos.vue';
import ConsultaHabilitacao from './components/secured/habilitacao/ConsultaHabilitacao.vue';
import EmConstrucao from './shared/EmConstrucao.vue';


export const routes = [

    {
        path: '', component: PublicArea, meta: {title: 'Login'},
        children: [
            {path: '/login', alias: '', component: Login, meta: {title: 'Login'}},
            {path: '/register', component: Register, meta: {title: 'Registre-se'}},
            {path: '/recuperar-senha', component: RecuperarSenha, meta: {title: 'Recuperar senha'}},
            {path: '/resetar-senha', component: ResetarSenha, meta: {title: 'Escolher senha'}},
            {path: '/404', component: NotFound, meta: {title: 'Página não encontrada'}}
        ]
    },
    {
        path: '', component: SecuredArea,
        children: [
            {path: '/area-segura/home', alias: '/area-segura', component: Home, meta: {requiresAuth: true, title: 'Home'}},
            // {path: '/area-segura/veiculos', component: Vinculos, meta: {requiresAuth: true, title: 'Veículos'}},
            {path: '/area-segura/segunda-via-crlv', component: SegundaViaCRLV, meta: {requiresAuth: true, title: '2° via CRLV' }},
            {path: '/area-segura/segunda-via-crv', component: SegundaViaCRV, meta: {requiresAuth: true , title: '2° via CRV'}},
            {path: '/area-segura/habilitacao', component: ConsultaHabilitacao, meta: {requiresAuth: true, title: 'Habilitação'}},
            {path: '/area-segura/em-construcao', component: EmConstrucao, meta: {requiresAuth: true, title: 'Em construção'}},
            {path: '/area-segura/transformar-na-np', component: TransformarNaNp, meta: {requiresAuth: true, title: 'Transforma Notificação em Penalidade'}}
        ]
    },
    {
        path: '', component: SimpleSecuredArea,
        children: [
            {path: '/area-segura/veiculos', component: Veiculos, meta: {requiresAuth: true, title: 'Veículos'}},
        ]
    },
    {path: '*', redirect: '/404', meta: {title: 'Página não encontrada'}}

];
