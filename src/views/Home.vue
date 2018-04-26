<template>
  <div class="indexContainer withHeader">
  	<!--头部-->
    <headers :isRotate="isRotate"></headers>
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
          <div class="bar1" v-if="status1">⇣</div>
          <div class="bar1" v-if="status2">⇡</div>
          <div class="bar1" v-if="status3"><img src="../assets/images/onload.gif" alt="加载中" width="38"></div>
          <div class="bar2" v-if="status1">下拉刷新</div>
          <div class="bar2" v-if="status2">释放刷新</div>
          <div class="bar2" v-if="status3">正在刷新</div>
        </div>
        <div id="div2" ref="div2">
          <content id="pageletListContent" class="feed-list-container">
            <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
              <div class="list-content animated">
                <section class="middle_mode has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="0" v-for="(item,index) in articleList" :key="index">
                  <router-link :to="{
                    name:'newsDetail',
                    query:{id:item.articleId}
                    }" class="article_link clearfix " data-action-label="" data-tag="">
                    <div class="item_detail" :class="(item.coverNum==1)? 'desc':''">
                      <h3 class="dotdot line2" :class="(item.coverNum==1)?'image-margin-right':''">
                        {{item.title}}
                      </h3>
                      <div class="item_info">
                        <div>
                          <span class="hot_label space">热</span>
                          <span class="src space">{{item.originAuthor}}</span>
                          <span class="cmt space">点击 {{item.reads}}</span>
                          <span class="time">{{item.time | formatDate}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="list_img_holder" v-if="item.coverNum==1">
                      <img :src="item.coverUrl">
                    </div>
                  </router-link>
                </section>  
              </div>
            </transition>
            <div class="list_bottom">
              <section class="loadmoretip" v-show="!loaded">
                <a href="#">加载中...</a>
              </section>
              <section class="loadmoretip" v-show="noData">
                <a href="#">暂无数据...</a>
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
  	tabScroll(){
      window.addEventListener("scroll",this.handleScroll);
    },
    handleScroll(){
      // 判断是否滚动到底部  
      if(getScrollTop() + getWindowHeight() >= (getScrollHeight() - 30)) {    
        // 如果开关打开则加载数据  
        if(this.sw==true){  
          // 将开关关闭  
          this.sw = false; 
          this.loaded = false;
          // 此处使用node做了代理
          this.loadMoreDatas({
            kind:this.$route.query.type,
          },false);
        }  
      }  
    },
    getDatas(pay){
      console.log("加载文章列表...");
     //调用axios plugin
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json;',
          'WALLAN-TOKEN': '5d4139e70b35803e75414ddef0f57cd9',
          'WALLAN-DEVICENUM':'12000000000'
        },
        url:this.GLOBAL.serverUrl+'/media-dc/index'+'?tag='+pay.kind
      };
      axios(options)
        .then(function (res){
          console.log(res.data);
          console.log(pay.kind);
          if(!res.data.data){
            this.noData = true;
          }
          this.loaded = true;
          this.articleList = res.data.data;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    },
    loadMoreDatas(payload,mode){
      console.log("加载更多文章...");
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json;',
          'WALLAN-TOKEN': '5d4139e70b35803e75414ddef0f57cd9',
          'WALLAN-DEVICENUM':'12000000000'
        },
        url:mode?this.GLOBAL.serverUrl+'/media-dc/more'+'?tag='+payload.kind+'&type=new':this.GLOBAL.serverUrl+'/media-dc/more'+'/?tag='+payload.kind+'&type=history'
      };
      axios(options)
          .then(function(res){
            console.log(payload.kind);
            console.log(res.data); 
            // 将新获取的数据push到vue中的data，就会反应到视图中了
            let _this = this;
            res.data.data.forEach(function(val,index){  
//            console.log(val);
							if(!mode){
	              _this.articleList.push(val); 
							}else{
	              _this.articleList.unshift(val); 
							}
            });  
            // 数据更新完毕，将开关打开  
            this.sw = true;  
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
          this.status1=true;
          this.status2=false;
          
          oDiv1.style.transform = "translate(0px, "+ x +"px)";
          
          this.flag = false;
          return false;
        }else if(x >= 120 && Math.abs(x) < 156){
          this.status1=false;
          this.status2=true;
          oDiv1.style.transform = "translate(0px, "+ x +"px)";
          //console.log(x);
          this.flag = true;
          return false;
        } 
        
      }
    })
    oDiv2.addEventListener('touchend', (e) => {
      console.log('touchend');
      this.isdrag = false;
      
      if(this.flag){
        this.status2=false;
        this.status3=true;
//      document.querySelector(".refresh_btn").className += (' '+'rotate');//转动标题栏的图标
				this.isRotate = true;
          //document.location.reload();//1秒后重新加载当前页面
				this.loadMoreDatas({
          kind:this.$route.query.type,
        },true);
        let _this = this;
    		setTimeout(function(){
        	_this.status1=true;
					_this.status3=false;
    			oDiv1.style.transform = "translate(0px, -4px)";
    			_this.isRotate = false;
        },500);
      }else{
        this.status1=true;
        this.status2=false;
        oDiv1.style.transform = "translate(0px, -4px)";
      }    
    })
  },
  beforeDestroy(){
    window.removeEventListener("scroll",this.handleScroll);
  },
  destroyed(){
    //销毁后
    console.log("homePage destroyed");
    
  },
  watch:{
    
    //监听路由的type类型改变
    '$route':function(){
      console.log('监听到路由变化了');
      this.loaded = false;
      this.noData = false;
//    console.log(this.loaded);
      if(this.$route.query.type){
        this.getDatas({
          kind:this.$route.query.type,
        });
      }
      
      //document.body.scrollTop = document.documentElement.scrollTop = 0;//滚动条回到顶部
      this.first = window.location.search.substring(6);
    },
  },
  data () {
    return {
      isDesc:false,
    	isRotate:false,
      loaded: false,
      noData:false, 
      articleList:[],
      status1:true,
      status2:false,
      status3:false,
//    mode:false,
      //频道
        navbar:[
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
