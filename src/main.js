import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);


// import routerConfig from './router'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })


// 定义组件, 也可以像教程之前教的方法从别的文件引入
import Index from './components/Index.vue';
import Register from './components/Register.vue';
import Detail from './components/Detail.vue';
import Login from './components/Login.vue';
import Member from './components/Member.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/member/:id',
      name: 'member',
      component: Member
    }
  ]
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
