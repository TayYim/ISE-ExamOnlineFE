<template>
  <div id="QuestionSidebar">
      <Button type="success" size="large" @click="submitExam">交卷</Button>
  </div>
</template>
<script>
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
}
}
</script>
<style lang="css" scoped>
</style>
