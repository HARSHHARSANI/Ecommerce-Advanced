"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[600],{21120:(s,e,a)=>{a.d(e,{c:()=>c});a(69060);var l=a(40012),r=a(82496);const c=()=>(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{className:"nav flex-column",children:[(0,r.jsx)("li",{className:"nav-item mt-3 mx-3 ",children:(0,r.jsx)(l.cH,{to:"/user/history",className:"nav-link",children:"History"})}),(0,r.jsx)("li",{className:"nav-item mt-3 mx-3",children:(0,r.jsx)(l.cH,{to:"/user/password",className:"nav-link",children:"Password"})}),(0,r.jsx)("li",{className:"nav-item mt-3 mx-3",children:(0,r.jsx)(l.cH,{to:"/user/wishlist",className:"nav-link",children:"Wishlist"})})]})})},22600:(s,e,a)=>{a.r(e),a.d(e,{default:()=>d});var l=a(69060),r=a(21120),c=a(9512),n=a(51228),t=a(82496);const d=()=>{const[s,e]=(0,l.useState)(""),[a,d]=(0,l.useState)(!1),i=async a=>{a.preventDefault();try{d(!0),await c.c.currentUser.updatePassword(s),d(!1),n.m4.success("Password Updated",{position:"top-center"}),console.log("Password Updated"),e("")}catch(l){console.log("Password Update Error",l),d(!1),n.m4.error(l)}};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-2",children:(0,t.jsx)(r.c,{})}),(0,t.jsxs)("div",{className:"col-md-9",children:[a?(0,t.jsx)("h3",{className:"text-danger",children:"Loading"}):(0,t.jsx)("h3",{children:"Password Update"}),(0,t.jsx)("form",{onSubmit:i,children:(0,t.jsxs)("div",{className:"form-group mt-3",children:[(0,t.jsx)("label",{children:"Your Password"}),(0,t.jsx)("input",{type:"password",onChange:s=>e(s.target.value),className:"form-control mt-2",placeholder:"Enter Your New Password",disabled:a,value:s}),(0,t.jsx)("button",{className:"btn btn-warning mt-3",disabled:a||s.length<6,children:"Submit"})]})})]})]})})})}}}]);
//# sourceMappingURL=600.2c351bed.chunk.js.map