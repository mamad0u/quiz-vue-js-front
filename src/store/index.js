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
    },
    valueScore(state) {
      return state.score;
    }
  },
  mutations: {
    switchE(state, switchBtnValue) {
      state.switchBtn = switchBtnValue
    },
    incrementScore(state) {
      state.score++
    },
    incrementScoreSpeddy(state, value) {
      state.score = state.score + value
    }
  },
  actions: {},
  modules: {}
})