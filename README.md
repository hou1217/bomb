# sea

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build:prod

# build for production and view the bundle analyzer report
npm run build --report


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
2018.5.25更新：
1.新增clearcache字段，如果为1则清除缓存；
2.频道推荐和关注暂时去除，默认跳转到热点频道。

2018.5.24更新：
1.新增login页面，用户输入用户名后才能进入到主页；
2.数据请求时候，把用户名带给后台。

2018.5.17更新：
1.给导航栏中的刷新按钮新增刷新数据的功能；
2.刷新按钮刷新时添加旋转的动画效果；
3.滚动到底部时如果没有新的数据显示"没有更多了"而不再显示"加载中"；
4.下拉刷新时如果新的数据为零，则不显示加载数目的提示；
5.新增当数据中有三个图片时候的输出样式；
6.新增图片未加载前的默认背景。

2018.5.15更新：
1.调整加载数目提示的位置；
2.当下拉刷新时在新数据的末尾新增"阅读到这里，点击刷新"的按钮;
3.完善了feature标签；
4.修复了当路由切换时"阅读到这里，点击刷新"还在的BUG;
5.当路由切换时让滚动条回到顶部；
6.修复了当上滑加载更多后切换路由时加载更多数据的BUG。

2018.5.14更新：
1.修复了一个下拉刷新数据加载的BUG;
2.下拉刷新时候新增了加载数目的提示；
3.文章列表中的时间转变为“几分钟/小时/天前”的格式；
4.新增了feature标签。
