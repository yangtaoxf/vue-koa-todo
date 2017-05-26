<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline"  class="warrper" >
     <p class="welcome">欢迎登录</p>
        <Form-item prop="account" class="name-warrper item-warrper" >
            <Input type="text" v-model="formInline.account" placeholder="Username" class="input-name">
                <Icon type="ios-person-outline" slot="prepend" class="icon-name"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password" class="password-warrper item-warrper">
            <Input type="password" v-model="formInline.password" placeholder="Password" class="input-password">
                <Icon type="ios-locked-outline" slot="prepend" class="icon-password"></Icon>
            </Input>
        </Form-item>
        <Form-item class="btn-warrper item-warrper">
            <Button type="primary" @click="handleSubmit('formInline')" class="btn">登录</Button>
        </Form-item>
    </Form>
</template>

<script>
    export default {
        data () {
            return {
                formInline: {
                    account: '',
                    password: ''
                },
                ruleInline: {
                    account: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scope>
    .warrper{
        .welcome{
            font-size:20px;
            font-weight:bold;
        }
        .item-warrper{
           width:300px;
           height:40px;
           margin:20px auto;
           .icon-name{
               font-size:20px;
               font-weight:bold;
           }
           .icon-password{
               font-size:20px;
               font-weight:bold;
           }
        }
        .btn-warrper{
            .btn{
                width:80px;
                height:30px;
            }
        }
    }
</style>