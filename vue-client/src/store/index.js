import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    options: ["", ""],
    title: "",
    optionsId: [],

    currentSurvey: null
  },
  mutations: {},
  actions: {},
  modules: {}
});
