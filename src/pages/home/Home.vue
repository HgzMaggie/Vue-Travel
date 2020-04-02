<template>
<div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>

</div>
</template>

<script>
// 引入 header.vue 组件
import HomeHeader from "./components/header";
import HomeSwiper from "./components/swiper";
export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeSwiper,
    },
    data() {
        return {
            swiperList:[
                {id:"001",src:"https://th.wallhaven.cc/small/96/96w8e8.jpg"},
                {id:"002",src:"https://th.wallhaven.cc/small/13/13mk9v.jpg"},
                {id:"003",src:"https://th.wallhaven.cc/small/r2/r2ze21.jpg"},

                    ]
        }
    },
}
</script>