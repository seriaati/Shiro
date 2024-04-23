function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-CkKMkTm0.js","./index-C4Y_DexT.js","./index-QetkSisU.css","./viewport-CQMDZUEc.js","./request-C50VwQIr.js","./toast-28x_7aqT.js","./StyledButton-BKTEEb8M.js","./motion-minimal-BYavME8u.js","./index-CVtgijuZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as m,j as e}from"./index-C4Y_DexT.js";import{I as a}from"./Gallery-DIHkvim-.js";import"./image-B2UaIUCk.js";import"./StyledButton-BKTEEb8M.js";import"./motion-minimal-BYavME8u.js";import"./lodash-B3VVwmZe.js";import"./request-C50VwQIr.js";import"./toast-28x_7aqT.js";import"./viewport-CQMDZUEc.js";import"./use-is-unmounted-IcFw39HO.js";const o={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function d({id:t}){const{Tweet:r}=await m(()=>import("./index.client-CkKMkTm0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:o})})}export{d as default};
