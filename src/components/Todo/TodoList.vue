<template>
  <el-row class="content">
    <el-col :xs="{span:20,offset:2}" :sm="{span:8,offset:8}">
    <h1 class="animated jello title"> 欢迎：{{name}}！你的待办事项是：</h1>
      <el-input placeholder="请输入待办事项" v-model="todos" @keyup.enter.native="addTodos"></el-input>
      <el-tabs v-model="activeName">
        <el-tab-pane label="待办事项" name="first">
          <el-col :xs="24">
            <template v-if="!Done"> <!--v-if和v-for不能同时在一个元素内使用，因为Vue总会先执行v-for-->
              <template v-for="(item, index) in list">
                <div class="todo-list" v-if="item.status == false">
                  <span class="item">
                    {{ index + 1 }}. {{ item.content }}
                  </span>
                  <span class="pull-right">
                    <el-button size="small" type="primary" @click="finished(index)">完成</el-button>
                    <el-button size="small" :plain="true" type="danger" @click="remove(index)">删除</el-button>
                  </span>
                </div>
              </template> 
            </template>
            <div v-else-if="Done">
              暂无待办事项
            </div>
          </el-col>
        </el-tab-pane>
        <el-tab-pane label="已完成事项" name="second">
          <template v-if="count > 0">
            <template v-for="(item, index) in list">
              <div class="todo-list" v-if="item.status == true">
                <span class="item finished">
                  {{ index + 1 }}. {{ item.content }}
                </span>
                <span class="pull-right">
                  <el-button size="small" type="primary" @click="update(index)">还原</el-button>
                </span>
              </div>
            </template> 
          </template>
          <div v-else>
            暂无已完成事项
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {

  created () {
      const userInfo = this.getUserInfo();// 新增一个获取用户信息的方法
      if(userInfo !== null){
          this.name = userInfo.name;
      }else{
          this.name = '';
      }
      this.getTodoList();// 新增：在组件创建时获取todolist
  },

  data () {
    return {
      name: '',
      todos: '',
      activeName: 'first',
      list:[],
      count: 0
    };
  },
  computed: { // 计算属性用于计算是否已经完成了所有任务
    Done(){
      let count = 0;
      let length = this.list.length;
      for(let i in this.list){
        this.list[i].status == true ? count += 1 : '';
      }
      this.count = count;
      if(count == length || length == 0){
        return true
      }else{
        return false
      }
    }
  },

  methods: {
    finished(index) {
      this.$set(this.list[index],'status',true) // 通过set的方法让数组的变动能够让Vue检测到
      this.$message({
        type: 'success',
        message: '任务完成'
      })
    },
    update (index) {
        this.$http.put(`/api/todolist/${this.name}/${this.list[index].content}/${this.list[index].status}`)
        .then(res=>{
            if(res.status === 200){
                this.$message({
                    type: 'success',
                    message: '任务状态更新成功！'
                })
                this.getTodoList();
            }else{
                this.$message.error('任务状态更新失败！')
            }
        },err=>{
            this.$message.error('任务状态更新失败！')
            console.log(err)
        })
    },  
    getUserInfo () {
        const token = sessionStorage.getItem('demo-token');
        if(token !== null){
            let decode = jwtDecode(token);
            return decode;
        }else{
            return null;
        }
    },
    getTodoList () {
        this.$http.get(`/api/todolist/${this.name}`)// 向后端发送获取todolist的请求
        .then(res =>{
            if(res.status === 200){
                this.list = res.data
            }else{
                this.$message.error('获取列表失败！');
            }
        },(err) =>{
            this.$message.error('获取列表失败！');
            console.log(err)
        })
    },
    addTodos () {
        if(this.todos === ''){
            return;
        }
        let obj = {
            status: false,
            content: this.todos,
            username : this.name
        }
        console.log(obj);
        this.$http.post(`/api/todolist`,obj) // 新增创建请求
        .then(res => {
            if(res.status === 200){
                this.$message({
                     type: 'success',
                     message: '创建成功！' 
                })
                this.getTodoList();
            }else{
                this.$message.error('创建失败！')
            }
        },err =>{
            this.$message.error('创建失败！');
            console.log(err)
        })
        this.todos = '';
    },
    remove (index) {
        this.$http.delete(`/api/todolist/${this.name}/${this.list[index].content}`)
        .then(res=> {
            if(res.status === 200) {
                this.$message({
                    type: 'success',
                    message: '任务删除成功！'
                })
                this.getTodoList();
            }else{
                this.$message.error('任务删除失败！')
            }
        },(err) =>{
            this.$message.error('任务删除失败！')
            console.log(err)
        })
    }
  }
};
</script>

<style lang="scss" scope>
    .title{
         font-size: 20px;
        color:#ee6666;
    }
    .el-input{
        margin:20px auto;
    }
    .todo-list{
         width: 100%;
        margin-top: 8px;
        padding-bottom :8px;
        border-bottom :1px solid #eee;
        overflow: hidden;
        text-align :left;
        .item{
             font-size:20px;
             &.finished{
                text-decoration:line-through;
                color:#ddd;
             }
        }
    }
    .pull-right{
        float:right;
    }
</style>