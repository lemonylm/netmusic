import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from '@/store/index'

import user from '@/store/modules/user'

const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(...args) {
  return args.length > 1
    ? originPush.apply(this, args)
    : originPush.apply(this, args).catch((err) => err);
};
VueRouter.prototype.replace = function(...args) {
  return args.length > 1
    ? originReplace.apply(this, args)
    : originReplace.apply(this, args).catch((err) => err);
};
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});
router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token');
  if(token) {
    if(user.state.userInfo.nickname) {
      next()
    } else {
      const result = await store.dispatch('get_userInfo');
      if(result === 'ok') {
        next(to.path)
      } else {
        next('/notfound')
      }
    }
  } else {
    next()
  }
});
export default router;
