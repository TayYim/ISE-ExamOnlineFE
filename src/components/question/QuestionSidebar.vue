<template>
<div id="QuestionSidebar">
    <h1>{{exam.title}}</h1>
    <h2>{{exam.year}}</h2>
    <h3>共{{totalNum}}题</h3>
  <Button type="success" size="large" @click="submitExam">交卷</Button>
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

  }),
  mounted() {
    //do something after mounting vue instance

  },
  methods: {
    submitExam() {
      this.bus.$emit('submitExam')
    }
  },
  computed: mapState([
    'exam',
    'totalNum',
    'userSelect'
  ])
}
</script>
<style lang="css" scoped>
</style>
