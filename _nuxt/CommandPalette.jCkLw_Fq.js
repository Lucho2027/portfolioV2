import xe from"./Icon.DjN1yknX.js";import ve from"./Button.zQGDrQch.js";import{r as H,X as Z,h as P,_ as Oe,s as _e,v as ce,g as Ne,x as le,l as ue,Q as Re,J as $e,y as W,o as R,f as T,w as X,A as $,K as G,b as Pe,G as he,a as Y,H as Be,I as Fe,F as Te,C as je,D as He,E as de,z as fe,as as ze,c as De,t as Ke}from"./entry.6DCbpbJ6.js";import{a as _,u as Ve}from"./index.W2KGQQdS.js";import We from"./CommandPaletteGroup.VsZ6Unz6.js";import{u as Ge}from"./selectMenu.ujytSHxk.js";import{J as Ue,Q as Qe,X as Je}from"./combobox.G_cjUJXA.js";import"./Icon.xIAEvO8R.js";import"./index.hPcBRl07.js";import"./Link.BYLpGnkU.js";import"./nuxt-link.sLzrs-nf.js";import"./tw-merge.euJ5FBpL.js";import"./useButtonGroup.soskKT5v.js";import"./button.ljqeEZC_.js";import"./Avatar.DNZWiWgN.js";import"./Kbd.mXC9O9kz.js";import"./dom.-23IbS2p.js";import"./use-tracked-pointer.iz_KlJLP.js";import"./focus-management.QREz2g2i.js";import"./open-closed.b5rQ_rEB.js";import"./use-resolve-button-type.X1ShLeUJ.js";import"./use-outside-click.Zr3GPOWL.js";import"./hidden.P8LM-BOL.js";import"./use-controllable.080HtL_q.js";import"./disposables.MoseSqH0.js";import"./micro-task.ZxAilEVg.js";const Xe={wrapper:"flex flex-col flex-1 min-h-0 divide-y divide-gray-100 dark:divide-gray-800",container:"relative flex-1 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800 scroll-py-2",input:{wrapper:"relative flex items-center",base:"w-full placeholder-gray-400 dark:placeholder-gray-500 bg-transparent border-0 text-gray-900 dark:text-white focus:ring-0 focus:outline-none",padding:"px-4",height:"h-12",size:"sm:text-sm",icon:{base:"pointer-events-none absolute start-4 text-gray-400 dark:text-gray-500",loading:"animate-spin",size:"h-4 w-4",padding:"ps-10"},closeButton:{base:"absolute end-4",padding:"pe-10"}},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",queryLabel:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},group:{wrapper:"p-2",label:"px-2 my-2 text-xs font-semibold text-gray-900 dark:text-white",container:"text-sm text-gray-700 dark:text-gray-200",command:{base:"flex justify-between select-none items-center rounded-md px-2 py-1.5 gap-2 relative",active:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactive:"",label:"flex items-center gap-1.5 min-w-0",prefix:"text-gray-400 dark:text-gray-500",suffix:"text-gray-400 dark:text-gray-500",container:"flex items-center gap-2 min-w-0",icon:{base:"flex-shrink-0 w-4 h-4",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{base:"h-4 w-4 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"3xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"},disabled:"opacity-50",shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5"},active:"flex-shrink-0 text-gray-500 dark:text-gray-400",inactive:"flex-shrink-0 text-gray-500 dark:text-gray-400"},default:{icon:"i-heroicons-magnifying-glass-20-solid",loadingIcon:"i-heroicons-arrow-path-20-solid",emptyState:{icon:"i-heroicons-magnifying-glass-20-solid",label:"We couldn't find any items.",queryLabel:"We couldn't find any items with that term. Please try again."},closeButton:null,selectedIcon:"i-heroicons-check-20-solid"}};function L(e){return Array.isArray?Array.isArray(e):we(e)==="[object Array]"}const Ye=1/0;function qe(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-Ye?"-0":t}function Ze(e){return e==null?"":qe(e)}function A(e){return typeof e=="string"}function Me(e){return typeof e=="number"}function et(e){return e===!0||e===!1||tt(e)&&we(e)=="[object Boolean]"}function Se(e){return typeof e=="object"}function tt(e){return Se(e)&&e!==null}function w(e){return e!=null}function q(e){return!e.trim().length}function we(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const st="Incorrect 'index' type",nt=e=>`Invalid value for key ${e}`,rt=e=>`Pattern length exceeds max of ${e}.`,it=e=>`Missing ${e} property in key`,ot=e=>`Property 'weight' in key '${e}' must be a positive integer`,pe=Object.prototype.hasOwnProperty;class at{constructor(t){this._keys=[],this._keyMap={};let s=0;t.forEach(n=>{let r=Ie(n);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ie(e){let t=null,s=null,n=null,r=1,i=null;if(A(e)||L(e))n=e,t=ge(e),s=ee(e);else{if(!pe.call(e,"name"))throw new Error(it("name"));const o=e.name;if(n=o,pe.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(ot(o));t=ge(o),s=ee(o),i=e.getFn}return{path:t,id:s,weight:r,src:n,getFn:i}}function ge(e){return L(e)?e:e.split(".")}function ee(e){return L(e)?e.join("."):e}function ct(e,t){let s=[],n=!1;const r=(i,o,a)=>{if(w(i))if(!o[a])s.push(i);else{let c=o[a];const l=i[c];if(!w(l))return;if(a===o.length-1&&(A(l)||Me(l)||et(l)))s.push(Ze(l));else if(L(l)){n=!0;for(let u=0,h=l.length;u<h;u+=1)r(l[u],o,a+1)}else o.length&&r(l,o,a+1)}};return r(e,A(t)?t.split("."):t,0),n?s:s[0]}const lt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ut={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},ht={location:0,threshold:.6,distance:100},dt={useExtendedSearch:!1,getFn:ct,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var d={...ut,...lt,...ht,...dt};const ft=/[^ ]+/g;function pt(e=1,t=3){const s=new Map,n=Math.pow(10,t);return{get(r){const i=r.match(ft).length;if(s.has(i))return s.get(i);const o=1/Math.pow(i,.5*e),a=parseFloat(Math.round(o*n)/n);return s.set(i,a),a},clear(){s.clear()}}}class oe{constructor({getFn:t=d.getFn,fieldNormWeight:s=d.fieldNormWeight}={}){this.norm=pt(s,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,A(this.docs[0])?this.docs.forEach((t,s)=>{this._addString(t,s)}):this.docs.forEach((t,s)=>{this._addObject(t,s)}),this.norm.clear())}add(t){const s=this.size();A(t)?this._addString(t,s):this._addObject(t,s)}removeAt(t){this.records.splice(t,1);for(let s=t,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(t,s){return t[this._keysMap[s]]}size(){return this.records.length}_addString(t,s){if(!w(t)||q(t))return;let n={v:t,i:s,n:this.norm.get(t)};this.records.push(n)}_addObject(t,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let o=r.getFn?r.getFn(t):this.getFn(t,r.path);if(w(o)){if(L(o)){let a=[];const c=[{nestedArrIndex:-1,value:o}];for(;c.length;){const{nestedArrIndex:l,value:u}=c.pop();if(w(u))if(A(u)&&!q(u)){let h={v:u,i:l,n:this.norm.get(u)};a.push(h)}else L(u)&&u.forEach((h,f)=>{c.push({nestedArrIndex:f,value:h})})}n.$[i]=a}else if(A(o)&&!q(o)){let a={v:o,n:this.norm.get(o)};n.$[i]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function ke(e,t,{getFn:s=d.getFn,fieldNormWeight:n=d.fieldNormWeight}={}){const r=new oe({getFn:s,fieldNormWeight:n});return r.setKeys(e.map(Ie)),r.setSources(t),r.create(),r}function gt(e,{getFn:t=d.getFn,fieldNormWeight:s=d.fieldNormWeight}={}){const{keys:n,records:r}=e,i=new oe({getFn:t,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(r),i}function U(e,{errors:t=0,currentLocation:s=0,expectedLocation:n=0,distance:r=d.distance,ignoreLocation:i=d.ignoreLocation}={}){const o=t/e.length;if(i)return o;const a=Math.abs(n-s);return r?o+a/r:a?1:o}function mt(e=[],t=d.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let o=e.length;i<o;i+=1){let a=e[i];a&&n===-1?n=i:!a&&n!==-1&&(r=i-1,r-n+1>=t&&s.push([n,r]),n=-1)}return e[i-1]&&i-n>=t&&s.push([n,i-1]),s}const B=32;function yt(e,t,s,{location:n=d.location,distance:r=d.distance,threshold:i=d.threshold,findAllMatches:o=d.findAllMatches,minMatchCharLength:a=d.minMatchCharLength,includeMatches:c=d.includeMatches,ignoreLocation:l=d.ignoreLocation}={}){if(t.length>B)throw new Error(rt(B));const u=t.length,h=e.length,f=Math.max(0,Math.min(n,h));let g=i,y=f;const v=a>1||c,C=v?Array(h):[];let k;for(;(k=e.indexOf(t,y))>-1;){let p=U(t,{currentLocation:k,expectedLocation:f,distance:r,ignoreLocation:l});if(g=Math.min(p,g),y=k+u,v){let m=0;for(;m<u;)C[k+m]=1,m+=1}}y=-1;let O=[],E=1,F=u+h;const J=1<<u-1;for(let p=0;p<u;p+=1){let m=0,x=F;for(;m<x;)U(t,{errors:p,currentLocation:f+x,expectedLocation:f,distance:r,ignoreLocation:l})<=g?m=x:F=x,x=Math.floor((F-m)/2+m);F=x;let b=Math.max(1,f-x+1),I=o?h:Math.min(f+x,h)+u,M=Array(I+2);M[I+1]=(1<<p)-1;for(let S=I;S>=b;S-=1){let V=S-1,ae=s[e.charAt(V)];if(v&&(C[V]=+!!ae),M[S]=(M[S+1]<<1|1)&ae,p&&(M[S]|=(O[S+1]|O[S])<<1|1|O[S+1]),M[S]&J&&(E=U(t,{errors:p,currentLocation:V,expectedLocation:f,distance:r,ignoreLocation:l}),E<=g)){if(g=E,y=V,y<=f)break;b=Math.max(1,2*f-y)}}if(U(t,{errors:p+1,currentLocation:f,expectedLocation:f,distance:r,ignoreLocation:l})>g)break;O=M}const D={isMatch:y>=0,score:Math.max(.001,E)};if(v){const p=mt(C,a);p.length?c&&(D.indices=p):D.isMatch=!1}return D}function bt(e){let t={};for(let s=0,n=e.length;s<n;s+=1){const r=e.charAt(s);t[r]=(t[r]||0)|1<<n-s-1}return t}class Ee{constructor(t,{location:s=d.location,threshold:n=d.threshold,distance:r=d.distance,includeMatches:i=d.includeMatches,findAllMatches:o=d.findAllMatches,minMatchCharLength:a=d.minMatchCharLength,isCaseSensitive:c=d.isCaseSensitive,ignoreLocation:l=d.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:l},this.pattern=c?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(f,g)=>{this.chunks.push({pattern:f,alphabet:bt(f),startIndex:g})},h=this.pattern.length;if(h>B){let f=0;const g=h%B,y=h-g;for(;f<y;)u(this.pattern.substr(f,B),f),f+=B;if(g){const v=h-B;u(this.pattern.substr(v),v)}}else u(this.pattern,0)}searchIn(t){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(t=t.toLowerCase()),this.pattern===t){let y={isMatch:!0,score:0};return n&&(y.indices=[[0,t.length-1]]),y}const{location:r,distance:i,threshold:o,findAllMatches:a,minMatchCharLength:c,ignoreLocation:l}=this.options;let u=[],h=0,f=!1;this.chunks.forEach(({pattern:y,alphabet:v,startIndex:C})=>{const{isMatch:k,score:O,indices:E}=yt(t,y,v,{location:r+C,distance:i,threshold:o,findAllMatches:a,minMatchCharLength:c,includeMatches:n,ignoreLocation:l});k&&(f=!0),h+=O,k&&E&&(u=[...u,...E])});let g={isMatch:f,score:f?h/this.chunks.length:1};return f&&n&&(g.indices=u),g}}class N{constructor(t){this.pattern=t}static isMultiMatch(t){return me(t,this.multiRegex)}static isSingleMatch(t){return me(t,this.singleRegex)}search(){}}function me(e,t){const s=e.match(t);return s?s[1]:null}class xt extends N{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const s=t===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class vt extends N{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Mt extends N{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const s=t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class St extends N{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const s=!t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class wt extends N{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const s=t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class It extends N{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const s=!t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class Ae extends N{constructor(t,{location:s=d.location,threshold:n=d.threshold,distance:r=d.distance,includeMatches:i=d.includeMatches,findAllMatches:o=d.findAllMatches,minMatchCharLength:a=d.minMatchCharLength,isCaseSensitive:c=d.isCaseSensitive,ignoreLocation:l=d.ignoreLocation}={}){super(t),this._bitapSearch=new Ee(t,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Ce extends N{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let s=0,n;const r=[],i=this.pattern.length;for(;(n=t.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const te=[xt,Ce,Mt,St,It,wt,vt,Ae],ye=te.length,kt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Et="|";function At(e,t={}){return e.split(Et).map(s=>{let n=s.trim().split(kt).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=n.length;i<o;i+=1){const a=n[i];let c=!1,l=-1;for(;!c&&++l<ye;){const u=te[l];let h=u.isMultiMatch(a);h&&(r.push(new u(h,t)),c=!0)}if(!c)for(l=-1;++l<ye;){const u=te[l];let h=u.isSingleMatch(a);if(h){r.push(new u(h,t));break}}}return r})}const Ct=new Set([Ae.type,Ce.type]);class Lt{constructor(t,{isCaseSensitive:s=d.isCaseSensitive,includeMatches:n=d.includeMatches,minMatchCharLength:r=d.minMatchCharLength,ignoreLocation:i=d.ignoreLocation,findAllMatches:o=d.findAllMatches,location:a=d.location,threshold:c=d.threshold,distance:l=d.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:a,threshold:c,distance:l},this.pattern=s?t:t.toLowerCase(),this.query=At(this.pattern,this.options)}static condition(t,s){return s.useExtendedSearch}searchIn(t){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let i=0,o=[],a=0;for(let c=0,l=s.length;c<l;c+=1){const u=s[c];o.length=0,i=0;for(let h=0,f=u.length;h<f;h+=1){const g=u[h],{isMatch:y,indices:v,score:C}=g.search(t);if(y){if(i+=1,a+=C,n){const k=g.constructor.type;Ct.has(k)?o=[...o,...v]:o.push(v)}}else{a=0,i=0,o.length=0;break}}if(i){let h={isMatch:!0,score:a/i};return n&&(h.indices=o),h}}return{isMatch:!1,score:1}}}const se=[];function Ot(...e){se.push(...e)}function ne(e,t){for(let s=0,n=se.length;s<n;s+=1){let r=se[s];if(r.condition(e,t))return new r(e,t)}return new Ee(e,t)}const Q={AND:"$and",OR:"$or"},re={PATH:"$path",PATTERN:"$val"},ie=e=>!!(e[Q.AND]||e[Q.OR]),_t=e=>!!e[re.PATH],Nt=e=>!L(e)&&Se(e)&&!ie(e),be=e=>({[Q.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Le(e,t,{auto:s=!0}={}){const n=r=>{let i=Object.keys(r);const o=_t(r);if(!o&&i.length>1&&!ie(r))return n(be(r));if(Nt(r)){const c=o?r[re.PATH]:i[0],l=o?r[re.PATTERN]:r[c];if(!A(l))throw new Error(nt(c));const u={keyId:ee(c),pattern:l};return s&&(u.searcher=ne(l,t)),u}let a={children:[],operator:i[0]};return i.forEach(c=>{const l=r[c];L(l)&&l.forEach(u=>{a.children.push(n(u))})}),a};return ie(e)||(e=be(e)),n(e)}function Rt(e,{ignoreFieldNorm:t=d.ignoreFieldNorm}){e.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:o})=>{const a=r?r.weight:null;n*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(t?1:i))}),s.score=n})}function $t(e,t){const s=e.matches;t.matches=[],w(s)&&s.forEach(n=>{if(!w(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let o={indices:r,value:i};n.key&&(o.key=n.key.src),n.idx>-1&&(o.refIndex=n.idx),t.matches.push(o)})}function Pt(e,t){t.score=e.score}function Bt(e,t,{includeMatches:s=d.includeMatches,includeScore:n=d.includeScore}={}){const r=[];return s&&r.push($t),n&&r.push(Pt),e.map(i=>{const{idx:o}=i,a={item:t[o],refIndex:o};return r.length&&r.forEach(c=>{c(i,a)}),a})}class z{constructor(t,s={},n){this.options={...d,...s},this.options.useExtendedSearch,this._keyStore=new at(this.options.keys),this.setCollection(t,n)}setCollection(t,s){if(this._docs=t,s&&!(s instanceof oe))throw new Error(st);this._myIndex=s||ke(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){w(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];t(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:a}=this.options;let c=A(t)?A(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Rt(c,{ignoreFieldNorm:a}),i&&c.sort(o),Me(s)&&s>-1&&(c=c.slice(0,s)),Bt(c,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(t){const s=ne(t,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:o,n:a})=>{if(!w(i))return;const{isMatch:c,score:l,indices:u}=s.searchIn(i);c&&r.push({item:i,idx:o,matches:[{score:l,value:i,norm:a,indices:u}]})}),r}_searchLogical(t){const s=Le(t,this.options),n=(a,c,l)=>{if(!a.children){const{keyId:h,searcher:f}=a,g=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(c,h),searcher:f});return g&&g.length?[{idx:l,item:c,matches:g}]:[]}const u=[];for(let h=0,f=a.children.length;h<f;h+=1){const g=a.children[h],y=n(g,c,l);if(y.length)u.push(...y);else if(a.operator===Q.AND)return[]}return u},r=this._myIndex.records,i={},o=[];return r.forEach(({$:a,i:c})=>{if(w(a)){let l=n(s,a,c);l.length&&(i[c]||(i[c]={idx:c,item:a,matches:[]},o.push(i[c])),l.forEach(({matches:u})=>{i[c].matches.push(...u)}))}}),o}_searchObjectList(t){const s=ne(t,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:a})=>{if(!w(o))return;let c=[];n.forEach((l,u)=>{c.push(...this._findMatches({key:l,value:o[u],searcher:s}))}),c.length&&i.push({idx:a,item:o,matches:c})}),i}_findMatches({key:t,value:s,searcher:n}){if(!w(s))return[];let r=[];if(L(s))s.forEach(({v:i,i:o,n:a})=>{if(!w(i))return;const{isMatch:c,score:l,indices:u}=n.searchIn(i);c&&r.push({score:l,key:t,value:i,idx:o,norm:a,indices:u})});else{const{v:i,n:o}=s,{isMatch:a,score:c,indices:l}=n.searchIn(i);a&&r.push({score:c,key:t,value:i,norm:o,indices:l})}return r}}z.version="6.6.2";z.createIndex=ke;z.parseIndex=gt;z.config=d;z.parseQuery=Le;Ot(Lt);function Ft(e,t,s){const n=()=>{var o,a;return new z((o=_(t))!=null?o:[],(a=_(s))==null?void 0:a.fuseOptions)},r=H(n());Z(()=>{var o;return(o=_(s))==null?void 0:o.fuseOptions},()=>{r.value=n()},{deep:!0}),Z(()=>_(t),o=>{r.value.setCollection(o)},{deep:!0});const i=P(()=>{const o=_(s);if(o!=null&&o.matchAllWhenSearchEmpty&&!_(e))return _(t).map((c,l)=>({item:c,refIndex:l}));const a=o==null?void 0:o.resultLimit;return r.value.search(_(e),a?{limit:a}:void 0)});return{fuse:r,results:i}}const j=_e(ce.ui.strategy,ce.ui.commandPalette,Xe),Tt=Ne({components:{HCombobox:Ue,HComboboxInput:Qe,HComboboxOptions:Je,UIcon:xe,UButton:ve,CommandPaletteGroup:We},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:null},by:{type:String,default:"id"},multiple:{type:Boolean,default:!1},nullable:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},groups:{type:Array,default:()=>[]},icon:{type:String,default:()=>j.default.icon},loadingIcon:{type:String,default:()=>j.default.loadingIcon},selectedIcon:{type:String,default:()=>j.default.selectedIcon},closeButton:{type:Object,default:()=>j.default.closeButton},emptyState:{type:Object,default:()=>j.default.emptyState},placeholder:{type:String,default:"Search..."},groupAttribute:{type:String,default:"label"},commandAttribute:{type:String,default:"label"},autoselect:{type:Boolean,default:!0},autoclear:{type:Boolean,default:!0},debounce:{type:Number,default:200},fuse:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close"],setup(e,{emit:t,expose:s}){const{ui:n,attrs:r}=Ge("commandPalette",le(e,"ui"),j,le(e,"class")),i=H(""),o=H(),a=H(null),c=H(!1);ue(()=>{e.autoselect&&F()}),ue(()=>{setTimeout(()=>{var x;const p=(x=o.value)==null?void 0:x.$.provides;if(!p)return;const m=Object.getOwnPropertySymbols(p);a.value=m.length&&p[m[0]]},200)});const l=P(()=>Re({},e.fuse,{fuseOptions:{keys:[e.commandAttribute]},resultLimit:12,matchAllWhenSearchEmpty:!0})),u=P(()=>{var m;const p=[];for(const x of e.groups)x.search||p.push(...((m=x.commands)==null?void 0:m.map(b=>({...b,group:x.key})))||[]);return p}),h=H({}),{results:f}=Ft(i,u,l);function g(p,m){if(p)return p.filter&&typeof p.filter=="function"&&(m=p.filter(i.value,m)),{...p,commands:m.slice(0,l.value.resultLimit)}}const y=P(()=>{if(!f.value)return[];const p=f.value.reduce((b,I)=>{var S;const{item:M,...K}=I;return M.group&&(b[S=M.group]||(b[S]=[]),b[M.group].push({...M,...K})),b},{}),m=Object.entries(p).map(([b,I])=>{const M=e.groups.find(K=>K.key===b);return M?g(M,I):null}).filter(Boolean),x=e.groups.filter(b=>{var I;return!!b.search&&((I=h.value[b.key])==null?void 0:I.length)}).map(b=>{const I=h.value[b.key]||[];return g(b,[...I])});return[...m,...x]}),v=Ve(async()=>{const p=e.groups.filter(m=>!!m.search);p.length&&(c.value=!0,await Promise.all(p.map(async m=>{h.value[m.key]=await m.search(i.value)})),c.value=!1,E())},e.debounce);Z(i,()=>{v(),E()});const C=P(()=>(e.loading||c.value)&&e.loadingIcon?e.loadingIcon:e.icon),k=P(()=>$e(n.value.input.icon.base,n.value.input.icon.size,(e.loading||c.value)&&e.loadingIcon&&n.value.input.icon.loading)),O=P(()=>({...n.value.default.emptyState,...e.emptyState}));function E(){setTimeout(()=>{var p;(p=o.value)==null||p.$el.dispatchEvent(new KeyboardEvent("keydown",{key:"PageUp"}))},0)}function F(){setTimeout(()=>{var p;(p=o.value)==null||p.$el.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowDown"}))},0)}function J(p){t("update:modelValue",p,{query:i.value}),e.autoclear&&setTimeout(()=>{i.value=""},0)}function D(){i.value?i.value="":t("close")}return s({query:i,updateQuery:p=>{i.value=p},comboboxApi:a,results:f}),{ui:n,attrs:r,groups:y,comboboxInput:o,query:i,iconName:C,iconClass:k,emptyState:O,onSelect:J,onClear:D}}});function jt(e,t,s,n,r,i){const o=xe,a=W("HComboboxInput"),c=ve,l=W("CommandPaletteGroup"),u=W("HComboboxOptions"),h=W("HCombobox");return R(),T(h,he({by:e.by,"model-value":e.modelValue,multiple:e.multiple,nullable:e.nullable,class:e.ui.wrapper},e.attrs,{as:"div","onUpdate:modelValue":e.onSelect}),{default:X(()=>[Fe(Y("div",{class:$(e.ui.input.wrapper)},[e.iconName?(R(),T(o,{key:0,name:e.iconName,class:$(e.iconClass),"aria-hidden":"true"},null,8,["name","class"])):G("",!0),Pe(a,{ref:"comboboxInput",value:e.query,class:$([e.ui.input.base,e.ui.input.size,e.ui.input.height,e.ui.input.padding,e.icon&&e.ui.input.icon.padding,e.closeButton&&e.ui.input.closeButton.padding]),placeholder:e.placeholder,"aria-label":e.placeholder,autocomplete:"off",onChange:t[0]||(t[0]=f=>e.query=f.target.value)},null,8,["value","class","placeholder","aria-label"]),e.closeButton?(R(),T(c,he({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{class:e.ui.input.closeButton.base,onClick:e.onClear}),null,16,["class","onClick"])):G("",!0)],2),[[Be,e.searchable]]),e.groups.length?(R(),T(u,{key:0,static:"",hold:"",as:"div","aria-label":"Commands",class:$(e.ui.container)},{default:X(()=>[(R(!0),De(Te,null,fe(e.groups,f=>(R(),T(l,{key:f.key,query:e.query,group:f,"group-attribute":e.groupAttribute,"command-attribute":e.commandAttribute,"selected-icon":e.selectedIcon,ui:e.ui},ze({_:2},[fe(e.$slots,(g,y)=>({name:y,fn:X(v=>[de(e.$slots,y,He(je(v)))])}))]),1032,["query","group","group-attribute","command-attribute","selected-icon","ui"]))),128))]),_:3},8,["class"])):e.emptyState?de(e.$slots,"empty-state",{key:1},()=>[Y("div",{class:$(e.ui.emptyState.wrapper)},[e.emptyState.icon?(R(),T(o,{key:0,name:e.emptyState.icon,class:$(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):G("",!0),Y("p",{class:$(e.query?e.ui.emptyState.queryLabel:e.ui.emptyState.label)},Ke(e.query?e.emptyState.queryLabel:e.emptyState.label),3)],2)]):G("",!0)]),_:3},16,["by","model-value","multiple","nullable","class","onUpdate:modelValue"])}const ds=Oe(Tt,[["render",jt]]);export{ds as default};