<template>
<div id="QuestionDisplay">
  <Button @click="getExamPaper">generate</Button>

  <div v-for="(question,index) in questions">
    <Row>
      <Col span="4">
      <strong>{{question.ProblemOrder}}.</strong>
      </Col>
      <Col span="14" align='left'>
      <div>
        <h1>index:{{index}}</h1> {{question.ProblemId}}
        {{getContent(question.ProblemId,index)}}
        {{questionContent[index]}}
      </div>
      <div>
        <RadioGroup v-model="choose[index]" vertical>
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
    <Row>
        <Button type="info" size="large">上一题</Button>
        <Button type="info" size="large">下一题</Button>
    </Row>
  </div>
</div>
</template>
<script>
export default {
  name: "QuestionDisplay",
  data: () => ({
    examPaper: {},
    choose: [],
    questionContent: [],
    questionOptions: []
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
          this.choose = Array(this.examPaper.ProblemNum).fill("");
          this.questionContent = Array(this.examPaper.ProblemNum).fill("");
          this.questionOptions = Array(this.examPaper.ProblemNum).fill("");
        })
        .catch(e => {
          this.errors.push(e)
        })

    },
    getContent(id,index){
        let host = `http://localhost:3000/problem`;
        host = host + `?id=` + id;
        //   get exam papers
        this.axios.get(host)
          .then(response => {
              console.log(id);
              console.log(response.data[0].pro_detail);
            Vue.set(this.questionContent,index,response.data[0].pro_detail);
          })
          .catch(e => {
          //   this.errors.push(e)
            console.log('error');
          })
    }
  },
  computed: {
    questions() {
      return this.examPaper['Problems']
  }
  }
}
</script>
<style lang="css" scoped>
</style>
