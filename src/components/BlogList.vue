<template>
    <!-- 注意：这里自定义组件的值一定要加上单引号成一个字符串，否则无法传递 -->
    <!-- 去掉了设置成窄的形式  v-theme:column="'narrow'" -->
    <profile-picture></profile-picture>
    <div id="show-blogs" @mouseleave="leave" @mouseenter="enter">
      <canvas ref="evanyou" id="evanyou" width="1920" height="902"></canvas>
      <a href="#app">
        <div class="fallCat" :class="{fall:isShowCat}" ref="fall"></div>
      </a>
      <h1 ref="d">博客总览</h1>
      {{search}}
      <div class="input">
        <!-- {{search}} -->
        <input type="text" placeholder="搜索" v-model="search" />
      </div>
      <!-- {{filteredBlogs}} -->
      <div class="single-blog" v-for="(item,index) in  filteredBlogs" :key="index">
        <!-- 注意：在router-link中to的地址要拼接，要使用v-bind绑定to属性 -->
        <router-link :to="'/blog/' +item.id">
          <h2 v-rainbow>{{item.title}}</h2>
        </router-link>
        <div class="myheader">
          <span class="post-time" style="#00a7e0">
            <span class="createdAt">
              <img src="../assets/date.png" alt="日期图像" />
              发表于：{{item.createdAt}}
            </span>
            <span class="updatedAt">
              <img src="../assets/time.png" alt="更新时间" />
              更新于：{{item.updatedAt}}
            </span>
          </span>
        </div>
        <div class="post-badge">
          <router-link :to=" '/tags/' +item.id">
            <span>总结</span>
          </router-link>
        </div>
        <article>
          <div class="post-date">
            <div class="post-month">{{date.getMonth()+1}}</div>
            <div class="post-day">{{date.getDate()}}</div>
          </div>
          <pre style="white-space: pre-line;">{{item.content}}</pre>
          <!-- <mavon-editor
        class="md"
       :value="item.content"
       :subfield = "prop.subfield"
       :defaultOpen = "prop.defaultOpen"
       :toolbarsFlag = "prop.toolbarsFlag"
       :editable="prop.editable"
       :scrollStyle="prop.scrollStyle"
    ></mavon-editor> -->
          <footer>
            <p>总结：</p>
            <span>{{item.summary}}</span>
          </footer>
        </article>
      </div>
    </div>
  </template>

<script setup lang="ts">
import ProfilePicture from '@/components/ProfilePicture.vue';
import { IBlog } from '@/types/blog.type';
import bus from '@/utils/bus';
import { getFullDate } from '@/utils/date';
import { drawCanvas } from '@/utils/drawCanvas';
import { otherSinpper, snippet, toUpperCase } from '@/utils/filters';
import { computed, onMounted, ref } from 'vue';

  const search = ref('');
  const blogList = ref<IBlog[]>([]);
  const isShowCat = ref(false);
  const fall = ref<HTMLElement|null>(null);
  const evanyou = ref<HTMLCanvasElement|null>(null)
  const date = new Date();

  const filteredBlogs = computed(()=> {
    return blogList.value
    .filter((item) => {
      return item.title && item.title.includes(search.value);
    })
    .map(item => {
      item.title = otherSinpper(toUpperCase(item.title));
      item.createdAt = getFullDate(item.createdAt);
      item.updatedAt = getFullDate(item.updatedAt);
      item.content = snippet(item.content);
      return item
    })
  });

  const enter = () => {
    fall.value?.getAttribute('class')?.replace('catLeave', '')
    fall.value?.setAttribute('class', 'fallCat catEnter');
  }
  const leave = () => {
    // fall.value!.style.top = '-100px';
    console.log();
    
    fall.value?.setAttribute('class', 'fallCat catLeave')
  }

  onMounted(() => {
    bus.on('inputVal', val => {
      search.value = val as string;
    });
    
    drawCanvas(evanyou.value!)
  })

</script>

