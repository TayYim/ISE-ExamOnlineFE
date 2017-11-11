<template>
<div id="QuestionDisplay">
  <div class="container">
    <h1>{{exam.title}}</h1>
    <h2>{{exam.year}}</h2>
    <h3>共{{totalNum}}题 你答对了2题</h3>
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
        <p>你的选择:A</p>
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
    userSelectPack: []
  }),

  mounted() {
    //do something after mounting vue instance
    this.fetchData();
  },

  methods: {
    fetchData() {

    },

    packupSelect(){

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
    }
  },

  computed: {
    ...mapState([
      'baseUrl',
      'questions',
      'userSelect',
      'exam',
      'totalNum'
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
</style>
