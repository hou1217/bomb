<template>
  <div class="container">
    <div class="detail">
      <input type="hidden" id="article_id">
      <input type="hidden" id="token">
      <input type="hidden" id="device_num">
      <ul>
        <li class="li-channel" id="article_channel" onclick="channelDetail('5a616dc63556cc8802941004')">
          <a href="#">新闻</a>
        </li>
        <li class="li-title" id="article_title">
          {{}}
        </li>
        <li class="li-media">
          <div class="article-meta-img div-media" onclick="mediaDetail('5a741e7433f17c50cc7b1209')">
            <!-- 公众号头像 -->
            <img id="portraitUrl" src="https://wander.wallan-tech.com:1443/media-app/media/download/THUMB/NEWS-5a741ea5963a654b84e35d7b" class="img-media">
          </div>
          <div class="article-meta-info div-media">
            <div class="article-meta-name" id="article_mediaName" onclick="mediaDetail('5a741e7433f17c50cc7b1209')">
            <!-- 公众号名字 -->
            </div>
            <div class="article-meta-date" id="article_time">
              <!-- 文章创建时间 -->
            </div>
          </div>
          <div class="article-meta-follow div-media" id="follow1">
            <!-- 公众号ID -->
          </div>
        </li>
        <li class="li-content" id="article_content">
          <!-- 文章内容 -->
        </li>
        <li class="li-keywords" id="article_keywords">
          <!-- 文章关键字 -->
        </li>
        <li class="li-footer">
          <!-- 查看原文 -->
          <a id="origin-link">查看原文</a>
          <div class="footer-panel">
            <span class="footer-source" id="footer_source">
            <!-- 文本来源 -->
            </span>
            <span class="footer-author" id="footer_author">
            <!-- 作者 -->
            </span>
          </div>
        </li>
        <li class="li-star">
          <div class="div-star">
            <img src="/bomb/img/un_star.png" id="star_img" class="un-star" onclick="starImg();">
            <span class="star-count">0</span>
          </div>
        </li>
        <li class="li-star-panel">
          <div class="star-img-panel" id="star_img_panel">
            <!-- 点赞人的头像 -->
          </div>
          <div class="star-info-panel">
            <span class="star-count">0</span>人点赞
            <span class="star-icon">></span>
          </div>
        </li>
        <li class="li-media li-media-bottom">
          <div class="article-meta-img div-media" onclick="mediaDetail('5a741e7433f17c50cc7b1209')">
            <!-- 公众号头像 -->
            <img id="portraitUrlBottom" src="https://wander.wallan-tech.com:1443/media-app/media/download/THUMB/NEWS-5a741ea5963a654b84e35d7b" class="img-media">
          </div>
          <div class="article-meta-info div-media">
            <div class="article-meta-name" id="article_mediaNameBottom" onclick="mediaDetail('5a741e7433f17c50cc7b1209')">
            <!-- 公众号名字 -->
            </div>
            <div class="media-fans" id="media-fans">
              <!-- 粉丝数和关注数 -->
            </div>
          </div>
          <div class="article-meta-follow div-media" id="follow2">
            <!-- 公众号ID -->
          </div>
        </li>
        <li class="li-advert">
          <img src="/bomb/img/advert.png">
        </li>
        <li class="li-recommend">
          <p class="recommend-title">推荐你看</p>
          <div class="article-list" onclick="recommendArticleDetail('5a97ce3233f17c7ec8a7c858')">
            <div class="article-cover">
              <img src="http://wander.dev.wallan.tech/media-app/media/download/THUMB/NEWS-5a6d43fe963a6514a836dd41">
            </div>
            <div class="article-info">
              <p class="article-title">原创少女心爆棚！15个梦幻可爱的全粉色打卡地大盘点！</p>
              <span class="article-media">携程旅行</span>
              <span class="article-comment-icon"><img src="/bomb/img/comment.png"></span>
              <span class="article-comment-count">60</span>
              <span class="article-date">12:12</span>
            </div>
          </div>
          
          <div class="article-list" onclick="recommendArticleDetail('5a97ce3233f17c7ec8a7c858')">
            <div class="article-cover">
              <img src="http://wander.dev.wallan.tech/media-app/media/download/THUMB/NEWS-5a6d43fe963a6514a836dd41">
            </div>
            <div class="article-info">
              <p class="article-title">原创少女心爆棚！15个梦幻可爱的全粉色打卡地大盘点！</p>
              <span class="article-media">携程旅行</span>
              <span class="article-comment-icon"><img src="/bomb/img/comment.png"></span>
              <span class="article-comment-count">60</span>
              <span class="article-date">12:12</span>
            </div>
          </div>
          
          <div class="article-list" onclick="recommendArticleDetail('5a97ce3233f17c7ec8a7c858')">
            <div class="article-cover">
              <img src="http://wander.dev.wallan.tech/media-app/media/download/THUMB/NEWS-5a6d43fe963a6514a836dd41">
            </div>
            <div class="article-info">
              <p class="article-title">原创少女心爆棚！15个梦幻可爱的全粉色打卡地大盘点！</p>
              <span class="article-media">携程旅行</span>
              <span class="article-comment-icon"><img src="/bomb/img/comment.png"></span>
              <span class="article-comment-count">60</span>
              <span class="article-date">12:12</span>
            </div>
          </div>
        </li>
        <li class="li-hot-chat">
          <div id="topic_hot_chat" class="topic-hot-chat">
            <div class="topic-hot-chat-title">
              <img src="/bomb/img/personalinformation.png">
              <span>我们正在热聊</span>
            </div>
            <div class="topic-hot-chat-name">
              <span>咱们坐船出游吧</span>
            </div>
            <div class="topic-hot-chat-portrait">
              <img src="http://wander.dev.wallan.tech/media-app/media/download/THUMB/NEWS-5a65826b963a654b5df7b206">
              <img src="http://wander.dev.wallan.tech/media-app/media/download/THUMB/NEWS-5a65826b963a654b5df7b206">
              <img src="http://wander.dev.wallan.tech/media-app/media/download/THUMB/NEWS-5a65826b963a654b5df7b206">
              <img src="http://wander.dev.wallan.tech/media-app/media/download/THUMB/NEWS-5a65826b963a654b5df7b206">
              <img src="http://wander.dev.wallan.tech/media-app/media/download/THUMB/NEWS-5a65826b963a654b5df7b206">
            </div>
            <div class="topic-hot-chat-join">
              <span>2.67万</span>人参与话题，快来加入我们
              <!--<img src="/bomb/img/personalinformation_more.png">-->
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
	export default{
	  data(){
	    return {
	      title:'why',
	    }
	  }
	}
