<template>
<div id="Collection" class="layout">
  <div class="layout-content">
    <Row v-show="!examSelected">
      <Col span="10">
      <CollectionSidebar @getExams="showExams"></CollectionSidebar>
      </Col>
      <Col span="14">
      <CollectionList :exams="exams" @selectExam="selectExam"></CollectionList>
      </Col>
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
import CollectionSidebar from '@/components/collection/CollectionSidebar';
import CollectionList from '@/components/collection/CollectionList';
import ExamConfirm from '@/components/exam/ExamConfirm';

export default {
  name: "Collection",
  data() {
    return {
      exams: [],
      errors: [],
      exam: {},
      examSelected: false
    }
  },
  components: {
    CollectionSidebar,
    CollectionList,
    ExamConfirm
  },

  created() {
    this.showExams('0');
  },

  methods: {
    /**
     * get exam papers by course_id
     * @param  {[String]} course_id
     */
    showExams(course_id) {
      let host = this.baseUrl + `subject`;
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
    selectExam(exam) {
      this.toggleSelected();
      this.exam = exam;
    },
    toggleSelected() {
      this.examSelected = !this.examSelected;
    }
  },
  computed: {
    baseUrl() {
      return this.$store.state.baseUrl;
    }
  }
}
</script>

<style lang="css" scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
}
.layout-assistant{
    width: 300px;
    margin: 0 auto;
    height: inherit;
}
.layout-breadcrumb{
    padding: 10px 15px 0;
}
.layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}
.layout-content-main{
    padding: 10px;
}
.layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
</style>
