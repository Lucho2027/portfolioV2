import $ from"./Button.lDUghS3R.js";import{u as U}from"./selectMenu.CPVhT6WU.js";import{_ as q,q as j,s as g,h as E,v as F,j as v,o as c,c as L,D as b,f as h,E as f,J as B,F as I,y as D}from"./entry.VJkcEQ3a.js";import{b as W}from"./button.ljqeEZC_.js";import"./Icon.bWQx7xiq.js";import"./Icon.mUalCB7q.js";import"./index.hPcBRl07.js";import"./Link.fTcesk51.js";import"./nuxt-link.g0LgZYu-.js";import"./tw-merge.N1_sWVtP.js";import"./useButtonGroup.YYYGE_vU.js";const J={wrapper:"flex items-center -space-x-px",base:"",rounded:"first:rounded-s-md last:rounded-e-md",default:{size:"sm",activeButton:{color:"primary"},inactiveButton:{color:"white"},firstButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-double-left-20-solid"},lastButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-double-right-20-solid"},prevButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-right-20-solid"}}},r=j(g.ui.strategy,g.ui.pagination,J),R=j(g.ui.strategy,g.ui.button,W),X=E({components:{UButton:$},inheritAttrs:!1,props:{modelValue:{type:Number,required:!0},pageCount:{type:Number,default:10},total:{type:Number,required:!0},max:{type:Number,default:7,validate(e){return e>=5&&e<Number.MAX_VALUE}},size:{type:String,default:()=>r.default.size,validator(e){return Object.keys(R.size).includes(e)}},activeButton:{type:Object,default:()=>r.default.activeButton},inactiveButton:{type:Object,default:()=>r.default.inactiveButton},showFirst:{type:Boolean,default:!1},showLast:{type:Boolean,default:!1},firstButton:{type:Object,default:()=>r.default.firstButton},lastButton:{type:Object,default:()=>r.default.lastButton},prevButton:{type:Object,default:()=>r.default.prevButton},nextButton:{type:Object,default:()=>r.default.nextButton},divider:{type:String,default:"…"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:C}){const{ui:y,attrs:z}=U("pagination",F(e,"ui"),r,F(e,"class")),o=v({get(){return e.modelValue},set(i){C("update:modelValue",i)}}),p=v(()=>Array.from({length:Math.ceil(e.total/e.pageCount)},(i,s)=>s+1)),u=v(()=>{const i=p.value.length,s=o.value,P=Math.max(e.max,5),l=Math.floor((Math.min(P,i)-5)/2),O=s-l,k=s+l,N=O-1>1,w=k+1<i,t=[];if(i<=P){for(let n=1;n<=i;n++)t.push(n);return t}if(t.push(1),N&&t.push(e.divider),!w){const n=s+l+2-i;for(let d=s-l-n;d<=s-l-1;d++)t.push(d)}for(let n=Math.max(2,O);n<=Math.min(i,k);n++)t.push(n);if(!N){const n=1-(s-l-2);for(let d=s+l+1;d<=s+l+n;d++)t.push(d)}return w&&t.push(e.divider),k<i&&t.push(i),t.length>=3&&t[1]===e.divider&&t[2]===3&&(t[1]=2),t.length>=3&&t[t.length-2]===e.divider&&t[t.length-1]===t.length&&(t[t.length-2]=t.length-1),t}),a=v(()=>o.value>1),m=v(()=>o.value<p.value.length);function M(){a.value&&(o.value=1)}function G(){m.value&&(o.value=p.value.length)}function V(i){typeof i!="string"&&(o.value=i)}function A(){a.value&&o.value--}function S(){m.value&&o.value++}return{ui:y,attrs:z,currentPage:o,pages:p,displayedPages:u,canGoLastOrNext:m,canGoFirstOrPrev:a,onClickPrev:A,onClickNext:S,onClickPage:V,onClickFirst:M,onClickLast:G}}});function H(e,C,y,z,o,p){const u=$;return c(),L("div",f({class:e.ui.wrapper},e.attrs),[b(e.$slots,"first",{onClick:e.onClickFirst},()=>[e.firstButton&&e.showFirst?(c(),h(u,f({key:0,size:e.size,disabled:!e.canGoFirstOrPrev,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.firstButton||{},...e.firstButton},{ui:{rounded:""},"aria-label":"First",onClick:e.onClickFirst}),null,16,["size","disabled","class","onClick"])):B("",!0)]),b(e.$slots,"prev",{onClick:e.onClickPrev},()=>[e.prevButton?(c(),h(u,f({key:0,size:e.size,disabled:!e.canGoFirstOrPrev,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.prevButton||{},...e.prevButton},{ui:{rounded:""},"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["size","disabled","class","onClick"])):B("",!0)]),(c(!0),L(I,null,D(e.displayedPages,(a,m)=>(c(),h(u,f({key:`${a}-${m}`,size:e.size,label:`${a}`},a===e.currentPage?{...e.ui.default.activeButton||{},...e.activeButton}:{...e.ui.default.inactiveButton||{},...e.inactiveButton},{class:[{"pointer-events-none":typeof a=="string","z-[1]":a===e.currentPage},e.ui.base,e.ui.rounded],ui:{rounded:""},onClick:()=>e.onClickPage(a)}),null,16,["size","label","class","onClick"]))),128)),b(e.$slots,"next",{onClick:e.onClickNext},()=>[e.nextButton?(c(),h(u,f({key:0,size:e.size,disabled:!e.canGoLastOrNext,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.nextButton||{},...e.nextButton},{ui:{rounded:""},"aria-label":"Next",onClick:e.onClickNext}),null,16,["size","disabled","class","onClick"])):B("",!0)]),b(e.$slots,"last",{onClick:e.onClickLast},()=>[e.lastButton&&e.showLast?(c(),h(u,f({key:0,size:e.size,disabled:!e.canGoLastOrNext,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.lastButton||{},...e.lastButton},{ui:{rounded:""},"aria-label":"Last",onClick:e.onClickLast}),null,16,["size","disabled","class","onClick"])):B("",!0)])],16)}const oe=q(X,[["render",H]]);export{oe as default};
