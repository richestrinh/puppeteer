"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79008],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||p;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<p;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30135:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(87462),o=r(63366),p=(r(67294),r(3905)),a=["components"],i={},s=void 0,u={unversionedId:"puppeteer.browser.wsendpoint",id:"puppeteer.browser.wsendpoint",isDocsHomePage:!1,title:"puppeteer.browser.wsendpoint",description:"Home &gt; puppeteer &gt; Browser &gt; wsEndpoint",source:"@site/docs/puppeteer.browser.wsendpoint.md",sourceDirName:".",slug:"/puppeteer.browser.wsendpoint",permalink:"/puppeteer/docs/next/puppeteer.browser.wsendpoint",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.browser.wsendpoint.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.browser.waitfortarget",permalink:"/puppeteer/docs/next/puppeteer.browser.waitfortarget"},next:{title:"puppeteer.browsercontext",permalink:"/puppeteer/docs/next/puppeteer.browsercontext"}},c=[{value:"Browser.wsEndpoint() method",id:"browserwsendpoint-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],l={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browser"},"Browser")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browser.wsendpoint"},"wsEndpoint")),(0,p.kt)("h2",{id:"browserwsendpoint-method"},"Browser.wsEndpoint() method"),(0,p.kt)("p",null,"The browser websocket endpoint which can be used as an argument to ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),"."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"wsEndpoint(): string;\n")),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"string"),(0,p.kt)("p",null,"The Browser websocket url."),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"The format is ",(0,p.kt)("inlineCode",{parentName:"p"},"ws://${host}:${port}/devtools/browser/<id>"),"."),(0,p.kt)("p",null,"You can find the ",(0,p.kt)("inlineCode",{parentName:"p"},"webSocketDebuggerUrl")," from ",(0,p.kt)("inlineCode",{parentName:"p"},"http://${host}:${port}/json/version"),". Learn more about the ",(0,p.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol"},"devtools protocol")," and the ",(0,p.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/#how-do-i-access-the-browser-target"},"browser endpoint"),"."))}d.isMDXComponent=!0}}]);