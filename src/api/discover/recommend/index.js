import request from "@/utils/request.js";
export default {
  async getHomePage() {
    return request.get('/homepage/block/page');
  },
  // 热门推荐歌单
  async getHotRecommend() {
    return request.get('/personalized?limit=8');
  },
  // 每日推荐歌单
  async getRecommend() {
    return request.get('/recommend/resource');
  },

};
