<template>
<div v-if="exams && exams.length" class="exam-list" id="ExamList">
  {{count}}
  <Button @click='increment'>plus</Button>
  <div v-for="exam of exams">
    <div v-for="paper of exam.papers" class="exam-list-item">
      <Row type="flex" justify="space-around" class="code-row-bg">
        <Col span="15">
        <Button @click="selectExam(paper)" type="text" long>
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
import {
  mapState,mapMutations
} from 'vuex'

export default {
  name: "ExamList",
  data: () => ({
    // exams: [],
    // errors: []
  }),

  props: ['exams'],

  methods: {
    selectExam(exam) {
      this.$emit('selectExam', exam);
    },
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    ]),
  },

  computed: mapState([
    // 映射 this.count 为 store.state.count
    'count'
  ])

}
</script>

<style lang="css" scoped>
</style>
