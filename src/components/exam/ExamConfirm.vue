<template>
<div id="ExamConfirm">
  <h1>{{exam.paper_title}}</h1>
  <h2>{{exam.paper_year}}</h2>
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
  name: "ExamConfirm",
  data: () => ({}),

  props: ['exam'],

  methods: {
    goBack() {
      this.$emit('goBack');
    },
    beginExam() {
      let {id,paper_title:title,paper_year:year} = this.exam;
      this.$store.commit('logExam',{'id':id,'title':title,'year':year});
  }
  }
}
</script>
<style lang="css" scoped>
</style>
