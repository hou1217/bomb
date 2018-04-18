<template>
  
  <div class="indexContainer withHeader">

  	<!--头部-->
    <headers></headers>
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
		  <div id="div1" ref="div1" class="content0" >
        <div class="scroll_bar">
          <div class="bar1">⇣</div>
          <div class="bar2">下拉刷新</div>
        </div>
        <div id="div2" ref="div2">
          <content id="pageletListContent" class="feed-list-container">
            <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
              <div class="list-content animated">
                <section class="middle_mode has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="0" v-for="(item,index) in articleList" :key="index">
                  <router-link 
                    :to="{
                      name:'newsdetail',
                      params:
                        {   id:item.articleId,
                            title:item.title,
                            media_id:item.media.id,
                            media_name:item.media.name,
                            time:item.time,
                            keywords:item.keywords
                        }
                    }" class="article_link clearfix " data-action-label="" data-tag="">
                    
                    
                    <div class="item_detail desc">
                      <h3 class="dotdot line2 image-margin-right">
                        {{item.title}}
                      </h3>
                      <div class="item_info">
                        <div>
                          <span class="hot_label space">热</span>
                          <span class="src space">生活就是娱乐</span>
                          <span class="cmt space">评论 30</span>
                          <span class="time" title="2018-04-12 09:34">{{item.time | formatDate}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="list_img_holder">
                      <img :src="item.coverUrl">
                    </div>
                  </router-link>
                </section>  
              </div>
            </transition>
            <div class="list_bottom">
              <section class="loadmoretip">
                <a href="#">加载中...</a>
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
import {formatDate} from '../assets/js/Date.js'

export default {
  name: 'Home',
  components:{
    'headers':Headers,
//  'pullRefresh':PullRefresh,
  },
  filters:{
    formatDate(time){
      var date = new Date(time);
      return formatDate(date,'yyyy-MM-dd hh:mm');
    }
  },

  
  methods:{
  	
    getDatas(pay){
      axios.get('http://192.168.2.209:8086/?tag='+pay.kind)
        .then(function (res){
          console.log(res.data);
      	  console.log(pay.kind);
          this.loading = false;
          this.articleList = res.data.articles;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    },
    loadMoreDatas(payload){
      console.log("加载新的数据了.....");
      axios.get('http://192.168.2.209:8086/?tag='+payload.kind)
          .then(function(res){
            console.log(payload.kind);
            console.log(res.data); 
//          console.log(this.articleList);
            // 将新获取的数据push到vue中的data，就会反应到视图中了
            let _this = this;
            res.data.articles.forEach(function(val,index){  
//            console.log(val);
              _this.articleList.push(val); 
            });  
            // 数据更新完毕，将开关打开  
            this.sw = true;  
          }.bind(this))  
          .catch(function(error){  
            console.log(error);  
          });  
    }

  },
  created(){
    
  },
  mounted(){
    //加载完成后执行
    this.getDatas({
      kind:this.$route.query.type,
    });
    console.log(this.$route.query.type);
    window.addEventListener('scroll',()=>{   
        // 判断是否滚动到底部  
        if(getScrollTop() + getWindowHeight() >= getScrollHeight()) {    
          // 如果开关打开则加载数据  
          if(this.sw==true){  
            // 将开关关闭  
            this.sw = false; 
            // 此处使用node做了代理
            this.loadMoreDatas({
              kind:this.$route.query.type,
            });
          }  
        }  
    });
    const oDiv2 = this.$refs.div2;
    const oDiv1 = this.$refs.div1;
    oDiv2.addEventListener('touchstart', (e) => {
      console.log('touchstart');
      this.isdrag = true;
      this.disY = e.touches[0].pageY;
      return false;
    })
    oDiv2.addEventListener('touchmove', (e) => {
      if(this.isdrag) {
        let x = e.touches[0].pageY - this.disY;
        //向下滑动
        if( x > 0 && Math.abs(x) < 120) {
           // oDiv1.css("top",(130+x)+"px");
          oDiv1.style.transform = "translate(0px, "+ x +"px)";
          
          this.flag = false;
          return false;
        }else if(x >= 120 && Math.abs(x) < 156){
          oDiv1.style.transform = "translate(0px, "+ x +"px)";
          //document.querySelector(".bar1").innerHTML = '⇡';
          //document.querySelector(".bar2").innerHTML = '释放刷新';
          console.log(x);
          this.flag = true;
          return false;
        } 
        
      }
    })
    oDiv2.addEventListener('touchend', (e) => {
      this.isdrag = false;
      if(this.flag){
        //document.querySelector(".refresh_btn").className += (' '+'rotate');//转动标题栏的图标
        //document.querySelector(".bar1").innerHTML = '<img src="../images/onload.gif" alt="加载中" width="38">';
        //document.querySelector(".bar2").innerHTML = '正在刷新';
        setTimeout(function () {
          document.location.reload();//1秒后重新加载当前页面
          //$(".list-content").html("内容已经重新加载");
        }, 1000);
      }else{
        oDiv1.style.transform = "translate(0px, -4px)";
      }    
    })
  },
  watch:{
    //监听路由的type类型改变
    '$route':function(){
      
      this.getDatas({
        kind:this.$route.query.type,
      });
      document.body.scrollTop = document.documentElement.scrollTop = 0;//滚动条回到顶部
      
      this.first = window.location.search.substring(6);
    },
    
  },
  data () {
    return {
      msg: '首页新闻',
      loading : true,
      articleList:[],
      //频道
        navbar:[
        {
          text:'推荐',
          url:'/home/all',
          type:'__all__'
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
        first:window.location.search.substring(6),
        sw:true,
        isdrag : false,
        NowTop : 100,
        flag   : false,
        moveY : 0,
        toTop : 0,
        disEndY : 0,
        disY : 0,
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
