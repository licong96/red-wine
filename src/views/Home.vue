<template lang="html">
  <!-- 首页商城 -->
  <section class="home">
    <scroll ref="scroll">
    <div>
      <!-- 轮播图 -->
      <div class="img">
        <img src="http://mpic.tiankong.com/663/953/663953008cbaf309590998e6469fa443/640.jpg" alt="" @load="refresh">
      </div>
      <!-- 分类 -->
      <div class="classify" @click="handleChange">
        <mu-paper>
          <mu-bottom-nav>
            <mu-bottom-nav-item title="线上商城" icon=":iconfont icon-2"/>
            <mu-bottom-nav-item title="线下实体" icon=":iconfont icon-shitidianrenzheng"/>
            <mu-bottom-nav-item title="商学院" icon=":iconfont icon-shangxueyuan"/>
            <mu-bottom-nav-item title="加盟代理" icon=":iconfont icon-jiamengxuanzhong"/>
          </mu-bottom-nav>
        </mu-paper>
      </div>
      <!-- 分红 -->
      <div class="profit">
        <p class="title">微股分红权</p>
        <mu-raised-button label="点击抢购" class="demo-raised-button" primary/>
      </div>
      <div class="gridlist-demo-container list">
        <mu-grid-list class="gridlist-demo">
          <mu-grid-tile v-for="tile, index in list" :key="index">
            <img class="img" :src="tile.image"/>
            <span slot="title">{{tile.title}}</span>
            <span slot="subTitle"><i class="iconfont icon-renminbi"></i><b>{{tile.author}}</b></span>
            <!-- 一个不是办法的办法，解决点击无效 -->
            <div class="click" @click="openDetail(index)"></div>
          </mu-grid-tile>
        </mu-grid-list>
      </div>
    </div>
    </scroll>
    <!-- 路由 -->
    <transition name="transX">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
  import Scroll from '@/components/Scroll'
  import {mapMutations} from 'vuex'

  export default {
    data () {
      return {
        list: [{
          image: 'https://img.alicdn.com/imgextra/i1/725677994/TB1JOuxcv2H8KJjy0FcXXaDlFXa_!!0-item_pic.jpg_640x640Q50s50.jpg',
          title: 'ALDI奥乐齐 澳洲原瓶进口红酒梅洛葡萄酒干红750ml*6',
          author: '1200'
        }, {
          image: 'https://img.alicdn.com/imgextra/i1/725677994/TB1JOuxcv2H8KJjy0FcXXaDlFXa_!!0-item_pic.jpg_640x640Q50s50.jpg',
          title: '澳洲原瓶进口红酒梅洛葡萄酒干红750ml',
          author: '2000'
        }, {
          image: 'https://img.alicdn.com/bao/uploaded/i4/3075140505/TB20l6lXPgy_uJjSZTEXXcYkFXa_!!3075140505.jpg_b.jpg',
          title: '进口红酒梅洛葡萄酒干红',
          author: '1500'
        }, {
          image: 'https://img.alicdn.com/bao/uploaded/i4/3075140505/TB20l6lXPgy_uJjSZTEXXcYkFXa_!!3075140505.jpg_b.jpg',
          title: '进口红酒梅洛葡萄酒干红',
          author: '1300'
        }]
      }
    },
    methods: {
      handleChange(val) {   // 分类
        this.setAlert({
          dialog: true,
          text: '暂未开放，敬请期待'
        })
      },
      openDetail(id) {    // 打开详细页
        console.log(id)
        this.$router.push({
          path: `/home/detail/${id}`
        })
      },
      refresh() {
        if (this.time) {
          clearTimeout(this.time)
        }
        this.time = setTimeout(() => {
          this.$refs.scroll.refresh()
        }, 20)
      },
      ...mapMutations({
        'setAlert': 'SET_ALERT'
      })
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/sass/mixin";
  @import "../common/sass/variable";

  .home {
    position: absolute;
    top: 0;
    bottom: 66px;
    background-color: $color-background-e;
  }
  // 轮播
  .img {
    overflow: hidden;
    width: 100%;
    height: 4.8rem /* 180/37.5 */;
    img {
      width: 100%;
    }
  }
  // 分类
  .classify {
    margin-top: .27rem /* 10/37.5 */;
    .iconfont {
      color: $color-text-9;
    }
  }
  // 分红
  .profit {
    margin-top: .27rem /* 10/37.5 */;
    padding: .43rem /* 16/37.5 */;
    text-align: center;
    background: #fff;
    .title {
      padding-bottom: .43rem /* 16/37.5 */;
      font-size: .53rem /* 20/37.5 */;
      color: $color-text-3;
    }
    .demo-raised-button {
    }
  }
  // 列表
  .list {
    margin-top: .27rem /* 10/37.5 */;
    background-color: #fff;
    .click {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
    }
    .text {
      position: absolute;
      bottom: 0;
      left: 0;
      margin: .05rem /* 2/37.5 */;
      width: 100%;
      background-color: $color-background-0;
    }
    .title {
      padding-bottom: .11rem /* 4/37.5 */;
    }
    .icon-renminbi {
      font-size: .32rem /* 12/37.5 */;
    }
    .img {
      width: 100%;
    }
  }
  .gridlist-demo-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

</style>
