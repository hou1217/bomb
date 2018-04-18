import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex);
const state = {
    loading: true,         //新闻列表切换时loading图片的展示
    ifReturnMsg: '',       //是否有数据返回
    userName: JSON.parse(localStorage.getItem('userName')) || {},       //用户名
    logined: JSON.parse(localStorage.getItem('loginStatus')) || false,  //是否登录状态
    Sharebox: false,       /Sharebox组件是否显示
    showLog_off: true,     /setup页退出登录是否显示
    routerChange:true,     //路由变化
    downLoadMore:false,    //首页新闻底部是否加载更多
    hasIntroduce:false,    //是否已有个人简介
    collected:false,       //是否收藏
    introduce:'',          /selfpage页个人简介内容
    vitality: {            //my页个人信息（暂无用，等后续处理）
        follow: 14,
        fans: 0,
        visitor: 1
    },
    list: {                //首页所有新闻栏目内容
        __all__: [],
        news_hot: [],
        news_society: [],
        news_entertainment: [],
        news_tech: [],
        news_car: [],
        news_sports: [],
        news_finance: [],
        news_military: [],
        news_world: [],
        news_fashion: []
    },
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})