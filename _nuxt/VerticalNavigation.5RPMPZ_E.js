import{_ as v}from"./Avatar.X7r45POT.js";import f from"./Icon.bWQx7xiq.js";import m from"./Link.fTcesk51.js";import{_ as C,q as $,s as d,h as z,v as b,o as i,c as s,F as U,y as x,E as l,f as u,w as A,J as o,D as n,z as c,t as p,A as N}from"./entry.VJkcEQ3a.js";import{u as B,o as I}from"./selectMenu.CPVhT6WU.js";import"./tw-merge.N1_sWVtP.js";import"./Icon.mUalCB7q.js";import"./index.hPcBRl07.js";import"./nuxt-link.g0LgZYu-.js";const L={wrapper:"relative",base:"group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",ring:"focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",padding:"px-3 py-1.5",width:"w-full",rounded:"rounded-md",font:"font-medium",size:"text-sm",active:"text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",label:"truncate relative",icon:{base:"flex-shrink-0 w-4 h-4",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"3xs"},badge:{base:"relative ms-auto inline-block py-0.5 px-2 text-xs rounded-md -me-1 -my-0.5",active:"bg-white dark:bg-gray-900",inactive:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white group-hover:bg-white dark:group-hover:bg-gray-900"}},S=$(d.ui.strategy,d.ui.verticalNavigation,L),j=z({components:{UIcon:f,UAvatar:v,ULink:m},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:g}=B("verticalNavigation",b(e,"ui"),S,b(e,"class"));return{ui:t,attrs:g,omit:I}}});function D(e,t,g,E,F,K){const y=v,k=f,h=m;return i(),s("nav",l({class:e.ui.wrapper},e.attrs),[(i(!0),s(U,null,x(e.links,(a,w)=>(i(),u(h,l({key:w},e.omit(a,["label","icon","iconClass","avatar","badge","click"]),{class:[e.ui.base,e.ui.padding,e.ui.width,e.ui.ring,e.ui.rounded,e.ui.font,e.ui.size],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:a.click,onKeyup:t[0]||(t[0]=N(r=>r.target.blur(),["enter"]))}),{default:A(({isActive:r})=>[n(e.$slots,"avatar",{link:a,isActive:r},()=>[a.avatar?(i(),u(y,l({key:0},{size:e.ui.avatar.size,...a.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):o("",!0)]),n(e.$slots,"icon",{link:a,isActive:r},()=>[a.icon?(i(),u(k,{key:0,name:a.icon,class:c([e.ui.icon.base,r?e.ui.icon.active:e.ui.icon.inactive,a.iconClass])},null,8,["name","class"])):o("",!0)]),n(e.$slots,"default",{link:a,isActive:r},()=>[a.label?(i(),s("span",{key:0,class:c(e.ui.label)},p(a.label),3)):o("",!0)]),n(e.$slots,"badge",{link:a,isActive:r},()=>[a.badge?(i(),s("span",{key:0,class:c([e.ui.badge.base,r?e.ui.badge.active:e.ui.badge.inactive])},p(a.badge),3)):o("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))],16)}const M=C(j,[["render",D]]);export{M as default};