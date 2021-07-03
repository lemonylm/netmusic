import request from '@/utils/request.js'

export default {
   async getSingerList(type,area){
        return request.get(`/artist/list?type=${type}&area=${area}`)
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
    async hostSongs(){
      return request.get('/artist/top/song')  
    }
}
