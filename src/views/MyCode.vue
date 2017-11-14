<template lang="html">
  <!-- 推广二维码 -->
  <section class="full-fixed my-code">
    <mu-paper class="demo-paper" :zDepth="2">
      <img class="code" src="../common/img/code.png" alt="">
    </mu-paper>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  .my-code {
    background: linear-gradient(360deg, #f65458, #673ab7);
    .demo-paper {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: auto;
      transform: translate(-50%, -50%);
    }
    .code {
      width: 5.33rem /* 200/37.5 */;
      height: 5.33rem /* 200/37.5 */;
    }
  }
</style>
