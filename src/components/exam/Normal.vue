<template>
<div id="Normal">
  <Button @click="test">click collection</Button>
  <slot></slot>
  <Row>
    <Col span="10">
    <Row type="flex" justify="end" class="code-row-bg">
      <Menu @on-select="getExams($event)" theme="light" active-name="0">
        <Row>
          <Col span="12">
          <div v-for="(subject,index) in this.subjects" :key="subject.id">
            <Menu-item :name="index">{{subject.name}}</Menu-item>
          </div>
          </Col>
        </Row>
      </Menu>
    </Row>
    </Col>
    <Col span="14">
    <div class="exam-list">
      <div v-for="exam of exams">
        <Row type="flex" justify="space-around" class="code-row-bg">
          <Col span="15">
          <Button @click="selectExam(exam)" type="text" long>
              <Card>
                <p @click="selectExam($event)" slot="title">{{exam.title}}</p>
                <p>{{exam.year}}</p>
              </Card>
          </Button>
          </Col>
        </Row>

      </div>
    </div>
    </Col>
  </Row>
</div>
</template>

<script>
import * as types from '@/store/mutation-types'

export default {
  name: "Normal",
  data: () => ({}),

  mounted() {
    //do something after mounting vue instance
    this.getExams(0);
  },

  methods: {
    getExams(index) {
      let subjectId = this.subjects[index].id;
      this.$store.dispatch('getExams', subjectId);
    },
    selectExam(exam) {
      this.$store.commit(types.ADD_EXAM, exam);
      this.$store.commit(types.SET_MODE, 0);
      this.$router.push('confirm');
    },

    test() {
        this.$store.dispatch('getquestionsC', 1);
    }
  },

  computed: {
    subjects() {
      return this.$store.state.course.subjects
    },
    exams() {
      return this.$store.state.course.exams
    }
  }

}
</script>

<style lang="css" scoped>
#Normal{
    /*margin-top: 40px;
    min-height: 1000px;*/
}
</style>
