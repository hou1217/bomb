<template>
  <div class="indexContainer withHeader">
    <!--头部-->
    <headers @refreshNews="refreshDatas" :isRotate="isRotate"></headers>
    <div class="tips" style="" v-show="tips"><span class="">为您推荐了{{newsNums}}篇文章</span></div>
    <div>
	    <div class="top_menu_bar">
		    <div class="top_menu_more">
		      <div class="list_shadow"></div>
		      <a class="more_btn" href="javascript:void(0)"></a>
		    </div>
		    <div class="top_menu_list">
		      <router-link :to="{path:item.url,query:{type:item.type}}" :data-channel="item.type" :data-query="'channel='+item.type" class="btn" v-for='(item,index) in navbar' :key="index">
		        {{item.text}}
		      </router-link>
		    </div>
		  </div>
		  <div id="content0" ref="content0" class="content0" >
        <div class="scroll_bar">
          <div class="bar1" v-if="status1">⇣</div>
          <div class="bar1" v-if="status2">⇡</div>
          <div class="bar1" v-if="status3"><img src="../assets/images/onload.gif" alt="加载中" width="38"></div>
          <div class="bar2" v-if="status1">下拉刷新</div>
          <div class="bar2" v-if="status2">释放刷新</div>
          <div class="bar2" v-if="status3">正在加载</div>
        </div>
        <div id="content1" ref="content1">
          <content id="pageletListContent" class="feed-list-container">
            <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
              <div class="list-content animated">
                <!--<section class="has_action">
                  <iframe src="http://www.doudou.in/game/play-96930.html" frameborder="0"  width="100%" height="1126" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </section>-->
                <section class="has_action" :class="(item.type=='IMAGE_TEXT')?'middle_mode':''" v-for="(item,index) in articleList" :key="index">
                  <router-link :to="{
                    name:'newsDetail',
                    query:{id:item.articleId}
                    }" class="article_link clearfix ">
                    <div class="item_detail" :class="(item.type=='IMAGE_TEXT')? 'desc':''">
                      <h3 class="dotdot line2" :class="(item.type=='IMAGE_TEXT')?'image-margin-right':''">
                        {{item.title}}
                      </h3>
                      <div class="list_image" v-if="item.type=='IMAGE_GROUP'">
                        <ul class="clearfix">
                          <li class="list_img_holder" v-for="value in item.coverUrl.split(',')">
                            <img :src="value" alt="">
                          </li>
                        </ul>
                      </div>
                      <div class="list_img_holder_large" v-if="item.type=='VIDEO'">
                          <video playsinline webkit-playsinline  preload="none" controls="true"
                           :poster="item.coverUrl" :src="item.url">
                          </video>
                      </div>
                      <div class="item_info">
                        <div>
                          <span class="hot_label space" v-if="item.feature">{{item.feature}}</span>
                          <span class="src space">{{item.originAuthor}}</span>
