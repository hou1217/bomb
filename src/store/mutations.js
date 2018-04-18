import * as type from './mutation-types.js'

export default {
    //将首页发送的请求数据添加到list各项中去，进行渲染页面
    [type.GET_NEWSLIST](state, payload) {
        for (var item in payload.data) {
            state.list[payload.kind].push(payload.data[item]);
        }
        state.downLoadMore = true;
    },
    //新闻切换时loading图片的展示
    [type.CHANGE_LOADING_STATE](state, flag) {
        state.loading = flag;
    },
    //判断是否有请求数据返回
    [type.RETURN](state, flag) {
        state.ifReturnMsg = flag;
    },
    /shareBox分享框是否展示
    [type.SHOWSHAREBOX](state, sign) {
        state.Sharebox = sign;
    },
    //登录和退出
    [type.LOGINING](state, payload) {
        state.logined = payload;
    },
    //是否展示退出登录按钮
    [type.LOGOFF](state, sign) {
        state.showLog_off = sign;
    },
    //判断路有变化
    [type.ROUTERCHANGE](state, sign){
        state.routerChange = sign;
    },
    //渲染用户名
    [type.GETUSERDATA](state, res){
        state.userName = res;
    },
    //控制下拉加载数据的按钮
    [type.PULLDOWNBTN](state, sign){
        state.downLoadMore = sign;
    },
    //更改个人简介
    [type.CHANGEINTRODUCE](state, introduce){
        state.introduce = introduce;
        state.hasIntroduce = true;
    }
}