"use strict";(self.webpackChunkobject_as_array_docusaurus=self.webpackChunkobject_as_array_docusaurus||[]).push([[566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,f=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:12},c="Concat",l={unversionedId:"API/concat",id:"API/concat",title:"Concat",description:"Combines two objects. This method returns a new object without modifying any existing object",source:"@site/data/02-API/12-concat.md",sourceDirName:"02-API",slug:"/API/concat",permalink:"/object-as-array/docs/API/concat",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Omit",permalink:"/object-as-array/docs/API/omit"},next:{title:"Reverse",permalink:"/object-as-array/docs/API/reverse"}},i={},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concat"},"Concat"),(0,a.kt)("p",null,"Combines two objects. This method returns a new object without modifying any existing object"),(0,a.kt)("h4",null,"Functional programming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Typing:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"<A extends object>(assign: A) => O & A\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import objectAsArray from "object-as-array";\n\nexport default function example() {\n    \n    const obj = objectAsArray({\n        I : 1,\n        V : 5,\n        X : 10,\n        L : 50,\n        C : 100,\n        D : 500,\n        M : 1000\n    });\n\n    return obj.concat({II : 2, III: 3, IV: 4});\n\n    // Result: {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, II: 2, III: 3, IV: 4}\n\n}\n')),(0,a.kt)("h4",null,"Modular programming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Typing:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"<O extends object, A extends object>(object: O, assign: A) => O & A\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import concat from "object-as-array/concat";\n\nexport default function example() {\n    \n    const obj = {\n        I : 1,\n        V : 5,\n        X : 10,\n        L : 50,\n        C : 100,\n        D : 500,\n        M : 1000\n    };\n\n    return concat(obj, {II : 2, III: 3, IV: 4});\n\n    // Result: {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, II: 2, III: 3, IV: 4}\n\n}\n')))}m.isMDXComponent=!0}}]);