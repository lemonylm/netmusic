import request from '@/utils/request.js'
// 获取用户歌单
// /user/playlist
// uid
export default {
    getPlayList() {
      return request.get(`/personalized?limit=29`);
    }
    

   
  
   
    
  };
  