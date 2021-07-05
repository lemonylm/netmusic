// 一级路由
const Discover = () => import("../pages/Discover");
const MyMusic = () => import("../pages/MyMusic");
// 二级路由
const Recommend = () => import("pages/Discover/Recommend");
const Rank = () => import("pages/Discover/Rank");
const PlayList = () => import("pages/Discover/PlayList");
const NewDiscShelves = () => import("pages/Discover/NewDiscShelves");
const Radio = () => import("pages/Discover/Radio");
const Singer = () => import("../pages/Discover/Singer");
//三级路由
const songList =() => import("../pages/Discover/Singer/songList")
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
        path: "playlist",
        name: "PlayList",
        component: PlayList,
      },
      {
        path: "newdiscshelves",
        name: "NewDiscShelves",
        component: NewDiscShelves,
      },
      {
        path: "radio",
        name: "Radio",
        component: Radio,
      },
      {
        path: "singer",
        name: "Singer",
        component: Singer,
      },
      {
        path:"songlist",
        name:"songList",
        component:songList
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
  {
    path: "/",
    redirect: "/discover/radio",
  },
];
