"use strict";(self.webpackChunkobject_as_array_docusaurus=self.webpackChunkobject_as_array_docusaurus||[]).push([[321],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),l=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),y=a,m=p["".concat(i,".").concat(y)]||p[y]||f[y]||o;return r?t.createElement(m,c(c({ref:n},u),{},{components:r})):t.createElement(m,c({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=y;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8631:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5},c="ForEachAsync",s={unversionedId:"API/forEachAsync",id:"API/forEachAsync",title:"ForEachAsync",description:"Performs the specified async action for each element in an object",source:"@site/data/02-API/05-forEachAsync.md",sourceDirName:"02-API",slug:"/API/forEachAsync",permalink:"/object-as-array/docs/API/forEachAsync",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"ForEach",permalink:"/object-as-array/docs/API/forEach"},next:{title:"Map",permalink:"/object-as-array/docs/API/map"}},i={},l=[],u={toc:l},p="wrapper";function f(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"foreachasync"},"ForEachAsync"),(0,a.kt)("p",null,"Performs the specified async action for each element in an object"),(0,a.kt)("h4",null,"Functional programming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Typing:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"(handler: (value: O[keyof O], key: keyof O) => Promise<void>) => Promise<void>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import objectAsArray from "object-as-array";\n\nexport default async function example() {\n\n    const pairs = [];\n\n    const sleep = () => {\n        return new Promise(resolve => {\n            setTimeout(() => resolve(), 35);\n        });\n    }\n\n    const isPair = async n => {\n        await sleep();\n        return n % 2 === 0;\n    }\n    \n    const obj = objectAsArray({\n        I : 1,\n        V : 5,\n        X : 10,\n        L : 50,\n        C : 100,\n        D : 500,\n        M : 1000\n    });\n\n    await obj.forEachAsync(async v => { pairs.push(await isPair(v)) });\n\n    return pairs;\n\n    // Result: [ false, false, true, true, true, true, true ]\n\n}\n')),(0,a.kt)("h4",null,"Modular programming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Typing:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"<O extends object>(object: O, handler: (value: O[keyof O], key: keyof O) => Promise<void>) => Promise<void>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import forEachAsync from "object-as-array/forEachAsync";\n\nexport default async function example() {\n\n    const pairs = [];\n\n    const sleep = () => {\n        return new Promise(resolve => {\n            setTimeout(() => resolve(), 35);\n        });\n    }\n\n    const isPair = async n => {\n        await sleep();\n        return n % 2 === 0;\n    }\n    \n    const obj = {\n        I : 1,\n        V : 5,\n        X : 10,\n        L : 50,\n        C : 100,\n        D : 500,\n        M : 1000\n    };\n\n    await forEachAsync(obj, async v => { pairs.push(await isPair(v)) });\n\n    return pairs;\n\n    // Result: [ false, false, true, true, true, true, true ]\n\n}\n')))}f.isMDXComponent=!0}}]);