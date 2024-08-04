import{aD as y,aE as v}from"./index-BdozwHxb.js";var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M841 370c3-3.3 2.7-8.3-.6-11.3a8.24 8.24 0 00-5.3-2.1h-72.6c-2.4 0-4.6 1-6.1 2.8L633.5 504.6a7.96 7.96 0 01-13.4-1.9l-63.5-141.3a7.9 7.9 0 00-7.3-4.7H380.7l.9-4.7 8-42.3c10.5-55.4 38-81.4 85.8-81.4 18.6 0 35.5 1.7 48.8 4.7l14.1-66.8c-22.6-4.7-35.2-6.1-54.9-6.1-103.3 0-156.4 44.3-175.9 147.3l-9.4 49.4h-97.6c-3.8 0-7.1 2.7-7.8 6.4L181.9 415a8.07 8.07 0 007.8 9.7H284l-89 429.9a8.07 8.07 0 007.8 9.7H269c3.8 0 7.1-2.7 7.8-6.4l89.7-433.1h135.8l68.2 139.1c1.4 2.9 1 6.4-1.2 8.8l-180.6 203c-2.9 3.3-2.6 8.4.7 11.3 1.5 1.3 3.4 2 5.3 2h72.7c2.4 0 4.6-1 6.1-2.8l123.7-146.7c2.8-3.4 7.9-3.8 11.3-1 .9.8 1.6 1.7 2.1 2.8L676.4 784c1.3 2.8 4.1 4.7 7.3 4.7h64.6a8.02 8.02 0 007.2-11.5l-95.2-198.9c-1.4-2.9-.9-6.4 1.3-8.8L841 370z"}}]},name:"function",theme:"outlined"};const x=O,h=window.React;var M=function(o,r){return h.createElement(y,v({},o,{ref:r,icon:x}))};const H=h.forwardRef(M);var z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1zm496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z"}}]},name:"notification",theme:"outlined"};const L=z,b=window.React;var R=function(o,r){return b.createElement(y,v({},o,{ref:r,icon:L}))};const I=b.forwardRef(R);var F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};const E=F,g=window.React;var _=function(o,r){return g.createElement(y,v({},o,{ref:r,icon:E}))};const V=g.forwardRef(_);var w={exports:{}},e={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=Symbol.for("react.element"),S=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),N=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),P=Symbol.for("react.offscreen"),C;C=Symbol.for("react.module.reference");function n(t){if(typeof t=="object"&&t!==null){var o=t.$$typeof;switch(o){case $:switch(t=t.type,t){case c:case s:case i:case f:case d:return t;default:switch(t=t&&t.$$typeof,t){case N:case u:case l:case p:case m:case a:return t;default:return o}}case S:return o}}}e.ContextConsumer=u;e.ContextProvider=a;e.Element=$;e.ForwardRef=l;e.Fragment=c;e.Lazy=p;e.Memo=m;e.Portal=S;e.Profiler=s;e.StrictMode=i;e.Suspense=f;e.SuspenseList=d;e.isAsyncMode=function(){return!1};e.isConcurrentMode=function(){return!1};e.isContextConsumer=function(t){return n(t)===u};e.isContextProvider=function(t){return n(t)===a};e.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===$};e.isForwardRef=function(t){return n(t)===l};e.isFragment=function(t){return n(t)===c};e.isLazy=function(t){return n(t)===p};e.isMemo=function(t){return n(t)===m};e.isPortal=function(t){return n(t)===S};e.isProfiler=function(t){return n(t)===s};e.isStrictMode=function(t){return n(t)===i};e.isSuspense=function(t){return n(t)===f};e.isSuspenseList=function(t){return n(t)===d};e.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===c||t===s||t===i||t===f||t===d||t===P||typeof t=="object"&&t!==null&&(t.$$typeof===p||t.$$typeof===m||t.$$typeof===a||t.$$typeof===u||t.$$typeof===l||t.$$typeof===C||t.getModuleId!==void 0)};e.typeOf=n;w.exports=e;var j=w.exports;export{H as F,I as N,V as Q,j as r};
