const state = { //  存储状态
  // 提示框信息
  tipProp: { tipPsition: '', tipMsg: '' },
  // 是否展示提示框
  tipFlag: ''
}

const mutations = { //  更改状态(同步操作)
  SET_TIPPROP (state, tipProp) {
    state.tipProp = tipProp
  },
  SET_TIPFLAG (state, tipFlag) {
    state.tipFlag = tipFlag
  }
}

const actions = { //  异步处理放在action中
  setTipProp ({ commit, state }, tipProp) {
    commit('SET_TIPPROP', tipProp)
  },
  setTipFlag ({ commit, state }, tipFlag) {
    commit('SET_TIPFLAG', tipFlag)
  }
}

const getters = {
  getTipProp: state => state.tipProp,
  getTipFlag: state => state.tipFlag
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
