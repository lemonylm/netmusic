import request from "@/utils/request.js";
// 新碟上架
// /top/album
// limit
export default {
  getDescList() {
    return request.get("/top/album?limit=10");
  },

  // 全部新碟
  // /album/new?area=KR&limit=10
  allDescList(){

return request.get('/album/new?area=ALL&limit=35')  }
};
