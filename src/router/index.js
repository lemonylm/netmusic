import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
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
router.beforeEach((to, from, next) => {
  next();
});
export default router;
