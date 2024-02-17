import{r as i,R as k}from"./react-G0VBmWxS.js";import{R as z}from"./react-dom-wkoTY-Le.js";import{m as A,D as B,a as N,R as H,u as Y}from"./react-router-kmEdF07T.js";import{c as q,b as G,E as J}from"./@remix-run-EOO7uaRF.js";/**
 * React Router DOM v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function E(){return E=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},E.apply(this,arguments)}function oe(t,n){return q({basename:n==null?void 0:n.basename,future:E({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:G({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||K(),routes:t,mapRouteProperties:A,window:n==null?void 0:n.window}).initialize()}function K(){var t;let n=(t=window)==null?void 0:t.__staticRouterHydrationData;return n&&n.errors&&(n=E({},n,{errors:Q(n.errors)})),n}function Q(t){if(!t)return null;let n=Object.entries(t),e={};for(let[a,r]of n)if(r&&r.__type==="RouteErrorResponse")e[a]=new J(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let l=window[r.__subType];if(typeof l=="function")try{let u=new l(r.message);u.stack="",e[a]=u}catch{}}if(e[a]==null){let l=new Error(r.message);l.stack="",e[a]=l}}else e[a]=r;return e}const W=i.createContext({isTransitioning:!1}),X=i.createContext(new Map),Z="startTransition",O=k[Z],$="flushSync",D=z[$];function ee(t){O?O(t):t()}function S(t){D?D(t):t()}class te{constructor(){this.status="pending",this.promise=new Promise((n,e)=>{this.resolve=a=>{this.status==="pending"&&(this.status="resolved",n(a))},this.reject=a=>{this.status==="pending"&&(this.status="rejected",e(a))}})}}function le(t){let{fallbackElement:n,router:e,future:a}=t,[r,l]=i.useState(e.state),[u,T]=i.useState(),[m,p]=i.useState({isTransitioning:!1}),[o,b]=i.useState(),[w,y]=i.useState(),[h,_]=i.useState(),g=i.useRef(new Map),{v7_startTransition:C}=a||{},R=i.useCallback(s=>{C?ee(s):s()},[C]),F=i.useCallback((s,f)=>{let{deletedFetchers:c,unstable_flushSync:P,unstable_viewTransitionOpts:d}=f;c.forEach(v=>g.current.delete(v)),s.fetchers.forEach((v,M)=>{v.data!==void 0&&g.current.set(M,v.data)});let j=e.window==null||typeof e.window.document.startViewTransition!="function";if(!d||j){P?S(()=>l(s)):R(()=>l(s));return}if(P){S(()=>{w&&(o&&o.resolve(),w.skipTransition()),p({isTransitioning:!0,flushSync:!0,currentLocation:d.currentLocation,nextLocation:d.nextLocation})});let v=e.window.document.startViewTransition(()=>{S(()=>l(s))});v.finished.finally(()=>{S(()=>{b(void 0),y(void 0),T(void 0),p({isTransitioning:!1})})}),S(()=>y(v));return}w?(o&&o.resolve(),w.skipTransition(),_({state:s,currentLocation:d.currentLocation,nextLocation:d.nextLocation})):(T(s),p({isTransitioning:!0,flushSync:!1,currentLocation:d.currentLocation,nextLocation:d.nextLocation}))},[e.window,w,o,g,R]);i.useLayoutEffect(()=>e.subscribe(F),[e,F]),i.useEffect(()=>{m.isTransitioning&&!m.flushSync&&b(new te)},[m]),i.useEffect(()=>{if(o&&u&&e.window){let s=u,f=o.promise,c=e.window.document.startViewTransition(async()=>{R(()=>l(s)),await f});c.finished.finally(()=>{b(void 0),y(void 0),T(void 0),p({isTransitioning:!1})}),y(c)}},[R,u,o,e.window]),i.useEffect(()=>{o&&u&&r.location.key===u.location.key&&o.resolve()},[o,w,r.location,u]),i.useEffect(()=>{!m.isTransitioning&&h&&(T(h.state),p({isTransitioning:!0,flushSync:!1,currentLocation:h.currentLocation,nextLocation:h.nextLocation}),_(void 0))},[m.isTransitioning,h]);let x=i.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:s=>e.navigate(s),push:(s,f,c)=>e.navigate(s,{state:f,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(s,f,c)=>e.navigate(s,{replace:!0,state:f,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[e]),L=e.basename||"/",V=i.useMemo(()=>({router:e,navigator:x,static:!1,basename:L}),[e,x,L]);return i.createElement(i.Fragment,null,i.createElement(B.Provider,{value:V},i.createElement(N.Provider,{value:r},i.createElement(X.Provider,{value:g.current},i.createElement(W.Provider,{value:m},i.createElement(H,{basename:L,location:r.location,navigationType:r.historyAction,navigator:x},r.initialized?i.createElement(ne,{routes:e.routes,state:r}):n))))),null)}function ne(t){let{routes:n,state:e}=t;return Y(n,void 0,e)}var I;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(I||(I={}));var U;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(U||(U={}));export{le as R,oe as c};