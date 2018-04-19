import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

import Detail from '@/views/Detail'

//import Finance from '@/views/Finance'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home/:type',
      name: 'Home',
      component: Home,
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: Detail,
    },
//  {
//    path: '/hot',
//    name: 'Hot',
//    component: Hot
//  },
    {
        path: '',
        redirect: '/home/all?type=__all__'
    },

  ]
})
