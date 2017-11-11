<template>
<div id="QuestionSidebar">
  <h1>{{exam.title}}</h1>
  <h2>{{exam.year}}</h2>
  <h3>共{{totalNum}}题 已作答{{userDone}}题</h3>
  <Button type="success" size="large" @click="submitExam">交卷</Button>
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
    }
  }
}
</script>
<style lang="css" scoped>
</style>
