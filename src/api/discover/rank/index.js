import request from "@/utils/request.js";

export default {
    // 获取所有榜单
   async getToplist(){
        return request.get('/toplist');
    },
    // 获取榜单详情
    async getplaylistDetail(listid){
        return requset.get(`/playlist/detail/${listid}`);
    },
};




// // 获取榜单内容摘要
// export default {
//     async getToplistDetail(){
//         return request.get('/toplist/detail')
//     }
// }
