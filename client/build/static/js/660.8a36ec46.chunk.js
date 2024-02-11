"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[660],{5484:(e,a,s)=>{s.d(a,{c:()=>c});s(9060);var t=s(12),o=s(2496);const c=()=>(0,o.jsx)("nav",{children:(0,o.jsxs)("ul",{className:"nav flex-column",children:[(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(t.cH,{to:"/admin/dashboard",className:"nav-link",children:"Dashboard"})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(t.cH,{to:"/admin/product",className:"nav-link",children:"product"})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(t.cH,{to:"/admin/products",className:"nav-link",children:"products"})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(t.cH,{to:"/admin/category",className:"nav-link",children:"Category"})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(t.cH,{to:"/admin/subcategory",className:"nav-link",children:"Sub Category"})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(t.cH,{to:"/admin/coupons",className:"nav-link",children:"Coupons"})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(t.cH,{to:"/user/password",className:"nav-link",children:"Password"})})]})})},896:(e,a,s)=>{s.d(a,{c:()=>o});s(9060);var t=s(2496);const o=e=>{let{name:a,handleSubmit:s,setName:o}=e;return(0,t.jsx)("form",{onSubmit:s,children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{children:"Name"}),(0,t.jsx)("input",{type:"text",className:"form-control mt-3",value:a,onChange:e=>o(e.target.value),autoFocus:!0,required:!0}),(0,t.jsx)("br",{}),(0,t.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Submit"})]})})}},2392:(e,a,s)=>{s.d(a,{AX:()=>d,C:()=>i,gn:()=>l,od:()=>o,r:()=>r,sX:()=>n,sl:()=>c});var t=s(8372);const o=async()=>{try{console.log("im inside getCategories");const e=await t.c.get("".concat("http://localhost:8080/api/v1","/category/categories"));return console.log("Sending response from getCategories",e),e}catch(e){console.log(e)}},c=async e=>{try{console.log("i am inside getSingleCategories");const a=await t.c.get("".concat("http://localhost:8080/api/v1","/category/category/").concat(e));return console.log("Sending response from getSingleCategories",a),a}catch(a){console.log(a)}},n=async(e,a)=>{try{return await t.c.post("".concat("http://localhost:8080/api/v1","/category/category"),{name:e},{headers:{authtoken:a}})}catch(s){console.log(s)}},r=async(e,a)=>{try{const s=await t.c.delete("".concat("http://localhost:8080/api/v1","/category/category/").concat(e),{headers:{authtoken:a}});return console.log("Remove CAtegory Response :->",s),s}catch(s){console.log(s)}},l=async(e,a,s)=>{try{console.log("inside updateCategory");const o=await t.c.put("".concat("http://localhost:8080/api/v1","/category/category/").concat(e),a,{headers:{authtoken:s}});return console.log("returing response from updateCategory",o),o}catch(o){console.log(o)}},i=async e=>{try{console.log("i am inside getSubCategoryBasedOnParentId");const a=await t.c.get("".concat("http://localhost:8080/api/v1","/category/category/subcategory/").concat(e));return console.log("Sending response from getSubCategoryBasedOnParentId",a),a}catch(a){console.log("error --------\x3e",a.message)}},d=async e=>{try{console.log("im inside getProductsBasedOnCategory");const a=await t.c.get("".concat("http://localhost:8080/api/v1","/category/categoryproducts/").concat(e));return console.log(a),a}catch(a){console.log(a)}}},6660:(e,a,s)=>{s.r(a),s.d(a,{default:()=>g});var t=s(9060),o=s(5484),c=s(1228),n=s(4992),r=s(2392),l=s(1560),i=s(896),d=s(2496);const g=()=>{const[e,a]=(0,t.useState)(""),[s,g]=(0,t.useState)(!1),{user:m}=(0,n.w1)((e=>({...e})));let{slug:h}=(0,l.W4)();const u=(0,l.i6)();(0,t.useEffect)((()=>{p()}),[]);const p=()=>{(0,r.sl)(h).then((e=>{a(e.data.categoryExist.name)})).catch((e=>{console.error("Error loading category:",e)}))};return(0,d.jsx)("div",{className:"container-fluid",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsx)(o.c,{})}),(0,d.jsxs)("div",{className:"col",children:[(0,d.jsx)("h4",{children:"Update Category Page"}),(0,d.jsx)(i.c,{name:e,setName:a,handleSubmit:s=>{s.preventDefault(),g(!0),(0,r.gn)(h,{name:e},m.token).then((e=>{g(!1),a(""),console.log("API Response:",e),e&&e.data&&e.data.message?c.m4.success(e.data.message):console.error("Invalid response format:",e),u("/admin/category")})).catch((e=>{console.log(e),g(!1),e.response&&400===e.response.status&&c.m4.error(e.response.data)}))}})]})]})})}}}]);
//# sourceMappingURL=660.8a36ec46.chunk.js.map