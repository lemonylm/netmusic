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
    }
}
