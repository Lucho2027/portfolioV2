import b from"./Icon.F_9o4lqU.js";import y from"./Link.GSSZUqe1.js";import{u as C,o as $}from"./selectMenu.TIhLO2gh.js";import{_ as w,s as A,v as d,g as B,x as p,o as r,c as t,a as U,F as m,z as N,A as i,G as f,b as S,w as V,f as g,K as o,E as n,t as v,d as I}from"./entry.Jvo4eJKd.js";import"./Icon.I-limpXq.js";import"./index.hPcBRl07.js";import"./nuxt-link.j9YcyRhr.js";const L={wrapper:"relative",ol:"flex items-center gap-x-1.5",li:"flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm",base:"flex items-center gap-x-1.5 group font-semibold",icon:{base:"flex-shrink-0 w-4 h-4",active:"",inactive:""},divider:{base:"flex-shrink-0 w-5 h-5"},active:"text-primary-500 dark:text-primary-400",inactive:" hover:text-gray-700 dark:hover:text-gray-200",default:{divider:"i-heroicons-chevron-right-20-solid rtl:i-heroicons-chevron-left-20-solid"}},h=A(d.ui.strategy,d.ui.breadcrumb,L),j=B({components:{UIcon:b,ULink:y},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},divider:{type:String,default:()=>h.default.divider},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:l,attrs:c}=C("breadcrumb",p(e,"ui"),h,p(e,"class"));return{ui:l,attrs:c,omit:$}}}),z={key:1,role:"presentation"};function E(e,l,c,F,O,D){const u=b,k=y;return r(),t("nav",f({"aria-label":"Breadcrumb",class:e.ui.wrapper},e.attrs),[U("ol",{class:i(e.ui.ol)},[(r(!0),t(m,null,N(e.links,(a,s)=>(r(),t("li",{key:s,class:i(e.ui.li)},[S(k,f({as:"span",class:[e.ui.base,s===e.links.length-1?e.ui.active:a.to?e.ui.inactive:""]},e.omit(a,["label","icon","iconClass"]),{"aria-current":s===e.links.length-1?"page":void 0}),{default:V(()=>[n(e.$slots,"icon",{link:a,index:s,isActive:s===e.links.length-1},()=>[a.icon?(r(),g(u,{key:0,name:a.icon,class:i([e.ui.icon.base,s===e.links.length-1?e.ui.icon.active:a.to?e.ui.icon.inactive:"",a.iconClass])},null,8,["name","class"])):o("",!0)]),n(e.$slots,"default",{link:a,index:s,isActive:s===e.links.length-1},()=>[I(v(a.label),1)])]),_:2},1040,["class","aria-current"]),s<e.links.length-1?n(e.$slots,"divider",{key:0},()=>[e.divider?(r(),t(m,{key:0},[e.divider.startsWith("i-")?(r(),g(u,{key:0,name:e.divider,class:i(e.ui.divider.base),role:"presentation"},null,8,["name","class"])):(r(),t("span",z,v(e.divider),1))],64)):o("",!0)]):o("",!0)],2))),128))],2)],16)}const H=w(j,[["render",E]]);export{H as default};