</script>

<style>
  .container{
  font-family: 'Microsoft YaHei','Helvetica','Arial',sans-serif;
  font-size: 14px;
}
.detail ul{
  -webkit-padding-start: 0;
}
.detail{
  margin: auto;
  padding: 0 30px;
  border-top: solid 1px #eeeeee;
}
.detail ul li{
  list-style-type: none;
  width: 100%;
  float: none;
}
.li-channel{
  color: #333333;
  font-size: 28px;
  margin-top: 30px;
}
.li-title{
  margin-top: 30px;
  font-size: 44px;
  color: #333333;
  font-weight: bold;
}
.li-media{
  margin-top: 40px;
  height: 80px;
}
.detail ul li .div-media{
  float: left;
}
.img-media{
  border-radius: 50%;
  width: 80px;
}
.detail ul li .article-meta-follow{
  float: right;
  line-height: 64px;
}
.article-meta-info{
  margin-left: 30px;
}
.article-meta-info .article-meta-name{
  font-size: 30px;
  color: #333333;
}
.article-meta-info .article-meta-date{
  color: #999999;
  font-size: 22px;
  margin-top: 7px;
}
.li-content{
  margin-top: 80px;
}
.li-content p {
  font-size: 32px;
  color: #333333;
  line-height: 50px;
}
.li-keywords{
  margin-top: 80px;
}
.li-keywords span {
  border: solid 1px #426fa1;
  border-radius: 15px;
  padding: 0 10px;
  font-size: 24px;
  color: #436fa0;
  height: 50px;
  display: -webkit-inline-box;
  line-height: 50px;
  margin-top: 5px;
}
.li-keywords span:nth-child(n+2){
  margin-left: 20px;
}
.li-footer{
  color: #807a7a;
  line-height: 60px;
  height: 60px;
  margin-top: 5%;
}
.li-footer span.footer-author{
  margin-left: 20px;
  font-size: 24px;
  color: #999999;
}
.li-footer span.footer-source{
  font-size: 24px;
  color: #999999;
}
a{
  color: #436fa0;
  text-decoration: none;
}
.li-footer a{
  color: #436fa0;
  font-size: 28px;
  text-decoration: none;
}
.li-footer .footer-panel{
  float: right;
}
.article-meta-follow span{
  border-radius: 30px;
  width: 140px;
  height: 60px;
  font-size: 28px;
  display: block;
  text-align: center;
}
.article-meta-follow span.media-un-follow{
  border: solid 1px #00d9b7;
  color: #00d8b7;
}
.article-meta-follow span.media-follow{
  border: solid 1px #cccccc;
  color: #999999;
}
.li-content img{
  width: 100%;
  /* margin-left: -30px;
    width: -webkit-calc(100% + 60px);
    width: -moz-calc(100% + 60px);
    width: calc(100% + 60px); */
  margin: 60px auto 0;
    /*max-height: 460px;*/
    /*max-width: 100%;*/
  display: block;
}
img+p {
  margin-top: 60px;
}
.li-star{
  margin-top: 80px;
  height: 30px;
}
.li-star .div-star{
  float: right;
}
.li-star .div-star img{
  transition: width 2s;
  -webkit-transition: width 2s;
}
.li-star span{
  margin-left: 8px;
  font-size: 24px;
  color: #999999;
}
.li-star-panel{
  margin-top: 30px;
  line-height: 60px;
  height: 90px;
  border-bottom: solid 1px #eeeeee;
}
.li-star-panel .star-img-panel{
  float: left;
}
.li-star-panel .star-img-panel img{
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
.li-star-panel .star-img-panel img:nth-child(n+2){
  margin-left: 20px;
}
.li-star-panel .star-info-panel{
  float: right;
  font-size: 24px;
  color: #999999;
}
.li-star-panel .star-icon{
  margin-left: 20px;
}
.li-media-bottom .media-fans{
  color: #999999;
  font-size: 22px;
  margin-top: 7px;
}
.li-media-bottom .media-fans span:nth-child(2){
  margin-left: 24px;
}
.li-advert{
  margin-top: 60px;
}
.li-advert img{
  margin-left: -30px;
  width: -webkit-calc(100% + 60px);
  width: -moz-calc(100% + 60px);
  width: calc(100% + 60px);
}
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
/*话题热聊*/
.li-hot-chat{
  margin-top: 80px; 
  font-size: 24px;
  color: #ffffff;
}
.li-hot-chat .topic-hot-chat{
  width: -webkit-calc(100% + 60px);
  width: -moz-calc(100% + 60px);
  width: calc(100% + 60px);
  height: 400px;
  margin-left: -30px;
  background-repeat: no-repeat;
  background-size: 100%;
}
.li-hot-chat .topic-hot-chat-title{
  text-align: center;
  font-size: 24px;
  color: #ffffff;
}
.li-hot-chat .topic-hot-chat-title img{
  margin-top: 50px;
  width: 24px;
}
.li-hot-chat .topic-hot-chat-name{
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  margin-top: 30px;
}
.li-hot-chat .topic-hot-chat-portrait{
  text-align: center;
  margin-top: 44px;
}
.li-hot-chat .topic-hot-chat-portrait img{
  border-radius: 50%;
  width: 60px;
}
.li-hot-chat .topic-hot-chat-portrait img:nth-child(n+2){
  margin-left: 16px;
}
.li-hot-chat .topic-hot-chat-join{
  text-align: center;
  font-size: 24px;
  color: #ffffff;
  font-weight: bold;
  margin-top: 24px;
}
.li-hot-chat .topic-hot-chat-join img{
  margin-left: 20px;
}

.container .images,.video{
  border-top: solid 1px #333333;
  background-color: #222222;
}
.images .article-meta-info .article-meta-name,.video .article-meta-info .article-meta-name{
  color: #ffffff;
}
.images .article-meta-info .article-meta-date,.video .article-meta-info .article-meta-date{
  color: #999999;
}
.images .li-title,.video .li-title{
  color: #ffffff;
}
.images .li-content,.video .li-content{
  color: #ffffff;
}
.images .li-recommend .recommend-title,.video .li-recommend .recommend-title{
  color: #ffffff;
}
.images .li-recommend .article-list div.article-info,.video .li-recommend .article-list div.article-info{
  background-color: #282828;
}
.images .li-recommend .article-list div.article-info .article-title,.video .li-recommend .article-list div.article-info .article-title{
  color: #ffffff;
}
.play-count{
  color: #ffffff;
  font-size: 28px;
}
.li-video-channel{
  margin-top: 30px;
}
.video-channel{
  margin-left: 20px;
  border-radius: 30px;
  font-size: 24px;
  color: #333333;
  height: 40px;
  background-color: #ffffff;
  opacity: 0.6;
  display: inline-block;
  padding: 0 20px;
}
.images .li-channel{
  color: #ffffff;
}
.images .li-content .content-group{
  /* padding-top: 60px; */
}
.images .li-content .content-group .content-desc{
  margin-top: 20px;
  font-size: 24px;
  color: #999999;
}
</style>