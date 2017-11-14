<template lang="html">
  <!-- 我的订单 -->
  <section class="full-fixed my-order">
    <mu-card class="card">
      <mu-card-title title="
        澳洲原瓶进口红酒梅洛葡萄酒干红750ml" subTitle="2017-11-14"/>
      <mu-card-media>
        <img src="https://img.alicdn.com/bao/uploaded/i4/3075140505/TB20l6lXPgy_uJjSZTEXXcYkFXa_!!3075140505.jpg_b.jpg" />
      </mu-card-media>
      <mu-card-actions>
        <mu-flat-button label="退货"/>
        <mu-flat-button label="收货"/>
      </mu-card-actions>
    </mu-card>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  .my-order {
    .card {
      margin-bottom: .27rem /* 10/37.5 */;
    }
  }
</style>
