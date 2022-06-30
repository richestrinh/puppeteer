"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33240],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var i=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,s=function(e,t){if(null==e)return{};var r,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=i.createContext({}),o=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=o(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(r),h=s,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||n;return r?i.createElement(f,a(a({ref:t},p),{},{components:r})):i.createElement(f,a({ref:t},p))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,a=new Array(n);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:s,a[1]=c;for(var o=2;o<n;o++)a[o]=r[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var i=r(87462),s=(r(67294),r(3905));const n={sidebar_label:"Accessibility"},a="Accessibility class",c={unversionedId:"api/puppeteer.accessibility",id:"api/puppeteer.accessibility",title:"Accessibility class",description:"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as screen readers or switches.",source:"@site/../docs/api/puppeteer.accessibility.md",sourceDirName:"api",slug:"/api/puppeteer.accessibility",permalink:"/api/puppeteer.accessibility",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Accessibility"},sidebar:"sidebar",previous:{title:"API",permalink:"/api/"},next:{title:"Accessibility.snapshot",permalink:"/api/puppeteer.accessibility.snapshot"}},l={},o=[{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],p={toc:o};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"accessibility-class"},"Accessibility class"),(0,s.kt)("p",null,"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Screen_reader"},"screen readers")," or ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Switch_access"},"switches"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Signature:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Accessibility\n")),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."),(0,s.kt)("p",null,'Blink - Chrome\'s rendering engine - has a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives users access to the Blink Accessibility Tree.'),(0,s.kt)("p",null,'Most of the accessibility tree gets filtered out when converting from Blink AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Puppeteer tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'),(0,s.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,s.kt)("inlineCode",{parentName:"p"},"Accessibility")," class."),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Method"),(0,s.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/api/puppeteer.accessibility.snapshot"},"snapshot(options)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page.")))))}u.isMDXComponent=!0}}]);