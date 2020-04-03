<template>
<div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>

</div>
</template>

<script>
// 引入 header.vue 组件
import HomeHeader from "./components/header";
import HomeSwiper from "./components/swiper";
import HomeIcons from "./components/icons";
export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
    },
    data() {
        return {
            swiperList:[
                {id:"001",src:"https://th.wallhaven.cc/small/96/96w8e8.jpg"},
                {id:"002",src:"https://th.wallhaven.cc/small/13/13mk9v.jpg"},
                {id:"003",src:"https://th.wallhaven.cc/small/r2/r2ze21.jpg"},

                    ],
            iconList:[
        {
          id:'001',
          imgSrc:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          txt: "景点门票"
        },
        {
          id:'002',
          imgSrc:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png",
          txt: "一日游"
        },
        {
          id:'003',
          imgSrc:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          txt: "北京必游"
        },
        {
          id:'004',
          imgSrc:
            "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          txt: "溜娃游"
        },
        {
          id:'005',
          imgSrc:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png",
          txt: "爬长城"
        },
        {
          id:'006',
          imgSrc:
            "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          txt: "故宫"
        },
        {
          id:'007',
          imgSrc:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          txt: "动植物园"
        },
        {
          id:'008',
          imgSrc:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/35d83bb968d80d54926f30cfb92cb6ff.png",
          txt: "限时抢购"
        },
        {
          id:'009',
          imgSrc:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png",
          txt: "北京世园会"
        }       

                     ],
        };
    },
};
</script>