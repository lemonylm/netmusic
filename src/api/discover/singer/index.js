import request from '@/utils/request.js'

export default {
   async getSingerList(){
        return request.get('/artist/list')
    }
}
// console.log(
//     "###"
// )
// export const reqSinger = () => {
//     return request({
//         url:`/artist/list`,
//         method:'get'
//     })
// }
// reqSinger()