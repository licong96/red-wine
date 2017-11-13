// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import libFlexible from 'lib-flexible'
import fastclick from 'fastclick'

import 'muse-ui/dist/muse-ui.css'
import '@/common/sass/index.scss'

Vue.use(MuseUI)
Vue.use(libFlexible)                // 计算 rem
Vue.use(require('vue-wechat-title'))  // 微信title
Vue.config.productionTip = false

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
