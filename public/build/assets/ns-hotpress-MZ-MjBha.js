var o=Object.defineProperty;var h=(r,e,s)=>e in r?o(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var l=(r,e,s)=>(h(r,typeof e!="symbol"?e+"":e,s),s);import{h as c}from"./bootstrap-Bpe5LRJd.js";ns.date.moment=c(ns.date.current);ns.date.interval=setInterval(()=>{ns.date.moment.add(1,"seconds"),ns.date.current=c(ns.date.current).add(1,"seconds").format("YYYY-MM-DD HH:mm:ss")},1e3);ns.date.getNowString=()=>{const r=Date.parse(new Date().toLocaleString("en-US",{timeZone:ns.date.timeZone}));return c(r).format("YYYY-MM-DD HH:mm:ss")};ns.date.getMoment=()=>{const r=Date.parse(new Date().toLocaleString("en-US",{timeZone:ns.date.timeZone}));return c(r)};class b{constructor(){l(this,"listeners",new Object);document.addEventListener("keydown",e=>this.processEvent(e))}processEvent(e){for(let s in this.listeners){const i=this.listeners[s].getConfig();i.hidden.length>0&&i.hidden.filter(n=>!(n instanceof HTMLElement)&&document.querySelector(n)===null).length!==i.hidden.length||i.visible.length>0&&!(i.visible.filter(n=>n instanceof HTMLElement||document.querySelector(n)!==null).length===i.visible.length)||i.callbacks.forEach(t=>{typeof t.action=="string"?this.processSingleAction({action:t.action.trim(),callback:t.callback}):typeof t.action=="object"&&t.action!==null&&t.action.length>0&&t.action.forEach(n=>{this.processSingleAction({action:n.toString().trim(),callback:t.callback})})})}}processSingleAction({action:e,callback:s}){const i=e.split("+"),t={ctrlKey:!1,altKey:!1,shiftKey:!1};i.forEach(a=>{switch(a){case"ctrl":t.ctrlKey=!0;break;case"alt":t.altKey=!0;break;case"shift":t.shiftKey=!0;break}});const n=i.filter(a=>!["ctrl","alt","shift"].includes(a));this.executeCallback({event,combinableKeys:t,callback:s,key:n[0]})}executeCallback({event:e,callback:s,combinableKeys:i,key:t}){if(e.key!==void 0&&e.key.toLowerCase()===t.toLowerCase()){let n=!0;for(let a in i)e[a]!==i[a]&&(n=!1);n&&s(e,t)}}create(e){return this.listeners[e]=new d}destroy(e){delete this.listeners[e]}}class d{constructor(){l(this,"visible",[]);l(this,"hidden",[]);l(this,"callbacks",[])}whenVisible(e){return typeof e=="object"?this.visible.push(...e):this.visible.push(e),this}clearVisible(){return this.visible=[],this}whenNotVisible(e){return e.length>0?this.hidden.push(...e):this.hidden.push(e),this}clearHidden(){return this.hidden=[],this}whenPressed(e,s){return this.callbacks.push({action:e,callback:s}),this}clearCallbacks(){return this.callbacks=[],this}getConfig(){return{callbacks:this.callbacks,hidden:this.hidden,visible:this.visible}}}export{b as N};
