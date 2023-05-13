"use strict";(self.webpackChunkobject_as_array_docusaurus=self.webpackChunkobject_as_array_docusaurus||[]).push([[283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),i=u(n),b=o,f=i["".concat(s,".").concat(b)]||i[b]||m[b]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[i]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:7},l="Sort",c={unversionedId:"API/sort",id:"API/sort",title:"Sort",description:"Sorts the position of the object's elements",source:"@site/data/02-API/07-sort.md",sourceDirName:"02-API",slug:"/API/sort",permalink:"/object-as-array/docs/API/sort",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"KeysMap",permalink:"/object-as-array/docs/API/keysMap"},next:{title:"Reduce",permalink:"/object-as-array/docs/API/reduce"}},s={},u=[],p={toc:u},i="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sort"},"Sort"),(0,o.kt)("p",null,"Sorts the position of the object's elements"),(0,o.kt)("h4",null,"Functional programming"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Typing:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"<T extends keyof ObjectInfo<O>>(dataType: T, handler: (a: ObjectInfo<O>[T], b: ObjectInfo<O>[T]) => number) => O\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import objectAsArray from \"object-as-array\";\n\nexport default function example() {\n    \n    const obj = objectAsArray({\n        I : 1,\n        V : 5,\n        X : 10,\n        L : 50,\n        C : 100,\n        D : 500,\n        M : 1000\n    });\n\n    return obj.sort('key', (a, b) => a > b);\n\n    // Result: {C: 100, D: 500, I: 1, L: 50, M: 1000, V: 5, X: 10}\n\n}\n")),(0,o.kt)("h4",null,"Modular programming"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Typing:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"<O extends object, T extends keyof ObjectInfo<O>>(object: O, dataType: T, handler: (a: ObjectInfo<O>[T], b: ObjectInfo<O>[T]) => number) => O\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import sort from \"object-as-array/sort\";\n\nexport default function example() {\n    \n    const obj = {\n        I : 1,\n        V : 5,\n        X : 10,\n        L : 50,\n        C : 100,\n        D : 500,\n        M : 1000\n    };\n\n    return sort(obj, 'key', (a, b) => a > b);\n\n    // Result: {C: 100, D: 500, I: 1, L: 50, M: 1000, V: 5, X: 10}\n\n}\n")))}m.isMDXComponent=!0}}]);