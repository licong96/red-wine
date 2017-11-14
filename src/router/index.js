import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'   // 重定向 和 别名
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: resolve => require(['@/views/Login'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '商城'
      },
      component: resolve => require(['@/views/Home'], resolve),
      children: [
        {
          path: 'pay',
          meta: {
            title: '支付'
          },
          component: resolve => require(['@/views/HomePay'], resolve)
        },
        {
          path: 'detail/:id',
          name: 'detail',
          meta: {
            title: '商品详情'
          },
          component: resolve => require(['@/views/HomeDetail'], resolve)
        }
      ]
    },
    {
      path: '/info',
      name: 'info',
      meta: {
        title: '资讯'
      },
      component: resolve => require(['@/views/Info'], resolve)
    },
    {
      path: '/my',
      name: 'my',
      meta: {
        title: '个人中心'
      },
      component: resolve => require(['@/views/My'], resolve),
      children: [
        {
          path: 'earnings',   // 我的收益
          meta: {
            title: '我的收益'
          },
          component: resolve => require(['@/views/MyEarnings'], resolve),
          children: [
            {
              path: 'one',
              meta: {
                title: '我的收益'
              },
              components: {   // 命名视图
                main: resolve => require(['@/views/MyEarningsOne'], resolve)
              }
            },
            {
              path: 'two',
              meta: {
                title: '推广收益'
              },
              components: {   // 命名视图
                main: resolve => require(['@/views/MyEarningsTwo'], resolve)
              }
            },
            {
              path: 'three',
              meta: {
                title: '其他收益'
              },
              components: {   // 命名视图
                main: resolve => require(['@/views/MyEarningsThree'], resolve)
              }
            }
          ]
        },
        {
          path: 'order',
          meta: {
            title: '我的订单'
          },
          component: resolve => require(['@/views/MyOrder'], resolve)
        },
        {
          path: 'code',
          meta: {
            title: '推广二维码'
          },
          component: resolve => require(['@/views/MyCode'], resolve)
        }
      ]
    }
  ]
})
