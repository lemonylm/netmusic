// 一级路由
const Discover = () => import("../pages/Discover");
const MyMusic = () => import("../pages/MyMusic");
// 二级路由
<<<<<<< HEAD
const Recommend = () => import("pages/Discover/Recommend");
const Rank = () => import("pages/Discover/Rank");
const Radio = () => import("pages/Discover/Radio");
=======
const Recommend = () => import("../pages/Discover/Recommend");
const Rank = () => import("../pages/Discover/Rank");
const Singer = () => import("../pages/Discover/Singer")
>>>>>>> yunlixing
// 404
const NotFound = () => import("../pages/404/404");

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
        path:"radio",
        name:"Radio",
        component: Radio,
      },
      {
<<<<<<< HEAD
        path: "",
        redirect:'recommend'
      }
=======
        path:"singer",
        name:"Singer",
        component:Singer
      },
>>>>>>> yunlixing
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
  {
    path: "/",
    redirect: "/discover/radio",
  }
];
