var p=Object.defineProperty;var m=(i,r,t)=>r in i?p(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t;var o=(i,r,t)=>(m(i,typeof r!="symbol"?r+"":r,t),t);import{a as s,b as a}from"./bootstrap-902d2ae2.js";import{_ as e}from"./currency-dc6217f5.js";import{B as h}from"./npm~rxjs-eeb06f17.js";import"./npm~lodash-3db1c062.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~laravel-echo-0c2ba8ed.js";import"./npm~pusher-js-bbfae226.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~moment-a9aaa855.js";import"./npm~vue-3512c1bf.js";import"./npm~@vue~runtime-dom_-9455b728.js";import"./npm~@vue~runtime-core_-29a19feb.js";import"./npm~@vue~reactivity_-beabd60a.js";import"./npm~@vue~shared_-951a29c4.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./npm~rx-f450d610.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-b10bd4cd.js";import"./npm~@babel~runtime_-9313f80d.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-dc0d19c5.js";import"./npm~fraction.js-cb0643cb.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-37239647.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./npm~numeral-304d6dd9.js";import"./npm~currency.js-57f74176.js";import"./npm~tslib-8dbab242.js";class n{constructor(){o(this,"_mysales");o(this,"_reports",{mysales:s.get("/api/reports/cashier-report")});this._mysales=new h({});for(let r in this._reports)this.loadReport(r)}loadReport(r){return this._reports[r].subscribe(t=>{this[`_${r}`].next(t)})}refreshReport(){s.get("/api/reports/cashier-report?refresh=true").subscribe(r=>{this._mysales.next(r),a.success(e("The report has been refreshed."),e("OK")).subscribe()})}get mysales(){return this._mysales}}window.Cashier=new n;
