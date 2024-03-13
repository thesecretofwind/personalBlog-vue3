<template>
  <div class="profile-picture">
    <div class="picture">
      <img
        class="img"
        src="../assets/profile-picture.jpg" 
        alt="Mr.cutiosity的头像" title="登陆"
        @mouseenter="imgClass = 'img-hover'; defaultClass =''"
        @mouseleave="imgClass = 'img-restore'; defaultClass='img-default'"
        ref="img"
        @click="isShowLogin = true"
        :class="[imgClass, defaultClass]"
        />
      <p class="words">看见奥特曼就落荒而逃的怪兽</p>
    </div>
    <transition :duration="550" name="nested">
      <login-form v-if="isShowLogin" @close="isShowLogin = false"></login-form>
    </transition>
  </div>

  <div>
  </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    import { useRouter } from 'vue-router';

    import LoginForm from '@/pages/LoginForm.vue';

    const isShowLogin = ref<boolean>(false);
    const isHovered = ref(false);
    const imgClass = ref('');
    const defaultClass = ref('img')
    const router = useRouter();

    

    const login = () => {
        router.push('/login')
    }


</script>

<style lang="less" scoped>
 @import url(http://at.alicdn.com/t/font_8d5l8fzk5b87iudi.css);
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
.img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 2px dashed #fff;
  padding: 5px;
  transition: scale 1s ease-in-out;
  cursor: pointer;
}

.img-default {
  animation: imgTranslate 20s linear infinite !important;
}

.img-hover {
  animation: imgHover forwards 1s ease-in-out;
}

.img-restore {
  animation: imgRestre forwards 1s ease-in-out;
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
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
}

@keyframes imgRestre {
  0% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
    animation: imgTranslate 20s linear infinite;
  }
}
</style>