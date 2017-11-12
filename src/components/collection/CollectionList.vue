<template>
<div v-if="exams && exams.length" class="exam-list" id="CollectionList">
  <div>
    <h1>course.name</h1>
    <h3>共totalNum题</h3>
    <hr>
    <div>
      <Row>
        <Col span="4">
        <strong>index+1.</strong>
        <h4>exam.year</h4>
        </Col>
        <Col span="14" align='left'>
        <div>
          <span>question.content</span>
        </div>
        <div>
          <ul class="options">
            <li>A. <span>v-html="_expr(question.options[0])</span></li>
            <li>B. <span>v-html="_expr(question.options[1])</span></li>
            <li>C. <span>v-html="_expr(question.options[2])</span></li>
            <li>D. <span>v-html="_expr(question.options[3])</span></li>
          </ul>
        </div>
        </Col>
      </Row>
      <Row class="explain">
        <Col span="8" offset="4" align="left">
        <p>正确答案:correctOptions[index]</p>
        <Collapse>
          <Panel name="1">
            查看解析：
            <p slot="content">questionAnswers[index].explain</p>
          </Panel>
        </Collapse>
        </Col>
      </Row>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "CollectionList",
  data: () => ({}),

  props: ['exams'],

  methods: {
    selectExam(exam) {
      this.$emit('selectExam', exam);
    }
  }

}
</script>

<style lang="css" scoped>
#CollectionList{
    margin-top: 40px;
    min-height: 1000px;
}
</style>
