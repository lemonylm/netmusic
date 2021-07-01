import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as API from "@/api";

import Header from '@/components/Header'

import "@/plugins/element";
Vue.config.productionTip = false;
Vue.prototype.$API = API;

Vue.component(Header.name, Header)

new Vue({
  beforeCreate() {
    Vue.prototype.$bus=this
    Vue.prototype.$API=API;
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
