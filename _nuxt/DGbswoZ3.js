import{_ as oe}from"./EqdE0qEW.js";import ue from"./CI8bNh2c.js";import{_ as le}from"./yH0T-j7y.js";import re from"./pmOm_uQF.js";import{u as me}from"./5hD3p8xk.js";import{f as N,r as w,g as R,l as fe,m as se,n as ge,q as be,Q as E,s as Me,_ as ye,v as Ie,x as X,y as Y,R as he,z as x,J as Se,K as ke,A as $,o as S,k as A,w as P,b as L,C as T,E as ee,a as _,c as D,S as we,T as Re,G as F,L as H,F as z,B as J,U as Te,t as te,d as Pe}from"./Cp_qYibV.js";import{o as y,u as De,A as j,I as Q,N as ne,a as b,l as Ce}from"./H_zkhHe8.js";import{w as Oe}from"./Yf-0udFG.js";import{s as Ae}from"./CW7lszp-.js";import{p as Ee}from"./BmPMyndk.js";import{i as Ne,u as Be,f as $e,c as k}from"./E-ukFuzo.js";import{t as Le,i as U,l as Fe}from"./S_MUPt2V.js";import{w as He,h as Ue,v as je,N as ae,_ as ie,O as Ke}from"./BY-GoTpP.js";import{d as _e,u as ze}from"./HsAOjbzS.js";import{u as Je}from"./BjXyT-5l.js";import{g as qe}from"./aPxrJPp6.js";import"./D0Yc7C7L.js";import"./BQkc-AXV.js";import"./BGaq5pVf.js";var Qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Qe||{}),Ve=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ve||{});function Ge(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let de=Symbol("MenuContext");function K(e){let f=Me(de,null);if(f===null){let g=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(g,K),g}return f}let We=N({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:f,attrs:g}){let M=w(1),v=w(null),m=w(null),t=w([]),o=w(""),s=w(null),p=w(1);function I(n=r=>r){let r=s.value!==null?t.value[s.value]:null,u=Ke(n(t.value.slice()),l=>y(l.dataRef.domRef)),i=r?u.indexOf(r):null;return i===-1&&(i=null),{items:u,activeItemIndex:i}}let d={menuState:M,buttonRef:v,itemsRef:m,items:t,searchQuery:o,activeItemIndex:s,activationTrigger:p,closeMenu:()=>{M.value=1,s.value=null},openMenu:()=>M.value=0,goToItem(n,r,u){let i=I(),l=$e(n===k.Specific?{focus:k.Specific,id:r}:{focus:n},{resolveItems:()=>i.items,resolveActiveIndex:()=>i.activeItemIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.disabled});o.value="",s.value=l,p.value=u??1,t.value=i.items},search(n){let r=o.value!==""?0:1;o.value+=n.toLowerCase();let u=(s.value!==null?t.value.slice(s.value+r).concat(t.value.slice(0,s.value+r)):t.value).find(l=>l.dataRef.textValue.startsWith(o.value)&&!l.dataRef.disabled),i=u?t.value.indexOf(u):-1;i===-1||i===s.value||(s.value=i,p.value=1)},clearSearch(){o.value=""},registerItem(n,r){let u=I(i=>[...i,{id:n,dataRef:r}]);t.value=u.items,s.value=u.activeItemIndex,p.value=1},unregisterItem(n){let r=I(u=>{let i=u.findIndex(l=>l.id===n);return i!==-1&&u.splice(i,1),u});t.value=r.items,s.value=r.activeItemIndex,p.value=1}};return Oe([v,m],(n,r)=>{var u;d.closeMenu(),He(r,Ue.Loose)||(n.preventDefault(),(u=y(v))==null||u.focus())},R(()=>M.value===0)),fe(de,d),Le(R(()=>De(M.value,{0:U.Open,1:U.Closed}))),()=>{let n={open:M.value===0,close:d.closeMenu};return j({ourProps:{},theirProps:e,slot:n,slots:f,attrs:g,name:"Menu"})}}}),Ze=N({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:f,slots:g,expose:M}){var v;let m=(v=e.id)!=null?v:`headlessui-menu-button-${Q()}`,t=K("MenuButton");M({el:t.buttonRef,$el:t.buttonRef});function o(d){switch(d.key){case b.Space:case b.Enter:case b.ArrowDown:d.preventDefault(),d.stopPropagation(),t.openMenu(),E(()=>{var n;(n=y(t.itemsRef))==null||n.focus({preventScroll:!0}),t.goToItem(k.First)});break;case b.ArrowUp:d.preventDefault(),d.stopPropagation(),t.openMenu(),E(()=>{var n;(n=y(t.itemsRef))==null||n.focus({preventScroll:!0}),t.goToItem(k.Last)});break}}function s(d){switch(d.key){case b.Space:d.preventDefault();break}}function p(d){e.disabled||(t.menuState.value===0?(t.closeMenu(),E(()=>{var n;return(n=y(t.buttonRef))==null?void 0:n.focus({preventScroll:!0})})):(d.preventDefault(),t.openMenu(),Ge(()=>{var n;return(n=y(t.itemsRef))==null?void 0:n.focus({preventScroll:!0})})))}let I=Ae(R(()=>({as:e.as,type:f.type})),t.buttonRef);return()=>{var d;let n={open:t.menuState.value===0},{...r}=e,u={ref:t.buttonRef,id:m,type:I.value,"aria-haspopup":"menu","aria-controls":(d=y(t.itemsRef))==null?void 0:d.id,"aria-expanded":t.menuState.value===0,onKeydown:o,onKeyup:s,onClick:p};return j({ourProps:u,theirProps:r,slot:n,attrs:f,slots:g,name:"MenuButton"})}}}),Xe=N({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:f,slots:g,expose:M}){var v;let m=(v=e.id)!=null?v:`headlessui-menu-items-${Q()}`,t=K("MenuItems"),o=w(null);M({el:t.itemsRef,$el:t.itemsRef}),Ne({container:R(()=>y(t.itemsRef)),enabled:R(()=>t.menuState.value===0),accept(n){return n.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(n){n.setAttribute("role","none")}});function s(n){var r;switch(o.value&&clearTimeout(o.value),n.key){case b.Space:if(t.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),t.search(n.key);case b.Enter:if(n.preventDefault(),n.stopPropagation(),t.activeItemIndex.value!==null){let u=t.items.value[t.activeItemIndex.value];(r=y(u.dataRef.domRef))==null||r.click()}t.closeMenu(),ie(y(t.buttonRef));break;case b.ArrowDown:return n.preventDefault(),n.stopPropagation(),t.goToItem(k.Next);case b.ArrowUp:return n.preventDefault(),n.stopPropagation(),t.goToItem(k.Previous);case b.Home:case b.PageUp:return n.preventDefault(),n.stopPropagation(),t.goToItem(k.First);case b.End:case b.PageDown:return n.preventDefault(),n.stopPropagation(),t.goToItem(k.Last);case b.Escape:n.preventDefault(),n.stopPropagation(),t.closeMenu(),E(()=>{var u;return(u=y(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case b.Tab:n.preventDefault(),n.stopPropagation(),t.closeMenu(),E(()=>je(y(t.buttonRef),n.shiftKey?ae.Previous:ae.Next));break;default:n.key.length===1&&(t.search(n.key),o.value=setTimeout(()=>t.clearSearch(),350));break}}function p(n){switch(n.key){case b.Space:n.preventDefault();break}}let I=Fe(),d=R(()=>I!==null?(I.value&U.Open)===U.Open:t.menuState.value===0);return()=>{var n,r;let u={open:t.menuState.value===0},{...i}=e,l={"aria-activedescendant":t.activeItemIndex.value===null||(n=t.items.value[t.activeItemIndex.value])==null?void 0:n.id,"aria-labelledby":(r=y(t.buttonRef))==null?void 0:r.id,id:m,onKeydown:s,onKeyup:p,role:"menu",tabIndex:0,ref:t.itemsRef};return j({ourProps:l,theirProps:i,slot:u,attrs:f,slots:g,features:ne.RenderStrategy|ne.Static,visible:d.value,name:"MenuItems"})}}}),Ye=N({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:f,attrs:g,expose:M}){var v;let m=(v=e.id)!=null?v:`headlessui-menu-item-${Q()}`,t=K("MenuItem"),o=w(null);M({el:o,$el:o});let s=R(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===m:!1),p=Ee(o),I=R(()=>({disabled:e.disabled,get textValue(){return p()},domRef:o}));se(()=>t.registerItem(m,I)),ge(()=>t.unregisterItem(m)),be(()=>{t.menuState.value===0&&s.value&&t.activationTrigger.value!==0&&E(()=>{var a,c;return(c=(a=y(o))==null?void 0:a.scrollIntoView)==null?void 0:c.call(a,{block:"nearest"})})});function d(a){if(e.disabled)return a.preventDefault();t.closeMenu(),ie(y(t.buttonRef))}function n(){if(e.disabled)return t.goToItem(k.Nothing);t.goToItem(k.Specific,m)}let r=Be();function u(a){r.update(a)}function i(a){r.wasMoved(a)&&(e.disabled||s.value||t.goToItem(k.Specific,m,0))}function l(a){r.wasMoved(a)&&(e.disabled||s.value&&t.goToItem(k.Nothing))}return()=>{let{disabled:a,...c}=e,h={active:s.value,disabled:a,close:t.closeMenu};return j({ourProps:{id:m,ref:o,role:"menuitem",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,onClick:d,onFocus:n,onPointerenter:u,onMouseenter:u,onPointermove:i,onMousemove:i,onPointerleave:l,onMouseleave:l},theirProps:{...g,...c},slot:h,attrs:g,slots:f,name:"MenuItem"})}}});const q=Ie(X.ui.strategy,X.ui.dropdown,_e),xe=N({components:{HMenu:We,HMenuButton:Ze,HMenuItems:Xe,HMenuItem:Ye,UIcon:ue,UAvatar:le,UKbd:re},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:()=>q.default.openDelay},closeDelay:{type:Number,default:()=>q.default.closeDelay},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:f}){const{ui:g,attrs:M}=ze("dropdown",Y(e,"ui"),q,Y(e,"class")),v=R(()=>he(e.mode==="hover"?{offsetDistance:0}:{},e.popper,g.value.popper)),[m,t]=Je(v.value),o=w(null);let s=null,p=null;se(()=>{var c,h;const l=(c=m.value)==null?void 0:c.$.provides;if(!l)return;const a=Object.getOwnPropertySymbols(l);o.value=a.length&&l[a[0]],e.open&&((h=o.value)==null||h.openMenu())});const I=R(()=>{var h,C,O;if(e.mode!=="hover")return{};const l=((h=e.popper)==null?void 0:h.offsetDistance)||((C=g.value.popper)==null?void 0:C.offsetDistance)||8,a=(O=v.value.placement)==null?void 0:O.split("-")[0],c=`${l}px`;return a==="top"||a==="bottom"?{paddingTop:c,paddingBottom:c}:a==="left"||a==="right"?{paddingLeft:c,paddingRight:c}:{paddingTop:c,paddingBottom:c,paddingLeft:c,paddingRight:c}});function d(l){!l.cancelable||!o.value||(o.value.menuState===0?o.value.closeMenu():o.value.openMenu())}function n(){e.mode!=="hover"||!o.value||(p&&(clearTimeout(p),p=null),o.value.menuState!==0&&(s=s||setTimeout(()=>{o.value.openMenu&&o.value.openMenu(),s=null},e.openDelay)))}function r(){e.mode!=="hover"||!o.value||(s&&(clearTimeout(s),s=null),o.value.menuState!==1&&(p=p||setTimeout(()=>{o.value.closeMenu&&o.value.closeMenu(),p=null},e.closeDelay)))}function u(l,a,{href:c,navigate:h,close:C,isExternal:O}){a.click&&a.click(l),c&&!O&&(h(l),C())}x(()=>e.open,(l,a)=>{o.value&&(a===void 0||l===a||(l?o.value.openMenu():o.value.closeMenu()))}),x(()=>{var l;return(l=o.value)==null?void 0:l.menuState},(l,a)=>{a===void 0||l===a||f("update:open",l===0)});const i=oe;return Ce(()=>me("$ctlRmIk4j0")),{ui:g,attrs:M,popper:v,trigger:m,container:t,containerStyle:I,onTouchStart:d,onMouseEnter:n,onMouseLeave:r,onClick:u,getNuxtLinkProps:qe,twMerge:Se,twJoin:ke,NuxtLink:i}}}),et=["disabled"];function tt(e,f,g,M,v,m){const t=$("HMenuButton"),o=ue,s=le,p=re,I=$("HMenuItem"),d=oe,n=$("HMenuItems"),r=$("HMenu");return S(),A(r,F({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:P(({open:u})=>[L(t,{ref:"trigger",as:"div",disabled:e.disabled,class:T(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:P(()=>[ee(e.$slots,"default",{open:u,disabled:e.disabled},()=>[_("button",{disabled:e.disabled}," Open ",8,et)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),u&&e.items.length?(S(),D("div",{key:0,ref:"container",class:T([e.ui.container,e.ui.width]),style:we(e.containerStyle),onMouseenter:f[0]||(f[0]=(...i)=>e.onMouseEnter&&e.onMouseEnter(...i))},[L(Re,F({appear:""},e.ui.transition),{default:P(()=>[_("div",null,[e.popper.arrow?(S(),D("div",{key:0,"data-popper-arrow":"",class:T(Object.values(e.ui.arrow))},null,2)):H("",!0),L(n,{class:T([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:P(()=>[(S(!0),D(z,null,J(e.items,(i,l)=>(S(),D("div",{key:l,class:T(e.ui.padding)},[(S(!0),D(z,null,J(i,(a,c)=>(S(),A(d,F({key:c,ref_for:!0},e.getNuxtLinkProps(a),{custom:""}),{default:P(({href:h,target:C,rel:O,navigate:pe,isExternal:ce,isActive:V})=>[L(I,{disabled:a.disabled},{default:P(({active:G,disabled:W,close:ve})=>[(S(),A(Te(h?"a":"button"),{href:W?void 0:h,rel:O,target:C,class:T(e.twMerge(e.twJoin(e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,G||V?e.ui.item.active:e.ui.item.inactive,W&&e.ui.item.disabled),a.class)),onClick:B=>e.onClick(B,a,{href:h,navigate:pe,close:ve,isExternal:ce})},{default:P(()=>[ee(e.$slots,a.slot||"item",{item:a},()=>{var B;return[a.icon?(S(),A(o,{key:0,name:a.icon,class:T(e.twMerge(e.twJoin(e.ui.item.icon.base,G||V?e.ui.item.icon.active:e.ui.item.icon.inactive),a.iconClass))},null,8,["name","class"])):a.avatar?(S(),A(s,F({key:1,ref_for:!0},{size:e.ui.item.avatar.size,...a.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):H("",!0),_("span",{class:T(e.twMerge(e.ui.item.label,a.labelClass))},te(a.label),3),(B=a.shortcuts)!=null&&B.length?(S(),D("span",{key:2,class:T(e.ui.item.shortcuts)},[(S(!0),D(z,null,J(a.shortcuts,Z=>(S(),A(p,{key:Z},{default:P(()=>[Pe(te(Z),1)]),_:2},1024))),128))],2)):H("",!0)]})]),_:2},1032,["href","rel","target","class","onClick"]))]),_:2},1032,["disabled"])]),_:2},1040))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],38)):H("",!0)]),_:3},16,["class","onMouseleave"])}const ht=ye(xe,[["render",tt]]);export{ht as default};
