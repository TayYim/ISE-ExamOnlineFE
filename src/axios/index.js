import * as theAxios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'

Vue.use(VueAxios, theAxios)

var axios = theAxios.create({
  baseURL: 'http://45.32.66.148:8000/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
  // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  // withCredentials:true
});

export default axios
