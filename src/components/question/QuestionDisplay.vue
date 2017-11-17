<template>
<div id="QuestionDisplay">
  <div v-for="(question,index) in questions" v-if="currentSlide === index">
    <Row>
      <Col span="4">
      <strong>{{index+1}}.</strong>
      </Col>
      <Col span="14" align='left'>
      <div>
        <span v-html="_expr(question.content)"></span>
      </div>
      <div>
        <RadioGroup v-model="userSelect[index]" vertical class="options">
          <Radio label="0">
            <span v-html="_expr(question.options[0])"></span>
          </Radio>
          <Radio label="1">
            <span v-html="_expr(question.options[1])"></span>
          </Radio>
          <Radio label="2">
            <span v-html="_expr(question.options[2])"></span>
          </Radio>
          <Radio label="3">
            <span v-html="_expr(question.options[3])"></span>
          </Radio>
        </RadioGroup>
      </div>
      </Col>
    </Row>
    <Row>
      <Button v-show="currentSlide>0" type="info" size="large" @click="prev">上一题</Button>
      <Button v-show="currentSlide<totalNum-1" type="info" size="large" @click="next">下一题</Button>
    </Row>
  </div>
</div>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'

export default {
  name: "QuestionDisplay",
  data: () => ({
    questionsHead: [],
    totalNum: [],
    questions: [],
    userSelect: [],
    currentSlide: 0
  }),

  mounted() {
    //do something after mounting vue instance
    this.fetchData();
  },

  methods: {
    fetchData() {
      let host = 'http://localhost:3000/' + `paper`;
      host = host + `?paperId=` + this.exam.id;

      this.axios.get(host)
        .then(response => {
          let examPaper = Object.assign({}, response.data[0]) || {};
          this.questionsHead = examPaper.Problems;
          this.totalNum = examPaper.ProblemNum;
          this.userSelect = Array(this.totalNum).fill("");
          for (let head of this.questionsHead) {
            let id = head.ProblemId;
            let host = 'http://localhost:3000/' + `problem`;
            host = host + `?id=` + id;
            this.axios.get(host)
              .then(response => {
                let question = response.data[0];
                let {
                  id,
                  option,
                  pro_detail
                } = question;
                question = {
                  id: id,
                  options: option,
                  content: pro_detail
                }
                this.questions.push(question);
              })
              .catch(e => {
                console.log(e);
              })

          }
          this.logData();
        })
        .catch(e => {
          console.log(e);
        })
    },

    logData() {
      this.logTotalNum(this.totalNum);
      this.logUserSelect(this.userSelect);
      this.logQuestions(this.questions);
      this.logQuestionsHead(this.questionsHead);
    },

    prev() {
      this.currentSlide--;
    },

    next() {
      this.currentSlide++;
    },

    ...mapMutations([
      'logTotalNum',
      'logUserSelect',
      'logQuestions',
      'logQuestionsHead'
    ]),

    _expr: function(expr){
      var _expr = expr.replace(/\s\s+/g, ' ').replace(/ /gi, "~");
      try {
        return katex.renderToString(_expr, {throwOnError: false});
      } catch (err) {
        return expr
      }
    }
  },

  computed: {
    ...mapState([
      'exam',
      'baseUrl'
    ])
  }
}
</script>
<style lang="css" scoped>
.options > *{
    margin: 40px;
    line-height: 2;
}

#QuestionDisplay{
    margin-top: 40px;
}
</style>
