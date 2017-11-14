<template>
  <div id="app" v-show="userInfo">
    <!-- icon图标 -->
    <div v-wechat-title="$route.meta.title" img-set="./common/img/logo.png"></div>
    <!-- 修改微信title -->
    <div v-wechat-title="$route.meta.title"></div>
    <!-- 路由 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <the-nav></the-nav>
    <!-- 弹出框 -->
    <mu-dialog :open="dialog" @close="dialogClose" title="">
      {{alert.text}}
      <mu-flat-button label="确定" slot="actions" primary @click="dialogClose"/>
    </mu-dialog>
  </div>
</template>

<script>
  import TheNav from '@/components/TheNav'
  import {mapGetters} from 'vuex'

  export default {
    name: 'app',
    data() {
      return {
        userInfo: false,
        dialog: false
      }
    },
    created() {
      this.getUserID()    // 获取用户信息
    },
    computed: {
      ...mapGetters([
        'alert'
      ])
    },
    methods: {
      getUserID() {
        this.userInfo = this.localstore.get('userInfo')
        console.log(this.userInfo)
        if (!this.userInfo.id) {    // 没有userinfo
          window.location.href = 'http://red.tianshic.com/index.php/index/Login/index'
        }
      },
      dialogClose() {
        this.dialog = false
      }
    },
    watch: {
      alert(newValue) {
        if (newValue.dialog) {
          this.dialog = true
        } else {
          this.dialog = false
        }
      }
    },
    components: {
      TheNav
    }
  }
</script>

<style scoped lang="scss">
  @import "./common/sass/variable";

  #app {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
