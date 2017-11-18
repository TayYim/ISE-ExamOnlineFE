<template>
<div id="Random">
  <slot></slot>
  <Row v-for="subject in processedSubjects">
    <Col span="5" v-for="single in subject">
    <Button @click="selectSubject(single)" type="text">
          <Card style="width:200px">
            <div style="text-align:center">
                <h3>{{single.name}}</h3>
            </div>
          </Card>
    </Button>
    </Col>
  </Row>
</div>
</template>

<script>
import * as types from '@/store/mutation-types'
export default {
  name: "Random",
  data: () => ({}),

  methods: {
    selectSubject(single) {
        this.$store.commit(types.ADD_EXAM, {title: single.name,id: single.id,year:"随机抽题模式"});
      this.$store.commit(types.SET_MODE, 1);
      this.$router.push('confirm');
    }
  },

  computed: {
    subjects() {
      let fullSubjects = this.$store.state.course.subjects;
      return fullSubjects.slice(1);
    },
    processedSubjects() {
      // Put Array into Chunks
      let i, j, chunkedArray = [],
        chunk = 4;
      for (i = 0, j = 0; i < this.subjects.length; i += chunk, j++) {
        chunkedArray[j] = this.subjects.slice(i, i + chunk);
      }
      return chunkedArray;
    }
  }

}
</script>

<style lang="css" scoped>
#Random{
    /*margin-top: 40px;
    min-height: 1000px;*/
}
</style>
