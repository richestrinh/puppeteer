/*! For license information please see bf60b911.588ec68b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32434],{19192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var s=r(85893),n=r(11151);const l={sidebar_label:"Frame.select"},c="Frame.select() method",a={id:"api/puppeteer.frame.select",title:"Frame.select() method",description:"Selects a set of value on the first ` element that matches the selector`.",source:"@site/versioned_docs/version-21.6.0/api/puppeteer.frame.select.md",sourceDirName:"api",slug:"/api/puppeteer.frame.select",permalink:"/api/puppeteer.frame.select",draft:!1,unlisted:!1,tags:[],version:"21.6.0",frontMatter:{sidebar_label:"Frame.select"},sidebar:"api",previous:{title:"Frame.parentFrame",permalink:"/api/puppeteer.frame.parentframe"},next:{title:"Frame.setContent",permalink:"/api/puppeteer.frame.setcontent"}},i={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"frameselect-method",children:"Frame.select() method"}),"\n",(0,s.jsxs)(t.p,{children:["Selects a set of value on the first ",(0,s.jsx)(t.code,{children:"<select>"})," element that matches the ",(0,s.jsx)(t.code,{children:"selector"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  select(selector: string, ...values: string[]): Promise<string[]>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"selector"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"The selector to query for."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"values"}),(0,s.jsx)(t.td,{children:"string[]"}),(0,s.jsxs)(t.td,{children:["The array of values to select. If the ",(0,s.jsx)("code",{children:"<select>"})," has the ",(0,s.jsx)("code",{children:"multiple"})," attribute, all values are considered, otherwise only the first one is taken into account."]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<string[]>"}),"\n",(0,s.jsx)(t.p,{children:"the list of values that were successfully selected."}),"\n",(0,s.jsx)(t.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,s.jsxs)(t.p,{children:["Throws if there's no ",(0,s.jsx)(t.code,{children:"<select>"})," matching ",(0,s.jsx)(t.code,{children:"selector"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"frame.select('select#colors', 'blue'); // single selection\nframe.select('select#colors', 'red', 'green', 'blue'); // multiple selections\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var s=r(67294),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var s,l={},o=null,d=null;for(s in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,s)&&!i.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:n,type:e,key:o,ref:d,props:l,_owner:a.current}}t.Fragment=l,t.jsx=o,t.jsxs=o},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>c});var s=r(67294);const n={},l=s.createContext(n);function c(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);