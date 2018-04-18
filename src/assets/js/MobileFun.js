/*
*一些封装好的JavaScript函数
*2018.04.13 —— 侯义帅
*/


//滚动条在Y轴上的滚动距离

function getScrollTop(){
  var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if(document.body){
　　bodyScrollTop = document.body.scrollTop;
　}
　if(document.documentElement){
　　documentScrollTop = document.documentElement.scrollTop;
　}
　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
　return scrollTop;
}

//文档的总高度
function getScrollHeight(){
  var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  if(document.body){
　  bodyScrollHeight = document.body.scrollHeight;
  }
　if(document.documentElement){
　  documentScrollHeight = document.documentElement.scrollHeight;
　}
　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
　return scrollHeight;
}

//浏览器视口的高度
function getWindowHeight(){
  var windowHeight = 0;
  if(document.compatMode == "CSS1Compat"){
    windowHeight = document.documentElement.clientHeight;
　}else{
　  windowHeight = document.body.clientHeight;
　}
　return windowHeight;
}
// 封装好的AJAX方法
const ajaxJSON = function(method,url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open(method, url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    /*client.setRequestHeader("WALLAN-TOKEN", "ba88626517342609e76dc8f8d751ec82");
    client.setRequestHeader("WALLAN-DEVICENUM", "12000000000");*/
    client.send();
  });
  return promise;
}
export {
  getScrollTop,
  getScrollHeight,
  getWindowHeight,
  ajaxJSON
}
