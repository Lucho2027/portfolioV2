import{g as x,h as W,ap as me,z as j,aF as ne,aG as be,n as ue,f as K,r as D,av as ge,l as re,m as le,P as G,F as xe,q as Q,s as de,Q as B,O as Oe,a0 as _}from"./Cp_qYibV.js";import{d as Ie,e as Se}from"./D7SPq5LX.js";import{o as te,t as ie}from"./B08LnwSc.js";import{u as N,o as I,E as Re,A as J,T as oe,I as Z,N as Y,a as F}from"./H_zkhHe8.js";import{w as ye,n as Ce}from"./Yf-0udFG.js";import{s as Ee}from"./CW7lszp-.js";import{c as z,f as ae,i as Te,u as Me}from"./E-ukFuzo.js";import{f as we,u as ze}from"./CyZ_aEIX.js";import{t as Pe,i as X,l as $e}from"./S_MUPt2V.js";import{i as De,O as Fe}from"./BY-GoTpP.js";function H(o,d,e){let n=e.initialDeps??[],t;return()=>{var a,i,l,v;let f;e.key&&((a=e.debug)!=null&&a.call(e))&&(f=Date.now());const p=o();if(!(p.length!==n.length||p.some((w,C)=>n[C]!==w)))return t;n=p;let y;if(e.key&&((i=e.debug)!=null&&i.call(e))&&(y=Date.now()),t=d(...p),e.key&&((l=e.debug)!=null&&l.call(e))){const w=Math.round((Date.now()-f)*100)/100,C=Math.round((Date.now()-y)*100)/100,$=C/16,A=(P,b)=>{for(P=String(P);P.length<b;)P=" "+P;return P};console.info(`%c⏱ ${A(C,5)} /${A(w,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*$,120))}deg 100% 31%);`,e==null?void 0:e.key)}return(v=e==null?void 0:e.onChange)==null||v.call(e,t),t}}function ee(o,d){if(o===void 0)throw new Error("Unexpected undefined");return o}const Ae=(o,d)=>Math.abs(o-d)<1,Ve=(o,d)=>{let e;return function(...n){clearTimeout(e),e=setTimeout(()=>o.apply(this,n),d)}},ke=o=>o,_e=o=>{const d=Math.max(o.startIndex-o.overscan,0),e=Math.min(o.endIndex+o.overscan,o.count-1),n=[];for(let t=d;t<=e;t++)n.push(t);return n},Be=(o,d)=>{const e=o.scrollElement;if(!e)return;const n=a=>{const{width:i,height:l}=a;d({width:Math.round(i),height:Math.round(l)})};if(n(e.getBoundingClientRect()),typeof ResizeObserver>"u")return()=>{};const t=new ResizeObserver(a=>{const i=a[0];if(i!=null&&i.borderBoxSize){const l=i.borderBoxSize[0];if(l){n({width:l.inlineSize,height:l.blockSize});return}}n(e.getBoundingClientRect())});return t.observe(e,{box:"border-box"}),()=>{t.unobserve(e)}},se={passive:!0},je=typeof window>"u"?!0:"onscrollend"in window,Le=(o,d)=>{const e=o.scrollElement;if(!e)return;let n=0;const t=je?()=>{}:Ve(()=>{d(n,!1)},o.options.isScrollingResetDelay),a=v=>()=>{n=e[o.options.horizontal?"scrollLeft":"scrollTop"],t(),d(n,v)},i=a(!0),l=a(!1);return l(),e.addEventListener("scroll",i,se),e.addEventListener("scrollend",l,se),()=>{e.removeEventListener("scroll",i),e.removeEventListener("scrollend",l)}},Ne=(o,d,e)=>{if(d!=null&&d.borderBoxSize){const n=d.borderBoxSize[0];if(n)return Math.round(n[e.options.horizontal?"inlineSize":"blockSize"])}return Math.round(o.getBoundingClientRect()[e.options.horizontal?"width":"height"])},Ke=(o,{adjustments:d=0,behavior:e},n)=>{var t,a;const i=o+d;(a=(t=n.scrollElement)==null?void 0:t.scrollTo)==null||a.call(t,{[n.options.horizontal?"left":"top"]:i,behavior:e})};class Ue{constructor(d){this.unsubs=[],this.scrollElement=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollDirection=null,this.scrollAdjustments=0,this.measureElementCache=new Map,this.observer=(()=>{let e=null;const n=()=>e||(typeof ResizeObserver<"u"?e=new ResizeObserver(t=>{t.forEach(a=>{this._measureElement(a.target,a)})}):null);return{disconnect:()=>{var t;return(t=n())==null?void 0:t.disconnect()},observe:t=>{var a;return(a=n())==null?void 0:a.observe(t,{box:"border-box"})},unobserve:t=>{var a;return(a=n())==null?void 0:a.unobserve(t)}}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(([n,t])=>{typeof t>"u"&&delete e[n]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:ke,rangeExtractor:_e,onChange:()=>{},measureElement:Ne,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,...e}},this.notify=(e,n)=>{var t,a;const{startIndex:i,endIndex:l}=this.range??{startIndex:void 0,endIndex:void 0},v=this.calculateRange();(e||i!==(v==null?void 0:v.startIndex)||l!==(v==null?void 0:v.endIndex))&&((a=(t=this.options).onChange)==null||a.call(t,this,n))},this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.scrollElement=null},this._didMount=()=>(this.measureElementCache.forEach(this.observer.observe),()=>{this.observer.disconnect(),this.cleanup()}),this._willUpdate=()=>{const e=this.options.getScrollElement();this.scrollElement!==e&&(this.cleanup(),this.scrollElement=e,this._scrollToOffset(this.scrollOffset,{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,n=>{this.scrollRect=n,this.notify(!1,!1)})),this.unsubs.push(this.options.observeElementOffset(this,(n,t)=>{this.scrollAdjustments=0,this.scrollDirection=t?this.scrollOffset<n?"forward":"backward":null,this.scrollOffset=n;const a=this.isScrolling;this.isScrolling=t,this.notify(a!==t,t)})))},this.getSize=()=>this.scrollRect[this.options.horizontal?"width":"height"],this.getMeasurementOptions=H(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey],(e,n,t,a)=>(this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:n,scrollMargin:t,getItemKey:a}),{key:!1}),this.getFurthestMeasurement=(e,n)=>{const t=new Map,a=new Map;for(let i=n-1;i>=0;i--){const l=e[i];if(t.has(l.lane))continue;const v=a.get(l.lane);if(v==null||l.end>v.end?a.set(l.lane,l):l.end<v.end&&t.set(l.lane,!0),t.size===this.options.lanes)break}return a.size===this.options.lanes?Array.from(a.values()).sort((i,l)=>i.end===l.end?i.index-l.index:i.end-l.end)[0]:void 0},this.getMeasurements=H(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:e,paddingStart:n,scrollMargin:t,getItemKey:a},i)=>{const l=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const v=this.measurementsCache.slice(0,l);for(let f=l;f<e;f++){const p=a(f),h=this.options.lanes===1?v[f-1]:this.getFurthestMeasurement(v,f),y=h?h.end+this.options.gap:n+t,w=i.get(p),C=typeof w=="number"?w:this.options.estimateSize(f),$=y+C,A=h?h.lane:f%this.options.lanes;v[f]={index:f,start:y,size:C,end:$,key:p,lane:A}}return this.measurementsCache=v,v},{key:!1,debug:()=>this.options.debug}),this.calculateRange=H(()=>[this.getMeasurements(),this.getSize(),this.scrollOffset],(e,n,t)=>this.range=e.length>0&&n>0?qe({measurements:e,outerSize:n,scrollOffset:t}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=H(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(e,n,t,a)=>n===null?[]:e({startIndex:n.startIndex,endIndex:n.endIndex,overscan:t,count:a}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{const n=this.options.indexAttribute,t=e.getAttribute(n);return t?parseInt(t,10):(console.warn(`Missing attribute name '${n}={index}' on measured element.`),-1)},this._measureElement=(e,n)=>{const t=this.measurementsCache[this.indexFromElement(e)];if(!t||!e.isConnected){this.measureElementCache.forEach((l,v)=>{l===e&&(this.observer.unobserve(e),this.measureElementCache.delete(v))});return}const a=this.measureElementCache.get(t.key);a!==e&&(a&&this.observer.unobserve(a),this.observer.observe(e),this.measureElementCache.set(t.key,e));const i=this.options.measureElement(e,n,this);this.resizeItem(t,i)},this.resizeItem=(e,n)=>{const t=this.itemSizeCache.get(e.key)??e.size,a=n-t;a!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(e,a,this):e.start<this.scrollOffset+this.scrollAdjustments)&&this._scrollToOffset(this.scrollOffset,{adjustments:this.scrollAdjustments+=a,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(e.index),this.itemSizeCache=new Map(this.itemSizeCache.set(e.key,n)),this.notify(!0,!1))},this.measureElement=e=>{e&&this._measureElement(e,void 0)},this.getVirtualItems=H(()=>[this.getIndexes(),this.getMeasurements()],(e,n)=>{const t=[];for(let a=0,i=e.length;a<i;a++){const l=e[a],v=n[l];t.push(v)}return t},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{const n=this.getMeasurements();return ee(n[ce(0,n.length-1,t=>ee(n[t]).start,e)])},this.getOffsetForAlignment=(e,n)=>{const t=this.getSize();n==="auto"&&(e<=this.scrollOffset?n="start":e>=this.scrollOffset+t?n="end":n="start"),n==="start"?e=e:n==="end"?e=e-t:n==="center"&&(e=e-t/2);const a=this.options.horizontal?"scrollWidth":"scrollHeight",l=(this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[a]:this.scrollElement[a]:0)-this.getSize();return Math.max(Math.min(l,e),0)},this.getOffsetForIndex=(e,n="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));const t=ee(this.getMeasurements()[e]);if(n==="auto")if(t.end>=this.scrollOffset+this.getSize()-this.options.scrollPaddingEnd)n="end";else if(t.start<=this.scrollOffset+this.options.scrollPaddingStart)n="start";else return[this.scrollOffset,n];const a=n==="end"?t.end+this.options.scrollPaddingEnd:t.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(a,n),n]},this.isDynamicMode=()=>this.measureElementCache.size>0,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&(clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=(e,{align:n="start",behavior:t}={})=>{this.cancelScrollToIndex(),t==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(e,n),{adjustments:void 0,behavior:t})},this.scrollToIndex=(e,{align:n="auto",behavior:t}={})=>{e=Math.max(0,Math.min(e,this.options.count-1)),this.cancelScrollToIndex(),t==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const[a,i]=this.getOffsetForIndex(e,n);this._scrollToOffset(a,{adjustments:void 0,behavior:t}),t!=="smooth"&&this.isDynamicMode()&&(this.scrollToIndexTimeoutId=setTimeout(()=>{if(this.scrollToIndexTimeoutId=null,this.measureElementCache.has(this.options.getItemKey(e))){const[v]=this.getOffsetForIndex(e,i);Ae(v,this.scrollOffset)||this.scrollToIndex(e,{align:i,behavior:t})}else this.scrollToIndex(e,{align:i,behavior:t})}))},this.scrollBy=(e,{behavior:n}={})=>{this.cancelScrollToIndex(),n==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.scrollOffset+e,{adjustments:void 0,behavior:n})},this.getTotalSize=()=>{var e;const n=this.getMeasurements();let t;return n.length===0?t=this.options.paddingStart:t=this.options.lanes===1?((e=n[n.length-1])==null?void 0:e.end)??0:Math.max(...n.slice(-this.options.lanes).map(a=>a.end)),t-this.options.scrollMargin+this.options.paddingEnd},this._scrollToOffset=(e,{adjustments:n,behavior:t})=>{this.options.scrollToFn(e,{behavior:t,adjustments:n},this)},this.measure=()=>{var e,n;this.itemSizeCache=new Map,(n=(e=this.options).onChange)==null||n.call(e,this,!1)},this.setOptions(d),this.scrollRect=this.options.initialRect,this.scrollOffset=typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset,this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}),this.notify(!1,!1)}}const ce=(o,d,e,n)=>{for(;o<=d;){const t=(o+d)/2|0,a=e(t);if(a<n)o=t+1;else if(a>n)d=t-1;else return t}return o>0?o-1:0};function qe({measurements:o,outerSize:d,scrollOffset:e}){const n=o.length-1,a=ce(0,n,l=>o[l].start,e);let i=a;for(;i<n&&o[i].end<e+d;)i++;return{startIndex:a,endIndex:i}}function He(o){const d=new Ue(W(o)),e=me(d),n=d._didMount();return j(()=>W(o).getScrollElement(),t=>{t&&d._willUpdate()},{immediate:!0}),j(()=>W(o),t=>{d.setOptions({...t,onChange:(a,i)=>{var l;ne(e),(l=t.onChange)==null||l.call(t,a,i)}}),d._willUpdate(),ne(e)},{immediate:!0}),be(n),e}function Je(o){return He(x(()=>({observeElementRect:Be,observeElementOffset:Le,scrollToFn:Ke,...W(o)})))}function We(){let o=te();return ue(()=>o.dispose()),o}function Ge(){let o=We();return d=>{o.dispose(),o.nextFrame(d)}}var ve=(o=>(o[o.Left=0]="Left",o[o.Right=2]="Right",o))(ve||{}),Qe={};function Ye(o,d){return o===d}var Xe=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(Xe||{}),Ze=(o=>(o[o.Single=0]="Single",o[o.Multi=1]="Multi",o))(Ze||{}),et=(o=>(o[o.Pointer=0]="Pointer",o[o.Focus=1]="Focus",o[o.Other=2]="Other",o))(et||{});let fe=Symbol("ComboboxContext");function U(o){let d=de(fe,null);if(d===null){let e=new Error(`<${o} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,U),e}return d}let pe=Symbol("VirtualContext"),tt=K({name:"VirtualProvider",setup(o,{slots:d}){let e=U("VirtualProvider"),n=x(()=>{let l=I(e.optionsRef);if(!l)return{start:0,end:0};let v=window.getComputedStyle(l);return{start:parseFloat(v.paddingBlockStart||v.paddingTop),end:parseFloat(v.paddingBlockEnd||v.paddingBottom)}}),t=Je(x(()=>({scrollPaddingStart:n.value.start,scrollPaddingEnd:n.value.end,count:e.virtual.value.options.length,estimateSize(){return 40},getScrollElement(){return I(e.optionsRef)},overscan:12}))),a=x(()=>{var l;return(l=e.virtual.value)==null?void 0:l.options}),i=D(0);return j([a],()=>{i.value+=1}),re(pe,e.virtual.value?t:null),()=>[G("div",{style:{position:"relative",width:"100%",height:`${t.value.getTotalSize()}px`},ref:l=>{if(l){if(typeof process<"u"&&Qe.JEST_WORKER_ID!==void 0||e.activationTrigger.value===0)return;e.activeOptionIndex.value!==null&&e.virtual.value.options.length>e.activeOptionIndex.value&&t.value.scrollToIndex(e.activeOptionIndex.value)}}},t.value.getVirtualItems().map(l=>Oe(d.default({option:e.virtual.value.options[l.index],open:e.comboboxState.value===0})[0],{key:`${i.value}-${l.index}`,"data-index":l.index,"aria-setsize":e.virtual.value.options.length,"aria-posinset":l.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${l.start}px)`,overflowAnchor:"none"}})))]}}),vt=K({name:"Combobox",emits:{"update:modelValue":o=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],nullable:!0,default:null},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1},immediate:{type:[Boolean],default:!1},virtual:{type:Object,default:null}},inheritAttrs:!1,setup(o,{slots:d,attrs:e,emit:n}){let t=D(1),a=D(null),i=D(null),l=D(null),v=D(null),f=D({static:!1,hold:!1}),p=D([]),h=D(null),y=D(2),w=D(!1);function C(s=r=>r){let r=h.value!==null?p.value[h.value]:null,m=s(p.value.slice()),g=m.length>0&&m[0].dataRef.order.value!==null?m.sort((M,k)=>M.dataRef.order.value-k.dataRef.order.value):Fe(m,M=>I(M.dataRef.domRef)),T=r?g.indexOf(r):null;return T===-1&&(T=null),{options:g,activeOptionIndex:T}}let $=x(()=>o.multiple?1:0),A=x(()=>o.nullable),[P,b]=Ie(x(()=>o.modelValue),s=>n("update:modelValue",s),x(()=>o.defaultValue)),E=x(()=>P.value===void 0?N($.value,{1:[],0:void 0}):P.value),V=null,c=null;function S(s){return N($.value,{0(){return b==null?void 0:b(s)},1:()=>{let r=_(u.value.value).slice(),m=_(s),g=r.findIndex(T=>u.compare(m,_(T)));return g===-1?r.push(m):r.splice(g,1),b==null?void 0:b(r)}})}let R=x(()=>{});j([R],([s],[r])=>{if(u.virtual.value&&s&&r&&h.value!==null){let m=s.indexOf(r[h.value]);m!==-1?h.value=m:h.value=null}});let u={comboboxState:t,value:E,mode:$,compare(s,r){if(typeof o.by=="string"){let m=o.by;return(s==null?void 0:s[m])===(r==null?void 0:r[m])}return o.by===null?Ye(s,r):o.by(s,r)},calculateIndex(s){return u.virtual.value?o.by===null?u.virtual.value.options.indexOf(s):u.virtual.value.options.findIndex(r=>u.compare(r,s)):p.value.findIndex(r=>u.compare(r.dataRef.value,s))},defaultValue:x(()=>o.defaultValue),nullable:A,immediate:x(()=>!1),virtual:x(()=>null),inputRef:i,labelRef:a,buttonRef:l,optionsRef:v,disabled:x(()=>o.disabled),options:p,change(s){b(s)},activeOptionIndex:x(()=>{if(w.value&&h.value===null&&(u.virtual.value?u.virtual.value.options.length>0:p.value.length>0)){if(u.virtual.value){let r=u.virtual.value.options.findIndex(m=>{var g;return!((g=u.virtual.value)!=null&&g.disabled(m))});if(r!==-1)return r}let s=p.value.findIndex(r=>!r.dataRef.disabled);if(s!==-1)return s}return h.value}),activationTrigger:y,optionsPropsRef:f,closeCombobox(){w.value=!1,!o.disabled&&t.value!==1&&(t.value=1,h.value=null)},openCombobox(){if(w.value=!0,!o.disabled&&t.value!==0){if(u.value.value){let s=u.calculateIndex(u.value.value);s!==-1&&(h.value=s)}t.value=0}},setActivationTrigger(s){y.value=s},goToOption(s,r,m){w.value=!1,V!==null&&cancelAnimationFrame(V),V=requestAnimationFrame(()=>{if(o.disabled||v.value&&!f.value.static&&t.value===1)return;if(u.virtual.value){h.value=s===z.Specific?r:ae({focus:s},{resolveItems:()=>u.virtual.value.options,resolveActiveIndex:()=>{var M,k;return(k=(M=u.activeOptionIndex.value)!=null?M:u.virtual.value.options.findIndex(L=>{var q;return!((q=u.virtual.value)!=null&&q.disabled(L))}))!=null?k:null},resolveDisabled:M=>u.virtual.value.disabled(M),resolveId(){throw new Error("Function not implemented.")}}),y.value=m??2;return}let g=C();if(g.activeOptionIndex===null){let M=g.options.findIndex(k=>!k.dataRef.disabled);M!==-1&&(g.activeOptionIndex=M)}let T=s===z.Specific?r:ae({focus:s},{resolveItems:()=>g.options,resolveActiveIndex:()=>g.activeOptionIndex,resolveId:M=>M.id,resolveDisabled:M=>M.dataRef.disabled});h.value=T,y.value=m??2,p.value=g.options})},selectOption(s){let r=p.value.find(g=>g.id===s);if(!r)return;let{dataRef:m}=r;S(m.value)},selectActiveOption(){if(u.activeOptionIndex.value!==null){if(u.virtual.value)S(u.virtual.value.options[u.activeOptionIndex.value]);else{let{dataRef:s}=p.value[u.activeOptionIndex.value];S(s.value)}u.goToOption(z.Specific,u.activeOptionIndex.value)}},registerOption(s,r){let m=ge({id:s,dataRef:r});if(u.virtual.value){p.value.push(m);return}c&&cancelAnimationFrame(c);let g=C(T=>(T.push(m),T));h.value===null&&u.isSelected(r.value.value)&&(g.activeOptionIndex=g.options.indexOf(m)),p.value=g.options,h.value=g.activeOptionIndex,y.value=2,g.options.some(T=>!I(T.dataRef.domRef))&&(c=requestAnimationFrame(()=>{let T=C();p.value=T.options,h.value=T.activeOptionIndex}))},unregisterOption(s,r){if(V!==null&&cancelAnimationFrame(V),r&&(w.value=!0),u.virtual.value){p.value=p.value.filter(g=>g.id!==s);return}let m=C(g=>{let T=g.findIndex(M=>M.id===s);return T!==-1&&g.splice(T,1),g});p.value=m.options,h.value=m.activeOptionIndex,y.value=2},isSelected(s){return N($.value,{0:()=>u.compare(_(u.value.value),_(s)),1:()=>_(u.value.value).some(r=>u.compare(_(r),_(s)))})},isActive(s){return h.value===u.calculateIndex(s)}};ye([i,l,v],()=>u.closeCombobox(),x(()=>t.value===0)),re(fe,u),Pe(x(()=>N(t.value,{0:X.Open,1:X.Closed})));let O=x(()=>{var s;return(s=I(i))==null?void 0:s.closest("form")});return le(()=>{j([O],()=>{if(!O.value||o.defaultValue===void 0)return;function s(){u.change(o.defaultValue)}return O.value.addEventListener("reset",s),()=>{var r;(r=O.value)==null||r.removeEventListener("reset",s)}},{immediate:!0})}),()=>{var s,r,m;let{name:g,disabled:T,form:M,...k}=o,L={open:t.value===0,disabled:T,activeIndex:u.activeOptionIndex.value,activeOption:u.activeOptionIndex.value===null?null:u.virtual.value?u.virtual.value.options[(s=u.activeOptionIndex.value)!=null?s:0]:(m=(r=u.options.value[u.activeOptionIndex.value])==null?void 0:r.dataRef.value)!=null?m:null,value:E.value};return G(xe,[...g!=null&&E.value!=null?Se({[g]:E.value}).map(([q,he])=>G(we,Re({features:ze.Hidden,key:q,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:M,disabled:T,name:q,value:he}))):[],J({theirProps:{...e,...oe(k,["by","defaultValue","immediate","modelValue","multiple","nullable","onUpdate:modelValue","virtual"])},ourProps:{},slot:L,slots:d,attrs:e,name:"Combobox"})])}}}),ft=K({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(o,{attrs:d,slots:e,expose:n}){var t;let a=(t=o.id)!=null?t:`headlessui-combobox-button-${Z()}`,i=U("ComboboxButton");n({el:i.buttonRef,$el:i.buttonRef});function l(p){i.disabled.value||(i.comboboxState.value===0?i.closeCombobox():(p.preventDefault(),i.openCombobox()),B(()=>{var h;return(h=I(i.inputRef))==null?void 0:h.focus({preventScroll:!0})}))}function v(p){switch(p.key){case F.ArrowDown:p.preventDefault(),p.stopPropagation(),i.comboboxState.value===1&&i.openCombobox(),B(()=>{var h;return(h=i.inputRef.value)==null?void 0:h.focus({preventScroll:!0})});return;case F.ArrowUp:p.preventDefault(),p.stopPropagation(),i.comboboxState.value===1&&(i.openCombobox(),B(()=>{i.value.value||i.goToOption(z.Last)})),B(()=>{var h;return(h=i.inputRef.value)==null?void 0:h.focus({preventScroll:!0})});return;case F.Escape:if(i.comboboxState.value!==0)return;p.preventDefault(),i.optionsRef.value&&!i.optionsPropsRef.value.static&&p.stopPropagation(),i.closeCombobox(),B(()=>{var h;return(h=i.inputRef.value)==null?void 0:h.focus({preventScroll:!0})});return}}let f=Ee(x(()=>({as:o.as,type:d.type})),i.buttonRef);return()=>{var p,h;let y={open:i.comboboxState.value===0,disabled:i.disabled.value,value:i.value.value},{...w}=o,C={ref:i.buttonRef,id:a,type:f.value,tabindex:"-1","aria-haspopup":"listbox","aria-controls":(p=I(i.optionsRef))==null?void 0:p.id,"aria-expanded":i.comboboxState.value===0,"aria-labelledby":i.labelRef.value?[(h=I(i.labelRef))==null?void 0:h.id,a].join(" "):void 0,disabled:i.disabled.value===!0?!0:void 0,onKeydown:v,onClick:l};return J({ourProps:C,theirProps:w,slot:y,attrs:d,slots:e,name:"ComboboxButton"})}}}),pt=K({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function},defaultValue:{type:String,default:void 0},id:{type:String,default:null}},emits:{change:o=>!0},setup(o,{emit:d,attrs:e,slots:n,expose:t}){var a;let i=(a=o.id)!=null?a:`headlessui-combobox-input-${Z()}`,l=U("ComboboxInput"),v=x(()=>De(I(l.inputRef))),f={value:!1};t({el:l.inputRef,$el:l.inputRef});function p(){l.change(null);let c=I(l.optionsRef);c&&(c.scrollTop=0),l.goToOption(z.Nothing)}let h=x(()=>{var c;let S=l.value.value;return I(l.inputRef)?typeof o.displayValue<"u"&&S!==void 0?(c=o.displayValue(S))!=null?c:"":typeof S=="string"?S:"":""});le(()=>{j([h,l.comboboxState,v],([c,S],[R,u])=>{if(f.value)return;let O=I(l.inputRef);O&&((u===0&&S===1||c!==R)&&(O.value=c),requestAnimationFrame(()=>{var s;if(f.value||!O||((s=v.value)==null?void 0:s.activeElement)!==O)return;let{selectionStart:r,selectionEnd:m}=O;Math.abs((m??0)-(r??0))===0&&r===0&&O.setSelectionRange(O.value.length,O.value.length)}))},{immediate:!0}),j([l.comboboxState],([c],[S])=>{if(c===0&&S===1){if(f.value)return;let R=I(l.inputRef);if(!R)return;let u=R.value,{selectionStart:O,selectionEnd:s,selectionDirection:r}=R;R.value="",R.value=u,r!==null?R.setSelectionRange(O,s,r):R.setSelectionRange(O,s)}})});let y=D(!1);function w(){y.value=!0}function C(){te().nextFrame(()=>{y.value=!1})}let $=Ge();function A(c){switch(f.value=!0,$(()=>{f.value=!1}),c.key){case F.Enter:if(f.value=!1,l.comboboxState.value!==0||y.value)return;if(c.preventDefault(),c.stopPropagation(),l.activeOptionIndex.value===null){l.closeCombobox();return}l.selectActiveOption(),l.mode.value===0&&l.closeCombobox();break;case F.ArrowDown:return f.value=!1,c.preventDefault(),c.stopPropagation(),N(l.comboboxState.value,{0:()=>l.goToOption(z.Next),1:()=>l.openCombobox()});case F.ArrowUp:return f.value=!1,c.preventDefault(),c.stopPropagation(),N(l.comboboxState.value,{0:()=>l.goToOption(z.Previous),1:()=>{l.openCombobox(),B(()=>{l.value.value||l.goToOption(z.Last)})}});case F.Home:if(c.shiftKey)break;return f.value=!1,c.preventDefault(),c.stopPropagation(),l.goToOption(z.First);case F.PageUp:return f.value=!1,c.preventDefault(),c.stopPropagation(),l.goToOption(z.First);case F.End:if(c.shiftKey)break;return f.value=!1,c.preventDefault(),c.stopPropagation(),l.goToOption(z.Last);case F.PageDown:return f.value=!1,c.preventDefault(),c.stopPropagation(),l.goToOption(z.Last);case F.Escape:if(f.value=!1,l.comboboxState.value!==0)return;c.preventDefault(),l.optionsRef.value&&!l.optionsPropsRef.value.static&&c.stopPropagation(),l.nullable.value&&l.mode.value===0&&l.value.value===null&&p(),l.closeCombobox();break;case F.Tab:if(f.value=!1,l.comboboxState.value!==0)return;l.mode.value===0&&l.activationTrigger.value!==1&&l.selectActiveOption(),l.closeCombobox();break}}function P(c){d("change",c),l.nullable.value&&l.mode.value===0&&c.target.value===""&&p(),l.openCombobox()}function b(c){var S,R,u;let O=(S=c.relatedTarget)!=null?S:ie.find(s=>s!==c.currentTarget);if(f.value=!1,!((R=I(l.optionsRef))!=null&&R.contains(O))&&!((u=I(l.buttonRef))!=null&&u.contains(O))&&l.comboboxState.value===0)return c.preventDefault(),l.mode.value===0&&(l.nullable.value&&l.value.value===null?p():l.activationTrigger.value!==1&&l.selectActiveOption()),l.closeCombobox()}function E(c){var S,R,u;let O=(S=c.relatedTarget)!=null?S:ie.find(s=>s!==c.currentTarget);(R=I(l.buttonRef))!=null&&R.contains(O)||(u=I(l.optionsRef))!=null&&u.contains(O)||l.disabled.value||l.immediate.value&&l.comboboxState.value!==0&&(l.openCombobox(),te().nextFrame(()=>{l.setActivationTrigger(1)}))}let V=x(()=>{var c,S,R,u;return(u=(R=(S=o.defaultValue)!=null?S:l.defaultValue.value!==void 0?(c=o.displayValue)==null?void 0:c.call(o,l.defaultValue.value):null)!=null?R:l.defaultValue.value)!=null?u:""});return()=>{var c,S,R,u,O,s,r;let m={open:l.comboboxState.value===0},{displayValue:g,onChange:T,...M}=o,k={"aria-controls":(c=l.optionsRef.value)==null?void 0:c.id,"aria-expanded":l.comboboxState.value===0,"aria-activedescendant":l.activeOptionIndex.value===null?void 0:l.virtual.value?(S=l.options.value.find(L=>!l.virtual.value.disabled(L.dataRef.value)&&l.compare(L.dataRef.value,l.virtual.value.options[l.activeOptionIndex.value])))==null?void 0:S.id:(R=l.options.value[l.activeOptionIndex.value])==null?void 0:R.id,"aria-labelledby":(s=(u=I(l.labelRef))==null?void 0:u.id)!=null?s:(O=I(l.buttonRef))==null?void 0:O.id,"aria-autocomplete":"list",id:i,onCompositionstart:w,onCompositionend:C,onKeydown:A,onInput:P,onFocus:E,onBlur:b,role:"combobox",type:(r=e.type)!=null?r:"text",tabIndex:0,ref:l.inputRef,defaultValue:V.value,disabled:l.disabled.value===!0?!0:void 0};return J({ourProps:k,theirProps:M,slot:m,attrs:e,slots:n,features:Y.RenderStrategy|Y.Static,name:"ComboboxInput"})}}}),ht=K({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(o,{attrs:d,slots:e,expose:n}){let t=U("ComboboxOptions"),a=`headlessui-combobox-options-${Z()}`;n({el:t.optionsRef,$el:t.optionsRef}),Q(()=>{t.optionsPropsRef.value.static=o.static}),Q(()=>{t.optionsPropsRef.value.hold=o.hold});let i=$e(),l=x(()=>i!==null?(i.value&X.Open)===X.Open:t.comboboxState.value===0);Te({container:x(()=>I(t.optionsRef)),enabled:x(()=>t.comboboxState.value===0),accept(f){return f.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:f.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(f){f.setAttribute("role","none")}});function v(f){f.preventDefault()}return()=>{var f,p,h;let y={open:t.comboboxState.value===0},w={"aria-labelledby":(h=(f=I(t.labelRef))==null?void 0:f.id)!=null?h:(p=I(t.buttonRef))==null?void 0:p.id,id:a,ref:t.optionsRef,role:"listbox","aria-multiselectable":t.mode.value===1?!0:void 0,onMousedown:v},C=oe(o,["hold"]);return J({ourProps:w,theirProps:C,slot:y,attrs:d,slots:t.virtual.value&&t.comboboxState.value===0?{...e,default:()=>[G(tt,{},e.default)]}:e,features:Y.RenderStrategy|Y.Static,visible:l.value,name:"ComboboxOptions"})}}}),mt=K({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},order:{type:[Number],default:null}},setup(o,{slots:d,attrs:e,expose:n}){let t=U("ComboboxOption"),a=`headlessui-combobox-option-${Z()}`,i=D(null),l=x(()=>o.disabled);n({el:i,$el:i});let v=x(()=>{var b;return t.virtual.value?t.activeOptionIndex.value===t.calculateIndex(o.value):t.activeOptionIndex.value===null?!1:((b=t.options.value[t.activeOptionIndex.value])==null?void 0:b.id)===a}),f=x(()=>t.isSelected(o.value)),p=de(pe,null),h=x(()=>({disabled:o.disabled,value:o.value,domRef:i,order:x(()=>o.order)}));le(()=>t.registerOption(a,h)),ue(()=>t.unregisterOption(a,v.value)),Q(()=>{let b=I(i);b&&(p==null||p.value.measureElement(b))}),Q(()=>{t.comboboxState.value===0&&v.value&&(t.virtual.value||t.activationTrigger.value!==0&&B(()=>{var b,E;return(E=(b=I(i))==null?void 0:b.scrollIntoView)==null?void 0:E.call(b,{block:"nearest"})}))});function y(b){b.preventDefault(),b.button===ve.Left&&(l.value||(t.selectOption(a),Ce()||requestAnimationFrame(()=>{var E;return(E=I(t.inputRef))==null?void 0:E.focus({preventScroll:!0})}),t.mode.value===0&&t.closeCombobox()))}function w(){var b;if(o.disabled||(b=t.virtual.value)!=null&&b.disabled(o.value))return t.goToOption(z.Nothing);let E=t.calculateIndex(o.value);t.goToOption(z.Specific,E)}let C=Me();function $(b){C.update(b)}function A(b){var E;if(!C.wasMoved(b)||o.disabled||(E=t.virtual.value)!=null&&E.disabled(o.value)||v.value)return;let V=t.calculateIndex(o.value);t.goToOption(z.Specific,V,0)}function P(b){var E;C.wasMoved(b)&&(o.disabled||(E=t.virtual.value)!=null&&E.disabled(o.value)||v.value&&(t.optionsPropsRef.value.hold||t.goToOption(z.Nothing)))}return()=>{let{disabled:b}=o,E={active:v.value,selected:f.value,disabled:b},V={id:a,ref:i,role:"option",tabIndex:b===!0?void 0:-1,"aria-disabled":b===!0?!0:void 0,"aria-selected":f.value,disabled:void 0,onMousedown:y,onFocus:w,onPointerenter:$,onMouseenter:$,onPointermove:A,onMousemove:A,onPointerleave:P,onMouseleave:P},c=oe(o,["order","value"]);return J({ourProps:V,theirProps:c,slot:E,attrs:e,slots:d,name:"ComboboxOption"})}}});export{pt as i,vt as l,ft as n,mt as r,ht as u};
