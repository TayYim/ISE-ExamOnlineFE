<template>
<div id="ExamConfirm">
  <h1>软件工程导论</h1>
  <h2>2017</h2>
  <h3>共20道题</h3>
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
  methods: {
    goBack() {
      console.log('back');
    },
    beginExam() {
      console.log('begin');
    }
  }
}
</script>
<style lang="css" scoped>
</style>
