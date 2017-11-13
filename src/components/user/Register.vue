<template>
<div id="Register" class="centerPage">
  <Card style="width:350px" align="left">
    <div slot="title">

      <h2><Icon type="person-add"></Icon> 注册</h2>
    </div>
    <a slot="extra" @click.prevent="">
      <router-link to="/login">
        <Icon type="arrow-right-b"></Icon>
        登陆
      </router-link>
    </a>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="username">
        <Input type="text" v-model="formInline.user" placeholder="用户名">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="useremail" id="chaptchaBtn">
        <Input type="text" v-model="formInline.user" placeholder="邮箱">
        <Icon type="ios-email-outline" slot="prepend"></Icon>
        </Input>
        <a type="text" @click="">发送验证码</a>
      </FormItem>
      <FormItem prop="chaptcha">
        <Input type="text" v-model="formInline.user" placeholder="验证码">
        <Icon type="ios-ionic-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="密码">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" long @click="handleSubmit('formInline')">注册</Button>
      </FormItem>
    </Form>
  </Card>
</div>
</template>
<script>
import {
  mapMutations
} from 'vuex';

export default {
  name: "Register",
  data() {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        username: [{
          required: true,
          message: '请填写用户名',
          trigger: 'blur'
        }],
        useremail: [{
          required: true,
          message: '请填写邮箱',
          trigger: 'blur'
        }],
        password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: '密码长度不能小于6位',
            trigger: 'blur'
          }
        ],
        chaptcha: [{
          required: true,
          message: '请填写验证码',
          trigger: 'blur'
        }],
      }
    }
  },

  /**
   * set current page to this page
   */
  beforeRouteEnter: function (to, from, next) {
    console.log('registerok');
    next(Register => {
      Register.setCurrentPage('register');
    });
  },

  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    ...mapMutations([
      'setCurrentPage',
    ])
  }
}
</script>
<style lang="css" scoped>
#chaptchaBtn{
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0;
}
</style>
