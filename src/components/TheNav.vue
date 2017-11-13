<template>
  <!-- 首页底部导航 -->
  <footer class="the-nav">
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="home" title="商城" icon=":iconfont icon-shangcheng"/>
        <mu-bottom-nav-item value="info" title="资讯" icon=":iconfont icon-zixun"/>
        <mu-bottom-nav-item value="my" title="我的" icon=":iconfont icon-gerenzhongxin"/>
      </mu-bottom-nav>
    </mu-paper>
  </footer>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    data () {
      return {
        bottomNav: ''
      }
    },
    computed: {
    },
    methods: {
      handleChange (val) {
        console.log(val)
        if (val === 'info') {
          this.setAlert({
            dialog: true,
            text: '暂未开放，敬请期待'
          })
        } else {
          this.bottomNav = val
          this.$router.push({
            path: `/${val}`
          })
        }
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

  .the-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 3;
  }
</style>
