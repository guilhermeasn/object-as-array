"use strict";(self.webpackChunkobject_as_array_docusaurus=self.webpackChunkobject_as_array_docusaurus||[]).push([[21],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},i="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),i=p(n),m=a,f=i["".concat(s,".").concat(m)]||i[m]||y[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[i]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:7},l="KeysMap",c={unversionedId:"API/keysMap",id:"API/keysMap",title:"KeysMap",description:"Calls a defined callback function on each element of an object, and returns an object with the same keys that contains the results.",source:"@site/data/02-API/07-keysMap.md",sourceDirName:"02-API",slug:"/API/keysMap",permalink:"/object-as-array/docs/API/keysMap",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Map",permalink:"/object-as-array/docs/API/map"},next:{title:"Sort",permalink:"/object-as-array/docs/API/sort"}},s={},p=[],u={toc:p},i="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"keysmap"},"KeysMap"),(0,a.kt)("p",null,"Calls a defined callback function on each element of an object, and returns an object with the same keys that contains the results."),(0,a.kt)("h4",null,"Functional programming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Typing:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"<R>(handler: (value: O[keyof O], key: keyof O) => R) => Record<keyof O, R>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import objectAsArray from \"object-as-array\";\n\nexport default function example() {\n    \n    const obj = objectAsArray({\n        I : 1,\n        V : 5,\n        X : 10,\n        L : 50,\n        C : 100,\n        D : 500,\n        M : 1000\n    });\n\n    return obj.keysMap((_, k) => k.toLowerCase());\n\n    // Result: {I: 'i', V: 'v', X: 'x', L: 'l', C: 'c', D: 'd', M: 'm'}\n\n}\n")),(0,a.kt)("h4",null,"Modular programming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Typing:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"<O extends object, R>(object: O, handler: (value: O[keyof O], key: keyof O) => R) => Record<keyof O, R>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import keysMap from \"object-as-array/keysMap\";\n\nexport default function example() {\n    \n    const obj = {\n        I : 1,\n        V : 5,\n        X : 10,\n        L : 50,\n        C : 100,\n        D : 500,\n        M : 1000\n    };\n\n    return keysMap(obj, (_, k) => k.toLowerCase());\n\n    // Result: {I: 'i', V: 'v', X: 'x', L: 'l', C: 'c', D: 'd', M: 'm'}\n\n}\n")))}y.isMDXComponent=!0}}]);