<template>
<div id="QuestionDisplay">
  <div class="container">
    <Button @click="">userResult</Button>
    <h1>{{exam.title}}</h1>
    <h2>{{exam.year}}</h2>
    <h3>共{{totalNum}}题 你答对了{{totalCorrect}}题</h3>
    <hr>
    <div v-for="(question,index) in questions">
      <Row>
        <Col span="4">
        <strong>{{index+1}}.</strong>
        </Col>
        <Col span="14" align='left'>
        <div>
          <span v-html="_expr(question.content)"></span>
        </div>
        <div>
          <ul class="options">
            <li>A. <span v-html="_expr(question.options[0])"></span></li>
            <li>B. <span v-html="_expr(question.options[1])"></span></li>
            <li>C. <span v-html="_expr(question.options[2])"></span></li>
            <li>D. <span v-html="_expr(question.options[3])"></span></li>
          </ul>
        </div>
        </Col>
      </Row>
      <Row class="explain">
        <Col span="8" offset="4" align="left">
        <p v-bind:class="{correct: userResults[index], wrong: !userResults[index]}">你的选择:{{showSelectABCD(index)}}</p>
        <p>正确答案:B</p>
        <Collapse>
          <Panel name="1">
            查看解析：
            <p slot="content">this is jiexi</p>
          </Panel>
        </Collapse>
        </Col>
      </Row>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'

export default {
  name: "QuestionResult",
  data: () => ({
    userResults: [],
    questionAnswers: [],
    userSelectPacks: [],
    totalCorrect: 0
  }),

  mounted() {
    //do something after mounting vue instance
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.fetchUserResult();
    },

    packupUserSelect(index) {
      let pack = {
        ProblemId: this.questionsHead[index].ProblemId,
        userSelect: this.userSelect[index]
      };
      return pack;
    },

    fetchUserResult() {
      let baseHost = this.baseUrl + `judge`;

      for (var i = 0; i < this.totalNum; i++) {
        let pack = this.packupUserSelect(i);
        let host = baseHost + `?id=` + pack.ProblemId;
        this.axios.get(host)
          .then(response => {
            let result = Object.assign({}, response.data[0]) || {};
            this.userResults.push(result.result);
            this.totalCorrect = this.totalCorrect + 1*result.result;
          })
          .catch(e => {
            console.log(e);
          })
      }
    },

    _expr: function (expr) {
      var _expr = expr.replace(/\s\s+/g, ' ').replace(/ /gi, "~");
      try {
        return katex.renderToString(_expr, {
          throwOnError: false
        });
      } catch (err) {
        return ""
      }
    },

    showSelectABCD(index) {
      let option = this.userSelect[index];
      return this.showABCD(option);
    },

    showAnswerABCD(index) {
      let option = this.questionAnswers[index];
      return this.showABCD(option);
    },

    showABCD(option) {
      switch (option) {
        case "0":
          return "A";
          break;
        case "1":
          return "B";
          break;
        case "2":
          return "C";
          break;
        case "3":
          return "D";
          break;
        default:
          return "error"

      }
    }
  },

  computed: {
    ...mapState([
      'baseUrl',
      'questions',
      'userSelect',
      'exam',
      'totalNum',
      'questionsHead'
    ])
  }
}
</script>

<style lang="css" scoped>
.options > *{
    margin: 40px;
    line-height: 2;
}

.explain{
    margin-bottom: 40px;
}

.correct{
    color: green;
}

.wrong{
    color: red;
}
</style>
