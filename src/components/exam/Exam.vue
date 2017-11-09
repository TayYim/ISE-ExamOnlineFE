<template>
<div id="Exam">
  <Row>
    <Col span="10">
    <ExamSidebar @getExams="showExams"></ExamSidebar>
    </Col>
    <Col span="14">
    <ExamList :exams="posts"></ExamList>
    </Col>
  </Row>
</div>
</template>

<script>
import ExamSidebar from '@/components/exam/ExamSidebar';
import ExamList from '@/components/exam/ExamList';

export default {
  name: "Exam",
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  components: {
    ExamSidebar,
    ExamList
  },

  created() {
    //do sshowExams("0");omething after mounting vue instance
    this.showExams('0');
  },

  methods: {
    showExams(course_id) {
      let host = `http://localhost:3000/subject`;
      if (course_id !== '0') {
        host = host + `?course=` + course_id;
      }
      //get exam papers
      this.axios.get(host)
        .then(response => {
          this.posts = response.data;
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
