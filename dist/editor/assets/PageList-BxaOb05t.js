import{a as O,u as L,e as U,j as e,c as I,C as D,m as u,f as z,M as A,h as F,i as w}from"./index-CYeM0fx7.js";import{s as a}from"./index.module-DFRKY25f.js";import{E as $,C as B,S as M,a as r,b as d}from"./SendOutlined-8Pbbostc.js";import{U as G}from"./UserOutlined-DfL-Hzeq.js";import{D as H}from"./DeleteOutlined-BTO-XkgZ.js";const V=window.React.useEffect,W=window.React.useRef,p=window.React.useState,q=window.antd.Button,J=window.antd.Col,K=window.antd.Empty,Q=window.antd.Image,X=window.antd.Layout,Y=window.antd.Pagination,Z=window.antd.Row,ee=window.antd.Spin,j=window.antd.Tag,l=window.antd.Tooltip,te=window.dayjs;function le(){const[s,n]=p(!0),[i,c]=p([]),[h,_]=p(0),[f,v]=p(1),[m,C]=p(!1),[R,T]=p(""),y=W(),{userInfo:k,isUpdateList:P}=O(t=>({userInfo:t.userInfo,isUpdateList:t.isUpdateList})),S=L();V(()=>{x()},[P]);const x=async(t=f)=>{n(!0);try{const o=await U({pageNum:t,pageSize:12});_((o==null?void 0:o.total)||0),c((o==null?void 0:o.list)||[]),n(!1)}catch{n(!1)}},b=t=>{v(t),x(t)},N=()=>{var t;(t=y.current)==null||t.open()},g=async(t,o,E)=>{if(t==="preview"){if(!o.preview_img)return u.warning("该页面未生成预览图");T(o.preview_img),C(!0);return}if(!E)return u.warning("该页面未授权，无法访问");if(t==="edit")return S(`/editor/${o==null?void 0:o.id}/edit`);t==="copy"&&(await z({id:o.id}),u.success("复制成功"),x()),t==="delete"&&A.confirm({title:"确认",content:"确认删除吗？",okText:"确认",cancelText:"取消",onOk:async()=>{await F({id:o.id}),u.success("删除成功"),x()}})};return e.jsx(e.Fragment,{children:e.jsxs(X.Content,{className:a.pageList,children:[e.jsx(ee,{spinning:s,size:"large",children:e.jsx(Z,{gutter:[20,20],children:i.map(t=>{const o=I("page",k.userId,t);return e.jsx(J,{span:6,children:e.jsxs("section",{className:a.card,style:{borderRadius:8,opacity:o?1:.6,background:o?"none":"url('https://static.huolala.cn/image/032950e61a5b51a653808d36398829adbd6882cc.png')",overflow:"hidden"},children:[e.jsxs("div",{className:a.itemContent,onClick:()=>g("edit",t,o),children:[e.jsx("div",{className:a.itemHeader,children:e.jsx(oe,{item:t})}),e.jsx("div",{className:a.itemTitle,children:t.name}),e.jsx("div",{className:a.itemRemark,children:t.remark}),e.jsxs("div",{className:a.updateUser,children:[e.jsxs("span",{style:{marginRight:10},children:[e.jsx(G,{style:{fontSize:15,marginRight:5}}),t.sso_name]}),e.jsxs("span",{children:["更新时间：",te(t.updated_at).fromNow()]})]})]}),e.jsxs("div",{className:a.itemFooter,children:[e.jsx(l,{title:"效果图预览",children:e.jsx($,{onClick:()=>g("preview",t,o)})}),e.jsx(l,{title:"页面复制",children:e.jsx(B,{onClick:()=>g("copy",t,o)})}),e.jsx(l,{title:"页面删除",children:e.jsx(H,{onClick:()=>g("delete",t,o)})}),e.jsx(l,{title:"页面访问",children:e.jsx(M,{onClick:()=>{window.open(`https://admin.marsview.cc/page/prd/${t.id}`,"_blank")}})})]})]},t.id)},t.id)})})}),e.jsx(Q,{style:{display:"none"},src:R,preview:{visible:m,onVisibleChange:t=>{C(t)}}}),h>0?e.jsx(Y,{style:{textAlign:"right",marginTop:16},total:h,current:f,pageSize:12,showTotal:t=>`总共 ${t} 条`,onChange:b}):!s&&e.jsx(K,{style:{marginTop:100},children:e.jsx(q,{type:"primary",onClick:N,children:"创建页面"})}),e.jsx(D,{createRef:y})]})})}const oe=({item:s})=>{if(s.stg_state===1&&s.pre_state===1&&s.prd_state===1)return e.jsx(j,{children:e.jsx(l,{title:"待开发",children:"NEW"})});let n={color:"",icon:e.jsx(r,{}),tooltip:"已发布"},i={color:"",icon:e.jsx(r,{}),tooltip:"已发布"},c={color:"",icon:e.jsx(r,{}),tooltip:"已发布"};return s.stg_state===4?n={color:"red",icon:e.jsx(d,{}),tooltip:"版本已回滚"}:s.stg_state===3?n={color:"success",icon:e.jsx(r,{}),tooltip:"版本已发布"}:s.stg_state===2&&s.stg_publish_id?n={color:"warning",icon:e.jsx(d,{}),tooltip:"版本已落后"}:n={color:"",icon:e.jsx(w,{}),tooltip:"版本未发布"},s.pre_state===4?i={color:"red",icon:e.jsx(d,{}),tooltip:"版本已回滚"}:s.pre_state===3?i={color:"success",icon:e.jsx(r,{}),tooltip:"版本已发布"}:s.pre_state===2&&s.pre_publish_id?i={color:"warning",icon:e.jsx(d,{}),tooltip:"版本已落后"}:i={color:"",icon:e.jsx(w,{}),tooltip:"版本未发布"},s.prd_state===4?c={color:"red",icon:e.jsx(d,{}),tooltip:"版本已回滚"}:s.prd_state===3?c={color:"success",icon:e.jsx(r,{}),tooltip:"版本已发布"}:s.prd_state===2&&s.prd_publish_id?c={color:"warning",icon:e.jsx(d,{}),tooltip:"版本已落后"}:c={color:"",icon:e.jsx(w,{}),tooltip:"版本未发布"},e.jsxs(e.Fragment,{children:[e.jsx(l,{title:n.tooltip,children:e.jsx(j,{color:n.color,icon:n.icon,children:"STG"})}),e.jsx(l,{title:i.tooltip,children:e.jsx(j,{color:i.color,icon:i.icon,children:"PRE"})}),e.jsx(l,{title:c.tooltip,children:e.jsx(j,{color:c.color,icon:c.icon,children:"PRD"})})]})};export{le as default};
