<template>
  <li class="li-hot-chat">
    <div id="topic_hot_chat" class="topic-hot-chat">
      <div class="topic-hot-chat-title">
        <img src="../assets/images/personalinformation.png">
        <span>我们正在热聊</span>
      </div>
      <div class="topic-hot-chat-name">
        <span>咱们坐船出游吧</span>
      </div>
      <div class="topic-hot-chat-portrait">
        <img :src="item.url" v-for="(item,index) in lists" :key="index">
      </div>
      <div class="topic-hot-chat-join">
        <span>2.67万</span>人参与话题，快来加入我们
        <img src="../assets/images/personalinformation_more.png">
      </div>
    </div>
  </li>
</template>
<script>
  export default{
    name: 'HotChat',
    data(){
      return{
        lists:[
          {
            url:'http://wander.dev.wallan.tech/media-app/media/download/THUMB/NEWS-5a65826b963a654b5df7b206'
          },
          {
            url:'http://wander.dev.wallan.tech/media-app/media/download/THUMB/NEWS-5a65826b963a654b5df7b206'
          },
          {
            url:'http://wander.dev.wallan.tech/media-app/media/download/THUMB/NEWS-5a65826b963a654b5df7b206'
          }
        ]
      }
    }
  }
</script>
<style scoped>
/*话题热聊*/
.li-hot-chat{
  margin-top: 80px; 
  font-size: 24px;
  color: #fff;
}
.li-hot-chat .topic-hot-chat{
  width: -webkit-calc(100% + 60px);
  width: -moz-calc(100% + 60px);
  width: calc(100% + 60px);
  height: 400px;
  margin-left: -30px;
  background-image: url("http://wander.dev.wallan.tech/media-app/media/download/ORIGIN/NEWS-5a66f227963a654b5dfaf8e1");
  background-repeat: no-repeat;
  background-size: 100%;
}
.li-hot-chat .topic-hot-chat-title{
  text-align: center;
  font-size: 24px;
  color: #fff;
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

</style>