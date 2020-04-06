<template>
    <div class="detail-content">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list=list></detail-list>
    </div>
</template>

<script>
import DetailBanner from "./components/banner";
import DetailHeader from "./components/header";
import DetailList from "./components/list";
export default {
    name : "Detail",
    components :{
        DetailBanner,
        DetailHeader ,
        DetailList,
    },
        data() {
    return {
  // ...
list: [{
    title: "非指定日上午场票",
    children: [{
            title: "[上午场]成人票（早定优惠）",
            children:[{
                title:"第三级",
                children:[
                    {
                    title:"第四级01"
                    },
                     {
                    title:"第四级02"
                    },
                ]
            },{
                title:"第三级"
            }]
        },
        {
            title: "[上午场]老人票"
        }
    ]
}, {
    title: "指定日上午场票",
    children: [{
            title: "[上午场]老人票"
        },
        {
            title: "[上午场]学生票"
        }
    ]
}, {
    title: "儿童票"
}, {
    title: "特惠票"
}]
// ...
    };
        },
    };

</script>

<style lang="stylus" scoped>
    .detail-content{
        height 20rem;
    }
</style>