<template>
<!-- <div v-if="exams && exams.length" class="exam-list" id="ExamList"> -->
<div v-if="exams" class="exam-list" id="ExamList">
  <!-- real code -->
  <div v-for="exam of exams">
    <div v-for="paper of exam.papers" class="exam-list-item">
      <Row type="flex" justify="space-around" class="code-row-bg">
        <Col span="15">
        <Button @click="selectExam(paper)" type="text" long>
        <Card>
          <p @click="selectExam($event)" slot="title">{{paper.paper_title}}</p>
          <p>{{paper.paper_year}}</p>
        </Card>
        </Button>
        </Col>
      </Row>
    </div>
  </div>
  <!-- test -->
    <div v-for="paper of exams.papers" class="exam-list-item">
      <Row type="flex" justify="space-around" class="code-row-bg">
        <Col span="15">
        <Button @click="selectExam(paper)" type="text" long>
        <Card>
          <p @click="selectExam($event)" slot="title">{{paper.paper_title}}</p>
          <p>{{paper.paper_year}}</p>
        </Card>
        </Button>
        </Col>
      </Row>
    </div>
</div>
</template>

<script>
export default {
  name: "ExamList",
  data: () => ({}),

  props: ['exams'],

  methods: {
    selectExam(exam) {
      this.$emit('selectExam', exam);
    }
  }

}
</script>

<style lang="css" scoped>
#ExamList{
    margin-top: 40px;
    min-height: 1000px;
}
</style>
