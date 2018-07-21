// router
import VueRouter from 'vue-router';
import router from './router.js';
import VueCookie from 'vue-cookie';

// vuetify additional components (expansion panel)
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

// vue-material for most components
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

// filters
import Vue2Filters from 'vue2-filters';

import Vue from 'vue';

// This may need to be moved
// This is how I figured out how to display the login page if the user is not authenticated
import * as Auth from './components/Authentication';

// import the App last so these styles override any from the component library styles
import App from './App.vue';

import store from './store';

// use
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueMaterial);
Vue.use(Vue2Filters);
Vue.use(VueCookie);

Vue.config.productionTip = false;

Auth.default.checkAuthentication();

new Vue({
  router,
  data: () => ({
    // central place where different components can share data
    store: store
  }),
  render: h => h(App)
}).$mount('#app');
