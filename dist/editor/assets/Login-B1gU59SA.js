import{u as c,a as u,j as e,l as m,s as d}from"./index-CYeM0fx7.js";const j="_container_l0quo_1",p="_login_l0quo_8",x="_form_l0quo_13",f="_title_l0quo_17",s={container:j,login:p,form:x,title:f},g=window.antd.Button,t=window.antd.Form,a=window.antd.Input;function _(){const r=c(),i=u(n=>n.saveUserInfo),l=async n=>{const o=await m(n);o.token&&(d.set("token",o.token),i(o),r("/projects"))};return e.jsx("div",{className:s.container,children:e.jsxs("div",{className:s.login,children:[e.jsx("div",{className:s.title,children:"Mars低代码"}),e.jsxs(t,{name:"basic",layout:"vertical",className:s.form,onFinish:l,initialValues:{userName:"admin@marsview.cc",userPwd:"123456"},autoComplete:"off",children:[e.jsx(t.Item,{label:"用户名",name:"userName",rules:[{required:!0,message:"Please input your username!"}],children:e.jsx(a,{})}),e.jsx(t.Item,{label:"密码",name:"userPwd",rules:[{required:!0,message:"Please input your password!"}],children:e.jsx(a.Password,{})}),e.jsx(t.Item,{children:e.jsx(g,{type:"primary",block:!0,htmlType:"submit",children:"登录"})})]})]})})}export{_ as default};
