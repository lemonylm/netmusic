import request from '@/utils/request'

const state={
  userInfo: {}
}
const mutations={
  SET_USERINFO(state, userInfo) {
    state.userInfo = userInfo
  },

}
const actions={
  get_userInfo({commit}, userInfo) {
    commit('SET_USERINFO', userInfo)
  },
  async get_userInfo({commit}) {
    const result = await request.get('/user/account');
    if(result.code === 200) {
      commit('SET_USERINFO', result.profile)
      return 'ok'
    } else {
      return Promise.reject('error');
    }
  }
}
const getters={}
export default {
  state,
  mutations,
  actions,
  getters,
};
