import Vue from 'vue';
import App from './App.vue';

// router
import VueRouter from 'vue-router';
import router from './router.js';

// vuetify additional components (expansion panel)
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

// vue-material for most components
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

// use
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
