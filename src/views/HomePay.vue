<template lang="html">
  <!-- 支付 -->
  <section class="full-fixed pay">
    <mu-raised-button label="支付48元" class="demo-raised-button" primary @click="pay"/>
  </section>
</template>

<script>
  import wx from 'weixin-js-sdk'
  import {api} from '@/api/config'

  export default {
    data() {
      return {
        wxData: {}
      }
    },
    created() {
      this.getwpay()
    },
    computed: {
    },
    methods: {
      getwpay() {
        this.axios.get(`${api}/index/Wpay/wpay_config`)
        .then((response) => {
          console.log(response)
          this.wxData = response.data
          this.wpayConfig()
        })
        .catch((error) => {
          alert('网路错误', error)
        })
      },
      wpayConfig() {
        wx.config({
          debug: false,
          appId: this.wxData.appId,
          timestamp: this.wxData.timestamp,
          nonceStr: this.wxData.nonceStr,
          signature: this.wxData.signature,
          jsApiList: [
            'chooseWXPay'
          ]
        })
        // wx.ready(function() {})
        wx.error(function (res) {
          // alert(res.errMsg)
        })
      },
      pay() {
        let userInfo = this.localstore.get('userInfo')
        let _this = this
        console.log(userInfo)
        this.axios.post(`${api}/index/Wpay/chooseWXPay`, {
          user_id: userInfo.id
        })
        .then((response) => {
          wx.chooseWXPay({
            timestamp: response.data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: response.data.nonceStr, // 支付签名随机串，不长于 32 位
            package: response.data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: response.data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: response.data.paySign, // 支付签名
            success: function (res) {
              // 支付成功后的回调函数
              _this.$router.push({
                path: '/my'
              })
            }
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .pay {
    text-align: center;
    .demo-raised-button {
      margin-top: 2.67rem /* 100/37.5 */;
    }
  }
</style>
