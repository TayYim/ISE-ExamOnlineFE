<template>
<div id="Exam" class="layout">
  <div class="layout-content">
    <Menu @on-select="selectMode" v-show="!examSelected" mode="horizontal" active-name="1">
      <div class="layout-assistant">
        <MenuItem name="paperMode">选择套题</MenuItem>
        <MenuItem name="randomMode">随机刷题</MenuItem>
      </div>
    </Menu>

    <Row v-show="!examSelected && isPaperMode">
      <Col span="10">
      <ExamSidebar @getExams="showExams"></ExamSidebar>
      </Col>
      <Col span="14">
      <ExamList :exams="exams" @selectExam="selectExam"></ExamList>
      </Col>
    </Row>

    <Row v-show="!examSelected && !isPaperMode">
      <h1>选择一个学科，马上开始刷题吧！</h1>
      <ExamRandom></ExamRandom>
    </Row>

    <div v-show="examSelected">
      <ExamConfirm :exam="exam" @goBack="toggleSelected"></ExamConfirm>
    </div>
  </div>
  <div class="layout-copy">
    2017 &copy; ISE-Group-12
  </div>
</div>
</template>

<script>
import ExamSidebar from '@/components/exam/ExamSidebar';
import ExamList from '@/components/exam/ExamList';
import ExamConfirm from '@/components/exam/ExamConfirm';
import ExamRandom from '@/components/exam/ExamRandom';

import {
  mapState
} from 'vuex';
import {
  mapMutations
} from 'vuex';

export default {
  name: "Exam",
  data() {
    return {
      exams: [],
      errors: [],
      exam: {},
      examSelected: false,
      isPaperMode: true
    }
  },
  components: {
    ExamSidebar,
    ExamList,
    ExamConfirm,
    ExamRandom
  },

  created() {
    this.showExams('-1');
  },

  /**
   * set current page to this page
   */
  beforeRouteEnter: function (to, from, next) {
    console.log('examok');
    next(Exam => {
      Exam.setCurrentPage('exam');
    });
  },

  methods: {
    /**
     * get exam papers by course_id
     * @param  {[String]} course_id
     */
    showExams(course_id) {
      this.axios({
          method: 'get',
          url: '/course',
          params: {
            course: course_id
          }
        })
        .then(response => {
          this.exams = response.data;
        })
        .catch(e => {
          this.errors.push(e)
        })
    },

    selectExam(exam) {
      this.toggleSelected();
      this.exam = exam;
    },
    toggleSelected() {
      this.examSelected = !this.examSelected;
    },
    selectMode(name) {
      if (name === "paperMode") {
        this.isPaperMode = true;
      } else {
        this.isPaperMode = false;
      }
    },
    ...mapMutations([
      'setCurrentPage',
    ])
  }
}
</script>

<style lang="css" scoped>
</style>
