import VueRouter from 'vue-router';

import Reports from './components/Reports.vue';
import Budget from './components/Budget.vue';
import Transactions from './components/Transactions.vue';
import Setup from './components/Setup.vue';
import Authentication from './components/Authentication/Authentication.vue';

const routes = [
  {path: '', component: Budget},
  {path: '/budget', component: Budget},
  {path: '/reports', component: Reports},
  {path: '/transactions', component: Transactions},
  {path: '/setup', component: Setup},
  {path: '/login', name: 'Authentication', component: Authentication}
];

export default new VueRouter({routes});
