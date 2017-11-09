<template>
<div id="QuestionDisplay">
  <Button @click="getExamPaper">generate</Button>

  <div>
    <Row>
      <Col span="4">
      <strong>1.</strong>
      </Col>
      <Col span="14" align='left'>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div>
        <RadioGroup vertical>
          <Radio label="A">
            <span>Apple</span>
          </Radio>
          <Radio label="B">
            <span>Android</span>
          </Radio>
          <Radio label="C">
            <span>Windows</span>
          </Radio>
          <Radio label="D">
            <span>👀</span>
          </Radio>
        </RadioGroup>
      </div>
      </Col>
    </Row>
  </div>
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
          this.examPaper = Object.assign({}, response.data[0]) || {};
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
