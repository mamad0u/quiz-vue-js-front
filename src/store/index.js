import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    score: 0,
    switchBtn: false
  },
  getters: {
    valueSwitch(state) {
      return state.switchBtn;
    }
  },
  mutations: {
    switchE(state, switchBtnValue) {
      state.switchBtn = switchBtnValue
    },
  },
  actions: {},
  modules: {}
})