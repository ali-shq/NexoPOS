var o=Object.defineProperty;var h=(r,s,e)=>s in r?o(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e;var t=(r,s,e)=>(h(r,typeof s!="symbol"?s+"":s,e),e);import{a,B as p,b as n}from"./bootstrap-Bpe5LRJd.js";import{_ as i}from"./currency-lOMYG1Wf.js";import"./runtime-core.esm-bundler-RT2b-_3S.js";class c{constructor(){t(this,"_mysales");t(this,"_reports",{mysales:a.get("/api/reports/cashier-report")});this._mysales=new p({});for(let s in this._reports)this.loadReport(s)}loadReport(s){return this._reports[s].subscribe(e=>{this[`_${s}`].next(e)})}refreshReport(){a.get("/api/reports/cashier-report?refresh=true").subscribe(s=>{this._mysales.next(s),n.success(i("The report has been refreshed."),i("OK")).subscribe()})}get mysales(){return this._mysales}}window.Cashier=new c;
