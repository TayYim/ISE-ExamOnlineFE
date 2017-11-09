<!-- fired!!!!! -->
<template>
<div id="ExamItem">
  <div class="exam-list">
      <div class="exam-list-item">  <Row type="flex" justify="space-around" class="code-row-bg">
          <Col span="9">
              <Card>
                  <p slot="title">The standard card</p>
                  <p>Content of card</p>
              </Card>
          </Col>
          <Col span="9">
              <Card>
                  <p slot="title">Disable card with hover shadows</p>
                  <p>Content of card</p>
              </Card>
          </Col>
      </Row></div>
      <div class="exam-list-item">  <Row type="flex" justify="space-around" class="code-row-bg">
          <Col span="9">
              <Card>
                  <p slot="title">The standard card</p>
                  <p>Content of card</p>
              </Card>
          </Col>
          <Col span="9">
              <Card>
                  <p slot="title">Disable card with hover shadows</p>
                  <p>Content of card</p>
              </Card>
          </Col>
      </Row></div>
      <div class="exam-list-item">  <Row type="flex" justify="space-around" class="code-row-bg">
          <Col span="9">
              <Card>
                  <p slot="title">The standard card</p>
                  <p>Content of card</p>
              </Card>
          </Col>
          <Col span="9">
              <Card>
                  <p slot="title">Disable card with hover shadows</p>
                  <p>Content of card</p>
              </Card>
          </Col>
      </Row></div>
  </div>
</div>
</template>
<script>
export default {
  name: "ExamItem",
  data: () => ({
      subject: "概率论与数理统计应用",
      year: "2017"
  })
}
</script>
<style lang="css" scoped>
</style>
