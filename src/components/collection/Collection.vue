<template>
<div id="Collecton">
  <Row>
    <Col span="10">
    <Row type="flex" justify="end" class="code-row-bg">
      <Menu @on-select="getCollection($event)" theme="light" active-name="0">
        <Row>
          <Col span="12">
          <div v-for="(subject,index) in this.subjects" :key="subject.id">
            <Menu-item :name="index">{{subject.name}}</Menu-item>
          </div>
          </Col>
        </Row>
      </Menu>
    </Row>
    </Col>
    <Col span="14">
    <div class="exam-list">
      <div>
        <div v-for="(question,index) in questionsC">
          <Row>
            <Col span="4">
            <strong>{{index+1}}.</strong>
            <p>
              <Button size="small" type="ghost">取消收藏</Button>
            </p>
            <p>
              <Button size="small" type="ghost">修改笔记</Button>
            </p>
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
            <p>正确答案:{{showCorrectABCD(index)}}</p>
            <Collapse>
              <Panel name="1">
                查看笔记：
                <p slot="content">{{question.note}}</p>
              </Panel>
            </Collapse>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    </Col>
  </Row>
</div>
</template>

<script>
import * as types from '@/store/mutation-types'

export default {
  name: "Collecton",
  data: () => ({}),

  mounted() {
    //do something after mounting vue instance
    this.getCollection(0);
  },

  methods: {
    getCollection(index) {
      let subjectId = this.subjects[index].id;
      this.$store.dispatch('getquestionsC', subjectId);
    },
    _expr: function (expr) {
      var _expr = expr.replace(/\s\s+/g, ' ').replace(/ /gi, "~");
      try {
        return katex.renderToString(_expr, {
          throwOnError: false
        });
      } catch (err) {
        return expr
      }
    },

    showCorrectABCD(index) {
      let option = this.questionsC[index].correct;
      return this.showABCD(option);
    },

    /**
     * Transform uitl
     * @param  {number} option 0,1,2,3
     * @return {string}        A,B,C,D
     */
    showABCD(option) {
      //   option = option.toString();
      switch (option) {
        case "0":
          return "A";
          break;
        case 0:
          return "A";
          break;
        case "1":
          return "B";
          break;
        case 1:
          return "B";
          break;
        case "2":
          return "C";
          break;
        case 2:
          return "C";
          break;
        case "3":
          return "D";
          break;
        case 3:
          return "D";
          break;
        default:
          return "error"

      }
    }
  },

  computed: {
    subjects() {
      return this.$store.state.course.subjects
    },
    questionsC() {
      return this.$store.state.course.questionsC
    }
  }

}
</script>

<style lang="css" scoped>
#Collecton{
    /*margin-top: 40px;
    min-height: 1000px;*/
}

.options > *{
    margin: 40px;
    line-height: 2;
}

.explain{
    margin-bottom: 40px;
}
</style>
