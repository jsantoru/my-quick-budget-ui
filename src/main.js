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

// filters
import Vue2Filters from 'vue2-filters';

// use
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueMaterial);
Vue.use(Vue2Filters);

Vue.config.productionTip = false;

new Vue({
  router,
  data: () => ({
    // central place where different components can share data
    store: {}
  }),
  render: h => h(App)
}).$mount('#app');
