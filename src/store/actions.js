export const actions = {
  setTipProp ({ commit, state }, tipProp) {
    commit('SET_TIPPROP', tipProp)
  },
  setTipFlag ({ commit, state }, tipFlag) {
    commit('SET_TIPFLAG', tipFlag)
  }
}
