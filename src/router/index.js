import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

import Detail from '@/views/Detail'

import Fail from '@/views/Fail'
import Login from '@/views/Login'
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
      path:'/login',
      name:'Login',
      component:Login,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '*',
      meta: { requiresAuth: true }
    },
    /*{
        path: '/',
        redirect: '/home/toutiao?type=toutiao',
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
      //next('/home/all?type=__all__')
      next('/login')
    }else{
      console.log("验证失败");
      next('/fail')
    }
  }else{
    next()
  }
})

export default router