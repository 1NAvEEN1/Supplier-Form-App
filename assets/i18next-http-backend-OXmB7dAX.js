import{c as b,e as F}from"./@babel-NW1fUnrK.js";import{r as I}from"./cross-fetch-vk9QzRH8.js";function U(o,e){for(var n=0;n<e.length;n++){const t=e[n];if(typeof t!="string"&&!Array.isArray(t)){for(const i in t)if(i!=="default"&&!(i in o)){const r=Object.getOwnPropertyDescriptor(t,i);r&&Object.defineProperty(o,i,r.get?r:{enumerable:!0,get:()=>t[i]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}function w(o){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(o)}var X=[],D=X.forEach,N=X.slice;function q(o){return D.call(N.call(arguments,1),function(e){if(e)for(var n in e)o[n]===void 0&&(o[n]=e[n])}),o}function A(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":w(XMLHttpRequest))==="object"}function W(o){return!!o&&typeof o.then=="function"}function B(o){return W(o)?o:Promise.resolve(o)}function $(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var O={exports:{}};(function(o,e){var n;if(typeof fetch=="function"&&(typeof b<"u"&&b.fetch?n=b.fetch:typeof window<"u"&&window.fetch?n=window.fetch:n=fetch),typeof $<"u"&&(typeof window>"u"||typeof window.document>"u")){var t=n||I();t.default&&(t=t.default),e.default=t,o.exports=e.default}})(O,O.exports);var M=O.exports;const T=F(M),j=U({__proto__:null,default:T},[M]);function m(o){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(o)}var y;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?y=global.fetch:typeof window<"u"&&window.fetch?y=window.fetch:y=fetch);var h;A()&&(typeof global<"u"&&global.XMLHttpRequest?h=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(h=window.XMLHttpRequest));var g;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?g=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(g=window.ActiveXObject));!y&&j&&!h&&!g&&(y=T||j);typeof y!="function"&&(y=void 0);var P=function(e,n){if(n&&m(n)==="object"){var t="";for(var i in n)t+="&"+encodeURIComponent(i)+"="+encodeURIComponent(n[i]);if(!t)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+t.slice(1)}return e},_=function(e,n,t){var i=function(f){if(!f.ok)return t(f.statusText||"Error",{status:f.status});f.text().then(function(a){t(null,{status:f.status,data:a})}).catch(t)};typeof fetch=="function"?fetch(e,n).then(i).catch(t):y(e,n).then(i).catch(t)},H=!1,x=function(e,n,t,i){e.queryStringParams&&(n=P(n,e.queryStringParams));var r=q({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(r["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),t&&(r["Content-Type"]="application/json");var f=typeof e.requestOptions=="function"?e.requestOptions(t):e.requestOptions,a=q({method:t?"POST":"GET",body:t?e.stringify(t):void 0,headers:r},H?{}:f);try{_(n,a,i)}catch(c){if(!f||Object.keys(f).length===0||!c.message||c.message.indexOf("not implemented")<0)return i(c);try{Object.keys(f).forEach(function(d){delete a[d]}),_(n,a,i),H=!0}catch(d){i(d)}}},G=function(e,n,t,i){t&&m(t)==="object"&&(t=P("",t).slice(1)),e.queryStringParams&&(n=P(n,e.queryStringParams));try{var r;h?r=new h:r=new g("MSXML2.XMLHTTP.3.0"),r.open(t?"POST":"GET",n,1),e.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!e.withCredentials,t&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");var f=e.customHeaders;if(f=typeof f=="function"?f():f,f)for(var a in f)r.setRequestHeader(a,f[a]);r.onreadystatechange=function(){r.readyState>3&&i(r.status>=400?r.statusText:null,{status:r.status,data:r.responseText})},r.send(t)}catch(c){console&&console.log(c)}},J=function(e,n,t,i){if(typeof t=="function"&&(i=t,t=void 0),i=i||function(){},y&&n.indexOf("file:")!==0)return x(e,n,t,i);if(A()||typeof ActiveXObject=="function")return G(e,n,t,i);i(new Error("No fetch and no xhr implementation found!"))};function v(o){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(o)}function Q(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function R(o,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,E(t.key),t)}}function z(o,e,n){return e&&R(o.prototype,e),n&&R(o,n),Object.defineProperty(o,"prototype",{writable:!1}),o}function K(o,e,n){return e=E(e),e in o?Object.defineProperty(o,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[e]=n,o}function E(o){var e=k(o,"string");return v(e)==="symbol"?e:String(e)}function k(o,e){if(v(o)!=="object"||o===null)return o;var n=o[Symbol.toPrimitive];if(n!==void 0){var t=n.call(o,e||"default");if(v(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}var V=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,t,i){return K({},t,i||"")},parseLoadPayload:function(n,t){},request:J,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Y=function(){function o(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Q(this,o),this.services=e,this.options=n,this.allOptions=t,this.type="backend",this.init(e,n,t)}return z(o,[{key:"init",value:function(n){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=n,this.options=q(i,this.options||{},V()),this.allOptions=r,this.services&&this.options.reloadInterval&&setInterval(function(){return t.reload()},this.options.reloadInterval)}},{key:"readMulti",value:function(n,t,i){this._readAny(n,n,t,t,i)}},{key:"read",value:function(n,t,i){this._readAny([n],n,[t],t,i)}},{key:"_readAny",value:function(n,t,i,r,f){var a=this,c=this.options.loadPath;typeof this.options.loadPath=="function"&&(c=this.options.loadPath(n,i)),c=B(c),c.then(function(d){if(!d)return f(null,{});var u=a.services.interpolator.interpolate(d,{lng:n.join("+"),ns:i.join("+")});a.loadUrl(u,f,t,r)})}},{key:"loadUrl",value:function(n,t,i,r){var f=this,a=typeof i=="string"?[i]:i,c=typeof r=="string"?[r]:r,d=this.options.parseLoadPayload(a,c);this.options.request(this.options,n,d,function(u,s){if(s&&(s.status>=500&&s.status<600||!s.status))return t("failed loading "+n+"; status code: "+s.status,!0);if(s&&s.status>=400&&s.status<500)return t("failed loading "+n+"; status code: "+s.status,!1);if(!s&&u&&u.message&&u.message.indexOf("Failed to fetch")>-1)return t("failed loading "+n+": "+u.message,!0);if(u)return t(u,!1);var l,p;try{typeof s.data=="string"?l=f.options.parse(s.data,i,r):l=s.data}catch{p="failed parsing "+n+" to json"}if(p)return t(p,!1);t(null,l)})}},{key:"create",value:function(n,t,i,r,f){var a=this;if(this.options.addPath){typeof n=="string"&&(n=[n]);var c=this.options.parsePayload(t,i,r),d=0,u=[],s=[];n.forEach(function(l){var p=a.options.addPath;typeof a.options.addPath=="function"&&(p=a.options.addPath(l,t));var S=a.services.interpolator.interpolate(p,{lng:l,ns:t});a.options.request(a.options,S,c,function(L,C){d+=1,u.push(L),s.push(C),d===n.length&&typeof f=="function"&&f(u,s)})})}}},{key:"reload",value:function(){var n=this,t=this.services,i=t.backendConnector,r=t.languageUtils,f=t.logger,a=i.language;if(!(a&&a.toLowerCase()==="cimode")){var c=[],d=function(s){var l=r.toResolveHierarchy(s);l.forEach(function(p){c.indexOf(p)<0&&c.push(p)})};d(a),this.allOptions.preload&&this.allOptions.preload.forEach(function(u){return d(u)}),c.forEach(function(u){n.allOptions.ns.forEach(function(s){i.read(u,s,"read",null,null,function(l,p){l&&f.warn("loading namespace ".concat(s," for language ").concat(u," failed"),l),!l&&p&&f.log("loaded namespace ".concat(s," for language ").concat(u),p),i.loaded("".concat(u,"|").concat(s),l,p)})})})}}}]),o}();Y.type="backend";export{Y as B};
