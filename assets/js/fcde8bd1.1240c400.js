"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13389],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>d});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},p=Object.keys(n);for(r=0;r<p.length;r++)t=p[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(r=0;r<p.length;r++)t=p[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=r.createContext({}),l=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=l(n.components);return r.createElement(u.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,p=n.originalType,u=n.parentName,c=i(n,["components","mdxType","originalType","parentName"]),y=l(t),d=a,m=y["".concat(u,".").concat(d)]||y[d]||s[d]||p;return t?r.createElement(m,o(o({ref:e},c),{},{components:t})):r.createElement(m,o({ref:e},c))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var p=t.length,o=new Array(p);o[0]=y;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=n,i.mdxType="string"==typeof n?n:a,o[1]=i;for(var l=2;l<p;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},41986:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const p={sidebar_label:"KeyInput"},o="KeyInput type",i={unversionedId:"api/puppeteer.keyinput",id:"api/puppeteer.keyinput",title:"KeyInput type",description:"All the valid keys that can be passed to functions that take user input, such as keyboard.press",source:"@site/../docs/api/puppeteer.keyinput.md",sourceDirName:"api",slug:"/api/puppeteer.keyinput",permalink:"/api/puppeteer.keyinput",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"KeyInput"},sidebar:"sidebar",previous:{title:"JSHandle.toString",permalink:"/api/puppeteer.jshandle.tostring"},next:{title:"Keyboard",permalink:"/api/puppeteer.keyboard"}},u={},l=[],c={toc:l};function s(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"keyinput-type"},"KeyInput type"),(0,a.kt)("p",null,"All the valid keys that can be passed to functions that take user input, such as ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.keyboard.press"},"keyboard.press")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type KeyInput =\n  | '0'\n  | '1'\n  | '2'\n  | '3'\n  | '4'\n  | '5'\n  | '6'\n  | '7'\n  | '8'\n  | '9'\n  | 'Power'\n  | 'Eject'\n  | 'Abort'\n  | 'Help'\n  | 'Backspace'\n  | 'Tab'\n  | 'Numpad5'\n  | 'NumpadEnter'\n  | 'Enter'\n  | '\\r'\n  | '\\n'\n  | 'ShiftLeft'\n  | 'ShiftRight'\n  | 'ControlLeft'\n  | 'ControlRight'\n  | 'AltLeft'\n  | 'AltRight'\n  | 'Pause'\n  | 'CapsLock'\n  | 'Escape'\n  | 'Convert'\n  | 'NonConvert'\n  | 'Space'\n  | 'Numpad9'\n  | 'PageUp'\n  | 'Numpad3'\n  | 'PageDown'\n  | 'End'\n  | 'Numpad1'\n  | 'Home'\n  | 'Numpad7'\n  | 'ArrowLeft'\n  | 'Numpad4'\n  | 'Numpad8'\n  | 'ArrowUp'\n  | 'ArrowRight'\n  | 'Numpad6'\n  | 'Numpad2'\n  | 'ArrowDown'\n  | 'Select'\n  | 'Open'\n  | 'PrintScreen'\n  | 'Insert'\n  | 'Numpad0'\n  | 'Delete'\n  | 'NumpadDecimal'\n  | 'Digit0'\n  | 'Digit1'\n  | 'Digit2'\n  | 'Digit3'\n  | 'Digit4'\n  | 'Digit5'\n  | 'Digit6'\n  | 'Digit7'\n  | 'Digit8'\n  | 'Digit9'\n  | 'KeyA'\n  | 'KeyB'\n  | 'KeyC'\n  | 'KeyD'\n  | 'KeyE'\n  | 'KeyF'\n  | 'KeyG'\n  | 'KeyH'\n  | 'KeyI'\n  | 'KeyJ'\n  | 'KeyK'\n  | 'KeyL'\n  | 'KeyM'\n  | 'KeyN'\n  | 'KeyO'\n  | 'KeyP'\n  | 'KeyQ'\n  | 'KeyR'\n  | 'KeyS'\n  | 'KeyT'\n  | 'KeyU'\n  | 'KeyV'\n  | 'KeyW'\n  | 'KeyX'\n  | 'KeyY'\n  | 'KeyZ'\n  | 'MetaLeft'\n  | 'MetaRight'\n  | 'ContextMenu'\n  | 'NumpadMultiply'\n  | 'NumpadAdd'\n  | 'NumpadSubtract'\n  | 'NumpadDivide'\n  | 'F1'\n  | 'F2'\n  | 'F3'\n  | 'F4'\n  | 'F5'\n  | 'F6'\n  | 'F7'\n  | 'F8'\n  | 'F9'\n  | 'F10'\n  | 'F11'\n  | 'F12'\n  | 'F13'\n  | 'F14'\n  | 'F15'\n  | 'F16'\n  | 'F17'\n  | 'F18'\n  | 'F19'\n  | 'F20'\n  | 'F21'\n  | 'F22'\n  | 'F23'\n  | 'F24'\n  | 'NumLock'\n  | 'ScrollLock'\n  | 'AudioVolumeMute'\n  | 'AudioVolumeDown'\n  | 'AudioVolumeUp'\n  | 'MediaTrackNext'\n  | 'MediaTrackPrevious'\n  | 'MediaStop'\n  | 'MediaPlayPause'\n  | 'Semicolon'\n  | 'Equal'\n  | 'NumpadEqual'\n  | 'Comma'\n  | 'Minus'\n  | 'Period'\n  | 'Slash'\n  | 'Backquote'\n  | 'BracketLeft'\n  | 'Backslash'\n  | 'BracketRight'\n  | 'Quote'\n  | 'AltGraph'\n  | 'Props'\n  | 'Cancel'\n  | 'Clear'\n  | 'Shift'\n  | 'Control'\n  | 'Alt'\n  | 'Accept'\n  | 'ModeChange'\n  | ' '\n  | 'Print'\n  | 'Execute'\n  | '\\u0000'\n  | 'a'\n  | 'b'\n  | 'c'\n  | 'd'\n  | 'e'\n  | 'f'\n  | 'g'\n  | 'h'\n  | 'i'\n  | 'j'\n  | 'k'\n  | 'l'\n  | 'm'\n  | 'n'\n  | 'o'\n  | 'p'\n  | 'q'\n  | 'r'\n  | 's'\n  | 't'\n  | 'u'\n  | 'v'\n  | 'w'\n  | 'x'\n  | 'y'\n  | 'z'\n  | 'Meta'\n  | '*'\n  | '+'\n  | '-'\n  | '/'\n  | ';'\n  | '='\n  | ','\n  | '.'\n  | '`'\n  | '['\n  | '\\\\'\n  | ']'\n  | \"'\"\n  | 'Attn'\n  | 'CrSel'\n  | 'ExSel'\n  | 'EraseEof'\n  | 'Play'\n  | 'ZoomOut'\n  | ')'\n  | '!'\n  | '@'\n  | '#'\n  | '$'\n  | '%'\n  | '^'\n  | '&'\n  | '('\n  | 'A'\n  | 'B'\n  | 'C'\n  | 'D'\n  | 'E'\n  | 'F'\n  | 'G'\n  | 'H'\n  | 'I'\n  | 'J'\n  | 'K'\n  | 'L'\n  | 'M'\n  | 'N'\n  | 'O'\n  | 'P'\n  | 'Q'\n  | 'R'\n  | 'S'\n  | 'T'\n  | 'U'\n  | 'V'\n  | 'W'\n  | 'X'\n  | 'Y'\n  | 'Z'\n  | ':'\n  | '<'\n  | '_'\n  | '>'\n  | '?'\n  | '~'\n  | '{'\n  | '|'\n  | '}'\n  | '\"'\n  | 'SoftLeft'\n  | 'SoftRight'\n  | 'Camera'\n  | 'Call'\n  | 'EndCall'\n  | 'VolumeDown'\n  | 'VolumeUp';\n")))}s.isMDXComponent=!0}}]);