<template lang="html">
  <section class="full-fixed my-earnings">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="one" title="我的收益"/>
      <mu-tab value="two" title="推广收益"/>
      <mu-tab value="three" title="其他收益"/>
    </mu-tabs>
    <div class="main">
      <scroll ref="scroll">
        <div>
          <keep-alive>
            <router-view name="main" @scrolls="scrolls"></router-view>
            <!-- <transition name="transX">
            </transition> -->
          </keep-alive>
        </div>
      </scroll>
    </div>
  </section>
</template>

<script>
  import Scroll from '@/components/Scroll'

  export default {
    data () {
      return {
        activeTab: 'tab1'
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
        console.log(val)
        this.$router.replace({
          path: `/my/earnings/${val}`
        })
      },
      handleActive () {
      },
      scrolls() {
        setTimeout(() => {
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
  .my-earnings {
    overflow: hidden;
    background-color: #fff;
  }
</style>
