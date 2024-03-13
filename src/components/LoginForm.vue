<template>
  <div class="loggin">
    <span class="close"  @mouseenter="isHover = true;" @mouseleave="isHover = false;" :style="isHover ? hoverStyle : normaleStyle " @click="close">x</span>
    <div class="form-wrapper">
      <div class="header">login</div>
      <div class="input-wrapper">
        <div class="border-wrapper">
          <input
            type="text"
            name="username"
            placeholder="username"
            class="border-item"
            v-model="loginForm.username"
          />
        </div>
        <div class="border-wrapper">
          <input
            type="password"
            name="password"
            placeholder="password"
            class="border-item"
            v-model="loginForm.password"
          />
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
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
import {ref, reactive} from 'vue';
const emit = defineEmits<{
 (e: 'close'): void
}>();

 const loginForm = reactive({
     username: '',
     password: ''
 });

 const isHover = ref(false);
 const hoverStyle = {
  color: '#fff',
  backgroundColor: 'rgb(51, 51, 51)'
 };

 const normaleStyle = {
  color: 'rgb(204, 204, 204)',
  backgroundColor: 'inherit'
 }


 const submmit = () => {
  const {username, password} = loginForm;
  if (!username || !password) {
    message.error('用户名或密码不能为空!');
    return;
  }

 }

 const close = () => {
   emit('close');
 }
</script>

<style lang="less" scoped>
@import url(http://at.alicdn.com/t/font_8d5l8fzk5b87iudi.css);
.picture {
  position: relative;
  width: 75%;
  margin: auto;
  margin-top: 600px;
  top: -170px;
  padding: 40px 0;
  padding-bottom: 40px;
  font-size: 16px;
  opacity: 0.98;
  background: rgba(230, 244, 249, 0.8);
  z-index: 1;
  border-radius: 5px;
  text-align: center;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 2px dashed #fff;
  padding: 5px;
  animation: imgTranslate 20s linear infinite;
}
img:hover {
  animation: imgHover infinite 1s ease-in-out;
}
.words {
  font-size: 18px;
  font-weight: 700;
  margin: 20px auto;
  color: #97dffd;
  text-align: center;
  text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff;
}
@keyframes imgTranslate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes imgHover {
  0% {
    transform: scale(1.5);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1.5);
  }
}
.loggin {
  position: absolute;
  width: 102%;
  height: 114%;
  background: red;
  z-index: 4;
  top: 0px;
  font-family: "JetBrains Mono Medium";
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0e92b3;
}
.form-wrapper {
  width: 300px;
  background-color: rgb(41, 45, 62);
  color: #fff;
  border-radius: 2px;
  padding: 50px;
}

.form-wrapper .header {
  text-align: center;
  font-size: 35px;
  text-transform: uppercase;
  line-height: 100px;
}

.form-wrapper .input-wrapper input {
  background-color: rgb(41, 45, 62);
  border: 0;
  width: 100%;
  text-align: center;
  font-size: 15px;
  color: #fff;
  outline: none;
}

.form-wrapper .input-wrapper input::placeholder {
  text-transform: uppercase;
}
.form-wrapper .input-wrapper .border-wrapper {
  background-image: linear-gradient(to right, #e8198b, #0eb4dd);
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-wrapper .input-wrapper .border-wrapper .border-item {
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  border-radius: 30px;
}

.form-wrapper .action {
  display: flex;
  justify-content: center;
}

.form-wrapper .action .btn {
  width: 60%;
  text-transform: uppercase;
  border: 2px solid #0e92b3;
  text-align: center;
  line-height: 50px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s;
}

.form-wrapper .action .btn:hover {
  background-color: #0e92b3;
}

.form-wrapper .icon-wrapper {
  text-align: center;
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
  border-top: 1px dashed rgb(146, 146, 146);
  padding: 20px;
}

.form-wrapper .icon-wrapper i {
  display: inline-block;
  font-size: 20px;
  color: rgb(187, 187, 187);
  cursor: pointer;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 20px;
}

input:focus {
  outline: none;
  border-color: #9ecaed;
  box-shadow: 0 0 10px #9ecaed;
}

i:hover {
  animation: transBigger 0.6s ease-in-out forwards;
  /*transform: scale(2);*/
}
.close {
  position: absolute;
  top: 5px;
  right: 18px;
  font-size: 19px;
  color: rgb(204, 204, 204);
  cursor: pointer;
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 26px;
  border-radius: 15px;
  text-align: center;
  vertical-align: middle;
  transition: all 1s ease-in-out;
}

@keyframes transBigger {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.33);
  }
}
</style>
