<template>
  <div class="top_menu_bar">
    <div class="top_menu_more">
      <div class="list_shadow"></div>
      <a class="more_btn" href="javascript:void(0)"></a>
    </div>
    <div class="top_menu_list">
<<<<<<< HEAD
      <router-link :to="item.url" :data-channel="item.type" data-query="" class="btn" v-for='(item,index) in navbar' :key="index">
=======
      <router-link :to="{path:item.url,query:{type:item.type}}" :data-channel="item.type" :data-query="'channel='+item.type" class="btn" v-for='(item,index) in navbar' :key="index">
>>>>>>> dev
        {{item.text}}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopMenuBar',
    data(){
      return {
<<<<<<< HEAD
        //频道数据
=======
        //频道
>>>>>>> dev
        navbar:[
        {
          text:'推荐',
          url:'/home/all',
<<<<<<< HEAD
          type:'_all_'
=======
          type:'__all__'
>>>>>>> dev
        },
        {
          text:'热点',
          url:'/home/hot',
          type:'news_hot'
        },
        {
          text:'社会',
          url:'/home/society',
          type:'news_society'
        },
        {
          text:'汽车',
          url:'/home/car',
          type:'news_car'
        },
        {
          text:'关注',
          url:'/home/focus',
          type:'news_focus'
        },
        {
          text:'上海',
          url:'/home/shanghai',
          type:'news_shanghai'
        },
        {
          text:'军事',
          url:'/home/military',
          type:'news_military'
        },
        {
          text:'体育',
          url:'/home/sports',
          type:'news_sports'
        },
        {
          text:'财经',
          url:'/home/finance',
          type:'news_finance'
        },
        ],
        top:false,
        first:window.location.search.substring(6),
      }
    }
  }

</script>

<style>
</style>