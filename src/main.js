// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView);

import 'bootstrap/dist/css/bootstrap.min.css'

import '../static/me.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    exam:{
        id: 0,
        title: "",
        year: ""
    },
    totalNum: 0,
    userSelect: [],
    questions: [],
    questionsHead: []
  },
  mutations: {
    increment (state) {
      state.count++
  },
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
  }
  }
})

Vue.config.productionTip = false

Vue.prototype.bus = new Vue()


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
