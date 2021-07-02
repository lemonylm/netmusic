import request from '@/utils/request.js'

export default {
   async getSingerList(){
        return request.get(`/artist/list`)
    },
    //热门歌手
    async hostSingerList(){
        return request.get('/top/artists')
    },
    //收藏歌手列表
    async CollectionSinger(){
        return request.get('/artist/sublist')
    },
    //歌手榜
    async singerSheet (){
        return request.get('/toplist/artist')
    }
}
