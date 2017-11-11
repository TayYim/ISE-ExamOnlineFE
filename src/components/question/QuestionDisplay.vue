<template>
<div id="QuestionDisplay">
  <!-- <Button @click="fetchData">generate</Button>
  <Button @click="showSelect">show select</Button> -->
  <div v-for="(question,index) in questions" v-if="currentSlide === index">
    <Row>
      <Col span="4">
      <strong>{{index+1}}.</strong>
      </Col>
      <Col span="14" align='left'>
      <div>
        {{question.content}}
      </div>
      <div>
        <RadioGroup v-model="userSelect[index]" vertical>
          <Radio label="A">
            <span>{{question.options[0]}}</span>
          </Radio>
          <Radio label="B">
            <span>{{question.options[1]}}</span>
          </Radio>
          <Radio label="C">
            <span>{{question.options[2]}}</span>
          </Radio>
          <Radio label="D">
            <span>{{question.options[3]}}</span>
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
    var me = this;
    this.bus.$on('submitExam', function () {
      me.showSelect();
    })
  },

  methods: {
    fetchData() {
      let host = this.baseUrl +  `paper`;
      host = host + `?paperId=` + this.exam.id;

      this.axios.get(host)
        .then(response => {
          let examPaper = Object.assign({}, response.data[0]) || {};
          this.questionsHead = examPaper.Problems;
          this.totalNum = examPaper.ProblemNum;
          this.userSelect = Array(this.totalNum).fill("");
          for (let head of this.questionsHead) {
            let id = head.ProblemId;
            let host = this.baseUrl + `problem`;
            host = host + `?id=` + id;
            this.axios.get(host)
              .then(response => {
                let question = response.data[0];
                let {id,option,pro_detail} = question;
                question={
                    id:id,
                    options:option,
                    content:pro_detail
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

    showSelect() {
      console.log(this.userSelect);
    },

    prev() {
      this.currentSlide--;
    },

    next() {
      this.currentSlide++;
    },

    test() {
      console.log(this.exam);
    },

    ...mapMutations([
      'logTotalNum',
      'logUserSelect',
      'logQuestions',
      'logQuestionsHead'
    ]),
  },
  computed: mapState([
    'exam',
    'baseUrl'
  ])
}
</script>
<style lang="css" scoped>
</style>
