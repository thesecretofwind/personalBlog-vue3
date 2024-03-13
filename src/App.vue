<script setup lang="ts">
// import ProfilePicture from '@/pages/LoginForm.vue';
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
  <!-- <profile-picture></profile-picture> -->
  
</template>

<style scoped>
#app{
  background: url("./assets/bg.jpg") no-repeat;
  position: relative;
  height: 650px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: -8px;
}

h1 {
  margin: 0 auto;
  font-size: 49px;
  color: transparent;
  background: linear-gradient(#f6d365, #ff9800);
  background-clip: text;
  font-size: 55px;
  display: inline;
  vertical-align: top;
}


</style>
