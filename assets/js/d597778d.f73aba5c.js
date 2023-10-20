"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_label:"ScreencastOptions"},p="ScreencastOptions interface",i={unversionedId:"api/puppeteer.screencastoptions",id:"version-21.4.0/api/puppeteer.screencastoptions",title:"ScreencastOptions interface",description:"Signature:",source:"@site/versioned_docs/version-21.4.0/api/puppeteer.screencastoptions.md",sourceDirName:"api",slug:"/api/puppeteer.screencastoptions",permalink:"/api/puppeteer.screencastoptions",draft:!1,tags:[],version:"21.4.0",frontMatter:{sidebar_label:"ScreencastOptions"},sidebar:"api",previous:{title:"ResponseForRequest",permalink:"/api/puppeteer.responseforrequest"},next:{title:"ScreenRecorder",permalink:"/api/puppeteer.screenrecorder"}},u={},c=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}],s={toc:c};function d(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"screencastoptions-interface"}),"ScreencastOptions interface"),(0,r.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export interface ScreencastOptions\n")),(0,r.kt)("h2",a({},{id:"properties"}),"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"crop"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.boundingbox"}),"BoundingBox")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specifies the region of the viewport to crop."),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ffmpegPath"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("p",null,"Path to the ","[","ffmpeg","]","(",(0,r.kt)("a",a({parentName:"td"},{href:"https://ffmpeg.org/"}),"https://ffmpeg.org/"),")."),(0,r.kt)("p",null,"Required if ",(0,r.kt)("code",null,"ffmpeg")," is not in your PATH.")),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"path"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"`","${string}.webm","`"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"File path to save the screencast to."),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"scale"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("p",null,"Scales the output video."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("code",null,"0.5")," will shrink the width and height of the output video by half. ",(0,r.kt)("code",null,"2")," will double the width and height of the output video.")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"speed"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("p",null,"Specifies the speed to record at."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("code",null,"0.5")," will slowdown the output video by 50%. ",(0,r.kt)("code",null,"2")," will double the speed of the output video.")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"1"))))))}d.isMDXComponent=!0}}]);