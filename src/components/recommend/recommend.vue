<template lang="html">
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommend.length" class="slider-wrapper">
        <slider>
          <div class="" v-for="item in recommend">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" alt="">
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门推荐</h1>
        <ul>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from 'base/slider/slider';
import {
  getRecommnend,
  getDiscList
} from 'api/recommend';
import {
  ERR_OK
} from 'api/config';
export default {
  data() {
    return {
      recommend: []
    };
  },
  porps: {

  },
  created() {
    this._getRecommnend();
    this._getDiscList();
  },
  methods: {
    _getRecommnend() {
      getRecommnend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommend = res.data.slider;
        }
      });
    },
    _getDiscList() {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data.list);
          // this.recommend = res.data.slider;
        }
      });
    }
  },
  components: {
    Slider
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .recommend
    position:fixed
    width:100%
    top:88px
    bottom:0
    .recommend-content
      height:100%
      overflow:hidden
      .slider-wrapper
        position:relative
        width:100%
        overflow:hidden
      .recommend-list
        .list-title
          height:65px
          line-height:65px
          text-align:center
          font-size:$font-size-medium
          color: $color-theme
        .item
          display:flex
          box-sizing:border-box
          align-item: center
          padding:0 20px 20px 20px
          .icon
            flex:0 0 60px
            width:60px
            padding-right:20px
          .text
            display:flex
            flex-direction:column
            justify-content:center
            flex:1
            inline-height:20px
            overflow:hidden
            font-size:$font-size-medium
            .name
              margin-bottom
              color:$color-text
            .desc
              color:$color-text-d
      .loading-container
        position:absolute
        width:100%
        top:50%
        transform:translateY(-50%)


</style>
