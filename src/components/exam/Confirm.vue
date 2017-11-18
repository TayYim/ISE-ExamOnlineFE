<template>
<div id="Confirm">
    <div v-if="this.mode===0">
        <h1>{{exam.title}}</h1>
        <h2>{{exam.year}}</h2>
    </div>
    <div v-else>
        <h1>{{exam.title}}</h1>
        <h2>随机抽题模式</h2>
    </div>

  <Row type="flex" justify="space-around" class="code-row-bg">
    <Col span="6">
    <Button @click="goBack" type="default" size="large">返回</Button>
    <router-link to="/question">
      <Button @click="beginExam" type="primary" size="large">开始答题</Button>
    </router-link>
    </Col>
  </Row>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'

export default {
  name: "Confirm",
  data: () => ({}),

  beforeUpdate() {
    //do something before updating vue instance
    console.log(this.isLogged);
    if (!this.isLogged) {
      this.$router.push("login")
    }
  },

  // function (to, from, next) {
  //   if (!this.isLogged) {
  //     next("login")
  //   } else {
  //     next();
  //   }
  // },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    beginExam() {
      // let {
      //   id,
      //   paper_title: title,
      //   paper_year: year
      // } = this.exam;
      // this.$store.commit('logExam', {
      //   'id': id,
      //   'title': title,
      //   'year': year
      // });
      this.$store.dispatch('getExam')
    },
  },

  computed: {
    ...mapState([
      'isLogged',
    ]),
    exam() {
      return this.$store.state.course.exam;
    },
    mode() {
      return this.$store.state.course.mode;
    }
  }
}
</script>
<style lang="css" scoped>
#Confirm{
    margin-top: 100px;
    min-height: 1000px;
}
</style>
