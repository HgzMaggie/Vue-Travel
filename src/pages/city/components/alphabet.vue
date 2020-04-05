<template>
<div class="alp_list">
    <div class="ul">
        <div class="li" :ref="item" v-for="item of letters" :key="item" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchendå="handleTouchEnd" @click="handleAlpClick">{{item}}</div>
    </div>
</div>
</template>

<script>
export default {
    name: "CityAlphabet",
    props: {
        cities: Object
    },
    computed: {
        letters() {
            const letters = [];
            for (let i in this.cities) {
                letters.push(i);
            }
            return letters;
        }
    },
    data() {
        return {
            touchSataus: false
        };
    },
    methods: {
        handleAlpClick(e) {
            this.$emit("change", e.target.innerHTML);
        },
        handleTouchStart() {
            this.touchSataus = true;
        },
        handleTouchMove(e) {
            if (this.touchSataus) {
                const startY = this.$refs["A"][0].offsetTop;
                const touchY = e.touches[0].clientY - 81;
                const index = Math.floor((touchY - startY) / 22);
                if (index >= 0 && index < this.letters.length) {
                    this.$emit("change", this.letters[index]);
                }
            }
        },
        handleTouchEnd() {
            this.touchSataus = false;
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~style/varibles';

.alp_list {
    position: absolute;
    top: 4.0rem;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 0.44rem;

    .ul {
        .li {
            color: $ftColor;
            text-align: center;
            padding: 0 0.2rem;
        }
    }
}
</style>