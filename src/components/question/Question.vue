<template>
<div id="Question">
  <Row v-if="!submitted">
    <Col span="10">
    <QuestionSidebar @submitted="toggleSubmitted"></QuestionSidebar>
    </Col>
    <Col span="14">
    <QuestionDisplay :examId="$route.params.examId"></QuestionDisplay>
    </Col>
  </Row>
  <Row v-if="submitted">
      <QuestionResult></QuestionResult>
  </Row>
</div>
</template>
<script>
import QuestionSidebar from '@/components/question/QuestionSidebar';
import QuestionDisplay from '@/components/question/QuestionDisplay';
import QuestionResult from '@/components/question/QuestionResult';

export default {
  name: "Question",
  data: () => ({
    submitted: false
  }),

  methods: {
    toggleSubmitted() {
      this.submitted = !this.submitted;
    }
  },

  components: {
    QuestionSidebar,
    QuestionDisplay,
    QuestionResult
  },
}
</script>
<style lang="css" scoped>
</style>
