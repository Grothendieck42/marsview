import{u as f,p as g,an as v,j as e,$ as c,a0 as w}from"./index-BhTiXFS4.js";import{M as S,T as M}from"./TeamOutlined-0sRTw3gO.js";import{U as $}from"./UserOutlined-Ggxv5KtX.js";const y="_navSide_44l9u_1",_="_logo_44l9u_6",L={navSide:y,logo:_},N=window.antd.Menu,O=window.React.useEffect,l=window.React.useState,C=()=>{const[u,i]=l([]),[d,a]=l([]),r=f();function s(n,x,h,p){return{label:n,key:x,icon:h,children:p}}const{id:t}=g(),m=v();O(()=>{if(!t||t=="0"){i([s("项目配置",`/project/${t}/config`,e.jsx(c,{}))]);return}i([s("项目配置",`/project/${t}/config`,e.jsx(c,{})),s("菜单列表",`/project/${t}/menu`,e.jsx(S,{})),s("角色列表",`/project/${t}/role`,e.jsx(M,{})),s("用户列表",`/project/${t}/user`,e.jsx($,{}))]),a([m.pathname])},[]);const j=({key:n})=>{a([n]),r(n)};return e.jsx("div",{className:L.navSide,children:e.jsx(N,{mode:"inline",theme:"light",style:{width:200,height:"calc(100vh - 64px)",flex:1,minWidth:0},selectedKeys:d,onClick:j,items:u})})},E=C,o=window.antd.Layout;function T(){return e.jsxs(o,{className:"admin",children:[e.jsx(o.Sider,{style:{height:"calc(100vh - 64px)"},children:e.jsx(E,{})}),e.jsx(o.Content,{className:"content",children:e.jsx("div",{className:"wrapper",children:e.jsx(w,{})})})]})}export{T as default};
