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

      <div id="div1" class="content0">
        <div class="scroll_bar">
          <div class="bar1">⇣</div>
          <div class="bar2">下拉刷新</div>
        </div> 
        <div id="div2">
          <content id="pageletListContent" class="feed-list-container">

            <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
            	<div class="list-content animated">

                <section class="middle_mode has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="0" v-for="(item,index) in articles" :key="index">
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

//import TopMenuBar from '../components/TopMenuBar.vue'

import axios from 'axios'
//自己封装的函数方法
import {getScrollTop,getScrollHeight,getWindowHeight,ajaxJSON} from '../assets/js/MobileFun.js'
import {formatDate} from '../assets/js/Date.js'

export default {
  name: 'Home',
  components:{
    'headers':Headers,
  },
  filters:{
    formatDate(time){
      var date = new Date(time);
      return formatDate(date,'yyyy-MM-dd hh:mm');
    }
  },

  
  methods:{
  	
    getDatas(pay){

      axios.get('http://192.168.2.209:8086/?tag='+pay.kind).then(function (res){
        console.log(res.data);
    	  console.log(pay.kind);
        

        this.loading = false;
        this.articles = res.data.articles;
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
    },

  },
  
  mounted(){
    
    // 缓存指针  
    let _this = this;  
    // 设置一个开关来避免重负请求数据  
    let sw = true;  

    // 此处使用node做了代理
    console.log(this.first);
    this.getDatas({
    	kind: this.first
    });

    window.addEventListener('scroll',function(){  
         //console.log(getScrollTop());  
         //console.log(getWindowHeight()); 
         //console.log(getScrollHeight());  
        // 判断是否滚动到底部  
        if(getScrollTop() + getWindowHeight() >= getScrollHeight()) {  
            // console.log(sw);  
            // 如果开关打开则加载数据  
          if(sw==true){  
            // 将开关关闭  

            sw = false; 
            console.log(2);
			    	axios.get('http://192.168.2.209:8086').then(function(res){  
			        console.log(res.data);  
			          // 将新获取的数据push到vue中的data，就会反应到视图中了  
			          res.data.articles.forEach(function(val,index){  
			          	_this.articles.push(val); 
			          });  
			          // 数据更新完毕，将开关打开  
			          sw = true;  
			        })  
			        .catch(function(error){  
			          console.log(error);  
			        });    
             

          }  
        }  
    });  
          
  },
  watch:{
    '$route':function(){
      this.getDatas({
        kind:this.$route.query.type,

      });
      this.first = window.location.search.substring(6);
    },
    
  },
  data () {
    return {
      msg: '首页新闻',
      loading : true,
      articles:[],
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
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
