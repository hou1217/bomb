<template>
  <div id="div1" ref="div1" class="content0" >
    <div class="scroll_bar">
      <div class="bar1">⇣</div>
      <div class="bar2">下拉刷新</div>
    </div>
    <slot name="content" ref="div2"></slot>
  </div> 
</template>
<script>
  export default {
    name: 'PullRefresh',
    data() {
      return {
        
      }
    },
    mounted() {
      
    }
  }
</script>