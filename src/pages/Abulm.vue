<template>
<div class="ablum">
      <div class="prev" @click="preIndex">&#10094;</div>
      <div class="next" @click="nextIndex">&#10095;</div>
    <div class="slide">
      <div class="slideshow">
          <ul>
              <li v-for="(img,index) in imgUrls" :key="index" v-show=" index === currentIndex">
                  <img :src="img">
              </li>
          </ul>
      </div>

      <div class="bar">
          <span v-for="(item,index) in imgUrls" :key="index" :class="{'active':index === currentIndex}" @click="currentIndex = index">

          </span>
      </div>
  </div>
</div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    
    const imgUrls = ref<string[]>([]);
    const currentIndex = ref(0);

    const getImgUrl = () => {
        const urls:string[] = [];
        for (let i = 1; i <= 20; i++) {
            const url = new URL(`../assets/abulm/images/${i}.jpg`, import.meta.url).href;
            console.log(url);
            
            urls.push(url);
        }
        return urls;
    }

    function autoplay(){
          currentIndex.value++;
          if(currentIndex.value === imgUrls.value.length){
              currentIndex.value = 0;
          }
      };
    
    function play (){
          setInterval(autoplay,2000);
      }
    function preIndex(){
          currentIndex.value--;
          if(currentIndex.value < 0){
              currentIndex.value = imgUrls.value.length - 1;
          }
      }

    function nextIndex(){
          currentIndex.value++;
          if(currentIndex.value === imgUrls.value.length){
              currentIndex.value = 0;
          }
      }

    imgUrls.value = getImgUrl();
</script>

<style lang="less" scoped>
/* @import url(); 引入css类 */
*{
    margin: 0px;
    padding: 0px;
    list-style-type: none;
}
.ablum{
    margin-top: -160px;
    margin-left: -8px;
    /* margin-bottom: 50px; */
    padding-bottom: 50px;
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
}
.slide{
    /* width: 1024px;
    height:320px; */
    width: 90%;
    height: 700px;
    /* margin: 0 auto; */
    margin-left: 10px;
    margin-top: 25px;
    margin-bottom: 100px;
    overflow: hidden;
    position: relative;
}
.slideshow{
    /* width: 1024px;
    height: 320px; */
    width: 100%;
}
li{
    position: absolute;
    left: 6px;
    transition: all .3s;
    width: 100%;
}
img{
    /* width: 880px;
    height: 300px; */
    max-width: 100%;
    margin-left: 112px;
}
.bar{
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin-left: 122px;
    z-index: 10;
    text-align: center;
}
.bar span{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid;
    background: white;
    border-color: gray;
    display: inline-block;
    margin-right: 1px;
}
.active{
    background: rgb(255,202,207) !important;
}
.prev{
    position: absolute;
    top: 388px;
    left: 12px;
    width: 80px; 
    height: 110px;
    font-size: 70px;
    color: rgb(255,202,207);
    z-index: 100;
}
.next {
    position: relative;
    top: 463px;
    left: 1479px;
    /* right: 0px; */
    /* width: 153px; */
    /* height: 100px; */
    font-size: 70px;
    color: rgb(255,202,207);
}
.prev, .next{
    cursor: pointer;
}
</style>