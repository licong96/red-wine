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
        <mu-raised-button label="点击抢购" class="demo-raised-button" primary @click="openPay"/>
      </div>
      <div class="gridlist-demo-container list">
        <mu-grid-list class="gridlist-demo">
          <mu-grid-tile v-for="item in list" :key="item.id">
            <img class="img" :src="item.src" @load="refresh"/>
            <span slot="title">{{item.title}}</span>
            <span slot="subTitle"><i class="iconfont icon-renminbi"></i><b>{{item.money}}</b></span>
            <!-- 一个不是办法的办法，解决点击无效 -->
            <div class="click" @click="openDetail(item.id)"></div>
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
  import {api} from '@/api/config'

  export default {
    data () {
      return {
        list: []
      }
    },
    created() {
      this.getDataList()
    },
    methods: {
      getDataList() {
        this.axios.post(`${api}/index/Goods/goods_list`, {
          count: 4
        })
        .then((response) => {
          this.list = response.data
        })
        .catch((error) => {
          alert('网路错误', error)
        })
      },
      handleChange(val) {   // 分类
        this.setAlert({
          dialog: true,
          text: '暂未开放，敬请期待'
        })
      },
      openPay() {   // 支付
        this.$router.push({
          path: `/home/pay`
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
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 56px;
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
    padding-bottom: .27rem /* 10/37.5 */;
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
      height: 100%;
    }
  }
  .gridlist-demo-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

</style>
