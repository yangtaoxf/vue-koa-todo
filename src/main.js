// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-default/index.css'   // 使用 CSS
import 'animate.css/animate.min.css'

Vue.config.productionTip = false

Vue.use(ElementUI) // Vue全局使用

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
