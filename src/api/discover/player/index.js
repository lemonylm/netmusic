import request from "@/utils/request.js";
export default {
  // 根据歌曲id获取歌词
  getLyric(id) {
    return request.get("/lyric?id=" + id);
  },
  // 根据id获取歌曲url
  getMusicUrl(id) {
    return request.get("/song/url?id=" + id);
  },
  // 根据id获取歌曲信息
  getSongInfo(id) {
    return request.get("song/detail?ids=" + id);
  },
  // 分享歌曲
  getShareInfo(id) {
    return request.get(`/share/resource?id=${id}&msg=快来听!`);
  },
  updateSongList(id){

  }
};
