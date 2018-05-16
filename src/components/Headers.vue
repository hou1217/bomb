<template>
  <header id="indexHeader" class="index-toutiao">
    <div class="top_bar">
      <div class="abs_m">
        <a href="#" class="refresh_title btn">卧岚头条</a>
        <div class="refreshBtn-container ">
          <i class="refresh_btn" :class="{rotate:isRotate}" @click="refreshNews()" ></i>
        </div>
      </div>
      <div class="abs_l">
        <a href="javascript:;" @click="goBack" class="rtn-box"></a>
      </div>
      <div class="abs_r">
        <a href="javascript:;" class="btn search"></a>
      </div>
    </div>
  </header>
</template>
<script>

  export default {
    name: 'Headers',
    props:['isRotate'],
    methods:{
      refreshNews(){

        
        this.$emit('refreshNews','param'); 
        //第一个参数名为调用的方法名，第二个参数为需要传递的参数
      },
      goBack(){
        this.$router.go(-1);
      },
      
    }
  }

</script>
 
<style>
  
</style>