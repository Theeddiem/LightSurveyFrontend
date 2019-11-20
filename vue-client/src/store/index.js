import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    options: ['snuday', 'monday'],
    title: '',
    currentSurvey: null,
    voterIndexs: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
