import k from"./Kbd.EIXjclGN.js";import{_ as M,q as O,s as c,h as D,v as g,j as N,P as $,r as j,o as s,c as n,D as v,d as u,z as i,b as A,w as b,J as p,t as h,a as d,F as B,f as z,y as F,E as w,T as L}from"./entry.VJkcEQ3a.js";import{b as S,u as V}from"./selectMenu.CPVhT6WU.js";import{u as P}from"./usePopper.wEOmE6l_.js";import"./tw-merge.N1_sWVtP.js";import"./index.eWgtsMOp.js";import"./index.Rtp-oiOn.js";const U={wrapper:"relative inline-flex",container:"z-20 group",width:"max-w-xs",background:"bg-white dark:bg-gray-900",color:"text-gray-900 dark:text-white",shadow:"shadow",rounded:"rounded",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative",shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5",middot:"mx-1 text-gray-700 dark:text-gray-200",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},popper:{strategy:"fixed"},arrow:S},E=O(c.ui.strategy,c.ui.tooltip,U),K=D({components:{UKbd:k},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:o,attrs:f}=V("tooltip",g(e,"ui"),E,g(e,"class")),l=N(()=>$({},e.popper,o.value.popper)),[m,y]=P(l.value),r=j(!1);let t=null,a=null;function C(){a&&(clearTimeout(a),a=null),!r.value&&(t=t||setTimeout(()=>{r.value=!0,t=null},e.openDelay))}function T(){t&&(clearTimeout(t),t=null),r.value&&(a=a||setTimeout(()=>{r.value=!1,a=null},e.closeDelay))}return{ui:o,attrs:f,popper:l,trigger:m,container:y,open:r,onMouseOver:C,onMouseLeave:T}}});function q(e,o,f,l,m,y){const r=k;return s(),n("div",w({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseover:o[0]||(o[0]=(...t)=>e.onMouseOver&&e.onMouseOver(...t)),onMouseleave:o[1]||(o[1]=(...t)=>e.onMouseLeave&&e.onMouseLeave(...t))}),[v(e.$slots,"default",{open:e.open},()=>[u(" Hover ")]),e.open&&!e.prevent?(s(),n("div",{key:0,ref:"container",class:i([e.ui.container,e.ui.width])},[A(L,w({appear:""},e.ui.transition),{default:b(()=>{var t;return[d("div",null,[e.popper.arrow?(s(),n("div",{key:0,"data-popper-arrow":"",class:i(Object.values(e.ui.arrow))},null,2)):p("",!0),d("div",{class:i([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[v(e.$slots,"text",{},()=>[u(h(e.text),1)]),(t=e.shortcuts)!=null&&t.length?(s(),n("span",{key:0,class:i(e.ui.shortcuts)},[d("span",{class:i(e.ui.middot)},"·",2),(s(!0),n(B,null,F(e.shortcuts,a=>(s(),z(r,{key:a,size:"xs"},{default:b(()=>[u(h(a),1)]),_:2},1024))),128))],2)):p("",!0)],2)])]}),_:3},16)],2)):p("",!0)],16)}const X=M(K,[["render",q]]);export{X as default};