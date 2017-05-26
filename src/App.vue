<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Login></Login> <!--使用Login组件-->
  </div>
</template>

<script>
import Login from './components/Login/Login'// 引入Login组件

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
