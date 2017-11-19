<template>
<div id="Confirm">
  <h1>{{exam.title}}</h1>
  <h2>{{exam.year}}</h2>


  <Row type="flex" justify="space-around" class="code-row-bg">
    <Col span="6">
    <Button @click="goBack" type="default" size="large">返回</Button>
    <Button @click="beginExam" type="primary" size="large">开始答题</Button>
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
      this.$store.dispatch('getExam');
      setTimeout(() => {
        this.$store.dispatch('getQuestions');
    }, 500);

      // this.$router.push('/question/work');
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
