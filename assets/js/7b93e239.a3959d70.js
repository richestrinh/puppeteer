/*! For license information please see 7b93e239.a3959d70.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91235],{91565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(85893),s=n(11151);const o={sidebar_label:"ElementHandle.screenshot"},a="ElementHandle.screenshot() method",l={id:"api/puppeteer.elementhandle.screenshot",title:"ElementHandle.screenshot() method",description:"This method scrolls element into view if needed, and then uses Page.screenshot() to take a screenshot of the element. If the element is detached from DOM, the method throws an error.",source:"@site/versioned_docs/version-21.7.0/api/puppeteer.elementhandle.screenshot.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.screenshot",permalink:"/api/puppeteer.elementhandle.screenshot",draft:!1,unlisted:!1,tags:[],version:"21.7.0",frontMatter:{sidebar_label:"ElementHandle.screenshot"},sidebar:"api",previous:{title:"ElementHandle.press",permalink:"/api/puppeteer.elementhandle.press"},next:{title:"ElementHandle.screenshot_1",permalink:"/api/puppeteer.elementhandle.screenshot_1"}},i={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"elementhandlescreenshot-method",children:"ElementHandle.screenshot() method"}),"\n",(0,r.jsxs)(t.p,{children:["This method scrolls element into view if needed, and then uses ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page.screenshot_1",children:"Page.screenshot()"})," to take a screenshot of the element. If the element is detached from DOM, the method throws an error."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  screenshot(\n    options: Readonly<ScreenshotOptions> & {\n      encoding: 'base64';\n    }\n  ): Promise<string>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsxs)(t.td,{children:["Readonly<",(0,r.jsx)(t.a,{href:"/api/puppeteer.screenshotoptions",children:"ScreenshotOptions"}),"> & { encoding: 'base64'; }"]}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<string>"})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},75251:(e,t,n)=>{var r=n(67294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,o={},d=null,h=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(h=t.ref),t)a.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:d,ref:h,props:o,_owner:l.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var r=n(67294);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);