import{u as d,a as u,g as m,m as l,j as i}from"./index-DHYities.js";import{u as f,P as g}from"./index-BttOVbUh.js";import{l as _}from"./zh-cn-ByNbsTun.js";import"./_commonjsHelpers-BosuxZz1.js";import"./immer-DZPz5TFl.js";const h=window.React.useEffect,b=window.React.useState,P=window.antd.ConfigProvider;function N(){const[a,r]=b(""),{id:t,env:s}=d(),{savePageInfo:n}=f(),p=u();return h(()=>{t&&m(s,Number(t)).then(e=>{if(!e.id)return p("/404");let o={};try{o=JSON.parse(e.page_data||"{}")}catch(c){console.error(c),console.info("【json数据】",e.page_data),l.error("页面数据格式错误，请检查")}n({pageId:e.id,pageName:e.name,remark:e.remark,is_public:e.is_public,stg_publish_id:e.stg_publish_id,pre_publish_id:e.pre_publish_id,prd_publish_id:e.prd_publish_id,...o}),r(o.config.props.theme||"#1677ff")})},[t]),i.jsx(P,{locale:_,theme:{token:{colorPrimary:a,colorLink:a,colorInfo:a}},children:i.jsx(g,{})})}export{N as default};
