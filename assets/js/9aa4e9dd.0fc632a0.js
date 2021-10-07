"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3441],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return s}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(a),s=n,f=d["".concat(u,".").concat(s)]||d[s]||m[s]||p;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<p;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},34156:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var r=a(87462),n=a(63366),p=(a(67294),a(3905)),i=["components"],l={},u=void 0,o={unversionedId:"puppeteer.page.emulatemediatype",id:"version-10.0.0/puppeteer.page.emulatemediatype",isDocsHomePage:!1,title:"puppeteer.page.emulatemediatype",description:"Home &gt; puppeteer &gt; Page &gt; emulateMediaType",source:"@site/versioned_docs/version-10.0.0/puppeteer.page.emulatemediatype.md",sourceDirName:".",slug:"/puppeteer.page.emulatemediatype",permalink:"/puppeteer/docs/10.0.0/puppeteer.page.emulatemediatype",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.0.0/puppeteer.page.emulatemediatype.md",version:"10.0.0",frontMatter:{}},c=[{value:"Page.emulateMediaType() method",id:"pageemulatemediatype-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],m={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.page"},"Page")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.page.emulatemediatype"},"emulateMediaType")),(0,p.kt)("h2",{id:"pageemulatemediatype-method"},"Page.emulateMediaType() method"),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"emulateMediaType(type?: string): Promise<void>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"type"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"Changes the CSS media type of the page. The only allowed values are ",(0,p.kt)("code",null,"screen"),", ",(0,p.kt)("code",null,"print")," and ",(0,p.kt)("code",null,"null"),". Passing ",(0,p.kt)("code",null,"null")," disables CSS media emulation.")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<","void",">"),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"await page.evaluate(() => matchMedia('screen').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 false\n\nawait page.emulateMediaType('print');\nawait page.evaluate(() => matchMedia('screen').matches);\n// \u2192 false\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 true\n\nawait page.emulateMediaType(null);\nawait page.evaluate(() => matchMedia('screen').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 false\n\n")))}d.isMDXComponent=!0}}]);