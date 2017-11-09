<template>
<div id="QuestionDisplay">
  {{this.exam_id}}
  {{this.examPaper.ProblemNum}}
  <Button @click="getExamPaper">generate</Button>
</div>
</template>
<script>
export default {
  name: "QuestionDisplay",
  data: () => ({
    examPaper: {},
    questions: []
  }),
  props: ['exam_id'],
  methods: {
    getExamPaper() {
      let host = `http://localhost:3000/paper`;
      host = host + `?paperId=` + this.exam_id;
      //   get exam papers
      this.axios.get(host)
        .then(response => {
          this.examPaper = Object.assign({},response.data[0]) || {};
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
