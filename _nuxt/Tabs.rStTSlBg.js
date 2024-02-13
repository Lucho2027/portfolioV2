import{b as ue}from"./index.31rNsfpV.js";import{u as ie}from"./selectMenu.E2GhQbwH.js";import{f as $,r as h,P as G,g,k as W,l as C,U as te,n as oe,F as q,m as ae,q as U,_ as de,s as pe,v as K,x as J,y as H,o as E,j as D,w as F,A as O,V as ve,a as L,t as Q,E as X,z as Y,c as Z,b as _,d as ce,G as fe}from"./entry.hf34r1QT.js";import{o as m,H as B,T as be,t as le,N as ee,u as R,a as k}from"./dom.Mvv3q8an.js";import{O as z,T as j,m as me,P as A,N as I}from"./focus-management.yNx_fsGQ.js";import{b as ge}from"./use-resolve-button-type.Kla0QvB7.js";import{a as he,f as ne}from"./hidden.jZJ55IQ3.js";import{t as ye}from"./micro-task.ZxAilEVg.js";import"./index.Xs7AEt3h.js";const Te={wrapper:"relative space-y-2",container:"relative w-full",base:"focus:outline-none",list:{base:"relative",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-lg",shadow:"",padding:"p-1",height:"h-10",width:"w-full",marker:{wrapper:"absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",base:"w-full h-full",background:"bg-white dark:bg-gray-900",rounded:"rounded-md",shadow:"shadow-sm"},tab:{base:"relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",background:"",active:"text-gray-900 dark:text-white",inactive:"text-gray-500 dark:text-gray-400",height:"h-8",padding:"px-3",size:"text-sm",font:"font-medium",rounded:"rounded-md",shadow:""}}};let we=$({props:{onFocus:{type:Function,required:!0}},setup(e){let d=h(!0);return()=>d.value?G(ne,{as:"button",type:"button",features:he.Focusable,onFocus(v){v.preventDefault();let p,r=50;function a(){var s;if(r--<=0){p&&cancelAnimationFrame(p);return}if((s=e.onFocus)!=null&&s.call(e)){d.value=!1,cancelAnimationFrame(p);return}p=requestAnimationFrame(a)}p=requestAnimationFrame(a)}}):null}});var xe=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(xe||{}),ke=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(ke||{});let re=Symbol("TabsContext");function N(e){let d=U(re,null);if(d===null){let v=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,N),v}return d}let M=Symbol("TabsSSRContext"),Ie=$({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:d,attrs:v,emit:p}){var r;let a=h((r=e.selectedIndex)!=null?r:e.defaultIndex),s=h([]),o=h([]),c=g(()=>e.selectedIndex!==null),f=g(()=>c.value?e.selectedIndex:a.value);function i(l){var t;let u=z(n.tabs.value,m),y=z(n.panels.value,m),P=u.filter(w=>{var x;return!((x=m(w))!=null&&x.hasAttribute("disabled"))});if(l<0||l>u.length-1){let w=R(a.value===null?0:Math.sign(l-a.value),{[-1]:()=>1,0:()=>R(Math.sign(l),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),x=R(w,{0:()=>u.indexOf(P[0]),1:()=>u.indexOf(P[P.length-1])});x!==-1&&(a.value=x),n.tabs.value=u,n.panels.value=y}else{let w=u.slice(0,l),x=[...u.slice(l),...w].find(se=>P.includes(se));if(!x)return;let V=(t=u.indexOf(x))!=null?t:n.selectedIndex.value;V===-1&&(V=n.selectedIndex.value),a.value=V,n.tabs.value=u,n.panels.value=y}}let n={selectedIndex:g(()=>{var l,t;return(t=(l=a.value)!=null?l:e.defaultIndex)!=null?t:null}),orientation:g(()=>e.vertical?"vertical":"horizontal"),activation:g(()=>e.manual?"manual":"auto"),tabs:s,panels:o,setSelectedIndex(l){f.value!==l&&p("change",l),c.value||i(l)},registerTab(l){var t;if(s.value.includes(l))return;let u=s.value[a.value];s.value.push(l),s.value=z(s.value,m);let y=(t=s.value.indexOf(u))!=null?t:a.value;y!==-1&&(a.value=y)},unregisterTab(l){let t=s.value.indexOf(l);t!==-1&&s.value.splice(t,1)},registerPanel(l){o.value.includes(l)||(o.value.push(l),o.value=z(o.value,m))},unregisterPanel(l){let t=o.value.indexOf(l);t!==-1&&o.value.splice(t,1)}};W(re,n);let b=h({tabs:[],panels:[]}),T=h(!1);C(()=>{T.value=!0}),W(M,g(()=>T.value?null:b.value));let S=g(()=>e.selectedIndex);return C(()=>{te([S],()=>{var l;return i((l=e.selectedIndex)!=null?l:e.defaultIndex)},{immediate:!0})}),oe(()=>{if(!c.value||f.value==null||n.tabs.value.length<=0)return;let l=z(n.tabs.value,m);l.some((t,u)=>m(n.tabs.value[u])!==m(t))&&n.setSelectedIndex(l.findIndex(t=>m(t)===m(n.tabs.value[f.value])))}),()=>{let l={selectedIndex:a.value};return G(q,[s.value.length<=0&&G(we,{onFocus:()=>{for(let t of s.value){let u=m(t);if((u==null?void 0:u.tabIndex)===0)return u.focus(),!0}return!1}}),B({theirProps:{...v,...be(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:l,slots:d,attrs:v,name:"TabGroup"})])}}}),Pe=$({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:d,slots:v}){let p=N("TabList");return()=>{let r={selectedIndex:p.selectedIndex.value},a={role:"tablist","aria-orientation":p.orientation.value};return B({ourProps:a,theirProps:e,slot:r,attrs:d,slots:v,name:"TabList"})}}}),Se=$({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${le()}`}},setup(e,{attrs:d,slots:v,expose:p}){let r=N("Tab"),a=h(null);p({el:a,$el:a}),C(()=>r.registerTab(a)),ae(()=>r.unregisterTab(a));let s=U(M),o=g(()=>{if(s.value){let t=s.value.tabs.indexOf(e.id);return t===-1?s.value.tabs.push(e.id)-1:t}return-1}),c=g(()=>{let t=r.tabs.value.indexOf(a);return t===-1?o.value:t}),f=g(()=>c.value===r.selectedIndex.value);function i(t){var u;let y=t();if(y===j.Success&&r.activation.value==="auto"){let P=(u=me(a))==null?void 0:u.activeElement,w=r.tabs.value.findIndex(x=>m(x)===P);w!==-1&&r.setSelectedIndex(w)}return y}function n(t){let u=r.tabs.value.map(y=>m(y)).filter(Boolean);if(t.key===k.Space||t.key===k.Enter){t.preventDefault(),t.stopPropagation(),r.setSelectedIndex(c.value);return}switch(t.key){case k.Home:case k.PageUp:return t.preventDefault(),t.stopPropagation(),i(()=>A(u,I.First));case k.End:case k.PageDown:return t.preventDefault(),t.stopPropagation(),i(()=>A(u,I.Last))}if(i(()=>R(r.orientation.value,{vertical(){return t.key===k.ArrowUp?A(u,I.Previous|I.WrapAround):t.key===k.ArrowDown?A(u,I.Next|I.WrapAround):j.Error},horizontal(){return t.key===k.ArrowLeft?A(u,I.Previous|I.WrapAround):t.key===k.ArrowRight?A(u,I.Next|I.WrapAround):j.Error}}))===j.Success)return t.preventDefault()}let b=h(!1);function T(){var t;b.value||(b.value=!0,!e.disabled&&((t=m(a))==null||t.focus({preventScroll:!0}),r.setSelectedIndex(c.value),ye(()=>{b.value=!1})))}function S(t){t.preventDefault()}let l=ge(g(()=>({as:e.as,type:d.type})),a);return()=>{var t;let u={selected:f.value},{id:y,...P}=e,w={ref:a,onKeydown:n,onMousedown:S,onClick:T,id:y,role:"tab",type:l.value,"aria-controls":(t=m(r.panels.value[c.value]))==null?void 0:t.id,"aria-selected":f.value,tabIndex:f.value?0:-1,disabled:e.disabled?!0:void 0};return B({ourProps:w,theirProps:P,slot:u,attrs:d,slots:v,name:"Tab"})}}}),$e=$({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:d,attrs:v}){let p=N("TabPanels");return()=>{let r={selectedIndex:p.selectedIndex.value};return B({theirProps:e,ourProps:{},slot:r,attrs:v,slots:d,name:"TabPanels"})}}}),Oe=$({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${le()}`},tabIndex:{type:Number,default:0}},setup(e,{attrs:d,slots:v,expose:p}){let r=N("TabPanel"),a=h(null);p({el:a,$el:a}),C(()=>r.registerPanel(a)),ae(()=>r.unregisterPanel(a));let s=U(M),o=g(()=>{if(s.value){let i=s.value.panels.indexOf(e.id);return i===-1?s.value.panels.push(e.id)-1:i}return-1}),c=g(()=>{let i=r.panels.value.indexOf(a);return i===-1?o.value:i}),f=g(()=>c.value===r.selectedIndex.value);return()=>{var i;let n={selected:f.value},{id:b,tabIndex:T,...S}=e,l={ref:a,id:b,role:"tabpanel","aria-labelledby":(i=m(r.tabs.value[c.value]))==null?void 0:i.id,tabIndex:f.value?T:-1};return!f.value&&e.unmount&&!e.static?G(ne,{as:"span",...l}):B({ourProps:l,theirProps:S,slot:n,attrs:d,slots:v,features:ee.Static|ee.RenderStrategy,visible:f.value,name:"TabPanel"})}}});const Ae=pe(K.ui.strategy,K.ui.tabs,Te),He=$({components:{HTabGroup:Ie,HTabList:Pe,HTab:Se,HTabPanels:$e,HTabPanel:Oe},inheritAttrs:!1,props:{modelValue:{type:Number,default:void 0},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:d}){const{ui:v,attrs:p}=ie("tabs",J(e,"ui"),Ae,J(e,"class")),r=h(),a=h([]),s=h(),o=h(e.modelValue||e.defaultIndex);function c(i){var b;const n=(b=a.value[i])==null?void 0:b.$el;n&&s.value&&(s.value.style.top=`${n.offsetTop}px`,s.value.style.left=`${n.offsetLeft}px`,s.value.style.width=`${n.offsetWidth}px`,s.value.style.height=`${n.offsetHeight}px`)}function f(i){o.value=i,d("change",i),e.modelValue!==void 0&&d("update:modelValue",o.value),c(o.value)}return ue(r,()=>{c(o.value)}),te(()=>e.modelValue,i=>{o.value=i,c(o.value)}),C(()=>c(o.value)),{ui:v,attrs:p,listRef:r,itemRefs:a,markerRef:s,selectedIndex:o,onChange:f}}}),Ee={class:"truncate"};function Fe(e,d,v,p,r,a){const s=H("HTab"),o=H("HTabList"),c=H("HTabPanel"),f=H("HTabPanels"),i=H("HTabGroup");return E(),D(i,fe({vertical:e.orientation==="vertical","selected-index":e.selectedIndex,as:"div",class:e.ui.wrapper},e.attrs,{onChange:e.onChange}),{default:F(()=>[_(o,{ref:"listRef",class:O([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:ve([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:F(()=>[L("div",{ref:"markerRef",class:O(e.ui.list.marker.wrapper)},[L("div",{class:O([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),(E(!0),Z(q,null,Y(e.items,(n,b)=>(E(),D(s,{key:b,ref_for:!0,ref:"itemRefs",disabled:n.disabled,as:"template"},{default:F(({selected:T,disabled:S})=>[L("button",{class:O([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,T?e.ui.list.tab.active:e.ui.list.tab.inactive])},[X(e.$slots,"default",{item:n,index:b,selected:T,disabled:S},()=>[L("span",Ee,Q(n.label),1)])],2)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),_(f,{class:O(e.ui.container)},{default:F(()=>[(E(!0),Z(q,null,Y(e.items,(n,b)=>(E(),D(c,{key:b,class:O(e.ui.base),tabindex:"-1"},{default:F(({selected:T})=>[X(e.$slots,n.slot||"item",{item:n,index:b,selected:T},()=>[ce(Q(n.content),1)])]),_:2},1032,["class"]))),128))]),_:3},8,["class"])]),_:3},16,["vertical","selected-index","class","onChange"])}const De=de(He,[["render",Fe]]);export{De as default};