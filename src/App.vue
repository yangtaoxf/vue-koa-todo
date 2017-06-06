<template>
  <div id="app">
    <img src="./assets/todo.jpg" style="width:200px" class="icon-img">
    <router-view></router-view> <!-- 原本的Login换成了router-view 这就是路由视图渲染的目标元素-->
    <div class="cover"></div>
  </div>
</template>

<script>

export default {
  name: 'app'
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
  .icon-img{
    border-radius:31px;
  }
  .cover{
    position:absolute;
    background:linear-gradient(to top left, green, white);
    top:0;
    bottom:0;
    width:100%;
    z-index:-1;
  }
</style>
