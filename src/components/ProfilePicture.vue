<template>
  <div class=".profile-picture">
    <div class="picture">
      <img src="../assets/profile-picture.jpg" alt="Mr.cutiosity的头像" title="登陆" @click="showLogin"/>
      <p class="words">看见奥特曼就落荒而逃的怪兽</p>
    </div>
    <div class="loggin" v-show="isShowLogin">
      <span class="close" @click="close">x</span>
      <div class="form-wrapper">
        <div class="header">login</div>
        <div class="input-wrapper">
          <div class="border-wrapper">
            <input type="text" name="username" placeholder="username" class="border-item" v-model="username" />
          </div>
          <div class="border-wrapper">
            <input type="password" name="password" placeholder="password" class="border-item" v-model="password" />
          </div>
        </div>
        <div class="action">
          <div class="btn" @click="submmit">login</div>
        </div>
        <div class="icon-wrapper">
          <i class="iconfont icon-weixin"></i>
          <i class="iconfont icon-qq"></i>
          <i class="iconfont icon-github"></i>
        </div>
      </div>
    </div>
  </div>

  <div>
  </div>
</template>

<script setup lang="ts">
    import {ref, reactive} from 'vue';
  
    const isShowLogin = ref<boolean>(false);
    const loginForm = reactive({
        username: '',
        password: ''
    })

    const close = () => {
      isShowLogin.value = false;
    };
    const showLogin = () => {
      isShowLogin.value = true;
    }
</script>

<style scoped>

</style>