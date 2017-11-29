import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import App from './components/App.vue';

// filters
// 注册全局的管道过滤器
import {formatDate} from './filters/index.js';
import routerConfig from './router/router.js';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routerConfig,
  // 路由变化时，页面单纯地滚到最顶部
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0};
  }
});

const app = new Vue({
  el: '#app',
  router,  
  render: h => h(App)
})