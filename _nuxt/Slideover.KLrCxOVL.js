import{u as C}from"./selectMenu.E2GhQbwH.js";import{_ as w,s as T,v as f,f as k,x as m,g as c,y as n,o as g,j as v,w as o,G as i,A as y,a as B,L as V,E as D,b as u}from"./entry.hf34r1QT.js";import{U as H,G as S,S as $,h as j}from"./transition.2bxda9Cz.js";import"./dom.Mvv3q8an.js";import"./hidden.jZJ55IQ3.js";import"./focus-management.yNx_fsGQ.js";import"./use-root-containers.xa0QuKOV.js";import"./use-outside-click.4T9tGzzO.js";import"./micro-task.ZxAilEVg.js";import"./open-closed.geDvrVbn.js";import"./disposables.MoseSqH0.js";const F={wrapper:"fixed inset-0 flex z-50",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},base:"relative flex-1 flex flex-col w-full focus:outline-none",background:"bg-white dark:bg-gray-900",ring:"",rounded:"",padding:"",shadow:"shadow-xl",width:"w-screen max-w-md",translate:{base:"translate-x-0",left:"-translate-x-full rtl:translate-x-full",right:"translate-x-full rtl:-translate-x-full"},transition:{enter:"transform transition ease-in-out duration-300",leave:"transform transition ease-in-out duration-200"}},O=T(f.ui.strategy,f.ui.slideover,F),P=k({components:{HDialog:H,HDialogPanel:S,TransitionRoot:$,TransitionChild:j},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented"],setup(e,{emit:r}){const{ui:a,attrs:d}=C("slideover",m(e,"ui"),O,m(e,"class")),l=c({get(){return e.modelValue},set(t){r("update:modelValue",t)}}),p=c(()=>e.transition?{...a.value.transition,enterFrom:e.side==="left"?a.value.translate.left:a.value.translate.right,enterTo:a.value.translate.base,leaveFrom:a.value.translate.base,leaveTo:e.side==="left"?a.value.translate.left:a.value.translate.right}:{});function s(t){if(e.preventClose){r("close-prevented");return}l.value=t,r("close")}return{ui:a,attrs:d,isOpen:l,transitionClass:p,close:s}}});function R(e,r,a,d,l,p){const s=n("TransitionChild"),t=n("HDialogPanel"),h=n("HDialog"),b=n("TransitionRoot");return g(),v(b,{as:"template",appear:e.appear,show:e.isOpen},{default:o(()=>[u(h,i({class:[e.ui.wrapper,{"justify-end":e.side==="right"}]},e.attrs,{onClose:e.close}),{default:o(()=>[e.overlay?(g(),v(s,i({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:o(()=>[B("div",{class:y([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):V("",!0),u(s,i({as:"template",appear:e.appear},e.transitionClass),{default:o(()=>[u(t,{class:y([e.ui.base,e.ui.width,e.ui.background,e.ui.ring,e.ui.padding])},{default:o(()=>[D(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])]),_:3},16,["class","onClose"])]),_:3},8,["appear","show"])}const K=w(P,[["render",R]]);export{K as default};