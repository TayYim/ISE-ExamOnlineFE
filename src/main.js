// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../static/me.css'

Vue.use(VueAxios, axios)
Vue.use(iView)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    baseUrl: `http://localhost:3000/`,
    exam:{
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
    isLogged: false,
    isHomePage: true
  },
  mutations: {
    logExam(state,exam){
      state.exam = exam;
  },
    logTotalNum(state,totalNum){
      state.totalNum = totalNum;
  },
    logUserSelect(state,userSelect){
      state.userSelect = userSelect;
  },
    logQuestions(state,questions){
      state.questions = questions;
  },
    logQuestionsHead(state,questionsHead){
      state.questionsHead = questionsHead;
  },
    setUserName(state,userName){
      state.userName = userName;
  },
    setUseEmail(state,useEmail){
      state.useEmail = useEmail;
  },
    toggleLogged(state){
      state.isLogged = !state.isLogged;
  },
    toggleHomePage(state){
      state.isHomePage = !state.isHomePage;
      console.log(state.isHomePage);
  }
  },
  getters: {
    userDone: state => {
      return state.userSelect.filter(select => select).length;
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
