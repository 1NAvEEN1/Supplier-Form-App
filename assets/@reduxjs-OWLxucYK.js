import{i as P,c as N,a as $,b as q,d as R,e as L}from"./redux-vWdE9iQ8.js";import{i as O,c as U,a as j,p as A}from"./immer-2VFgZgpn.js";import{c as z,w as F}from"./reselect-knrTZChY.js";import{t as X,w as W}from"./redux-thunk-qyK_zz9Y.js";var G=(...e)=>{const t=z(...e);return(...n)=>{const i=t(...n),r=(c,...s)=>i(O(c)?U(c):c,...s);return Object.assign(r,i),r}};G(F);var H=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?R:R.apply(null,arguments)};function D(e,t){function n(...i){if(t){let r=t(...i);if(!r)throw new Error(w(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:i[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=i=>L(i)&&i.type===e,n}var x=class T extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,T.prototype)}static get[Symbol.species](){return T}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new T(...t[0].concat(this)):new T(...t.concat(this))}};function v(e){return j(e)?A(e,()=>{}):e}function _(e,t,n){if(e.has(t)){let r=e.get(t);return n.update&&(r=n.update(r,t,e),e.set(t,r)),r}if(!n.insert)throw new Error(w(10));const i=n.insert(t,e);return e.set(t,i),i}function Q(e){return typeof e=="boolean"}var V=()=>function(t){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:r=!0,actionCreatorCheck:c=!0}=t??{};let s=new x;return n&&(Q(n)?s.push(X):s.push(W(n.extraArgument))),s},Y="RTK_autoBatch",B=e=>t=>{setTimeout(t,e)},K=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:B(10),J=(e={type:"raf"})=>t=>(...n)=>{const i=t(...n);let r=!0,c=!1,s=!1;const o=new Set,h=e.type==="tick"?queueMicrotask:e.type==="raf"?K:e.type==="callback"?e.queueNotification:B(e.timeout),f=()=>{s=!1,c&&(c=!1,o.forEach(a=>a()))};return Object.assign({},i,{subscribe(a){const l=()=>r&&a(),y=i.subscribe(l);return o.add(a),()=>{y(),o.delete(a)}},dispatch(a){var l;try{return r=!((l=a==null?void 0:a.meta)!=null&&l[Y]),c=!r,c&&(s||(s=!0,h(f))),i.dispatch(a)}finally{r=!0}}})},Z=e=>function(n){const{autoBatch:i=!0}=n??{};let r=new x(e);return i&&r.push(J(typeof i=="object"?i:void 0)),r},ee=!0;function we(e){const t=V(),{reducer:n=void 0,middleware:i,devTools:r=!0,preloadedState:c=void 0,enhancers:s=void 0}=e||{};let o;if(typeof n=="function")o=n;else if(P(n))o=N(n);else throw new Error(w(1));let h;typeof i=="function"?h=i(t):h=t();let f=R;r&&(f=H({trace:!ee,...typeof r=="object"&&r}));const a=$(...h),l=Z(a);let y=typeof s=="function"?s(l):l();const g=f(...y);return q(o,c,g)}function I(e){const t={},n=[];let i;const r={addCase(c,s){const o=typeof c=="string"?c:c.type;if(!o)throw new Error(w(28));if(o in t)throw new Error(w(29));return t[o]=s,r},addMatcher(c,s){return n.push({matcher:c,reducer:s}),r},addDefaultCase(c){return i=c,r}};return e(r),[t,n,i]}function te(e){return typeof e=="function"}function re(e,t){let[n,i,r]=I(t),c;if(te(e))c=()=>v(e());else{const o=v(e);c=()=>o}function s(o=c(),h){let f=[n[h.type],...i.filter(({matcher:a})=>a(h)).map(({reducer:a})=>a)];return f.filter(a=>!!a).length===0&&(f=[r]),f.reduce((a,l)=>{if(l)if(O(a)){const g=l(a,h);return g===void 0?a:g}else{if(j(a))return A(a,y=>l(y,h));{const y=l(a,h);if(y===void 0){if(a===null)return a;throw new Error(w(9))}return y}}return a},o)}return s.getInitialState=c,s}var ne=Symbol.for("rtk-slice-createasyncthunk");function ie(e,t){return`${e}/${t}`}function ce({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[ne];return function(r){const{name:c,reducerPath:s=c}=r;if(!c)throw new Error(w(11));typeof process<"u";const o=(typeof r.reducers=="function"?r.reducers(se()):r.reducers)||{},h=Object.keys(o),f={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},a={addCase(u,d){const p=typeof u=="string"?u:u.type;if(!p)throw new Error(w(12));if(p in f.sliceCaseReducersByType)throw new Error(w(13));return f.sliceCaseReducersByType[p]=d,a},addMatcher(u,d){return f.sliceMatchers.push({matcher:u,reducer:d}),a},exposeAction(u,d){return f.actionCreators[u]=d,a},exposeCaseReducer(u,d){return f.sliceCaseReducersByName[u]=d,a}};h.forEach(u=>{const d=o[u],p={reducerName:u,type:ie(c,u),createNotation:typeof r.reducers=="function"};ue(d)?fe(p,d,a,t):oe(p,d,a)});function l(){const[u={},d=[],p=void 0]=typeof r.extraReducers=="function"?I(r.extraReducers):[r.extraReducers],C={...u,...f.sliceCaseReducersByType};return re(r.initialState,E=>{for(let m in C)E.addCase(m,C[m]);for(let m of f.sliceMatchers)E.addMatcher(m.matcher,m.reducer);for(let m of d)E.addMatcher(m.matcher,m.reducer);p&&E.addDefaultCase(p)})}const y=u=>u,g=new WeakMap;let S;const b={name:c,reducerPath:s,reducer(u,d){return S||(S=l()),S(u,d)},actions:f.actionCreators,caseReducers:f.sliceCaseReducersByName,getInitialState(){return S||(S=l()),S.getInitialState()},getSelectors(u=y){const d=_(g,this,{insert:()=>new WeakMap});return _(d,u,{insert:()=>{const p={};for(const[C,E]of Object.entries(r.selectors??{}))p[C]=ae(this,E,u,this!==b);return p}})},selectSlice(u){let d=u[this.reducerPath];return typeof d>"u"&&this!==b&&(d=this.getInitialState()),d},get selectors(){return this.getSelectors(this.selectSlice)},injectInto(u,{reducerPath:d,...p}={}){const C=d??this.reducerPath;return u.inject({reducerPath:C,reducer:this.reducer},p),{...this,reducerPath:C}}};return b}}function ae(e,t,n,i){function r(c,...s){let o=n.call(e,c);return typeof o>"u"&&i&&(o=e.getInitialState()),t(o,...s)}return r.unwrapped=t,r}var me=ce();function se(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function oe({type:e,reducerName:t,createNotation:n},i,r){let c,s;if("reducer"in i){if(n&&!de(i))throw new Error(w(17));c=i.reducer,s=i.prepare}else c=i;r.addCase(e,c).exposeCaseReducer(t,c).exposeAction(t,s?D(e,s):D(e))}function ue(e){return e._reducerDefinitionType==="asyncThunk"}function de(e){return e._reducerDefinitionType==="reducerWithPrepare"}function fe({type:e,reducerName:t},n,i,r){if(!r)throw new Error(w(18));const{payloadCreator:c,fulfilled:s,pending:o,rejected:h,settled:f,options:a}=n,l=r(e,c,a);i.exposeAction(t,l),s&&i.addCase(l.fulfilled,s),o&&i.addCase(l.pending,o),h&&i.addCase(l.rejected,h),f&&i.addMatcher(l.settled,f),i.exposeCaseReducer(t,{fulfilled:s||M,pending:o||M,rejected:h||M,settled:f||M})}function M(){}var k="listenerMiddleware";D(`${k}/add`);D(`${k}/removeAll`);D(`${k}/remove`);function w(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}export{we as a,me as c};