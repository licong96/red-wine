<template lang="html">
  <!-- 我的收益列表 -->
  <section class="list-earnings">
    <mu-list>
      <mu-list-item title="张三" describeText="2017-11-14" class="list">
        <mu-avatar src="http://www.feizl.com/upload2007/2014_08/14081816263083.jpg" slot="leftAvatar"/>
        <div class="text" slot="right">
          <span class="money"><i class="iconfont icon-renminbi"></i>28</span>
          <mu-badge content="红包" color="#f65458" slot="after"/>
        </div>
      </mu-list-item>
      <mu-list-item title="张三" describeText="2017-11-14" class="list">
        <mu-avatar src="http://www.feizl.com/upload2007/2014_08/14081816263083.jpg" slot="leftAvatar"/>
        <div class="text" slot="right">
          <span class="money"><i class="iconfont icon-renminbi"></i>100</span>
          <mu-badge content="现金" color="#673ab7" slot="after"/>
        </div>
      </mu-list-item>
    </mu-list>
  </section>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="scss">
  @import "../common/sass/mixin";
  @import "../common/sass/variable";

  .list-earnings {
    background-color: #fff;
    .list {
      @include border-b-1px(0);
    }
    .money {
      display: flex;
      align-items: center;
      padding-bottom: .11rem /* 4/37.5 */;
      font-size: .43rem /* 16/37.5 */;
      color: #f65458;
      .icon-renminbi {
        font-size: .32rem /* 12/37.5 */;
      }
    }
  }
</style>
