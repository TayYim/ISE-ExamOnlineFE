<template>
<div id="QuestionSidebar">
  <h1>{{exam.title}}</h1>
  <h2>{{exam.year}}</h2>
  <div id="circle">
      <i-circle :percent="donePercent" :stroke-color="circleColor">
          <div v-if="userDone!==totalNum">
              <p class="demo-Circle-inner" style="font-size:24px">共{{totalNum}}题</p>
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
</div>
</template>
<script>
import {
  mapState,
  mapMutations
} from 'vuex'
export default {
  name: "QuestionSidebar",
  data: () => ({
    isDone: false
  }),
  mounted() {
    //do something after mounting vue instance

  },
  methods: {
    submitExam() {
      if (this.userDone < this.totalNum) {
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
      this.$emit('submitted');
    }

  },
  computed: {
    ...mapState([
      'exam',
      'totalNum',
      'userSelect'
    ]),
    userDone() {
      return this.$store.getters.userDone;
    },
    donePercent() {
      return (this.userDone / this.totalNum) * 100;
    },
    circleColor() {
      if (this.userDone === this.totalNum) {
        return "#5cb85c";
      } else {
        return "#2d8cf0";
      }
    }
  }
}
</script>
<style lang="css" scoped>
#QuestionSidebar{
    margin-top: 40px;
    line-height: 5;
}

#circle{
    margin-top: 40px;
}
</style>
