<template>
  
  <div class="indexContainer withHeader">
    <headers></headers>
    <div>
      <top-menu-bar></top-menu-bar>
      <div id="div1" class="content0">
        <div class="scroll_bar">
          <div class="bar1">⇣</div>
          <div class="bar2">下拉刷新</div>
        </div> 
        <div id="div2">
          <content id="pageletListContent" class="feed-list-container">
            <div class="list-content">
              <!--<transition-group enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">-->
                
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
                
                
              <!--</transition-group>-->
              
            </div>
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
import TopMenuBar from '../components/TopMenuBar.vue'
import axios from 'axios'
//自己封装的函数方法
import {getScrollTop,getScrollHeight,getWindowHeight,ajaxJSON} from '../assets/js/MobileFun.js'
import {formatDate} from '../assets/js/Date.js'

export default {
  name: 'Home',
  components:{
    'headers':Headers,
    'top-menu-bar':TopMenuBar
  },
  filters:{
    formatDate(time){
      var date = new Date(time);
      return formatDate(date,'yyyy-MM-dd hh:mm');
    }
  },
  data () {
    return {
      msg: '首页新闻',
      loading : true,
      articles:[]
    }
  },
  methods:{
    getDatas(){
      axios.get('http://houyishuai.dev.dc.wallan-tech.com').then(function (res){
        console.log(res.data);
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
    this.getDatas(); 
    
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
            axios.get('http://houyishuai.dev.dc.wallan-tech.com').then(function(res){  
            console.log(res.data);  
              // 将新获取的数据push到vue中的data，就会反应到视图中了  
              res.data.articles.forEach(function(val,index){  
                _this.articles.push(val);  
                //console.log(val);  
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
        flag:this.routerChange
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
