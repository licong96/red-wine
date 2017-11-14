<template lang="html">
  <!-- 我的个人中心 -->
  <section class="my">
    <!-- 顶部用户 -->
    <div class="top">
      <div class="portrait">
        <img class="portrait-img" src="http://sinastorage.com/storage.zone.photo.sina.com.cn/zone/1000_0/20171113/fca8204736d31c994a0259ae62b32360_2880_2669.jpg?&ssig=PwTxLl5sOj&KID=sina,slidenews&Expires=1510573800" alt="">
      </div>
      <div class="text">
        <p class="ipone">13699531996</p>
        <p class="desc">
          <span>ID:黎聪</span>
          <span>推荐人：刘孔福</span>
        </p>
      </div>
    </div>
    <!-- 红包 -->
    <div class="packet">
      <ul class="list-wrap">
        <li class="list">
          <i class="iconfont icon-hongbao1"><span class="money">28</span></i>
        </li>
        <li class="list">
          <i class="iconfont icon-hongbao1"><span class="money">28</span></i>
        </li>
        <li class="list">
          <i class="iconfont icon-hongbao1"><span class="money">28</span></i>
        </li>
        <li class="list">
          <i class="iconfont icon-hongbao1"><span class="money">28</span></i>
        </li>
      </ul>
    </div>
    <!-- 我的收益 -->
    <div class="conter">
      <mu-paper class="earnings">
        <mu-bottom-nav @change="handleChange">
          <mu-bottom-nav-item value="one" title="我的收益" icon=":iconfont icon-shouyi"><span class="money">200</span></mu-bottom-nav-item>
          <mu-bottom-nav-item value="two" title="推广收益" icon=":iconfont icon-shouyi1"><span class="money">200</span></mu-bottom-nav-item>
          <mu-bottom-nav-item value="three" title="其他收益" icon=":iconfont icon-iconfontxiaozhucunqianguan"><span class="money">200</span></mu-bottom-nav-item>
        </mu-bottom-nav>
      </mu-paper>
      <!-- 订单 -->
      <mu-paper class="order">
        <mu-bottom-nav @change="orderChange">
          <mu-bottom-nav-item value="order" title="我的订单" icon=":iconfont icon-dingdan"/>
          <mu-bottom-nav-item value="code" title="推广二维码" icon=":iconfont icon-erweima"/>
          <mu-bottom-nav-item value="" title="注册没支付" icon=":iconfont icon-zhifu7"/>
        </mu-bottom-nav>
      </mu-paper>
    </div>
    <div class="return-btn">
      <mu-raised-button label="退回三倍本金(144)元" class="demo-raised-button" primary fullWidth @click="returnBtn"/>
    </div>
    <!-- 子路由 -->
    <transition name="transX">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
      }
    },
    methods: {
      handleChange (val) {
        this.$router.push({
          path: `/my/earnings/${val}`
        })
      },
      orderChange (val) {
        if (!val) {
          this.setAlert({
            dialog: true,
            text: '暂未开放，敬请期待'
          })
          return
        }
        this.$router.push({
          path: `/my/${val}`
        })
      },
      returnBtn() {
        this.setAlert({
          dialog: true,
          text: '你还没完成任务呢'
        })
      },
      ...mapMutations({
        'setAlert': 'SET_ALERT'
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/sass/mixin";
  @import "../common/sass/variable";

  .my {
    .top {
      display: flex;
      align-content: center;
      padding: .43rem /* 16/37.5 */;
      background-color: $color-theme;
      .portrait {
        overflow: hidden;
        border-radius: 50%;
        width: 2.13rem /* 80/37.5 */;
        .portrait-img {
          width: 100%;
        }
      }
      .text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: .43rem /* 16/37.5 */;
        color: #fff;
        .ipone {
          font-size: .43rem /* 16/37.5 */;
        }
        .desc {
          display: flex;
          justify-content: space-between;
          font-size: .37rem /* 14/37.5 */;
        }
      }
    }
    .packet {
      margin-top: .4rem /* 15/37.5 */;
      background-color: #fff;
      box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
      .list-wrap {
        display: flex;
        flex-wrap: wrap;
        .list {
          margin: .27rem /* 10/37.5 */ .16rem /* 6/37.5 */;
          .img {
            display: none;
            position: absolute;
            top: .27rem /* 10/37.5 */;
            left: .27rem /* 10/37.5 */;
            width: .53rem /* 20/37.5 */;
            height: .53rem /* 20/37.5 */
          }
          .money {
            display: flex;
            position: absolute;
            bottom: .13rem /* 5/37.5 */;
            left: 50%;
            font-size: .32rem /* 12/37.5 */;
            text-align: center;
            color: #fff;
            transform: translateX(-50%);
          }
          .icon-renminbi {
            display: inline-block;
            font-size: .27rem /* 10/37.5 */;
          }
        }
        img {
          width: 100%;
        }
      }
      .icon-hongbao1 {
        position: relative;
        font-size: 1.33rem /* 50/37.5 */;
        color: #f65458;
      }
    }
    .earnings {
      margin-top: .4rem /* 15/37.5 */;
      .money {
        font-size: .32rem /* 12/37.5 */;
        color: #f65458;
      }
    }
    .order {
      // @include border-b-1px(100%);
    }
    .return-btn {
      padding: 0 1.33rem /* 50/37.5 */;
      margin-top: 2.13rem /* 80/37.5 */;
      text-align: center;
    }
  }
</style>
