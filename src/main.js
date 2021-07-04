import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as API from "@/api";
import 'element-ui/lib/theme-chalk/index.css';


import Header from '@/components/Header'
// import Recommend from '@/components/Recommend'

import "@/plugins/element";
Vue.config.productionTip = false;

Vue.component(Header.name, Header)
// Vue.component(Recommend.Card, Recommend)

new Vue({
  beforeCreate() {
    Vue.prototype.$bus=this
    Vue.prototype.$API=API;
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
