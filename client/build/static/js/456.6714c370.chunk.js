/*! For license information please see 456.6714c370.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[456],{8400:(t,e,r)=>{r.r(e),r.d(e,{default:()=>x});var n=r(9060),o=r(1228),a=r(9512),c=r(2951),i=r(5072);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"};var l=r(92),u=function(t,e){return n.createElement(l.c,(0,i.c)({},t,{ref:e,icon:s}))};const h=n.forwardRef(u);const f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3 27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-.7-181.3-.6-271.9-.3z"}}]},name:"google-plus",theme:"outlined"};var d=function(t,e){return n.createElement(l.c,(0,i.c)({},t,{ref:e,icon:f}))};const m=n.forwardRef(d);var p=r(4992),v=r(1560),g=r(12),y=r(9956),w=r(2496);const x=()=>{const[t,e]=(0,n.useState)("dreamoscp@gmail.com"),[r,i]=(0,n.useState)("123456"),[s,l]=(0,n.useState)(!1),u=(0,p.OY)(),f=(0,v.i6)(),d=(0,v.IT)(),{user:x}=(0,p.w1)((t=>({...t}))),b=t=>{try{var e,r;if("admin"===t.role)f((null===(e=d.state)||void 0===e?void 0:e.from)||"/admin/dashboard");else f((null===(r=d.state)||void 0===r?void 0:r.from)||"/user/history")}catch(n){console.log(n)}},E=async e=>{e.preventDefault(),l(!0);try{const e=await a.c.signInWithEmailAndPassword(t,r),{user:n}=e,o=await n.getIdTokenResult();(0,y.ER)(o.token).then((t=>{u({type:"LOGGED_IN_USER",payload:{name:t.data.name,email:t.data.email,token:o.token,role:t.data.role,id:t.data._id}}),d.state?f(d.state):b(t.data)})).catch()}catch(n){console.log(n),o.m4.error(n),l(!1)}};(0,n.useEffect)((()=>{x&&x.token&&f("/")}),[]);return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("div",{className:"container p-5",children:(0,w.jsxs)("div",{className:"row",children:[(0,w.jsx)("div",{className:"col-md-6 offset-md-3"}),s?(0,w.jsx)("h4",{className:"text-secondary",children:"Loading ....."}):(0,w.jsx)("h4",{children:"Login"}),(0,w.jsxs)("form",{onSubmit:E,children:[(0,w.jsxs)("div",{className:"form-group",children:[(0,w.jsx)("input",{type:"email",className:"form-control",value:t,onChange:t=>e(t.target.value),autoFocus:!0,placeholder:"Enter Your Email"}),(0,w.jsx)("br",{}),(0,w.jsx)("input",{type:"password",className:"form-control",value:r,onChange:t=>i(t.target.value),placeholder:"Enter Your Password"}),(0,w.jsx)("br",{})]}),(0,w.jsx)(c.cp,{type:"primary",shape:"round",icon:(0,w.jsx)(h,{}),size:"large",onClick:E,block:!0,className:"mb-3",disabled:!t||r.length<6,children:"Login With Email And Password"})]}),(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(c.cp,{type:"primary",shape:"round",icon:(0,w.jsx)(m,{}),size:"large",onClick:async()=>{try{a.c.signInWithPopup(a.W).then((async t=>{const{user:e}=t,r=await e.getIdTokenResult();(0,y.ER)(r.token).then((t=>{u({type:"LOGGED_IN_USER",payload:{name:t.data.name,email:t.data.email,token:r.token,role:t.data.role,id:t.data._id}}),b(t)})).catch()}))}catch(t){console.log(t),o.m4.error(t)}},block:!0,className:"mb-3",disabled:!t||r.length<6,style:{background:"red",borderColor:"red"},children:"Login With Google"})}),(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(g.cH,{to:"/forgot/password",className:"text-danger container text-end",children:"Forgot Password"})})]})})})}},456:(t,e,r)=>{r.d(e,{c:()=>s});var n=r(5072),o=r(9060);const a={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};var c=r(92),i=function(t,e){return o.createElement(c.c,(0,n.c)({},t,{ref:e,icon:a}))};const s=o.forwardRef(i)},6140:(t,e,r)=>{var n;r.d(e,{At:()=>c,Yr:()=>i,ur:()=>a});var o=r(9060);const{isValidElement:a}=n||(n=r.t(o,2));function c(t){return t&&a(t)&&t.type===o.Fragment}function i(t,e){return function(t,e,r){return a(t)?o.cloneElement(t,"function"===typeof r?r(t.props||{}):r):e}(t,t,e)}},7444:(t,e,r)=>{r.d(e,{c:()=>c,s:()=>a});var n=r(9060);const o=n.createContext(!1),a=t=>{let{children:e,disabled:r}=t;const a=n.useContext(o);return n.createElement(o.Provider,{value:null!==r&&void 0!==r?r:a},e)},c=o},5148:(t,e,r)=>{r.d(e,{W:()=>a,c:()=>c});var n=r(9060);const o=n.createContext(void 0),a=t=>{let{children:e,size:r}=t;const a=n.useContext(o);return n.createElement(o.Provider,{value:r||a},e)},c=o},4348:(t,e,r)=>{r.d(e,{c:()=>a});var n=r(9060),o=r(5148);const a=t=>{const e=n.useContext(o.c);return n.useMemo((()=>t?"string"===typeof t?null!==t&&void 0!==t?t:e:t instanceof Function?t(e):e:e),[t,e])}},2144:(t,e,r)=>{r.d(e,{eu:()=>i,yW:()=>s});var n=r(264),o=r.n(n),a=(r(6776),r(9060));const c=a.createContext(null),i=(t,e)=>{const r=a.useContext(c),n=a.useMemo((()=>{if(!r)return"";const{compactDirection:n,isFirstItem:a,isLastItem:c}=r,i="vertical"===n?"-vertical-":"-";return o()("".concat(t,"-compact").concat(i,"item"),{["".concat(t,"-compact").concat(i,"first-item")]:a,["".concat(t,"-compact").concat(i,"last-item")]:c,["".concat(t,"-compact").concat(i,"item-rtl")]:"rtl"===e})}),[t,e,r]);return{compactSize:null===r||void 0===r?void 0:r.compactSize,compactDirection:null===r||void 0===r?void 0:r.compactDirection,compactItemClassnames:n}},s=t=>{let{children:e}=t;return a.createElement(c.Provider,{value:null},e)}},8488:(t,e,r)=>{function n(t,e,r){const{focusElCls:n,focus:o,borderElCls:a}=r,c=a?"> *":"",i=["hover",o?"focus":null,"active"].filter(Boolean).map((t=>"&:".concat(t," ").concat(c))).join(",");return{["&-item:not(".concat(e,"-last-item)")]:{marginInlineEnd:t.calc(t.lineWidth).mul(-1).equal()},"&-item":Object.assign(Object.assign({[i]:{zIndex:2}},n?{["&".concat(n)]:{zIndex:2}}:{}),{["&[disabled] ".concat(c)]:{zIndex:0}})}}function o(t,e,r){const{borderElCls:n}=r,o=n?"> ".concat(n):"";return{["&-item:not(".concat(e,"-first-item):not(").concat(e,"-last-item) ").concat(o)]:{borderRadius:0},["&-item:not(".concat(e,"-last-item)").concat(e,"-first-item")]:{["& ".concat(o,", &").concat(t,"-sm ").concat(o,", &").concat(t,"-lg ").concat(o)]:{borderStartEndRadius:0,borderEndEndRadius:0}},["&-item:not(".concat(e,"-first-item)").concat(e,"-last-item")]:{["& ".concat(o,", &").concat(t,"-sm ").concat(o,", &").concat(t,"-lg ").concat(o)]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{focus:!0};const{componentCls:r}=t,a="".concat(r,"-compact");return{[a]:Object.assign(Object.assign({},n(t,a,e)),o(r,a,e))}}r.d(e,{_:()=>a})},9016:(t,e,r)=>{r.d(e,{c:()=>n});const n=function(t){if(!t)return!1;if(t instanceof Element){if(t.offsetParent)return!0;if(t.getBBox){var e=t.getBBox(),r=e.width,n=e.height;if(r||n)return!0}if(t.getBoundingClientRect){var o=t.getBoundingClientRect(),a=o.width,c=o.height;if(a||c)return!0}}return!1}},2592:(t,e,r)=>{r.d(e,{c:()=>o});var n=r(800);function o(t,e){var r=(0,n.c)({},t);return Array.isArray(e)&&e.forEach((function(t){delete r[t]})),r}},1528:(t,e,r)=>{function n(t,e,r,n,o,a,c){try{var i=t[a](c),s=i.value}catch(l){return void r(l)}i.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var c=t.apply(e,r);function i(t){n(c,o,a,i,s,"next",t)}function s(t){n(c,o,a,i,s,"throw",t)}i(void 0)}))}}r.d(e,{c:()=>o})},7552:(t,e,r)=>{r.d(e,{c:()=>o});var n=r(1568);function o(){o=function(){return e};var t,e={},r=Object.prototype,a=r.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),i=new I(n||[]);return c(a,"_invoke",{value:O(t,r,i)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var m="suspendedStart",p="suspendedYield",v="executing",g="completed",y={};function w(){}function x(){}function b(){}var E={};h(E,s,(function(){return this}));var j=Object.getPrototypeOf,L=j&&j(j(R([])));L&&L!==r&&a.call(L,s)&&(E=L);var k=b.prototype=w.prototype=Object.create(E);function C(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,c,i,s){var l=d(t[o],t,c);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==(0,n.c)(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(l.arg)}var o;c(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function O(e,r,n){var o=m;return function(a,c){if(o===v)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw c;return{value:t,done:!0}}for(n.method=a,n.arg=c;;){var i=n.delegate;if(i){var s=N(i,n);if(s){if(s===y)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=d(e,r,n);if("normal"===l.type){if(o=n.done?g:p,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function N(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var c=a.arg;return c?c.done?(r[e.resultName]=c.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function R(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return c.next=c}}throw new TypeError((0,n.c)(e)+" is not iterable")}return x.prototype=b,c(k,"constructor",{value:b,configurable:!0}),c(b,"constructor",{value:x,configurable:!0}),x.displayName=h(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,h(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},C(_.prototype),h(_.prototype,l,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var c=new _(f(t,r,n,o),a);return e.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},C(k),h(k,u,"Generator"),h(k,s,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=R,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return i.type="throw",i.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var s=a.call(c,"catchLoc"),l=a.call(c,"finallyLoc");if(s&&l){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}}}]);
//# sourceMappingURL=456.6714c370.chunk.js.map