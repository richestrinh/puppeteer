"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72664],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,y=f["".concat(c,".").concat(m)]||f[m]||l[m]||p;return r?n.createElement(y,a(a({ref:t},i),{},{components:r})):n.createElement(y,a({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<p;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9350:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return i},default:function(){return f}});var n=r(87462),o=r(63366),p=(r(67294),r(3905)),a=["components"],s={},c=void 0,u={unversionedId:"puppeteer.consolemessagetype",id:"puppeteer.consolemessagetype",isDocsHomePage:!1,title:"puppeteer.consolemessagetype",description:"Home &gt; puppeteer &gt; ConsoleMessageType",source:"@site/docs/puppeteer.consolemessagetype.md",sourceDirName:".",slug:"/puppeteer.consolemessagetype",permalink:"/puppeteer/docs/next/puppeteer.consolemessagetype",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.consolemessagetype.md",version:"current",frontMatter:{}},i=[{value:"ConsoleMessageType type",id:"consolemessagetype-type",children:[]}],l={toc:i};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.consolemessagetype"},"ConsoleMessageType")),(0,p.kt)("h2",{id:"consolemessagetype-type"},"ConsoleMessageType type"),(0,p.kt)("p",null,"The supported types for console messages."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type ConsoleMessageType = 'log' | 'debug' | 'info' | 'error' | 'warning' | 'dir' | 'dirxml' | 'table' | 'trace' | 'clear' | 'startGroup' | 'startGroupCollapsed' | 'endGroup' | 'assert' | 'profile' | 'profileEnd' | 'count' | 'timeEnd' | 'verbose';\n")))}f.isMDXComponent=!0}}]);