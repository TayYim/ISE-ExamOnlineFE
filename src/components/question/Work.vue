<template>
<div id="Work">
  <Row>
    <Col span="10">
    <h1>{{exam.title}}</h1>
    <h2>{{exam.year}}</h2>
    <div id="circle">
      <i-circle :percent="donePercent" :stroke-color="circleColor">
        <div v-if="userDone!==total">
          <p class="demo-Circle-inner" style="font-size:24px">共{{total}}题</p>
          <p class="demo-Circle-inner" style="font-size:20px">已答{{userDone}}题</p>
        </div>
        <div v-else>
          <Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
        </div>
      </i-circle>
    </div>
    <Button type="default" size="large" @click="submitExam">交卷</Button>
    <Modal v-model="isDone" title="交卷" @on-ok="ok" align='center'>
      <strong>您已完成所有问题,</strong>
      <strong>确定要交卷吗？</strong>
    </Modal>
    </Col>
    <Col span="14">
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
          <RadioGroup v-model="selected[index]" vertical class="options">
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
        <Button v-show="currentSlide<total-1" type="info" size="large" @click="next">下一题</Button>
      </Row>
    </div>
    </Col>
  </Row>
</div>
</template>
<script>
export default {
  name: "Work",
  data: () => ({
    isDone: false,
    currentSlide: 0
  }),

  methods: {
    submitExam() {
      if (this.userDone < this.total) {
        this.$Modal.warning({
          title: '警告',
          content: '还有题没有做完，完成再提交吧～'
        })
      } else {
        this.isDone = true;
      }
    },

    ok() {
      this.$Message.success('交卷成功');
      this.$store.dispatch('getJudge');
      this.$router.push('result');
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

    prev() {
      this.currentSlide--;
    },

    next() {
      this.currentSlide++;
    },

  },
  computed: {
    exam() {
      return this.$store.state.course.exam;
    },
    selected() {
      return this.$store.state.course.selected;
    },
    questions() {
      return this.$store.state.course.questions;
    },
    total() {
      return this.$store.getters.total;
    },
    userDone() {
      return this.$store.getters.userDone;
    },
    donePercent() {
      return (this.userDone / this.total) * 100;
    },
    circleColor() {
      if (this.userDone === this.total) {
        return "#5cb85c";
      } else {
        return "#2d8cf0";
      }
    }
  }
}
</script>
<style lang="css" scoped>
#Work{
    margin-top: 40px;
    line-height: 5;
}

#circle{
    margin-top: 40px;
}

.options > *{
    margin: 40px;
    line-height: 2;
}
</style>
