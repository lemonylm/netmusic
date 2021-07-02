import {reqSinger} from '@/api'
const state={
  singerList:[]   
}
const mutations={
    SET_SINGERLIST(state,singerList){
      state.singerList = singerList
    }
}
const actions={
   getSingerList({commit}){
      const result = await reqSinger()
      if(result.code === 200){
        commit('SET_SINGERLIST',result.artists)
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
