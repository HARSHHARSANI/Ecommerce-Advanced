"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[392],{8912:(t,e,o)=>{o.d(e,{c:()=>x});var c=o(4152),a=o(4212),s=o(9060),n=o(748),r=o(9868),l=o(12),i=o(2223),g=o(7899),d=o(4104),u=o.n(d),p=o(4992),h=o(2496);const{Meta:y}=c.default,x=t=>{let{product:e}=t;const o=(0,p.OY)(),[d,x]=(0,s.useState)("Add To Cart"),{title:b,images:m,slug:v,description:j,price:S,category:f,subCategory:C,quantity:w,shipping:k,color:N,brand:A}=e,{cart:E}=(0,p.w1)((t=>({...t})));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{children:e&&e.rating&&e.rating.length>0?(0,g.F)(e):(0,h.jsx)("div",{className:"text-center pt-1 pb-3",children:" No Rating Yet"})}),(0,h.jsx)(c.default,{hoverable:!0,style:{width:360},cover:(0,h.jsx)("img",{alt:"example",src:m&&m.length?m[0].url:i,style:{objectFit:"cover",height:"250px"},className:"p-1"}),actions:[(0,h.jsxs)(l.cH,{to:"/products/".concat(v),children:[(0,h.jsx)(n.c,{className:"text-warning",onClick:()=>{}}),(0,h.jsx)("br",{}),"View Product"]}),(0,h.jsx)(a.c,{title:d,children:(0,h.jsxs)("a",{onClick:()=>{let t=[];if(void 0!==typeof window){localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.push({...e,count:1});const c=u().uniqWith(t,u().isEqual);localStorage.setItem("cart",JSON.stringify(c)),x("Added"),o({type:"ADD_TO_CART",payload:c}),o({type:"SET_VISIBLE",payload:!0})}},children:[(0,h.jsx)(r.c,{className:"text-danger",onClick:()=>{}}),(0,h.jsx)("br",{}),"Add to Cart"]})})],children:(0,h.jsx)(y,{title:"".concat(b," - $").concat(S),description:"".concat(j&&j.substring(0,80),"...")})})]})}},7899:(t,e,o)=>{o.d(e,{F:()=>s});o(9060);var c=o(4032),a=o(2496);const s=t=>{if(t&&t.rating){const e=t&&t.rating;let o=[];const s=e.length;e.map((t=>o.push(t.star)));let n=o.reduce(((t,e)=>t+e),0);console.log("totalReduced",n);const r=n/s;return console.log(r),(0,a.jsx)("div",{className:"text-center pt-1 pb-3",children:(0,a.jsxs)("span",{children:[" ",(0,a.jsx)(c.c,{starDimension:"20px",starSpacing:"2px",rating:r,starRatedColor:"red",editing:!1})," ","(",t.rating.length,")"]})})}}},3208:(t,e,o)=>{o.d(e,{El:()=>r,MN:()=>l,Qx:()=>n,W_:()=>a,cB:()=>s,ic:()=>i});var c=o(8372);const a=async(t,e)=>{try{console.log("im inside getSubCategories");const t=await c.c.get("".concat("http://localhost:8080/api/v1","/subcategory/subcategory"));return console.log("Sending response from getSubCategories",t),t}catch(o){console.log(o)}},s=async t=>{try{console.log("i am inside getSingleCategories");const e=await c.c.get("".concat("http://localhost:8080/api/v1","/subcategory/subcategory/").concat(t));return console.log("Sending response from getSingleSubCategories",e),e}catch(e){console.log(e)}},n=async(t,e)=>{try{const o=await c.c.post("".concat("http://localhost:8080/api/v1","/subcategory/subcategory"),t,{headers:{authtoken:e}});return console.log("createSubCategory response :->",o),o}catch(o){console.log(o)}},r=async(t,e)=>{try{const o=await c.c.delete("".concat("http://localhost:8080/api/v1","/subcategory/subcategory/").concat(t),{headers:{authtoken:e}});return console.log("removeSubCategory Response :->",o),o}catch(o){console.log(o)}},l=async(t,e,o)=>{try{console.log("inside updateCategory");const a=await c.c.put("".concat("http://localhost:8080/api/v1","/subcategory/subcategory/").concat(t),e,{headers:{authtoken:o}});return console.log("returing response from updateSubCategory",a),a}catch(a){console.log(a)}},i=async t=>{try{console.log("im inside getProductsBasedOnSubcategory");const e=await c.c.get("".concat("http://localhost:8080/api/v1","/subcategory/subcategoryProducts/").concat(t));return console.log(e),e}catch(e){console.log(e)}}},3392:(t,e,o)=>{o.r(e),o.d(e,{default:()=>l});var c=o(9060),a=o(3208),s=o(1560),n=o(8912),r=o(2496);const l=()=>{const{slug:t}=(0,s.W4)(),[e,o]=(0,c.useState)([]);return(0,c.useEffect)((()=>{(0,a.ic)(t).then((t=>{console.log(t),o(t.data)}))}),[]),(0,r.jsx)("div",{children:(0,r.jsx)("div",{style:{display:"flex",flexWrap:"wrap",margin:"5px"},children:null===e||void 0===e?void 0:e.map(((t,e)=>(0,r.jsx)("div",{style:{margin:"7px",padding:"5px"},children:(0,r.jsx)(n.c,{product:t})})))})})}},2223:(t,e,o)=>{t.exports=o.p+"static/media/default image.f013b76b3a812035fb53.jpg"}}]);
//# sourceMappingURL=392.afdd2bcb.chunk.js.map