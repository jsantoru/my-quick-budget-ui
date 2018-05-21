import Reports from './components/Reports.vue';
import Budget from './components/Budget.vue';
import VueRouter from 'vue-router';

const routes = [
  {path: '', component: Budget},
  {path: '/budget', component: Budget},
  {path: '/reports', component: Reports}
];

export default new VueRouter({routes});
