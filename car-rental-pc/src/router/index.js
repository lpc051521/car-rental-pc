import Vue from 'vue'
import Router from 'vue-router'

import Head from '../components/ch_Head/head.vue'
import Home from '../components/ch_home/home.vue'
import Register from '../components/ch_register/register.vue'
import Refer from '../components/ch_refer/refer.vue'
import Compile from '../components/ch_compile/compile.vue'
import Rechare from '../components/ch_recharge/recharge.vue'
import Manage from '../components/ch_manage/manage.vue'
import Order from '../components/ch_order/order.vue'



Vue.use(Router)
import Login from './../components/login/login'
import Inquire from './../components/inquire/inquire'
import Clearing from './../components/clearing/clearing'
import Verify from './../components/verify/verify'
import Result from './../components/result/result'

export default new Router({
  routes: [ 
    // 车辆查询
    {
      path: '/inquire',
      name: 'inquire',
      component: Inquire
    },
    // 费用结算管理
    {
      path: '/clearing',
      name: 'clearing',
      component: Clearing
    },
    // 验车
    {
      path: '/verify',
      name: 'verify',
      component: Verify
    },
    // 结算
    {
      path: '/result',
      name: 'result',
      component: Result
    },


    // 空路径时展示登录页
    {
      path: '/',
      name: 'login', 
      component: Login
    },
    // 首页
    {
      path: '/home',
      component: Home
    },

    // 免费注册
    {
      path: '/register',
      component: Register
    },

    // 免费查询
    {
      path: '/refer',
      component: Refer
    },

    // 编辑
    {
      path: '/compile',
      component: Compile
    },

    // 充值
    {
      path: '/rechare',
      component: Rechare
    },

    // 预约管理
    {
      path: '/manage',
      component: Manage
    },

    // 受理预约
    {
      path: '/order',
      component: Order
    },
  ]
})

