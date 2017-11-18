<template>
<div id="Question">
  <router-view></router-view>
</div>
</template>
<script>

import {
  mapMutations
} from 'vuex';

export default {
  name: "Question",
  data: () => ({
    submitted: false
  }),

  /**
   * set current page to this page
   */
  beforeRouteEnter: function (to, from, next) {
    console.log('questionok');
    next(Question => {
      Question.setCurrentPage('question');
    });
  },

  methods: {
    toggleSubmitted() {
      this.submitted = !this.submitted;
    },
    ...mapMutations([
      'setCurrentPage',
    ])
  },

  components: {

  },
}
</script>
<style lang="css" scoped>
</style>
