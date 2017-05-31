// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-default/index.css'   // 使用 CSS
import 'animate.css/animate.min.css'
import VueRouter  from 'vue-router'
import Login from './components/Login/Login'// 引入Login组件
import TodoList from './components/Todo/TodoList'// 引入Login组件
import Axios from 'axios';

Vue.prototype.$http = Axios;

Vue.config.productionTip = false

Vue.use(ElementUI) // Vue全局使用
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', // 开启HTML5的history模式，可以让地址栏的url长得跟正常页面跳转的url一样。
  routes:[
    {
       path: '/',  // 默认首页打开是登录页
       component: Login
    },
    {
      path: '/todolist',
      component: TodoList
    },
    {
      path: '*',
      redirect: '/' // 输入其他不存在的地址自动跳回首页
    }
  ]
})

router.beforeEach((to,from,next)=>{
  const token = sessionStorage.getItem('demo-token');
  if(to.path == '/'){ // 如果是跳转到登录页的
    if(token !== null){
      next('/todolist') // 如果有token就转向todolist不返回登录页
    }else{
      next(); // 否则跳转回登录页
    }
  }else{
    if(token !== null){
       Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 全局设定header的token验证，注意Bearer后有个空格
       next() // 如果有token就正常转向
    }else{
      next('/') // 否则跳转回登录页
    }
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router, // 启用router
  template: '<App/>',
  components: { App }
})
