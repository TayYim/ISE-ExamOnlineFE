<template>
<div v-if="exams && exams.length" class="exam-list" id="ExamList">
  <div v-for="exam of exams">
    <div v-for="paper of exam.papers" class="exam-list-item">
      <Row type="flex" justify="space-around" class="code-row-bg">
        <Col span="15">
        <Button @click="selectExam(paper.id)" type="text" long>
        <Card>
          <p @click="selectExam($event)" slot="title">{{paper.paper_title}}</p>
          <p>{{paper.paper_year}}</p>
          <p>(for test)id:{{paper.id}}</p>
        </Card>
        </Button>
        </Col>
      </Row>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ExamList",
  data: () => ({
    // exams: [],
    // errors: []
  }),

  props: ['exams'],

  methods: {
    selectExam(exam_id) {
      this.$emit('selectExam',exam_id);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
