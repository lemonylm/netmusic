import request from "@/utils/request.js";
// 获取所有榜单
export default {
     getToplist() {
        return request.get('/toplist');
    }
};

// 获取榜单详情
// export default {
//     async getPlayListDetail(id) {
//         return request.get('/playlist/detail')
//     }
// };
// // 获取榜单内容摘要
// export default {
//     async getToplistDetail(){
//         return request.get('/toplist/detail')
//     }
// }
