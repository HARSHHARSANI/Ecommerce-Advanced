"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[660],{15484:(e,a,c)=>{c.d(a,{c:()=>n});c(69060);var t=c(40012),s=c(82496);const n=()=>(0,s.jsx)("nav",{children:(0,s.jsxs)("ul",{className:"nav flex-column",children:[(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.cH,{to:"/admin/dashboard",className:"nav-link",children:"Dashboard"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.cH,{to:"/admin/product",className:"nav-link",children:"product"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.cH,{to:"/admin/products",className:"nav-link",children:"products"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.cH,{to:"/admin/category",className:"nav-link",children:"Category"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.cH,{to:"/admin/subcategory",className:"nav-link",children:"Sub Category"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.cH,{to:"/admin/coupons",className:"nav-link",children:"Coupons"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.cH,{to:"/user/password",className:"nav-link",children:"Password"})})]})})},20896:(e,a,c)=>{c.d(a,{c:()=>s});c(69060);var t=c(82496);const s=e=>{let{name:a,handleSubmit:c,setName:s}=e;return(0,t.jsx)("form",{onSubmit:c,children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{children:"Name"}),(0,t.jsx)("input",{type:"text",className:"form-control mt-3",value:a,onChange:e=>s(e.target.value),autoFocus:!0,required:!0}),(0,t.jsx)("br",{}),(0,t.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Submit"})]})})}},62392:(e,a,c)=>{c.d(a,{AX:()=>d,C:()=>i,gn:()=>l,od:()=>s,r:()=>o,sX:()=>r,sl:()=>n});var t=c(98372);const s=async()=>{try{return await t.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/categories"))}catch(e){console.log(e)}},n=async e=>{try{return await t.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category/").concat(e))}catch(a){console.log(a)}},r=async(e,a)=>{try{return await t.c.post("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category"),{name:e},{headers:{authtoken:a}})}catch(c){console.log(c)}},o=async(e,a)=>{try{return await t.c.delete("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category/").concat(e),{headers:{authtoken:a}})}catch(c){console.log(c)}},l=async(e,a,c)=>{try{return await t.c.put("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category/").concat(e),a,{headers:{authtoken:c}})}catch(s){console.log(s)}},i=async e=>{try{return await t.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category/subcategory/").concat(e))}catch(a){console.log("error --------\x3e",a.message)}},d=async e=>{try{return await t.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/categoryproducts/").concat(e))}catch(a){console.log(a)}}},46660:(e,a,c)=>{c.r(a),c.d(a,{default:()=>m});var t=c(69060),s=c(15484),n=c(51228),r=c(4992),o=c(62392),l=c(51560),i=c(20896),d=c(82496);const m=()=>{const[e,a]=(0,t.useState)(""),[c,m]=(0,t.useState)(!1),{user:h}=(0,r.w1)((e=>({...e})));let{slug:u}=(0,l.W4)();const g=(0,l.i6)();(0,t.useEffect)((()=>{v()}),[]);const v=()=>{(0,o.sl)(u).then((e=>{a(e.data.categoryExist.name)})).catch((e=>{console.error("Error loading category:",e)}))};return(0,d.jsx)("div",{className:"container-fluid",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsx)(s.c,{})}),(0,d.jsxs)("div",{className:"col",children:[(0,d.jsx)("h4",{children:"Update Category Page"}),(0,d.jsx)(i.c,{name:e,setName:a,handleSubmit:c=>{c.preventDefault(),m(!0),(0,o.gn)(u,{name:e},h.token).then((e=>{m(!1),a(""),e&&e.data&&e.data.message?n.m4.success(e.data.message,{position:"top-center"}):console.error("Invalid response format:",e),g("/admin/category")})).catch((e=>{console.log(e),m(!1),e.response&&400===e.response.status&&n.m4.error(e.response.data)}))}})]})]})})}}}]);
//# sourceMappingURL=660.f12f5a5e.chunk.js.map