<style lang="less" scoped>
/* @import url(); 引入css类 */

#show-blogs {
  margin-top: 0px;
}
#show-blogs:hover .fallCat {
  animation: fall 1s ease-in-out forwards;
}
.single-blog {
  max-width: 1000px;
  padding: 20px;
  margin: 50px auto;
  box-sizing: border-box;
  background-color: #eee;
  border: 1px dotted #aaa;
  position: relative;
  border-radius: 15px;
}
.single-blog:hover {
  background-color: #00a7e0;
}
.single-blog:hover + .fallCat {
  animation: fall 2s ease-in-out forwards;
}
.post-date:hover {
  background-color: rgb(73, 177, 245);
}
#show-blogs a {
  color: #444;
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 60%;
  margin-left: 284px;
  box-sizing: border-box;
  border-radius: 20px;
  outline: none;
  border: none;
  height: 45px;

  &:focus {
    border: 1px solid rgb(106, 174, 238);
    // transition: border .5s;
  }
}
h1 {
  text-align: center;
  padding-bottom: 30px;
}
h2 {
  text-align: center;
  font-size: 2em;
}
article {
  position: relative;
  margin-top: 50px;
}
.post-date {
  background-color: #97dffd;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  position: absolute;
  top: -172px;
  left: -40px;
  height: 50px;
  width: 60px;
  padding-top: 10px;
  border-radius: 100px;
  color: #fff;
  text-align: center;
  line-height: 1.1;
}
.post-day {
  font-size: 27px;
  font-weight: 700;
}
.post-month {
  font-size: 14px;
}
.fallCat {
  width: 70px;
  height: 900px;
  position: fixed;
  right: 50px;
  top: -900px;
  z-index: 2;
  background-image: url("../assets/scroll .png");
  overflow: hidden;
  background-size: 100% 100%;
  transition-property: top;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}

.myheader {
  text-align: center;
  vertical-align: middle;
}
.post-time {
  color: #00a7e0;
  font-size: 12px;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fa-calendar-o::before {
  content: "\f133";
}
img {
  width: 12px;
  margin-bottom: -2px !important;
}
.post-badge {
  position: absolute;
  left: -16px;
  top: 105px;
  border-color: #47456d;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: #97dffd;
  margin: 5px 0 15px 2px;
  font-size: 14px;
  border-radius: 0 4px 4px 0;
  display: inline-block;
  padding: 7px 11px 7px 32px;
  line-height: 1;
}
.post-badge:after {
  position: absolute;
  content: "";
  top: 100%;
  left: 0;
  border-top: 0 solid transparent;
  border-right-width: 1em;
  border-right-color: inherit;
  border-right-style: solid;
  border-bottom: 1em solid transparent;
  border-left: 0 solid transparent;
  width: 0;
  height: 0;
}
.post-badge span {
  color: #fff;
}
.post-badge:hover {
  background-color: #00a7e0;
}
footer p {
  padding: 4px;
  margin-bottom: 1px;
  font-size: 22px;
}
footer span {
  margin-left: 20px;
}
.updatedAt {
  margin-left: 10px;
  color: rgb(33, 250, 47);
}
article {
  font-size: 18px;
}
.input {
  margin: 0 auto;
}
.leavingCat-leave-active {
  animation: leave 2s ease-in-out forwards;
}
.catLeave {
  animation: leave 2s ease-in-out forwards;
}
#evanyou {
  position: fixed;
  width: 100%;
  height: 100%;
  /*-61px */
  /* top: 708px; */
  top: 0px;
  left: 0;
  z-index: -1;
  /* margin-top: 61px; */
  background: #efefef;
  transition: top 0.2s;
}

.catEnter {
  animation: fall 2s ease-in-out forwards;
}


@keyframes fall {
  100% {
    top: -307px;
  }
}
@keyframes leave {
  0%{
    top: -307px;
  }

  20% {
    top: -257px
  }
  100% {
    top: -950px;
  }
}
</style>