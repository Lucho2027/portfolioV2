import{h as c,v as r,j as d,L as m,I as f,N as p,q as o,s as n}from"./entry.VJkcEQ3a.js";import{t as v}from"./tw-merge.N1_sWVtP.js";import{u as x}from"./selectMenu.CPVhT6WU.js";import{a as b}from"./useButtonGroup.YYYGE_vU.js";import{b as h}from"./button.ljqeEZC_.js";const g={wrapper:{horizontal:"inline-flex -space-x-px",vertical:"inline-flex flex-col -space-y-px"},rounded:"rounded-md",shadow:"shadow-sm",orientation:{"rounded-none":{horizontal:{start:"rounded-s-none",end:"rounded-e-none"},vertical:{start:"rounded-t-none",end:"rounded-b-none"}},"rounded-sm":{horizontal:{start:"rounded-s-sm",end:"rounded-e-sm"},vertical:{start:"rounded-t-sm",end:"rounded-b-sm"}},rounded:{horizontal:{start:"rounded-s",end:"rounded-e"},vertical:{start:"rounded-t",end:"rounded-b"}},"rounded-md":{horizontal:{start:"rounded-s-md",end:"rounded-e-md"},vertical:{start:"rounded-t-md",end:"rounded-b-md"}},"rounded-lg":{horizontal:{start:"rounded-s-lg",end:"rounded-e-lg"},vertical:{start:"rounded-t-lg",end:"rounded-b-lg"}},"rounded-xl":{horizontal:{start:"rounded-s-xl",end:"rounded-e-xl"},vertical:{start:"rounded-t-xl",end:"rounded-b-xl"}},"rounded-2xl":{horizontal:{start:"rounded-s-2xl",end:"rounded-e-2xl"},vertical:{start:"rounded-t-2xl",end:"rounded-b-2xl"}},"rounded-3xl":{horizontal:{start:"rounded-s-3xl",end:"rounded-e-3xl"},vertical:{start:"rounded-t-3xl",end:"rounded-b-3xl"}},"rounded-full":{horizontal:{start:"rounded-s-full",end:"rounded-e-full"},vertical:{start:"rounded-t-full",end:"rounded-b-full"}}}},z=o(n.ui.strategy,n.ui.button,h),y=o(n.ui.strategy,n.ui.buttonGroup,g),B=c({name:"ButtonGroup",inheritAttrs:!1,props:{size:{type:String,default:null,validator(e){return Object.keys(z.size).includes(e)}},orientation:{type:String,default:"horizontal",validator(e){return["horizontal","vertical"].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:u}){const{ui:t,attrs:a}=x("buttonGroup",r(e,"ui"),y),l=d(()=>m(u)),s=d(()=>v(f(t.value.wrapper[e.orientation],t.value.rounded,t.value.shadow),e.class)),i=d(()=>t.value.orientation[t.value.rounded][e.orientation]);return b({orientation:r(e,"orientation"),size:r(e,"size"),ui:t,rounded:i}),()=>p("div",{class:s.value,...a.value},l.value)}});export{B as default};
