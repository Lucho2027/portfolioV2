import{r as k,_ as R}from"./Radio.m5lw9uAq.js";import{u as b,g as l}from"./selectMenu.ujytSHxk.js";import{u as z}from"./useFormGroup.Sljxzgky.js";import{_ as B,s as h,v as r,g as G,x as n,k as U,h as j,o,c as i,a as w,A as y,E as v,d as F,t as N,K as _,F as D,z as E,D as A,C,f as P,w as T}from"./entry.6DCbpbJ6.js";import"./tw-merge.euJ5FBpL.js";import"./uid.RBzw2_Kg.js";import"./index.W2KGQQdS.js";const I={wrapper:"relative flex items-start",legend:"text-sm font-medium text-gray-700 dark:text-gray-200 mb-1",default:{color:"primary"}},d=h(r.ui.strategy,r.ui.radioGroup,I),K=h(r.ui.strategy,r.ui.radio,k),L=G({components:{URadio:R},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},name:{type:String,default:null},legend:{type:String,default:null},options:{type:Array,default:()=>[]},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},disabled:{type:Boolean,default:!1},color:{type:String,default:()=>d.default.color,validator(e){return r.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiRadio:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:s}){const{ui:m,attrs:c}=b("radioGroup",n(e,"ui"),d,n(e,"class")),{ui:g}=b("radio",n(e,"uiRadio"),K),{emitFormChange:p,color:u,name:t}=z(e,d);U("radio-group",{color:u,name:t});const f=a=>{s("update:modelValue",a),s("change",a),p()},O=a=>l(a,e.valueAttribute,l(a,e.optionAttribute)),S=a=>l(a,e.optionAttribute,l(a,e.valueAttribute)),V=a=>["string","number","boolean"].includes(typeof a)?{value:a,label:a}:{...a,value:O(a),label:S(a)},$=j(()=>e.options.map(a=>V(a)));return{ui:m,uiRadio:g,attrs:c,normalizedOptions:$,onUpdate:f}}});function q(e,s,m,c,g,p){const u=R;return o(),i("div",{class:y(e.ui.wrapper)},[w("fieldset",A(C(e.attrs)),[e.legend||e.$slots.legend?(o(),i("legend",{key:0,class:y(e.ui.legend)},[v(e.$slots,"legend",{},()=>[F(N(e.legend),1)])],2)):_("",!0),(o(!0),i(D,null,E(e.normalizedOptions,t=>(o(),P(u,{key:t.value,label:t.label,"model-value":e.modelValue,value:t.value,disabled:e.disabled,ui:e.uiRadio,onChange:f=>e.onUpdate(t.value)},{label:T(()=>[v(e.$slots,"label",A(C({option:t})))]),_:2},1032,["label","model-value","value","disabled","ui","onChange"]))),128))],16)],2)}const Z=B(L,[["render",q]]);export{Z as default};