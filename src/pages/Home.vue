<template>
    <div class="hearder">
      <blog-header></blog-header>
      <profile-picture></profile-picture>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
  
</template>

<script setup lang="ts">
import BlogHeader from '@/components/BlogHeader.vue';
import ProfilePicture from '@/components/ProfilePicture.vue';
import { ref } from 'vue';

// defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style lang='less' scoped>
.header {
  background: url("./assets/bg.jpg") no-repeat;
  position: relative;
  height: 650px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>
