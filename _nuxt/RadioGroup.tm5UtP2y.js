import{r as k,_ as h}from"./Radio.TWVgyVzR.js";import{u as b,g as l}from"./selectMenu.CPVhT6WU.js";import{u as z}from"./useFormGroup.Qq5te_I9.js";import{_ as B,q as A,s as r,h as j,v as n,i as G,j as U,o,c as i,a as w,z as y,D as v,d as F,t as N,J as _,F as D,y as P,C,B as R,f as T,w as q}from"./entry.VJkcEQ3a.js";import"./tw-merge.N1_sWVtP.js";import"./uid.RBzw2_Kg.js";import"./index.Rtp-oiOn.js";const E={wrapper:"relative flex items-start",legend:"text-sm font-medium text-gray-700 dark:text-gray-200 mb-1",default:{color:"primary"}},d=A(r.ui.strategy,r.ui.radioGroup,E),I=A(r.ui.strategy,r.ui.radio,k),J=j({components:{URadio:h},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},name:{type:String,default:null},legend:{type:String,default:null},options:{type:Array,default:()=>[]},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},disabled:{type:Boolean,default:!1},color:{type:String,default:()=>d.default.color,validator(e){return r.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiRadio:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:s}){const{ui:m,attrs:c}=b("radioGroup",n(e,"ui"),d,n(e,"class")),{ui:p}=b("radio",n(e,"uiRadio"),I),{emitFormChange:g,color:u,name:t}=z(e,d);G("radio-group",{color:u,name:t});const f=a=>{s("update:modelValue",a),s("change",a),g()},O=a=>l(a,e.valueAttribute,l(a,e.optionAttribute)),S=a=>l(a,e.optionAttribute,l(a,e.valueAttribute)),V=a=>["string","number","boolean"].includes(typeof a)?{value:a,label:a}:{...a,value:O(a),label:S(a)},$=U(()=>e.options.map(a=>V(a)));return{ui:m,uiRadio:p,attrs:c,normalizedOptions:$,onUpdate:f}}});function L(e,s,m,c,p,g){const u=h;return o(),i("div",{class:y(e.ui.wrapper)},[w("fieldset",C(R(e.attrs)),[e.legend||e.$slots.legend?(o(),i("legend",{key:0,class:y(e.ui.legend)},[v(e.$slots,"legend",{},()=>[F(N(e.legend),1)])],2)):_("",!0),(o(!0),i(D,null,P(e.normalizedOptions,t=>(o(),T(u,{key:t.value,label:t.label,"model-value":e.modelValue,value:t.value,disabled:e.disabled,ui:e.uiRadio,onChange:f=>e.onUpdate(t.value)},{label:q(()=>[v(e.$slots,"label",C(R({option:t})))]),_:2},1032,["label","model-value","value","disabled","ui","onChange"]))),128))],16)],2)}const Z=B(J,[["render",L]]);export{Z as default};