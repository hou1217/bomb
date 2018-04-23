<script>
//const serverUrl = 'http://192.168.2.209:8086';
//const serverUrl2 = 'http://192.168.2.209:8088';
const serverUrl = process.env.API_ROOT;
const serverUrl2 = process.env.API_ROOT2;
/*const token='12345678';
const hasEnter=false;
const userSite="中国钓鱼岛";*/
 export default
 {
  serverUrl,//服务器地址1
  serverUrl2,//服务器地址2
  /*userSite,//用户地址
  token,//用户token身份
  hasEnter,//用户登录状态*/
 }
</script>