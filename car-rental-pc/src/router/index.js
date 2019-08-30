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

export default new Router({
  routes: [
    {
      path: '/',
      name: 'head',
      component: Head
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/refer',
      component: Refer
    },
    {
      path: '/compile',
      component: Compile
    },
    {
      path: '/rechare',
      component: Rechare
    },
    {
      path: '/manage',
      component: Manage
    },
    {
      path: '/order',
      component: Order
    },
  ]
})

