<template lang="html">
  <!-- 详细页 -->
  <section class="full-fixed detail">
    <scroll :data="detailData" ref="scroll">
      <div>
      <!-- 图片 -->
      <div class="top-img">
        <img :src="detailData.src" :listem-scroll="listemScroll" @scroll="scroll" alt="">
      </div>
      <div class="content">
        <div class="title">
          <p class="text">{{detailData.title}}</p>
          <span class="money"><i class="iconfont icon-renminbi"></i>{{detailData.money}}</span>
          <div class="desc">
            <span>月销售：{{detailData.sales}}件</span>
          </div>
        </div>
        <div class="img-wrap" v-html="detailData.content">
        </div>
      </div>
    </div>
    </scroll>
    <!-- 底部操作按钮 -->
    <section class="footer-bar">
      <ul class="bar-wrap">
        <li class="bar-list">
          <i class="iconfont icon-shangcheng"></i>
          <p class="bar-text">首页</p>
        </li>
        <li class="bar-list">
          <i class="iconfont icon-gerenzhongxin"></i>
          <p class="bar-text">我的</p>
        </li>
        <li class="bar-list-add bar-red">
          <p class="bar-add-text">立即购买</p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  import Scroll from '@/components/Scroll'
  import {api} from '@/api/config'

  export default {
    data() {
      return {
        detailData: {},
        image: [
          'https://img.alicdn.com/imgextra/i4/217103012/TB2MpymobsTMeJjSszgXXacpFXa_!!217103012.jpg',
          'https://img.alicdn.com/imgextra/i4/217103012/TB2.Gt5hVXXXXawXXXXXXXXXXXX-217103012.jpg_760x760Q50s50.jpg_.webp',
          'https://img.alicdn.com/imgextra/i2/217103012/TB2uAKEXjHz11Bjy0FpXXcNiVXa-217103012.jpg_760x760Q50s50.jpg_.webp',
          'https://img.alicdn.com/imgextra/i3/217103012/TB2F.oQjVXXXXccXXXXXXXXXXXX-217103012.jpg_760x760Q50s50.jpg_.webp'
        ]
      }
    },
    created() {
      this.listemScroll = true
      this.getData()
    },
    methods: {
      scroll(pos) {
        console.log(pos.y)
        console.log(this.$refs.scroll.maxScrollY)
      },
      getData() {
        this.axios.post(`${api}/index/Goods/goods_detail`, {
          id: this.$route.params
        })
        .then((response) => {
          console.log(response.data)
          this.detailData = response.data
          // control === '1'
        })
        .catch((error) => {
          alert('网路错误', error)
        })
      },
      refresh() {
        if (this.time) {
          clearTimeout(this.time)
        }
        this.time = setTimeout(() => {
          this.$refs.scroll.refresh()
        }, 20)
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/sass/mixin";
  @import "../common/sass/variable";

  .detail {
    background: $color-background-e;
    img {
      width: 100%;
    }
    .top-img {
      background-color: #fff;
    }
    .content {
      padding-bottom: 1.33rem /* 50/37.5 */;
    }
    .title {
      padding: .43rem /* 16/37.5 */;
      background-color: #fff;
      .text {
        font-size: .43rem /* 16/37.5 */;
        line-height: 1.4;
        color: #333;
      }
      .money {
        display: flex;
        align-items: center;
        margin-top: .27rem /* 10/37.5 */;
        font-size: .48rem /* 18/37.5 */;
        color: red;
        .icon-renminbi {
          font-size: .32rem /* 12/37.5 */;
        }
      }
      .desc {
        margin-top: .27rem /* 10/37.5 */;
        font-size: .32rem /* 12/37.5 */;
        color: #999;
      }
    }
    .img-wrap {
      margin-top: .27rem /* 10/37.5 */;
      background: #fff;
    }
  }
  // 底部操作按钮
  .footer-bar {
    position: fixed;
    bottom: -1px;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 1.36rem /* 51/37.5 */;
    background-color: #fff;
    .bar-wrap {
      @include border-b-1px(100%);
      display: flex;
      align-items: center;
      height: 100%;
      .bar-list {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @include border-l-1px(100%);
        width: 1.33rem /* 50/37.5 */;
        height: 100%;
        text-align: center;
        .iconfont {
          font-size: .48rem /* 18/37.5 */;
          color: $color-text-3;
        }
        .bar-text {
          padding-top: .16rem /* 6/37.5 */;
          font-size: .32rem /* 12/37.5 */;
          color: $color-text-9;
        }
      }
      .bar-list-add {
        flex: 2;
        font-size: .43rem /* 16/37.5 */;
        color: #fff;
        line-height: 1.36rem /* 51/37.5 */;
        text-align: center;
        &.bar-red {
          background-color: #FF0036;
        }
      }
    }
  }
</style>
