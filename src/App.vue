<template>
  <div id="app">
    <!-- icon图标 -->
    <div v-wechat-title="$route.meta.title" img-set="../static/logo.png"></div>
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
        dialog: false
      }
    },
    computed: {
      ...mapGetters([
        'alert'
      ])
    },
    methods: {
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
</style>
