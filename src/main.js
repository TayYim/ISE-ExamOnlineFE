// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Vuex from 'vuex'
import store from './store'
import VueParticles from 'vue-particles'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../static/me.css'
import axios from './axios'

Vue.use(iView)
// Vue.use(Vuex)
Vue.use(VueParticles)

<<<<<<< HEAD
axios.defaults.baseURL = 'http://45.32.66.148:8000';

const store = new Vuex.Store({
  state: {
    exam: {
      id: 0,
      title: "",
      year: ""
    },
    totalNum: 0,
    userSelect: [],
    questions: [],
    questionsHead: [],
    userName: "admin",
    userEmail: "admin@qq.com",
    isLogged: true,
    currentPage: "home"
  },
  mutations: {
    logExam(state, exam) {
      state.exam = exam;
    },
    logTotalNum(state, totalNum) {
      state.totalNum = totalNum;
    },
    logUserSelect(state, userSelect) {
      state.userSelect = userSelect;
    },
    logQuestions(state, questions) {
      state.questions = questions;
    },
    logQuestionsHead(state, questionsHead) {
      state.questionsHead = questionsHead;
    },
    setUserName(state, userName) {
      state.userName = userName;
    },
    setUseEmail(state, useEmail) {
      state.useEmail = useEmail;
    },
    toggleLogged(state) {
      state.isLogged = !state.isLogged;
    },
    setCurrentPage(state, name) {
      state.currentPage = name;
      console.log(state.currentPage);
    }
  },
  getters: {
    userDone: state => {
      return state.userSelect.filter(select => select).length;
    }
  }
});

=======
>>>>>>> rebuild
/**
 * login first before enter the collection
 */
// router.beforeEach(function(to, from, next) {
//   if (!store.isLogged && to.name === "collection") {
//     next('login')
//   } else {
//     next();
//   }
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({el: '#app', store, router, template: '<App/>', components: {
    App
  }})
