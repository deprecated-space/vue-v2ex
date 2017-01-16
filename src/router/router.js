// 定义组件, 也可以像教程之前教的方法从别的文件引入
import Index from './../components/Index.vue';
import Register from './../components/Register.vue';
import Login from './../components/Login.vue';
import Detail from './../components/Detail.vue';
import Member from './../components/Member.vue';
import Missing from './../components/missing.vue';

const myRouter = [
  {
    path: '/',
    // alias: '/',
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
    // redirect: '/register',
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
  },
  {
    // 404
    path: '*',
    name: 'missing',
    component: Missing
  }
  // {
  //   path: '/',
  //   redirect: '/index'
  // }
];

export default myRouter;
