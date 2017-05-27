<template>
  <div id="app">
    <img src="./assets/todo.jpg" style="width:200px">
    <TodoList></TodoList> 
  </div>
</template>

<script>
import Login from './components/Login/Login'// 引入Login组件
import TodoList from './components/Todo/TodoList'// 引入Login组件

export default {
  name: 'app',
  components: {
    Login,
    TodoList
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
