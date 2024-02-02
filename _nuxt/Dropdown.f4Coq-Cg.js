import{_ as x}from"./nuxt-link.g0LgZYu-.js";import ee from"./Icon.bWQx7xiq.js";import{_ as te}from"./Avatar.X7r45POT.js";import ae from"./Kbd.EIXjclGN.js";import{h as $,r as k,j as S,i as pe,k as ne,l as ce,m as me,O as D,n as ve,_ as fe,q as be,s as J,v as W,P as ge,x as N,o as M,f as T,w,z as R,a as U,D as Y,b as B,Q as ye,T as Ie,E,c as P,J as H,F as _,R as Me,t as Z,d as he,y as K}from"./entry.VJkcEQ3a.js";import{d as ke,u as Se,o as Re}from"./selectMenu.CPVhT6WU.js";import{u as we}from"./usePopper.wEOmE6l_.js";import{o as y,u as Pe,H as L,t as V,N as G,a as g}from"./dom.0hOOROr2.js";import{p as Te,u as De,x as Oe,a as h}from"./use-tracked-pointer.AItBzQz-.js";import{c as Ce,l as F,p as $e}from"./open-closed.9Mzv811c.js";import{b as Ae}from"./use-resolve-button-type.v06lpx-E.js";import{w as Ne,h as Be,v as Ee,N as X,_ as oe,O as He}from"./focus-management.Vkug-2By.js";import{y as Fe}from"./use-outside-click.3YkNwgHn.js";import{p as Le}from"./use-text-value.cQqaURoy.js";import"./Icon.mUalCB7q.js";import"./index.hPcBRl07.js";import"./tw-merge.N1_sWVtP.js";import"./index.eWgtsMOp.js";import"./index.Rtp-oiOn.js";var je=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(je||{}),Ue=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ue||{});function _e(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let ue=Symbol("MenuContext");function j(e){let v=ve(ue,null);if(v===null){let I=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(I,j),I}return v}let Ke=$({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:v,attrs:I}){let b=k(1),t=k(null),f=k(null),u=k([]),p=k(""),s=k(null),r=k(1);function a(l=i=>i){let i=s.value!==null?u.value[s.value]:null,o=He(l(u.value.slice()),d=>y(d.dataRef.domRef)),n=i?o.indexOf(i):null;return n===-1&&(n=null),{items:o,activeItemIndex:n}}let m={menuState:b,buttonRef:t,itemsRef:f,items:u,searchQuery:p,activeItemIndex:s,activationTrigger:r,closeMenu:()=>{b.value=1,s.value=null},openMenu:()=>b.value=0,goToItem(l,i,o){let n=a(),d=Oe(l===h.Specific?{focus:h.Specific,id:i}:{focus:l},{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.disabled});p.value="",s.value=d,r.value=o??1,u.value=n.items},search(l){let i=p.value!==""?0:1;p.value+=l.toLowerCase();let o=(s.value!==null?u.value.slice(s.value+i).concat(u.value.slice(0,s.value+i)):u.value).find(d=>d.dataRef.textValue.startsWith(p.value)&&!d.dataRef.disabled),n=o?u.value.indexOf(o):-1;n===-1||n===s.value||(s.value=n,r.value=1)},clearSearch(){p.value=""},registerItem(l,i){let o=a(n=>[...n,{id:l,dataRef:i}]);u.value=o.items,s.value=o.activeItemIndex,r.value=1},unregisterItem(l){let i=a(o=>{let n=o.findIndex(d=>d.id===l);return n!==-1&&o.splice(n,1),o});u.value=i.items,s.value=i.activeItemIndex,r.value=1}};return Fe([t,f],(l,i)=>{var o;m.closeMenu(),Ne(i,Be.Loose)||(l.preventDefault(),(o=y(t))==null||o.focus())},S(()=>b.value===0)),pe(ue,m),Ce(S(()=>Pe(b.value,{0:F.Open,1:F.Closed}))),()=>{let l={open:b.value===0,close:m.closeMenu};return L({ourProps:{},theirProps:e,slot:l,slots:v,attrs:I,name:"Menu"})}}}),Ve=$({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${V()}`}},setup(e,{attrs:v,slots:I,expose:b}){let t=j("MenuButton");b({el:t.buttonRef,$el:t.buttonRef});function f(r){switch(r.key){case g.Space:case g.Enter:case g.ArrowDown:r.preventDefault(),r.stopPropagation(),t.openMenu(),D(()=>{var a;(a=y(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(h.First)});break;case g.ArrowUp:r.preventDefault(),r.stopPropagation(),t.openMenu(),D(()=>{var a;(a=y(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(h.Last)});break}}function u(r){switch(r.key){case g.Space:r.preventDefault();break}}function p(r){e.disabled||(t.menuState.value===0?(t.closeMenu(),D(()=>{var a;return(a=y(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(r.preventDefault(),t.openMenu(),_e(()=>{var a;return(a=y(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let s=Ae(S(()=>({as:e.as,type:v.type})),t.buttonRef);return()=>{var r;let a={open:t.menuState.value===0},{id:m,...l}=e,i={ref:t.buttonRef,id:m,type:s.value,"aria-haspopup":"menu","aria-controls":(r=y(t.itemsRef))==null?void 0:r.id,"aria-expanded":t.menuState.value===0,onKeydown:f,onKeyup:u,onClick:p};return L({ourProps:i,theirProps:l,slot:a,attrs:v,slots:I,name:"MenuButton"})}}}),ze=$({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${V()}`}},setup(e,{attrs:v,slots:I,expose:b}){let t=j("MenuItems"),f=k(null);b({el:t.itemsRef,$el:t.itemsRef}),Te({container:S(()=>y(t.itemsRef)),enabled:S(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function u(a){var m;switch(f.value&&clearTimeout(f.value),a.key){case g.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case g.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let l=t.items.value[t.activeItemIndex.value];(m=y(l.dataRef.domRef))==null||m.click()}t.closeMenu(),oe(y(t.buttonRef));break;case g.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(h.Next);case g.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(h.Previous);case g.Home:case g.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(h.First);case g.End:case g.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(h.Last);case g.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),D(()=>{var l;return(l=y(t.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case g.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),D(()=>Ee(y(t.buttonRef),a.shiftKey?X.Previous:X.Next));break;default:a.key.length===1&&(t.search(a.key),f.value=setTimeout(()=>t.clearSearch(),350));break}}function p(a){switch(a.key){case g.Space:a.preventDefault();break}}let s=$e(),r=S(()=>s!==null?(s.value&F.Open)===F.Open:t.menuState.value===0);return()=>{var a,m;let l={open:t.menuState.value===0},{id:i,...o}=e,n={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(m=y(t.buttonRef))==null?void 0:m.id,id:i,onKeydown:u,onKeyup:p,role:"menu",tabIndex:0,ref:t.itemsRef};return L({ourProps:n,theirProps:o,slot:l,attrs:v,slots:I,features:G.RenderStrategy|G.Static,visible:r.value,name:"MenuItems"})}}}),qe=$({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${V()}`}},setup(e,{slots:v,attrs:I,expose:b}){let t=j("MenuItem"),f=k(null);b({el:f,$el:f});let u=S(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),p=Le(f),s=S(()=>({disabled:e.disabled,get textValue(){return p()},domRef:f}));ne(()=>t.registerItem(e.id,s)),ce(()=>t.unregisterItem(e.id)),me(()=>{t.menuState.value===0&&u.value&&t.activationTrigger.value!==0&&D(()=>{var n,d;return(d=(n=y(f))==null?void 0:n.scrollIntoView)==null?void 0:d.call(n,{block:"nearest"})})});function r(n){if(e.disabled)return n.preventDefault();t.closeMenu(),oe(y(t.buttonRef))}function a(){if(e.disabled)return t.goToItem(h.Nothing);t.goToItem(h.Specific,e.id)}let m=De();function l(n){m.update(n)}function i(n){m.wasMoved(n)&&(e.disabled||u.value||t.goToItem(h.Specific,e.id,0))}function o(n){m.wasMoved(n)&&(e.disabled||u.value&&t.goToItem(h.Nothing))}return()=>{let{disabled:n}=e,d={active:u.value,disabled:n,close:t.closeMenu},{id:c,...O}=e;return L({ourProps:{id:c,ref:f,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:r,onFocus:a,onPointerenter:l,onMouseenter:l,onPointermove:i,onMousemove:i,onPointerleave:o,onMouseleave:o},theirProps:{...I,...O},slot:d,attrs:I,slots:v,name:"MenuItem"})}}});const Qe=be(J.ui.strategy,J.ui.dropdown,ke),Je=$({components:{HMenu:Ke,HMenuButton:Ve,HMenuItems:ze,HMenuItem:qe,UIcon:ee,UAvatar:te,UKbd:ae},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:v,attrs:I}=Se("dropdown",W(e,"ui"),Qe,W(e,"class")),b=S(()=>ge(e.mode==="hover"?{offsetDistance:0}:{},e.popper,v.value.popper)),[t,f]=we(b.value),u=k(null);let p=null,s=null;ne(()=>{setTimeout(()=>{var d;const o=(d=t.value)==null?void 0:d.$.provides;if(!o)return;const n=Object.getOwnPropertySymbols(o);u.value=n.length&&o[n[0]]},200)});const r=S(()=>{var n,d;const o=((n=e.popper)==null?void 0:n.offsetDistance)||((d=v.value.popper)==null?void 0:d.offsetDistance)||8;return e.mode==="hover"?{paddingTop:`${o}px`,paddingBottom:`${o}px`}:{}});function a(){e.mode!=="hover"||!u.value||(s&&(clearTimeout(s),s=null),u.value.menuState!==0&&(p=p||setTimeout(()=>{u.value.openMenu&&u.value.openMenu(),p=null},e.openDelay)))}function m(){e.mode!=="hover"||!u.value||(p&&(clearTimeout(p),p=null),u.value.menuState!==1&&(s=s||setTimeout(()=>{u.value.closeMenu&&u.value.closeMenu(),s=null},e.closeDelay)))}function l(o,n,{href:d,navigate:c,close:O,isExternal:C}){n.click&&n.click(o),d&&!C&&(c(o),O())}return{ui:v,attrs:I,popper:b,trigger:t,container:f,containerStyle:r,onMouseOver:a,onMouseLeave:m,onClick:l,omit:Re,NuxtLink:x}}}),We=["disabled"];function Ye(e,v,I,b,t,f){const u=N("HMenuButton"),p=ee,s=te,r=ae,a=N("HMenuItem"),m=x,l=N("HMenuItems"),i=N("HMenu");return M(),T(i,E({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:w(({open:o})=>[B(u,{ref:"trigger",as:"div",disabled:e.disabled,class:R(e.ui.trigger),role:"button",onMouseover:e.onMouseOver},{default:w(()=>[Y(e.$slots,"default",{open:o,disabled:e.disabled},()=>[U("button",{disabled:e.disabled}," Open ",8,We)])]),_:2},1032,["disabled","class","onMouseover"]),o&&e.items.length?(M(),P("div",{key:0,ref:"container",class:R([e.ui.container,e.ui.width]),style:ye(e.containerStyle),onMouseover:v[0]||(v[0]=(...n)=>e.onMouseOver&&e.onMouseOver(...n))},[B(Ie,E({appear:""},e.ui.transition),{default:w(()=>[U("div",null,[e.popper.arrow?(M(),P("div",{key:0,"data-popper-arrow":"",class:R(Object.values(e.ui.arrow))},null,2)):H("",!0),B(l,{class:R([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:w(()=>[(M(!0),P(_,null,K(e.items,(n,d)=>(M(),P("div",{key:d,class:R(e.ui.padding)},[(M(!0),P(_,null,K(n,(c,O)=>(M(),T(m,E({key:O},e.omit(c,["label","slot","icon","iconClass","avatar","shortcuts","disabled","click"]),{custom:""}),{default:w(({href:C,target:le,rel:se,navigate:re,isExternal:ie})=>[B(a,{disabled:c.disabled},{default:w(({active:z,disabled:q,close:de})=>[(M(),T(Me(C?"a":"button"),{href:q?void 0:C,rel:se,target:le,class:R([e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,z?e.ui.item.active:e.ui.item.inactive,q&&e.ui.item.disabled]),onClick:A=>e.onClick(A,c,{href:C,navigate:re,close:de,isExternal:ie})},{default:w(()=>[Y(e.$slots,c.slot||"item",{item:c},()=>{var A;return[c.icon?(M(),T(p,{key:0,name:c.icon,class:R([e.ui.item.icon.base,z?e.ui.item.icon.active:e.ui.item.icon.inactive,c.iconClass])},null,8,["name","class"])):c.avatar?(M(),T(s,E({key:1},{size:e.ui.item.avatar.size,...c.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):H("",!0),U("span",{class:R(e.ui.item.label)},Z(c.label),3),(A=c.shortcuts)!=null&&A.length?(M(),P("span",{key:2,class:R(e.ui.item.shortcuts)},[(M(!0),P(_,null,K(c.shortcuts,Q=>(M(),T(r,{key:Q},{default:w(()=>[he(Z(Q),1)]),_:2},1024))),128))],2)):H("",!0)]})]),_:2},1032,["href","rel","target","class","onClick"]))]),_:2},1032,["disabled"])]),_:2},1040))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],38)):H("",!0)]),_:3},16,["class","onMouseleave"])}const ft=fe(Je,[["render",Ye]]);export{ft as default};
