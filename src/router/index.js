import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../views/dashboard/Dashboard.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: () => import(/* webpackChunkName: "about" */ '../layout/Layout.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        }
      ]
    }
  ]
})
