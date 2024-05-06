"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[892],{15484:(e,a,c)=>{c.d(a,{c:()=>n});c(69060);var t=c(40012),s=c(82496);const n=()=>(0,s.jsx)("nav",{children:(0,s.jsxs)("ul",{className:"nav flex-column",children:[(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.cH,{to:"/admin/dashboard",className:"nav-link",children:"Dashboard"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.cH,{to:"/admin/product",className:"nav-link",children:"product"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.cH,{to:"/admin/products",className:"nav-link",children:"products"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.cH,{to:"/admin/category",className:"nav-link",children:"Category"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.cH,{to:"/admin/subcategory",className:"nav-link",children:"Sub Category"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.cH,{to:"/admin/coupons",className:"nav-link",children:"Coupons"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(t.cH,{to:"/user/password",className:"nav-link",children:"Password"})})]})})},20896:(e,a,c)=>{c.d(a,{c:()=>s});c(69060);var t=c(82496);const s=e=>{let{name:a,handleSubmit:c,setName:s}=e;return(0,t.jsx)("form",{onSubmit:c,children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{children:"Name"}),(0,t.jsx)("input",{type:"text",className:"form-control mt-3",value:a,onChange:e=>s(e.target.value),autoFocus:!0,required:!0}),(0,t.jsx)("br",{}),(0,t.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Submit"})]})})}},99044:(e,a,c)=>{c.d(a,{c:()=>s});c(69060);var t=c(82496);const s=e=>{let{keyword:a,setkeyword:c}=e;return(0,t.jsx)("div",{className:"pt-3 pb-3",children:(0,t.jsx)("input",{type:"search",placeholder:"Search in Category",value:a,onChange:e=>{e.preventDefault(),c(e.target.value.toLowerCase())},className:"form-control mt-3 mb-3"})})}},62392:(e,a,c)=>{c.d(a,{AX:()=>i,C:()=>d,gn:()=>l,od:()=>s,r:()=>o,sX:()=>r,sl:()=>n});var t=c(98372);const s=async()=>{try{return await t.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/categories"))}catch(e){console.log(e)}},n=async e=>{try{return await t.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category/").concat(e))}catch(a){console.log(a)}},r=async(e,a)=>{try{return await t.c.post("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category"),{name:e},{headers:{authtoken:a}})}catch(c){console.log(c)}},o=async(e,a)=>{try{return await t.c.delete("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category/").concat(e),{headers:{authtoken:a}})}catch(c){console.log(c)}},l=async(e,a,c)=>{try{return await t.c.put("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category/").concat(e),a,{headers:{authtoken:c}})}catch(s){console.log(s)}},d=async e=>{try{return await t.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category/subcategory/").concat(e))}catch(a){console.log("error --------\x3e",a.message)}},i=async e=>{try{return await t.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/categoryproducts/").concat(e))}catch(a){console.log(a)}}},51892:(e,a,c)=>{c.r(a),c.d(a,{default:()=>h});var t=c(69060),s=c(15484),n=c(51228),r=c(4992),o=c(62392),l=c(40012),d=c(20896),i=c(99044),m=c(82496);const h=()=>{const[e,a]=(0,t.useState)(""),[c,h]=(0,t.useState)(!1),[u,g]=(0,t.useState)([]),{user:p}=(0,r.w1)((e=>({...e}))),[v,x]=(0,t.useState)(""),y=()=>{(0,o.od)().then((e=>{g(e.data)}))};(0,t.useEffect)((()=>{y()}),[]);return(0,m.jsx)("div",{className:"container-fluid",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-2",children:(0,m.jsx)(s.c,{})}),(0,m.jsxs)("div",{className:"col",children:[(0,m.jsx)("h4",{children:"Create Category Page"}),(0,m.jsx)(d.c,{name:e,setName:a,handleSubmit:c=>{c.preventDefault(),h(!0),(0,o.sX)(e,p.token).then((e=>{h(!1),a(""),e&&e.data&&e.data.message?(n.m4.success(e.data.message,{position:"top-center"}),y()):console.error("Invalid response format:",e)})).catch((e=>{console.log(e),h(!1),e.response&&400===e.response.status&&n.m4.error(e.response.data)}))}}),(0,m.jsx)(i.c,{keyword:v,setkeyword:x}),(0,m.jsx)("div",{children:u&&u.categories&&u.categories.length>0?(0,m.jsxs)("table",{className:"table table-bordered",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Category"}),(0,m.jsx)("th",{children:"Actions"})]})}),(0,m.jsx)("tbody",{children:u.categories.filter((e=>a=>a.name.toLowerCase().includes(e))(v)).map((e=>(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:e.name}),(0,m.jsxs)("td",{children:[(0,m.jsx)(l.cH,{to:"/admin/category/".concat(e.slug),children:(0,m.jsx)("button",{className:"btn btn-warning",children:"Update"})}),(0,m.jsx)("button",{className:"btn btn-danger",onClick:()=>(async e=>{window.confirm("Delete? ".concat(e))&&(h(!0),(0,o.r)(e,p.token).then((a=>{h(!1),n.m4.error('"'.concat(e,'" category Deleted')),y()})).catch((e=>{console.log(e),h(!1),n.m4.error(e.response.data)})))})(e.slug),children:"Delete"})]})]},e._id)))})]}):(0,m.jsx)("p",{children:"No categories found."})})]})]})})}}}]);
//# sourceMappingURL=892.8c3edc15.chunk.js.map