import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import HelloWorld from './components/HelloWorld.vue';
import Reports from './components/Reports.vue';
import Budget from './components/Budget.vue';

Vue.use(VueRouter);

const routes = [
  {path: '', component: Budget},
  {path: '/budget', component: Budget},
  {path: '/reports', component: Reports}
];
const router = new VueRouter({routes});

Vue.use(Vuetify);
Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
