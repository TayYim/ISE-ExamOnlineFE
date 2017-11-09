<template>
<div v-if="exams && exams.length" class="exam-list" id="ExamList">
  <div v-for="exam of exams">
    <div v-for="paper of exam.papers" class="exam-list-item">
      <Row type="flex" justify="space-around" class="code-row-bg">
        <Col span="15">
        <Card>
          <p slot="title">{{paper.paper_title}}</p>
          <p>{{paper.paper_year}}</p>
        </Card>
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

  created() {
    //do something after creating vue instance
    console.log(this.exams[0]);
  },

  methods: {
    // showAll() {
    //   this.axios.get(`http://localhost:3000/subject`)
    //     .then(response => {
    //       this.posts = response.data;
    //     })
    //     .catch(e => {
    //       this.errors.push(e)
    //     })
    // },
    // showOne(course_id){
    //     let host = `http://localhost:3000/subject?course=`;
    //     let url = host.concat(course_id);
    //     this.axios.get(url)
    //       .then(response => {
    //         this.posts = response.data;
    //       })
    //       .catch(e => {
    //         this.errors.push(e)
    //       })
    // }
  }
}
</script>

<style lang="css" scoped>
</style>
