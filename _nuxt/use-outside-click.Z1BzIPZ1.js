import{c as v,w as s,h as w}from"./focus-management.3FvFoO9X.js";import{o as p}from"./dom.iXLDqDcr.js";import{n as f,r as E,k as L}from"./entry.wHsg6pmn.js";function d(l,r,o){v.isServer||f(u=>{document.addEventListener(l,r,o),u(()=>document.removeEventListener(l,r,o))})}function h(l,r,o){v.isServer||f(u=>{window.addEventListener(l,r,o),u(()=>window.removeEventListener(l,r,o))})}function H(l,r,o=L(()=>!0)){function u(e,a){if(!o.value||e.defaultPrevented)return;let t=a(e);if(t===null||!t.getRootNode().contains(t))return;let m=function i(n){return typeof n=="function"?i(n()):Array.isArray(n)||n instanceof Set?n:[n]}(l);for(let i of m){if(i===null)continue;let n=i instanceof HTMLElement?i:p(i);if(n!=null&&n.contains(t)||e.composed&&e.composedPath().includes(n))return}return!s(t,w.Loose)&&t.tabIndex!==-1&&e.preventDefault(),r(e,t)}let c=E(null);d("pointerdown",e=>{var a,t;o.value&&(c.value=((t=(a=e.composedPath)==null?void 0:a.call(e))==null?void 0:t[0])||e.target)},!0),d("mousedown",e=>{var a,t;o.value&&(c.value=((t=(a=e.composedPath)==null?void 0:a.call(e))==null?void 0:t[0])||e.target)},!0),d("click",e=>{c.value&&(u(e,()=>c.value),c.value=null)},!0),d("touchend",e=>u(e,()=>e.target instanceof HTMLElement?e.target:null),!0),h("blur",e=>u(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}export{h as w,H as y};
