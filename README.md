# vue-koa-todo
### 用koa搭建服务器，vue做前端（A simple full stack demo written by Vue2 &amp; Koa2）
由于本人这几个月一直学习node，然后又尝试来用koa框架，另外又联想到现在Vue框架比较热门，因此就想试试将Koa和Vue进行结合！于是就催生出这个项目，Vue
做前端框架，koa做后端框架，并且提供服务支持！

<h3>前期准备</h3>

postman:用来做api测试，每当后端写完一个api，就可以通过postman对这个api进行测试

mongoDB：这个项目选取了mongoDB作为数据库，因为本人只会mongoDB，而且也不太熟悉，只能边查文档边写

<h3>效果图</h3>

![效果图](./static/todo3.gif)

<h3>技术栈</h3>

<h5>Webpack</h5>

<h5>Koa2.0</h5>

<h5>Node.js</h5>

<h5>ElementUI</h5>

<h5>Scss</h5>

<h5>axios</h5>

<h5>Vue2.0</h5>

<h5>vue-router</h5>

<h5>animate.css</h5>

<h3>实现功能</h3>

<h5> 1:JSON-Web-Token实现用户验证</h5> 

<h5>2.实现注册登录功能</h5>

<h5>3.实现对todolist的CRUD操作</h5>

<h5>4.实现RESTful风格的api</h5>

<h3>Build Setup</h3>
```
#step1
git clone git@github.com:PeterCheng1/vue-koa-todo.git

#step2
npm install

#step3
sh ./db.sh

#step4
npm run koa

#step5
npm run dev
```

<h3>遇到问题:</h3>

<h5>1：一开使就不想使用cookie配合白名单机制实现登录功能，而是想借用没有使用过的JWT技术对用户名进行验证，但是一开始没对这方面知识有了解，因此耽误时间比较长</h5>

<h5>2：对MongoDB数据库的使用，仅仅是了解或者可以使用的程度。</h5>


