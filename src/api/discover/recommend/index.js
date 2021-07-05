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
  // 新碟上架
  async getNewAlbum() {
    return request.get('/album/new?area=ALL&limit=10')
  },
  // 榜单
  async getTopList() {
    return request.get('/toplist')
  },
  // 获取排行榜数据
  async getPlaylistDetail(id) {
    return request.get(`/playlist/detail?id=${id}`)
  },
  // 获取排行榜歌曲数据
  async getPlaylistSongsDetail(ids) {
    return request.get(`/song/detail?ids=` + ids)
  },
  // 登录
  async login(phone, password) {
    return request.get(`/login/cellphone?phone=${phone}&password=${password}`)
  },
  // 获取每日推荐
  async getDailyRecommendPlayList() {
    return request.get(`/recommend/songs`)
  },
};
