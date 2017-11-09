<template>
<div id="Exam">
  <Row v-show="!examSelected">
    <Col span="10">
    <ExamSidebar @getExams="showExams"></ExamSidebar>
    </Col>
    <Col span="14">
    <ExamList :exams="exams" @selectExam="selectExam"></ExamList>
    </Col>
  </Row>
  <Row v-if="examSelected">
      <ExamConfirm :exam="exam" @goBack="toggleSelected"></ExamConfirm>
  </Row>
</div>
</template>

<script>
import ExamSidebar from '@/components/exam/ExamSidebar';
import ExamList from '@/components/exam/ExamList';
import ExamConfirm from '@/components/exam/ExamConfirm';

export default {
  name: "Exam",
  data() {
    return {
      exams: [],
      errors: [],
      exam: {},
      examSelected: false
    }
  },
  components: {
    ExamSidebar,
    ExamList,
    ExamConfirm
  },

  created() {
    //do sshowExams("0");omething after mounting vue instance
    this.showExams('0');
  },

  methods: {
    /**
     * get exam papers by course_id
     * @param  {[String]} course_id
     */
    showExams(course_id) {
      let host = `http://localhost:3000/subject`;
      if (course_id !== '0') {
        host = host + `?course=` + course_id;
      }
    //   get exam papers
      this.axios.get(host)
        .then(response => {
          this.exams = response.data;
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    selectExam(exam){
        this.toggleSelected();
        this.exam = exam;
        // let host = `http://localhost:3000/paper`;
        // this.axios.get(host)
        //   .then(response => {
        //     this.exam.total = response.data.ProblemNum;
        //   })
        //   .catch(e => {
        //     this.errors.push(e)
        //   })
    },
    toggleSelected(){
        this.examSelected = !this.examSelected;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
