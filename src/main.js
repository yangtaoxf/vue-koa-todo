// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'; // 引入element-ui
import 'iview/dist/styles/iview.css';//引入css

Vue.config.productionTip = false

Vue.use(iView);//全局使用

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
