<template>
<div id="ExamConfirm">
  <h1>{{exam.paper_title}}</h1>
  <h2>{{exam.paper_year}}</h2>
  <Row type="flex" justify="space-around" class="code-row-bg">
    <Col span="6">
    <Button @click="goBack" type="default" size="large">返回</Button>
    <Button @click="beginExam" type="primary" size="large">开始答题</Button>
    </Col>
  </Row>
</div>
</template>
<script>
export default {
  name: "ExamConfirm",
  data: () => ({
  }),

  props: ['exam'],

  methods: {
    goBack() {
      this.$emit('goBack');
    },
    beginExam() {
      console.log('begin');
    }
  }
}
</script>
<style lang="css" scoped>
</style>