<!--                          <span class="cmt space">点击 {{item.reads}}</span>-->
                          <span class="time">{{item.time | formatDate}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="list_img_holder" v-if="item.type=='IMAGE_TEXT'">
                      <img :src="item.coverUrl">
                    </div>

                  </router-link>
                  <div class="last-read" v-if="index==(newsNums-1)?true:false" @click="refreshDatas()">
                    <div class="text">刚刚阅读到这里，点击刷新</div>
                  </div>
                  
                </section>  
              </div>
            </transition>
            <div class="list_bottom">
              <section class="loadmoretip" v-show="!loaded">
                <a href="#">加载中...</a>
              </section>
              <section class="loadmoretip" v-show="noMore">
                <a href="#">没有更多了</a>
              </section>
              <section class="loadmoretip" v-show="noData">
                <a href="#">暂无数据</a>
              </section>
            </div>
          </content>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import Headers from '../components/Headers.vue'
//import PullRefresh from '../components/PullRefresh.vue'
//import TopMenuBar from '../components/TopMenuBar.vue'


import axios from 'axios'
//自己封装的函数方法
import {getScrollTop,getScrollHeight,getWindowHeight,ajaxJSON} from '../assets/js/MobileFun.js'
import {formatDate,relativeTime} from '../assets/js/Date.js'

export default {
  name: 'Home',
  components:{
    'headers':Headers,
//  'pullRefresh':PullRefresh,
  },
  filters:{
    formatDate(time){
      var date = new Date(time);
//    return formatDate(date,'yyyy-MM-dd hh:mm');
      return relativeTime(time);
    }
  },
  
  
  methods:{
    refreshDatas(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;//滚动条回到顶部
      this.loadMoreDatas({
        kind:this.$route.query.type,
      },true);
    },
  	tabScroll(){
  	  if(document.body){
        document.addEventListener("scroll",this.handleScroll);
  	  }
    },
    handleScroll(){
      // 判断是否滚动到底部  
      if(getScrollTop() + getWindowHeight() >= (getScrollHeight() - 180) && !this.noData ) {    
        // 如果开关打开则加载数据  
        if(this.sw==true){  
          // 将开关关闭  
          this.sw = false; 
         
          // 加载更多的数据
          this.loadMoreDatas({
            kind:this.$route.query.type,
          },false);
        }  
      }  
    },
    touchStart(){
      this.$refs.content1.addEventListener('touchstart', this.start)
    },
    start(e){
      console.log('touchstart');
      this.isdrag = true;
      this.disX = e.touches[0].pageX;
      this.disY = e.touches[0].pageY;
      return false;
    },
    touchMove(){
      this.$refs.content1.addEventListener('touchmove', this.move)
    },
    move(e){
      /*
       * flag是触发ajax的核心开关，flag默认为false，当flag为true时可触发ajax
       * 需要同时满足滚动条位置在顶部和手指触屏才行，否则flag为false
       * x是手指在屏幕上水平滑动的距离,x>0,向右滑动;x<0,向左滑动
       * y是手指在屏幕上竖直滑动的距离,y>0,向下滑动;y<0,向上滑动
       * */
      if(this.isdrag && getScrollTop() == 0) {
        //let x = e.touches[0].pageX - this.disX;
        let y = e.touches[0].pageY - this.disY;
        this.$refs.content0.style.transition = "transform ease-out 100ms";
        /*if(x > 150 && document.querySelector(".router-link-active").nextElementSibling && this.flag3){
          console.log('右滑切换频道');
          document.querySelector(".router-link-active").nextElementSibling.click();
          this.flag3 = false;
          
          return false;
        }else if(x < -150 && document.querySelector(".router-link-active").previousElementSibling && this.flag3){
          console.log('左滑切换频道');
          document.querySelector(".router-link-active").previousElementSibling.click();
          this.flag3 = false;
          
          return false;
        }*/
        if( y > 0 && y < 120) {
          this.status1=true;
          this.status2=false;
          this.$refs.content0.style.transform = "translate(0px, "+ y +"px)";
          this.flag = false;
          return false;
        }else if(y >= 120 && y <= 160){
          this.status1=false;
          this.status2=true;
          this.$refs.content0.style.transform = "translate(0px, "+ y +"px)";
          this.flag = true;
          return false;
        }
        
      }else{
        this.flag = false;
      }
    },
    touchEnd(){
      this.$refs.content1.addEventListener('touchend', this.end)
    },
    end(e){
      console.log('touchend');
      this.isdrag = false;
      this.flag3 = true;
      this.$refs.content0.style.transition = "transform ease-out 300ms";

      
      if(this.flag){
        this.$refs.content0.style.transform = "translate(0px,100px)";
        
        this.status2=false;
        this.status3=true;
        this.loadMoreDatas({
          kind:this.$route.query.type,
        },true);
        this.flag = false;
        
      }else{
        this.status1=true;
        this.status2=false;
        this.$refs.content0.style.transform = "translate(0px, 0px)";
      }    
    },
    getDatas(pay){
      document.body.scrollTop = document.documentElement.scrollTop = 0;//滚动条回到顶部
      if(this.flag2){
        this.flag2 = false;
        console.log(new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds());
        console.log("加载文章列表。");
        //调用axios plugin
        const options = {
          method: 'GET',
          headers: {
            'content-type': 'application/json;',
            'WALLAN-TOKEN': '5d4139e70b35803e75414ddef0f57cd9',
            'WALLAN-DEVICENUM':'12000000000',
            'USERNAME':sessionStorage.getItem("username")
          },
          url:this.GLOBAL.serverUrl+'/media-dc/index'+'?tag='+pay.kind
        };
        axios(options)
          .then(function (res){
            //console.log('当前页是：'+pay.kind);
            console.log('加载的数据：');
            console.log(res.data);
            //console.log(res.data.data[0].coverUrl.split(','))
            //当没有数据或者数据为0的时候，显示'暂无数据'，'加载中'不显示
            if(!res.data.data || res.data.data.length == 0){
              this.noData = true;
              this.loaded = true;
            }
           
            this.articleList = res.data.data;
            //本地session存储
            sessionStorage.setItem("data",JSON.stringify(this.articleList));  
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });
        this.flag2 = true;
      }
     
    },
    loadMoreDatas(payload,mode){
      this.isRotate = true;
      this.loaded = false;
      this.noMore = false;
      this.noData = false;
      console.log(new Date());
      console.log("加载更多文章。");
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json;',
          'WALLAN-TOKEN': '5d4139e70b35803e75414ddef0f57cd9',
          'WALLAN-DEVICENUM':'12000000000',
          'USERNAME':sessionStorage.getItem("username")
        },
        url:mode?this.GLOBAL.serverUrl+'/media-dc/more'+'?tag='+payload.kind+'&type=new':this.GLOBAL.serverUrl+'/media-dc/more'+'/?tag='+payload.kind+'&type=history'
      };
      axios(options)
          .then(function(res){
            //console.log('当前页是：'+payload.kind);
            console.log('新的数据：');
            console.log(res.data.data); 
            
            // 将新获取的数据加入到vue中的data，就会反应到视图中了
            let _this = this;
            if(res.data.data){
              if(res.data.data.length == 0){
                setTimeout(function(){
                  _this.loaded = true;
                  _this.noMore = true;
                },700);
              }
              //分2种情况进行处理：1.新数据填到原数组后面；2.新数据填到原数组前面
              if(!mode){
                console.log("在原数组后面添加新数据");
                this.articleList=this.articleList.concat(res.data.data);
              }else{
                this.articleList=res.data.data.concat(this.articleList);
               
                //让scroll_bar回到初始位置
                this.status1=true;
                this.status3=false;
                this.$refs.content0.style.transform = "translate(0px, 0px)";
                 
                //tips显示推荐了多少篇文章，2s后关闭tips；当newsNums不为0时才显示tips
                this.newsNums = res.data.data.length;
                if(this.newsNums != 0){
                  this.tips=true;
                  setTimeout(function(){
                    _this.tips=false;
                  },2000);
                }
                
               
              }
              /*res.data.data.forEach(function(val,index){  
                //console.log(val);
                
                if(!mode){
                  _this.articleList.push(val);
                }else{
                  _this.articleList.unshift(val); 
                }
              });*/
            }else{
              this.loaded = true;
              this.noMore = true;
              //让scroll_bar回到初始位置
              this.status1 = true;
              this.status3 = false;
              this.$refs.content0.style.transform = "translate(0px, 0px)";
            }
            //本地缓存一下
            sessionStorage.setItem("data",JSON.stringify(this.articleList));  
            // 数据更新完毕，将开关打开  
            this.sw = true; 
            setTimeout(function(){
              _this.isRotate = false;
            },700);
          }.bind(this))  
          .catch(function(error){  
            console.log(error);  
          });  
    }

  },
  
  mounted(){
    //加载完成后执行
    this.getDatas({
      kind:this.$route.query.type,
    });
//  console.log(this.GLOBAL.serverUrl);
//  console.log(this.$route.query.type);
    this.tabScroll();
    this.touchStart();
    this.touchMove();
    this.touchEnd();
  },
  beforeDestroy(){
    //销毁前
    window.removeEventListener("scroll",this.handleScroll);
  },
  destroyed(){
    //销毁后
    console.log("homePage destroyed");
    
  },
  watch:{
    //监听路由的type类型改变
    '$route'(to,from){
        this.sw = true;
        this.newsNums = 0;
        this.noMore = false;
        this.loaded = false;
        this.noData = false;
        //console.log(this.loaded);
        //console.log(from.name);
        //console.log(to.name);
        //console.log(this.articleList);
        
        //特殊情况判断：如果是从home页进入详情页或者从详情页进入home页都不加载新的数据
        if(from.name === 'newsDetail' && to.name === 'Home'){
          console.log('从详情页返回home页！');
          //打开开关
          this.sw = true;
          return false;
        }else if(to.name === 'newsDetail' && from.name === 'Home'){
          console.log('从home页进入详情页！');
          //关闭开关
          this.sw = false;
          return false;
        }
        //根据路由的type类型从而加载新的数据
        this.getDatas({
          kind:this.$route.query.type,
        });
        
        //滚动条回到顶部
        //document.body.scrollTop = document.documentElement.scrollTop = 0;
        //this.first = window.location.search.substring(6);
      
      
    },
  },
  data () {
    return {
      isRotate:false,
      flag3:true,
      tips:false,
      newsNums:0,
      flag2:true,
      isDesc:false,
      noMore : false,
      loaded: false,
      noData:false, 
      articleList:[],
      status1:true,
      status2:false,
      status3:false,
      //first:window.location.search.substring(6),
      sw:true,
      isdrag : false,
      NowTop : 100,
      flag   : false,
      moveY : 0,
      toTop : 0,
      disEndY : 0,
      disX : 0,
      disY : 0,
      //频道列表
      navbar:[
        {
          text:'最新',
          url:'/home/newest',
          type:'news_newest',
        },
        {
          text:'推荐',
          url:'/home/all',
          type:'__all__',
        },
        {
          text:'关注',
          url:'/home/focus',
          type:'news_focus'
        },
        {
          text:'热点',
          url:'/home/hot',
          type:'news_hot'
        },
      ],
        
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tips{
    display: block;
    position: fixed;
    top: 162px;
    left: 0;
    z-index: 1000;
    width: 100%;
    min-height: 60px;
    line-height: 40px;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    word-break: break-all;
    color: #2a90d7;
    font-size: 28px;
    background-color: rgba(213, 233, 247, 0.9);
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  .feed-list-container{
    min-height: 1000px;
  }
  .last-read {
    display: block;
    height: 80px;
    line-height: 80px;
    color: rgb(68, 138, 255);
    font-size: 28px;
    background-color: rgb(240, 246, 255);
    text-align: center;
    text-decoration: none;
  }
  .list_img_holder_large video{
    background-color:#000;
    width:100%;
    height:100%;
  }
</style>
