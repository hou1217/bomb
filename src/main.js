// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import Vuex from 'vuex'
import App from './App'
import router from './router'

import './assets/css/style.css'
import './assets/css/animate.css'

import Global from './config/Global'//引用文件
Vue.prototype.GLOBAL = Global//挂载到Vue实例上面
//Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
