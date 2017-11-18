<template>
<div id="Login">
  <div class="centerPage">
    <Card style="width:350px" align="left">
      <div slot="title">

        <h2><Icon type="log-in"></Icon> 登陆</h2>
      </div>
      <a slot="extra" @click.prevent="">
        <router-link to="/register">
          <Icon type="arrow-right-b"></Icon>
          注册
        </router-link>
      </a>

      <Form ref="form" :model="form" :rules="rule">
        <FormItem prop="user">
          <Input type="text" v-model="form.user" placeholder="用户名/邮箱">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="form.password" placeholder="密码">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
          <a type="text" @click="">忘记密码？</a>
        </FormItem>
        <FormItem>
          <Button type="primary" long @click="handleSubmit('form')">登陆</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
  <vue-particles color="#dedede"></vue-particles>
</div>
</template>

<script>
import {
  mapMutations
} from 'vuex';

import utils from '@/api/utils'

export default {
  name: "Login",
  data() {
    return {
      form: {
        user: '',
        password: ''
      },
      rule: {
        user: [{
          required: true,
          message: '请填写用户名或邮箱',
          trigger: 'blur'
        }],
        password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 8,
            max: 30,
            message: '请输入8～30位的密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },

  /**
   * set current page to this page
   */
  beforeRouteEnter: function (to, from, next) {
    console.log('loginok');
    next(Login => {
      Login.setCurrentPage('login');
    });
  },

  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let {
            success
          } = utils.login(this.form.user, this.form.password);

          if (success) {
            this.$Message.success('登陆成功');
          } else {
            this.$Message.error('登陆失败!');
          }
        } else {
          this.$Message.error('请输入正确的信息!');
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
#Login{
    /*垂直居中*/
    /*position:absolute;
    width:200px;
    height:200px;
    top:50%;
    left:50%;
    margin-top:-100px;
    margin-left:-100px;*/
}

#content{
    /*clear: both;

    height: 240px;

    position: relative;*/
}
</style>
