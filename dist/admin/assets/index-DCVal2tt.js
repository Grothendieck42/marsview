import{j as o,m as f}from"./index-Bi1Gsx-r.js";import{L as U,U as y}from"./UploadOutlined-Bwd-S4oa.js";import{P as b}from"./PlusOutlined-CrNRbnjj.js";import"./objectSpread2-C4CkhkJ7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./UploadOutlined-B7yj2_9n.js";import"./PlusOutlined-B9smaIDR.js";const h=window.antd.Form,L=window.antd.Button,O=window.antd.Upload,W=window.React.useEffect,u=window.React.useState,B=window.React.useImperativeHandle,F=window.React.forwardRef,I=({id:t,type:r,config:a},i)=>{const[p,n]=u(!0),[m,d]=u(!1);return B(i,()=>({show(){n(!0)},hide(){n(!1)},enable(){d(!1)},disable(){d(!0)}})),p&&o.jsx(h.Item,{...a.props.formItem,"data-id":t,"data-type":r,children:o.jsx(P,{config:a,disabled:m})})},P=({config:t,value:r,disabled:a,onChange:i})=>{const[p,n]=u([]),[m,d]=u(!1);W(()=>{var s,e;if(typeof r=="string")n([{name:(e=(s=r.split("/").pop())==null?void 0:s.split("."))==null?void 0:e[0],url:r,status:"done"}]);else if(Array.isArray(r))if(t.props.structure==="url"){const l=r.map(c=>({name:c.split("/").pop().split(".")[0],url:c,status:"done"}));n(l)}else n(r);else n([])},[r]);const w=s=>t.props.formWrap.accept.includes(s.type)?s.size>t.props.formWrap.limitSize*1024?(f.error("图片超出最大限制"),!1):!0:(f.error("不支持该文件格式，请重新选择"),!1),x=s=>{const e=(p||[]).filter(l=>l.url!==s.url);n(e),t.props.formWrap.maxCount===1?i(null):t.props.structure==="url"?i(e.map(l=>l.url)):i(e)},j=s=>{d(!0)},R=()=>{const{listType:s,maxCount:e}=t.props.formWrap,l=o.jsxs("div",{children:[m?o.jsx(U,{}):o.jsx(b,{}),o.jsx("div",{style:{marginTop:8},children:t.props.text})]});return["text","picture"].includes(s)?p.length>=e?null:o.jsx(L,{icon:o.jsx(y,{}),children:t.props.text}):p.length>=e?null:l};return o.jsx(O,{...t.props.formWrap,disabled:a,fileList:p,style:t.style,beforeUpload:w,onRemove:x,customRequest:j,children:R()})},J=F(I);export{J as Upload};
