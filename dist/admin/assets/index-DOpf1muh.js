import{j as f}from"./index-Bi1Gsx-r.js";import{u as y,i as I,h as D}from"./index-B2xL-haS.js";import{F}from"./context-V_gTMpak.js";import"./_commonjsHelpers-BosuxZz1.js";import"./immer-DZPz5TFl.js";const j=window.antd.Form,C=window.antd.Segmented,V=window.React.forwardRef,A=window.React.useContext,r=window.React.useEffect,E=window.React.useImperativeHandle,n=window.React.useState,W=({id:k,type:H,config:t,onChange:d},b)=>{var m,u,c;const[h,p]=n([]),[x,l]=n(!0),[R,s]=n(!1),o=A(F),S=y(e=>e.page.variableData);r(()=>{var w;const e=(w=t.props.formItem)==null?void 0:w.name,a=t.props.defaultValue;e&&!I(a)&&(o==null||o.setFieldValue(e,a))},[t.props.defaultValue]),r(()=>{var e;s(((e=t.props.formWrap)==null?void 0:e.disabled)||!1)},[(m=t.props.formWrap)==null?void 0:m.disabled]),r(()=>{i({})},[t.api,((u=t.api)==null?void 0:u.sourceType)=="variable"?S:""]);const i=e=>{D(t.api,e).then(a=>{(a==null?void 0:a.ret)===0&&(Array.isArray(a.data)?p(a.data):(console.error("[segmentd]","data数据格式错误，请检查"),p([])))})};E(b,()=>({show(){l(!0)},hide(){l(!1)},enable(){s(!1)},disable(){s(!0)},update:e=>{i(e)}}));const v=e=>{d&&d({[t.props.formItem.name]:e})};return x&&f.jsx(j.Item,{...t.props.formItem,children:f.jsx(C,{disabled:R,block:(c=t.props.formWrap)==null?void 0:c.block,options:h,style:t.style,onChange:v})})},$=V(W);export{$ as Segmented};
