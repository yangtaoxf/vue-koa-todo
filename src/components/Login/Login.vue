<template>
<div>
  <el-row class="content">
    <el-col :xs="24" :sm="{span: 6,offset: 9}">
<h1 class="animated rubberBand title">欢迎登录你的Todo</h1>
      <el-row>
        <el-input 
          class="input"
          v-model="account" 
          placeholder="账号"
          type="text"
          @change="check"
          >
        </el-input>
        <el-input 
          class="input"
          v-model="password" 
          placeholder="密码"
          type="password">
        </el-input>
        <el-button type="primary" class="button"  @click="loginToDo">登录</el-button>
      </el-row>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: ''
    };
  },
  methods:{
    loginToDo () {
        this.$router.push('/todolist')// 编程式路由，通过push方法，改变路由
    }
  }
};
</script>

<style lang="scss" scoped>
  .content{
     padding: 16px;
     .title{
        font-size: 28px;
        color:#ee6666;
     }
     .input{
        margin: 12px 0;
     }
     .button{
          width: 100%;
        margin-top: 12px;
     }
  }
</style>