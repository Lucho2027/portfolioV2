import{_ as i,q as o,s as r,h as u,v as d,j as l,I as p,o as c,c as g,D as f,d as m,t as b,E as x}from"./entry.VJkcEQ3a.js";import{t as k}from"./tw-merge.N1_sWVtP.js";import{u as y}from"./selectMenu.CPVhT6WU.js";const v={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}},a=o(r.ui.strategy,r.ui.kbd,v),_=u({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>a.default.size,validator(e){return Object.keys(a.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=y("kbd",d(e,"ui"),a),n=l(()=>k(p(t.value.base,t.value.size[e.size],t.value.padding,t.value.rounded,t.value.font,t.value.background,t.value.ring),e.class));return{ui:t,attrs:s,kbdClass:n}}});function h(e,t,s,n,z,w){return c(),g("kbd",x({class:e.kbdClass},e.attrs),[f(e.$slots,"default",{},()=>[m(b(e.value),1)])],16)}const $=i(_,[["render",h]]);export{$ as default};