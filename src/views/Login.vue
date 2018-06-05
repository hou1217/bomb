<template>
  <div class="indexContainer">
    <div class="loginBox">
        <h2 class="loginTitl">登录你的头条，精彩永不丢失</h2>
        <div class="loginInfo">
          <input @keyup.enter="login" autocomplete="off"  type="text" placeholder="用户名" class="ivu-input" v-model="username"> 
        </div>
        <div @click="login"  class="submit ivu-btn">进入头条</div>
    </div>
    <div v-if="showAlert" class="tips">请输入用户名</div>
  </div>
  
</template>

<script>

export default {
  name: 'Login',
  data(){
    return{
      username: null, //用户名
      showAlert: false, //显示提示组件
    }
  },
  components:{
    
  },
  methods:{
    login(){
      if (!this.username) {
        this.showAlert = true;
        return
      }
      //本地session存储username
      sessionStorage.setItem("username",JSON.stringify(this.username)); 
      //跳转到home页面
      // this.$router.push('/home/56S-5Lya?type=56S-5Lya');
      this.$router.push('/home/toutiao?type=toutiao');
    }
  }
}
</script>

<style scoped>
.loginBox{
  height: 412px;
  width: 100%;
  background-color: #00d8b7;
  text-align: center;
  color: #fff;
}
  
.loginTitl {
    font-size: 40px;
    color: #fff;
    padding-top: 52px;
    margin-bottom: 30px;
}

.loginInfo {
  width: 70%;
  font-size: 36px;
  margin:0 auto 20px;
}

.ivu-input{
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  padding: 8px 14px;
  line-height: 1.5;
  font-size: 24px;
  border: 1px solid #dddee1;
  border-radius: 8px;
  color: #495060;
  background-color: #fff;
  position: relative;
  cursor: text;
}
.submit {
  color: #fff;
  width: 70%;
}
  
.ivu-btn{
  margin: 0 auto;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid #fff;
  white-space: nowrap;
  line-height: 1.5;
  padding: 12px 30px;
  border-radius: 12px;
  font-size: 24px;
}

.tips{
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
}
</style>