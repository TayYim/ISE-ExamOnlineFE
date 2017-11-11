<template>
<div id="ExamSidebar">
  <Row type="flex" justify="end" class="code-row-bg">
    <Menu @on-select="getExams($event)" theme="light" active-name="0">
      <Row>
        <Col span="12">
        <Menu-item name="0">全部</Menu-item>
        <Menu-item name="1">高等数学</Menu-item>
        <Menu-item name="2">软工导论</Menu-item>
        </Col>
      </Row>
    </Menu>
    <!-- <div class="col-sm-6">
      <div class="hidden-xs list-group side-bar  list-group-subject">

        <a @click="getExams($event)" id="0" class="list-group-item">全部</a>
        <a @click="getExams($event)" id="1" class="list-group-item">高等数学</a>
        <a @click="getExams($event)" id="2" class="list-group-item">软工导论</a>
      </div>
    </div> -->
    <!-- <div class="col-sm-6">
      <div class="hidden-xs list-group side-bar  list-group-year">
        <a href="#" class="list-group-item active">全部</a>
        <a href="#" class="list-group-item">2017</a>
        <a href="#" class="list-group-item">2016</a>
        <a href="#" class="list-group-item">2015</a>
        <a href="#" class="list-group-item">2014</a>
        <a href="#" class="list-group-item">2013</a>
        <a href="#" class="list-group-item">2012</a>
        <a href="#" class="list-group-item">2011</a>
      </div>
    </div> -->
  </Row>
</div>
</template>
<script>
export default {
  name: "ExamSidebar",
  data: () => ({

  }),
  methods: {
    getExams(course_id) {
      this.$emit("getExams", course_id);
    }
  }
}
</script>
<style lang="css" scoped>

</style>
