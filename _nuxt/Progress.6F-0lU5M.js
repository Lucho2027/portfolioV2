import{_ as O,s as P,v as f,f as V,x as h,g as s,K as t,o as n,c as u,E as z,A as d,V as I,a as C,t as m,L as v,D as A,G as b,F as D,z as E,d as L,C as R}from"./entry.IM7UvsXg.js";import{u as G}from"./selectMenu.DeuLAjwW.js";const J={wrapper:"w-full flex flex-col gap-2",indicator:{container:{base:"flex flex-row justify-end",width:"min-w-fit",transition:"transition-all"},align:"text-end",width:"w-fit",color:"text-gray-400 dark:text-gray-500",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},progress:{base:"block appearance-none border-none overflow-hidden",width:"w-full [&::-webkit-progress-bar]:w-full",size:{"2xs":"h-px",xs:"h-0.5",sm:"h-1",md:"h-2",lg:"h-3",xl:"h-4","2xl":"h-5"},rounded:"rounded-full [&::-webkit-progress-bar]:rounded-full",track:"[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",bar:"[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",color:"text-{color}-500 dark:text-{color}-400",background:"[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",indeterminate:{base:"indeterminate:relative",rounded:"indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"}},steps:{base:"grid grid-cols-1",color:"text-{color}-500 dark:text-{color}-400",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},step:{base:"transition-all opacity-0 truncate row-start-1 col-start-1",align:"text-end",active:"opacity-100",first:"text-gray-500 dark:text-gray-400"},animation:{carousel:"bar-animation-carousel","carousel-inverse":"bar-animation-carousel-inverse",swing:"bar-animation-swing",elastic:"bar-animation-elastic"},default:{color:"primary",size:"md",animation:"carousel"}},i=P(f.ui.strategy,f.ui.progress,J),K=V({inheritAttrs:!1,props:{value:{type:Number,default:null},max:{type:[Number,Array],default:100},indicator:{type:Boolean,default:!1},animation:{type:String,default:()=>i.default.animation,validator(e){return Object.keys(i.animation).includes(e)}},size:{type:String,default:()=>i.default.size,validator(e){return Object.keys(i.progress.size).includes(e)}},color:{type:String,default:()=>i.default.color,validator(e){return f.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:r,attrs:y}=G("progress",h(e,"ui"),i,h(e,"class")),x=s(()=>t(r.value.indicator.container.base,r.value.indicator.container.width,r.value.indicator.container.transition)),w=s(()=>t(r.value.indicator.align,r.value.indicator.width,r.value.indicator.color,r.value.indicator.size[e.size])),k=s(()=>{var o;const a=[r.value.progress.base,r.value.progress.width,r.value.progress.size[e.size],r.value.progress.rounded,r.value.progress.track,r.value.progress.bar,(o=r.value.progress.color)==null?void 0:o.replaceAll("{color}",e.color),r.value.progress.background,r.value.progress.indeterminate.base,r.value.progress.indeterminate.rounded];return g.value&&a.push(r.value.animation[e.animation]),t(...a)}),c=s(()=>{var a;return t(r.value.steps.base,(a=r.value.steps.color)==null?void 0:a.replaceAll("{color}",e.color),r.value.steps.size[e.size])}),l=s(()=>t(r.value.step.base,r.value.step.align)),S=s(()=>t(r.value.step.active)),$=s(()=>t(r.value.step.first));function N(a){return a===Number(e.value)}function j(a){return a===0}function B(a){a=Number(a);const o=[l.value];return j(a)&&o.push($.value),N(a)&&o.push(S.value),o.join(" ")}const g=s(()=>e.value===void 0||e.value===null),F=s(()=>Array.isArray(e.max)),p=s(()=>g.value?null:Array.isArray(e.max)?e.max.length-1:Number(e.max)),M=s(()=>{switch(!0){case e.value<0:return 0;case e.value>p.value:return 100;default:return e.value/p.value*100}});return{ui:r,attrs:y,indicatorContainerClass:x,indicatorClass:w,progressClass:k,stepsClass:c,stepClasses:B,isIndeterminate:g,isSteps:F,realMax:p,percent:M}}});function T(e,r,y,x,w,k){return n(),u("div",b({class:e.ui.wrapper},e.attrs),[e.indicator||e.$slots.indicator?z(e.$slots,"indicator",A(b({key:0},{percent:e.percent})),()=>[e.isSteps?v("",!0):(n(),u("div",{key:0,class:d(e.indicatorContainerClass),style:I({width:`${e.percent}%`})},[C("div",{class:d(e.indicatorClass)},m(Math.round(e.percent))+"% ",3)],6))],!0):v("",!0),C("progress",b({class:e.progressClass},{value:e.value,max:e.realMax}),m(Math.round(e.percent))+"% ",17),e.isSteps?(n(),u("div",{key:1,class:d(e.stepsClass)},[(n(!0),u(D,null,E(e.max,(c,l)=>(n(),u("div",{key:l,class:d(e.stepClasses(l))},[z(e.$slots,`step-${l}`,A(R({step:c})),()=>[L(m(c),1)],!0)],2))),128))],2)):v("",!0)],16)}const H=O(K,[["render",T],["__scopeId","data-v-8650c2db"]]);export{H as default};
