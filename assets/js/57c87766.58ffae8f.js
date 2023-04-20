"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,f=m["".concat(o,".").concat(c)]||m[c]||d[c]||p;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<p;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_label:"ElementHandle.press"},i="ElementHandle.press() method",o={unversionedId:"api/puppeteer.elementhandle.press",id:"version-19.10.0/api/puppeteer.elementhandle.press",title:"ElementHandle.press() method",description:"Focuses the element, and then uses Keyboard.down() and Keyboard.up().",source:"@site/versioned_docs/version-19.10.0/api/puppeteer.elementhandle.press.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.press",permalink:"/api/puppeteer.elementhandle.press",draft:!1,tags:[],version:"19.10.0",frontMatter:{sidebar_label:"ElementHandle.press"},sidebar:"api",previous:{title:"ElementHandle.isVisible",permalink:"/api/puppeteer.elementhandle.isvisible"},next:{title:"ElementHandle.screenshot",permalink:"/api/puppeteer.elementhandle.screenshot"}},s={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:u};function m(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"elementhandlepress-method"}),"ElementHandle.press() method"),(0,r.kt)("p",null,"Focuses the element, and then uses ",(0,r.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.keyboard.down"}),"Keyboard.down()")," and ",(0,r.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.keyboard.up"}),"Keyboard.up()"),"."),(0,r.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class ElementHandle {\n  press(key: KeyInput, options?: PressOptions): Promise<void>;\n}\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"key"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.keyinput"}),"KeyInput")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Name of key to press, such as ",(0,r.kt)("code",null,"ArrowLeft"),". See ",(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.keyinput"}),"KeyInput")," for a list of all key names.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.pressoptions"}),"PressOptions")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"(Optional)"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","void",">"),(0,r.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," is a single character and no modifier keys besides ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift")," are being held down, a ",(0,r.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"input")," event will also be generated. The ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," option can be specified to force an input event to be generated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")," Modifier keys DO affect ",(0,r.kt)("inlineCode",{parentName:"p"},"elementHandle.press"),". Holding down ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))}m.isMDXComponent=!0}}]);