<template>
  <div class="hello">
    
  
  <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
    <a href="javascript: void(0)" data-action-label="click_headline" data-tag="news_politics" class="article_link clearfix ">
      <div class="item_detail">
        <h3 class="dotdot line2">
          {{msg}}
        </h3>
        <div class="item_info">
          <div>
            <span class="stick_label space">置顶</span>
            <span class="src space">生活就是娱乐</span>
            <span class="cmt space">评论 30</span>
            <span class="time" title="2018-04-12 09:15">15分钟前</span>
          </div>
        </div>
      </div>
    </a>
  </section>
  <section class="middle_mode has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
    <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix ">
      <div class="item_detail desc">
        <h3 class="dotdot line2 image-margin-right">
          {{msg}}
        </h3>
        <div class="item_info">
          <div>
            <span class="hot_label space">热</span>
            <span class="src space">生活就是娱乐</span>
            <span class="cmt space">评论 30</span>
          </div>
        </div>
      </div>
      <div class="list_img_holder">
        <img src="../assets/images/new_picture.png">
        <span class="video-btn"></span>
      </div>
    </a>
  </section>
  <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
    <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix">
      <div class="item_detail">
        <h3 class="dotdot line2">
          {{msg}}
        </h3>
        <div class="list_image">
          <ul class="clearfix">
            <li class="list_img_holder">
              <img src="../assets/images/QQ20180409-0.png">
            </li>
            <li class="list_img_holder">
              <img src="../assets/images/QQ20180409-1.png">
            </li>
            <li class="list_img_holder">
              <img src="../assets/images/QQ20180409-2.png">
            </li>
          </ul>
        </div>
        <div class="item_info">
          <div>
            <span class="src space">生活就是娱乐</span>
            <span class="cmt space">评论30</span>
            <span class="time" title="2018-04-12 09:34">1天前</span>
          </div>
        </div>
      </div>
    </a>
  </section>
  <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="0">
    <a href="javascript: void(0)" class="article_link clearfix " data-action-label="">
      <h3 class="dotdot line2">
        {{msg}}
      </h3>
      <div class="list_img_holder_large">
          <img src="../assets/images/big_img-1.png">
      </div>
      <div class="item_info">
        <span class="hot_label space">热</span>
        <span class="cmt space">评论 30</span>
        <span class="time" title="2018-04-11 14:09">1天前</span>
      </div>
    </a>
  </section>
  </div>
</template>

<script>
export default {
  name: 'Shanghai',
  data () {
    return {
      msg: '上海新闻'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
