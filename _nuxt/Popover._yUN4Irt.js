import{am as $e,i as R,r as k,k as C,j as ve,n as J,V as O,F as X,l as x,m as de,q as _,_ as he,s as we,v as le,A as ke,B as ne,$ as Ce,D as z,o as N,g as re,w as H,G as A,a as ue,K as se,b as q,T as ie,L as U,c as W,Q as G,a0 as Ee}from"./entry.wHsg6pmn.js";import{u as Be}from"./usePopper.MHtYkl6o.js";import{o as l,u as D,H as ee,t as j,N as pe,a as I}from"./dom.iXLDqDcr.js";import{m as oe,E as te,w as Fe,h as Te,P as M,N as F,T as Q}from"./focus-management.3FvFoO9X.js";import{c as Oe,l as K,p as Ie}from"./open-closed.6hl3ScU0.js";import{b as Me}from"./use-resolve-button-type.Bpu4sVsY.js";import{y as De}from"./use-outside-click.Z1BzIPZ1.js";import{V as Ne,p as He,E as Ae,n as ce,d as T}from"./use-root-containers.EC5GabqZ.js";import{f as Y,a as Z}from"./hidden.B3XHDD0H.js";import"./index.2tcjgzho.js";import"./index.Or-kM3Tj.js";const je={wrapper:"relative",container:"z-50 group",trigger:"inline-flex w-full",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},overlay:{base:"fixed inset-0 transition-opacity z-50",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enterActiveClass:"ease-out duration-200",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveActiveClass:"ease-in duration-150",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}},popper:{strategy:"fixed"},arrow:$e};var Le=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Le||{});let fe=Symbol("PopoverContext");function ae(e){let b=_(fe,null);if(b===null){let S=new Error(`<${e} /> is missing a parent <${ge.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(S,ae),S}return b}let Ve=Symbol("PopoverGroupContext");function me(){return _(Ve,null)}let be=Symbol("PopoverPanelContext");function Ge(){return _(be,null)}let ge=R({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:b,attrs:S,expose:E}){var t;let o=k(null);E({el:o,$el:o});let f=k(1),r=k(null),P=k(null),v=k(null),c=k(null),$=C(()=>oe(o)),B=C(()=>{var a,u;if(!l(r)||!l(c))return!1;for(let V of document.querySelectorAll("body > *"))if(Number(V==null?void 0:V.contains(l(r)))^Number(V==null?void 0:V.contains(l(c))))return!0;let i=te(),w=i.indexOf(l(r)),L=(w+i.length-1)%i.length,ye=(w+1)%i.length,Pe=i[L],Se=i[ye];return!((a=l(c))!=null&&a.contains(Pe))&&!((u=l(c))!=null&&u.contains(Se))}),d={popoverState:f,buttonId:k(null),panelId:k(null),panel:c,button:r,isPortalled:B,beforePanelSentinel:P,afterPanelSentinel:v,togglePopover(){f.value=D(f.value,{0:1,1:0})},closePopover(){f.value!==1&&(f.value=1)},close(a){d.closePopover();let u=a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?l(a):l(d.button):l(d.button);u==null||u.focus()}};ve(fe,d),Oe(C(()=>D(f.value,{0:K.Open,1:K.Closed})));let h={buttonId:d.buttonId,panelId:d.panelId,close(){d.closePopover()}},y=me(),p=y==null?void 0:y.registerPopover,[g,s]=Ne(),n=He({mainTreeNodeRef:y==null?void 0:y.mainTreeNodeRef,portals:g,defaultContainers:[r,c]});function m(){var a,u,i,w;return(w=y==null?void 0:y.isFocusWithinPopoverGroup())!=null?w:((a=$.value)==null?void 0:a.activeElement)&&(((u=l(r))==null?void 0:u.contains($.value.activeElement))||((i=l(c))==null?void 0:i.contains($.value.activeElement)))}return J(()=>p==null?void 0:p(h)),Ae((t=$.value)==null?void 0:t.defaultView,"focus",a=>{var u,i;a.target!==window&&a.target instanceof HTMLElement&&f.value===0&&(m()||r&&c&&(n.contains(a.target)||(u=l(d.beforePanelSentinel))!=null&&u.contains(a.target)||(i=l(d.afterPanelSentinel))!=null&&i.contains(a.target)||d.closePopover()))},!0),De(n.resolveContainers,(a,u)=>{var i;d.closePopover(),Fe(u,Te.Loose)||(a.preventDefault(),(i=l(r))==null||i.focus())},C(()=>f.value===0)),()=>{let a={open:f.value===0,close:d.close};return O(X,[O(s,{},()=>ee({theirProps:{...e,...S},ourProps:{ref:o},slot:a,slots:b,attrs:S,name:"Popover"})),O(n.MainTreeNode)])}}}),Ke=R({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${j()}`}},inheritAttrs:!1,setup(e,{attrs:b,slots:S,expose:E}){let t=ae("PopoverButton"),o=C(()=>oe(t.button));E({el:t.button,$el:t.button}),x(()=>{t.buttonId.value=e.id}),de(()=>{t.buttonId.value=null});let f=me(),r=f==null?void 0:f.closeOthers,P=Ge(),v=C(()=>P===null?!1:P.value===t.panelId.value),c=k(null),$=`headlessui-focus-sentinel-${j()}`;v.value||J(()=>{t.button.value=c.value});let B=Me(C(()=>({as:e.as,type:b.type})),c);function d(n){var m,a,u,i,w;if(v.value){if(t.popoverState.value===1)return;switch(n.key){case I.Space:case I.Enter:n.preventDefault(),(a=(m=n.target).click)==null||a.call(m),t.closePopover(),(u=l(t.button))==null||u.focus();break}}else switch(n.key){case I.Space:case I.Enter:n.preventDefault(),n.stopPropagation(),t.popoverState.value===1&&(r==null||r(t.buttonId.value)),t.togglePopover();break;case I.Escape:if(t.popoverState.value!==0)return r==null?void 0:r(t.buttonId.value);if(!l(t.button)||(i=o.value)!=null&&i.activeElement&&!((w=l(t.button))!=null&&w.contains(o.value.activeElement)))return;n.preventDefault(),n.stopPropagation(),t.closePopover();break}}function h(n){v.value||n.key===I.Space&&n.preventDefault()}function y(n){var m,a;e.disabled||(v.value?(t.closePopover(),(m=l(t.button))==null||m.focus()):(n.preventDefault(),n.stopPropagation(),t.popoverState.value===1&&(r==null||r(t.buttonId.value)),t.togglePopover(),(a=l(t.button))==null||a.focus()))}function p(n){n.preventDefault(),n.stopPropagation()}let g=ce();function s(){let n=l(t.panel);if(!n)return;function m(){D(g.value,{[T.Forwards]:()=>M(n,F.First),[T.Backwards]:()=>M(n,F.Last)})===Q.Error&&M(te().filter(a=>a.dataset.headlessuiFocusGuard!=="true"),D(g.value,{[T.Forwards]:F.Next,[T.Backwards]:F.Previous}),{relativeTo:l(t.button)})}m()}return()=>{let n=t.popoverState.value===0,m={open:n},{id:a,...u}=e,i=v.value?{ref:c,type:B.value,onKeydown:d,onClick:y}:{ref:c,id:a,type:B.value,"aria-expanded":t.popoverState.value===0,"aria-controls":l(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:d,onKeyup:h,onClick:y,onMousedown:p};return O(X,[ee({ourProps:i,theirProps:{...b,...u},slot:m,attrs:b,slots:S,name:"PopoverButton"}),n&&!v.value&&t.isPortalled.value&&O(Y,{id:$,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:s})])}}}),Re=R({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${j()}`}},inheritAttrs:!1,setup(e,{attrs:b,slots:S,expose:E}){let{focus:t}=e,o=ae("PopoverPanel"),f=C(()=>oe(o.panel)),r=`headlessui-focus-sentinel-before-${j()}`,P=`headlessui-focus-sentinel-after-${j()}`;E({el:o.panel,$el:o.panel}),x(()=>{o.panelId.value=e.id}),de(()=>{o.panelId.value=null}),ve(be,o.panelId),J(()=>{var p,g;if(!t||o.popoverState.value!==0||!o.panel)return;let s=(p=f.value)==null?void 0:p.activeElement;(g=l(o.panel))!=null&&g.contains(s)||M(l(o.panel),F.First)});let v=Ie(),c=C(()=>v!==null?(v.value&K.Open)===K.Open:o.popoverState.value===0);function $(p){var g,s;switch(p.key){case I.Escape:if(o.popoverState.value!==0||!l(o.panel)||f.value&&!((g=l(o.panel))!=null&&g.contains(f.value.activeElement)))return;p.preventDefault(),p.stopPropagation(),o.closePopover(),(s=l(o.button))==null||s.focus();break}}function B(p){var g,s,n,m,a;let u=p.relatedTarget;u&&l(o.panel)&&((g=l(o.panel))!=null&&g.contains(u)||(o.closePopover(),((n=(s=l(o.beforePanelSentinel))==null?void 0:s.contains)!=null&&n.call(s,u)||(a=(m=l(o.afterPanelSentinel))==null?void 0:m.contains)!=null&&a.call(m,u))&&u.focus({preventScroll:!0})))}let d=ce();function h(){let p=l(o.panel);if(!p)return;function g(){D(d.value,{[T.Forwards]:()=>{var s;M(p,F.First)===Q.Error&&((s=l(o.afterPanelSentinel))==null||s.focus())},[T.Backwards]:()=>{var s;(s=l(o.button))==null||s.focus({preventScroll:!0})}})}g()}function y(){let p=l(o.panel);if(!p)return;function g(){D(d.value,{[T.Forwards]:()=>{let s=l(o.button),n=l(o.panel);if(!s)return;let m=te(),a=m.indexOf(s),u=m.slice(0,a+1),i=[...m.slice(a+1),...u];for(let w of i.slice())if(w.dataset.headlessuiFocusGuard==="true"||n!=null&&n.contains(w)){let L=i.indexOf(w);L!==-1&&i.splice(L,1)}M(i,F.First,{sorted:!1})},[T.Backwards]:()=>{var s;M(p,F.Previous)===Q.Error&&((s=l(o.button))==null||s.focus())}})}g()}return()=>{let p={open:o.popoverState.value===0,close:o.close},{id:g,focus:s,...n}=e,m={ref:o.panel,id:g,onKeydown:$,onFocusout:t&&o.popoverState.value===0?B:void 0,tabIndex:-1};return ee({ourProps:m,theirProps:{...b,...n},attrs:b,slot:p,slots:{...S,default:(...a)=>{var u;return[O(X,[c.value&&o.isPortalled.value&&O(Y,{id:r,ref:o.beforePanelSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:h}),(u=S.default)==null?void 0:u.call(S,...a),c.value&&o.isPortalled.value&&O(Y,{id:P,ref:o.afterPanelSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:y})])]}},features:pe.RenderStrategy|pe.Static,visible:c.value,name:"PopoverPanel"})}}});const ze=we(le.ui.strategy,le.ui.popover,je),qe=R({components:{HPopover:ge,HPopoverButton:Ke,HPopoverPanel:Re},inheritAttrs:!1,props:{mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},overlay:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e){const{ui:b,attrs:S}=ke("popover",ne(e,"ui"),ze,ne(e,"class")),E=C(()=>Ce(e.mode==="hover"?{offsetDistance:0}:{},e.popper,b.value.popper)),[t,o]=Be(E.value),f=k(null),r=k(null);let P=null,v=null;x(()=>{var y;const d=(y=f.value)==null?void 0:y.$.provides;if(!d)return;const h=Object.getOwnPropertySymbols(d);r.value=h.length&&d[h[0]]});const c=C(()=>{var y,p;const h=`${((y=e.popper)==null?void 0:y.offsetDistance)||((p=b.value.popper)==null?void 0:p.offsetDistance)||8}px`;return e.mode==="hover"?{paddingTop:h,paddingBottom:h,paddingLeft:h,paddingRight:h}:{}});function $(){e.mode!=="hover"||!r.value||(v&&(clearTimeout(v),v=null),r.value.popoverState!==0&&(P=P||setTimeout(()=>{r.value.togglePopover&&r.value.togglePopover(),P=null},e.openDelay)))}function B(){e.mode!=="hover"||!r.value||(P&&(clearTimeout(P),P=null),r.value.popoverState!==1&&(v=v||setTimeout(()=>{r.value.closePopover&&r.value.closePopover(),v=null},e.closeDelay)))}return{ui:b,attrs:S,popover:f,popper:E,trigger:t,container:o,containerStyle:c,onMouseOver:$,onMouseLeave:B}}}),Ue=["disabled"];function We(e,b,S,E,t,o){const f=z("HPopoverButton"),r=z("HPopoverPanel"),P=z("HPopover");return N(),re(P,U({ref:"popover",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:H(({open:v,close:c})=>[q(f,{ref:"trigger",as:"div",disabled:e.disabled,class:A(e.ui.trigger),role:"button",onMouseover:e.onMouseOver},{default:H(()=>[se(e.$slots,"default",{open:e.open!==void 0?e.open:v,close:c},()=>[ue("button",{disabled:e.disabled}," Open ",8,Ue)])]),_:2},1032,["disabled","class","onMouseover"]),e.overlay?(N(),re(ie,U({key:0,appear:""},e.ui.overlay.transition),{default:H(()=>[(e.open!==void 0?e.open:v)?(N(),W("div",{key:0,class:A([e.ui.overlay.base,e.ui.overlay.background]),onClick:b[0]||(b[0]=$=>e.$emit("update:open"))},null,2)):G("",!0)]),_:2},1040)):G("",!0),(e.open!==void 0?e.open:v)?(N(),W("div",{key:1,ref:"container",class:A([e.ui.container,e.ui.width]),style:Ee(e.containerStyle),onMouseover:b[1]||(b[1]=(...$)=>e.onMouseOver&&e.onMouseOver(...$))},[q(ie,U({appear:""},e.ui.transition),{default:H(()=>[ue("div",null,[e.popper.arrow?(N(),W("div",{key:0,"data-popper-arrow":"",class:A(Object.values(e.ui.arrow))},null,2)):G("",!0),q(r,{class:A([e.ui.base,e.ui.background,e.ui.ring,e.ui.rounded,e.ui.shadow]),static:""},{default:H(()=>[se(e.$slots,"panel",{open:e.open!==void 0?e.open:v,close:c})]),_:2},1032,["class"])])]),_:2},1040)],38)):G("",!0)]),_:3},16,["class","onMouseleave"])}const lo=he(qe,[["render",We]]);export{lo as default};
