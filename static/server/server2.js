const http = require('http');
var url = require('url');
var querystring = require('querystring');
const server = http.createServer((req, res) => {

    var pathname = url.parse(req.url).pathname;  
    var arg = url.parse(req.url).query;          
    console.log("Request for " + arg );

    var id = querystring.parse(arg).id;         
    console.log("id = "+id);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin","*");
    
    res.end(JSON.stringify({article: 
    {
        "articleId": "1269154",
        "title": "【一点资讯】一个月内两娃娃遭遇车祸 危险上学路何时不再危险？ www.yidianzixun.com",
        "description": null,
        "keywords": [
            "一点资讯","新闻资讯","热点资讯"
        ],
        "createdAt": 1523514844097,
        "items": [
            {
                "type": "text",
                "content": "车祸事发地。",
                "url": "//i1.go2yd.com/image.php?url=0ImHTLr69J"
            },
            {
                "type": "text",
                "content": "车祸在家长群里引发热议。",
                "url": "//i1.go2yd.com/image.php?url=0ImHTLaTz0"
            },
            {
                "type": "text",
                "content": "4月11日，一则“一年级女孩命陨上学路”的消息，刷屏了不少成都人的朋友圈，尤其在事发地的双流西航港，更是引起众多家长热议。",
                "url": ""
            },
            {
                "type": "text",
                "content": "据了解，这已是一个月时间里第二个在这条上下学路上遭遇车祸的学生。不少家长认为，事故背后有非机动车道被占、路面洒水湿滑等因素。也有人觉得附近有电瓶车不遵守交通规则，随意穿插扰乱交通。",
                "url": ""
            },
            {
                "type": "text",
                "content": "封面新闻记者实地探访发现，这条在早晚高峰时车流量巨大，机动车、电动车混杂通行的道路，对途经这里的小学生、大学生而言，无疑是一条惊悸的道路。",
                "url": ""
            },
            {
                "type": "text",
                "content": "A悲剧",
                "url": ""
            },
            {
                "type": "text",
                "content": "一年级女孩命陨上学路",
                "url": ""
            },
            {
                "type": "text",
                "content": "“妈妈送女儿上学，路上出了车祸，娃娃伤重去世了。”4月11日，不少成都市民在微信、微博圈里得知了这起令人痛惜的车祸。当天下午，记者核实到这起车祸发生在双流西航港附近，正是上学高峰。",
                "url": ""
            },
            {
                "type": "image",
                "content": "",
                "url": "//i1.go2yd.com/image.php?url=0ImHTLiWix"
            },
            {
                "type": "text",
                "content": "学校旁，不少家长在热议。",
                "url": ""
            },
            {
                "type": "text",
                "content": "“孩子读一年级，是个女娃。”据附近居民回忆，当天上午7点20分左右，在黄河中路与泰新路交汇附近，一位女子骑电瓶车搭载女儿准备前往川大南路二段上的小学上学。",
                "url": ""
            },
            {
                "type": "text",
                "content": "“母女俩跟一辆路过的金杯车发生车祸。”记着从一名家长提供的视频里看到，这位母亲和孩子瘫坐在地上，电瓶车也倒在一旁，“大人情况不严重，但这孩子却因伤重去世了。”",
                "url": ""
            },
            {
                "type": "text",
                "content": "当天下午，记者来到事发地时，现场已经清理完，但可以看到道路车流巨大。“这不是第一起了。”正赶往学校接孩子放学的李女士说，今年三月中旬，在邻近的川大路附近，也发生过一起车祸，“另一所学校的低年级男孩也因车祸受重伤。”",
                "url": ""
            },
            {
                "type": "text",
                "content": "B走访",
                "url": ""
            },
            {
                "type": "text",
                "content": "声音1：希望错峰洒水、整治违停",
                "url": ""
            },
            {
                "type": "text",
                "content": "在此次车祸发生几小时后，附近多所小学的家长群也炸开了锅。",
                "url": ""
            },
            {
                "type": "text",
                "content": "“主要总结了两个问题。”一位不愿透露姓名的一年级家长告诉记者，他每天上午7点左右会从泰新路的家中出发，骑电瓶车送孩子上学，“儿子读2年级了，虽然这次事儿出在一年级，但大伙儿总结了两个大问题，准备一同向相关部门进行反映。”",
                "url": ""
            },
            {
                "type": "text",
                "content": "“首先是路面湿滑。”他说，上午送孩子上学时，常发现路面已经洒了一次水，“从黄河中路到川大路一线，早上的车流本来就大，路面一湿滑就更不好控制了。”",
                "url": ""
            },
            {
                "type": "image",
                "content": "",
                "url": "//i1.go2yd.com/image.php?url=0ImHTLYURs"
            },
            {
                "type": "image",
                "content": "",
                "url": "//i1.go2yd.com/image.php?url=0ImHTLknP7"
            },
            {
                "type": "text",
                "content": "非机动车道被挤占。",
                "url": ""
            },
            {
                "type": "text",
                "content": "此外，记者在一个家长群看到，多位骑电动车接送孩子的家长反映，“学校附近有交警护航很安全，但前往学校的路边非法、合法占道车却很多，非机动车道被占完了，电动车、自行车只好冒险驶入机动车道。今后，希望让洒水车错峰工作，并加强对挤占非机动车道的管理。”",
                "url": ""
            },
            {
                "type": "text",
                "content": "声音2：电瓶车随意穿插电三轮横行",
                "url": ""
            },
            {
                "type": "text",
                "content": "除了微信群里的反映，当天下午4点过，记者沿黄河中路往川大路、川大南路等地走访附近居民、车主发现，有不少人也反映电瓶车载人随意穿插、电三轮横行等问题。",
                "url": ""
            },
            {
                "type": "text",
                "content": "在黄河中路一段附近，一家小型超市店主王女士告诉记者，这条路附近居民生活点、大学，以及修车行等聚集，每天车流都很大，尤其是在早晚高峰。“几乎每天都能看到电动车侵走机动车道或者突然冲出等情况，如果汽车车主反应不及时，很容易造成交通事故。”",
                "url": ""
            },
            {
                "type": "image",
                "content": "",
                "url": "//i1.go2yd.com/image.php?url=0ImHTLAd4x"
            },
            {
                "type": "text",
                "content": "骑电瓶车的家长搭着孩子驶入机动车道。",
                "url": ""
            },
            {
                "type": "text",
                "content": "当天下午4点半左右，正是放学时间，记者在黄河中路、川大路上看到，有部分骑电瓶车的家长，前后均搭载有孩子，而且并未佩戴相关护具，有时在非机动车道，有时却又驶入机动车道。",
                "url": ""
            },
            {
                "type": "text",
                "content": "“希望能加强对电瓶车、电三轮的违法查处。”刚接到孩子准备上车回家的张先生告诉记者，“希望相关部门以及每个家长共同努力为孩子的上学路护航。”",
                "url": ""
            },
            {
                "type": "text",
                "content": "C回应",
                "url": ""
            },
            {
                "type": "text",
                "content": "街道办：已接到反映介入调查",
                "url": ""
            },
            {
                "type": "text",
                "content": "当天下午，在走访过程中，记者发现这处半径不到三公里的区域里，有着一所大学、两所小学，以及数个人口密集的住宅小区，学生人数总计已超万人。此外，这条不少学生的上下学必经路段，因连接大件路、成渝环线高速等道路，车流量本身较大。",
                "url": ""
            },
            {
                "type": "text",
                "content": "当天下午5点过，记者将此事反映至负责该辖区的双流区西航港街道办。一位值班工作人员在电话里告诉记者，上午车祸的事，街道办已经在协调处理，至于反映的洒水、占据非机动车道等问题将作记录反映。",
                "url": ""
            },
            {
                "type": "text",
                "content": "封面新闻记者杨力摄影报道",
                "url": ""
            }
        ],
        "media": {
            "id": "5aca07e0aafba62c65d3a747",
            "name": "封面新闻",
            "portraitId": "NEWS-5acf3d1d963a650c20249868",
            "portraitUrl": "https://i1.go2yd.com/image.php?url=http://si1.go2yd.com/get-image/09wvLjaphcO&type=thumbnail_150x150",
            "fans": 0,
            "follows": 0,
            "fanNum": null,
            "follow": false,
            "followNum": null,
            "introduce": null,
            "tags": null,
            "coverId": "NEWS-5acf3d1d963a650c20249868",
            "cursor": null
        },
        "reads": 0,
        "likes": 0,
        "origin": "一點資訊",
        "originAuthor": "封面新闻",
        "originUrl": "https://www.yidianzixun.com/article/0ImHTLUg",
        "entry": null,
        "topic": null,
        "subscribeLabel": null,
        "assistantTitle": null,
        "channel": null,
        "subChannel": null,
        "content": null,
        "copyright": null,
        "coverContent": null,
        "coverType": null,
        "coverUrl": "https://i1.go2yd.com/image.php?type=thumbnail_336x216&url=0ImHTLr69J",
        "coverId": "NEWS-5acf515e963a650c202f2dce",
        "keyword": null,
        "mediaId": null,
        "link": null,
        "time": 1523514844088,
        "userId": null,
        "source": null,
        "imageGroups": null,
        "coverNum": 1,
        "type": "IMAGE_TEXT",
        "videoId": null,
        "videoUrl": null,
        "videoContentType": null,
        "topicId": null,
        "channelId": null,
        "subChannelId": null,
        "cursor": null,
        "author": "封面新闻",
        "meta": null,
        "originChannel": null,
        "topicList": null,
        "channelList": null,
        "subChannelList": null,
        "keywordList": null,
        "keywordChannel": null,
        "id": 1269154,
        "identifier": "com.yidianzixun.www/article/0ImHTLUg",
        "version": 1523514844088
    }
    }));
    
});

server.listen(8088);
console.log('Server running at http://127.0.0.1:8088/');