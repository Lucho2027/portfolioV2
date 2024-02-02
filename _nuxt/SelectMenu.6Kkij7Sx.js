import ce from"./Icon.auZWEQWf.js";import{_ as be}from"./Avatar.abGpyt1C.js";import{g as J,r as B,h as s,k as ke,l as ie,X as ue,O as de,F as fe,m as Ce,n as we,P as E,q as Le,Y as P,_ as Re,s as me,v as F,x as te,Q as Ae,J as Q,y as Be,o as g,f as j,w as G,A as v,c as A,K as z,S as W,G as ne,b as Z,E as U,t as K,a as D,T as Ve,R as Pe,z as Te,d as He}from"./entry.A1eWV8bd.js";import{c as ze}from"./index.9G_8O0xX.js";import{t as qe}from"./tw-merge.eXZIzSxT.js";import{s as je,a as De,u as pe,g as Ne}from"./selectMenu.z_saYcG9.js";import{u as $e}from"./usePopper._GD7mWO_.js";import{u as Ue}from"./useFormGroup.1Nd4IwIR.js";import{u as Ee}from"./useButtonGroup.hEZ6a5gd.js";import{J as Fe,G as Ge,X as Ke,Y as Qe,Q as We}from"./combobox.VX8J9Ssb.js";import{u as N,o as w,K as Je,H as _,T as Xe,t as re,N as ve,a as I}from"./dom.MXRgnpkc.js";import{x as Ye,a as L,u as Ze}from"./use-tracked-pointer.dI9H1Q-c.js";import{c as xe,l as x,p as _e}from"./open-closed.23IJ6ZoT.js";import{b as ea}from"./use-resolve-button-type.MqxgxKqd.js";import{w as aa,h as la,O as ta}from"./focus-management.piRF-uFQ.js";import{y as na}from"./use-outside-click.ZGDbS2Gd.js";import{f as oa,a as ia}from"./hidden.GXSHIQfN.js";import{d as ua,e as ra}from"./use-controllable.GGNfPnfQ.js";import{p as sa}from"./use-text-value.OWq8r1zv.js";import{u as da}from"./index.gkvkA94u.js";import"./Icon.jDXhylgo.js";import"./index.hPcBRl07.js";import"./uid.RBzw2_Kg.js";import"./disposables.MoseSqH0.js";import"./micro-task.ZxAilEVg.js";function pa(e,c){return e===c}var va=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(va||{}),ca=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(ca||{}),ba=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ba||{});function fa(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let ge=Symbol("ListboxContext");function ee(e){let c=Le(ge,null);if(c===null){let C=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(C,ee),C}return c}let ma=J({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>pa},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:c,attrs:C,emit:u}){let a=B(1),y=B(null),b=B(null),h=B(null),f=B([]),t=B(""),l=B(null),O=B(1);function S(n=i=>i){let i=l.value!==null?f.value[l.value]:null,r=ta(n(f.value.slice()),k=>w(k.dataRef.domRef)),d=i?r.indexOf(i):null;return d===-1&&(d=null),{options:r,activeOptionIndex:d}}let M=s(()=>e.multiple?1:0),[m,H]=ua(s(()=>e.modelValue),n=>u("update:modelValue",n),s(()=>e.defaultValue)),V=s(()=>m.value===void 0?N(M.value,{1:[],0:void 0}):m.value),o={listboxState:a,value:V,mode:M,compare(n,i){if(typeof e.by=="string"){let r=e.by;return(n==null?void 0:n[r])===(i==null?void 0:i[r])}return e.by(n,i)},orientation:s(()=>e.horizontal?"horizontal":"vertical"),labelRef:y,buttonRef:b,optionsRef:h,disabled:s(()=>e.disabled),options:f,searchQuery:t,activeOptionIndex:l,activationTrigger:O,closeListbox(){e.disabled||a.value!==1&&(a.value=1,l.value=null)},openListbox(){e.disabled||a.value!==0&&(a.value=0)},goToOption(n,i,r){if(e.disabled||a.value===1)return;let d=S(),k=Ye(n===L.Specific?{focus:L.Specific,id:i}:{focus:n},{resolveItems:()=>d.options,resolveActiveIndex:()=>d.activeOptionIndex,resolveId:$=>$.id,resolveDisabled:$=>$.dataRef.disabled});t.value="",l.value=k,O.value=r??1,f.value=d.options},search(n){if(e.disabled||a.value===1)return;let i=t.value!==""?0:1;t.value+=n.toLowerCase();let r=(l.value!==null?f.value.slice(l.value+i).concat(f.value.slice(0,l.value+i)):f.value).find(k=>k.dataRef.textValue.startsWith(t.value)&&!k.dataRef.disabled),d=r?f.value.indexOf(r):-1;d===-1||d===l.value||(l.value=d,O.value=1)},clearSearch(){e.disabled||a.value!==1&&t.value!==""&&(t.value="")},registerOption(n,i){let r=S(d=>[...d,{id:n,dataRef:i}]);f.value=r.options,l.value=r.activeOptionIndex},unregisterOption(n){let i=S(r=>{let d=r.findIndex(k=>k.id===n);return d!==-1&&r.splice(d,1),r});f.value=i.options,l.value=i.activeOptionIndex,O.value=1},theirOnChange(n){e.disabled||H(n)},select(n){e.disabled||H(N(M.value,{0:()=>n,1:()=>{let i=P(o.value.value).slice(),r=P(n),d=i.findIndex(k=>o.compare(r,P(k)));return d===-1?i.push(r):i.splice(d,1),i}}))}};na([b,h],(n,i)=>{var r;o.closeListbox(),aa(i,la.Loose)||(n.preventDefault(),(r=w(b))==null||r.focus())},s(()=>a.value===0)),ke(ge,o),xe(s(()=>N(a.value,{0:x.Open,1:x.Closed})));let p=s(()=>{var n;return(n=w(b))==null?void 0:n.closest("form")});return ie(()=>{ue([p],()=>{if(!p.value||e.defaultValue===void 0)return;function n(){o.theirOnChange(e.defaultValue)}return p.value.addEventListener("reset",n),()=>{var i;(i=p.value)==null||i.removeEventListener("reset",n)}},{immediate:!0})}),()=>{let{name:n,modelValue:i,disabled:r,form:d,...k}=e,$={open:a.value===0,disabled:r,value:V.value};return de(fe,[...n!=null&&V.value!=null?ra({[n]:V.value}).map(([X,ae])=>de(oa,Je({features:ia.Hidden,key:X,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:d,name:X,value:ae}))):[],_({ourProps:{},theirProps:{...C,...Xe(k,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:$,slots:c,attrs:C,name:"Listbox"})])}}}),ga=J({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${re()}`}},setup(e,{attrs:c,slots:C,expose:u}){let a=ee("ListboxButton");u({el:a.buttonRef,$el:a.buttonRef});function y(t){switch(t.key){case I.Space:case I.Enter:case I.ArrowDown:t.preventDefault(),a.openListbox(),E(()=>{var l;(l=w(a.optionsRef))==null||l.focus({preventScroll:!0}),a.value.value||a.goToOption(L.First)});break;case I.ArrowUp:t.preventDefault(),a.openListbox(),E(()=>{var l;(l=w(a.optionsRef))==null||l.focus({preventScroll:!0}),a.value.value||a.goToOption(L.Last)});break}}function b(t){switch(t.key){case I.Space:t.preventDefault();break}}function h(t){a.disabled.value||(a.listboxState.value===0?(a.closeListbox(),E(()=>{var l;return(l=w(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(t.preventDefault(),a.openListbox(),fa(()=>{var l;return(l=w(a.optionsRef))==null?void 0:l.focus({preventScroll:!0})})))}let f=ea(s(()=>({as:e.as,type:c.type})),a.buttonRef);return()=>{var t,l;let O={open:a.listboxState.value===0,disabled:a.disabled.value,value:a.value.value},{id:S,...M}=e,m={ref:a.buttonRef,id:S,type:f.value,"aria-haspopup":"listbox","aria-controls":(t=w(a.optionsRef))==null?void 0:t.id,"aria-expanded":a.listboxState.value===0,"aria-labelledby":a.labelRef.value?[(l=w(a.labelRef))==null?void 0:l.id,S].join(" "):void 0,disabled:a.disabled.value===!0?!0:void 0,onKeydown:y,onKeyup:b,onClick:h};return _({ourProps:m,theirProps:M,slot:O,attrs:c,slots:C,name:"ListboxButton"})}}}),ya=J({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${re()}`}},setup(e,{attrs:c,slots:C,expose:u}){let a=ee("ListboxOptions"),y=B(null);u({el:a.optionsRef,$el:a.optionsRef});function b(t){switch(y.value&&clearTimeout(y.value),t.key){case I.Space:if(a.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),a.search(t.key);case I.Enter:if(t.preventDefault(),t.stopPropagation(),a.activeOptionIndex.value!==null){let l=a.options.value[a.activeOptionIndex.value];a.select(l.dataRef.value)}a.mode.value===0&&(a.closeListbox(),E(()=>{var l;return(l=w(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})}));break;case N(a.orientation.value,{vertical:I.ArrowDown,horizontal:I.ArrowRight}):return t.preventDefault(),t.stopPropagation(),a.goToOption(L.Next);case N(a.orientation.value,{vertical:I.ArrowUp,horizontal:I.ArrowLeft}):return t.preventDefault(),t.stopPropagation(),a.goToOption(L.Previous);case I.Home:case I.PageUp:return t.preventDefault(),t.stopPropagation(),a.goToOption(L.First);case I.End:case I.PageDown:return t.preventDefault(),t.stopPropagation(),a.goToOption(L.Last);case I.Escape:t.preventDefault(),t.stopPropagation(),a.closeListbox(),E(()=>{var l;return(l=w(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case I.Tab:t.preventDefault(),t.stopPropagation();break;default:t.key.length===1&&(a.search(t.key),y.value=setTimeout(()=>a.clearSearch(),350));break}}let h=_e(),f=s(()=>h!==null?(h.value&x.Open)===x.Open:a.listboxState.value===0);return()=>{var t,l,O,S;let M={open:a.listboxState.value===0},{id:m,...H}=e,V={"aria-activedescendant":a.activeOptionIndex.value===null||(t=a.options.value[a.activeOptionIndex.value])==null?void 0:t.id,"aria-multiselectable":a.mode.value===1?!0:void 0,"aria-labelledby":(S=(l=w(a.labelRef))==null?void 0:l.id)!=null?S:(O=w(a.buttonRef))==null?void 0:O.id,"aria-orientation":a.orientation.value,id:m,onKeydown:b,role:"listbox",tabIndex:0,ref:a.optionsRef};return _({ourProps:V,theirProps:H,slot:M,attrs:c,slots:C,features:ve.RenderStrategy|ve.Static,visible:f.value,name:"ListboxOptions"})}}}),ha=J({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${re()}`}},setup(e,{slots:c,attrs:C,expose:u}){let a=ee("ListboxOption"),y=B(null);u({el:y,$el:y});let b=s(()=>a.activeOptionIndex.value!==null?a.options.value[a.activeOptionIndex.value].id===e.id:!1),h=s(()=>N(a.mode.value,{0:()=>a.compare(P(a.value.value),P(e.value)),1:()=>P(a.value.value).some(o=>a.compare(P(o),P(e.value)))})),f=s(()=>N(a.mode.value,{1:()=>{var o;let p=P(a.value.value);return((o=a.options.value.find(n=>p.some(i=>a.compare(P(i),P(n.dataRef.value)))))==null?void 0:o.id)===e.id},0:()=>h.value})),t=sa(y),l=s(()=>({disabled:e.disabled,value:e.value,get textValue(){return t()},domRef:y}));ie(()=>a.registerOption(e.id,l)),Ce(()=>a.unregisterOption(e.id)),ie(()=>{ue([a.listboxState,h],()=>{a.listboxState.value===0&&h.value&&N(a.mode.value,{1:()=>{f.value&&a.goToOption(L.Specific,e.id)},0:()=>{a.goToOption(L.Specific,e.id)}})},{immediate:!0})}),we(()=>{a.listboxState.value===0&&b.value&&a.activationTrigger.value!==0&&E(()=>{var o,p;return(p=(o=w(y))==null?void 0:o.scrollIntoView)==null?void 0:p.call(o,{block:"nearest"})})});function O(o){if(e.disabled)return o.preventDefault();a.select(e.value),a.mode.value===0&&(a.closeListbox(),E(()=>{var p;return(p=w(a.buttonRef))==null?void 0:p.focus({preventScroll:!0})}))}function S(){if(e.disabled)return a.goToOption(L.Nothing);a.goToOption(L.Specific,e.id)}let M=Ze();function m(o){M.update(o)}function H(o){M.wasMoved(o)&&(e.disabled||b.value||a.goToOption(L.Specific,e.id,0))}function V(o){M.wasMoved(o)&&(e.disabled||b.value&&a.goToOption(L.Nothing))}return()=>{let{disabled:o}=e,p={active:b.value,selected:h.value,disabled:o},{id:n,value:i,disabled:r,...d}=e,k={id:n,ref:y,role:"option",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,"aria-selected":h.value,disabled:void 0,onClick:O,onFocus:S,onPointerenter:m,onMouseenter:m,onPointermove:H,onMousemove:H,onPointerleave:V,onMouseleave:V};return _({ourProps:k,theirProps:d,slot:p,attrs:C,slots:c,name:"ListboxOption"})}}});const T=me(F.ui.strategy,F.ui.select,je),oe=me(F.ui.strategy,F.ui.selectMenu,De),Oa=J({components:{HCombobox:Fe,HComboboxButton:Ge,HComboboxOptions:Ke,HComboboxOption:Qe,HComboboxInput:We,HListbox:ma,HListboxButton:ga,HListboxOptions:ya,HListboxOption:ha,UIcon:ce,UAvatar:be},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:""},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>T.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>T.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>oe.default.selectedIcon},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:[Boolean,Function],default:!1},searchablePlaceholder:{type:String,default:"Search..."},clearSearchOnClose:{type:Boolean,default:()=>oe.default.clearOnClose},debounce:{type:Number,default:200},creatable:{type:Boolean,default:!1},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(T.size).includes(e)}},color:{type:String,default:()=>T.default.color,validator(e){return[...F.ui.colors,...Object.keys(T.color)].includes(e)}},variant:{type:String,default:()=>T.default.variant,validator(e){return[...Object.keys(T.variant),...Object.values(T.color).flatMap(c=>Object.keys(c))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},searchAttributes:{type:Array,default:null},popper:{type:Object,default:()=>({})},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","open","close","change"],setup(e,{emit:c,slots:C}){const{ui:u,attrs:a}=pe("select",te(e,"ui"),T,te(e,"class")),{ui:y}=pe("selectMenu",te(e,"uiMenu"),oe),b=s(()=>Ae({},e.popper,y.value.popper)),[h,f]=$e(b.value),{size:t,rounded:l}=Ee({ui:u,props:e}),{emitFormBlur:O,emitFormChange:S,inputId:M,color:m,size:H,name:V}=Ue(e,T),o=s(()=>t.value||H.value),p=B(""),n=B(),i=s(()=>{var q,Y;const R=((Y=(q=u.value.color)==null?void 0:q[m.value])==null?void 0:Y[e.variant])||u.value.variant[e.variant];return qe(Q(u.value.base,y.value.select,l.value,u.value.size[o.value],u.value.gap[o.value],e.padded?u.value.padding[o.value]:"p-0",R==null?void 0:R.replaceAll("{color}",m.value),(r.value||C.leading)&&u.value.leading.padding[o.value],(d.value||C.trailing)&&u.value.trailing.padding[o.value]),e.selectClass)}),r=s(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),d=s(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),k=s(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),$=s(()=>e.loading&&!r.value?e.loadingIcon:e.trailingIcon||e.icon),X=s(()=>Q(u.value.icon.leading.wrapper,u.value.icon.leading.pointer,u.value.icon.leading.padding[o.value])),ae=s(()=>Q(u.value.icon.base,m.value&&F.ui.colors.includes(m.value)&&u.value.icon.color.replaceAll("{color}",m.value),u.value.icon.size[o.value],e.loading&&u.value.icon.loading)),ye=s(()=>Q(u.value.icon.trailing.wrapper,u.value.icon.trailing.pointer,u.value.icon.trailing.padding[o.value])),he=s(()=>Q(u.value.icon.base,m.value&&F.ui.colors.includes(m.value)&&u.value.icon.color.replaceAll("{color}",m.value),u.value.icon.size[o.value],e.loading&&!r.value&&u.value.icon.loading)),se=typeof e.searchable=="function"?da(e.searchable,e.debounce):void 0,Oe=ze(async()=>e.searchable&&se?await se(p.value):p.value===""?e.options:e.options.filter(R=>{var q;return((q=e.searchAttributes)!=null&&q.length?e.searchAttributes:[e.optionAttribute]).some(Y=>{if(["string","number"].includes(typeof R))return String(R).search(new RegExp(p.value,"i"))!==-1;const le=Ne(R,Y);return le!=null&&String(le).search(new RegExp(p.value,"i"))!==-1})})),Se=s(()=>p.value===""?null:{[e.optionAttribute]:p.value});function Me(){e.clearSearchOnClose&&(p.value="")}ue(f,R=>{R?c("open"):(Me(),c("close"),O())});function Ie(R){var q;p.value&&((q=n.value)!=null&&q.$el)&&(p.value="",n.value.$el.value=""),c("update:modelValue",R),c("change",R),S()}return{ui:u,uiMenu:y,attrs:a,name:V,inputId:M,popper:b,trigger:h,container:f,isLeading:r,isTrailing:d,selectClass:i,leadingIconName:k,leadingIconClass:ae,leadingWrapperIconClass:X,trailingIconName:$,trailingIconClass:he,trailingWrapperIconClass:ye,filteredOptions:Oe,queryOption:Se,query:p,onUpdate:Ie}}}),Sa=["value","required"],Ma=["id","disabled"],Ia={class:"truncate"};function ka(e,c,C,u,a,y){const b=ce,h=Be("HComboboxInput"),f=be;return g(),j(W(e.searchable?"HCombobox":"HListbox"),{by:e.by,name:e.name,"model-value":e.modelValue,multiple:e.multiple,disabled:e.disabled||e.loading,as:"div",class:v(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:G(({open:t})=>[e.required?(g(),A("input",{key:0,value:e.modelValue,required:e.required,class:v(e.uiMenu.required),tabindex:"-1","aria-hidden":"true"},null,10,Sa)):z("",!0),(g(),j(W(e.searchable?"HComboboxButton":"HListboxButton"),{ref:"trigger",as:"div",role:"button",class:v(e.uiMenu.trigger)},{default:G(()=>[U(e.$slots,"default",{open:t,disabled:e.disabled,loading:e.loading},()=>[D("button",ne({id:e.inputId,class:e.selectClass,disabled:e.disabled||e.loading,type:"button"},e.attrs),[e.isLeading&&e.leadingIconName||e.$slots.leading?(g(),A("span",{key:0,class:v(e.leadingWrapperIconClass)},[U(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[Z(b,{name:e.leadingIconName,class:v(e.leadingIconClass)},null,8,["name","class"])])],2)):z("",!0),U(e.$slots,"label",{},()=>[e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length?(g(),A("span",{key:0,class:v(e.uiMenu.label)},K(e.modelValue.length)+" selected",3)):!e.multiple&&e.modelValue?(g(),A("span",{key:1,class:v(e.uiMenu.label)},K(["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute]),3)):(g(),A("span",{key:2,class:v(e.uiMenu.label)},K(e.placeholder||" "),3))]),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(g(),A("span",{key:1,class:v(e.trailingWrapperIconClass)},[U(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[Z(b,{name:e.trailingIconName,class:v(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):z("",!0)],16,Ma)])]),_:2},1032,["class"])),t?(g(),A("div",{key:1,ref:"container",class:v([e.uiMenu.container,e.uiMenu.width])},[Z(Ve,ne({appear:""},e.uiMenu.transition),{default:G(()=>[D("div",null,[e.popper.arrow?(g(),A("div",{key:0,"data-popper-arrow":"",class:v(Object.values(e.uiMenu.arrow))},null,2)):z("",!0),(g(),j(W(e.searchable?"HComboboxOptions":"HListboxOptions"),{static:"",class:v([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:G(()=>[e.searchable?(g(),j(h,{key:0,ref:"searchInput","display-value":()=>e.query,name:"q",placeholder:e.searchablePlaceholder,autofocus:"",autocomplete:"off",class:v(e.uiMenu.input),onChange:c[0]||(c[0]=l=>e.query=l.target.value)},null,8,["display-value","placeholder","class"])):z("",!0),(g(!0),A(fe,null,Te(e.filteredOptions,(l,O)=>(g(),j(W(e.searchable?"HComboboxOption":"HListboxOption"),{key:O,as:"template",value:e.valueAttribute?l[e.valueAttribute]:l,disabled:l.disabled},{default:G(({active:S,selected:M,disabled:m})=>[D("li",{class:v([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,S?e.uiMenu.option.active:e.uiMenu.option.inactive,M&&e.uiMenu.option.selected,m&&e.uiMenu.option.disabled])},[D("div",{class:v(e.uiMenu.option.container)},[U(e.$slots,"option",{option:l,active:S,selected:M},()=>[l.icon?(g(),j(b,{key:0,name:l.icon,class:v([e.uiMenu.option.icon.base,S?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,l.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):l.avatar?(g(),j(f,ne({key:1},{size:e.uiMenu.option.avatar.size,...l.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):l.chip?(g(),A("span",{key:2,class:v(e.uiMenu.option.chip.base),style:Pe({background:`#${l.chip}`})},null,6)):z("",!0),D("span",Ia,K(["string","number"].includes(typeof l)?l:l[e.optionAttribute]),1)])],2),M?(g(),A("span",{key:0,class:v([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[Z(b,{name:e.selectedIcon,class:v(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):z("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.creatable&&e.queryOption&&!e.filteredOptions.length?(g(),j(W(e.searchable?"HComboboxOption":"HListboxOption"),{key:1,value:e.queryOption,as:"template"},{default:G(({active:l,selected:O})=>[D("li",{class:v([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,l?e.uiMenu.option.active:e.uiMenu.option.inactive])},[D("div",{class:v(e.uiMenu.option.container)},[U(e.$slots,"option-create",{option:e.queryOption,active:l,selected:O},()=>[D("span",{class:v(e.uiMenu.option.create)},'Create "'+K(e.queryOption[e.optionAttribute])+'"',3)])],2)],2)]),_:3},8,["value"])):e.searchable&&e.query&&!e.filteredOptions.length?(g(),A("p",{key:2,class:v(e.uiMenu.option.empty)},[U(e.$slots,"option-empty",{query:e.query},()=>[He(' No results for "'+K(e.query)+'". ',1)])],2)):z("",!0)]),_:3},8,["class"]))])]),_:3},16)],2)):z("",!0)]),_:3},8,["by","name","model-value","multiple","disabled","class","onUpdate:modelValue"])}const Ya=Re(Oa,[["render",ka]]);export{Ya as default};