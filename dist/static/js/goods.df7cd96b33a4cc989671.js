webpackJsonp([2],{0:function(t,e,n){"use strict";var s=n(13),a=n.n(s),i=n(14),o=n.n(i),r={components:{Foot:a.a,Swiper:o.a},filters:{price:function(t){var e=t.toString();if(e.indexOf(".")>-1){var n=e.split(".");return n[0]+"."+(n[1]+"0").substr(0,2)}return e+".00"}}};e.a=r},1:function(t,e,n){"use strict";var s={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",rank:"/category/rank",subList:"/category/subList",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartList:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMrremove:"/cart/mrremove",addressList:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};e.a=s;for(var a in s)s.hasOwnProperty(a)&&(s[a]="http://rap2api.taobao.org/app/mock/7058"+s[a])},10:function(t,e){},11:function(t,e){},110:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(79),a=(n.n(s),n(80)),i=(n.n(a),n(78)),o=(n.n(i),n(83)),r=(n.n(o),n(81)),c=(n.n(r),n(82)),u=(n.n(c),n(84)),d=(n.n(u),n(3)),l=n(17),f=n.n(l),h=n(1),p=n(0),m=n(32),v=n.n(m),g=v.a.parse(location.search.substr(1)),b=g.id,y=["商品详情","本店成交"];new d.default({el:"#app",data:{details:null,Tab:y,tabIndex:0,dealLists:null,bannerLists:[],skuType:1,showSku:!1,skuNum:1,showAddMsg:!1,isAddSku:!1,loading:!1,buyMsg:!1},created:function(){this.getDetails()},methods:{getDetails:function(){var t=this;f.a.get(h.a.details,{params:{id:b}}).then(function(e){t.details=e.data.data,t.details.imgs.forEach(function(e){t.bannerLists.push({clickUrl:"javascript:;",img:e})})})},changeTab:function(t){this.tabIndex=t,t&&this.getDeal()},getDeal:function(){var t=this;this.dealLists||(this.loading=!0,f.a.get(h.a.deal).then(function(e){t.dealLists=e.data.data.lists,t.loading=!1}))},chooseSku:function(t){this.skuType=t,this.showSku=!0},changeSkuNum:function(t){t<0&&1===this.skuNum||(this.skuNum+=t)},addCart:function(){var t=this;f.a.post(h.a.addCart,{id:b,number:this.skuNum}).then(function(e){200===e.data.status&&(t.showSku=!1,t.isAddSku=!0,t.showAddMsg=!0,setTimeout(function(){t.showAddMsg=!1},1e3))})},buy:function(){var t=this;this.buyMsg=!0,setTimeout(function(){t.buyMsg=!1},1e3)}},watch:{showSku:function(t,e){document.body.style.overflow=t?"hidden":"auto",document.querySelector("html").style.overflow=t?"hidden":"auto",document.body.style.height=t?"100%":"auto",document.querySelector("html").style.height=t?"100%":"auto"}},mixins:[p.a]})},12:function(t,e){},13:function(t,e,n){function s(t){n(11)}var a=n(2)(n(7),n(15),s,null,null);t.exports=a.exports},14:function(t,e,n){function s(t){n(12)}var a=n(2)(n(8),n(16),s,null,null);t.exports=a.exports},15:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,s){return n("li",{key:s,class:{active:s==t.curIndex},on:{click:function(n){t.changeNav(e,s)}}},[n("a",[n("i",{class:e.icon}),t._v(" "),n("div",[t._v(t._s(e.name))])])])}),0)])},staticRenderFns:[]}},16:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t){return n("div",{staticClass:"swp-page swiper-slide"},[n("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[n("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])}),0),t._v(" "),n("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-home",href:"member.html"}];e.default={data:function(){return{navConfig:s,curIndex:location.search.substr(1).split("=")[1]||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}}},78:function(t,e){},79:function(t,e){},8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(22),a=n(10);n.n(a);e.default={name:"swipe",props:["lists"],mounted:function(){new s.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"},autoplay:{delay:1e3}})}}},80:function(t,e){},81:function(t,e){},82:function(t,e){},83:function(t,e){},84:function(t,e){}},[110]);
//# sourceMappingURL=goods.df7cd96b33a4cc989671.js.map