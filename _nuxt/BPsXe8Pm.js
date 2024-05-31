import V from"./CI8bNh2c.js";import{_ as P,v as X,x as f,f as H,y as j,g as i,r as $,R as Q,m as Y,J as Z,K as c,o as y,c as I,a as _,G as x,E as b,C as g,b as k,L as O,X as ee}from"./Cp_qYibV.js";import{i as ae,u as le}from"./HsAOjbzS.js";import{u as ne}from"./BK9K1Gr-.js";import{a as ie}from"./BwpL-CON.js";import"./D0Yc7C7L.js";import"./BQkc-AXV.js";const t=X(f.ui.strategy,f.ui.input,ae),te=H({components:{UIcon:V},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>t.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(t.size).includes(e)}},color:{type:String,default:()=>t.default.color,validator(e){return[...f.ui.colors,...Object.keys(t.color)].includes(e)}},variant:{type:String,default:()=>t.default.variant,validator(e){return[...Object.keys(t.variant),...Object.values(t.color).flatMap(n=>Object.keys(n))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:n,slots:p}){const{ui:a,attrs:C}=le("input",j(e,"ui"),t,j(e,"class")),{size:B,rounded:v}=ie({ui:a,props:e}),{emitFormBlur:s,emitFormInput:M,size:w,color:o,inputId:A,name:F}=ne(e,t),u=i(()=>B.value||w.value),d=$(Q({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),S=$(null),G=()=>{var l;e.autofocus&&((l=S.value)==null||l.focus())},z=l=>{d.value.trim&&(l=l.trim()),(d.value.number||e.type==="number")&&(l=ee(l)),n("update:modelValue",l),M()},q=l=>{d.value.lazy||z(l.target.value)},T=l=>{if(e.type==="file"){const r=l.target.files;n("change",r)}else{const r=l.target.value;n("change",r),d.value.lazy&&z(r),d.value.trim&&(l.target.value=r.trim())}},W=l=>{s(),n("blur",l)};Y(()=>{setTimeout(()=>{G()},e.autofocusDelay)});const L=i(()=>{var r,h;const l=((h=(r=a.value.color)==null?void 0:r[o.value])==null?void 0:h[e.variant])||a.value.variant[e.variant];return Z(c(a.value.base,a.value.form,v.value,a.value.placeholder,e.type==="file"&&a.value.file.base,a.value.size[u.value],e.padded?a.value.padding[u.value]:"p-0",l==null?void 0:l.replaceAll("{color}",o.value),(m.value||p.leading)&&a.value.leading.padding[u.value],(N.value||p.trailing)&&a.value.trailing.padding[u.value]),e.inputClass)}),m=i(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),N=i(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),U=i(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),D=i(()=>e.loading&&!m.value?e.loadingIcon:e.trailingIcon||e.icon),E=i(()=>c(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[u.value])),J=i(()=>c(a.value.icon.base,o.value&&f.ui.colors.includes(o.value)&&a.value.icon.color.replaceAll("{color}",o.value),a.value.icon.size[u.value],e.loading&&a.value.icon.loading)),R=i(()=>c(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[u.value])),K=i(()=>c(a.value.icon.base,o.value&&f.ui.colors.includes(o.value)&&a.value.icon.color.replaceAll("{color}",o.value),a.value.icon.size[u.value],e.loading&&!m.value&&a.value.icon.loading));return{ui:a,attrs:C,name:F,inputId:A,input:S,isLeading:m,isTrailing:N,inputClass:L,leadingIconName:U,leadingIconClass:J,leadingWrapperIconClass:E,trailingIconName:D,trailingIconClass:K,trailingWrapperIconClass:R,onInput:q,onChange:T,onBlur:W}}}),oe=["id","name","value","type","required","placeholder","disabled"];function ue(e,n,p,a,C,B){const v=V;return y(),I("div",{class:g(e.ui.wrapper)},[_("input",x({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.attrs,{onInput:n[0]||(n[0]=(...s)=>e.onInput&&e.onInput(...s)),onBlur:n[1]||(n[1]=(...s)=>e.onBlur&&e.onBlur(...s)),onChange:n[2]||(n[2]=(...s)=>e.onChange&&e.onChange(...s))}),null,16,oe),b(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(y(),I("span",{key:0,class:g(e.leadingWrapperIconClass)},[b(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[k(v,{name:e.leadingIconName,class:g(e.leadingIconClass)},null,8,["name","class"])])],2)):O("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(y(),I("span",{key:1,class:g(e.trailingWrapperIconClass)},[b(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[k(v,{name:e.trailingIconName,class:g(e.trailingIconClass)},null,8,["name","class"])])],2)):O("",!0)],2)}const me=P(te,[["render",ue]]);export{me as default};
