"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[952],{81952:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var s=a(69060),o=a(51228),r=a(9512),l=a(51560),n=a(4992),i=a(59956),c=a(82496);const d=e=>{const t=(0,l.i6)(),{user:a}=(0,n.w1)((e=>({...e}))),d=(0,n.OY)(),[m,u]=(0,s.useState)(""),[h,p]=(0,s.useState)("");(0,s.useEffect)((()=>{u(window.localStorage.getItem("emailForRegistration"))}),[]);const g=async e=>{if(e.preventDefault(),h.length<6)o.m4.error("password must be atleast 6 character Long");else if(m)try{if((await r.c.signInWithEmailLink(m,window.location.href)).user.emailVerified){window.localStorage.removeItem("emailForRegistration");let e=r.c.currentUser;await e.updatePassword(h);const a=await e.getIdTokenResult();(0,i.ER)(a.token).then((e=>{d({type:"LOGGED_IN_USER",payload:{name:e.data.name,email:e.data.email,token:a.token,role:e.data.role,id:e.data._id}})})).catch((e=>console.log(e))),t("/")}}catch(a){console.log(a),o.m4.error(a)}else o.m4.error("Email  is Required")};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"container p-5",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6 offset-md-3"}),(0,c.jsx)("h4",{children:"Register Complete"}),(0,c.jsxs)("form",{onSubmit:g,children:[(0,c.jsx)("input",{type:"email",className:"form-control",value:m,disabled:!0}),(0,c.jsx)("input",{type:"password",className:"form-control",value:h,onChange:e=>p(e.target.value),autoFocus:!0,placeholder:"Enter Your password"}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{type:"submit",className:"btn btn-secondary btn-lg btn-block",children:"Complete Registeration"})]})]})})})}}}]);
//# sourceMappingURL=952.324033f3.chunk.js.map