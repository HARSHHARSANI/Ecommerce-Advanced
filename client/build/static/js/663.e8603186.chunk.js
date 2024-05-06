/*! For license information please see 663.e8603186.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[663],{78400:(t,e,r)=>{r.r(e),r.d(e,{default:()=>x});var n=r(69060),o=r(51228),a=r(9512),i=r(82951),c=r(45072);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"};var l=r(90092),u=function(t,e){return n.createElement(l.c,(0,c.c)({},t,{ref:e,icon:s}))};const h=n.forwardRef(u);const f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3 27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-.7-181.3-.6-271.9-.3z"}}]},name:"google-plus",theme:"outlined"};var d=function(t,e){return n.createElement(l.c,(0,c.c)({},t,{ref:e,icon:f}))};const p=n.forwardRef(d);var v=r(4992),m=r(51560),y=r(40012),g=r(59956),w=r(82496);const x=()=>{const[t,e]=(0,n.useState)("dreamoscp@gmail.com"),[r,c]=(0,n.useState)("123456"),[s,l]=(0,n.useState)(!1),u=(0,v.OY)(),f=(0,m.i6)(),d=(0,m.IT)(),{user:x}=(0,v.w1)((t=>({...t}))),b=t=>{try{var e,r;if("admin"===t.role)f((null===(e=d.state)||void 0===e?void 0:e.from)||"/");else f((null===(r=d.state)||void 0===r?void 0:r.from)||"/")}catch(n){console.log(n)}},E=async e=>{e.preventDefault(),l(!0);try{const e=await a.c.signInWithEmailAndPassword(t,r),{user:n}=e,o=await n.getIdTokenResult();(0,g.ER)(o.token).then((t=>{u({type:"LOGGED_IN_USER",payload:{name:t.data.name,email:t.data.email,token:o.token,role:t.data.role,id:t.data._id}}),d.state?f(d.state):b(t.data)})).catch()}catch(n){console.log(n),o.m4.error(n),l(!1)}};(0,n.useEffect)((()=>{x&&x.token&&f("/")}),[]);return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("div",{className:"container p-5",children:(0,w.jsxs)("div",{className:"row",children:[(0,w.jsx)("div",{className:"col-md-6 offset-md-3"}),s?(0,w.jsx)("h4",{className:"text-secondary",children:"Loading ....."}):(0,w.jsx)("h4",{children:"Login"}),(0,w.jsxs)("form",{onSubmit:E,children:[(0,w.jsxs)("div",{className:"form-group",children:[(0,w.jsx)("input",{type:"email",className:"form-control",value:t,onChange:t=>e(t.target.value),autoFocus:!0,placeholder:"Enter Your Email"}),(0,w.jsx)("br",{}),(0,w.jsx)("input",{type:"password",className:"form-control",value:r,onChange:t=>c(t.target.value),placeholder:"Enter Your Password"}),(0,w.jsx)("br",{})]}),(0,w.jsx)(i.cp,{type:"primary",shape:"round",icon:(0,w.jsx)(h,{}),size:"large",onClick:E,block:!0,className:"mb-3",disabled:!t||r.length<6,children:"Login With Email And Password"})]}),(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(i.cp,{type:"primary",shape:"round",icon:(0,w.jsx)(p,{}),size:"large",onClick:async()=>{try{a.c.signInWithPopup(a.W).then((async t=>{const{user:e}=t,r=await e.getIdTokenResult();(0,g.ER)(r.token).then((t=>{u({type:"LOGGED_IN_USER",payload:{name:t.data.name,email:t.data.email,token:r.token,role:t.data.role,id:t.data._id}}),b(t)})).catch()}))}catch(t){console.log(t),o.m4.error(t)}},block:!0,className:"mb-3",disabled:!t||r.length<6,style:{background:"red",borderColor:"red"},children:"Login With Google"})}),(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(y.cH,{to:"/forgot/password",className:"text-danger container text-end",children:"Forgot Password"})})]})})})}},35148:(t,e,r)=>{r.d(e,{W:()=>a,c:()=>i});var n=r(69060);const o=n.createContext(void 0),a=t=>{let{children:e,size:r}=t;const a=n.useContext(o);return n.createElement(o.Provider,{value:r||a},e)},i=o},34348:(t,e,r)=>{r.d(e,{c:()=>a});var n=r(69060),o=r(35148);const a=t=>{const e=n.useContext(o.c);return n.useMemo((()=>t?"string"===typeof t?null!==t&&void 0!==t?t:e:t instanceof Function?t(e):e:e),[t,e])}},1528:(t,e,r)=>{function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}r.d(e,{c:()=>o})},67552:(t,e,r)=>{r.d(e,{c:()=>o});var n=r(81568);function o(){o=function(){return e};var t,e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new F(n||[]);return i(a,"_invoke",{value:O(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",v="suspendedYield",m="executing",y="completed",g={};function w(){}function x(){}function b(){}var E={};h(E,s,(function(){return this}));var L=Object.getPrototypeOf,j=L&&L(L(C([])));j&&j!==r&&a.call(j,s)&&(E=j);var k=b.prototype=w.prototype=Object.create(E);function _(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,i,c,s){var l=d(t[o],t,i);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==(0,n.c)(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,s)}))}s(l.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function O(e,r,n){var o=p;return function(a,i){if(o===m)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=P(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=d(e,r,n);if("normal"===l.type){if(o=n.done?y:v,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function G(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError((0,n.c)(e)+" is not iterable")}return x.prototype=b,i(k,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:x,configurable:!0}),x.displayName=h(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,h(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},_(N.prototype),h(N.prototype,l,(function(){return this})),e.AsyncIterator=N,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new N(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(k),h(k,u,"Generator"),h(k,s,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}}}]);
//# sourceMappingURL=663.e8603186.chunk.js.map