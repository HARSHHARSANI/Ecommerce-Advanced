"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[952],{1952:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var a=o(9060),s=o(1228),l=o(9512),n=o(1560),r=o(4992),i=o(9956),c=o(2496);const d=e=>{const t=(0,n.i6)(),{user:o}=(0,r.w1)((e=>({...e}))),d=(0,r.OY)(),[m,u]=(0,a.useState)(""),[g,w]=(0,a.useState)("");(0,a.useEffect)((()=>{u(window.localStorage.getItem("emailForRegistration")),console.log(window.location.href),console.log(window.localStorage.getItem("emailForRegistration"))}),[]);const h=async e=>{if(e.preventDefault(),g.length<6)s.m4.error("password must be atleast 6 character Long");else if(m)try{const e=await l.c.signInWithEmailLink(m,window.location.href);if(console.log("Result",e),e.user.emailVerified){window.localStorage.removeItem("emailForRegistration");let e=l.c.currentUser;await e.updatePassword(g);const o=await e.getIdTokenResult();console.log("user",e,"idTokenResult",o),(0,i.ER)(o.token).then((e=>{d({type:"LOGGED_IN_USER",payload:{name:e.data.name,email:e.data.email,token:o.token,role:e.data.role,id:e.data._id}})})).catch((e=>console.log(e))),t("/")}}catch(o){console.log(o),s.m4.error(o)}else s.m4.error("Email  is Required")};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"container p-5",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6 offset-md-3"}),(0,c.jsx)("h4",{children:"Register Complete"}),(0,c.jsxs)("form",{onSubmit:h,children:[(0,c.jsx)("input",{type:"email",className:"form-control",value:m,disabled:!0}),(0,c.jsx)("input",{type:"password",className:"form-control",value:g,onChange:e=>w(e.target.value),autoFocus:!0,placeholder:"Enter Your password"}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{type:"submit",className:"btn btn-secondary btn-lg btn-block",children:"Complete Registeration"})]})]})})})}}}]);
//# sourceMappingURL=952.cee60284.chunk.js.map