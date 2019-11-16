import Vue from 'vue'
import Router from 'vue-router'

import Menu from '@/components/Menu'
import Orders from '@/components/Orders'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/menu',
      component: Menu
    },
    {
      path: '/orders',
      component: Orders
    }
  ]
});
