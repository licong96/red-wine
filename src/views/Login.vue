<template lang="html">
  <!-- 登录 -->
  <section class="full-fixed login">
      <mu-text-field hintText="手机号码" v-model="mobile" type="number" icon=":iconfont icon-shoujihao"/>
    <div class="code">
      <mu-text-field hintText="验证码" v-model="code" type="number" icon=":iconfont icon-yanzhengma"/>
      <mu-raised-button label="获取验证码" class="demo-raised-button" primary @click="getCode"/><br>
    </div>
    <div class="btn">
      <mu-raised-button label="完成" fullWidth class="demo-raised-button accomplish" primary @click="success"/>
    </div>
  </section>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {api} from '@/api/config'

  export default {
    data() {
      return {
        mobile: '',
        code: '',
        mobileStatus: false,   // 防刷验证码
        responseCode: 0   // 获取到的验证码
      }
    },
    created() {
      this.mobileReg = /^1[3|4|5|7|8]\d{9}$/
    },
    methods: {
      getCode() {
        if (!this.mobileReg.test(this.mobile)) {
          this.setAlert({
            dialog: true,
            text: '手机号码有误'
          })
        } else if (this.mobileStatus) {
          this.axios.post(`${api}/index/login/Verification_mobile`, {
            mobile: this.mobile
          })
          .then((response) => {
            if (response.data.status === 200) {
              this.responseCode = response.data.code
              this.setAlert({
                dialog: true,
                text: `验证码：${this.responseCode}`
              })
            }
          })
          .catch((error) => {
            alert('网路错误', error)
          })
        }
      },
      success() {
        if (!this.mobileReg.test(this.mobile)) {
          this.setAlert({
            dialog: true,
            text: '手机号码有误'
          })
        } else if (parseInt(this.code) !== parseInt(this.responseCode)) {
          this.setAlert({
            dialog: true,
            text: '验证码错误'
          })
        } else {
          this.axios.post(`${api}/index/login/ok_mobile`, {
            mobile: this.mobile,
            code: this.code,
            openid: this.$route.query.statis
          })
          .then((response) => {
            if (response.data.status === 200) {   // 成功
              this.localstore.set('userInfo', response.data.users)
              this.$router.push({
                path: `/home`
              })
            } else {
              this.setAlert({
                dialog: true,
                text: '登录失败'
              })
            }
          })
          .catch((error) => {
            alert('网路错误', error)
          })
        }
      },
      ...mapMutations({
        'setAlert': 'SET_ALERT'
      })
    },
    watch: {
      mobile(newValue) {
        if (newValue.length === 11) {     // 仿刷验证码
          this.axios.post(`${api}/index/login/is_mobile`, {
            mobile: this.mobile
          })
          .then((response) => {
            if (response.data.status === 200) {
              this.mobileStatus = true
            }
          })
        }
      },
      code(newValue) {
        console.log(newValue)
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {
    padding-top: 1.07rem /* 40/37.5 */;
    .code {
      display: flex;
      padding-right: .27rem /* 10/37.5 */;
      .demo-raised-button {
        margin-left: .27rem /* 10/37.5 */;
      }
    }
    .btn {
      padding: 0 1.33rem /* 50/37.5 */;
      .accomplish {
        display: block;
        margin: 1.33rem /* 50/37.5 */ auto;
      }
    }
  }
</style>
