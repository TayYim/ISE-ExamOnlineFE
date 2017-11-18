import Vue from 'vue'
import Vuex from 'vuex'
import course from './modules/course'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    currentPage: "home",
    isLogged: false
  },
  modules: {
    course,
    user
  },
  mutations: {
    toggleLogged(state) {
      state.isLogged = !state.isLogged;
    },
    setCurrentPage(state, name) {
      state.currentPage = name;
      console.log("currentPage"+state.currentPage);
    }
  }
})
