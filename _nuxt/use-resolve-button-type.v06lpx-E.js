import{o as u}from"./dom.0hOOROr2.js";import{r as a,k as l,m as f}from"./entry.VJkcEQ3a.js";function r(t,n){if(t)return t;let e=n??"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function v(t,n){let e=a(r(t.value.type,t.value.as));return l(()=>{e.value=r(t.value.type,t.value.as)}),f(()=>{var o;e.value||u(n)&&u(n)instanceof HTMLButtonElement&&!((o=u(n))!=null&&o.hasAttribute("type"))&&(e.value="button")}),e}export{v as b};
