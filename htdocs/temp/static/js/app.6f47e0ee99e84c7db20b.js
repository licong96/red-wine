webpackJsonp([14],{"5s8g":function(t,e){},NHnr:function(t,e,n){"use strict";function o(t){n("xJZj")}function a(t){n("YbyW")}Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"user",function(){return Y}),n.d(i,"alert",function(){return $});var r=n("5vqR"),l=n("4YfN"),c=n.n(l),u=n("9rMa"),s={data:function(){return{bottomNav:""}},computed:{},methods:c()({handleChange:function(t){console.log(t),"info"===t?this.setAlert({dialog:!0,text:"暂未开放，敬请期待"}):(this.bottomNav=t,this.$router.push({path:"/"+t}))}},Object(u.c)({setAlert:"SET_ALERT"}))},h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"the-nav"},[n("mu-paper",[n("mu-bottom-nav",{attrs:{value:t.bottomNav},on:{change:t.handleChange}},[n("mu-bottom-nav-item",{attrs:{value:"home",title:"商城",icon:":iconfont icon-shangcheng"}}),t._v(" "),n("mu-bottom-nav-item",{attrs:{value:"info",title:"资讯",icon:":iconfont icon-zixun"}}),t._v(" "),n("mu-bottom-nav-item",{attrs:{value:"my",title:"我的",icon:":iconfont icon-gerenzhongxin"}})],1)],1)],1)},m=[],p={render:h,staticRenderFns:m},f=p,d=n("/Xao"),v=o,g=d(s,f,!1,v,"data-v-424a553f",null),b=g.exports,y={name:"app",data:function(){return{userInfo:!1,dialog:!1}},created:function(){this.getUserID()},computed:c()({},Object(u.b)(["alert"])),methods:{getUserID:function(){this.userInfo=this.localstore.get("userInfo"),console.log(this.userInfo),this.userInfo.id||(window.location.href="http://red.tianshic.com/index.php/index/Login/index")},dialogClose:function(){this.dialog=!1}},watch:{alert:function(t){t.dialog?this.dialog=!0:this.dialog=!1}},components:{TheNav:b}},w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.userInfo,expression:"userInfo"}],attrs:{id:"app"}},[n("div",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:t.$route.meta.title,expression:"$route.meta.title"}],attrs:{"img-set":"./common/img/logo.png"}}),t._v(" "),n("div",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:t.$route.meta.title,expression:"$route.meta.title"}]}),t._v(" "),n("router-view"),t._v(" "),n("the-nav"),t._v(" "),n("mu-dialog",{attrs:{open:t.dialog,title:""},on:{close:t.dialogClose}},[t._v("\n    "+t._s(t.alert.text)+"\n    "),n("mu-flat-button",{attrs:{slot:"actions",label:"确定",primary:""},on:{click:t.dialogClose},slot:"actions"})],1)],1)},_=[],x={render:w,staticRenderFns:_},E=x,N=n("/Xao"),I=a,P=N(y,E,!1,I,"data-v-13cf7466",null),T=P.exports,S=n("zO6J");r.default.use(S.a);var U,j=new S.a({routes:[{path:"/",redirect:"/home"},{path:"/login",name:"login",meta:{title:"登录"},component:function(t){return Promise.all([n.e(0),n.e(9)]).then(function(){var e=[n("lmfZ")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/home",name:"home",meta:{title:"商城"},component:function(t){return Promise.all([n.e(0),n.e(12)]).then(function(){var e=[n("j7e0")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"pay",meta:{title:"支付"},component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("sYJQ")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"detail/:id",name:"detail",meta:{title:"商品详情"},component:function(t){return Promise.all([n.e(0),n.e(11)]).then(function(){var e=[n("ET9i")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/info",name:"info",meta:{title:"资讯"},component:function(t){return n.e(10).then(function(){var e=[n("YF2y")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/my",name:"my",meta:{title:"个人中心"},component:function(t){return n.e(8).then(function(){var e=[n("6wMn")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"earnings",meta:{title:"我的收益"},component:function(t){return Promise.all([n.e(0),n.e(7)]).then(function(){var e=[n("5epM")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"one",meta:{title:"我的收益"},components:{main:function(t){return Promise.all([n.e(0),n.e(6)]).then(function(){var e=[n("FeSb")];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"two",meta:{title:"推广收益"},components:{main:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){var e=[n("agve")];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"three",meta:{title:"其他收益"},components:{main:function(t){return Promise.all([n.e(0),n.e(5)]).then(function(){var e=[n("zswE")];t.apply(null,e)}.bind(this)).catch(n.oe)}}}]},{path:"order",meta:{title:"我的订单"},component:function(t){return n.e(3).then(function(){var e=[n("teim")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"code",meta:{title:"推广二维码"},component:function(t){return n.e(1).then(function(){var e=[n("Khjm")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}]}),C=n("mUbh"),Y=function(t){return t.user},$=function(t){return t.alert},A={user:{},alert:{}},L=A,R=n("a3Yh"),J=n.n(R),z=(U={},J()(U,"SET_USER",function(t,e){t.user=e}),J()(U,"SET_ALERT",function(t,e){t.alert=e}),U),F=z;n("6LYt");r.default.use(u.a);var H=new u.a.Store({actions:C,getters:i,state:L,mutations:F,plugins:[]}),M=n("q2H9"),O=n.n(M),X=n("D0oh"),D=n.n(X),Q=n("2sCs"),Z=n.n(Q),k=n("nUeE"),q=n.n(k);n("5s8g"),n("XQUS");r.default.use(O.a),r.default.use(D.a),r.default.use(n("HLLT")),r.default.config.productionTip=!1,r.default.prototype.axios=Z.a,r.default.prototype.localstore=q.a,new r.default({el:"#app",router:j,store:H,template:"<App/>",components:{App:T}})},XQUS:function(t,e){},YbyW:function(t,e){},mUbh:function(t,e){},xJZj:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6f47e0ee99e84c7db20b.js.map