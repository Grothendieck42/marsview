import{j as o}from"./index-DHYities.js";const n=window.React.useState,a=window.React.useImperativeHandle,i=window.React.forwardRef,d=({id:p,type:u,config:e},s)=>{const[r,t]=n(!0);return a(s,()=>({show(){t(!0)},hide(){t(!1)}})),r&&o.jsx("a",{style:e.style,...e.props,children:e.props.text})},c=i(d);export{c as Link};
