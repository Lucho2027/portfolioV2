import{_ as V,q,s as f,h as N,v as B,r as z,P as $,k as C,W as F,O as A,j as D,I as H,o as R,c as E,a as P,E as G,D as J,z as U,S as W}from"./entry.VJkcEQ3a.js";import{t as K}from"./tw-merge.N1_sWVtP.js";import{t as L,u as Q}from"./selectMenu.CPVhT6WU.js";import{u as X}from"./useFormGroup.Qq5te_I9.js";import"./uid.RBzw2_Kg.js";import"./index.Rtp-oiOn.js";const o=q(f.ui.strategy,f.ui.textarea,L),Y=N({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(o.size).includes(e)}},color:{type:String,default:()=>o.default.color,validator(e){return[...f.ui.colors,...Object.keys(o.color)].includes(e)}},variant:{type:String,default:()=>o.default.variant,validator(e){return[...Object.keys(o.variant),...Object.values(o.color).flatMap(t=>Object.keys(t))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur"],setup(e,{emit:t}){const{ui:l,attrs:m}=Q("textarea",B(e,"ui"),o,B(e,"class")),{emitFormBlur:p,emitFormInput:c,inputId:r,color:v,size:g,name:I}=X(e,o),n=z($({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),u=z(null),y=()=>{var a;e.autofocus&&((a=u.value)==null||a.focus())},d=()=>{if(e.autoresize){if(!u.value)return;u.value.rows=e.rows;const a=window.getComputedStyle(u.value),s=parseInt(a.paddingTop),i=parseInt(a.paddingBottom),k=s+i,T=parseInt(a.lineHeight),{scrollHeight:M}=u.value,w=(M-k)/T;w>e.rows&&(u.value.rows=w)}},b=a=>{n.value.trim&&(a=a.trim()),n.value.number&&(a=W(a)),t("update:modelValue",a),c()},S=a=>{d(),n.value.lazy||b(a.target.value)},h=a=>{const s=a.target.value;n.value.lazy&&b(s),n.value.trim&&(a.target.value=s.trim())},j=a=>{t("blur",a),p()};C(()=>{setTimeout(()=>{y()},e.autofocusDelay)}),F(()=>e.modelValue,()=>{A(d)}),C(()=>{setTimeout(()=>{y(),d()},100)});const O=D(()=>{var s,i;const a=((i=(s=l.value.color)==null?void 0:s[v.value])==null?void 0:i[e.variant])||l.value.variant[e.variant];return K(H(l.value.base,l.value.form,l.value.rounded,l.value.placeholder,l.value.size[g.value],e.padded?l.value.padding[g.value]:"p-0",a==null?void 0:a.replaceAll("{color}",v.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:l,attrs:m,name:I,inputId:r,textarea:u,textareaClass:O,onInput:S,onChange:h,onBlur:j}}}),Z=["id","value","name","rows","required","disabled","placeholder"];function x(e,t,l,m,p,c){return R(),E("div",{class:U(e.ui.wrapper)},[P("textarea",G({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:e.textareaClass},e.attrs,{onInput:t[0]||(t[0]=(...r)=>e.onInput&&e.onInput(...r)),onBlur:t[1]||(t[1]=(...r)=>e.onBlur&&e.onBlur(...r)),onChange:t[2]||(t[2]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,Z),J(e.$slots,"default")],2)}const re=V(Y,[["render",x]]);export{re as default};
