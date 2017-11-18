<template>
<div id="Exam" class="layout">
  <div class="layout-content">

    <!-- <Normal></Normal> -->
    <router-view>
      <Row>
        <Menu mode="horizontal" active-name="1">
          <div class="layout-assistant">
            <router-link to="/exam/normal">
              <MenuItem name="paperMode">选择套题</MenuItem>
            </router-link>
            <router-link to="/exam/random">
              <MenuItem name="randomMode">随机刷题</MenuItem>
            </router-link>
          </div>
        </Menu>
      </Row>
    </router-view>
  </div>
</div>
</template>

<script>
import Normal from '@/components/exam/Normal';

import {
  mapState
} from 'vuex';
import {
  mapMutations
} from 'vuex';

export default {
  name: "Exam",
  data() {
    return {}
  },
  components: {
    Normal
  },

  /**
   * set current page to this page
   */
  beforeRouteEnter: function (to, from, next) {
    console.log('examok');
    next(Exam => {
      Exam.setCurrentPage('exam');
    });
  },

  methods: {
<<<<<<< HEAD
    /**
     * get exam papers by course_id
     * @param  {[String]} course_id
     */
    showExams(course_id) {
      this.axios({
          method: 'get',
          url: '/course/course/',
          params: {
            course: 5
          }
        })
        .then(response => {
          this.exams = response.data;
          console.log(response.data);
          console.log(this.exams);
        })
        .catch(e => {
            console.log('failed');
          this.errors.push(e)
        })
    },

    selectExam(exam) {
      this.toggleSelected();
      this.exam = exam;
    },
    toggleSelected() {
      this.examSelected = !this.examSelected;
    },
    selectMode(name) {
      if (name === "paperMode") {
        this.isPaperMode = true;
      } else {
        this.isPaperMode = false;
      }
    },
=======
>>>>>>> rebuild
    ...mapMutations([
      'setCurrentPage',
    ])
  }
}
</script>

<style lang="css" scoped>
</style>
