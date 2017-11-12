<template>
<div id="ExamRandom">
  <Row v-for="SUBJECT in processedSUBJECTS">
    <Col span="5" v-for="single in SUBJECT">
    <Button @click="" type="text">
          <Card style="width:200px">
            <div style="text-align:center">
                <h3>{{single}}</h3>
            </div>
          </Card>
    </Button>
    </Col>
  </Row>
</div>
</template>

<script>
import SUBJECTS from "@/js/subjects.js";

export default {
  name: "ExamRandom",
  data: () => ({}),

  methods: {
    selectExam(exam) {
      this.$emit('selectExam', exam);
    }
  },

  computed: {
    processedSUBJECTS() {
      // Put Array into Chunks
      let i, j, chunkedArray = [],
        chunk = 4;
      for (i = 0, j = 0; i < SUBJECTS.length; i += chunk, j++) {
        chunkedArray[j] = SUBJECTS.slice(i, i + chunk);
      }
      return chunkedArray;
    }
  }

}
</script>

<style lang="css" scoped>
#ExamRandom{
    margin-top: 40px;
    min-height: 1000px;
}
</style>
