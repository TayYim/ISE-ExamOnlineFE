<template>
<div id="QuestionDisplay">
  <!-- <Button @click="fetchData">generate</Button>
  <Button @click="showSelect">show select</Button> -->
  <Button @click="test">logExam</Button>
  {{exam.id}}
  <div v-for="(question,index) in questions" v-if="currentSlide === index">
    <Row>
      <Col span="4">
      <strong>{{index+1}}.</strong>
      </Col>
      <Col span="14" align='left'>
      <div>
        {{question.pro_detail}}
      </div>
      <div>
        <RadioGroup v-model="userSelect[index]" vertical>
          <Radio label="A">
            <span>{{question.option[0]}}</span>
          </Radio>
          <Radio label="B">
            <span>{{question.option[1]}}</span>
          </Radio>
          <Radio label="C">
            <span>{{question.option[2]}}</span>
          </Radio>
          <Radio label="D">
            <span>{{question.option[3]}}</span>
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
  mapState
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

  props: ['examId'],

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
      let host = `http://localhost:3000/paper`;
      host = host + `?paperId=` + this.examId;

      this.axios.get(host)
        .then(response => {
          let examPaper = Object.assign({}, response.data[0]) || {};
          this.questionsHead = examPaper.Problems;
          this.totalNum = examPaper.ProblemNum;
          this.userSelect = Array(this.totalNum).fill("");
          for (let head of this.questionsHead) {
            let id = head.ProblemId;
            let host = `http://localhost:3000/problem`;
            host = host + `?id=` + id;
            this.axios.get(host)
              .then(response => {
                let question = response.data[0];
                this.questions.push(question);
              })
              .catch(e => {
                console.log(e);
              })

          }
        })
        .catch(e => {
          console.log(e);
        })
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

    test(){
        console.log(this.exam);
    }
  },
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'exam'
  ])
}
</script>
<style lang="css" scoped>
</style>
