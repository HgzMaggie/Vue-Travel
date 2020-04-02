<template>
<div class="header">
    <div class="header_left">
        <span class="iconfont">iconfanhui</span>
    </div>
    <div class="header_center">
        <span class="iconfont">iconzoom</span>
        输入城市/景点/游玩主题
        </div>
        <div class="header_right">
            城市
             <span class="iconfont">iconsuozaichengshi--</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
.header {
    background-color: #02bcd5;
    overflow: hidden;
    color: #fff;
    padding: 0.2rem;

    .header_left {
        float: left;
    }

    .header_center {
        float: left;
        margin: 0 0.2rem;
    }

    .header_right {
        float: right;
    }
}
</style>