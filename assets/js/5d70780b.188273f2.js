"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91884],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),i=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=i(r),y=o,m=f["".concat(a,".").concat(y)]||f[y]||s[y]||p;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,c=new Array(p);c[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<p;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91934:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>s,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const p={sidebar_label:"ProtocolLifeCycleEvent"},c="ProtocolLifeCycleEvent type",l={unversionedId:"api/puppeteer.protocollifecycleevent",id:"api/puppeteer.protocollifecycleevent",title:"ProtocolLifeCycleEvent type",description:"Signature:",source:"@site/../docs/api/puppeteer.protocollifecycleevent.md",sourceDirName:"api",slug:"/api/puppeteer.protocollifecycleevent",permalink:"/api/puppeteer.protocollifecycleevent",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ProtocolLifeCycleEvent"},sidebar:"sidebar",previous:{title:"ProtocolError.originalMessage",permalink:"/api/puppeteer.protocolerror.originalmessage"},next:{title:"Puppeteer",permalink:"/api/puppeteer.puppeteer"}},a={},i=[],u={toc:i};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"protocollifecycleevent-type"},"ProtocolLifeCycleEvent type"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type ProtocolLifeCycleEvent =\n  | 'load'\n  | 'DOMContentLoaded'\n  | 'networkIdle'\n  | 'networkAlmostIdle';\n")))}s.isMDXComponent=!0}}]);