import{g as x,x as o,h as i,M as y,J as v,N as z,O as m,s as f,v as s}from"./entry.A1eWV8bd.js";import{t as h}from"./tw-merge.eXZIzSxT.js";import{_ as w,a as C}from"./Avatar.abGpyt1C.js";import{u as G}from"./selectMenu.z_saYcG9.js";import"./Icon.auZWEQWf.js";import"./Icon.jDXhylgo.js";import"./index.hPcBRl07.js";const _={wrapper:"inline-flex flex-row-reverse justify-end",ring:"ring-2 ring-white dark:ring-gray-900",margin:"-me-1.5 first:me-0"},c=f(s.ui.strategy,s.ui.avatar,C),b=f(s.ui.strategy,s.ui.avatarGroup,_),J=x({inheritAttrs:!1,props:{size:{type:String,default:null,validator(a){return Object.keys(c.size).includes(a)}},max:{type:Number,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(a,{slots:g}){const{ui:t,attrs:p}=G("avatarGroup",o(a,"ui"),b,o(a,"class")),n=i(()=>y(g)),r=i(()=>typeof a.max=="string"?parseInt(a.max,10):a.max),d=i(()=>n.value.map((l,u)=>{const e={};return!a.max||r.value&&u<r.value?(a.size&&(e.size=a.size),e.class=l.props.class||"",e.class=h(v(e.class,t.value.ring,t.value.margin),e.class),z(l,e)):r.value!==void 0&&u===r.value?m(w,{size:a.size||c.default.size,text:`+${n.value.length-r.value}`,class:v(t.value.ring,t.value.margin)}):null}).filter(Boolean).reverse());return()=>m("div",{class:t.value.wrapper,...p.value},d.value)}});export{J as default};
