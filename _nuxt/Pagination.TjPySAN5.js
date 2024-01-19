import{_ as U,s as $,v as g,x as E,i as I,z as j,A as q,B as w,k as h,o as c,c as F,K as b,g as B,L as f,Q as m,F as W,E as D}from"./entry.wHsg6pmn.js";const K={wrapper:"flex items-center -space-x-px",base:"",rounded:"first:rounded-s-md last:rounded-e-md",default:{size:"sm",activeButton:{color:"primary"},inactiveButton:{color:"white"},firstButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-double-left-20-solid"},lastButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-double-right-20-solid"},prevButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-right-20-solid"}}},u=$(g.ui.strategy,g.ui.pagination,K),Q=$(g.ui.strategy,g.ui.button,E),R=I({components:{UButton:j},inheritAttrs:!1,props:{modelValue:{type:Number,required:!0},pageCount:{type:Number,default:10},total:{type:Number,required:!0},max:{type:Number,default:7,validate(e){return e>=5&&e<Number.MAX_VALUE}},size:{type:String,default:()=>u.default.size,validator(e){return Object.keys(Q.size).includes(e)}},activeButton:{type:Object,default:()=>u.default.activeButton},inactiveButton:{type:Object,default:()=>u.default.inactiveButton},showFirst:{type:Boolean,default:!1},showLast:{type:Boolean,default:!1},firstButton:{type:Object,default:()=>u.default.firstButton},lastButton:{type:Object,default:()=>u.default.lastButton},prevButton:{type:Object,default:()=>u.default.prevButton},nextButton:{type:Object,default:()=>u.default.nextButton},divider:{type:String,default:"…"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:C}){const{ui:y,attrs:z}=q("pagination",w(e,"ui"),u,w(e,"class")),a=h({get(){return e.modelValue},set(n){C("update:modelValue",n)}}),p=h(()=>Array.from({length:Math.ceil(e.total/e.pageCount)},(n,s)=>s+1)),r=h(()=>{const n=p.value.length,s=a.value,P=Math.max(e.max,5),l=Math.floor((Math.min(P,n)-5)/2),O=s-l,k=s+l,N=O-1>1,L=k+1<n,t=[];if(n<=P){for(let i=1;i<=n;i++)t.push(i);return t}if(t.push(1),N&&t.push(e.divider),!L){const i=s+l+2-n;for(let d=s-l-i;d<=s-l-1;d++)t.push(d)}for(let i=Math.max(2,O);i<=Math.min(n,k);i++)t.push(i);if(!N){const i=1-(s-l-2);for(let d=s+l+1;d<=s+l+i;d++)t.push(d)}return L&&t.push(e.divider),k<n&&t.push(n),t.length>=3&&t[1]===e.divider&&t[2]===3&&(t[1]=2),t.length>=3&&t[t.length-2]===e.divider&&t[t.length-1]===t.length&&(t[t.length-2]=t.length-1),t}),o=h(()=>a.value>1),v=h(()=>a.value<p.value.length);function M(){o.value&&(a.value=1)}function A(){v.value&&(a.value=p.value.length)}function G(n){typeof n!="string"&&(a.value=n)}function V(){o.value&&a.value--}function S(){v.value&&a.value++}return{ui:y,attrs:z,currentPage:a,pages:p,displayedPages:r,canGoLastOrNext:v,canGoFirstOrPrev:o,onClickPrev:V,onClickNext:S,onClickPage:G,onClickFirst:M,onClickLast:A}}});function X(e,C,y,z,a,p){const r=j;return c(),F("div",f({class:e.ui.wrapper},e.attrs),[b(e.$slots,"first",{onClick:e.onClickFirst},()=>[e.firstButton&&e.showFirst?(c(),B(r,f({key:0,size:e.size,disabled:!e.canGoFirstOrPrev,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.firstButton||{},...e.firstButton},{ui:{rounded:""},"aria-label":"First",onClick:e.onClickFirst}),null,16,["size","disabled","class","onClick"])):m("",!0)]),b(e.$slots,"prev",{onClick:e.onClickPrev},()=>[e.prevButton?(c(),B(r,f({key:0,size:e.size,disabled:!e.canGoFirstOrPrev,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.prevButton||{},...e.prevButton},{ui:{rounded:""},"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["size","disabled","class","onClick"])):m("",!0)]),(c(!0),F(W,null,D(e.displayedPages,(o,v)=>(c(),B(r,f({key:`${o}-${v}`,size:e.size,label:`${o}`},o===e.currentPage?{...e.ui.default.activeButton||{},...e.activeButton}:{...e.ui.default.inactiveButton||{},...e.inactiveButton},{class:[{"pointer-events-none":typeof o=="string","z-[1]":o===e.currentPage},e.ui.base,e.ui.rounded],ui:{rounded:""},onClick:()=>e.onClickPage(o)}),null,16,["size","label","class","onClick"]))),128)),b(e.$slots,"next",{onClick:e.onClickNext},()=>[e.nextButton?(c(),B(r,f({key:0,size:e.size,disabled:!e.canGoLastOrNext,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.nextButton||{},...e.nextButton},{ui:{rounded:""},"aria-label":"Next",onClick:e.onClickNext}),null,16,["size","disabled","class","onClick"])):m("",!0)]),b(e.$slots,"last",{onClick:e.onClickLast},()=>[e.lastButton&&e.showLast?(c(),B(r,f({key:0,size:e.size,disabled:!e.canGoLastOrNext,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.lastButton||{},...e.lastButton},{ui:{rounded:""},"aria-label":"Last",onClick:e.onClickLast}),null,16,["size","disabled","class","onClick"])):m("",!0)])],16)}const J=U(R,[["render",X]]);export{J as default};
