import Vue from "vue";
import Vuex from "vuex";
import test from "./modules/test";
import singer from './modules/singer'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    test,
    singer
  },
});
