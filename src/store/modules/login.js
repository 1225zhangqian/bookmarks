import { fetchLoginApi } from '../../api/modules/login/index.js'

const state = { //  存储状态
  isLogin: false
}

const mutations = { //  更改状态(同步操作)
  updateIsLogin (state, isLogin) {
    state.isLogin = isLogin
  }
}

const actions = { //  异步处理放在action中
  async fetchLogin ({ commit }, username, password) {
    try {
      const params = { username, password }
      await fetchLoginApi(params)
      commit('updateIsLogin', true)
    } catch (e) {
      commit('updateIsLogin', false)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
