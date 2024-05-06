"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[24],{78912:(e,t,c)=>{c.d(t,{c:()=>y});var a=c(14152),r=c(14212),s=c(69060),n=c(70748),o=c(29868),d=c(40012),l=c(2223),i=c(97899),p=c(74104),u=c.n(p),h=c(4992),m=c(82496);const{Meta:g}=a.default,y=e=>{let{product:t}=e;const c=(0,h.OY)(),[p,y]=(0,s.useState)("Add To Cart"),{title:v,images:x,slug:j,description:b,price:f,category:S,subCategory:w,quantity:N,shipping:C,color:k,brand:E}=t,{cart:T}=(0,h.w1)((e=>({...e})));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:t&&t.rating&&t.rating.length>0?(0,i.F)(t):(0,m.jsx)("div",{className:"text-center pt-1 pb-3",children:" No Rating Yet"})}),(0,m.jsx)(a.default,{hoverable:!0,style:{width:360},cover:(0,m.jsx)("img",{alt:"example",src:x&&x.length?x[0].url:l,style:{objectFit:"contain",height:"250px"},className:"p-1"}),actions:[(0,m.jsx)("div",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:(0,m.jsxs)(d.cH,{to:"/products/".concat(j),children:[(0,m.jsx)(n.c,{className:"text-warning"}),(0,m.jsx)("br",{}),"View Product"]})}),(0,m.jsx)(r.c,{title:p,children:(0,m.jsxs)("a",{onClick:()=>{let e=[];if(void 0!==typeof window){localStorage.getItem("cart")&&(e=JSON.parse(localStorage.getItem("cart"))),e.push({...t,count:1});const a=u().uniqWith(e,u().isEqual);localStorage.setItem("cart",JSON.stringify(a)),y("Added"),c({type:"ADD_TO_CART",payload:a}),c({type:"SET_VISIBLE",payload:!0})}},children:[(0,m.jsx)(o.c,{className:"text-danger",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}}),(0,m.jsx)("br",{}),'"Add to Cart"']})})],children:(0,m.jsx)(g,{title:(0,m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,m.jsx)("span",{children:v}),(0,m.jsxs)("span",{style:{marginLeft:"auto"},children:["\u20b9",f]})]}),description:"".concat(b&&b.substring(0,80),"...")})})]})}},97899:(e,t,c)=>{c.d(t,{F:()=>s});c(69060);var a=c(14032),r=c(82496);const s=e=>{if(e&&e.rating){const t=e&&e.rating;let c=[];const s=t.length;t.map((e=>c.push(e.star)));const n=c.reduce(((e,t)=>e+t),0)/s;return(0,r.jsx)("div",{className:"text-center pt-1 pb-3",children:(0,r.jsxs)("span",{children:[" ",(0,r.jsx)(a.c,{starDimension:"20px",starSpacing:"2px",rating:n,starRatedColor:"red",editing:!1})," ","(",e.rating.length,")"]})})}}},91056:(e,t,c)=>{c.d(t,{KM:()=>d,M$:()=>s,Sm:()=>u,YB:()=>l,_K:()=>r,az:()=>n,eO:()=>h,kD:()=>p,o7:()=>o,yO:()=>i});var a=c(98372);const r=async e=>{try{return(await a.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/product/product/").concat(e))).data}catch(t){console.log(t)}},s=async(e,t)=>{try{return await a.c.post("".concat("https://ecommerce-advanced.onrender.com/api/v1","/product/product"),e,{headers:{authtoken:t}})}catch(c){console.log(c)}},n=async e=>{try{return await a.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/product/products/").concat(e))}catch(t){console.log(t)}},o=async(e,t)=>{try{return(await a.c.delete("".concat("https://ecommerce-advanced.onrender.com/api/v1","/product/product/").concat(e),{headers:{authtoken:t}})).data}catch(c){console.log(c)}},d=async(e,t,c)=>{try{return await a.c.put("".concat("https://ecommerce-advanced.onrender.com/api/v1","/product/product/").concat(e),t,{headers:{authtoken:c}})}catch(r){console.log(r)}},l=async(e,t,c)=>{try{return(await a.c.post("".concat("https://ecommerce-advanced.onrender.com/api/v1","/product/sortedProducts"),{sort:e,order:t,page:c})).data}catch(r){console.log(r)}},i=async(e,t)=>await a.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/product/products/total")),p=async(e,t,c)=>{try{return await a.c.put("".concat("https://ecommerce-advanced.onrender.com/api/v1","/product/product/star/").concat(e),{star:t},{headers:{authtoken:c}})}catch(r){console.log(r)}},u=async e=>{try{return a.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/product/products/related/").concat(e))}catch(t){console.log(t)}},h=async e=>{try{return await a.c.post("".concat("https://ecommerce-advanced.onrender.com/api/v1","/product/search/filters"),e)}catch(t){console.log(t)}}},53208:(e,t,c)=>{c.d(t,{El:()=>o,MN:()=>d,Qx:()=>n,W_:()=>r,cB:()=>s,ic:()=>l});var a=c(98372);const r=async(e,t)=>{try{return await a.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/subcategory/subcategory"))}catch(c){console.log(c)}},s=async e=>{try{return await a.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/subcategory/subcategory/").concat(e))}catch(t){console.log(t)}},n=async(e,t)=>{try{return await a.c.post("".concat("https://ecommerce-advanced.onrender.com/api/v1","/subcategory/subcategory"),e,{headers:{authtoken:t}})}catch(c){console.log(c)}},o=async(e,t)=>{try{return await a.c.delete("".concat("https://ecommerce-advanced.onrender.com/api/v1","/subcategory/subcategory/").concat(e),{headers:{authtoken:t}})}catch(c){console.log(c)}},d=async(e,t,c)=>{try{return await a.c.put("".concat("https://ecommerce-advanced.onrender.com/api/v1","/subcategory/subcategory/").concat(e),t,{headers:{authtoken:c}})}catch(r){console.log(r)}},l=async e=>{try{return await a.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/subcategory/subcategoryProducts/").concat(e))}catch(t){console.log(t)}}},62392:(e,t,c)=>{c.d(t,{AX:()=>i,C:()=>l,gn:()=>d,od:()=>r,r:()=>o,sX:()=>n,sl:()=>s});var a=c(98372);const r=async()=>{try{return await a.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/categories"))}catch(e){console.log(e)}},s=async e=>{try{return await a.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category/").concat(e))}catch(t){console.log(t)}},n=async(e,t)=>{try{return await a.c.post("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category"),{name:e},{headers:{authtoken:t}})}catch(c){console.log(c)}},o=async(e,t)=>{try{return await a.c.delete("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category/").concat(e),{headers:{authtoken:t}})}catch(c){console.log(c)}},d=async(e,t,c)=>{try{return await a.c.put("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category/").concat(e),t,{headers:{authtoken:c}})}catch(r){console.log(r)}},l=async e=>{try{return await a.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/category/subcategory/").concat(e))}catch(t){console.log("error --------\x3e",t.message)}},i=async e=>{try{return await a.c.get("".concat("https://ecommerce-advanced.onrender.com/api/v1","/category/categoryproducts/").concat(e))}catch(t){console.log(t)}}},19024:(e,t,c)=>{c.r(t),c.d(t,{default:()=>x});var a=c(69060),r=c(91056),s=c(78912),n=c(4992),o=(c(74104),c(53208)),d=c(40192),l=c(42464),i=c(15272),p=c(22032),u=c(79334),h=c(62392),m=(c(14032),c(82496));var g=c(50456);const{SubMenu:y,ItemGroup:v}=d.default,x=()=>{const[e,t]=(0,a.useState)([]),[c,v]=(0,a.useState)(!1),[x,j]=(0,a.useState)([0,0]),[b,f]=(0,a.useState)(!1),[S,w]=(0,a.useState)([]),[N,C]=(0,a.useState)([]),[k,E]=(0,a.useState)([]),[T,_]=(0,a.useState)([]),[A,I]=(0,a.useState)(!1),[O,Y]=(0,a.useState)(!1),[B,F]=(0,a.useState)(!1),[M,R]=(0,a.useState)(["Apple","Microsoft","Lenovo","Asus","Dell","Hp","Jio","Samsung","MSI"]),[D,q]=(0,a.useState)(["Yes","No"]),[H,L]=(0,a.useState)(["Black","Brown","White","Silver","Blue"]),[P,W]=(0,a.useState)([]),[J,K]=(0,a.useState)([]),[Q,V]=(0,a.useState)([]),[z,U]=(0,a.useState)(!1),[X,G]=(0,a.useState)(!1),[$,Z]=(0,a.useState)(!1),[ee,te]=(0,a.useState)(!1),ce=(0,n.OY)(),{search:ae}=(0,n.w1)((e=>({...e}))),{text:re}=ae;(0,a.useEffect)((()=>{v(!0),v(!0),(0,r.az)(15).then((e=>{t(e.data),v(!1)})),(0,h.od)().then((e=>{w(e.data.categories),(0,o.W_)().then((e=>{E(e.data.subCategories)}))})),v(!1)}),[]);const se=e=>{(0,r.eO)(e).then((e=>{t(e.data)}))};(0,a.useEffect)((()=>{if(z){const e=setTimeout((()=>{se({query:re})}),700);return()=>clearTimeout(e)}U(!0)}),[re]),(0,a.useEffect)((()=>{ee?se({price:x}):te(!0)}),[b]);const ne=e=>{j([0,0]),ce({type:"SEARCH_QUERY",payload:{text:""}}),e.target.checked?C((t=>[...t,e.target.value])):C((t=>t.filter((t=>t!==e.target.value))))};(0,a.useEffect)((()=>{X?se({categoryIds:N}):G(!0)}),[N]);(0,a.useEffect)((()=>{$?se({subCategoryIds:T}):Z(!0)}),[T]);const oe=e=>{e.target.checked?_((t=>[...t,e.target.value])):_((t=>t.filter((t=>t!==e.target.value))))};(0,a.useEffect)((()=>{O?se({selectedBrands:P}):Y(!0)}),[P]);const de=e=>{const t=e.target.value,c=e.target.checked;K(c?e=>[...e,t]:e=>e.filter((e=>e!==t)))};(0,a.useEffect)((()=>{B?se({shippingStatus:J}):F(!0)}),[J]);const le=e=>{const t=e.target.value,c=e.target.checked;V(c?e=>[...e,t]:e=>e.filter((e=>e!==t)))};(0,a.useEffect)((()=>{A?se({selectedColor:Q}):I(!0)}),[Q]);return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"container-fluid",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-md-3 pt-3 mx-2",children:[(0,m.jsx)("h3",{className:"mb-3 pb-3 ",children:"Filter Menu"}),(0,m.jsx)("hr",{}),(0,m.jsxs)(d.default,{mode:"inline",defaultOpenKeys:["1","2"],children:[(0,m.jsx)(y,{title:(0,m.jsxs)("span",{className:"h6",children:[(0,m.jsx)(p.c,{})," price"]}),children:(0,m.jsx)("div",{children:(0,m.jsx)(i.c,{range:!0,defaultValue:[20,50],className:"mr-4 m-lg-4",max:"4999",value:x,onChange:e=>{ce({type:"SEARCH_QUERY",payload:{text:""}}),j(e),setTimeout((()=>{f(!b)}),700)}})})},"1"),(0,m.jsx)(y,{title:(0,m.jsxs)("span",{className:"h6",children:[(0,m.jsx)(u.c,{})," Categories"]}),children:(0,m.jsx)("div",{style:{marginTop:"-10px"},children:null===S||void 0===S?void 0:S.map(((e,t)=>(0,m.jsxs)("div",{children:[(0,m.jsx)(l.c,{className:"pb-2 pl-4 pr-4 pt-3",value:e._id,name:"category",onChange:ne,children:e.name}),(0,m.jsx)("br",{})]},e._id)))})},"2"),(0,m.jsx)(y,{title:(0,m.jsxs)("span",{className:"h6",children:[(0,m.jsx)(u.c,{})," SubCategories"]}),children:(0,m.jsx)("div",{style:{marginTop:"-10px"},children:null===k||void 0===k?void 0:k.map((e=>(0,m.jsx)("div",{children:(0,m.jsx)(l.c,{className:"pb-2 pl-4 pr-4 pt-3",value:e._id,name:"subcategory",onChange:oe,children:e.name})},e._id)))})},"4"),(0,m.jsx)(y,{title:(0,m.jsxs)("span",{className:"h6",children:[(0,m.jsx)(u.c,{})," Brands"]}),children:(0,m.jsx)("div",{style:{marginTop:"-10px"},children:null===M||void 0===M?void 0:M.map((e=>(0,m.jsx)("div",{children:(0,m.jsx)(l.c,{className:"pb-2 pl-4 pr-4 pt-3",value:e,name:"brands",onChange:t=>((e,t)=>{const c=e.target.checked;W(c?e=>[...e,t]:e=>e.filter((e=>e!==t)))})(t,e),children:e})},e)))})},"5"),(0,m.jsx)(y,{title:(0,m.jsxs)("span",{className:"h6",children:[(0,m.jsx)(u.c,{})," Colors"]}),children:(0,m.jsx)("div",{style:{marginTop:"-10px"},children:(0,m.jsx)(m.Fragment,{children:H.map((e=>(0,m.jsx)(l.c,{className:"pb-2 pl-4 pr-4 pt-3",name:"color",value:e,onChange:le,children:e})))})})},"6"),(0,m.jsx)(y,{title:(0,m.jsxs)("span",{className:"h6",children:[(0,m.jsx)(u.c,{})," Shipping"]}),children:(0,m.jsx)("div",{style:{marginTop:"-10px"},children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:(0,m.jsx)(l.c,{className:"pb-2 pl-4 pr-4 pt-3",name:"Shipping",value:"Yes",onChange:de,children:"Yes"})}),(0,m.jsx)("div",{children:(0,m.jsx)(l.c,{className:"pb-2 pl-4 pr-4 pt-3",name:"Shipping",value:"No",onChange:de,children:"No"})})]})})},"7")]})]})," ",(0,m.jsxs)("div",{className:"col",children:[c?(0,m.jsx)(g.c,{className:"text-center  justify-content-center "}):(0,m.jsx)("h4",{className:"text-danger pt-3 ",children:"Products"}),(0,m.jsx)("div",{className:"row pb-3 px-5",children:c?(0,m.jsx)(g.c,{className:"text-center justify-content-center"}):null===e||void 0===e?void 0:e.map(((e,t)=>(0,m.jsx)("div",{className:"col-md-5 pb-4 mx-3 px-2 pt-2",style:{marginLeft:"30px"},children:(0,m.jsx)(s.c,{product:e})},t)))})]})]})})})}},2223:(e,t,c)=>{e.exports=c.p+"static/media/default image.f013b76b3a812035fb53.jpg"}}]);
//# sourceMappingURL=24.12250ae9.chunk.js.map