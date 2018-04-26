import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

import Detail from '@/views/Detail'

import Fail from '@/views/Fail'
import md5 from 'js-md5'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home/:type',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      },
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: Detail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/fail',
      name: 'Fail',
      component: Fail,
    },
    {
      path: '*',
      meta: { requiresAuth: true }
    },
    /*{
        path: '/',
        redirect: '/home/all?type=__all__',
    },*/

  ]
})

router.beforeEach((to, from, next) => {
  let token = window.location.search.substring(14,46);
  let deviceNum = window.location.search.substring(64,75);
  let signature = window.location.search.substring(86);
  /*console.log(token);
  console.log(deviceNum);
  console.log(signature);
  console.log(md5(token+deviceNum));*/
  if(to.meta.requiresAuth){
    
    if(md5(token+deviceNum) != signature){
      console.log("验证成功");
      next('/home/all?type=__all__')
    }else{
      console.log("验证失败");
      next('/fail')
    }
  }else{
    next()
  }
})

export default router