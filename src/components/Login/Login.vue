<template>
<div>
  <el-row class="content">
    <el-col :xs="24" :sm="{span: 6,offset: 9}">
<h1 class="animated rubberBand title">欢迎登录你的Todo</h1>
      <el-row>
        <el-input 
          class="input"
          v-model="username" 
          placeholder="账号"
          type="text"
          >
        </el-input>
        <el-input 
          class="input"
          v-model="password" 
          placeholder="密码"
          type="password">
        </el-input>
        <el-button type="primary" class="button"  @click="loginToDo" @keyup.enter.native="loginToDo">登录</el-button>
      </el-row>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    };
  },
  methods:{
    loginToDo () {
        let obj = {
            username : this.username,
            password : this.password
        }
        this.$http.post('/auth/user',obj)// 将信息发送给后端
        .then((res)=>{// axios返回的数据都在res.data里
            if(res.data.success){// 如果成功
                sessionStorage.setItem('demo-token',res.data.token);
                console.log(res.data.token)
                this.$message({// 登录成功，显示提示语
                    type: 'success',
                    message: '登录成功！'
                })
                this.$router.push('/todolist') // 进入todolist页面，登录成功
            }else{
                this.$message.error(res.data.message);
                sessionStorage.setItem('demo-token',null); // 将token清空
            }
        },(err)=>{
            this.$message.error('请求错误！');
            sessionStorage.setItem('demo-token',null); // 将token清空
        })
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