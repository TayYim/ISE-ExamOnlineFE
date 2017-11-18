<template>
<div id="app">
  <Navbar></Navbar>
  <router-view>
  </router-view>
</div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'app',
  components: {
    Navbar
},
mounted() {
  //do something after mounting vue instance
  this.$store.dispatch('getSubjects')
}
}
</script>

<style>
@import '/static/iview-layout.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
