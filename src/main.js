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

/**
 * login first before enter the collection
 */
// router.beforeEach(function(to, from, next) {
//   if (!store.isLogged && to.name === "collection") {
//     next('/login')
//   } else {
//     next();
//   }
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({el: '#app', store, router, template: '<App/>', components: {
    App
  }})
