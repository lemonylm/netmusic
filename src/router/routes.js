// 一级路由
const Discover = () => import("pages/Discover");
const MyMusic = () => import("pages/MyMusic");
// 二级路由
const Recommend = () => import("pages/Discover/Recommend");
const Rank = () => import("pages/Discover/Rank");
// 404
const NotFound = () => import("pages/404/404");

export default [
  {
    path: "/discover",
    component: Discover,
    children: [
      {
        path: "recommend",
        name: "Recommend",
        component: Recommend,
      },
      {
        path: "rank",
        name: "Rank",
        component: Rank,
      },
      {
        path: "",
        redirect: "recommend",
      },
    ],
  },
  {
    path: "/mymusic",
    name: "MyMusic",
    component: MyMusic,
  },
  {
    path: "/notfound",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/",
    redirect: "/discover/recommend",
  },
  {
    path: "/*",
    redirect: "/notfound",
  },
];
