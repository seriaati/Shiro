import{j as o,r}from"./index-B9SUlsL6.js";import{c}from"./StyledButton-DVz0ew6u.js";import{F as x}from"./FloatPopover-BtFXWwwV.js";import"./proxy-DpF5uie5.js";import"./viewport-C-voIzf7.js";import"./owner-PrTRGOLt.js";import"./spring-C80N1tKa.js";import"./use-event-callback-BQ6UHZlx.js";import"./index-6TaX3-pf.js";import"./index-cjK2ZoWF.js";const h=t=>t.offsetWidth<t.scrollWidth||t.offsetHeight<t.scrollHeight,w=t=>{const{children:e,className:i,width:l,disabled:p,wrapperClassName:m}=t,[s,d]=r.useState(),[u,f]=r.useState(!1),n=()=>{s&&f(h(s))};return r.useEffect(()=>{n()},[s,e]),r.useEffect(()=>{if(!s)return;const a=new ResizeObserver(()=>{n()});return a.observe(s),()=>{a.disconnect()}},[s]),o.jsx(x,{mobileAsSheet:!0,type:"tooltip",wrapperClassName:c("w-full min-w-0 truncate",m),isDisabled:!u||p,TriggerComponent:r.useCallback(()=>o.jsx("span",{className:i,ref:d,style:l?{maxWidth:l}:void 0,children:e}),[e,i,l]),children:o.jsx("span",{className:"max-w-[30vw] break-all hover:!bg-transparent",onClick:a=>a.stopPropagation(),children:e})})},b=t=>{const{className:e,...i}=t;return o.jsx(w,{className:c("block truncate",e),...i})},v=()=>o.jsx(b,{width:"12rem",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"});v.meta={title:"文本溢出省略 + 提示",description:"如果文本溢出則省略，省略時伴隨 Tooltip 提示"};const z={title:"文本溢出",description:"一個簡單的處理文本溢出省略的組件"};export{v as EllipsisTextWithTooltipDemo,z as metadata};