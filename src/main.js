// import Vue from 'vue'
var Vue = require('vue');
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import App from './components/App.vue';


Vue.use(VueResource);
Vue.use(VueRouter);


// import routerConfig from './router'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// filters
// 注册全局的管道过滤器
// 可以用 as 取个别名
import {formatDate, formatDate2 as f2} from './filters/index.js';
Vue.filter('formatDate23', f2);


// 定义组件, 也可以像教程之前教的方法从别的文件引入
// import Index from './components/Index.vue';
// import Register from './components/Register.vue';
// import Login from './components/Login.vue';
// import Detail from './components/Detail.vue';
// import Member from './components/Member.vue';

import routerConfig from './router/router.js';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routerConfig,
  // 路由变化时，页面单纯地滚到最顶部
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0};
  }
});


// vue 1 的用法？
// router.redirect({
//   '*': '/index'
// })

// console.log(router)
// router.replace('/index');

const app = new Vue({
  el: '#app',
  // router: router,
  router,  // 简写
  // render: h => h(App)
  render: function(h) {
    return h(App);
  }
})

// Vue 2.0 以上抛弃了 router.map 方法
// const app = new Vue({
//   router: router,
//   render: h => h(App)
// }).$mount('#app')
