import VueRouter from 'vue-router';

import * as Auth from './components/Authentication';

import Reports from './components/Reports.vue';
import Budget from './components/Budget.vue';
import Transactions from './components/Transactions.vue';
import Setup from './components/Setup.vue';
import Authentication from './components/Authentication/Authentication.vue';

const routes = new VueRouter({
  routes: [
    {path: '', component: Budget, meta: {requiredAuth: true}},
    {path: '/budget', component: Budget, meta: {requiredAuth: true}},
    {path: '/reports', component: Reports, meta: {requiredAuth: true}},
    {path: '/transactions', component: Transactions, meta: {requiredAuth: true}},
    {path: '/setup', component: Setup, meta: {requiredAuth: true}},
    {path: '/login', name: 'Authentication', component: Authentication}
  ]
});

routes.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth) {
    if (Auth.default.user.authenticated) {
      next();
    } else {
      routes.push('/login');
    }
  } else {
    next();
  }
});

export default routes;
