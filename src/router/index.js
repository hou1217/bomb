import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
<<<<<<< HEAD
import Hot from '@/views/Hot'
import Society from '@/views/Society'
import Car from '@/views/Car'
import Focus from '@/views/Focus'
import Shanghai from '@/views/Shanghai'
import Military from '@/views/Military'
import Sports from '@/views/Sports'
import Finance from '@/views/Finance'
import Detail from '@/views/Detail'
=======
import Detail from '@/views/Detail'
//import Hot from '@/views/Hot'
//import Society from '@/views/Society'
//import Car from '@/views/Car'
//import Focus from '@/views/Focus'
//import Shanghai from '@/views/Shanghai'
//import Military from '@/views/Military'
//import Sports from '@/views/Sports'
//import Finance from '@/views/Finance'
>>>>>>> dev

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home/:type',
      name: 'Home',
      component: Home
    },
    {
<<<<<<< HEAD
      path: '/hot',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/society',
      name: 'Society',
      component: Society
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/focus',
      name: 'Focus',
      component: Focus
    },
    {
      path: '/shanghai',
      name: 'Shanghai',
      component: Shanghai
    },
    {
      path: '/military',
      name: 'Military',
      component: Military
    },
    {
      path: '/sports',
      name: 'Sports',
      component: Sports
    },
    {
      path: '/finance',
      name: 'Finance',
      component: Finance
    },
    {
=======
>>>>>>> dev
      path: '/newsdetail/:id',
      name: 'Detail',
      component: Detail
    },
<<<<<<< HEAD
    {
        path: '*',
        redirect: '/home/all?type=_all_'
    },
    {
        path: '',
        redirect: '/home/all?type=_all_'
    },
=======
//  {
//    path: '/hot',
//    name: 'Hot',
//    component: Hot
//  },
//  {
//    path: '/society',
//    name: 'Society',
//    component: Society
//  },
//  {
//    path: '/car',
//    name: 'Car',
//    component: Car
//  },
//  {
//    path: '/focus',
//    name: 'Focus',
//    component: Focus
//  },
//  {
//    path: '/shanghai',
//    name: 'Shanghai',
//    component: Shanghai
//  },
//  {
//    path: '/military',
//    name: 'Military',
//    component: Military
//  },
//  {
//    path: '/sports',
//    name: 'Sports',
//    component: Sports
//  },
//  {
//    path: '/finance',
//    name: 'Finance',
//    component: Finance
//  },
    {
        path: '*',
        redirect: '/home/all?type=__all__'
    },
//  {
//      path: '',
//      redirect: '/home/all?type=__all__'
//  },
>>>>>>> dev
  ]
})
