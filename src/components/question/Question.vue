<template>
<div id="Question">
  <Row>
    <Col span="10">
    <QuestionSidebar></QuestionSidebar>
    </Col>
    <Col span="14">
    <QuestionDisplay :examId="$route.params.examId"></QuestionDisplay>
    </Col>
  </Row>
</div>
</template>
<script>
import QuestionSidebar from '@/components/question/QuestionSidebar';
import QuestionDisplay from '@/components/question/QuestionDisplay';

export default {
  name: "Question",
  data: () => ({

  }),

  components: {
      QuestionSidebar,
      QuestionDisplay
  },
}
</script>
<style lang="css" scoped>
</style>
