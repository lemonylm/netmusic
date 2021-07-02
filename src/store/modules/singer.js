import request from '@/utils/request'
const state={
    singerList:[]
}
const mutations={
    RECEIVE_SINGERLIST(state,singerList){
        state.singerList = singerList
    }
}
const actions={
    async getSingerList({commit},{type,area}){
        const result = await request('/artist/list',{type,area})
        if(result.code === 200){
            commit('RECEIVE_SINGERLIST',result)
        }
   }
}
const getters={

}
export default {
  state,
  mutations,
  actions,
  getters,
};
