import{_ as y}from"./Avatar.cMOAoJqJ.js";import k from"./Icon.-XsebP7p.js";import h from"./Badge.IkkBxFAW.js";import w from"./Link.O-nGKqms.js";import U from"./Divider.qiGg_kmm.js";import{_ as L,s as V,v as p,f as j,x as b,g as D,J,K,o as r,c as t,F as f,z as m,G as n,b as M,w as P,j as l,L as s,E as u,A as v,t as S,d as E,B as F}from"./entry.IM7UvsXg.js";import{u as O}from"./selectMenu.DeuLAjwW.js";import{a as G}from"./link.O6hAleNp.js";import"./Icon.jYDNq5VF.js";import"./index.hPcBRl07.js";import"./useButtonGroup.xs-o-HnT.js";import"./nuxt-link.k3e1B7-S.js";const I={wrapper:"relative",base:"group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",ring:"focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",padding:"px-2.5 py-1.5",width:"w-full",rounded:"rounded-md",font:"font-medium",size:"text-sm",active:"text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"},divider:{wrapper:{base:"p-2"}}},R=V(p.ui.strategy,p.ui.verticalNavigation,I),T=j({components:{UIcon:k,UAvatar:y,UBadge:h,ULink:w,UDivider:U},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:o,attrs:d}=O("verticalNavigation",b(e,"ui"),R,b(e,"class")),g=D(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:o,attrs:d,sections:g,getULinkProps:G,twMerge:J,twJoin:K}}}),q={key:0,class:"sr-only"};function H(e,o,d,g,Q,W){const C=y,$=k,z=h,_=w,A=U;return r(),t("nav",n({class:e.ui.wrapper},e.attrs),[(r(!0),t(f,null,m(e.sections,(N,c)=>(r(),t("ul",{key:`section${c}`},[(r(!0),t(f,null,m(N,(a,B)=>(r(),t("li",{key:`section${c}-${B}`},[M(_,n(e.getULinkProps(a),{class:[e.ui.base,e.ui.padding,e.ui.width,e.ui.ring,e.ui.rounded,e.ui.font,e.ui.size],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:a.click,onKeyup:o[0]||(o[0]=F(i=>i.target.blur(),["enter"]))}),{default:P(({isActive:i})=>[u(e.$slots,"avatar",{link:a,isActive:i},()=>[a.avatar?(r(),l(C,n({key:0},{size:e.ui.avatar.size,...a.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):s("",!0)]),u(e.$slots,"icon",{link:a,isActive:i},()=>[a.icon?(r(),l($,{key:0,name:a.icon,class:v(e.twMerge(e.twJoin(e.ui.icon.base,i?e.ui.icon.active:e.ui.icon.inactive),a.iconClass))},null,8,["name","class"])):s("",!0)]),u(e.$slots,"default",{link:a,isActive:i},()=>[a.label?(r(),t("span",{key:0,class:v(e.twMerge(e.ui.label,a.labelClass))},[i?(r(),t("span",q," Current page: ")):s("",!0),E(" "+S(a.label),1)],2)):s("",!0)]),u(e.$slots,"badge",{link:a,isActive:i},()=>[a.badge?(r(),l(z,n({key:0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof a.badge=="string"||typeof a.badge=="number"?{label:a.badge}:a.badge},{class:e.ui.badge.base}),null,16,["class"])):s("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])]))),128)),c<e.sections.length-1?(r(),l(A,{key:0,ui:e.ui.divider},null,8,["ui"])):s("",!0)]))),128))],16)}const le=L(T,[["render",H]]);export{le as default};