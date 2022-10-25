"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74032],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),i=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,y=m["".concat(o,".").concat(d)]||m[d]||c[d]||p;return t?n.createElement(y,l(l({ref:r},s),{},{components:t})):n.createElement(y,l({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,l=new Array(p);l[0]=m;var u={};for(var o in r)hasOwnProperty.call(r,o)&&(u[o]=r[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<p;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2550:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});t(67294);var n=t(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={sidebar_label:"Puppeteer.registerCustomQueryHandler"},u="Puppeteer.registerCustomQueryHandler() method",o={unversionedId:"api/puppeteer.puppeteer.registercustomqueryhandler",id:"version-19.1.2/api/puppeteer.puppeteer.registercustomqueryhandler",title:"Puppeteer.registerCustomQueryHandler() method",description:"Registers a custom query handler.",source:"@site/versioned_docs/version-19.1.2/api/puppeteer.puppeteer.registercustomqueryhandler.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteer.registercustomqueryhandler",permalink:"/api/puppeteer.puppeteer.registercustomqueryhandler",draft:!1,tags:[],version:"19.1.2",frontMatter:{sidebar_label:"Puppeteer.registerCustomQueryHandler"},sidebar:"sidebar",previous:{title:"Puppeteer.customQueryHandlerNames",permalink:"/api/puppeteer.puppeteer.customqueryhandlernames"},next:{title:"Puppeteer.unregisterCustomQueryHandler",permalink:"/api/puppeteer.puppeteer.unregistercustomqueryhandler"}},i={},s=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function m(e){var{components:r}=e,t=p(e,["components"]);return(0,n.kt)("wrapper",a({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"puppeteerregistercustomqueryhandler-method"}),"Puppeteer.registerCustomQueryHandler() method"),(0,n.kt)("p",null,"Registers a ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.customqueryhandler"}),"custom query handler"),"."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Puppeteer {\n  static registerCustomQueryHandler(\n    name: string,\n    queryHandler: CustomQueryHandler\n  ): void;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The name that the custom query handler will be registered under.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"queryHandler"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.customqueryhandler"}),"CustomQueryHandler")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The ",(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.customqueryhandler"}),"custom query handler")," to register.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"void"),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"After registration, the handler can be used everywhere where a selector is expected by prepending the selection string with ",(0,n.kt)("inlineCode",{parentName:"p"},"<name>/"),". The name is only allowed to consist of lower- and upper case latin letters."),(0,n.kt)("h2",a({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"puppeteer.registerCustomQueryHandler('text', { \u2026 });\nconst aHandle = await page.$('text/\u2026');\n")))}m.isMDXComponent=!0}}]);