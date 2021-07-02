import request from "@/utils/request.js";
// 获取所有榜单
export const reqTopList = () => {
    return request({
      url:'/toplist',
      method:'get'
    })
  }
  
// 获取榜单详情
export const reqgetplaylistDetail  = (params) => {
    return request({
        url:'/playlist/detail',
        method:'get',
        data:'params'
    })
}