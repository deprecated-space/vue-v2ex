import Index from './../components/pages/Index.vue';
import Register from './../components/pages/Register.vue';
import Login from './../components/pages/Login.vue';
import Detail from './../components/pages/Detail.vue';
import Member from './../components/pages/Member.vue';
import NotFound from './../components/pages/404.vue';

const myRouter = [
  {
    path: '/',
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
    name: 'NotFound',
    component: NotFound
  }
];

export default myRouter;