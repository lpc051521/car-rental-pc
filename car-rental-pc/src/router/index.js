import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Login from './../components/login/login'
import Inquire from './../components/inquire/inquire'
import Clearing from './../components/clearing/clearing'
import Verify from './../components/verify/verify'
import Result from './../components/result/result'

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'clearing',
    //   component: Result
    // },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/inquire',
      name: 'inquire',
      component: Inquire
    },
    {
      path: '/clearing',
      name: 'clearing',
      component: Clearing
    },
    {
      path: '/verify',
      name: 'verify',
      component: Verify
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
  ]
})
