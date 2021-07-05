import request from '@/utils/request.js'

export default {
   async getSingerList(){
        return request.get(`/artist/list`)
    },
    //热门歌手
    async hostSingerList(){
        return request.get('/top/artists')
    },
    //歌手榜
    async singerSheet (){
        return request.get('/toplist/artist')
    },
    //地区
    async regionSinger(){
        return request.get('/toplist/artist')
    },
    //歌手热门50首
    async hostSongs(id){
      return request.get(`/artist/top/song?id=${id}`)  
    },
    //获取歌手详情
    async singerDetails(id){
        return request.get(`/artist/detail?id=${id}`)
    }
}
