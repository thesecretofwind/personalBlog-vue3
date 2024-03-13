<template>
  <div class=".profile-picture">
    <div class="picture">
      <img src="../assets/profile-picture.jpg" alt="Mr.cutiosity的头像" title="登陆" @click="isShowLogin = true"/>
      <p class="words">看见奥特曼就落荒而逃的怪兽</p>
    </div>
    <!-- <a-modal 
      v-model:visible="isShowLogin"
      title = "登录"
      >
      <login-form></login-form>
    </a-modal> -->
    <transition :duration="550" name="nested">
      <login-form v-if="isShowLogin" @close="isShowLogin = false"></login-form>
    </transition>
    
  </div>

  <div>
  </div>
</template>

<script setup lang="ts">
    import {ref, reactive} from 'vue';
    import LoginForm from './LoginForm.vue';

    const isShowLogin = ref<boolean>(false);


</script>

<style lang="less" scoped>
 
 .nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
</style>