// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Css from '../static/css/common.css'
import ElementUI from 'element-ui';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.use(ElementUI);
Vue.use(Css);
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>',
})
