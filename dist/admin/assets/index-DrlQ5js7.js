import{j as m}from"./index-DHYities.js";import{u as w,P as g,g as y,E as v,C as R}from"./createLoading-BAaO1QUc.js";import{u as b,h as P}from"./index-BttOVbUh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./immer-DZPz5TFl.js";var E=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const p=window.React,C=window.React.useEffect,j=window.React.useImperativeHandle,O=window.React.forwardRef;var T=O(function(e,o){var n=e.chartRef,t=e.style,a=t===void 0?{height:"inherit"}:t,c=e.className,u=e.loading,l=e.loadingTemplate,f=e.errorTemplate,d=E(e,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),s=w(g,d),r=s.chart,i=s.container;return C(function(){y(n,r.current)},[r.current]),j(o,function(){return{getChart:function(){return r.current}}}),p.createElement(v,{errorTemplate:f},u&&p.createElement(R,{loadingTemplate:l,theme:e.theme}),p.createElement("div",{className:c,style:a,ref:i}))});const x=T,S=window.React.forwardRef,I=window.React.useEffect,_=window.React.useImperativeHandle,h=window.React.useState,$=window.antd.Spin,N=({config:e},o)=>{var s;const[n,t]=h([]),[a,c]=h(!0),[u,l]=h(!0),f=b(r=>r.page.variableData);I(()=>{d({})},[e.api,((s=e.api)==null?void 0:s.sourceType)=="variable"?f:""]);const d=r=>{c(!0),P(e.api,r).then(i=>{(i==null?void 0:i.ret)===0&&(Array.isArray(i.data)?t(i.data):(console.error("[PieChart]","data数据格式错误，请检查"),t([]))),c(!1)})};return _(o,()=>({show(){l(!0)},hide(){l(!1)},update:r=>{d(r)}})),u&&m.jsx("div",{style:e.style,children:m.jsx($,{spinning:a,size:"large",wrapperClassName:"spin-loading",children:m.jsx(x,{...e.props,data:n})})})},B=S(N);export{B as PieChart};
