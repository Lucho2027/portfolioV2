import{_ as C,q as w,s as c,h as q,v as b,n as V,r as j,k as B,j as y,I as $,o,c as s,a as u,H as I,U as N,E as O,z as l,D as A,d as M,t as v,J as d}from"./entry.VJkcEQ3a.js";import{t as R}from"./tw-merge.N1_sWVtP.js";import{u as z}from"./selectMenu.CPVhT6WU.js";import{u as D}from"./uid.RBzw2_Kg.js";import{u as U}from"./useFormGroup.Qq5te_I9.js";const E={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-radio",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},f=w(c.ui.strategy,c.ui.radio,E),F=q({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean],default:null},modelValue:{type:[String,Number,Boolean,Object],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>f.default.color,validator(e){return c.ui.colors.includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{ui:r,attrs:p}=z("radio",b(e,"ui"),f,b(e,"class")),i=V("radio-group",null),{emitFormChange:g,color:a,name:k}=i??U(e,f),n=j(e.id);B(()=>{n.value||(n.value=D())});const h=y({get(){return e.modelValue},set(m){t("update:modelValue",m),t("change",m),i||g()}}),S=y(()=>R($(r.value.base,r.value.form,r.value.background,r.value.border,a.value&&r.value.ring.replaceAll("{color}",a.value),a.value&&r.value.color.replaceAll("{color}",a.value)),e.inputClass));return{inputId:n,ui:r,attrs:p,pick:h,name:k,inputClass:S}}}),G=["id","name","required","value","disabled"],J=["for"];function P(e,t,r,p,i,g){return o(),s("div",{class:l(e.ui.wrapper)},[u("div",{class:l(e.ui.container)},[I(u("input",O({id:e.inputId,"onUpdate:modelValue":t[0]||(t[0]=a=>e.pick=a),name:e.name,required:e.required,value:e.value,disabled:e.disabled,type:"radio",class:e.inputClass},e.attrs),null,16,G),[[N,e.pick]])],2),e.label||e.$slots.label?(o(),s("div",{key:0,class:l(e.ui.inner)},[u("label",{for:e.inputId,class:l(e.ui.label)},[A(e.$slots,"label",{},()=>[M(v(e.label),1)]),e.required?(o(),s("span",{key:0,class:l(e.ui.required)},"*",2)):d("",!0)],10,J),e.help?(o(),s("p",{key:0,class:l(e.ui.help)},v(e.help),3)):d("",!0)],2)):d("",!0)],2)}const T=C(F,[["render",P]]),X=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));export{X as R,T as _,E as r};
