"use strict";(self.webpackChunkobject_as_array_docusaurus=self.webpackChunkobject_as_array_docusaurus||[]).push([[805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,y=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:12},l="Omit",i={unversionedId:"API/omit",id:"API/omit",title:"Omit",description:"Returns the elements that did not have their keys specified",source:"@site/data/02-API/12-omit.md",sourceDirName:"02-API",slug:"/API/omit",permalink:"/object-as-array/docs/API/omit",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Slice",permalink:"/object-as-array/docs/API/slice"},next:{title:"Concat",permalink:"/object-as-array/docs/API/concat"}},c={},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"omit"},"Omit"),(0,a.kt)("p",null,"Returns the elements that did not have their keys specified"),(0,a.kt)("h4",null,"Functional programming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Typing:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"<K extends (keyof O)[]>(...keys: K) => Omit<O, ArrayValuesType<K>>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import objectAsArray from \"object-as-array\";\n\nexport default function example() {\n    \n    const obj = objectAsArray({\n        I : 1,\n        V : 5,\n        X : 10,\n        L : 50,\n        C : 100,\n        D : 500,\n        M : 1000\n    });\n\n    return obj.omit('I', 'V', 'L', 'D');\n\n    // Result: {X: 10, C: 100, M: 1000}\n\n}\n")),(0,a.kt)("h4",null,"Modular programming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Typing:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"<O extends object, K extends (keyof O)[]>(object: O, ...keys: K) => Omit<O, ArrayValuesType<K>>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import omit from \"object-as-array/omit\";\n\nexport default function example() {\n    \n    const obj = {\n        I : 1,\n        V : 5,\n        X : 10,\n        L : 50,\n        C : 100,\n        D : 500,\n        M : 1000\n    };\n\n    return omit(obj, 'I', 'V', 'L', 'D');\n\n    // Result: {X: 10, C: 100, M: 1000}\n\n}\n")))}m.isMDXComponent=!0}}]);