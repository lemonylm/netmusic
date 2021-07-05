import request from "@/utils/request.js";

export default {
    // 获取所有榜单
   async getToplist(){
        return request.get('/toplist');
    },
    // 获取榜单详情
    async getplaylistDetail(id){
        return request.get(`/playlist/detail?id=${id}`);
    },
};




// // 获取榜单内容摘要
// export default {
//     async getToplistDetail(){
//         return request.get('/toplist/detail')
//     }
// }
