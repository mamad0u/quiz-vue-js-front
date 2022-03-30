import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    score: 0,
    thematiqueG: ''
  },
  getters: {

  },
  mutations: {
    addThem(state, thematique) {
      state.thematiqueG = thematique
    },
  },
  actions: {},
  modules: {}
})