import{j as w}from"./index-DHYities.js";import{u as C,i as D,h as F,b as v}from"./index-BttOVbUh.js";import{F as j}from"./context-V_gTMpak.js";import"./_commonjsHelpers-BosuxZz1.js";import"./immer-DZPz5TFl.js";const E=window.antd.Form,V=window.antd.Checkbox,A=window.React.forwardRef,S=window.React.useContext,d=window.React.useEffect,W=window.React.useImperativeHandle,u=window.React.useState,B=({config:e,onChange:l},x)=>{var b;const[h,i]=u([]),[y,n]=u(!0),[R,r]=u(!1),p=S(j),I=C(a=>a.page.variableData);d(()=>{var s;const a=(s=e.props.formItem)==null?void 0:s.name,t=e.props.defaultValue||[];a&&!D(t)&&(p==null||p.setFieldValue(a,t))},[e.props.defaultValue]),d(()=>{r(e.props.formWrap.disabled||!1)},[e.props.formWrap.disabled]),d(()=>{m({})},[e.api,((b=e.api)==null?void 0:b.sourceType)=="variable"?I:""]);const m=a=>{F(e.api,a).then(t=>{if((t==null?void 0:t.ret)===0)if(!Array.isArray(t.data))console.error("[checkbox]","data数据格式错误，请检查"),i([]);else{let s=[];e.props.field.label==="label"&&e.props.field.value==="value"?(s=t.data,(typeof t.data[0]=="string"||typeof t.data[0]=="number")&&(s=t.data.map(o=>({label:o,value:o})))):s=t.data.map(o=>{const c=o[e.props.field.label||"label"],f=o[e.props.field.value||"value"];return{label:v(c)?c:"-",value:v(f)?f:""}}),i(s)}})};W(x,()=>({show(){n(!0)},hide(){n(!1)},enable(){r(!1)},disable(){r(!0)},update:a=>{m(a)}}));const k=a=>{l==null||l({[e.props.formItem.name]:a})};return y&&w.jsx(E.Item,{...e.props.formItem,children:w.jsx(V.Group,{...e.props.formWrap,disabled:R,options:h,style:e.style,onChange:a=>k(a)})})},P=A(B);export{P as CheckBox};
