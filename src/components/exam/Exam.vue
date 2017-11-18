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
    ...mapMutations([
      'setCurrentPage',
    ])
  }
}
</script>

<style lang="css" scoped>
</style>
