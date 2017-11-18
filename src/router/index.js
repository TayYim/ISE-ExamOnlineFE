import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Exam from '@/components/exam/Exam'
import Normal from '@/components/exam/Normal'
import Random from '@/components/exam/Random'
import Confirm from '@/components/exam/Confirm'
// import Question from '@/components/question/Question';
// import Collection from '@/components/collection/Collection';
// import Login from '@/components/user/Login';
// import Register from '@/components/user/Register';

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/exam',
      name: 'exam',
      component: Exam,
      children: [
        {
          path: 'normal',
          component: Normal
        }, {
          path: 'random',
          component: Random
        }, {
          path: 'confirm',
          component: Confirm
        }
      ]
    },
    // {
    //     path: '/question',
    //     name: 'question',
    //     component: Question
    // },
    // {
    //     path: '/collection',
    //     name: 'collection',
    //     component: Collection
    // } ,
    // {
    //     path: '/login',
    //     name: 'login',
    //     component:Login
    // },
    // {
    //     path: '/register',
    //     name: 'register',
    //     component:Register
    // }
  ]
});

export default router
