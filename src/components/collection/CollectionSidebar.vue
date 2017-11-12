<template>
<div id="CollectionSidebar">
  <Row type="flex" justify="end" class="code-row-bg">
      <h5>userName的题目收藏：</h5>
    <Menu @on-select="getExams($event)" theme="light" active-name="0">
      <Row>
        <Col span="12">
        <Menu-item name="1">高等数学</Menu-item>
        <Menu-item name="2">软工导论</Menu-item>
        </Col>
      </Row>
    </Menu>
  </Row>
</div>
</template>
<script>
export default {
  name: "CollectionSidebar",
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
#CollectionSidebar{
    margin-top: 40px;
}
</style>
