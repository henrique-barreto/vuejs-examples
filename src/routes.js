import Login from './components/login/Login.vue';
import RecuperarSenha from './components/login/RecuperarSenha.vue';
import ResetarSenha from './components/login/ResetarSenha.vue';
import Register from './components/register/Register.vue';
import SecuredArea from './shared/SecuredArea.vue';
import SimpleSecuredArea from './shared/SimpleSecuredArea.vue';
import PublicArea from './shared/PublicArea.vue';
import Home from './components/secured/home/Home.vue';
import MinhaConta from './components/secured/conta/MinhaConta.vue';
import AlterarSenha from './components/secured/conta/AlterarSenha.vue';
import NotFound from './shared/erros/NotFound.vue';
import SegundaViaCRLV from './components/secured/veiculo/crlv-2via/SegungaViaCRLV.vue';
import TermoSegundaViaCRLV from './components/secured/veiculo/crlv-2via/TermoSegundaViaCRLV.vue';
import Bordero2ViaCRLV from './components/secured/veiculo/crlv-2via/Bordero2ViaCRLV.vue';
import SegundaViaCRV from './components/secured/veiculo/crv-2via/SegungaViaCRV.vue';
import TermoSegundaViaCRV from './components/secured/veiculo/crv-2via/TermoSegundaViaCRV.vue';
import Bordero2ViaCRV from './components/secured/veiculo/crv-2via/Bordero2ViaCRV.vue';
import TransformarNaNp from './components/secured/veiculo/nanp/TransformarNaNp.vue';
import TermoResponsabilidade from './components/secured/veiculo/nanp/TermoResponsabilidade.vue';
import ConfirmarNaNp from './components/secured/veiculo/nanp/ConfirmarNaNp.vue';
import GerarBoleto from './components/secured/veiculo/nanp/GerarBoleto.vue';
import BorderoNANP from './components/secured/veiculo/nanp/BorderoNANP.vue';
import Veiculos from './components/secured/veiculo/vinculos/Veiculos.vue';
import ConsultaHabilitacao from './components/secured/habilitacao/ConsultaHabilitacao.vue';
import EmConstrucao from './shared/erros/EmConstrucao.vue';
import ErroPage from './shared/erros/ErroPage.vue';
import Teste from './components/Teste.vue';

import VueRouter from 'vue-router';

export const routes = [

    {
        path: '', component: PublicArea, meta: {title: 'Login'},
        children: [
            {path: '/login', alias: '', component: Login, meta: {title: 'Login'}},
            {path: '/register', component: Register, meta: {title: 'Registre-se'}},
            {path: '/recuperar-senha', component: RecuperarSenha, meta: {title: 'Recuperar senha'}},
            {path: '/resetar-senha', component: ResetarSenha, meta: {title: 'Escolher senha'}},
            {path: '/404', component: NotFound, meta: {title: 'Página não encontrada'}},
            {path: '/500', component: ErroPage, meta: {title: 'Erro!'}},
            {path: '/em-construcao', component: EmConstrucao, meta: {title: 'Em construção'}},
            {path: '/teste', component: Teste, meta: {title: 'TESTE'}}
        ]
    },
    {
        path: '', component: SecuredArea,
        children: [
            {
                path: '/area-segura/home',
                alias: '/area-segura',
                component: Home,
                meta: {title: 'Home'}
            },
            {
                path: '/area-segura/minha-conta',
                component: MinhaConta,
                meta: {title: 'Minha Conta'}
            },
            {
                path: '/area-segura/minha-conta/alterar-senha',
                component: AlterarSenha,
                meta: {title: 'Alterar Senha'}
            },
            {
                path: '/area-segura/segunda-via-crlv',
                component: SegundaViaCRLV,
                meta: {title: '2° via CRLV'}
            },
            {
                path: '/area-segura/segunda-via-crlv/termo',
                component: TermoSegundaViaCRLV,
                meta: {title: '2° via CRLV'}
            },
            {
                path: '/area-segura/segunda-via-crlv/boleto',
                component: Bordero2ViaCRLV,
                meta: {title: '2° via CRLV'}
            },

            {
                path: '/area-segura/segunda-via-crv',
                component: SegundaViaCRV,
                meta: {title: '2° via CRV'}
            },
            {
                path: '/area-segura/segunda-via-crv/termo',
                component: TermoSegundaViaCRV,
                meta: {title: '2° via CRV'}
            },
            {
                path: '/area-segura/segunda-via-crv/boleto',
                component: Bordero2ViaCRV,
                meta: {title: '2° via CRV'}
            },

            {
                path: '/area-segura/habilitacao',
                component: ConsultaHabilitacao,
                meta: {title: 'Habilitação'}
            },
            {
                path: '/area-segura/em-construcao',
                component: EmConstrucao,
                meta: {title: 'Em construção'}
            },
            {
                path: '/area-segura/transformar-na-np',
                component: TransformarNaNp,
                meta: {title: 'Transforma Notificação em Penalidade'}
            },
            {
                path: '/area-segura/transformar-na-np/termo',
                component: TermoResponsabilidade,
                meta: {title: 'Transforma Notificação em Penalidade'}
            },
            {
                path: '/area-segura/transformar-na-np/confirmar',
                component: ConfirmarNaNp,
                meta: {title: 'Confirmar Penalidades'}
            },
            {
                path: '/area-segura/transformar-na-np/gerar-boleto',
                component: GerarBoleto,
                meta: {title: 'Gerar Boletos'}
            },
            {
                path: '/area-segura/transformar-na-np/boleto',
                component: BorderoNANP,
                meta: {title: 'Boleto'}
            }
        ]
    },
    {
        path: '', component: SimpleSecuredArea,
        children: [
            {path: '/area-segura/veiculos', component: Veiculos, meta: {title: 'Veículos'}},
        ]
    },
    {path: '*', redirect: '/404', meta: {title: 'Página não encontrada'}}

];


import {authStore} from './store/authStore.js';
import {progressBar} from './services/progressBar.js';
import {usuarioStore} from "./store/usuarioStore";

export const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

router.afterEach((to, from) => {
    progressBar.done();
});

function setTitle(to) {
    document.title = to.meta.title ? 'Detran-DF - Portal - ' + to.meta.title : 'Detran-DF - Portal';
}

function temVeiculosVinculados() {
    let usuarioLogado = usuarioStore.getters.dadosUsuarioLogado;
    let temVeiculos = usuarioLogado && usuarioLogado.vinculos && usuarioLogado.vinculos.length > 0;
    console.log('tem eiculos? ' + temVeiculos);
    return temVeiculos;
}

router.beforeEach((to, from, next) => {
    setTitle(to);
    progressBar.start();

    if (to.path.includes('area-segura')) {
        if (!authStore.getters.authorizationToken) {
            next({path: '/login'});
            progressBar.done();
            return;
        }

        console.log(to);
        if (!to.path.includes('area-segura/veiculos') && !temVeiculosVinculados()) {
            next({path: '/area-segura/veiculos'});
            progressBar.done();
        } else {
            next();
        }

    } else {
        next();
    }


});

