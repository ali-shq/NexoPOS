import"./bootstrap-902d2ae2.js";import{_ as h,n as f}from"./currency-dc6217f5.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{an as c,af as o,G as r,H as s,c as d,A as m,F as b,al as v}from"./npm~@vue~runtime-core_-29a19feb.js";import{V as t,z as _}from"./npm~@vue~shared_-951a29c4.js";import"./npm~lodash-3db1c062.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~laravel-echo-0c2ba8ed.js";import"./npm~pusher-js-bbfae226.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~moment-a9aaa855.js";import"./npm~vue-3512c1bf.js";import"./npm~@vue~runtime-dom_-9455b728.js";import"./npm~@vue~reactivity_-beabd60a.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./npm~rx-f450d610.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-b10bd4cd.js";import"./npm~@babel~runtime_-9313f80d.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-dc0d19c5.js";import"./npm~fraction.js-cb0643cb.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-37239647.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./npm~numeral-304d6dd9.js";import"./npm~currency.js-57f74176.js";const y={name:"ns-orders-summary",data(){return{orders:[],subscription:null,hasLoaded:!1}},mounted(){this.hasLoaded=!1,this.subscription=Dashboard.recentOrders.subscribe(l=>{this.hasLoaded=!0,this.orders=l})},methods:{__:h,nsCurrency:f},unmounted(){this.subscription.unsubscribe()}},g={id:"ns-orders-summary",class:"flex flex-auto flex-col shadow rounded-lg overflow-hidden"},k={class:"p-2 flex title items-center justify-between border-b"},w={class:"font-semibold"},C={class:"head flex-auto flex-col flex h-64 overflow-y-auto ns-scrollbar"},L={key:0,class:"h-full flex items-center justify-center"},j={key:1,class:"h-full flex items-center justify-center flex-col"},O=s("i",{class:"las la-grin-beam-sweat text-6xl"},null,-1),V={class:"text-sm"},z={class:"text-lg font-semibold"},B={class:"flex -mx-2"},N={class:"px-1"},D={class:"text-semibold text-xs"},F=s("i",{class:"lar la-user-circle"},null,-1),R=s("div",{class:"divide-y-4"},null,-1),S={class:"px-1"},A={class:"text-semibold text-xs"},E=s("i",{class:"las la-clock"},null,-1);function G(l,a,H,W,i,n){const p=c("ns-close-button"),u=c("ns-spinner");return o(),r("div",g,[s("div",k,[s("h3",w,t(n.__("Recents Orders")),1),s("div",null,[d(p,{onClick:a[0]||(a[0]=e=>l.$emit("onRemove"))})])]),s("div",C,[i.hasLoaded?m("",!0):(o(),r("div",L,[d(u,{size:"8",border:"4"})])),i.hasLoaded&&i.orders.length===0?(o(),r("div",j,[O,s("p",V,t(n.__("Well.. nothing to show for the meantime.")),1)])):m("",!0),(o(!0),r(b,null,v(i.orders,e=>(o(),r("div",{key:e.id,class:_([e.payment_status==="paid"?"paid-order":"other-order","border-b single-order p-2 flex justify-between"])},[s("div",null,[s("h3",z,t(n.__("Order"))+" : "+t(e.code),1),s("div",B,[s("div",N,[s("h4",D,[F,s("span",null,t(e.user.username),1)])]),R,s("div",S,[s("h4",A,[E,s("span",null,t(e.created_at),1)])])])]),s("div",null,[s("h2",{class:_([e.payment_status==="paid"?"paid-currency":"unpaid-currency","text-xl font-bold"])},t(n.nsCurrency(e.total)),3)])],2))),128))])])}const vs=x(y,[["render",G]]);export{vs as default};
