import{r as g,R as M,j as x}from"./index-B9SUlsL6.js";var p=new Map,h=new WeakMap,y=0,D=void 0;function L(e){return e?(h.has(e)||(y+=1,h.set(e,y.toString())),h.get(e)):"0"}function O(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?L(e.root):e[t]}`).toString()}function T(e){const t=O(e);let n=p.get(t);if(!n){const s=new Map;let a;const i=new IntersectionObserver(o=>{o.forEach(r=>{var c;const v=r.isIntersecting&&a.some(d=>r.intersectionRatio>=d);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=v),(c=s.get(r.target))==null||c.forEach(d=>{d(v,r)})})},e);a=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:s},p.set(t,n)}return n}function _(e,t,n={},s=D){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const c=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:a,observer:i,elements:o}=T(n),r=o.get(e)||[];return o.has(e)||o.set(e,r),r.push(t),i.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(o.delete(e),i.unobserve(e)),o.size===0&&(i.disconnect(),p.delete(a))}}function $({threshold:e,delay:t,trackVisibility:n,rootMargin:s,root:a,triggerOnce:i,skip:o,initialInView:r,fallbackInView:c,onChange:v}={}){var d;const[l,C]=g.useState(null),R=g.useRef(),[m,E]=g.useState({inView:!!r,entry:void 0});R.current=v,g.useEffect(()=>{if(o||!l)return;let f;return f=_(l,(S,w)=>{E({inView:S,entry:w}),R.current&&R.current(S,w),w.isIntersecting&&i&&f&&(f(),f=void 0)},{root:a,rootMargin:s,threshold:e,trackVisibility:n,delay:t},c),()=>{f&&f()}},[Array.isArray(e)?e.toString():e,l,a,s,i,o,n,c,t]);const b=(d=m.entry)==null?void 0:d.target,I=g.useRef();!l&&b&&!i&&!o&&I.current!==b&&(I.current=b,E({inView:!!r,entry:void 0}));const u=[C,m.inView,m.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}const N=e=>{const{placeholder:t=null,offset:n=0,...s}=e,{ref:a,inView:i}=$({triggerOnce:!0,rootMargin:`${n||0}px`,...s}),[o,r]=M.useState(!1);return g.useEffect(()=>{i&&r(!0)},[i]),x.jsxs(x.Fragment,{children:[!o&&x.jsx("span",{"data-hide-print":!0,"data-testid":"lazyload-indicator",ref:a}),i?e.children:t]})},j="cdn.innei.ren",z=j,V=({width:e,height:t,max:n})=>{if(e===0||t===0)throw new Error("Invalid image size");const{width:s,height:a}=n,i=s/e||1,o=a/t||1,r=Math.min(i,o,1);return{width:e*r,height:t*r}};function U(e){const t=document.createElement("canvas"),n=t.getContext("2d");t.width=1,t.height=1,n.drawImage(e,0,0,1,1);const s=n.getImageData(0,0,1,1).data;return`#${((1<<24)+(s[0]<<16)+(s[1]<<8)+s[2]).toString(16).slice(1)}`}const B=(e,t)=>new URL(e).host===z?`${e}?imageMogr2/thumbnail/${t}x/strip`:e;export{N as L,B as a,V as c,U as g,$ as u};
