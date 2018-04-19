<template>
  <li class="li-recommend">
    <p class="recommend-title">推荐你看</p>
    <div class="article-list" @click="" v-for="(item,index) in lists" :key="index">
      <div class="article-cover">
        <img src="http://wander.dev.wallan.tech/media-app/media/download/THUMB/NEWS-5a6d43fe963a6514a836dd41">
      </div>
      <div class="article-info">
        <p class="article-title">原创少女心爆棚！15个梦幻可爱的全粉色打卡地大盘点！</p>
        <span class="article-media">携程旅行</span>
        <span class="article-comment-icon"><img src="../assets/images/comment.png"></span>
        <span class="article-comment-count">60</span>
        <span class="article-date">12:12</span>
      </div>
    </div>
  </li>
</template>
<script>
  export default{
    name: 'Recommend',
    data(){
      return{
        lists:[1,2,3],
      }
    }
  }
</script>
<style scoped>
.li-recommend{
  margin-top: 80px;
}
.li-recommend .recommend-title{
  font-size: 34px;
  font-weight: bold;
  color: #333333;
}
.li-recommend .article-list{
  height: 200px;
}
.li-recommend .article-list:nth-child(1){
  margin-top: 40px;
} 
.li-recommend .article-list:nth-child(n+1){
  margin-top: 20px;
} 
.li-recommend .article-list div{
  float: left;
}
.li-recommend .article-list div.article-cover img{
  border-radius: 4px;
  width: 280px;
  height: 200px;
}
.li-recommend .article-list div.article-info{
  background-color: #fafafa;
  width: -webkit-calc(100% - 280px);
  width: -moz-calc(100% - 280px);
  width: calc(100% - 280px);
  font-size: 24px;
  color: #999999;
  height: 200px;
}
.li-recommend .article-list div.article-info .article-title{
  margin-left: 20px;
  font-size: 32px;
  color: #333333;
  font-weight: bold;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.li-recommend .article-list div.article-info .article-media{
  margin-left: 20px;
}
.li-recommend .article-list div.article-info .article-comment-icon{
  margin-left: 40px;
}
.li-recommend .article-list div.article-info .article-comment-count{
  margin-left: 8px;
}
.li-recommend .article-list div.article-info .article-date{
  margin-left: 20px;
}
</style>