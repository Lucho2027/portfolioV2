import v from"./Notification.v4cKcx9a.js";import{ai as g,_ as C,s as y,v as m,f as k,x as _,g as $,J as h,K as b,o as n,j as x,a as N,c as p,F as S,z as f,A as j,L as z,G as d,au as B,b as A,at as P,w as T,C as U,D as V,E as D}from"./entry.IM7UvsXg.js";import{u as E}from"./selectMenu.DeuLAjwW.js";import"./Icon.-XsebP7p.js";import"./Icon.jYDNq5VF.js";import"./index.hPcBRl07.js";import"./Avatar.cMOAoJqJ.js";import"./Button.IF9Eukbu.js";import"./Link.O-nGKqms.js";import"./nuxt-link.k3e1B7-S.js";import"./link.O6hAleNp.js";import"./useButtonGroup.xs-o-HnT.js";import"./button.ljqeEZC_.js";import"./index.KAWpTnHL.js";import"./index.FpbCe-zC.js";const F={wrapper:"fixed flex flex-col justify-end z-[55]",position:"bottom-0 end-0",width:"w-full sm:w-96",container:"px-4 sm:px-6 py-6 space-y-3 overflow-y-auto"};function I(){const t=g("notifications",()=>[]);function o(i){const e={id:new Date().getTime().toString(),...i};return t.value.findIndex(c=>c.id===e.id)===-1&&t.value.push(e),e}function a(i){t.value=t.value.filter(e=>e.id!==i)}return{add:o,remove:a}}const J=y(m.ui.strategy,m.ui.notifications,F),L=k({components:{UNotification:v},inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:o,attrs:a}=E("notifications",_(t,"ui"),J),i=I(),e=g("notifications",()=>[]),r=$(()=>h(b(o.value.wrapper,o.value.position,o.value.width),t.class));return{ui:o,attrs:a,toast:i,notifications:e,wrapperClass:r}}});function O(t,o,a,i,e,r){const c=v;return n(),x(B,{to:"body"},[N("div",d({class:t.wrapperClass,role:"region"},t.attrs),[t.notifications.length?(n(),p("div",{key:0,class:j(t.ui.container)},[(n(!0),p(S,null,f(t.notifications,s=>(n(),p("div",{key:s.id},[A(c,d(s,{class:s.click&&"cursor-pointer",onClick:l=>s.click&&s.click(s),onClose:l=>t.toast.remove(s.id)}),P({_:2},[f(t.$slots,(l,u)=>({name:u,fn:T(w=>[D(t.$slots,u,V(U(w)))])}))]),1040,["class","onClick","onClose"])]))),128))],2)):z("",!0)],16)])}const it=C(L,[["render",O]]);export{it as default};
