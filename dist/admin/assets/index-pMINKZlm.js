import{j as t}from"./index-DHYities.js";import{M as R}from"./index-BttOVbUh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./immer-DZPz5TFl.js";const g=window.antd.Modal,x=window.antd.Spin,M=window.React.forwardRef,j=window.React.memo,v=window.React.useEffect,L=window.React.useImperativeHandle,a=window.React.useState,S=M(({config:e,elements:c,onLoad:s,onOk:o,onCancel:n},p)=>{const[r,i]=a(!1),[w,d]=a(e.props.confirmLoading),[f,l]=a(!1);L(p,()=>({close:()=>{i(()=>!1)},open:()=>new Promise(h=>{i(()=>(h(!0),!0))}),showConfirmLoading:()=>{d(!0)},hideConfirmLoading:()=>{d(!1)},showLoading:()=>{l(!0)},hideLoading:()=>{l(!1)}}),[]),v(()=>{r&&(s==null||s())},[r]);const m=()=>{o==null||o()},u=()=>{n==null||n(),i(!1)};return t.jsx(t.Fragment,{children:t.jsx(g,{...e.props,open:r,footer:e.props.footer?void 0:null,onOk:m,onCancel:u,width:e.props.width||void 0,confirmLoading:w,style:{...e.style},children:t.jsx(x,{spinning:f,children:t.jsx(R,{elements:c})})})})}),I=j(S);export{I as Modal};
