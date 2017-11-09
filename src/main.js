// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import '../static/me.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(iView);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// Vue.prototype.getJSON = function(host){
//     var posts;
//     this.axios.get(host)
//       .then(response => {
//         posts =  response.data;
//       })
//       .catch(e => {
//         // this.errors.push(e)
//         console.log('error');
//       })
//     return posts;
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
