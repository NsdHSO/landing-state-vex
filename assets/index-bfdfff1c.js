(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();function Ia(c,e){const t=Object.create(null),a=c.split(",");for(let n=0;n<a.length;n++)t[a[n]]=!0;return e?n=>!!t[n.toLowerCase()]:n=>!!t[n]}const b2={},l6=[],q1=()=>{},YV=()=>!1,QV=/^on[^a-z]/,sc=c=>QV.test(c),Pa=c=>c.startsWith("onUpdate:"),$2=Object.assign,Ra=(c,e)=>{const t=c.indexOf(e);t>-1&&c.splice(t,1)},XV=Object.prototype.hasOwnProperty,h2=(c,e)=>XV.call(c,e),Q=Array.isArray,f6=c=>ic(c)==="[object Map]",J9=c=>ic(c)==="[object Set]",s2=c=>typeof c=="function",I2=c=>typeof c=="string",Da=c=>typeof c=="symbol",k2=c=>c!==null&&typeof c=="object",Z9=c=>k2(c)&&s2(c.then)&&s2(c.catch),eo=Object.prototype.toString,ic=c=>eo.call(c),JV=c=>ic(c).slice(8,-1),co=c=>ic(c)==="[object Object]",Oa=c=>I2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,u8=Ia(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oc=c=>{const e=Object.create(null);return t=>e[t]||(e[t]=c(t))},ZV=/-(\w)/g,l3=oc(c=>c.replace(ZV,(e,t)=>t?t.toUpperCase():"")),eC=/\B([A-Z])/g,_6=oc(c=>c.replace(eC,"-$1").toLowerCase()),lc=oc(c=>c.charAt(0).toUpperCase()+c.slice(1)),xt=oc(c=>c?`on${lc(c)}`:""),be=(c,e)=>!Object.is(c,e),h8=(c,e)=>{for(let t=0;t<c.length;t++)c[t](e)},w8=(c,e,t)=>{Object.defineProperty(c,e,{configurable:!0,enumerable:!1,value:t})},H5=c=>{const e=parseFloat(c);return isNaN(e)?c:e},cC=c=>{const e=I2(c)?Number(c):NaN;return isNaN(e)?c:e};let Fr;const z5=()=>Fr||(Fr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fa(c){if(Q(c)){const e={};for(let t=0;t<c.length;t++){const a=c[t],n=I2(a)?rC(a):Fa(a);if(n)for(const r in n)e[r]=n[r]}return e}else{if(I2(c))return c;if(k2(c))return c}}const tC=/;(?![^(]*\))/g,aC=/:([^]+)/,nC=/\/\*[^]*?\*\//g;function rC(c){const e={};return c.replace(nC,"").split(tC).forEach(t=>{if(t){const a=t.split(aC);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e}function fc(c){let e="";if(I2(c))e=c;else if(Q(c))for(let t=0;t<c.length;t++){const a=fc(c[t]);a&&(e+=a+" ")}else if(k2(c))for(const t in c)c[t]&&(e+=t+" ");return e.trim()}const sC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iC=Ia(sC);function to(c){return!!c||c===""}const oe=c=>I2(c)?c:c==null?"":Q(c)||k2(c)&&(c.toString===eo||!s2(c.toString))?JSON.stringify(c,ao,2):String(c),ao=(c,e)=>e&&e.__v_isRef?ao(c,e.value):f6(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[a,n])=>(t[`${a} =>`]=n,t),{})}:J9(e)?{[`Set(${e.size})`]:[...e.values()]}:k2(e)&&!Q(e)&&!co(e)?String(e):e;let b1;class no{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=b1,!e&&b1&&(this.index=(b1.scopes||(b1.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=b1;try{return b1=this,e()}finally{b1=t}}}on(){b1=this}off(){b1=this.parent}stop(e){if(this._active){let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function ro(c){return new no(c)}function oC(c,e=b1){e&&e.active&&e.effects.push(c)}function so(){return b1}function lC(c){b1&&b1.cleanups.push(c)}const Ba=c=>{const e=new Set(c);return e.w=0,e.n=0,e},io=c=>(c.w&t4)>0,oo=c=>(c.n&t4)>0,fC=({deps:c})=>{if(c.length)for(let e=0;e<c.length;e++)c[e].w|=t4},uC=c=>{const{deps:e}=c;if(e.length){let t=0;for(let a=0;a<e.length;a++){const n=e[a];io(n)&&!oo(n)?n.delete(c):e[t++]=n,n.w&=~t4,n.n&=~t4}e.length=t}},b8=new WeakMap;let Z6=0,t4=1;const V5=30;let B1;const N4=Symbol(""),C5=Symbol("");class Ua{constructor(e,t=null,a){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,oC(this,a)}run(){if(!this.active)return this.fn();let e=B1,t=G3;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=B1,B1=this,G3=!0,t4=1<<++Z6,Z6<=V5?fC(this):Br(this),this.fn()}finally{Z6<=V5&&uC(this),t4=1<<--Z6,B1=this.parent,G3=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){B1===this?this.deferStop=!0:this.active&&(Br(this),this.onStop&&this.onStop(),this.active=!1)}}function Br(c){const{deps:e}=c;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(c);e.length=0}}let G3=!0;const lo=[];function E6(){lo.push(G3),G3=!1}function I6(){const c=lo.pop();G3=c===void 0?!0:c}function L1(c,e,t){if(G3&&B1){let a=b8.get(c);a||b8.set(c,a=new Map);let n=a.get(t);n||a.set(t,n=Ba()),fo(n)}}function fo(c,e){let t=!1;Z6<=V5?oo(c)||(c.n|=t4,t=!io(c)):t=!c.has(B1),t&&(c.add(B1),B1.deps.push(c))}function C3(c,e,t,a,n,r){const s=b8.get(c);if(!s)return;let i=[];if(e==="clear")i=[...s.values()];else if(t==="length"&&Q(c)){const o=Number(a);s.forEach((l,f)=>{(f==="length"||f>=o)&&i.push(l)})}else switch(t!==void 0&&i.push(s.get(t)),e){case"add":Q(c)?Oa(t)&&i.push(s.get("length")):(i.push(s.get(N4)),f6(c)&&i.push(s.get(C5)));break;case"delete":Q(c)||(i.push(s.get(N4)),f6(c)&&i.push(s.get(C5)));break;case"set":f6(c)&&i.push(s.get(N4));break}if(i.length===1)i[0]&&M5(i[0]);else{const o=[];for(const l of i)l&&o.push(...l);M5(Ba(o))}}function M5(c,e){const t=Q(c)?c:[...c];for(const a of t)a.computed&&Ur(a);for(const a of t)a.computed||Ur(a)}function Ur(c,e){(c!==B1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}function hC(c,e){var t;return(t=b8.get(c))==null?void 0:t.get(e)}const dC=Ia("__proto__,__v_isRef,__isVue"),uo=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(Da)),mC=$a(),pC=$a(!1,!0),vC=$a(!0),$r=gC();function gC(){const c={};return["includes","indexOf","lastIndexOf"].forEach(e=>{c[e]=function(...t){const a=u2(this);for(let r=0,s=this.length;r<s;r++)L1(a,"get",r+"");const n=a[e](...t);return n===-1||n===!1?a[e](...t.map(u2)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{c[e]=function(...t){E6();const a=u2(this)[e].apply(this,t);return I6(),a}}),c}function HC(c){const e=u2(this);return L1(e,"has",c),e.hasOwnProperty(c)}function $a(c=!1,e=!1){return function(a,n,r){if(n==="__v_isReactive")return!c;if(n==="__v_isReadonly")return c;if(n==="__v_isShallow")return e;if(n==="__v_raw"&&r===(c?e?EC:go:e?vo:po).get(a))return a;const s=Q(a);if(!c){if(s&&h2($r,n))return Reflect.get($r,n,r);if(n==="hasOwnProperty")return HC}const i=Reflect.get(a,n,r);return(Da(n)?uo.has(n):dC(n))||(c||L1(a,"get",n),e)?i:R2(i)?s&&Oa(n)?i:i.value:k2(i)?c?Ho(i):P6(i):i}}const zC=ho(),VC=ho(!0);function ho(c=!1){return function(t,a,n,r){let s=t[a];if(V6(s)&&R2(s)&&!R2(n))return!1;if(!c&&(!x8(n)&&!V6(n)&&(s=u2(s),n=u2(n)),!Q(t)&&R2(s)&&!R2(n)))return s.value=n,!0;const i=Q(t)&&Oa(a)?Number(a)<t.length:h2(t,a),o=Reflect.set(t,a,n,r);return t===u2(r)&&(i?be(n,s)&&C3(t,"set",a,n):C3(t,"add",a,n)),o}}function CC(c,e){const t=h2(c,e);c[e];const a=Reflect.deleteProperty(c,e);return a&&t&&C3(c,"delete",e,void 0),a}function MC(c,e){const t=Reflect.has(c,e);return(!Da(e)||!uo.has(e))&&L1(c,"has",e),t}function yC(c){return L1(c,"iterate",Q(c)?"length":N4),Reflect.ownKeys(c)}const mo={get:mC,set:zC,deleteProperty:CC,has:MC,ownKeys:yC},LC={get:vC,set(c,e){return!0},deleteProperty(c,e){return!0}},wC=$2({},mo,{get:pC,set:VC}),qa=c=>c,uc=c=>Reflect.getPrototypeOf(c);function P0(c,e,t=!1,a=!1){c=c.__v_raw;const n=u2(c),r=u2(e);t||(e!==r&&L1(n,"get",e),L1(n,"get",r));const{has:s}=uc(n),i=a?qa:t?Ga:xe;if(s.call(n,e))return i(c.get(e));if(s.call(n,r))return i(c.get(r));c!==n&&c.get(e)}function R0(c,e=!1){const t=this.__v_raw,a=u2(t),n=u2(c);return e||(c!==n&&L1(a,"has",c),L1(a,"has",n)),c===n?t.has(c):t.has(c)||t.has(n)}function D0(c,e=!1){return c=c.__v_raw,!e&&L1(u2(c),"iterate",N4),Reflect.get(c,"size",c)}function qr(c){c=u2(c);const e=u2(this);return uc(e).has.call(e,c)||(e.add(c),C3(e,"add",c,c)),this}function jr(c,e){e=u2(e);const t=u2(this),{has:a,get:n}=uc(t);let r=a.call(t,c);r||(c=u2(c),r=a.call(t,c));const s=n.call(t,c);return t.set(c,e),r?be(e,s)&&C3(t,"set",c,e):C3(t,"add",c,e),this}function Wr(c){const e=u2(this),{has:t,get:a}=uc(e);let n=t.call(e,c);n||(c=u2(c),n=t.call(e,c)),a&&a.call(e,c);const r=e.delete(c);return n&&C3(e,"delete",c,void 0),r}function Gr(){const c=u2(this),e=c.size!==0,t=c.clear();return e&&C3(c,"clear",void 0,void 0),t}function O0(c,e){return function(a,n){const r=this,s=r.__v_raw,i=u2(s),o=e?qa:c?Ga:xe;return!c&&L1(i,"iterate",N4),s.forEach((l,f)=>a.call(n,o(l),o(f),r))}}function F0(c,e,t){return function(...a){const n=this.__v_raw,r=u2(n),s=f6(r),i=c==="entries"||c===Symbol.iterator&&s,o=c==="keys"&&s,l=n[c](...a),f=t?qa:e?Ga:xe;return!e&&L1(r,"iterate",o?C5:N4),{next(){const{value:u,done:h}=l.next();return h?{value:u,done:h}:{value:i?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function _3(c){return function(...e){return c==="delete"?!1:this}}function bC(){const c={get(r){return P0(this,r)},get size(){return D0(this)},has:R0,add:qr,set:jr,delete:Wr,clear:Gr,forEach:O0(!1,!1)},e={get(r){return P0(this,r,!1,!0)},get size(){return D0(this)},has:R0,add:qr,set:jr,delete:Wr,clear:Gr,forEach:O0(!1,!0)},t={get(r){return P0(this,r,!0)},get size(){return D0(this,!0)},has(r){return R0.call(this,r,!0)},add:_3("add"),set:_3("set"),delete:_3("delete"),clear:_3("clear"),forEach:O0(!0,!1)},a={get(r){return P0(this,r,!0,!0)},get size(){return D0(this,!0)},has(r){return R0.call(this,r,!0)},add:_3("add"),set:_3("set"),delete:_3("delete"),clear:_3("clear"),forEach:O0(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{c[r]=F0(r,!1,!1),t[r]=F0(r,!0,!1),e[r]=F0(r,!1,!0),a[r]=F0(r,!0,!0)}),[c,t,e,a]}const[xC,SC,NC,AC]=bC();function ja(c,e){const t=e?c?AC:NC:c?SC:xC;return(a,n,r)=>n==="__v_isReactive"?!c:n==="__v_isReadonly"?c:n==="__v_raw"?a:Reflect.get(h2(t,n)&&n in a?t:a,n,r)}const kC={get:ja(!1,!1)},TC={get:ja(!1,!0)},_C={get:ja(!0,!1)},po=new WeakMap,vo=new WeakMap,go=new WeakMap,EC=new WeakMap;function IC(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function PC(c){return c.__v_skip||!Object.isExtensible(c)?0:IC(JV(c))}function P6(c){return V6(c)?c:Wa(c,!1,mo,kC,po)}function RC(c){return Wa(c,!1,wC,TC,vo)}function Ho(c){return Wa(c,!0,LC,_C,go)}function Wa(c,e,t,a,n){if(!k2(c)||c.__v_raw&&!(e&&c.__v_isReactive))return c;const r=n.get(c);if(r)return r;const s=PC(c);if(s===0)return c;const i=new Proxy(c,s===2?a:t);return n.set(c,i),i}function K3(c){return V6(c)?K3(c.__v_raw):!!(c&&c.__v_isReactive)}function V6(c){return!!(c&&c.__v_isReadonly)}function x8(c){return!!(c&&c.__v_isShallow)}function zo(c){return K3(c)||V6(c)}function u2(c){const e=c&&c.__v_raw;return e?u2(e):c}function r0(c){return w8(c,"__v_skip",!0),c}const xe=c=>k2(c)?P6(c):c,Ga=c=>k2(c)?Ho(c):c;function Vo(c){G3&&B1&&(c=u2(c),fo(c.dep||(c.dep=Ba())))}function Co(c,e){c=u2(c);const t=c.dep;t&&M5(t)}function R2(c){return!!(c&&c.__v_isRef===!0)}function Y3(c){return Mo(c,!1)}function y5(c){return Mo(c,!0)}function Mo(c,e){return R2(c)?c:new DC(c,e)}class DC{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:u2(e),this._value=t?e:xe(e)}get value(){return Vo(this),this._value}set value(e){const t=this.__v_isShallow||x8(e)||V6(e);e=t?e:u2(e),be(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:xe(e),Co(this))}}function _1(c){return R2(c)?c.value:c}const OC={get:(c,e,t)=>_1(Reflect.get(c,e,t)),set:(c,e,t,a)=>{const n=c[e];return R2(n)&&!R2(t)?(n.value=t,!0):Reflect.set(c,e,t,a)}};function yo(c){return K3(c)?c:new Proxy(c,OC)}function FC(c){const e=Q(c)?new Array(c.length):{};for(const t in c)e[t]=UC(c,t);return e}class BC{constructor(e,t,a){this._object=e,this._key=t,this._defaultValue=a,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return hC(u2(this._object),this._key)}}function UC(c,e,t){const a=c[e];return R2(a)?a:new BC(c,e,t)}class $C{constructor(e,t,a,n){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ua(e,()=>{this._dirty||(this._dirty=!0,Co(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=a}get value(){const e=u2(this);return Vo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qC(c,e,t=!1){let a,n;const r=s2(c);return r?(a=c,n=q1):(a=c.get,n=c.set),new $C(a,n,r||!n,t)}function Q3(c,e,t,a){let n;try{n=a?c(...a):c()}catch(r){hc(r,e,t)}return n}function E1(c,e,t,a){if(s2(c)){const r=Q3(c,e,t,a);return r&&Z9(r)&&r.catch(s=>{hc(s,e,t)}),r}const n=[];for(let r=0;r<c.length;r++)n.push(E1(c[r],e,t,a));return n}function hc(c,e,t,a=!0){const n=e?e.vnode:null;if(e){let r=e.parent;const s=e.proxy,i=t;for(;r;){const l=r.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](c,s,i)===!1)return}r=r.parent}const o=e.appContext.config.errorHandler;if(o){Q3(o,null,10,[c,s,i]);return}}jC(c,t,n,a)}function jC(c,e,t,a=!0){console.error(c)}let Se=!1,L5=!1;const l1=[];let c3=0;const u6=[];let v3=null,z4=0;const Lo=Promise.resolve();let Ka=null;function Ya(c){const e=Ka||Lo;return c?e.then(this?c.bind(this):c):e}function WC(c){let e=c3+1,t=l1.length;for(;e<t;){const a=e+t>>>1;Ne(l1[a])<c?e=a+1:t=a}return e}function Qa(c){(!l1.length||!l1.includes(c,Se&&c.allowRecurse?c3+1:c3))&&(c.id==null?l1.push(c):l1.splice(WC(c.id),0,c),wo())}function wo(){!Se&&!L5&&(L5=!0,Ka=Lo.then(xo))}function GC(c){const e=l1.indexOf(c);e>c3&&l1.splice(e,1)}function KC(c){Q(c)?u6.push(...c):(!v3||!v3.includes(c,c.allowRecurse?z4+1:z4))&&u6.push(c),wo()}function Kr(c,e=Se?c3+1:0){for(;e<l1.length;e++){const t=l1[e];t&&t.pre&&(l1.splice(e,1),e--,t())}}function bo(c){if(u6.length){const e=[...new Set(u6)];if(u6.length=0,v3){v3.push(...e);return}for(v3=e,v3.sort((t,a)=>Ne(t)-Ne(a)),z4=0;z4<v3.length;z4++)v3[z4]();v3=null,z4=0}}const Ne=c=>c.id==null?1/0:c.id,YC=(c,e)=>{const t=Ne(c)-Ne(e);if(t===0){if(c.pre&&!e.pre)return-1;if(e.pre&&!c.pre)return 1}return t};function xo(c){L5=!1,Se=!0,l1.sort(YC);const e=q1;try{for(c3=0;c3<l1.length;c3++){const t=l1[c3];t&&t.active!==!1&&Q3(t,null,14)}}finally{c3=0,l1.length=0,bo(),Se=!1,Ka=null,(l1.length||u6.length)&&xo()}}function QC(c,e,...t){if(c.isUnmounted)return;const a=c.vnode.props||b2;let n=t;const r=e.startsWith("update:"),s=r&&e.slice(7);if(s&&s in a){const f=`${s==="modelValue"?"model":s}Modifiers`,{number:u,trim:h}=a[f]||b2;h&&(n=t.map(d=>I2(d)?d.trim():d)),u&&(n=t.map(H5))}let i,o=a[i=xt(e)]||a[i=xt(l3(e))];!o&&r&&(o=a[i=xt(_6(e))]),o&&E1(o,c,6,n);const l=a[i+"Once"];if(l){if(!c.emitted)c.emitted={};else if(c.emitted[i])return;c.emitted[i]=!0,E1(l,c,6,n)}}function So(c,e,t=!1){const a=e.emitsCache,n=a.get(c);if(n!==void 0)return n;const r=c.emits;let s={},i=!1;if(!s2(c)){const o=l=>{const f=So(l,e,!0);f&&(i=!0,$2(s,f))};!t&&e.mixins.length&&e.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}return!r&&!i?(k2(c)&&a.set(c,null),null):(Q(r)?r.forEach(o=>s[o]=null):$2(s,r),k2(c)&&a.set(c,s),s)}function dc(c,e){return!c||!sc(e)?!1:(e=e.slice(2).replace(/Once$/,""),h2(c,e[0].toLowerCase()+e.slice(1))||h2(c,_6(e))||h2(c,e))}let X2=null,mc=null;function S8(c){const e=X2;return X2=c,mc=c&&c.type.__scopeId||null,e}function No(c){mc=c}function Ao(){mc=null}function le(c,e=X2,t){if(!e||c._n)return c;const a=(...n)=>{a._d&&is(-1);const r=S8(e);let s;try{s=c(...n)}finally{S8(r),a._d&&is(1)}return s};return a._n=!0,a._c=!0,a._d=!0,a}function St(c){const{type:e,vnode:t,proxy:a,withProxy:n,props:r,propsOptions:[s],slots:i,attrs:o,emit:l,render:f,renderCache:u,data:h,setupState:d,ctx:g,inheritAttrs:z}=c;let M,H;const V=S8(c);try{if(t.shapeFlag&4){const w=n||a;M=e3(f.call(w,w,u,r,d,h,g)),H=o}else{const w=e;M=e3(w.length>1?w(r,{attrs:o,slots:i,emit:l}):w(r,null)),H=e.props?o:XC(o)}}catch(w){de.length=0,hc(w,c,1),M=D2(P1)}let A=M;if(H&&z!==!1){const w=Object.keys(H),{shapeFlag:R}=A;w.length&&R&7&&(s&&w.some(Pa)&&(H=JC(H,s)),A=a4(A,H))}return t.dirs&&(A=a4(A),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),M=A,S8(V),M}const XC=c=>{let e;for(const t in c)(t==="class"||t==="style"||sc(t))&&((e||(e={}))[t]=c[t]);return e},JC=(c,e)=>{const t={};for(const a in c)(!Pa(a)||!(a.slice(9)in e))&&(t[a]=c[a]);return t};function ZC(c,e,t){const{props:a,children:n,component:r}=c,{props:s,children:i,patchFlag:o}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&o>=0){if(o&1024)return!0;if(o&16)return a?Yr(a,s,l):!!s;if(o&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(s[h]!==a[h]&&!dc(l,h))return!0}}}else return(n||i)&&(!i||!i.$stable)?!0:a===s?!1:a?s?Yr(a,s,l):!0:!!s;return!1}function Yr(c,e,t){const a=Object.keys(e);if(a.length!==Object.keys(c).length)return!0;for(let n=0;n<a.length;n++){const r=a[n];if(e[r]!==c[r]&&!dc(t,r))return!0}return!1}function eM({vnode:c,parent:e},t){for(;e&&e.subTree===c;)(c=e.vnode).el=t,e=e.parent}const cM=c=>c.__isSuspense;function tM(c,e){e&&e.pendingBranch?Q(c)?e.effects.push(...c):e.effects.push(c):KC(c)}function aM(c,e){return Xa(c,null,e)}const B0={};function h6(c,e,t){return Xa(c,e,t)}function Xa(c,e,{immediate:t,deep:a,flush:n,onTrack:r,onTrigger:s}=b2){var i;const o=so()===((i=j2)==null?void 0:i.scope)?j2:null;let l,f=!1,u=!1;if(R2(c)?(l=()=>c.value,f=x8(c)):K3(c)?(l=()=>c,a=!0):Q(c)?(u=!0,f=c.some(w=>K3(w)||x8(w)),l=()=>c.map(w=>{if(R2(w))return w.value;if(K3(w))return M4(w);if(s2(w))return Q3(w,o,2)})):s2(c)?e?l=()=>Q3(c,o,2):l=()=>{if(!(o&&o.isUnmounted))return h&&h(),E1(c,o,3,[d])}:l=q1,e&&a){const w=l;l=()=>M4(w())}let h,d=w=>{h=V.onStop=()=>{Q3(w,o,4)}},g;if(_e)if(d=q1,e?t&&E1(e,o,3,[l(),u?[]:void 0,d]):l(),n==="sync"){const w=ty();g=w.__watcherHandles||(w.__watcherHandles=[])}else return q1;let z=u?new Array(c.length).fill(B0):B0;const M=()=>{if(V.active)if(e){const w=V.run();(a||f||(u?w.some((R,J)=>be(R,z[J])):be(w,z)))&&(h&&h(),E1(e,o,3,[w,z===B0?void 0:u&&z[0]===B0?[]:z,d]),z=w)}else V.run()};M.allowRecurse=!!e;let H;n==="sync"?H=M:n==="post"?H=()=>C1(M,o&&o.suspense):(M.pre=!0,o&&(M.id=o.uid),H=()=>Qa(M));const V=new Ua(l,H);e?t?M():z=V.run():n==="post"?C1(V.run.bind(V),o&&o.suspense):V.run();const A=()=>{V.stop(),o&&o.scope&&Ra(o.scope.effects,V)};return g&&g.push(A),A}function nM(c,e,t){const a=this.proxy,n=I2(c)?c.includes(".")?ko(a,c):()=>a[c]:c.bind(a,a);let r;s2(e)?r=e:(r=e.handler,t=e);const s=j2;C6(this);const i=Xa(n,r.bind(a),t);return s?C6(s):A4(),i}function ko(c,e){const t=e.split(".");return()=>{let a=c;for(let n=0;n<t.length&&a;n++)a=a[t[n]];return a}}function M4(c,e){if(!k2(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),R2(c))M4(c.value,e);else if(Q(c))for(let t=0;t<c.length;t++)M4(c[t],e);else if(J9(c)||f6(c))c.forEach(t=>{M4(t,e)});else if(co(c))for(const t in c)M4(c[t],e);return c}function Nt(c,e){const t=X2;if(t===null)return c;const a=Vc(t)||t.proxy,n=c.dirs||(c.dirs=[]);for(let r=0;r<e.length;r++){let[s,i,o,l=b2]=e[r];s&&(s2(s)&&(s={mounted:s,updated:s}),s.deep&&M4(i),n.push({dir:s,instance:a,value:i,oldValue:void 0,arg:o,modifiers:l}))}return c}function m4(c,e,t,a){const n=c.dirs,r=e&&e.dirs;for(let s=0;s<n.length;s++){const i=n[s];r&&(i.oldValue=r[s].value);let o=i.dir[a];o&&(E6(),E1(o,t,8,[c.el,i,c,e]),I6())}}function rM(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gc(()=>{c.isMounted=!0}),Po(()=>{c.isUnmounting=!0}),c}const k1=[Function,Array],To={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:k1,onEnter:k1,onAfterEnter:k1,onEnterCancelled:k1,onBeforeLeave:k1,onLeave:k1,onAfterLeave:k1,onLeaveCancelled:k1,onBeforeAppear:k1,onAppear:k1,onAfterAppear:k1,onAppearCancelled:k1},sM={name:"BaseTransition",props:To,setup(c,{slots:e}){const t=KM(),a=rM();let n;return()=>{const r=e.default&&Eo(e.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const z of r)if(z.type!==P1){s=z;break}}const i=u2(c),{mode:o}=i;if(a.isLeaving)return At(s);const l=Qr(s);if(!l)return At(s);const f=w5(l,i,a,t);b5(l,f);const u=t.subTree,h=u&&Qr(u);let d=!1;const{getTransitionKey:g}=l.type;if(g){const z=g();n===void 0?n=z:z!==n&&(n=z,d=!0)}if(h&&h.type!==P1&&(!V4(l,h)||d)){const z=w5(h,i,a,t);if(b5(h,z),o==="out-in")return a.isLeaving=!0,z.afterLeave=()=>{a.isLeaving=!1,t.update.active!==!1&&t.update()},At(s);o==="in-out"&&l.type!==P1&&(z.delayLeave=(M,H,V)=>{const A=_o(a,h);A[String(h.key)]=h,M._leaveCb=()=>{H(),M._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=V})}return s}}},iM=sM;function _o(c,e){const{leavingVNodes:t}=c;let a=t.get(e.type);return a||(a=Object.create(null),t.set(e.type,a)),a}function w5(c,e,t,a){const{appear:n,mode:r,persisted:s=!1,onBeforeEnter:i,onEnter:o,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:u,onLeave:h,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:z,onAppear:M,onAfterAppear:H,onAppearCancelled:V}=e,A=String(c.key),w=_o(t,c),R=(T,P)=>{T&&E1(T,a,9,P)},J=(T,P)=>{const Z=P[1];R(T,P),Q(T)?T.every(d2=>d2.length<=1)&&Z():T.length<=1&&Z()},X={mode:r,persisted:s,beforeEnter(T){let P=i;if(!t.isMounted)if(n)P=z||i;else return;T._leaveCb&&T._leaveCb(!0);const Z=w[A];Z&&V4(c,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),R(P,[T])},enter(T){let P=o,Z=l,d2=f;if(!t.isMounted)if(n)P=M||o,Z=H||l,d2=V||f;else return;let B=!1;const p2=T._enterCb=e1=>{B||(B=!0,e1?R(d2,[T]):R(Z,[T]),X.delayedLeave&&X.delayedLeave(),T._enterCb=void 0)};P?J(P,[T,p2]):p2()},leave(T,P){const Z=String(c.key);if(T._enterCb&&T._enterCb(!0),t.isUnmounting)return P();R(u,[T]);let d2=!1;const B=T._leaveCb=p2=>{d2||(d2=!0,P(),p2?R(g,[T]):R(d,[T]),T._leaveCb=void 0,w[Z]===c&&delete w[Z])};w[Z]=c,h?J(h,[T,B]):B()},clone(T){return w5(T,e,t,a)}};return X}function At(c){if(pc(c))return c=a4(c),c.children=null,c}function Qr(c){return pc(c)?c.children?c.children[0]:void 0:c}function b5(c,e){c.shapeFlag&6&&c.component?b5(c.component.subTree,e):c.shapeFlag&128?(c.ssContent.transition=e.clone(c.ssContent),c.ssFallback.transition=e.clone(c.ssFallback)):c.transition=e}function Eo(c,e=!1,t){let a=[],n=0;for(let r=0;r<c.length;r++){let s=c[r];const i=t==null?s.key:String(t)+String(s.key!=null?s.key:r);s.type===Q2?(s.patchFlag&128&&n++,a=a.concat(Eo(s.children,e,i))):(e||s.type!==P1)&&a.push(i!=null?a4(s,{key:i}):s)}if(n>1)for(let r=0;r<a.length;r++)a[r].patchFlag=-2;return a}function O1(c,e){return s2(c)?(()=>$2({name:c.name},e,{setup:c}))():c}const fe=c=>!!c.type.__asyncLoader,pc=c=>c.type.__isKeepAlive;function oM(c,e){Io(c,"a",e)}function lM(c,e){Io(c,"da",e)}function Io(c,e,t=j2){const a=c.__wdc||(c.__wdc=()=>{let n=t;for(;n;){if(n.isDeactivated)return;n=n.parent}return c()});if(vc(e,a,t),t){let n=t.parent;for(;n&&n.parent;)pc(n.parent.vnode)&&fM(a,e,t,n),n=n.parent}}function fM(c,e,t,a){const n=vc(e,c,a,!0);Ro(()=>{Ra(a[e],n)},t)}function vc(c,e,t=j2,a=!1){if(t){const n=t[c]||(t[c]=[]),r=e.__weh||(e.__weh=(...s)=>{if(t.isUnmounted)return;E6(),C6(t);const i=E1(e,t,c,s);return A4(),I6(),i});return a?n.unshift(r):n.push(r),r}}const A3=c=>(e,t=j2)=>(!_e||c==="sp")&&vc(c,(...a)=>e(...a),t),uM=A3("bm"),gc=A3("m"),hM=A3("bu"),dM=A3("u"),Po=A3("bum"),Ro=A3("um"),mM=A3("sp"),pM=A3("rtg"),vM=A3("rtc");function gM(c,e=j2){vc("ec",c,e)}const Ja="components";function x5(c,e){return Fo(Ja,c,!0,e)||c}const Do=Symbol.for("v-ndc");function Oo(c){return I2(c)?Fo(Ja,c,!1)||c:c||Do}function Fo(c,e,t=!0,a=!1){const n=X2||j2;if(n){const r=n.type;if(c===Ja){const i=ZM(r,!1);if(i&&(i===e||i===l3(e)||i===lc(l3(e))))return r}const s=Xr(n[c]||r[c],e)||Xr(n.appContext[c],e);return!s&&a?r:s}}function Xr(c,e){return c&&(c[e]||c[l3(e)]||c[lc(l3(e))])}function U0(c,e,t,a){let n;const r=t&&t[a];if(Q(c)||I2(c)){n=new Array(c.length);for(let s=0,i=c.length;s<i;s++)n[s]=e(c[s],s,void 0,r&&r[s])}else if(typeof c=="number"){n=new Array(c);for(let s=0;s<c;s++)n[s]=e(s+1,s,void 0,r&&r[s])}else if(k2(c))if(c[Symbol.iterator])n=Array.from(c,(s,i)=>e(s,i,void 0,r&&r[i]));else{const s=Object.keys(c);n=new Array(s.length);for(let i=0,o=s.length;i<o;i++){const l=s[i];n[i]=e(c[l],l,i,r&&r[i])}}else n=[];return t&&(t[a]=n),n}function HM(c,e,t={},a,n){if(X2.isCE||X2.parent&&fe(X2.parent)&&X2.parent.isCE)return e!=="default"&&(t.name=e),D2("slot",t,a&&a());let r=c[e];r&&r._c&&(r._d=!1),L2();const s=r&&Bo(r(t)),i=f4(Q2,{key:t.key||s&&s.key||`_${e}`},s||(a?a():[]),s&&c._===1?64:-2);return!n&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function Bo(c){return c.some(e=>A8(e)?!(e.type===P1||e.type===Q2&&!Bo(e.children)):!0)?c:null}const S5=c=>c?Jo(c)?Vc(c)||c.proxy:S5(c.parent):null,ue=$2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>S5(c.parent),$root:c=>S5(c.root),$emit:c=>c.emit,$options:c=>Za(c),$forceUpdate:c=>c.f||(c.f=()=>Qa(c.update)),$nextTick:c=>c.n||(c.n=Ya.bind(c.proxy)),$watch:c=>nM.bind(c)}),kt=(c,e)=>c!==b2&&!c.__isScriptSetup&&h2(c,e),zM={get({_:c},e){const{ctx:t,setupState:a,data:n,props:r,accessCache:s,type:i,appContext:o}=c;let l;if(e[0]!=="$"){const d=s[e];if(d!==void 0)switch(d){case 1:return a[e];case 2:return n[e];case 4:return t[e];case 3:return r[e]}else{if(kt(a,e))return s[e]=1,a[e];if(n!==b2&&h2(n,e))return s[e]=2,n[e];if((l=c.propsOptions[0])&&h2(l,e))return s[e]=3,r[e];if(t!==b2&&h2(t,e))return s[e]=4,t[e];N5&&(s[e]=0)}}const f=ue[e];let u,h;if(f)return e==="$attrs"&&L1(c,"get",e),f(c);if((u=i.__cssModules)&&(u=u[e]))return u;if(t!==b2&&h2(t,e))return s[e]=4,t[e];if(h=o.config.globalProperties,h2(h,e))return h[e]},set({_:c},e,t){const{data:a,setupState:n,ctx:r}=c;return kt(n,e)?(n[e]=t,!0):a!==b2&&h2(a,e)?(a[e]=t,!0):h2(c.props,e)||e[0]==="$"&&e.slice(1)in c?!1:(r[e]=t,!0)},has({_:{data:c,setupState:e,accessCache:t,ctx:a,appContext:n,propsOptions:r}},s){let i;return!!t[s]||c!==b2&&h2(c,s)||kt(e,s)||(i=r[0])&&h2(i,s)||h2(a,s)||h2(ue,s)||h2(n.config.globalProperties,s)},defineProperty(c,e,t){return t.get!=null?c._.accessCache[e]=0:h2(t,"value")&&this.set(c,e,t.value,null),Reflect.defineProperty(c,e,t)}};function Jr(c){return Q(c)?c.reduce((e,t)=>(e[t]=null,e),{}):c}let N5=!0;function VM(c){const e=Za(c),t=c.proxy,a=c.ctx;N5=!1,e.beforeCreate&&Zr(e.beforeCreate,c,"bc");const{data:n,computed:r,methods:s,watch:i,provide:o,inject:l,created:f,beforeMount:u,mounted:h,beforeUpdate:d,updated:g,activated:z,deactivated:M,beforeDestroy:H,beforeUnmount:V,destroyed:A,unmounted:w,render:R,renderTracked:J,renderTriggered:X,errorCaptured:T,serverPrefetch:P,expose:Z,inheritAttrs:d2,components:B,directives:p2,filters:e1}=e;if(l&&CM(l,a,null),s)for(const y2 in s){const g2=s[y2];s2(g2)&&(a[y2]=g2.bind(t))}if(n){const y2=n.call(t,t);k2(y2)&&(c.data=P6(y2))}if(N5=!0,r)for(const y2 in r){const g2=r[y2],m3=s2(g2)?g2.bind(t,t):s2(g2.get)?g2.get.bind(t,t):q1,T3=!s2(g2)&&s2(g2.set)?g2.set.bind(t):q1,X1=U2({get:m3,set:T3});Object.defineProperty(a,y2,{enumerable:!0,configurable:!0,get:()=>X1.value,set:z1=>X1.value=z1})}if(i)for(const y2 in i)Uo(i[y2],a,t,y2);if(o){const y2=s2(o)?o.call(t):o;Reflect.ownKeys(y2).forEach(g2=>{d8(g2,y2[g2])})}f&&Zr(f,c,"c");function l2(y2,g2){Q(g2)?g2.forEach(m3=>y2(m3.bind(t))):g2&&y2(g2.bind(t))}if(l2(uM,u),l2(gc,h),l2(hM,d),l2(dM,g),l2(oM,z),l2(lM,M),l2(gM,T),l2(vM,J),l2(pM,X),l2(Po,V),l2(Ro,w),l2(mM,P),Q(Z))if(Z.length){const y2=c.exposed||(c.exposed={});Z.forEach(g2=>{Object.defineProperty(y2,g2,{get:()=>t[g2],set:m3=>t[g2]=m3})})}else c.exposed||(c.exposed={});R&&c.render===q1&&(c.render=R),d2!=null&&(c.inheritAttrs=d2),B&&(c.components=B),p2&&(c.directives=p2)}function CM(c,e,t=q1){Q(c)&&(c=A5(c));for(const a in c){const n=c[a];let r;k2(n)?"default"in n?r=I1(n.from||a,n.default,!0):r=I1(n.from||a):r=I1(n),R2(r)?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:s=>r.value=s}):e[a]=r}}function Zr(c,e,t){E1(Q(c)?c.map(a=>a.bind(e.proxy)):c.bind(e.proxy),e,t)}function Uo(c,e,t,a){const n=a.includes(".")?ko(t,a):()=>t[a];if(I2(c)){const r=e[c];s2(r)&&h6(n,r)}else if(s2(c))h6(n,c.bind(t));else if(k2(c))if(Q(c))c.forEach(r=>Uo(r,e,t,a));else{const r=s2(c.handler)?c.handler.bind(t):e[c.handler];s2(r)&&h6(n,r,c)}}function Za(c){const e=c.type,{mixins:t,extends:a}=e,{mixins:n,optionsCache:r,config:{optionMergeStrategies:s}}=c.appContext,i=r.get(e);let o;return i?o=i:!n.length&&!t&&!a?o=e:(o={},n.length&&n.forEach(l=>N8(o,l,s,!0)),N8(o,e,s)),k2(e)&&r.set(e,o),o}function N8(c,e,t,a=!1){const{mixins:n,extends:r}=e;r&&N8(c,r,t,!0),n&&n.forEach(s=>N8(c,s,t,!0));for(const s in e)if(!(a&&s==="expose")){const i=MM[s]||t&&t[s];c[s]=i?i(c[s],e[s]):e[s]}return c}const MM={data:es,props:cs,emits:cs,methods:ee,computed:ee,beforeCreate:g1,created:g1,beforeMount:g1,mounted:g1,beforeUpdate:g1,updated:g1,beforeDestroy:g1,beforeUnmount:g1,destroyed:g1,unmounted:g1,activated:g1,deactivated:g1,errorCaptured:g1,serverPrefetch:g1,components:ee,directives:ee,watch:LM,provide:es,inject:yM};function es(c,e){return e?c?function(){return $2(s2(c)?c.call(this,this):c,s2(e)?e.call(this,this):e)}:e:c}function yM(c,e){return ee(A5(c),A5(e))}function A5(c){if(Q(c)){const e={};for(let t=0;t<c.length;t++)e[c[t]]=c[t];return e}return c}function g1(c,e){return c?[...new Set([].concat(c,e))]:e}function ee(c,e){return c?$2(Object.create(null),c,e):e}function cs(c,e){return c?Q(c)&&Q(e)?[...new Set([...c,...e])]:$2(Object.create(null),Jr(c),Jr(e??{})):e}function LM(c,e){if(!c)return e;if(!e)return c;const t=$2(Object.create(null),c);for(const a in e)t[a]=g1(c[a],e[a]);return t}function $o(){return{app:null,config:{isNativeTag:YV,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wM=0;function bM(c,e){return function(a,n=null){s2(a)||(a=$2({},a)),n!=null&&!k2(n)&&(n=null);const r=$o(),s=new Set;let i=!1;const o=r.app={_uid:wM++,_component:a,_props:n,_container:null,_context:r,_instance:null,version:ay,get config(){return r.config},set config(l){},use(l,...f){return s.has(l)||(l&&s2(l.install)?(s.add(l),l.install(o,...f)):s2(l)&&(s.add(l),l(o,...f))),o},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),o},component(l,f){return f?(r.components[l]=f,o):r.components[l]},directive(l,f){return f?(r.directives[l]=f,o):r.directives[l]},mount(l,f,u){if(!i){const h=D2(a,n);return h.appContext=r,f&&e?e(h,l):c(h,l,u),i=!0,o._container=l,l.__vue_app__=o,Vc(h.component)||h.component.proxy}},unmount(){i&&(c(null,o._container),delete o._container.__vue_app__)},provide(l,f){return r.provides[l]=f,o},runWithContext(l){Ae=o;try{return l()}finally{Ae=null}}};return o}}let Ae=null;function d8(c,e){if(j2){let t=j2.provides;const a=j2.parent&&j2.parent.provides;a===t&&(t=j2.provides=Object.create(a)),t[c]=e}}function I1(c,e,t=!1){const a=j2||X2;if(a||Ae){const n=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:Ae._context.provides;if(n&&c in n)return n[c];if(arguments.length>1)return t&&s2(e)?e.call(a&&a.proxy):e}}function xM(){return!!(j2||X2||Ae)}function SM(c,e,t,a=!1){const n={},r={};w8(r,zc,1),c.propsDefaults=Object.create(null),qo(c,e,n,r);for(const s in c.propsOptions[0])s in n||(n[s]=void 0);t?c.props=a?n:RC(n):c.type.props?c.props=n:c.props=r,c.attrs=r}function NM(c,e,t,a){const{props:n,attrs:r,vnode:{patchFlag:s}}=c,i=u2(n),[o]=c.propsOptions;let l=!1;if((a||s>0)&&!(s&16)){if(s&8){const f=c.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(dc(c.emitsOptions,h))continue;const d=e[h];if(o)if(h2(r,h))d!==r[h]&&(r[h]=d,l=!0);else{const g=l3(h);n[g]=k5(o,i,g,d,c,!1)}else d!==r[h]&&(r[h]=d,l=!0)}}}else{qo(c,e,n,r)&&(l=!0);let f;for(const u in i)(!e||!h2(e,u)&&((f=_6(u))===u||!h2(e,f)))&&(o?t&&(t[u]!==void 0||t[f]!==void 0)&&(n[u]=k5(o,i,u,void 0,c,!0)):delete n[u]);if(r!==i)for(const u in r)(!e||!h2(e,u))&&(delete r[u],l=!0)}l&&C3(c,"set","$attrs")}function qo(c,e,t,a){const[n,r]=c.propsOptions;let s=!1,i;if(e)for(let o in e){if(u8(o))continue;const l=e[o];let f;n&&h2(n,f=l3(o))?!r||!r.includes(f)?t[f]=l:(i||(i={}))[f]=l:dc(c.emitsOptions,o)||(!(o in a)||l!==a[o])&&(a[o]=l,s=!0)}if(r){const o=u2(t),l=i||b2;for(let f=0;f<r.length;f++){const u=r[f];t[u]=k5(n,o,u,l[u],c,!h2(l,u))}}return s}function k5(c,e,t,a,n,r){const s=c[t];if(s!=null){const i=h2(s,"default");if(i&&a===void 0){const o=s.default;if(s.type!==Function&&!s.skipFactory&&s2(o)){const{propsDefaults:l}=n;t in l?a=l[t]:(C6(n),a=l[t]=o.call(null,e),A4())}else a=o}s[0]&&(r&&!i?a=!1:s[1]&&(a===""||a===_6(t))&&(a=!0))}return a}function jo(c,e,t=!1){const a=e.propsCache,n=a.get(c);if(n)return n;const r=c.props,s={},i=[];let o=!1;if(!s2(c)){const f=u=>{o=!0;const[h,d]=jo(u,e,!0);$2(s,h),d&&i.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}if(!r&&!o)return k2(c)&&a.set(c,l6),l6;if(Q(r))for(let f=0;f<r.length;f++){const u=l3(r[f]);ts(u)&&(s[u]=b2)}else if(r)for(const f in r){const u=l3(f);if(ts(u)){const h=r[f],d=s[u]=Q(h)||s2(h)?{type:h}:$2({},h);if(d){const g=rs(Boolean,d.type),z=rs(String,d.type);d[0]=g>-1,d[1]=z<0||g<z,(g>-1||h2(d,"default"))&&i.push(u)}}}const l=[s,i];return k2(c)&&a.set(c,l),l}function ts(c){return c[0]!=="$"}function as(c){const e=c&&c.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:c===null?"null":""}function ns(c,e){return as(c)===as(e)}function rs(c,e){return Q(e)?e.findIndex(t=>ns(t,c)):s2(e)&&ns(e,c)?0:-1}const Wo=c=>c[0]==="_"||c==="$stable",en=c=>Q(c)?c.map(e3):[e3(c)],AM=(c,e,t)=>{if(e._n)return e;const a=le((...n)=>en(e(...n)),t);return a._c=!1,a},Go=(c,e,t)=>{const a=c._ctx;for(const n in c){if(Wo(n))continue;const r=c[n];if(s2(r))e[n]=AM(n,r,a);else if(r!=null){const s=en(r);e[n]=()=>s}}},Ko=(c,e)=>{const t=en(e);c.slots.default=()=>t},kM=(c,e)=>{if(c.vnode.shapeFlag&32){const t=e._;t?(c.slots=u2(e),w8(e,"_",t)):Go(e,c.slots={})}else c.slots={},e&&Ko(c,e);w8(c.slots,zc,1)},TM=(c,e,t)=>{const{vnode:a,slots:n}=c;let r=!0,s=b2;if(a.shapeFlag&32){const i=e._;i?t&&i===1?r=!1:($2(n,e),!t&&i===1&&delete n._):(r=!e.$stable,Go(e,n)),s=e}else e&&(Ko(c,e),s={default:1});if(r)for(const i in n)!Wo(i)&&!(i in s)&&delete n[i]};function T5(c,e,t,a,n=!1){if(Q(c)){c.forEach((h,d)=>T5(h,e&&(Q(e)?e[d]:e),t,a,n));return}if(fe(a)&&!n)return;const r=a.shapeFlag&4?Vc(a.component)||a.component.proxy:a.el,s=n?null:r,{i,r:o}=c,l=e&&e.r,f=i.refs===b2?i.refs={}:i.refs,u=i.setupState;if(l!=null&&l!==o&&(I2(l)?(f[l]=null,h2(u,l)&&(u[l]=null)):R2(l)&&(l.value=null)),s2(o))Q3(o,i,12,[s,f]);else{const h=I2(o),d=R2(o);if(h||d){const g=()=>{if(c.f){const z=h?h2(u,o)?u[o]:f[o]:o.value;n?Q(z)&&Ra(z,r):Q(z)?z.includes(r)||z.push(r):h?(f[o]=[r],h2(u,o)&&(u[o]=f[o])):(o.value=[r],c.k&&(f[c.k]=o.value))}else h?(f[o]=s,h2(u,o)&&(u[o]=s)):d&&(o.value=s,c.k&&(f[c.k]=s))};s?(g.id=-1,C1(g,t)):g()}}}const C1=tM;function _M(c){return EM(c)}function EM(c,e){const t=z5();t.__VUE__=!0;const{insert:a,remove:n,patchProp:r,createElement:s,createText:i,createComment:o,setText:l,setElementText:f,parentNode:u,nextSibling:h,setScopeId:d=q1,insertStaticContent:g}=c,z=(m,p,v,C=null,L=null,b=null,D=!1,k=null,_=!!p.dynamicChildren)=>{if(m===p)return;m&&!V4(m,p)&&(C=y(m),z1(m,L,b,!0),m=null),p.patchFlag===-2&&(_=!1,p.dynamicChildren=null);const{type:S,ref:G,shapeFlag:U}=p;switch(S){case Hc:M(m,p,v,C);break;case P1:H(m,p,v,C);break;case Tt:m==null&&V(p,v,C,D);break;case Q2:B(m,p,v,C,L,b,D,k,_);break;default:U&1?R(m,p,v,C,L,b,D,k,_):U&6?p2(m,p,v,C,L,b,D,k,_):(U&64||U&128)&&S.process(m,p,v,C,L,b,D,k,_,E)}G!=null&&L&&T5(G,m&&m.ref,b,p||m,!p)},M=(m,p,v,C)=>{if(m==null)a(p.el=i(p.children),v,C);else{const L=p.el=m.el;p.children!==m.children&&l(L,p.children)}},H=(m,p,v,C)=>{m==null?a(p.el=o(p.children||""),v,C):p.el=m.el},V=(m,p,v,C)=>{[m.el,m.anchor]=g(m.children,p,v,C,m.el,m.anchor)},A=({el:m,anchor:p},v,C)=>{let L;for(;m&&m!==p;)L=h(m),a(m,v,C),m=L;a(p,v,C)},w=({el:m,anchor:p})=>{let v;for(;m&&m!==p;)v=h(m),n(m),m=v;n(p)},R=(m,p,v,C,L,b,D,k,_)=>{D=D||p.type==="svg",m==null?J(p,v,C,L,b,D,k,_):P(m,p,L,b,D,k,_)},J=(m,p,v,C,L,b,D,k)=>{let _,S;const{type:G,props:U,shapeFlag:K,transition:a2,dirs:i2}=m;if(_=m.el=s(m.type,b,U&&U.is,U),K&8?f(_,m.children):K&16&&T(m.children,_,null,C,L,b&&G!=="foreignObject",D,k),i2&&m4(m,null,C,"created"),X(_,m,m.scopeId,D,C),U){for(const M2 in U)M2!=="value"&&!u8(M2)&&r(_,M2,null,U[M2],b,m.children,C,L,r1);"value"in U&&r(_,"value",null,U.value),(S=U.onVnodeBeforeMount)&&Z1(S,C,m)}i2&&m4(m,null,C,"beforeMount");const w2=(!L||L&&!L.pendingBranch)&&a2&&!a2.persisted;w2&&a2.beforeEnter(_),a(_,p,v),((S=U&&U.onVnodeMounted)||w2||i2)&&C1(()=>{S&&Z1(S,C,m),w2&&a2.enter(_),i2&&m4(m,null,C,"mounted")},L)},X=(m,p,v,C,L)=>{if(v&&d(m,v),C)for(let b=0;b<C.length;b++)d(m,C[b]);if(L){let b=L.subTree;if(p===b){const D=L.vnode;X(m,D,D.scopeId,D.slotScopeIds,L.parent)}}},T=(m,p,v,C,L,b,D,k,_=0)=>{for(let S=_;S<m.length;S++){const G=m[S]=k?F3(m[S]):e3(m[S]);z(null,G,p,v,C,L,b,D,k)}},P=(m,p,v,C,L,b,D)=>{const k=p.el=m.el;let{patchFlag:_,dynamicChildren:S,dirs:G}=p;_|=m.patchFlag&16;const U=m.props||b2,K=p.props||b2;let a2;v&&p4(v,!1),(a2=K.onVnodeBeforeUpdate)&&Z1(a2,v,p,m),G&&m4(p,m,v,"beforeUpdate"),v&&p4(v,!0);const i2=L&&p.type!=="foreignObject";if(S?Z(m.dynamicChildren,S,k,v,C,i2,b):D||g2(m,p,k,null,v,C,i2,b,!1),_>0){if(_&16)d2(k,p,U,K,v,C,L);else if(_&2&&U.class!==K.class&&r(k,"class",null,K.class,L),_&4&&r(k,"style",U.style,K.style,L),_&8){const w2=p.dynamicProps;for(let M2=0;M2<w2.length;M2++){const O2=w2[M2],F1=U[O2],X4=K[O2];(X4!==F1||O2==="value")&&r(k,O2,F1,X4,L,m.children,v,C,r1)}}_&1&&m.children!==p.children&&f(k,p.children)}else!D&&S==null&&d2(k,p,U,K,v,C,L);((a2=K.onVnodeUpdated)||G)&&C1(()=>{a2&&Z1(a2,v,p,m),G&&m4(p,m,v,"updated")},C)},Z=(m,p,v,C,L,b,D)=>{for(let k=0;k<p.length;k++){const _=m[k],S=p[k],G=_.el&&(_.type===Q2||!V4(_,S)||_.shapeFlag&70)?u(_.el):v;z(_,S,G,null,C,L,b,D,!0)}},d2=(m,p,v,C,L,b,D)=>{if(v!==C){if(v!==b2)for(const k in v)!u8(k)&&!(k in C)&&r(m,k,v[k],null,D,p.children,L,b,r1);for(const k in C){if(u8(k))continue;const _=C[k],S=v[k];_!==S&&k!=="value"&&r(m,k,S,_,D,p.children,L,b,r1)}"value"in C&&r(m,"value",v.value,C.value)}},B=(m,p,v,C,L,b,D,k,_)=>{const S=p.el=m?m.el:i(""),G=p.anchor=m?m.anchor:i("");let{patchFlag:U,dynamicChildren:K,slotScopeIds:a2}=p;a2&&(k=k?k.concat(a2):a2),m==null?(a(S,v,C),a(G,v,C),T(p.children,v,G,L,b,D,k,_)):U>0&&U&64&&K&&m.dynamicChildren?(Z(m.dynamicChildren,K,v,L,b,D,k),(p.key!=null||L&&p===L.subTree)&&cn(m,p,!0)):g2(m,p,v,G,L,b,D,k,_)},p2=(m,p,v,C,L,b,D,k,_)=>{p.slotScopeIds=k,m==null?p.shapeFlag&512?L.ctx.activate(p,v,C,D,_):e1(p,v,C,L,b,D,_):v1(m,p,_)},e1=(m,p,v,C,L,b,D)=>{const k=m.component=GM(m,C,L);if(pc(m)&&(k.ctx.renderer=E),YM(k),k.asyncDep){if(L&&L.registerDep(k,l2),!m.el){const _=k.subTree=D2(P1);H(null,_,p,v)}return}l2(k,m,p,v,L,b,D)},v1=(m,p,v)=>{const C=p.component=m.component;if(ZC(m,p,v))if(C.asyncDep&&!C.asyncResolved){y2(C,p,v);return}else C.next=p,GC(C.update),C.update();else p.el=m.el,C.vnode=p},l2=(m,p,v,C,L,b,D)=>{const k=()=>{if(m.isMounted){let{next:G,bu:U,u:K,parent:a2,vnode:i2}=m,w2=G,M2;p4(m,!1),G?(G.el=i2.el,y2(m,G,D)):G=i2,U&&h8(U),(M2=G.props&&G.props.onVnodeBeforeUpdate)&&Z1(M2,a2,G,i2),p4(m,!0);const O2=St(m),F1=m.subTree;m.subTree=O2,z(F1,O2,u(F1.el),y(F1),m,L,b),G.el=O2.el,w2===null&&eM(m,O2.el),K&&C1(K,L),(M2=G.props&&G.props.onVnodeUpdated)&&C1(()=>Z1(M2,a2,G,i2),L)}else{let G;const{el:U,props:K}=p,{bm:a2,m:i2,parent:w2}=m,M2=fe(p);if(p4(m,!1),a2&&h8(a2),!M2&&(G=K&&K.onVnodeBeforeMount)&&Z1(G,w2,p),p4(m,!0),U&&H2){const O2=()=>{m.subTree=St(m),H2(U,m.subTree,m,L,null)};M2?p.type.__asyncLoader().then(()=>!m.isUnmounted&&O2()):O2()}else{const O2=m.subTree=St(m);z(null,O2,v,C,m,L,b),p.el=O2.el}if(i2&&C1(i2,L),!M2&&(G=K&&K.onVnodeMounted)){const O2=p;C1(()=>Z1(G,w2,O2),L)}(p.shapeFlag&256||w2&&fe(w2.vnode)&&w2.vnode.shapeFlag&256)&&m.a&&C1(m.a,L),m.isMounted=!0,p=v=C=null}},_=m.effect=new Ua(k,()=>Qa(S),m.scope),S=m.update=()=>_.run();S.id=m.uid,p4(m,!0),S()},y2=(m,p,v)=>{p.component=m;const C=m.vnode.props;m.vnode=p,m.next=null,NM(m,p.props,C,v),TM(m,p.children,v),E6(),Kr(),I6()},g2=(m,p,v,C,L,b,D,k,_=!1)=>{const S=m&&m.children,G=m?m.shapeFlag:0,U=p.children,{patchFlag:K,shapeFlag:a2}=p;if(K>0){if(K&128){T3(S,U,v,C,L,b,D,k,_);return}else if(K&256){m3(S,U,v,C,L,b,D,k,_);return}}a2&8?(G&16&&r1(S,L,b),U!==S&&f(v,U)):G&16?a2&16?T3(S,U,v,C,L,b,D,k,_):r1(S,L,b,!0):(G&8&&f(v,""),a2&16&&T(U,v,C,L,b,D,k,_))},m3=(m,p,v,C,L,b,D,k,_)=>{m=m||l6,p=p||l6;const S=m.length,G=p.length,U=Math.min(S,G);let K;for(K=0;K<U;K++){const a2=p[K]=_?F3(p[K]):e3(p[K]);z(m[K],a2,v,null,L,b,D,k,_)}S>G?r1(m,L,b,!0,!1,U):T(p,v,C,L,b,D,k,_,U)},T3=(m,p,v,C,L,b,D,k,_)=>{let S=0;const G=p.length;let U=m.length-1,K=G-1;for(;S<=U&&S<=K;){const a2=m[S],i2=p[S]=_?F3(p[S]):e3(p[S]);if(V4(a2,i2))z(a2,i2,v,null,L,b,D,k,_);else break;S++}for(;S<=U&&S<=K;){const a2=m[U],i2=p[K]=_?F3(p[K]):e3(p[K]);if(V4(a2,i2))z(a2,i2,v,null,L,b,D,k,_);else break;U--,K--}if(S>U){if(S<=K){const a2=K+1,i2=a2<G?p[a2].el:C;for(;S<=K;)z(null,p[S]=_?F3(p[S]):e3(p[S]),v,i2,L,b,D,k,_),S++}}else if(S>K)for(;S<=U;)z1(m[S],L,b,!0),S++;else{const a2=S,i2=S,w2=new Map;for(S=i2;S<=K;S++){const w1=p[S]=_?F3(p[S]):e3(p[S]);w1.key!=null&&w2.set(w1.key,S)}let M2,O2=0;const F1=K-i2+1;let X4=!1,Rr=0;const K6=new Array(F1);for(S=0;S<F1;S++)K6[S]=0;for(S=a2;S<=U;S++){const w1=m[S];if(O2>=F1){z1(w1,L,b,!0);continue}let J1;if(w1.key!=null)J1=w2.get(w1.key);else for(M2=i2;M2<=K;M2++)if(K6[M2-i2]===0&&V4(w1,p[M2])){J1=M2;break}J1===void 0?z1(w1,L,b,!0):(K6[J1-i2]=S+1,J1>=Rr?Rr=J1:X4=!0,z(w1,p[J1],v,null,L,b,D,k,_),O2++)}const Dr=X4?IM(K6):l6;for(M2=Dr.length-1,S=F1-1;S>=0;S--){const w1=i2+S,J1=p[w1],Or=w1+1<G?p[w1+1].el:C;K6[S]===0?z(null,J1,v,Or,L,b,D,k,_):X4&&(M2<0||S!==Dr[M2]?X1(J1,v,Or,2):M2--)}}},X1=(m,p,v,C,L=null)=>{const{el:b,type:D,transition:k,children:_,shapeFlag:S}=m;if(S&6){X1(m.component.subTree,p,v,C);return}if(S&128){m.suspense.move(p,v,C);return}if(S&64){D.move(m,p,v,E);return}if(D===Q2){a(b,p,v);for(let U=0;U<_.length;U++)X1(_[U],p,v,C);a(m.anchor,p,v);return}if(D===Tt){A(m,p,v);return}if(C!==2&&S&1&&k)if(C===0)k.beforeEnter(b),a(b,p,v),C1(()=>k.enter(b),L);else{const{leave:U,delayLeave:K,afterLeave:a2}=k,i2=()=>a(b,p,v),w2=()=>{U(b,()=>{i2(),a2&&a2()})};K?K(b,i2,w2):w2()}else a(b,p,v)},z1=(m,p,v,C=!1,L=!1)=>{const{type:b,props:D,ref:k,children:_,dynamicChildren:S,shapeFlag:G,patchFlag:U,dirs:K}=m;if(k!=null&&T5(k,null,v,m,!0),G&256){p.ctx.deactivate(m);return}const a2=G&1&&K,i2=!fe(m);let w2;if(i2&&(w2=D&&D.onVnodeBeforeUnmount)&&Z1(w2,p,m),G&6)I0(m.component,v,C);else{if(G&128){m.suspense.unmount(v,C);return}a2&&m4(m,null,p,"beforeUnmount"),G&64?m.type.remove(m,p,v,L,E,C):S&&(b!==Q2||U>0&&U&64)?r1(S,p,v,!1,!0):(b===Q2&&U&384||!L&&G&16)&&r1(_,p,v),C&&Y4(m)}(i2&&(w2=D&&D.onVnodeUnmounted)||a2)&&C1(()=>{w2&&Z1(w2,p,m),a2&&m4(m,null,p,"unmounted")},v)},Y4=m=>{const{type:p,el:v,anchor:C,transition:L}=m;if(p===Q2){Q4(v,C);return}if(p===Tt){w(m);return}const b=()=>{n(v),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(m.shapeFlag&1&&L&&!L.persisted){const{leave:D,delayLeave:k}=L,_=()=>D(v,b);k?k(m.el,b,_):_()}else b()},Q4=(m,p)=>{let v;for(;m!==p;)v=h(m),n(m),m=v;n(p)},I0=(m,p,v)=>{const{bum:C,scope:L,update:b,subTree:D,um:k}=m;C&&h8(C),L.stop(),b&&(b.active=!1,z1(D,m,p,v)),k&&C1(k,p),C1(()=>{m.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},r1=(m,p,v,C=!1,L=!1,b=0)=>{for(let D=b;D<m.length;D++)z1(m[D],p,v,C,L)},y=m=>m.shapeFlag&6?y(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),F=(m,p,v)=>{m==null?p._vnode&&z1(p._vnode,null,null,!0):z(p._vnode||null,m,p,null,null,null,v),Kr(),bo(),p._vnode=m},E={p:z,um:z1,m:X1,r:Y4,mt:e1,mc:T,pc:g2,pbc:Z,n:y,o:c};let j,H2;return e&&([j,H2]=e(E)),{render:F,hydrate:j,createApp:bM(F,j)}}function p4({effect:c,update:e},t){c.allowRecurse=e.allowRecurse=t}function cn(c,e,t=!1){const a=c.children,n=e.children;if(Q(a)&&Q(n))for(let r=0;r<a.length;r++){const s=a[r];let i=n[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=n[r]=F3(n[r]),i.el=s.el),t||cn(s,i)),i.type===Hc&&(i.el=s.el)}}function IM(c){const e=c.slice(),t=[0];let a,n,r,s,i;const o=c.length;for(a=0;a<o;a++){const l=c[a];if(l!==0){if(n=t[t.length-1],c[n]<l){e[a]=n,t.push(a);continue}for(r=0,s=t.length-1;r<s;)i=r+s>>1,c[t[i]]<l?r=i+1:s=i;l<c[t[r]]&&(r>0&&(e[a]=t[r-1]),t[r]=a)}}for(r=t.length,s=t[r-1];r-- >0;)t[r]=s,s=e[s];return t}const PM=c=>c.__isTeleport,he=c=>c&&(c.disabled||c.disabled===""),ss=c=>typeof SVGElement<"u"&&c instanceof SVGElement,_5=(c,e)=>{const t=c&&c.to;return I2(t)?e?e(t):null:t},RM={__isTeleport:!0,process(c,e,t,a,n,r,s,i,o,l){const{mc:f,pc:u,pbc:h,o:{insert:d,querySelector:g,createText:z,createComment:M}}=l,H=he(e.props);let{shapeFlag:V,children:A,dynamicChildren:w}=e;if(c==null){const R=e.el=z(""),J=e.anchor=z("");d(R,t,a),d(J,t,a);const X=e.target=_5(e.props,g),T=e.targetAnchor=z("");X&&(d(T,X),s=s||ss(X));const P=(Z,d2)=>{V&16&&f(A,Z,d2,n,r,s,i,o)};H?P(t,J):X&&P(X,T)}else{e.el=c.el;const R=e.anchor=c.anchor,J=e.target=c.target,X=e.targetAnchor=c.targetAnchor,T=he(c.props),P=T?t:J,Z=T?R:X;if(s=s||ss(J),w?(h(c.dynamicChildren,w,P,n,r,s,i),cn(c,e,!0)):o||u(c,e,P,Z,n,r,s,i,!1),H)T||$0(e,t,R,l,1);else if((e.props&&e.props.to)!==(c.props&&c.props.to)){const d2=e.target=_5(e.props,g);d2&&$0(e,d2,null,l,0)}else T&&$0(e,J,X,l,1)}Yo(e)},remove(c,e,t,a,{um:n,o:{remove:r}},s){const{shapeFlag:i,children:o,anchor:l,targetAnchor:f,target:u,props:h}=c;if(u&&r(f),(s||!he(h))&&(r(l),i&16))for(let d=0;d<o.length;d++){const g=o[d];n(g,e,t,!0,!!g.dynamicChildren)}},move:$0,hydrate:DM};function $0(c,e,t,{o:{insert:a},m:n},r=2){r===0&&a(c.targetAnchor,e,t);const{el:s,anchor:i,shapeFlag:o,children:l,props:f}=c,u=r===2;if(u&&a(s,e,t),(!u||he(f))&&o&16)for(let h=0;h<l.length;h++)n(l[h],e,t,2);u&&a(i,e,t)}function DM(c,e,t,a,n,r,{o:{nextSibling:s,parentNode:i,querySelector:o}},l){const f=e.target=_5(e.props,o);if(f){const u=f._lpa||f.firstChild;if(e.shapeFlag&16)if(he(e.props))e.anchor=l(s(c),e,i(c),t,a,n,r),e.targetAnchor=u;else{e.anchor=s(c);let h=u;for(;h;)if(h=s(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,f._lpa=e.targetAnchor&&s(e.targetAnchor);break}l(u,e,f,t,a,n,r)}Yo(e)}return e.anchor&&s(e.anchor)}const OM=RM;function Yo(c){const e=c.ctx;if(e&&e.ut){let t=c.children[0].el;for(;t!==c.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",e.uid),t=t.nextSibling;e.ut()}}const Q2=Symbol.for("v-fgt"),Hc=Symbol.for("v-txt"),P1=Symbol.for("v-cmt"),Tt=Symbol.for("v-stc"),de=[];let U1=null;function L2(c=!1){de.push(U1=c?null:[])}function FM(){de.pop(),U1=de[de.length-1]||null}let ke=1;function is(c){ke+=c}function Qo(c){return c.dynamicChildren=ke>0?U1||l6:null,FM(),ke>0&&U1&&U1.push(c),c}function q2(c,e,t,a,n,r){return Qo(z2(c,e,t,a,n,r,!0))}function f4(c,e,t,a,n){return Qo(D2(c,e,t,a,n,!0))}function A8(c){return c?c.__v_isVNode===!0:!1}function V4(c,e){return c.type===e.type&&c.key===e.key}const zc="__vInternal",Xo=({key:c})=>c??null,m8=({ref:c,ref_key:e,ref_for:t})=>(typeof c=="number"&&(c=""+c),c!=null?I2(c)||R2(c)||s2(c)?{i:X2,r:c,k:e,f:!!t}:c:null);function z2(c,e=null,t=null,a=0,n=null,r=c===Q2?0:1,s=!1,i=!1){const o={__v_isVNode:!0,__v_skip:!0,type:c,props:e,key:e&&Xo(e),ref:e&&m8(e),scopeId:mc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:X2};return i?(tn(o,t),r&128&&c.normalize(o)):t&&(o.shapeFlag|=I2(t)?8:16),ke>0&&!s&&U1&&(o.patchFlag>0||r&6)&&o.patchFlag!==32&&U1.push(o),o}const D2=BM;function BM(c,e=null,t=null,a=0,n=null,r=!1){if((!c||c===Do)&&(c=P1),A8(c)){const i=a4(c,e,!0);return t&&tn(i,t),ke>0&&!r&&U1&&(i.shapeFlag&6?U1[U1.indexOf(c)]=i:U1.push(i)),i.patchFlag|=-2,i}if(ey(c)&&(c=c.__vccOpts),e){e=UM(e);let{class:i,style:o}=e;i&&!I2(i)&&(e.class=fc(i)),k2(o)&&(zo(o)&&!Q(o)&&(o=$2({},o)),e.style=Fa(o))}const s=I2(c)?1:cM(c)?128:PM(c)?64:k2(c)?4:s2(c)?2:0;return z2(c,e,t,a,n,s,r,!0)}function UM(c){return c?zo(c)||zc in c?$2({},c):c:null}function a4(c,e,t=!1){const{props:a,ref:n,patchFlag:r,children:s}=c,i=e?qM(a||{},e):a;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:i,key:i&&Xo(i),ref:e&&e.ref?t&&n?Q(n)?n.concat(m8(e)):[n,m8(e)]:m8(e):n,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:s,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:e&&c.type!==Q2?r===-1?16:r|16:r,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&a4(c.ssContent),ssFallback:c.ssFallback&&a4(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function $M(c=" ",e=0){return D2(Hc,null,c,e)}function Te(c="",e=!1){return e?(L2(),f4(P1,null,c)):D2(P1,null,c)}function e3(c){return c==null||typeof c=="boolean"?D2(P1):Q(c)?D2(Q2,null,c.slice()):typeof c=="object"?F3(c):D2(Hc,null,String(c))}function F3(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:a4(c)}function tn(c,e){let t=0;const{shapeFlag:a}=c;if(e==null)e=null;else if(Q(e))t=16;else if(typeof e=="object")if(a&65){const n=e.default;n&&(n._c&&(n._d=!1),tn(c,n()),n._c&&(n._d=!0));return}else{t=32;const n=e._;!n&&!(zc in e)?e._ctx=X2:n===3&&X2&&(X2.slots._===1?e._=1:(e._=2,c.patchFlag|=1024))}else s2(e)?(e={default:e,_ctx:X2},t=32):(e=String(e),a&64?(t=16,e=[$M(e)]):t=8);c.children=e,c.shapeFlag|=t}function qM(...c){const e={};for(let t=0;t<c.length;t++){const a=c[t];for(const n in a)if(n==="class")e.class!==a.class&&(e.class=fc([e.class,a.class]));else if(n==="style")e.style=Fa([e.style,a.style]);else if(sc(n)){const r=e[n],s=a[n];s&&r!==s&&!(Q(r)&&r.includes(s))&&(e[n]=r?[].concat(r,s):s)}else n!==""&&(e[n]=a[n])}return e}function Z1(c,e,t,a=null){E1(c,e,7,[t,a])}const jM=$o();let WM=0;function GM(c,e,t){const a=c.type,n=(e?e.appContext:c.appContext)||jM,r={uid:WM++,vnode:c,type:a,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new no(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jo(a,n),emitsOptions:So(a,n),emit:null,emitted:null,propsDefaults:b2,inheritAttrs:a.inheritAttrs,ctx:b2,data:b2,props:b2,attrs:b2,slots:b2,refs:b2,setupState:b2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=QC.bind(null,r),c.ce&&c.ce(r),r}let j2=null;const KM=()=>j2||X2;let an,J4,os="__VUE_INSTANCE_SETTERS__";(J4=z5()[os])||(J4=z5()[os]=[]),J4.push(c=>j2=c),an=c=>{J4.length>1?J4.forEach(e=>e(c)):J4[0](c)};const C6=c=>{an(c),c.scope.on()},A4=()=>{j2&&j2.scope.off(),an(null)};function Jo(c){return c.vnode.shapeFlag&4}let _e=!1;function YM(c,e=!1){_e=e;const{props:t,children:a}=c.vnode,n=Jo(c);SM(c,t,n,e),kM(c,a);const r=n?QM(c,e):void 0;return _e=!1,r}function QM(c,e){const t=c.type;c.accessCache=Object.create(null),c.proxy=r0(new Proxy(c.ctx,zM));const{setup:a}=t;if(a){const n=c.setupContext=a.length>1?JM(c):null;C6(c),E6();const r=Q3(a,c,0,[c.props,n]);if(I6(),A4(),Z9(r)){if(r.then(A4,A4),e)return r.then(s=>{ls(c,s,e)}).catch(s=>{hc(s,c,0)});c.asyncDep=r}else ls(c,r,e)}else Zo(c,e)}function ls(c,e,t){s2(e)?c.type.__ssrInlineRender?c.ssrRender=e:c.render=e:k2(e)&&(c.setupState=yo(e)),Zo(c,t)}let fs;function Zo(c,e,t){const a=c.type;if(!c.render){if(!e&&fs&&!a.render){const n=a.template||Za(c).template;if(n){const{isCustomElement:r,compilerOptions:s}=c.appContext.config,{delimiters:i,compilerOptions:o}=a,l=$2($2({isCustomElement:r,delimiters:i},s),o);a.render=fs(n,l)}}c.render=a.render||q1}C6(c),E6(),VM(c),I6(),A4()}function XM(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(e,t){return L1(c,"get","$attrs"),e[t]}}))}function JM(c){const e=t=>{c.exposed=t||{}};return{get attrs(){return XM(c)},slots:c.slots,emit:c.emit,expose:e}}function Vc(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(yo(r0(c.exposed)),{get(e,t){if(t in e)return e[t];if(t in ue)return ue[t](c)},has(e,t){return t in e||t in ue}}))}function ZM(c,e=!0){return s2(c)?c.displayName||c.name:c.name||e&&c.__name}function ey(c){return s2(c)&&"__vccOpts"in c}const U2=(c,e)=>qC(c,e,_e);function Cc(c,e,t){const a=arguments.length;return a===2?k2(e)&&!Q(e)?A8(e)?D2(c,null,[e]):D2(c,e):D2(c,null,e):(a>3?t=Array.prototype.slice.call(arguments,2):a===3&&A8(t)&&(t=[t]),D2(c,e,t))}const cy=Symbol.for("v-scx"),ty=()=>I1(cy),ay="3.3.4",ny="http://www.w3.org/2000/svg",C4=typeof document<"u"?document:null,us=C4&&C4.createElement("template"),ry={insert:(c,e,t)=>{e.insertBefore(c,t||null)},remove:c=>{const e=c.parentNode;e&&e.removeChild(c)},createElement:(c,e,t,a)=>{const n=e?C4.createElementNS(ny,c):C4.createElement(c,t?{is:t}:void 0);return c==="select"&&a&&a.multiple!=null&&n.setAttribute("multiple",a.multiple),n},createText:c=>C4.createTextNode(c),createComment:c=>C4.createComment(c),setText:(c,e)=>{c.nodeValue=e},setElementText:(c,e)=>{c.textContent=e},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>C4.querySelector(c),setScopeId(c,e){c.setAttribute(e,"")},insertStaticContent(c,e,t,a,n,r){const s=t?t.previousSibling:e.lastChild;if(n&&(n===r||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),t),!(n===r||!(n=n.nextSibling)););else{us.innerHTML=a?`<svg>${c}</svg>`:c;const i=us.content;if(a){const o=i.firstChild;for(;o.firstChild;)i.appendChild(o.firstChild);i.removeChild(o)}e.insertBefore(i,t)}return[s?s.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function sy(c,e,t){const a=c._vtc;a&&(e=(e?[e,...a]:[...a]).join(" ")),e==null?c.removeAttribute("class"):t?c.setAttribute("class",e):c.className=e}function iy(c,e,t){const a=c.style,n=I2(t);if(t&&!n){if(e&&!I2(e))for(const r in e)t[r]==null&&E5(a,r,"");for(const r in t)E5(a,r,t[r])}else{const r=a.display;n?e!==t&&(a.cssText=t):e&&c.removeAttribute("style"),"_vod"in c&&(a.display=r)}}const hs=/\s*!important$/;function E5(c,e,t){if(Q(t))t.forEach(a=>E5(c,e,a));else if(t==null&&(t=""),e.startsWith("--"))c.setProperty(e,t);else{const a=oy(c,e);hs.test(t)?c.setProperty(_6(a),t.replace(hs,""),"important"):c[a]=t}}const ds=["Webkit","Moz","ms"],_t={};function oy(c,e){const t=_t[e];if(t)return t;let a=l3(e);if(a!=="filter"&&a in c)return _t[e]=a;a=lc(a);for(let n=0;n<ds.length;n++){const r=ds[n]+a;if(r in c)return _t[e]=r}return e}const ms="http://www.w3.org/1999/xlink";function ly(c,e,t,a,n){if(a&&e.startsWith("xlink:"))t==null?c.removeAttributeNS(ms,e.slice(6,e.length)):c.setAttributeNS(ms,e,t);else{const r=iC(e);t==null||r&&!to(t)?c.removeAttribute(e):c.setAttribute(e,r?"":t)}}function fy(c,e,t,a,n,r,s){if(e==="innerHTML"||e==="textContent"){a&&s(a,n,r),c[e]=t??"";return}const i=c.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){c._value=t;const l=i==="OPTION"?c.getAttribute("value"):c.value,f=t??"";l!==f&&(c.value=f),t==null&&c.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof c[e];l==="boolean"?t=to(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{c[e]=t}catch{}o&&c.removeAttribute(e)}function c6(c,e,t,a){c.addEventListener(e,t,a)}function uy(c,e,t,a){c.removeEventListener(e,t,a)}function hy(c,e,t,a,n=null){const r=c._vei||(c._vei={}),s=r[e];if(a&&s)s.value=a;else{const[i,o]=dy(e);if(a){const l=r[e]=vy(a,n);c6(c,i,l,o)}else s&&(uy(c,i,s,o),r[e]=void 0)}}const ps=/(?:Once|Passive|Capture)$/;function dy(c){let e;if(ps.test(c)){e={};let a;for(;a=c.match(ps);)c=c.slice(0,c.length-a[0].length),e[a[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):_6(c.slice(2)),e]}let Et=0;const my=Promise.resolve(),py=()=>Et||(my.then(()=>Et=0),Et=Date.now());function vy(c,e){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;E1(gy(a,t.value),e,5,[a])};return t.value=c,t.attached=py(),t}function gy(c,e){if(Q(e)){const t=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{t.call(c),c._stopped=!0},e.map(a=>n=>!n._stopped&&a&&a(n))}else return e}const vs=/^on[a-z]/,Hy=(c,e,t,a,n=!1,r,s,i,o)=>{e==="class"?sy(c,a,n):e==="style"?iy(c,t,a):sc(e)?Pa(e)||hy(c,e,t,a,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zy(c,e,a,n))?fy(c,e,a,r,s,i,o):(e==="true-value"?c._trueValue=a:e==="false-value"&&(c._falseValue=a),ly(c,e,a,n))};function zy(c,e,t,a){return a?!!(e==="innerHTML"||e==="textContent"||e in c&&vs.test(e)&&s2(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&c.tagName==="INPUT"||e==="type"&&c.tagName==="TEXTAREA"||vs.test(e)&&I2(t)?!1:e in c}const E3="transition",Y6="animation",nn=(c,{slots:e})=>Cc(iM,Vy(c),e);nn.displayName="Transition";const el={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};nn.props=$2({},To,el);const v4=(c,e=[])=>{Q(c)?c.forEach(t=>t(...e)):c&&c(...e)},gs=c=>c?Q(c)?c.some(e=>e.length>1):c.length>1:!1;function Vy(c){const e={};for(const B in c)B in el||(e[B]=c[B]);if(c.css===!1)return e;const{name:t="v",type:a,duration:n,enterFromClass:r=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:i=`${t}-enter-to`,appearFromClass:o=r,appearActiveClass:l=s,appearToClass:f=i,leaveFromClass:u=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=c,g=Cy(n),z=g&&g[0],M=g&&g[1],{onBeforeEnter:H,onEnter:V,onEnterCancelled:A,onLeave:w,onLeaveCancelled:R,onBeforeAppear:J=H,onAppear:X=V,onAppearCancelled:T=A}=e,P=(B,p2,e1)=>{g4(B,p2?f:i),g4(B,p2?l:s),e1&&e1()},Z=(B,p2)=>{B._isLeaving=!1,g4(B,u),g4(B,d),g4(B,h),p2&&p2()},d2=B=>(p2,e1)=>{const v1=B?X:V,l2=()=>P(p2,B,e1);v4(v1,[p2,l2]),Hs(()=>{g4(p2,B?o:r),I3(p2,B?f:i),gs(v1)||zs(p2,a,z,l2)})};return $2(e,{onBeforeEnter(B){v4(H,[B]),I3(B,r),I3(B,s)},onBeforeAppear(B){v4(J,[B]),I3(B,o),I3(B,l)},onEnter:d2(!1),onAppear:d2(!0),onLeave(B,p2){B._isLeaving=!0;const e1=()=>Z(B,p2);I3(B,u),Ly(),I3(B,h),Hs(()=>{B._isLeaving&&(g4(B,u),I3(B,d),gs(w)||zs(B,a,M,e1))}),v4(w,[B,e1])},onEnterCancelled(B){P(B,!1),v4(A,[B])},onAppearCancelled(B){P(B,!0),v4(T,[B])},onLeaveCancelled(B){Z(B),v4(R,[B])}})}function Cy(c){if(c==null)return null;if(k2(c))return[It(c.enter),It(c.leave)];{const e=It(c);return[e,e]}}function It(c){return cC(c)}function I3(c,e){e.split(/\s+/).forEach(t=>t&&c.classList.add(t)),(c._vtc||(c._vtc=new Set)).add(e)}function g4(c,e){e.split(/\s+/).forEach(a=>a&&c.classList.remove(a));const{_vtc:t}=c;t&&(t.delete(e),t.size||(c._vtc=void 0))}function Hs(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let My=0;function zs(c,e,t,a){const n=c._endId=++My,r=()=>{n===c._endId&&a()};if(t)return setTimeout(r,t);const{type:s,timeout:i,propCount:o}=yy(c,e);if(!s)return a();const l=s+"end";let f=0;const u=()=>{c.removeEventListener(l,h),r()},h=d=>{d.target===c&&++f>=o&&u()};setTimeout(()=>{f<o&&u()},i+1),c.addEventListener(l,h)}function yy(c,e){const t=window.getComputedStyle(c),a=g=>(t[g]||"").split(", "),n=a(`${E3}Delay`),r=a(`${E3}Duration`),s=Vs(n,r),i=a(`${Y6}Delay`),o=a(`${Y6}Duration`),l=Vs(i,o);let f=null,u=0,h=0;e===E3?s>0&&(f=E3,u=s,h=r.length):e===Y6?l>0&&(f=Y6,u=l,h=o.length):(u=Math.max(s,l),f=u>0?s>l?E3:Y6:null,h=f?f===E3?r.length:o.length:0);const d=f===E3&&/\b(transform|all)(,|$)/.test(a(`${E3}Property`).toString());return{type:f,timeout:u,propCount:h,hasTransform:d}}function Vs(c,e){for(;c.length<e.length;)c=c.concat(c);return Math.max(...e.map((t,a)=>Cs(t)+Cs(c[a])))}function Cs(c){return Number(c.slice(0,-1).replace(",","."))*1e3}function Ly(){return document.body.offsetHeight}const Ms=c=>{const e=c.props["onUpdate:modelValue"]||!1;return Q(e)?t=>h8(e,t):e};function wy(c){c.target.composing=!0}function ys(c){const e=c.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Pt={created(c,{modifiers:{lazy:e,trim:t,number:a}},n){c._assign=Ms(n);const r=a||n.props&&n.props.type==="number";c6(c,e?"change":"input",s=>{if(s.target.composing)return;let i=c.value;t&&(i=i.trim()),r&&(i=H5(i)),c._assign(i)}),t&&c6(c,"change",()=>{c.value=c.value.trim()}),e||(c6(c,"compositionstart",wy),c6(c,"compositionend",ys),c6(c,"change",ys))},mounted(c,{value:e}){c.value=e??""},beforeUpdate(c,{value:e,modifiers:{lazy:t,trim:a,number:n}},r){if(c._assign=Ms(r),c.composing||document.activeElement===c&&c.type!=="range"&&(t||a&&c.value.trim()===e||(n||c.type==="number")&&H5(c.value)===e))return;const s=e??"";c.value!==s&&(c.value=s)}},by=["ctrl","shift","alt","meta"],xy={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,e)=>by.some(t=>c[`${t}Key`]&&!e.includes(t))},Sy=(c,e)=>(t,...a)=>{for(let n=0;n<e.length;n++){const r=xy[e[n]];if(r&&r(t,e))return}return c(t,...a)},Ny=$2({patchProp:Hy},ry);let Ls;function Ay(){return Ls||(Ls=_M(Ny))}const ky=(...c)=>{const e=Ay().createApp(...c),{mount:t}=e;return e.mount=a=>{const n=Ty(a);if(!n)return;const r=e._component;!s2(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.innerHTML="";const s=t(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),s},e};function Ty(c){return I2(c)?document.querySelector(c):c}var _y=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let cl;const Mc=c=>cl=c,tl=Symbol();function I5(c){return c&&typeof c=="object"&&Object.prototype.toString.call(c)==="[object Object]"&&typeof c.toJSON!="function"}var me;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(me||(me={}));function Ey(){const c=ro(!0),e=c.run(()=>Y3({}));let t=[],a=[];const n=r0({install(r){Mc(n),n._a=r,r.provide(tl,n),r.config.globalProperties.$pinia=n,a.forEach(s=>t.push(s)),a=[]},use(r){return!this._a&&!_y?a.push(r):t.push(r),this},_p:t,_a:null,_e:c,_s:new Map,state:e});return n}const al=()=>{};function ws(c,e,t,a=al){c.push(e);const n=()=>{const r=c.indexOf(e);r>-1&&(c.splice(r,1),a())};return!t&&so()&&lC(n),n}function Z4(c,...e){c.slice().forEach(t=>{t(...e)})}const Iy=c=>c();function P5(c,e){c instanceof Map&&e instanceof Map&&e.forEach((t,a)=>c.set(a,t)),c instanceof Set&&e instanceof Set&&e.forEach(c.add,c);for(const t in e){if(!e.hasOwnProperty(t))continue;const a=e[t],n=c[t];I5(n)&&I5(a)&&c.hasOwnProperty(t)&&!R2(a)&&!K3(a)?c[t]=P5(n,a):c[t]=a}return c}const Py=Symbol();function Ry(c){return!I5(c)||!c.hasOwnProperty(Py)}const{assign:O3}=Object;function Dy(c){return!!(R2(c)&&c.effect)}function Oy(c,e,t,a){const{state:n,actions:r,getters:s}=e,i=t.state.value[c];let o;function l(){i||(t.state.value[c]=n?n():{});const f=FC(t.state.value[c]);return O3(f,r,Object.keys(s||{}).reduce((u,h)=>(u[h]=r0(U2(()=>{Mc(t);const d=t._s.get(c);return s[h].call(d,d)})),u),{}))}return o=nl(c,l,e,t,a,!0),o}function nl(c,e,t={},a,n,r){let s;const i=O3({actions:{}},t),o={deep:!0};let l,f,u=[],h=[],d;const g=a.state.value[c];!r&&!g&&(a.state.value[c]={}),Y3({});let z;function M(T){let P;l=f=!1,typeof T=="function"?(T(a.state.value[c]),P={type:me.patchFunction,storeId:c,events:d}):(P5(a.state.value[c],T),P={type:me.patchObject,payload:T,storeId:c,events:d});const Z=z=Symbol();Ya().then(()=>{z===Z&&(l=!0)}),f=!0,Z4(u,P,a.state.value[c])}const H=r?function(){const{state:P}=t,Z=P?P():{};this.$patch(d2=>{O3(d2,Z)})}:al;function V(){s.stop(),u=[],h=[],a._s.delete(c)}function A(T,P){return function(){Mc(a);const Z=Array.from(arguments),d2=[],B=[];function p2(l2){d2.push(l2)}function e1(l2){B.push(l2)}Z4(h,{args:Z,name:T,store:R,after:p2,onError:e1});let v1;try{v1=P.apply(this&&this.$id===c?this:R,Z)}catch(l2){throw Z4(B,l2),l2}return v1 instanceof Promise?v1.then(l2=>(Z4(d2,l2),l2)).catch(l2=>(Z4(B,l2),Promise.reject(l2))):(Z4(d2,v1),v1)}}const w={_p:a,$id:c,$onAction:ws.bind(null,h),$patch:M,$reset:H,$subscribe(T,P={}){const Z=ws(u,T,P.detached,()=>d2()),d2=s.run(()=>h6(()=>a.state.value[c],B=>{(P.flush==="sync"?f:l)&&T({storeId:c,type:me.direct,events:d},B)},O3({},o,P)));return Z},$dispose:V},R=P6(w);a._s.set(c,R);const J=a._a&&a._a.runWithContext||Iy,X=a._e.run(()=>(s=ro(),J(()=>s.run(e))));for(const T in X){const P=X[T];if(R2(P)&&!Dy(P)||K3(P))r||(g&&Ry(P)&&(R2(P)?P.value=g[T]:P5(P,g[T])),a.state.value[c][T]=P);else if(typeof P=="function"){const Z=A(T,P);X[T]=Z,i.actions[T]=P}}return O3(R,X),O3(u2(R),X),Object.defineProperty(R,"$state",{get:()=>a.state.value[c],set:T=>{M(P=>{O3(P,T)})}}),a._p.forEach(T=>{O3(R,s.run(()=>T({store:R,app:a._a,pinia:a,options:i})))}),g&&r&&t.hydrate&&t.hydrate(R.$state,g),l=!0,f=!0,R}function rl(c,e,t){let a,n;const r=typeof e=="function";typeof c=="string"?(a=c,n=r?t:e):(n=c,a=c.id);function s(i,o){const l=xM();return i=i||(l?I1(tl,null):null),i&&Mc(i),i=cl,i._s.has(a)||(r?nl(a,e,n,i):Oy(a,n,i)),i._s.get(a)}return s.$id=a,s}const Fy="modulepreload",By=function(c){return"/landing-state-vex/"+c},bs={},q0=function(e,t,a){if(!t||t.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=By(r),r in bs)return;bs[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(!!a)for(let f=n.length-1;f>=0;f--){const u=n[f];if(u.href===r&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":Fy,s||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),s)return new Promise((f,u)=>{l.addEventListener("load",f),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const t6=typeof window<"u";function Uy(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const V2=Object.assign;function Rt(c,e){const t={};for(const a in e){const n=e[a];t[a]=W1(n)?n.map(c):c(n)}return t}const pe=()=>{},W1=Array.isArray,$y=/\/$/,qy=c=>c.replace($y,"");function Dt(c,e,t="/"){let a,n={},r="",s="";const i=e.indexOf("#");let o=e.indexOf("?");return i<o&&i>=0&&(o=-1),o>-1&&(a=e.slice(0,o),r=e.slice(o+1,i>-1?i:e.length),n=c(r)),i>-1&&(a=a||e.slice(0,i),s=e.slice(i,e.length)),a=Ky(a??e,t),{fullPath:a+(r&&"?")+r+s,path:a,query:n,hash:s}}function jy(c,e){const t=e.query?c(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function xs(c,e){return!e||!c.toLowerCase().startsWith(e.toLowerCase())?c:c.slice(e.length)||"/"}function Wy(c,e,t){const a=e.matched.length-1,n=t.matched.length-1;return a>-1&&a===n&&M6(e.matched[a],t.matched[n])&&sl(e.params,t.params)&&c(e.query)===c(t.query)&&e.hash===t.hash}function M6(c,e){return(c.aliasOf||c)===(e.aliasOf||e)}function sl(c,e){if(Object.keys(c).length!==Object.keys(e).length)return!1;for(const t in c)if(!Gy(c[t],e[t]))return!1;return!0}function Gy(c,e){return W1(c)?Ss(c,e):W1(e)?Ss(e,c):c===e}function Ss(c,e){return W1(e)?c.length===e.length&&c.every((t,a)=>t===e[a]):c.length===1&&c[0]===e}function Ky(c,e){if(c.startsWith("/"))return c;if(!c)return e;const t=e.split("/"),a=c.split("/"),n=a[a.length-1];(n===".."||n===".")&&a.push("");let r=t.length-1,s,i;for(s=0;s<a.length;s++)if(i=a[s],i!==".")if(i==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+a.slice(s-(s===a.length?1:0)).join("/")}var Ee;(function(c){c.pop="pop",c.push="push"})(Ee||(Ee={}));var ve;(function(c){c.back="back",c.forward="forward",c.unknown=""})(ve||(ve={}));function Yy(c){if(!c)if(t6){const e=document.querySelector("base");c=e&&e.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),qy(c)}const Qy=/^[^#]+#/;function Xy(c,e){return c.replace(Qy,"#")+e}function Jy(c,e){const t=document.documentElement.getBoundingClientRect(),a=c.getBoundingClientRect();return{behavior:e.behavior,left:a.left-t.left-(e.left||0),top:a.top-t.top-(e.top||0)}}const yc=()=>({left:window.pageXOffset,top:window.pageYOffset});function Zy(c){let e;if("el"in c){const t=c.el,a=typeof t=="string"&&t.startsWith("#"),n=typeof t=="string"?a?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!n)return;e=Jy(n,c)}else e=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ns(c,e){return(history.state?history.state.position-e:-1)+c}const R5=new Map;function eL(c,e){R5.set(c,e)}function cL(c){const e=R5.get(c);return R5.delete(c),e}let tL=()=>location.protocol+"//"+location.host;function il(c,e){const{pathname:t,search:a,hash:n}=e,r=c.indexOf("#");if(r>-1){let i=n.includes(c.slice(r))?c.slice(r).length:1,o=n.slice(i);return o[0]!=="/"&&(o="/"+o),xs(o,"")}return xs(t,c)+a+n}function aL(c,e,t,a){let n=[],r=[],s=null;const i=({state:h})=>{const d=il(c,location),g=t.value,z=e.value;let M=0;if(h){if(t.value=d,e.value=h,s&&s===g){s=null;return}M=z?h.position-z.position:0}else a(d);n.forEach(H=>{H(t.value,g,{delta:M,type:Ee.pop,direction:M?M>0?ve.forward:ve.back:ve.unknown})})};function o(){s=t.value}function l(h){n.push(h);const d=()=>{const g=n.indexOf(h);g>-1&&n.splice(g,1)};return r.push(d),d}function f(){const{history:h}=window;h.state&&h.replaceState(V2({},h.state,{scroll:yc()}),"")}function u(){for(const h of r)h();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:o,listen:l,destroy:u}}function As(c,e,t,a=!1,n=!1){return{back:c,current:e,forward:t,replaced:a,position:window.history.length,scroll:n?yc():null}}function nL(c){const{history:e,location:t}=window,a={value:il(c,t)},n={value:e.state};n.value||r(a.value,{back:null,current:a.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(o,l,f){const u=c.indexOf("#"),h=u>-1?(t.host&&document.querySelector("base")?c:c.slice(u))+o:tL()+c+o;try{e[f?"replaceState":"pushState"](l,"",h),n.value=l}catch(d){console.error(d),t[f?"replace":"assign"](h)}}function s(o,l){const f=V2({},e.state,As(n.value.back,o,n.value.forward,!0),l,{position:n.value.position});r(o,f,!0),a.value=o}function i(o,l){const f=V2({},n.value,e.state,{forward:o,scroll:yc()});r(f.current,f,!0);const u=V2({},As(a.value,o,null),{position:f.position+1},l);r(o,u,!1),a.value=o}return{location:a,state:n,push:i,replace:s}}function rL(c){c=Yy(c);const e=nL(c),t=aL(c,e.state,e.location,e.replace);function a(r,s=!0){s||t.pauseListeners(),history.go(r)}const n=V2({location:"",base:c,go:a,createHref:Xy.bind(null,c)},e,t);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>e.state.value}),n}function sL(c){return typeof c=="string"||c&&typeof c=="object"}function ol(c){return typeof c=="string"||typeof c=="symbol"}const P3={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ll=Symbol("");var ks;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(ks||(ks={}));function y6(c,e){return V2(new Error,{type:c,[ll]:!0},e)}function p3(c,e){return c instanceof Error&&ll in c&&(e==null||!!(c.type&e))}const Ts="[^/]+?",iL={sensitive:!1,strict:!1,start:!0,end:!0},oL=/[.+*?^${}()[\]/\\]/g;function lL(c,e){const t=V2({},iL,e),a=[];let n=t.start?"^":"";const r=[];for(const l of c){const f=l.length?[]:[90];t.strict&&!l.length&&(n+="/");for(let u=0;u<l.length;u++){const h=l[u];let d=40+(t.sensitive?.25:0);if(h.type===0)u||(n+="/"),n+=h.value.replace(oL,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:z,optional:M,regexp:H}=h;r.push({name:g,repeatable:z,optional:M});const V=H||Ts;if(V!==Ts){d+=10;try{new RegExp(`(${V})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${g}" (${V}): `+w.message)}}let A=z?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;u||(A=M&&l.length<2?`(?:/${A})`:"/"+A),M&&(A+="?"),n+=A,d+=20,M&&(d+=-8),z&&(d+=-20),V===".*"&&(d+=-50)}f.push(d)}a.push(f)}if(t.strict&&t.end){const l=a.length-1;a[l][a[l].length-1]+=.7000000000000001}t.strict||(n+="/?"),t.end?n+="$":t.strict&&(n+="(?:/|$)");const s=new RegExp(n,t.sensitive?"":"i");function i(l){const f=l.match(s),u={};if(!f)return null;for(let h=1;h<f.length;h++){const d=f[h]||"",g=r[h-1];u[g.name]=d&&g.repeatable?d.split("/"):d}return u}function o(l){let f="",u=!1;for(const h of c){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const d of h)if(d.type===0)f+=d.value;else if(d.type===1){const{value:g,repeatable:z,optional:M}=d,H=g in l?l[g]:"";if(W1(H)&&!z)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const V=W1(H)?H.join("/"):H;if(!V)if(M)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);f+=V}}return f||"/"}return{re:s,score:a,keys:r,parse:i,stringify:o}}function fL(c,e){let t=0;for(;t<c.length&&t<e.length;){const a=e[t]-c[t];if(a)return a;t++}return c.length<e.length?c.length===1&&c[0]===40+40?-1:1:c.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function uL(c,e){let t=0;const a=c.score,n=e.score;for(;t<a.length&&t<n.length;){const r=fL(a[t],n[t]);if(r)return r;t++}if(Math.abs(n.length-a.length)===1){if(_s(a))return 1;if(_s(n))return-1}return n.length-a.length}function _s(c){const e=c[c.length-1];return c.length>0&&e[e.length-1]<0}const hL={type:0,value:""},dL=/[a-zA-Z0-9_]/;function mL(c){if(!c)return[[]];if(c==="/")return[[hL]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function e(d){throw new Error(`ERR (${t})/"${l}": ${d}`)}let t=0,a=t;const n=[];let r;function s(){r&&n.push(r),r=[]}let i=0,o,l="",f="";function u(){l&&(t===0?r.push({type:0,value:l}):t===1||t===2||t===3?(r.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=o}for(;i<c.length;){if(o=c[i++],o==="\\"&&t!==2){a=t,t=4;continue}switch(t){case 0:o==="/"?(l&&u(),s()):o===":"?(u(),t=1):h();break;case 4:h(),t=a;break;case 1:o==="("?t=2:dL.test(o)?h():(u(),t=0,o!=="*"&&o!=="?"&&o!=="+"&&i--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:t=3:f+=o;break;case 3:u(),t=0,o!=="*"&&o!=="?"&&o!=="+"&&i--,f="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),s(),n}function pL(c,e,t){const a=lL(mL(c.path),t),n=V2(a,{record:c,parent:e,children:[],alias:[]});return e&&!n.record.aliasOf==!e.record.aliasOf&&e.children.push(n),n}function vL(c,e){const t=[],a=new Map;e=Ps({strict:!1,end:!0,sensitive:!1},e);function n(f){return a.get(f)}function r(f,u,h){const d=!h,g=gL(f);g.aliasOf=h&&h.record;const z=Ps(e,f),M=[g];if("alias"in f){const A=typeof f.alias=="string"?[f.alias]:f.alias;for(const w of A)M.push(V2({},g,{components:h?h.record.components:g.components,path:w,aliasOf:h?h.record:g}))}let H,V;for(const A of M){const{path:w}=A;if(u&&w[0]!=="/"){const R=u.record.path,J=R[R.length-1]==="/"?"":"/";A.path=u.record.path+(w&&J+w)}if(H=pL(A,u,z),h?h.alias.push(H):(V=V||H,V!==H&&V.alias.push(H),d&&f.name&&!Is(H)&&s(f.name)),g.children){const R=g.children;for(let J=0;J<R.length;J++)r(R[J],H,h&&h.children[J])}h=h||H,(H.record.components&&Object.keys(H.record.components).length||H.record.name||H.record.redirect)&&o(H)}return V?()=>{s(V)}:pe}function s(f){if(ol(f)){const u=a.get(f);u&&(a.delete(f),t.splice(t.indexOf(u),1),u.children.forEach(s),u.alias.forEach(s))}else{const u=t.indexOf(f);u>-1&&(t.splice(u,1),f.record.name&&a.delete(f.record.name),f.children.forEach(s),f.alias.forEach(s))}}function i(){return t}function o(f){let u=0;for(;u<t.length&&uL(f,t[u])>=0&&(f.record.path!==t[u].record.path||!fl(f,t[u]));)u++;t.splice(u,0,f),f.record.name&&!Is(f)&&a.set(f.record.name,f)}function l(f,u){let h,d={},g,z;if("name"in f&&f.name){if(h=a.get(f.name),!h)throw y6(1,{location:f});z=h.record.name,d=V2(Es(u.params,h.keys.filter(V=>!V.optional).map(V=>V.name)),f.params&&Es(f.params,h.keys.map(V=>V.name))),g=h.stringify(d)}else if("path"in f)g=f.path,h=t.find(V=>V.re.test(g)),h&&(d=h.parse(g),z=h.record.name);else{if(h=u.name?a.get(u.name):t.find(V=>V.re.test(u.path)),!h)throw y6(1,{location:f,currentLocation:u});z=h.record.name,d=V2({},u.params,f.params),g=h.stringify(d)}const M=[];let H=h;for(;H;)M.unshift(H.record),H=H.parent;return{name:z,path:g,params:d,matched:M,meta:zL(M)}}return c.forEach(f=>r(f)),{addRoute:r,resolve:l,removeRoute:s,getRoutes:i,getRecordMatcher:n}}function Es(c,e){const t={};for(const a of e)a in c&&(t[a]=c[a]);return t}function gL(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:HL(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function HL(c){const e={},t=c.props||!1;if("component"in c)e.default=t;else for(const a in c.components)e[a]=typeof t=="boolean"?t:t[a];return e}function Is(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function zL(c){return c.reduce((e,t)=>V2(e,t.meta),{})}function Ps(c,e){const t={};for(const a in c)t[a]=a in e?e[a]:c[a];return t}function fl(c,e){return e.children.some(t=>t===c||fl(c,t))}const ul=/#/g,VL=/&/g,CL=/\//g,ML=/=/g,yL=/\?/g,hl=/\+/g,LL=/%5B/g,wL=/%5D/g,dl=/%5E/g,bL=/%60/g,ml=/%7B/g,xL=/%7C/g,pl=/%7D/g,SL=/%20/g;function rn(c){return encodeURI(""+c).replace(xL,"|").replace(LL,"[").replace(wL,"]")}function NL(c){return rn(c).replace(ml,"{").replace(pl,"}").replace(dl,"^")}function D5(c){return rn(c).replace(hl,"%2B").replace(SL,"+").replace(ul,"%23").replace(VL,"%26").replace(bL,"`").replace(ml,"{").replace(pl,"}").replace(dl,"^")}function AL(c){return D5(c).replace(ML,"%3D")}function kL(c){return rn(c).replace(ul,"%23").replace(yL,"%3F")}function TL(c){return c==null?"":kL(c).replace(CL,"%2F")}function k8(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function _L(c){const e={};if(c===""||c==="?")return e;const a=(c[0]==="?"?c.slice(1):c).split("&");for(let n=0;n<a.length;++n){const r=a[n].replace(hl," "),s=r.indexOf("="),i=k8(s<0?r:r.slice(0,s)),o=s<0?null:k8(r.slice(s+1));if(i in e){let l=e[i];W1(l)||(l=e[i]=[l]),l.push(o)}else e[i]=o}return e}function Rs(c){let e="";for(let t in c){const a=c[t];if(t=AL(t),a==null){a!==void 0&&(e+=(e.length?"&":"")+t);continue}(W1(a)?a.map(r=>r&&D5(r)):[a&&D5(a)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function EL(c){const e={};for(const t in c){const a=c[t];a!==void 0&&(e[t]=W1(a)?a.map(n=>n==null?null:""+n):a==null?a:""+a)}return e}const IL=Symbol(""),Ds=Symbol(""),Lc=Symbol(""),sn=Symbol(""),O5=Symbol("");function Q6(){let c=[];function e(a){return c.push(a),()=>{const n=c.indexOf(a);n>-1&&c.splice(n,1)}}function t(){c=[]}return{add:e,list:()=>c,reset:t}}function B3(c,e,t,a,n){const r=a&&(a.enterCallbacks[n]=a.enterCallbacks[n]||[]);return()=>new Promise((s,i)=>{const o=u=>{u===!1?i(y6(4,{from:t,to:e})):u instanceof Error?i(u):sL(u)?i(y6(2,{from:e,to:u})):(r&&a.enterCallbacks[n]===r&&typeof u=="function"&&r.push(u),s())},l=c.call(a&&a.instances[n],e,t,o);let f=Promise.resolve(l);c.length<3&&(f=f.then(o)),f.catch(u=>i(u))})}function Ot(c,e,t,a){const n=[];for(const r of c)for(const s in r.components){let i=r.components[s];if(!(e!=="beforeRouteEnter"&&!r.instances[s]))if(PL(i)){const l=(i.__vccOpts||i)[e];l&&n.push(B3(l,t,a,r,s))}else{let o=i();n.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${r.path}"`));const f=Uy(l)?l.default:l;r.components[s]=f;const h=(f.__vccOpts||f)[e];return h&&B3(h,t,a,r,s)()}))}}return n}function PL(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function Os(c){const e=I1(Lc),t=I1(sn),a=U2(()=>e.resolve(_1(c.to))),n=U2(()=>{const{matched:o}=a.value,{length:l}=o,f=o[l-1],u=t.matched;if(!f||!u.length)return-1;const h=u.findIndex(M6.bind(null,f));if(h>-1)return h;const d=Fs(o[l-2]);return l>1&&Fs(f)===d&&u[u.length-1].path!==d?u.findIndex(M6.bind(null,o[l-2])):h}),r=U2(()=>n.value>-1&&FL(t.params,a.value.params)),s=U2(()=>n.value>-1&&n.value===t.matched.length-1&&sl(t.params,a.value.params));function i(o={}){return OL(o)?e[_1(c.replace)?"replace":"push"](_1(c.to)).catch(pe):Promise.resolve()}return{route:a,href:U2(()=>a.value.href),isActive:r,isExactActive:s,navigate:i}}const RL=O1({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Os,setup(c,{slots:e}){const t=P6(Os(c)),{options:a}=I1(Lc),n=U2(()=>({[Bs(c.activeClass,a.linkActiveClass,"router-link-active")]:t.isActive,[Bs(c.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return c.custom?r:Cc("a",{"aria-current":t.isExactActive?c.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:n.value},r)}}}),DL=RL;function OL(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const e=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return c.preventDefault&&c.preventDefault(),!0}}function FL(c,e){for(const t in e){const a=e[t],n=c[t];if(typeof a=="string"){if(a!==n)return!1}else if(!W1(n)||n.length!==a.length||a.some((r,s)=>r!==n[s]))return!1}return!0}function Fs(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const Bs=(c,e,t)=>c??e??t,BL=O1({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:e,slots:t}){const a=I1(O5),n=U2(()=>c.route||a.value),r=I1(Ds,0),s=U2(()=>{let l=_1(r);const{matched:f}=n.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),i=U2(()=>n.value.matched[s.value]);d8(Ds,U2(()=>s.value+1)),d8(IL,i),d8(O5,n);const o=Y3();return h6(()=>[o.value,i.value,c.name],([l,f,u],[h,d,g])=>{f&&(f.instances[u]=l,d&&d!==f&&l&&l===h&&(f.leaveGuards.size||(f.leaveGuards=d.leaveGuards),f.updateGuards.size||(f.updateGuards=d.updateGuards))),l&&f&&(!d||!M6(f,d)||!h)&&(f.enterCallbacks[u]||[]).forEach(z=>z(l))},{flush:"post"}),()=>{const l=n.value,f=c.name,u=i.value,h=u&&u.components[f];if(!h)return Us(t.default,{Component:h,route:l});const d=u.props[f],g=d?d===!0?l.params:typeof d=="function"?d(l):d:null,M=Cc(h,V2({},g,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(u.instances[f]=null)},ref:o}));return Us(t.default,{Component:M,route:l})||M}}});function Us(c,e){if(!c)return null;const t=c(e);return t.length===1?t[0]:t}const vl=BL;function UL(c){const e=vL(c.routes,c),t=c.parseQuery||_L,a=c.stringifyQuery||Rs,n=c.history,r=Q6(),s=Q6(),i=Q6(),o=y5(P3);let l=P3;t6&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Rt.bind(null,y=>""+y),u=Rt.bind(null,TL),h=Rt.bind(null,k8);function d(y,F){let E,j;return ol(y)?(E=e.getRecordMatcher(y),j=F):j=y,e.addRoute(j,E)}function g(y){const F=e.getRecordMatcher(y);F&&e.removeRoute(F)}function z(){return e.getRoutes().map(y=>y.record)}function M(y){return!!e.getRecordMatcher(y)}function H(y,F){if(F=V2({},F||o.value),typeof y=="string"){const v=Dt(t,y,F.path),C=e.resolve({path:v.path},F),L=n.createHref(v.fullPath);return V2(v,C,{params:h(C.params),hash:k8(v.hash),redirectedFrom:void 0,href:L})}let E;if("path"in y)E=V2({},y,{path:Dt(t,y.path,F.path).path});else{const v=V2({},y.params);for(const C in v)v[C]==null&&delete v[C];E=V2({},y,{params:u(v)}),F.params=u(F.params)}const j=e.resolve(E,F),H2=y.hash||"";j.params=f(h(j.params));const m=jy(a,V2({},y,{hash:NL(H2),path:j.path})),p=n.createHref(m);return V2({fullPath:m,hash:H2,query:a===Rs?EL(y.query):y.query||{}},j,{redirectedFrom:void 0,href:p})}function V(y){return typeof y=="string"?Dt(t,y,o.value.path):V2({},y)}function A(y,F){if(l!==y)return y6(8,{from:F,to:y})}function w(y){return X(y)}function R(y){return w(V2(V(y),{replace:!0}))}function J(y){const F=y.matched[y.matched.length-1];if(F&&F.redirect){const{redirect:E}=F;let j=typeof E=="function"?E(y):E;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=V(j):{path:j},j.params={}),V2({query:y.query,hash:y.hash,params:"path"in j?{}:y.params},j)}}function X(y,F){const E=l=H(y),j=o.value,H2=y.state,m=y.force,p=y.replace===!0,v=J(E);if(v)return X(V2(V(v),{state:typeof v=="object"?V2({},H2,v.state):H2,force:m,replace:p}),F||E);const C=E;C.redirectedFrom=F;let L;return!m&&Wy(a,j,E)&&(L=y6(16,{to:C,from:j}),X1(j,j,!0,!1)),(L?Promise.resolve(L):Z(C,j)).catch(b=>p3(b)?p3(b,2)?b:T3(b):g2(b,C,j)).then(b=>{if(b){if(p3(b,2))return X(V2({replace:p},V(b.to),{state:typeof b.to=="object"?V2({},H2,b.to.state):H2,force:m}),F||C)}else b=B(C,j,!0,p,H2);return d2(C,j,b),b})}function T(y,F){const E=A(y,F);return E?Promise.reject(E):Promise.resolve()}function P(y){const F=Q4.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(y):y()}function Z(y,F){let E;const[j,H2,m]=$L(y,F);E=Ot(j.reverse(),"beforeRouteLeave",y,F);for(const v of j)v.leaveGuards.forEach(C=>{E.push(B3(C,y,F))});const p=T.bind(null,y,F);return E.push(p),r1(E).then(()=>{E=[];for(const v of r.list())E.push(B3(v,y,F));return E.push(p),r1(E)}).then(()=>{E=Ot(H2,"beforeRouteUpdate",y,F);for(const v of H2)v.updateGuards.forEach(C=>{E.push(B3(C,y,F))});return E.push(p),r1(E)}).then(()=>{E=[];for(const v of y.matched)if(v.beforeEnter&&!F.matched.includes(v))if(W1(v.beforeEnter))for(const C of v.beforeEnter)E.push(B3(C,y,F));else E.push(B3(v.beforeEnter,y,F));return E.push(p),r1(E)}).then(()=>(y.matched.forEach(v=>v.enterCallbacks={}),E=Ot(m,"beforeRouteEnter",y,F),E.push(p),r1(E))).then(()=>{E=[];for(const v of s.list())E.push(B3(v,y,F));return E.push(p),r1(E)}).catch(v=>p3(v,8)?v:Promise.reject(v))}function d2(y,F,E){for(const j of i.list())P(()=>j(y,F,E))}function B(y,F,E,j,H2){const m=A(y,F);if(m)return m;const p=F===P3,v=t6?history.state:{};E&&(j||p?n.replace(y.fullPath,V2({scroll:p&&v&&v.scroll},H2)):n.push(y.fullPath,H2)),o.value=y,X1(y,F,E,p),T3()}let p2;function e1(){p2||(p2=n.listen((y,F,E)=>{if(!I0.listening)return;const j=H(y),H2=J(j);if(H2){X(V2(H2,{replace:!0}),j).catch(pe);return}l=j;const m=o.value;t6&&eL(Ns(m.fullPath,E.delta),yc()),Z(j,m).catch(p=>p3(p,12)?p:p3(p,2)?(X(p.to,j).then(v=>{p3(v,20)&&!E.delta&&E.type===Ee.pop&&n.go(-1,!1)}).catch(pe),Promise.reject()):(E.delta&&n.go(-E.delta,!1),g2(p,j,m))).then(p=>{p=p||B(j,m,!1),p&&(E.delta&&!p3(p,8)?n.go(-E.delta,!1):E.type===Ee.pop&&p3(p,20)&&n.go(-1,!1)),d2(j,m,p)}).catch(pe)}))}let v1=Q6(),l2=Q6(),y2;function g2(y,F,E){T3(y);const j=l2.list();return j.length?j.forEach(H2=>H2(y,F,E)):console.error(y),Promise.reject(y)}function m3(){return y2&&o.value!==P3?Promise.resolve():new Promise((y,F)=>{v1.add([y,F])})}function T3(y){return y2||(y2=!y,e1(),v1.list().forEach(([F,E])=>y?E(y):F()),v1.reset()),y}function X1(y,F,E,j){const{scrollBehavior:H2}=c;if(!t6||!H2)return Promise.resolve();const m=!E&&cL(Ns(y.fullPath,0))||(j||!E)&&history.state&&history.state.scroll||null;return Ya().then(()=>H2(y,F,m)).then(p=>p&&Zy(p)).catch(p=>g2(p,y,F))}const z1=y=>n.go(y);let Y4;const Q4=new Set,I0={currentRoute:o,listening:!0,addRoute:d,removeRoute:g,hasRoute:M,getRoutes:z,resolve:H,options:c,push:w,replace:R,go:z1,back:()=>z1(-1),forward:()=>z1(1),beforeEach:r.add,beforeResolve:s.add,afterEach:i.add,onError:l2.add,isReady:m3,install(y){const F=this;y.component("RouterLink",DL),y.component("RouterView",vl),y.config.globalProperties.$router=F,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>_1(o)}),t6&&!Y4&&o.value===P3&&(Y4=!0,w(n.location).catch(H2=>{}));const E={};for(const H2 in P3)E[H2]=U2(()=>o.value[H2]);y.provide(Lc,F),y.provide(sn,P6(E)),y.provide(O5,o);const j=y.unmount;Q4.add(y),y.unmount=function(){Q4.delete(y),Q4.size<1&&(l=P3,p2&&p2(),p2=null,o.value=P3,Y4=!1,y2=!1),j()}}};function r1(y){return y.reduce((F,E)=>F.then(()=>P(E)),Promise.resolve())}return I0}function $L(c,e){const t=[],a=[],n=[],r=Math.max(e.matched.length,c.matched.length);for(let s=0;s<r;s++){const i=e.matched[s];i&&(c.matched.find(l=>M6(l,i))?a.push(i):t.push(i));const o=c.matched[s];o&&(e.matched.find(l=>M6(l,o))||n.push(o))}return[t,a,n]}function on(){return I1(Lc)}function ln(){return I1(sn)}const qL={key:0},jL=["onClick"],WL={key:0,class:"row-content-action"},GL=["onClick"],KL=O1({__name:"DataTable",props:{dataSource:{},showCells:{},zebra:{type:Boolean},actionRow:{}},setup(c){return(e,t)=>{var n;const a=x5("vex-icon");return L2(),q2("table",null,[z2("tr",null,[(L2(!0),q2(Q2,null,U0(e.showCells,(r,s)=>(L2(),q2("th",{key:s},oe(r.slice(0,1).toUpperCase()+r.slice(1)),1))),128)),(n=e.actionRow)!=null&&n.show?(L2(),q2("th",qL,oe(e.actionRow.title),1)):Te("",!0)]),(L2(!0),q2(Q2,null,U0(e.dataSource,(r,s)=>{var i;return L2(),q2("tr",{key:s,class:"row-content"},[(L2(!0),q2(Q2,null,U0(e.showCells,(o,l)=>(L2(),q2("td",{key:l,onClick:f=>e.$emit("pressOnTheRow",r)},oe(r[o]),9,jL))),128)),(i=e.actionRow)!=null&&i.show?(L2(),q2("td",WL,[(L2(!0),q2(Q2,null,U0(e.actionRow.icons,o=>(L2(),q2("div",{onClick:l=>e.$emit(o.actionPress,r),key:o},[D2(a,{icon:o.iconName,class:fc(["fa-2xl row-content-action__icon",o.className])},null,8,["icon","class"])],8,GL))),128))])):Te("",!0)])}),128))])}}});const d3=(c,e)=>{const t=c.__vccOpts||c;for(const[a,n]of e)t[a]=n;return t},YL=d3(KL,[["__scopeId","data-v-f534dbcd"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=function(c){const e=[];let t=0;for(let a=0;a<c.length;a++){let n=c.charCodeAt(a);n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=n&63|128):(n&64512)===55296&&a+1<c.length&&(c.charCodeAt(a+1)&64512)===56320?(n=65536+((n&1023)<<10)+(c.charCodeAt(++a)&1023),e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=n&63|128):(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=n&63|128)}return e},QL=function(c){const e=[];let t=0,a=0;for(;t<c.length;){const n=c[t++];if(n<128)e[a++]=String.fromCharCode(n);else if(n>191&&n<224){const r=c[t++];e[a++]=String.fromCharCode((n&31)<<6|r&63)}else if(n>239&&n<365){const r=c[t++],s=c[t++],i=c[t++],o=((n&7)<<18|(r&63)<<12|(s&63)<<6|i&63)-65536;e[a++]=String.fromCharCode(55296+(o>>10)),e[a++]=String.fromCharCode(56320+(o&1023))}else{const r=c[t++],s=c[t++];e[a++]=String.fromCharCode((n&15)<<12|(r&63)<<6|s&63)}}return e.join("")},Hl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(c,e){if(!Array.isArray(c))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let n=0;n<c.length;n+=3){const r=c[n],s=n+1<c.length,i=s?c[n+1]:0,o=n+2<c.length,l=o?c[n+2]:0,f=r>>2,u=(r&3)<<4|i>>4;let h=(i&15)<<2|l>>6,d=l&63;o||(d=64,s||(h=64)),a.push(t[f],t[u],t[h],t[d])}return a.join("")},encodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(c):this.encodeByteArray(gl(c),e)},decodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(c):QL(this.decodeStringToByteArray(c,e))},decodeStringToByteArray(c,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let n=0;n<c.length;){const r=t[c.charAt(n++)],i=n<c.length?t[c.charAt(n)]:0;++n;const l=n<c.length?t[c.charAt(n)]:64;++n;const u=n<c.length?t[c.charAt(n)]:64;if(++n,r==null||i==null||l==null||u==null)throw new XL;const h=r<<2|i>>4;if(a.push(h),l!==64){const d=i<<4&240|l>>2;if(a.push(d),u!==64){const g=l<<6&192|u;a.push(g)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let c=0;c<this.ENCODED_VALS.length;c++)this.byteToCharMap_[c]=this.ENCODED_VALS.charAt(c),this.charToByteMap_[this.byteToCharMap_[c]]=c,this.byteToCharMapWebSafe_[c]=this.ENCODED_VALS_WEBSAFE.charAt(c),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[c]]=c,c>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(c)]=c,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(c)]=c)}}};class XL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JL=function(c){const e=gl(c);return Hl.encodeByteArray(e,!0)},T8=function(c){return JL(c).replace(/\./g,"")},zl=function(c){try{return Hl.decodeString(c,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=()=>ZL().__FIREBASE_DEFAULTS__,cw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const c={}.__FIREBASE_DEFAULTS__;if(c)return JSON.parse(c)},tw=()=>{if(typeof document>"u")return;let c;try{c=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=c&&zl(c[1]);return e&&JSON.parse(e)},fn=()=>{try{return ew()||cw()||tw()}catch(c){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${c}`);return}},Vl=c=>{var e,t;return(t=(e=fn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[c]},aw=c=>{const e=Vl(c);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),a]:[e.substring(0,t),a]},Cl=()=>{var c;return(c=fn())===null||c===void 0?void 0:c.config},Ml=c=>{var e;return(e=fn())===null||e===void 0?void 0:e[`_${c}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,a)=>{t?this.reject(t):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(c,e){if(c.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},a=e||"demo-project",n=c.iat||0,r=c.sub||c.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},c),i="";return[T8(JSON.stringify(t)),T8(JSON.stringify(s)),i].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m1())}function yl(){const c=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof c=="object"&&c.id!==void 0}function iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ow(){const c=m1();return c.indexOf("MSIE ")>=0||c.indexOf("Trident/")>=0}function Ll(){try{return typeof indexedDB=="object"}catch{return!1}}function wl(){return new Promise((c,e)=>{try{let t=!0;const a="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(a);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(a),c(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var r;e(((r=n.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function lw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="FirebaseError";class Q1 extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name=fw,Object.setPrototypeOf(this,Q1.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,q4.prototype.create)}}class q4{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){const a=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?uw(r,a):"Error",i=`${this.serviceName}: ${s} (${n}).`;return new Q1(n,i,a)}}function uw(c,e){return c.replace(hw,(t,a)=>{const n=e[a];return n!=null?String(n):`<${a}?>`})}const hw=/\{\$([^}]+)}/g;function dw(c){for(const e in c)if(Object.prototype.hasOwnProperty.call(c,e))return!1;return!0}function Ie(c,e){if(c===e)return!0;const t=Object.keys(c),a=Object.keys(e);for(const n of t){if(!a.includes(n))return!1;const r=c[n],s=e[n];if($s(r)&&$s(s)){if(!Ie(r,s))return!1}else if(r!==s)return!1}for(const n of a)if(!t.includes(n))return!1;return!0}function $s(c){return c!==null&&typeof c=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(c){const e=[];for(const[t,a]of Object.entries(c))Array.isArray(a)?a.forEach(n=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function ce(c){const e={};return c.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[n,r]=a.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function te(c){const e=c.indexOf("?");if(!e)return"";const t=c.indexOf("#",e);return c.substring(e,t>0?t:void 0)}function mw(c,e){const t=new pw(c,e);return t.subscribe.bind(t)}class pw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,a){let n;if(e===void 0&&t===void 0&&a===void 0)throw new Error("Missing Observer.");vw(e,["next","error","complete"])?n=e:n={next:e,error:t,complete:a},n.next===void 0&&(n.next=Ft),n.error===void 0&&(n.error=Ft),n.complete===void 0&&(n.complete=Ft);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vw(c,e){if(typeof c!="object"||c===null)return!1;for(const t of e)if(t in c&&typeof c[t]=="function")return!0;return!1}function Ft(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=1e3,Hw=2,zw=4*60*60*1e3,Vw=.5;function qs(c,e=gw,t=Hw){const a=e*Math.pow(t,c),n=Math.round(Vw*a*(Math.random()-.5)*2);return Math.min(zw,a+n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(c){return c&&c._delegate?c._delegate:c}class G1{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H4="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const a=new nw;if(this.instancesDeferred.set(t,a),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&a.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yw(e))try{this.getOrInitializeService({instanceIdentifier:H4})}catch{}for(const[t,a]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:n});a.resolve(r)}catch{}}}}clearInstance(e=H4){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=H4){return this.instances.has(e)}getOptions(e=H4){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:a,options:t});for(const[r,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);a===i&&s.resolve(n)}return n}onInit(e,t){var a;const n=this.normalizeInstanceIdentifier(t),r=(a=this.onInitCallbacks.get(n))!==null&&a!==void 0?a:new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const a=this.onInitCallbacks.get(t);if(a)for(const n of a)try{n(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Mw(e),options:t}),this.instances.set(e,a),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=H4){return this.component?this.component.multipleInstances?e:H4:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mw(c){return c===H4?void 0:c}function yw(c){return c.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Cw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m2;(function(c){c[c.DEBUG=0]="DEBUG",c[c.VERBOSE=1]="VERBOSE",c[c.INFO=2]="INFO",c[c.WARN=3]="WARN",c[c.ERROR=4]="ERROR",c[c.SILENT=5]="SILENT"})(m2||(m2={}));const ww={debug:m2.DEBUG,verbose:m2.VERBOSE,info:m2.INFO,warn:m2.WARN,error:m2.ERROR,silent:m2.SILENT},bw=m2.INFO,xw={[m2.DEBUG]:"log",[m2.VERBOSE]:"log",[m2.INFO]:"info",[m2.WARN]:"warn",[m2.ERROR]:"error"},Sw=(c,e,...t)=>{if(e<c.logLevel)return;const a=new Date().toISOString(),n=xw[e];if(n)console[n](`[${a}]  ${c.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wc{constructor(e){this.name=e,this._logLevel=bw,this._logHandler=Sw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in m2))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ww[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,m2.DEBUG,...e),this._logHandler(this,m2.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,m2.VERBOSE,...e),this._logHandler(this,m2.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,m2.INFO,...e),this._logHandler(this,m2.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,m2.WARN,...e),this._logHandler(this,m2.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,m2.ERROR,...e),this._logHandler(this,m2.ERROR,...e)}}const Nw=(c,e)=>e.some(t=>c instanceof t);let js,Ws;function Aw(){return js||(js=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kw(){return Ws||(Ws=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bl=new WeakMap,F5=new WeakMap,xl=new WeakMap,Bt=new WeakMap,un=new WeakMap;function Tw(c){const e=new Promise((t,a)=>{const n=()=>{c.removeEventListener("success",r),c.removeEventListener("error",s)},r=()=>{t(X3(c.result)),n()},s=()=>{a(c.error),n()};c.addEventListener("success",r),c.addEventListener("error",s)});return e.then(t=>{t instanceof IDBCursor&&bl.set(t,c)}).catch(()=>{}),un.set(e,c),e}function _w(c){if(F5.has(c))return;const e=new Promise((t,a)=>{const n=()=>{c.removeEventListener("complete",r),c.removeEventListener("error",s),c.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{a(c.error||new DOMException("AbortError","AbortError")),n()};c.addEventListener("complete",r),c.addEventListener("error",s),c.addEventListener("abort",s)});F5.set(c,e)}let B5={get(c,e,t){if(c instanceof IDBTransaction){if(e==="done")return F5.get(c);if(e==="objectStoreNames")return c.objectStoreNames||xl.get(c);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return X3(c[e])},set(c,e,t){return c[e]=t,!0},has(c,e){return c instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in c}};function Ew(c){B5=c(B5)}function Iw(c){return c===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const a=c.call(Ut(this),e,...t);return xl.set(a,e.sort?e.sort():[e]),X3(a)}:kw().includes(c)?function(...e){return c.apply(Ut(this),e),X3(bl.get(this))}:function(...e){return X3(c.apply(Ut(this),e))}}function Pw(c){return typeof c=="function"?Iw(c):(c instanceof IDBTransaction&&_w(c),Nw(c,Aw())?new Proxy(c,B5):c)}function X3(c){if(c instanceof IDBRequest)return Tw(c);if(Bt.has(c))return Bt.get(c);const e=Pw(c);return e!==c&&(Bt.set(c,e),un.set(e,c)),e}const Ut=c=>un.get(c);function Rw(c,e,{blocked:t,upgrade:a,blocking:n,terminated:r}={}){const s=indexedDB.open(c,e),i=X3(s);return a&&s.addEventListener("upgradeneeded",o=>{a(X3(s.result),o.oldVersion,o.newVersion,X3(s.transaction),o)}),t&&s.addEventListener("blocked",o=>t(o.oldVersion,o.newVersion,o)),i.then(o=>{r&&o.addEventListener("close",()=>r()),n&&o.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),i}const Dw=["get","getKey","getAll","getAllKeys","count"],Ow=["put","add","delete","clear"],$t=new Map;function Gs(c,e){if(!(c instanceof IDBDatabase&&!(e in c)&&typeof e=="string"))return;if($t.get(e))return $t.get(e);const t=e.replace(/FromIndex$/,""),a=e!==t,n=Ow.includes(t);if(!(t in(a?IDBIndex:IDBObjectStore).prototype)||!(n||Dw.includes(t)))return;const r=async function(s,...i){const o=this.transaction(s,n?"readwrite":"readonly");let l=o.store;return a&&(l=l.index(i.shift())),(await Promise.all([l[t](...i),n&&o.done]))[0]};return $t.set(e,r),r}Ew(c=>({...c,get:(e,t,a)=>Gs(e,t)||c.get(e,t,a),has:(e,t)=>!!Gs(e,t)||c.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Bw(t)){const a=t.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(t=>t).join(" ")}}function Bw(c){const e=c.getComponent();return(e==null?void 0:e.type)==="VERSION"}const U5="@firebase/app",Ks="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4=new wc("@firebase/app"),Uw="@firebase/app-compat",$w="@firebase/analytics-compat",qw="@firebase/analytics",jw="@firebase/app-check-compat",Ww="@firebase/app-check",Gw="@firebase/auth",Kw="@firebase/auth-compat",Yw="@firebase/database",Qw="@firebase/database-compat",Xw="@firebase/functions",Jw="@firebase/functions-compat",Zw="@firebase/installations",eb="@firebase/installations-compat",cb="@firebase/messaging",tb="@firebase/messaging-compat",ab="@firebase/performance",nb="@firebase/performance-compat",rb="@firebase/remote-config",sb="@firebase/remote-config-compat",ib="@firebase/storage",ob="@firebase/storage-compat",lb="@firebase/firestore",fb="@firebase/firestore-compat",ub="firebase",hb="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $5="[DEFAULT]",db={[U5]:"fire-core",[Uw]:"fire-core-compat",[qw]:"fire-analytics",[$w]:"fire-analytics-compat",[Ww]:"fire-app-check",[jw]:"fire-app-check-compat",[Gw]:"fire-auth",[Kw]:"fire-auth-compat",[Yw]:"fire-rtdb",[Qw]:"fire-rtdb-compat",[Xw]:"fire-fn",[Jw]:"fire-fn-compat",[Zw]:"fire-iid",[eb]:"fire-iid-compat",[cb]:"fire-fcm",[tb]:"fire-fcm-compat",[ab]:"fire-perf",[nb]:"fire-perf-compat",[rb]:"fire-rc",[sb]:"fire-rc-compat",[ib]:"fire-gcs",[ob]:"fire-gcs-compat",[lb]:"fire-fst",[fb]:"fire-fst-compat","fire-js":"fire-js",[ub]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _8=new Map,q5=new Map;function mb(c,e){try{c.container.addComponent(e)}catch(t){_4.debug(`Component ${e.name} failed to register with FirebaseApp ${c.name}`,t)}}function f3(c){const e=c.name;if(q5.has(e))return _4.debug(`There were multiple attempts to register component ${e}.`),!1;q5.set(e,c);for(const t of _8.values())mb(t,c);return!0}function j4(c,e){const t=c.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),c.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},J3=new q4("app","Firebase",pb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,t,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new G1("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw J3.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R6=hb;function Sl(c,e={}){let t=c;typeof e!="object"&&(e={name:e});const a=Object.assign({name:$5,automaticDataCollectionEnabled:!1},e),n=a.name;if(typeof n!="string"||!n)throw J3.create("bad-app-name",{appName:String(n)});if(t||(t=Cl()),!t)throw J3.create("no-options");const r=_8.get(n);if(r){if(Ie(t,r.options)&&Ie(a,r.config))return r;throw J3.create("duplicate-app",{appName:n})}const s=new Lw(n);for(const o of q5.values())s.addComponent(o);const i=new vb(t,a,s);return _8.set(n,i),i}function hn(c=$5){const e=_8.get(c);if(!e&&c===$5&&Cl())return Sl();if(!e)throw J3.create("no-app",{appName:c});return e}function R1(c,e,t){var a;let n=(a=db[c])!==null&&a!==void 0?a:c;t&&(n+=`-${t}`);const r=n.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const i=[`Unable to register library "${n}" with version "${e}":`];r&&i.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&s&&i.push("and"),s&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_4.warn(i.join(" "));return}f3(new G1(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="firebase-heartbeat-database",Hb=1,Pe="firebase-heartbeat-store";let qt=null;function Nl(){return qt||(qt=Rw(gb,Hb,{upgrade:(c,e)=>{switch(e){case 0:c.createObjectStore(Pe)}}}).catch(c=>{throw J3.create("idb-open",{originalErrorMessage:c.message})})),qt}async function zb(c){try{return await(await Nl()).transaction(Pe).objectStore(Pe).get(Al(c))}catch(e){if(e instanceof Q1)_4.warn(e.message);else{const t=J3.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_4.warn(t.message)}}}async function Ys(c,e){try{const a=(await Nl()).transaction(Pe,"readwrite");await a.objectStore(Pe).put(e,Al(c)),await a.done}catch(t){if(t instanceof Q1)_4.warn(t.message);else{const a=J3.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_4.warn(a.message)}}}function Al(c){return`${c.name}!${c.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=1024,Cb=30*24*60*60*1e3;class Mb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Lb(t),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Qs();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(n=>n.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(n=>{const r=new Date(n.date).valueOf();return Date.now()-r<=Cb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qs(),{heartbeatsToSend:t,unsentEntries:a}=yb(this._heartbeatsCache.heartbeats),n=T8(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Qs(){return new Date().toISOString().substring(0,10)}function yb(c,e=Vb){const t=[];let a=c.slice();for(const n of c){const r=t.find(s=>s.agent===n.agent);if(r){if(r.dates.push(n.date),Xs(t)>e){r.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),Xs(t)>e){t.pop();break}a=a.slice(1)}return{heartbeatsToSend:t,unsentEntries:a}}class Lb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ll()?wl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ys(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ys(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Xs(c){return T8(JSON.stringify({version:2,heartbeats:c})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(c){f3(new G1("platform-logger",e=>new Fw(e),"PRIVATE")),f3(new G1("heartbeat",e=>new Mb(e),"PRIVATE")),R1(U5,Ks,c),R1(U5,Ks,"esm2017"),R1("fire-js","")}wb("");var bb="firebase",xb="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */R1(bb,xb,"app");var Sb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,dn=dn||{},t2=Sb||self;function bc(c){var e=typeof c;return e=e!="object"?e:c?Array.isArray(c)?"array":e:"null",e=="array"||e=="object"&&typeof c.length=="number"}function i0(c){var e=typeof c;return e=="object"&&c!=null||e=="function"}function Nb(c){return Object.prototype.hasOwnProperty.call(c,jt)&&c[jt]||(c[jt]=++Ab)}var jt="closure_uid_"+(1e9*Math.random()>>>0),Ab=0;function kb(c,e,t){return c.call.apply(c.bind,arguments)}function Tb(c,e,t){if(!c)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),c.apply(e,n)}}return function(){return c.apply(e,arguments)}}function u1(c,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?u1=kb:u1=Tb,u1.apply(null,arguments)}function j0(c,e){var t=Array.prototype.slice.call(arguments,1);return function(){var a=t.slice();return a.push.apply(a,arguments),c.apply(this,a)}}function Z2(c,e){function t(){}t.prototype=e.prototype,c.$=e.prototype,c.prototype=new t,c.prototype.constructor=c,c.ac=function(a,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(a,s)}}function u4(){this.s=this.s,this.o=this.o}var _b=0;u4.prototype.s=!1;u4.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),_b!=0)&&Nb(this)};u4.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const kl=Array.prototype.indexOf?function(c,e){return Array.prototype.indexOf.call(c,e,void 0)}:function(c,e){if(typeof c=="string")return typeof e!="string"||e.length!=1?-1:c.indexOf(e,0);for(let t=0;t<c.length;t++)if(t in c&&c[t]===e)return t;return-1};function mn(c){const e=c.length;if(0<e){const t=Array(e);for(let a=0;a<e;a++)t[a]=c[a];return t}return[]}function Js(c,e){for(let t=1;t<arguments.length;t++){const a=arguments[t];if(bc(a)){const n=c.length||0,r=a.length||0;c.length=n+r;for(let s=0;s<r;s++)c[n+s]=a[s]}else c.push(a)}}function h1(c,e){this.type=c,this.g=this.target=e,this.defaultPrevented=!1}h1.prototype.h=function(){this.defaultPrevented=!0};var Eb=function(){if(!t2.addEventListener||!Object.defineProperty)return!1;var c=!1,e=Object.defineProperty({},"passive",{get:function(){c=!0}});try{t2.addEventListener("test",()=>{},e),t2.removeEventListener("test",()=>{},e)}catch{}return c}();function Re(c){return/^[\s\xa0]*$/.test(c)}function xc(){var c=t2.navigator;return c&&(c=c.userAgent)?c:""}function t3(c){return xc().indexOf(c)!=-1}function pn(c){return pn[" "](c),c}pn[" "]=function(){};function Ib(c,e){var t=xx;return Object.prototype.hasOwnProperty.call(t,c)?t[c]:t[c]=e(c)}var Pb=t3("Opera"),L6=t3("Trident")||t3("MSIE"),Tl=t3("Edge"),j5=Tl||L6,_l=t3("Gecko")&&!(xc().toLowerCase().indexOf("webkit")!=-1&&!t3("Edge"))&&!(t3("Trident")||t3("MSIE"))&&!t3("Edge"),Rb=xc().toLowerCase().indexOf("webkit")!=-1&&!t3("Edge");function El(){var c=t2.document;return c?c.documentMode:void 0}var W5;e:{var Wt="",Gt=function(){var c=xc();if(_l)return/rv:([^\);]+)(\)|;)/.exec(c);if(Tl)return/Edge\/([\d\.]+)/.exec(c);if(L6)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c);if(Rb)return/WebKit\/(\S+)/.exec(c);if(Pb)return/(?:Version)[ \/]?(\S+)/.exec(c)}();if(Gt&&(Wt=Gt?Gt[1]:""),L6){var Kt=El();if(Kt!=null&&Kt>parseFloat(Wt)){W5=String(Kt);break e}}W5=Wt}var G5;if(t2.document&&L6){var Zs=El();G5=Zs||parseInt(W5,10)||void 0}else G5=void 0;var Db=G5;function De(c,e){if(h1.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var t=this.type=c.type,a=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=e,e=c.relatedTarget){if(_l){e:{try{pn(e.nodeName);var n=!0;break e}catch{}n=!1}n||(e=null)}}else t=="mouseover"?e=c.fromElement:t=="mouseout"&&(e=c.toElement);this.relatedTarget=e,a?(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ob[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&De.$.h.call(this)}}Z2(De,h1);var Ob={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.$.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var o0="closure_listenable_"+(1e6*Math.random()|0),Fb=0;function Bb(c,e,t,a,n){this.listener=c,this.proxy=null,this.src=e,this.type=t,this.capture=!!a,this.la=n,this.key=++Fb,this.fa=this.ia=!1}function Sc(c){c.fa=!0,c.listener=null,c.proxy=null,c.src=null,c.la=null}function vn(c,e,t){for(const a in c)e.call(t,c[a],a,c)}function Ub(c,e){for(const t in c)e.call(void 0,c[t],t,c)}function Il(c){const e={};for(const t in c)e[t]=c[t];return e}const ei="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pl(c,e){let t,a;for(let n=1;n<arguments.length;n++){a=arguments[n];for(t in a)c[t]=a[t];for(let r=0;r<ei.length;r++)t=ei[r],Object.prototype.hasOwnProperty.call(a,t)&&(c[t]=a[t])}}function Nc(c){this.src=c,this.g={},this.h=0}Nc.prototype.add=function(c,e,t,a,n){var r=c.toString();c=this.g[r],c||(c=this.g[r]=[],this.h++);var s=Y5(c,e,a,n);return-1<s?(e=c[s],t||(e.ia=!1)):(e=new Bb(e,this.src,r,!!a,n),e.ia=t,c.push(e)),e};function K5(c,e){var t=e.type;if(t in c.g){var a=c.g[t],n=kl(a,e),r;(r=0<=n)&&Array.prototype.splice.call(a,n,1),r&&(Sc(e),c.g[t].length==0&&(delete c.g[t],c.h--))}}function Y5(c,e,t,a){for(var n=0;n<c.length;++n){var r=c[n];if(!r.fa&&r.listener==e&&r.capture==!!t&&r.la==a)return n}return-1}var gn="closure_lm_"+(1e6*Math.random()|0),Yt={};function Rl(c,e,t,a,n){if(a&&a.once)return Ol(c,e,t,a,n);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Rl(c,e[r],t,a,n);return null}return t=Vn(t),c&&c[o0]?c.O(e,t,i0(a)?!!a.capture:!!a,n):Dl(c,e,t,!1,a,n)}function Dl(c,e,t,a,n,r){if(!e)throw Error("Invalid event type");var s=i0(n)?!!n.capture:!!n,i=zn(c);if(i||(c[gn]=i=new Nc(c)),t=i.add(e,t,a,s,r),t.proxy)return t;if(a=$b(),t.proxy=a,a.src=c,a.listener=t,c.addEventListener)Eb||(n=s),n===void 0&&(n=!1),c.addEventListener(e.toString(),a,n);else if(c.attachEvent)c.attachEvent(Bl(e.toString()),a);else if(c.addListener&&c.removeListener)c.addListener(a);else throw Error("addEventListener and attachEvent are unavailable.");return t}function $b(){function c(t){return e.call(c.src,c.listener,t)}const e=qb;return c}function Ol(c,e,t,a,n){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ol(c,e[r],t,a,n);return null}return t=Vn(t),c&&c[o0]?c.P(e,t,i0(a)?!!a.capture:!!a,n):Dl(c,e,t,!0,a,n)}function Fl(c,e,t,a,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)Fl(c,e[r],t,a,n);else a=i0(a)?!!a.capture:!!a,t=Vn(t),c&&c[o0]?(c=c.i,e=String(e).toString(),e in c.g&&(r=c.g[e],t=Y5(r,t,a,n),-1<t&&(Sc(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete c.g[e],c.h--)))):c&&(c=zn(c))&&(e=c.g[e.toString()],c=-1,e&&(c=Y5(e,t,a,n)),(t=-1<c?e[c]:null)&&Hn(t))}function Hn(c){if(typeof c!="number"&&c&&!c.fa){var e=c.src;if(e&&e[o0])K5(e.i,c);else{var t=c.type,a=c.proxy;e.removeEventListener?e.removeEventListener(t,a,c.capture):e.detachEvent?e.detachEvent(Bl(t),a):e.addListener&&e.removeListener&&e.removeListener(a),(t=zn(e))?(K5(t,c),t.h==0&&(t.src=null,e[gn]=null)):Sc(c)}}}function Bl(c){return c in Yt?Yt[c]:Yt[c]="on"+c}function qb(c,e){if(c.fa)c=!0;else{e=new De(e,this);var t=c.listener,a=c.la||c.src;c.ia&&Hn(c),c=t.call(a,e)}return c}function zn(c){return c=c[gn],c instanceof Nc?c:null}var Qt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vn(c){return typeof c=="function"?c:(c[Qt]||(c[Qt]=function(e){return c.handleEvent(e)}),c[Qt])}function J2(){u4.call(this),this.i=new Nc(this),this.S=this,this.J=null}Z2(J2,u4);J2.prototype[o0]=!0;J2.prototype.removeEventListener=function(c,e,t,a){Fl(this,c,e,t,a)};function a1(c,e){var t,a=c.J;if(a)for(t=[];a;a=a.J)t.push(a);if(c=c.S,a=e.type||e,typeof e=="string")e=new h1(e,c);else if(e instanceof h1)e.target=e.target||c;else{var n=e;e=new h1(a,c),Pl(e,n)}if(n=!0,t)for(var r=t.length-1;0<=r;r--){var s=e.g=t[r];n=W0(s,a,!0,e)&&n}if(s=e.g=c,n=W0(s,a,!0,e)&&n,n=W0(s,a,!1,e)&&n,t)for(r=0;r<t.length;r++)s=e.g=t[r],n=W0(s,a,!1,e)&&n}J2.prototype.N=function(){if(J2.$.N.call(this),this.i){var c=this.i,e;for(e in c.g){for(var t=c.g[e],a=0;a<t.length;a++)Sc(t[a]);delete c.g[e],c.h--}}this.J=null};J2.prototype.O=function(c,e,t,a){return this.i.add(String(c),e,!1,t,a)};J2.prototype.P=function(c,e,t,a){return this.i.add(String(c),e,!0,t,a)};function W0(c,e,t,a){if(e=c.i.g[String(e)],!e)return!0;e=e.concat();for(var n=!0,r=0;r<e.length;++r){var s=e[r];if(s&&!s.fa&&s.capture==t){var i=s.listener,o=s.la||s.src;s.ia&&K5(c.i,s),n=i.call(o,a)!==!1&&n}}return n&&!a.defaultPrevented}var Cn=t2.JSON.stringify;class jb{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Wb(){var c=Mn;let e=null;return c.g&&(e=c.g,c.g=c.g.next,c.g||(c.h=null),e.next=null),e}class Gb{constructor(){this.h=this.g=null}add(e,t){const a=Ul.get();a.set(e,t),this.h?this.h.next=a:this.g=a,this.h=a}}var Ul=new jb(()=>new Kb,c=>c.reset());class Kb{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Yb(c){var e=1;c=c.split(":");const t=[];for(;0<e&&c.length;)t.push(c.shift()),e--;return c.length&&t.push(c.join(":")),t}function Qb(c){t2.setTimeout(()=>{throw c},0)}let Oe,Fe=!1,Mn=new Gb,$l=()=>{const c=t2.Promise.resolve(void 0);Oe=()=>{c.then(Xb)}};var Xb=()=>{for(var c;c=Wb();){try{c.h.call(c.g)}catch(t){Qb(t)}var e=Ul;e.j(c),100>e.h&&(e.h++,c.next=e.g,e.g=c)}Fe=!1};function Ac(c,e){J2.call(this),this.h=c||1,this.g=e||t2,this.j=u1(this.qb,this),this.l=Date.now()}Z2(Ac,J2);I=Ac.prototype;I.ga=!1;I.T=null;I.qb=function(){if(this.ga){var c=Date.now()-this.l;0<c&&c<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-c):(this.T&&(this.g.clearTimeout(this.T),this.T=null),a1(this,"tick"),this.ga&&(yn(this),this.start()))}};I.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yn(c){c.ga=!1,c.T&&(c.g.clearTimeout(c.T),c.T=null)}I.N=function(){Ac.$.N.call(this),yn(this),delete this.g};function Ln(c,e,t){if(typeof c=="function")t&&(c=u1(c,t));else if(c&&typeof c.handleEvent=="function")c=u1(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:t2.setTimeout(c,e||0)}function ql(c){c.g=Ln(()=>{c.g=null,c.i&&(c.i=!1,ql(c))},c.j);const e=c.h;c.h=null,c.m.apply(null,e)}class Jb extends u4{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ql(this)}N(){super.N(),this.g&&(t2.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(c){u4.call(this),this.h=c,this.g={}}Z2(Be,u4);var ci=[];function jl(c,e,t,a){Array.isArray(t)||(t&&(ci[0]=t.toString()),t=ci);for(var n=0;n<t.length;n++){var r=Rl(e,t[n],a||c.handleEvent,!1,c.h||c);if(!r)break;c.g[r.key]=r}}function Wl(c){vn(c.g,function(e,t){this.g.hasOwnProperty(t)&&Hn(e)},c),c.g={}}Be.prototype.N=function(){Be.$.N.call(this),Wl(this)};Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function kc(){this.g=!0}kc.prototype.Ea=function(){this.g=!1};function Zb(c,e,t,a,n,r){c.info(function(){if(c.g)if(r)for(var s="",i=r.split("&"),o=0;o<i.length;o++){var l=i[o].split("=");if(1<l.length){var f=l[0];l=l[1];var u=f.split("_");s=2<=u.length&&u[1]=="type"?s+(f+"="+l+"&"):s+(f+"=redacted&")}}else s=null;else s=r;return"XMLHTTP REQ ("+a+") [attempt "+n+"]: "+e+`
`+t+`
`+s})}function ex(c,e,t,a,n,r,s){c.info(function(){return"XMLHTTP RESP ("+a+") [ attempt "+n+"]: "+e+`
`+t+`
`+r+" "+s})}function r6(c,e,t,a){c.info(function(){return"XMLHTTP TEXT ("+e+"): "+tx(c,t)+(a?" "+a:"")})}function cx(c,e){c.info(function(){return"TIMEOUT: "+e})}kc.prototype.info=function(){};function tx(c,e){if(!c.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(c=0;c<t.length;c++)if(Array.isArray(t[c])){var a=t[c];if(!(2>a.length)){var n=a[1];if(Array.isArray(n)&&!(1>n.length)){var r=n[0];if(r!="noop"&&r!="stop"&&r!="close")for(var s=1;s<n.length;s++)n[s]=""}}}}return Cn(t)}catch{return e}}var W4={},ti=null;function Tc(){return ti=ti||new J2}W4.Ta="serverreachability";function Gl(c){h1.call(this,W4.Ta,c)}Z2(Gl,h1);function Ue(c){const e=Tc();a1(e,new Gl(e))}W4.STAT_EVENT="statevent";function Kl(c,e){h1.call(this,W4.STAT_EVENT,c),this.stat=e}Z2(Kl,h1);function H1(c){const e=Tc();a1(e,new Kl(e,c))}W4.Ua="timingevent";function Yl(c,e){h1.call(this,W4.Ua,c),this.size=e}Z2(Yl,h1);function l0(c,e){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return t2.setTimeout(function(){c()},e)}var _c={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ql={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function wn(){}wn.prototype.h=null;function ai(c){return c.h||(c.h=c.i())}function Xl(){}var f0={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function bn(){h1.call(this,"d")}Z2(bn,h1);function xn(){h1.call(this,"c")}Z2(xn,h1);var Q5;function Ec(){}Z2(Ec,wn);Ec.prototype.g=function(){return new XMLHttpRequest};Ec.prototype.i=function(){return{}};Q5=new Ec;function u0(c,e,t,a){this.l=c,this.j=e,this.m=t,this.W=a||1,this.U=new Be(this),this.P=ax,c=j5?125:void 0,this.V=new Ac(c),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Jl}function Jl(){this.i=null,this.g="",this.h=!1}var ax=45e3,X5={},E8={};I=u0.prototype;I.setTimeout=function(c){this.P=c};function J5(c,e,t){c.L=1,c.v=Pc(M3(e)),c.s=t,c.S=!0,Zl(c,null)}function Zl(c,e){c.G=Date.now(),h0(c),c.A=M3(c.v);var t=c.A,a=c.W;Array.isArray(a)||(a=[String(a)]),of(t.i,"t",a),c.C=0,t=c.l.J,c.h=new Jl,c.g=Nf(c.l,t?e:null,!c.s),0<c.O&&(c.M=new Jb(u1(c.Pa,c,c.g),c.O)),jl(c.U,c.g,"readystatechange",c.nb),e=c.I?Il(c.I):{},c.s?(c.u||(c.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",c.g.ha(c.A,c.u,c.s,e)):(c.u="GET",c.g.ha(c.A,c.u,null,e)),Ue(),Zb(c.j,c.u,c.A,c.m,c.W,c.s)}I.nb=function(c){c=c.target;const e=this.M;e&&a3(c)==3?e.l():this.Pa(c)};I.Pa=function(c){try{if(c==this.g)e:{const f=a3(this.g);var e=this.g.Ia();const u=this.g.da();if(!(3>f)&&(f!=3||j5||this.g&&(this.h.h||this.g.ja()||ii(this.g)))){this.J||f!=4||e==7||(e==8||0>=u?Ue(3):Ue(2)),Ic(this);var t=this.g.da();this.ca=t;c:if(ef(this)){var a=ii(this.g);c="";var n=a.length,r=a3(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){y4(this),ge(this);var s="";break c}this.h.i=new t2.TextDecoder}for(e=0;e<n;e++)this.h.h=!0,c+=this.h.i.decode(a[e],{stream:r&&e==n-1});a.splice(0,n),this.h.g+=c,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=t==200,ex(this.j,this.u,this.A,this.m,this.W,f,t),this.i){if(this.aa&&!this.K){c:{if(this.g){var i,o=this.g;if((i=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Re(i)){var l=i;break c}}l=null}if(t=l)r6(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Z5(this,t);else{this.i=!1,this.o=3,H1(12),y4(this),ge(this);break e}}this.S?(cf(this,f,s),j5&&this.i&&f==3&&(jl(this.U,this.V,"tick",this.mb),this.V.start())):(r6(this.j,this.m,s,null),Z5(this,s)),f==4&&y4(this),this.i&&!this.J&&(f==4?wf(this.l,this):(this.i=!1,h0(this)))}else Lx(this.g),t==400&&0<s.indexOf("Unknown SID")?(this.o=3,H1(12)):(this.o=0,H1(13)),y4(this),ge(this)}}}catch{}finally{}};function ef(c){return c.g?c.u=="GET"&&c.L!=2&&c.l.Ha:!1}function cf(c,e,t){let a=!0,n;for(;!c.J&&c.C<t.length;)if(n=nx(c,t),n==E8){e==4&&(c.o=4,H1(14),a=!1),r6(c.j,c.m,null,"[Incomplete Response]");break}else if(n==X5){c.o=4,H1(15),r6(c.j,c.m,t,"[Invalid Chunk]"),a=!1;break}else r6(c.j,c.m,n,null),Z5(c,n);ef(c)&&n!=E8&&n!=X5&&(c.h.g="",c.C=0),e!=4||t.length!=0||c.h.h||(c.o=1,H1(16),a=!1),c.i=c.i&&a,a?0<t.length&&!c.ba&&(c.ba=!0,e=c.l,e.g==c&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),_n(e),e.M=!0,H1(11))):(r6(c.j,c.m,t,"[Invalid Chunked Response]"),y4(c),ge(c))}I.mb=function(){if(this.g){var c=a3(this.g),e=this.g.ja();this.C<e.length&&(Ic(this),cf(this,c,e),this.i&&c!=4&&h0(this))}};function nx(c,e){var t=c.C,a=e.indexOf(`
`,t);return a==-1?E8:(t=Number(e.substring(t,a)),isNaN(t)?X5:(a+=1,a+t>e.length?E8:(e=e.slice(a,a+t),c.C=a+t,e)))}I.cancel=function(){this.J=!0,y4(this)};function h0(c){c.Y=Date.now()+c.P,tf(c,c.P)}function tf(c,e){if(c.B!=null)throw Error("WatchDog timer not null");c.B=l0(u1(c.lb,c),e)}function Ic(c){c.B&&(t2.clearTimeout(c.B),c.B=null)}I.lb=function(){this.B=null;const c=Date.now();0<=c-this.Y?(cx(this.j,this.A),this.L!=2&&(Ue(),H1(17)),y4(this),this.o=2,ge(this)):tf(this,this.Y-c)};function ge(c){c.l.H==0||c.J||wf(c.l,c)}function y4(c){Ic(c);var e=c.M;e&&typeof e.sa=="function"&&e.sa(),c.M=null,yn(c.V),Wl(c.U),c.g&&(e=c.g,c.g=null,e.abort(),e.sa())}function Z5(c,e){try{var t=c.l;if(t.H!=0&&(t.g==c||ea(t.i,c))){if(!c.K&&ea(t.i,c)&&t.H==3){try{var a=t.Ja.g.parse(e)}catch{a=null}if(Array.isArray(a)&&a.length==3){var n=a;if(n[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<c.G)R8(t),Oc(t);else break e;Tn(t),H1(18)}}else t.Fa=n[1],0<t.Fa-t.V&&37500>n[2]&&t.G&&t.A==0&&!t.v&&(t.v=l0(u1(t.ib,t),6e3));if(1>=uf(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else L4(t,11)}else if((c.K||t.g==c)&&R8(t),!Re(e))for(n=t.Ja.g.parse(e),e=0;e<n.length;e++){let l=n[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const f=l[3];f!=null&&(t.ra=f,t.l.info("VER="+t.ra));const u=l[4];u!=null&&(t.Ga=u,t.l.info("SVER="+t.Ga));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(a=1.5*h,t.L=a,t.l.info("backChannelRequestTimeoutMs_="+a)),a=t;const d=c.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=a.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Sn(r,r.h),r.h=null))}if(a.F){const z=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;z&&(a.Da=z,S2(a.I,a.F,z))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-c.G,t.l.info("Handshake RTT: "+t.S+"ms")),a=t;var s=c;if(a.wa=Sf(a,a.J?a.pa:null,a.Y),s.K){hf(a.i,s);var i=s,o=a.L;o&&i.setTimeout(o),i.B&&(Ic(i),h0(i)),a.g=s}else yf(a);0<t.j.length&&Fc(t)}else l[0]!="stop"&&l[0]!="close"||L4(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?L4(t,7):kn(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}Ue(4)}catch{}}function rx(c){if(c.Z&&typeof c.Z=="function")return c.Z();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(bc(c)){for(var e=[],t=c.length,a=0;a<t;a++)e.push(c[a]);return e}e=[],t=0;for(a in c)e[t++]=c[a];return e}function sx(c){if(c.ta&&typeof c.ta=="function")return c.ta();if(!c.Z||typeof c.Z!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(bc(c)||typeof c=="string"){var e=[];c=c.length;for(var t=0;t<c;t++)e.push(t);return e}e=[],t=0;for(const a in c)e[t++]=a;return e}}}function af(c,e){if(c.forEach&&typeof c.forEach=="function")c.forEach(e,void 0);else if(bc(c)||typeof c=="string")Array.prototype.forEach.call(c,e,void 0);else for(var t=sx(c),a=rx(c),n=a.length,r=0;r<n;r++)e.call(void 0,a[r],t&&t[r],c)}var nf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ix(c,e){if(c){c=c.split("&");for(var t=0;t<c.length;t++){var a=c[t].indexOf("="),n=null;if(0<=a){var r=c[t].substring(0,a);n=c[t].substring(a+1)}else r=c[t];e(r,n?decodeURIComponent(n.replace(/\+/g," ")):"")}}}function k4(c){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,c instanceof k4){this.h=c.h,I8(this,c.j),this.s=c.s,this.g=c.g,P8(this,c.m),this.l=c.l;var e=c.i,t=new $e;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),ni(this,t),this.o=c.o}else c&&(e=String(c).match(nf))?(this.h=!1,I8(this,e[1]||"",!0),this.s=ae(e[2]||""),this.g=ae(e[3]||"",!0),P8(this,e[4]),this.l=ae(e[5]||"",!0),ni(this,e[6]||"",!0),this.o=ae(e[7]||"")):(this.h=!1,this.i=new $e(null,this.h))}k4.prototype.toString=function(){var c=[],e=this.j;e&&c.push(ne(e,ri,!0),":");var t=this.g;return(t||e=="file")&&(c.push("//"),(e=this.s)&&c.push(ne(e,ri,!0),"@"),c.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&c.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&c.push("/"),c.push(ne(t,t.charAt(0)=="/"?fx:lx,!0))),(t=this.i.toString())&&c.push("?",t),(t=this.o)&&c.push("#",ne(t,hx)),c.join("")};function M3(c){return new k4(c)}function I8(c,e,t){c.j=t?ae(e,!0):e,c.j&&(c.j=c.j.replace(/:$/,""))}function P8(c,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);c.m=e}else c.m=null}function ni(c,e,t){e instanceof $e?(c.i=e,dx(c.i,c.h)):(t||(e=ne(e,ux)),c.i=new $e(e,c.h))}function S2(c,e,t){c.i.set(e,t)}function Pc(c){return S2(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function ae(c,e){return c?e?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ne(c,e,t){return typeof c=="string"?(c=encodeURI(c).replace(e,ox),t&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function ox(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ri=/[#\/\?@]/g,lx=/[#\?:]/g,fx=/[#\?]/g,ux=/[#\?@]/g,hx=/#/g;function $e(c,e){this.h=this.g=null,this.i=c||null,this.j=!!e}function h4(c){c.g||(c.g=new Map,c.h=0,c.i&&ix(c.i,function(e,t){c.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}I=$e.prototype;I.add=function(c,e){h4(this),this.i=null,c=D6(this,c);var t=this.g.get(c);return t||this.g.set(c,t=[]),t.push(e),this.h+=1,this};function rf(c,e){h4(c),e=D6(c,e),c.g.has(e)&&(c.i=null,c.h-=c.g.get(e).length,c.g.delete(e))}function sf(c,e){return h4(c),e=D6(c,e),c.g.has(e)}I.forEach=function(c,e){h4(this),this.g.forEach(function(t,a){t.forEach(function(n){c.call(e,n,a,this)},this)},this)};I.ta=function(){h4(this);const c=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let a=0;a<e.length;a++){const n=c[a];for(let r=0;r<n.length;r++)t.push(e[a])}return t};I.Z=function(c){h4(this);let e=[];if(typeof c=="string")sf(this,c)&&(e=e.concat(this.g.get(D6(this,c))));else{c=Array.from(this.g.values());for(let t=0;t<c.length;t++)e=e.concat(c[t])}return e};I.set=function(c,e){return h4(this),this.i=null,c=D6(this,c),sf(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[e]),this.h+=1,this};I.get=function(c,e){return c?(c=this.Z(c),0<c.length?String(c[0]):e):e};function of(c,e,t){rf(c,e),0<t.length&&(c.i=null,c.g.set(D6(c,e),mn(t)),c.h+=t.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var a=e[t];const r=encodeURIComponent(String(a)),s=this.Z(a);for(a=0;a<s.length;a++){var n=r;s[a]!==""&&(n+="="+encodeURIComponent(String(s[a]))),c.push(n)}}return this.i=c.join("&")};function D6(c,e){return e=String(e),c.j&&(e=e.toLowerCase()),e}function dx(c,e){e&&!c.j&&(h4(c),c.i=null,c.g.forEach(function(t,a){var n=a.toLowerCase();a!=n&&(rf(this,a),of(this,n,t))},c)),c.j=e}var mx=class{constructor(c,e){this.g=c,this.map=e}};function lf(c){this.l=c||px,t2.PerformanceNavigationTiming?(c=t2.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(t2.g&&t2.g.Ka&&t2.g.Ka()&&t2.g.Ka().ec),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var px=10;function ff(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function uf(c){return c.h?1:c.g?c.g.size:0}function ea(c,e){return c.h?c.h==e:c.g?c.g.has(e):!1}function Sn(c,e){c.g?c.g.add(e):c.h=e}function hf(c,e){c.h&&c.h==e?c.h=null:c.g&&c.g.has(e)&&c.g.delete(e)}lf.prototype.cancel=function(){if(this.i=df(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function df(c){if(c.h!=null)return c.i.concat(c.h.F);if(c.g!=null&&c.g.size!==0){let e=c.i;for(const t of c.g.values())e=e.concat(t.F);return e}return mn(c.i)}var vx=class{stringify(c){return t2.JSON.stringify(c,void 0)}parse(c){return t2.JSON.parse(c,void 0)}};function gx(){this.g=new vx}function Hx(c,e,t){const a=t||"";try{af(c,function(n,r){let s=n;i0(n)&&(s=Cn(n)),e.push(a+r+"="+encodeURIComponent(s))})}catch(n){throw e.push(a+"type="+encodeURIComponent("_badmap")),n}}function zx(c,e){const t=new kc;if(t2.Image){const a=new Image;a.onload=j0(G0,t,a,"TestLoadImage: loaded",!0,e),a.onerror=j0(G0,t,a,"TestLoadImage: error",!1,e),a.onabort=j0(G0,t,a,"TestLoadImage: abort",!1,e),a.ontimeout=j0(G0,t,a,"TestLoadImage: timeout",!1,e),t2.setTimeout(function(){a.ontimeout&&a.ontimeout()},1e4),a.src=c}else e(!1)}function G0(c,e,t,a,n){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,n(a)}catch{}}function d0(c){this.l=c.fc||null,this.j=c.ob||!1}Z2(d0,wn);d0.prototype.g=function(){return new Rc(this.l,this.j)};d0.prototype.i=function(c){return function(){return c}}({});function Rc(c,e){J2.call(this),this.F=c,this.u=e,this.m=void 0,this.readyState=Nn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Z2(Rc,J2);var Nn=0;I=Rc.prototype;I.open=function(c,e){if(this.readyState!=Nn)throw this.abort(),Error("Error reopening a connection");this.C=c,this.B=e,this.readyState=1,qe(this)};I.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};c&&(e.body=c),(this.F||t2).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,m0(this)),this.readyState=Nn};I.$a=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,qe(this)),this.g&&(this.readyState=3,qe(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof t2.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mf(this)}else c.text().then(this.Za.bind(this),this.ka.bind(this))};function mf(c){c.j.read().then(c.Xa.bind(c)).catch(c.ka.bind(c))}I.Xa=function(c){if(this.g){if(this.u&&c.value)this.response.push(c.value);else if(!this.u){var e=c.value?c.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!c.done}))&&(this.response=this.responseText+=e)}c.done?m0(this):qe(this),this.readyState==3&&mf(this)}};I.Za=function(c){this.g&&(this.response=this.responseText=c,m0(this))};I.Ya=function(c){this.g&&(this.response=c,m0(this))};I.ka=function(){this.g&&m0(this)};function m0(c){c.readyState=4,c.l=null,c.j=null,c.A=null,qe(c)}I.setRequestHeader=function(c,e){this.v.append(c,e)};I.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,c.push(t[0]+": "+t[1]),t=e.next();return c.join(`\r
`)};function qe(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Rc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});var Vx=t2.JSON.parse;function P2(c){J2.call(this),this.headers=new Map,this.u=c||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=pf,this.L=this.M=!1}Z2(P2,J2);var pf="",Cx=/^https?$/i,Mx=["POST","PUT"];I=P2.prototype;I.Oa=function(c){this.M=c};I.ha=function(c,e,t,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+c);e=e?e.toUpperCase():"GET",this.I=c,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Q5.g(),this.C=this.u?ai(this.u):ai(Q5),this.g.onreadystatechange=u1(this.La,this);try{this.G=!0,this.g.open(e,String(c),!0),this.G=!1}catch(r){si(this,r);return}if(c=t||"",t=new Map(this.headers),a)if(Object.getPrototypeOf(a)===Object.prototype)for(var n in a)t.set(n,a[n]);else if(typeof a.keys=="function"&&typeof a.get=="function")for(const r of a.keys())t.set(r,a.get(r));else throw Error("Unknown input type for opt_headers: "+String(a));a=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),n=t2.FormData&&c instanceof t2.FormData,!(0<=kl(Mx,e))||a||n||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,s]of t)this.g.setRequestHeader(r,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Hf(this),0<this.B&&((this.L=yx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=u1(this.ua,this)):this.A=Ln(this.ua,this.B,this)),this.v=!0,this.g.send(c),this.v=!1}catch(r){si(this,r)}};function yx(c){return L6&&typeof c.timeout=="number"&&c.ontimeout!==void 0}I.ua=function(){typeof dn<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,a1(this,"timeout"),this.abort(8))};function si(c,e){c.h=!1,c.g&&(c.l=!0,c.g.abort(),c.l=!1),c.j=e,c.m=5,vf(c),Dc(c)}function vf(c){c.F||(c.F=!0,a1(c,"complete"),a1(c,"error"))}I.abort=function(c){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=c||7,a1(this,"complete"),a1(this,"abort"),Dc(this))};I.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dc(this,!0)),P2.$.N.call(this)};I.La=function(){this.s||(this.G||this.v||this.l?gf(this):this.kb())};I.kb=function(){gf(this)};function gf(c){if(c.h&&typeof dn<"u"&&(!c.C[1]||a3(c)!=4||c.da()!=2)){if(c.v&&a3(c)==4)Ln(c.La,0,c);else if(a1(c,"readystatechange"),a3(c)==4){c.h=!1;try{const s=c.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var a;if(a=s===0){var n=String(c.I).match(nf)[1]||null;!n&&t2.self&&t2.self.location&&(n=t2.self.location.protocol.slice(0,-1)),a=!Cx.test(n?n.toLowerCase():"")}t=a}if(t)a1(c,"complete"),a1(c,"success");else{c.m=6;try{var r=2<a3(c)?c.g.statusText:""}catch{r=""}c.j=r+" ["+c.da()+"]",vf(c)}}finally{Dc(c)}}}}function Dc(c,e){if(c.g){Hf(c);const t=c.g,a=c.C[0]?()=>{}:null;c.g=null,c.C=null,e||a1(c,"ready");try{t.onreadystatechange=a}catch{}}}function Hf(c){c.g&&c.L&&(c.g.ontimeout=null),c.A&&(t2.clearTimeout(c.A),c.A=null)}I.isActive=function(){return!!this.g};function a3(c){return c.g?c.g.readyState:0}I.da=function(){try{return 2<a3(this)?this.g.status:-1}catch{return-1}};I.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Wa=function(c){if(this.g){var e=this.g.responseText;return c&&e.indexOf(c)==0&&(e=e.substring(c.length)),Vx(e)}};function ii(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.K){case pf:case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Lx(c){const e={};c=(c.g&&2<=a3(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let a=0;a<c.length;a++){if(Re(c[a]))continue;var t=Yb(c[a]);const n=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const r=e[n]||[];e[n]=r,r.push(t)}Ub(e,function(a){return a.join(", ")})}I.Ia=function(){return this.m};I.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zf(c){let e="";return vn(c,function(t,a){e+=a,e+=":",e+=t,e+=`\r
`}),e}function An(c,e,t){e:{for(a in t){var a=!1;break e}a=!0}a||(t=zf(t),typeof c=="string"?t!=null&&encodeURIComponent(String(t)):S2(c,e,t))}function X6(c,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[c]||e}function Vf(c){this.Ga=0,this.j=[],this.l=new kc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=X6("failFast",!1,c),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=X6("baseRetryDelayMs",5e3,c),this.hb=X6("retryDelaySeedMs",1e4,c),this.eb=X6("forwardChannelMaxRetries",2,c),this.xa=X6("forwardChannelRequestTimeoutMs",2e4,c),this.va=c&&c.xmlHttpFactory||void 0,this.Ha=c&&c.dc||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.i=new lf(c&&c.concurrentRequestLimit),this.Ja=new gx,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=c&&c.bc||!1,c&&c.Ea&&this.l.Ea(),c&&c.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&c&&c.detectBufferingProxy||!1,this.qa=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.qa=c.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}I=Vf.prototype;I.ra=8;I.H=1;function kn(c){if(Cf(c),c.H==3){var e=c.W++,t=M3(c.I);if(S2(t,"SID",c.K),S2(t,"RID",e),S2(t,"TYPE","terminate"),p0(c,t),e=new u0(c,c.l,e),e.L=2,e.v=Pc(M3(t)),t=!1,t2.navigator&&t2.navigator.sendBeacon)try{t=t2.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&t2.Image&&(new Image().src=e.v,t=!0),t||(e.g=Nf(e.l,null),e.g.ha(e.v)),e.G=Date.now(),h0(e)}xf(c)}function Oc(c){c.g&&(_n(c),c.g.cancel(),c.g=null)}function Cf(c){Oc(c),c.u&&(t2.clearTimeout(c.u),c.u=null),R8(c),c.i.cancel(),c.m&&(typeof c.m=="number"&&t2.clearTimeout(c.m),c.m=null)}function Fc(c){if(!ff(c.i)&&!c.m){c.m=!0;var e=c.Na;Oe||$l(),Fe||(Oe(),Fe=!0),Mn.add(e,c),c.C=0}}function wx(c,e){return uf(c.i)>=c.i.j-(c.m?1:0)?!1:c.m?(c.j=e.F.concat(c.j),!0):c.H==1||c.H==2||c.C>=(c.cb?0:c.eb)?!1:(c.m=l0(u1(c.Na,c,e),bf(c,c.C)),c.C++,!0)}I.Na=function(c){if(this.m)if(this.m=null,this.H==1){if(!c){this.W=Math.floor(1e5*Math.random()),c=this.W++;const n=new u0(this,this.l,c);let r=this.s;if(this.U&&(r?(r=Il(r),Pl(r,this.U)):r=this.U),this.o!==null||this.O||(n.I=r,r=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){c:{var a=this.j[t];if("__data__"in a.map&&(a=a.map.__data__,typeof a=="string")){a=a.length;break c}a=void 0}if(a===void 0)break;if(e+=a,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Mf(this,n,e),t=M3(this.I),S2(t,"RID",c),S2(t,"CVER",22),this.F&&S2(t,"X-HTTP-Session-Id",this.F),p0(this,t),r&&(this.O?e="headers="+encodeURIComponent(String(zf(r)))+"&"+e:this.o&&An(t,this.o,r)),Sn(this.i,n),this.bb&&S2(t,"TYPE","init"),this.P?(S2(t,"$req",e),S2(t,"SID","null"),n.aa=!0,J5(n,t,null)):J5(n,t,e),this.H=2}}else this.H==3&&(c?oi(this,c):this.j.length==0||ff(this.i)||oi(this))};function oi(c,e){var t;e?t=e.m:t=c.W++;const a=M3(c.I);S2(a,"SID",c.K),S2(a,"RID",t),S2(a,"AID",c.V),p0(c,a),c.o&&c.s&&An(a,c.o,c.s),t=new u0(c,c.l,t,c.C+1),c.o===null&&(t.I=c.s),e&&(c.j=e.F.concat(c.j)),e=Mf(c,t,1e3),t.setTimeout(Math.round(.5*c.xa)+Math.round(.5*c.xa*Math.random())),Sn(c.i,t),J5(t,a,e)}function p0(c,e){c.na&&vn(c.na,function(t,a){S2(e,a,t)}),c.h&&af({},function(t,a){S2(e,a,t)})}function Mf(c,e,t){t=Math.min(c.j.length,t);var a=c.h?u1(c.h.Va,c.h,c):null;e:{var n=c.j;let r=-1;for(;;){const s=["count="+t];r==-1?0<t?(r=n[0].g,s.push("ofs="+r)):r=0:s.push("ofs="+r);let i=!0;for(let o=0;o<t;o++){let l=n[o].g;const f=n[o].map;if(l-=r,0>l)r=Math.max(0,n[o].g-100),i=!1;else try{Hx(f,s,"req"+l+"_")}catch{a&&a(f)}}if(i){a=s.join("&");break e}}}return c=c.j.splice(0,t),e.F=c,a}function yf(c){if(!c.g&&!c.u){c.ba=1;var e=c.Ma;Oe||$l(),Fe||(Oe(),Fe=!0),Mn.add(e,c),c.A=0}}function Tn(c){return c.g||c.u||3<=c.A?!1:(c.ba++,c.u=l0(u1(c.Ma,c),bf(c,c.A)),c.A++,!0)}I.Ma=function(){if(this.u=null,Lf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var c=2*this.S;this.l.info("BP detection timer enabled: "+c),this.B=l0(u1(this.jb,this),c)}};I.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,H1(10),Oc(this),Lf(this))};function _n(c){c.B!=null&&(t2.clearTimeout(c.B),c.B=null)}function Lf(c){c.g=new u0(c,c.l,"rpc",c.ba),c.o===null&&(c.g.I=c.s),c.g.O=0;var e=M3(c.wa);S2(e,"RID","rpc"),S2(e,"SID",c.K),S2(e,"AID",c.V),S2(e,"CI",c.G?"0":"1"),!c.G&&c.qa&&S2(e,"TO",c.qa),S2(e,"TYPE","xmlhttp"),p0(c,e),c.o&&c.s&&An(e,c.o,c.s),c.L&&c.g.setTimeout(c.L);var t=c.g;c=c.pa,t.L=1,t.v=Pc(M3(e)),t.s=null,t.S=!0,Zl(t,c)}I.ib=function(){this.v!=null&&(this.v=null,Oc(this),Tn(this),H1(19))};function R8(c){c.v!=null&&(t2.clearTimeout(c.v),c.v=null)}function wf(c,e){var t=null;if(c.g==e){R8(c),_n(c),c.g=null;var a=2}else if(ea(c.i,e))t=e.F,hf(c.i,e),a=1;else return;if(c.H!=0){if(e.i)if(a==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var n=c.C;a=Tc(),a1(a,new Yl(a,t)),Fc(c)}else yf(c);else if(n=e.o,n==3||n==0&&0<e.ca||!(a==1&&wx(c,e)||a==2&&Tn(c)))switch(t&&0<t.length&&(e=c.i,e.i=e.i.concat(t)),n){case 1:L4(c,5);break;case 4:L4(c,10);break;case 3:L4(c,6);break;default:L4(c,2)}}}function bf(c,e){let t=c.ab+Math.floor(Math.random()*c.hb);return c.isActive()||(t*=2),t*e}function L4(c,e){if(c.l.info("Error code "+e),e==2){var t=null;c.h&&(t=null);var a=u1(c.pb,c);t||(t=new k4("//www.google.com/images/cleardot.gif"),t2.location&&t2.location.protocol=="http"||I8(t,"https"),Pc(t)),zx(t.toString(),a)}else H1(2);c.H=0,c.h&&c.h.za(e),xf(c),Cf(c)}I.pb=function(c){c?(this.l.info("Successfully pinged google.com"),H1(2)):(this.l.info("Failed to ping google.com"),H1(1))};function xf(c){if(c.H=0,c.ma=[],c.h){const e=df(c.i);(e.length!=0||c.j.length!=0)&&(Js(c.ma,e),Js(c.ma,c.j),c.i.i.length=0,mn(c.j),c.j.length=0),c.h.ya()}}function Sf(c,e,t){var a=t instanceof k4?M3(t):new k4(t);if(a.g!="")e&&(a.g=e+"."+a.g),P8(a,a.m);else{var n=t2.location;a=n.protocol,e=e?e+"."+n.hostname:n.hostname,n=+n.port;var r=new k4(null);a&&I8(r,a),e&&(r.g=e),n&&P8(r,n),t&&(r.l=t),a=r}return t=c.F,e=c.Da,t&&e&&S2(a,t,e),S2(a,"VER",c.ra),p0(c,a),a}function Nf(c,e,t){if(e&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&c.Ha&&!c.va?new P2(new d0({ob:!0})):new P2(c.va),e.Oa(c.J),e}I.isActive=function(){return!!this.h&&this.h.isActive(this)};function Af(){}I=Af.prototype;I.Ba=function(){};I.Aa=function(){};I.za=function(){};I.ya=function(){};I.isActive=function(){return!0};I.Va=function(){};function D8(){if(L6&&!(10<=Number(Db)))throw Error("Environmental error: no available transport.")}D8.prototype.g=function(c,e){return new N1(c,e)};function N1(c,e){J2.call(this),this.g=new Vf(e),this.l=c,this.h=e&&e.messageUrlParams||null,c=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.s=c,c=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(c?c["X-WebChannel-Content-Type"]=e.messageContentType:c={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(c?c["X-WebChannel-Client-Profile"]=e.Ca:c={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=c,(c=e&&e.cc)&&!Re(c)&&(this.g.o=c),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Re(e)&&(this.g.F=e,c=this.h,c!==null&&e in c&&(c=this.h,e in c&&delete c[e])),this.j=new O6(this)}Z2(N1,J2);N1.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var c=this.g,e=this.l,t=this.h||void 0;H1(0),c.Y=e,c.na=t||{},c.G=c.aa,c.I=Sf(c,null,c.Y),Fc(c)};N1.prototype.close=function(){kn(this.g)};N1.prototype.u=function(c){var e=this.g;if(typeof c=="string"){var t={};t.__data__=c,c=t}else this.v&&(t={},t.__data__=Cn(c),c=t);e.j.push(new mx(e.fb++,c)),e.H==3&&Fc(e)};N1.prototype.N=function(){this.g.h=null,delete this.j,kn(this.g),delete this.g,N1.$.N.call(this)};function kf(c){bn.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var e=c.__sm__;if(e){e:{for(const t in e){c=t;break e}c=void 0}(this.i=c)&&(c=this.i,e=e!==null&&c in e?e[c]:void 0),this.data=e}else this.data=c}Z2(kf,bn);function Tf(){xn.call(this),this.status=1}Z2(Tf,xn);function O6(c){this.g=c}Z2(O6,Af);O6.prototype.Ba=function(){a1(this.g,"a")};O6.prototype.Aa=function(c){a1(this.g,new kf(c))};O6.prototype.za=function(c){a1(this.g,new Tf)};O6.prototype.ya=function(){a1(this.g,"b")};function bx(){this.blockSize=-1}function K1(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Z2(K1,bx);K1.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Xt(c,e,t){t||(t=0);var a=Array(16);if(typeof e=="string")for(var n=0;16>n;++n)a[n]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(n=0;16>n;++n)a[n]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=c.g[0],t=c.g[1],n=c.g[2];var r=c.g[3],s=e+(r^t&(n^r))+a[0]+3614090360&4294967295;e=t+(s<<7&4294967295|s>>>25),s=r+(n^e&(t^n))+a[1]+3905402710&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(t^r&(e^t))+a[2]+606105819&4294967295,n=r+(s<<17&4294967295|s>>>15),s=t+(e^n&(r^e))+a[3]+3250441966&4294967295,t=n+(s<<22&4294967295|s>>>10),s=e+(r^t&(n^r))+a[4]+4118548399&4294967295,e=t+(s<<7&4294967295|s>>>25),s=r+(n^e&(t^n))+a[5]+1200080426&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(t^r&(e^t))+a[6]+2821735955&4294967295,n=r+(s<<17&4294967295|s>>>15),s=t+(e^n&(r^e))+a[7]+4249261313&4294967295,t=n+(s<<22&4294967295|s>>>10),s=e+(r^t&(n^r))+a[8]+1770035416&4294967295,e=t+(s<<7&4294967295|s>>>25),s=r+(n^e&(t^n))+a[9]+2336552879&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(t^r&(e^t))+a[10]+4294925233&4294967295,n=r+(s<<17&4294967295|s>>>15),s=t+(e^n&(r^e))+a[11]+2304563134&4294967295,t=n+(s<<22&4294967295|s>>>10),s=e+(r^t&(n^r))+a[12]+1804603682&4294967295,e=t+(s<<7&4294967295|s>>>25),s=r+(n^e&(t^n))+a[13]+4254626195&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(t^r&(e^t))+a[14]+2792965006&4294967295,n=r+(s<<17&4294967295|s>>>15),s=t+(e^n&(r^e))+a[15]+1236535329&4294967295,t=n+(s<<22&4294967295|s>>>10),s=e+(n^r&(t^n))+a[1]+4129170786&4294967295,e=t+(s<<5&4294967295|s>>>27),s=r+(t^n&(e^t))+a[6]+3225465664&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^t&(r^e))+a[11]+643717713&4294967295,n=r+(s<<14&4294967295|s>>>18),s=t+(r^e&(n^r))+a[0]+3921069994&4294967295,t=n+(s<<20&4294967295|s>>>12),s=e+(n^r&(t^n))+a[5]+3593408605&4294967295,e=t+(s<<5&4294967295|s>>>27),s=r+(t^n&(e^t))+a[10]+38016083&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^t&(r^e))+a[15]+3634488961&4294967295,n=r+(s<<14&4294967295|s>>>18),s=t+(r^e&(n^r))+a[4]+3889429448&4294967295,t=n+(s<<20&4294967295|s>>>12),s=e+(n^r&(t^n))+a[9]+568446438&4294967295,e=t+(s<<5&4294967295|s>>>27),s=r+(t^n&(e^t))+a[14]+3275163606&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^t&(r^e))+a[3]+4107603335&4294967295,n=r+(s<<14&4294967295|s>>>18),s=t+(r^e&(n^r))+a[8]+1163531501&4294967295,t=n+(s<<20&4294967295|s>>>12),s=e+(n^r&(t^n))+a[13]+2850285829&4294967295,e=t+(s<<5&4294967295|s>>>27),s=r+(t^n&(e^t))+a[2]+4243563512&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^t&(r^e))+a[7]+1735328473&4294967295,n=r+(s<<14&4294967295|s>>>18),s=t+(r^e&(n^r))+a[12]+2368359562&4294967295,t=n+(s<<20&4294967295|s>>>12),s=e+(t^n^r)+a[5]+4294588738&4294967295,e=t+(s<<4&4294967295|s>>>28),s=r+(e^t^n)+a[8]+2272392833&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^t)+a[11]+1839030562&4294967295,n=r+(s<<16&4294967295|s>>>16),s=t+(n^r^e)+a[14]+4259657740&4294967295,t=n+(s<<23&4294967295|s>>>9),s=e+(t^n^r)+a[1]+2763975236&4294967295,e=t+(s<<4&4294967295|s>>>28),s=r+(e^t^n)+a[4]+1272893353&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^t)+a[7]+4139469664&4294967295,n=r+(s<<16&4294967295|s>>>16),s=t+(n^r^e)+a[10]+3200236656&4294967295,t=n+(s<<23&4294967295|s>>>9),s=e+(t^n^r)+a[13]+681279174&4294967295,e=t+(s<<4&4294967295|s>>>28),s=r+(e^t^n)+a[0]+3936430074&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^t)+a[3]+3572445317&4294967295,n=r+(s<<16&4294967295|s>>>16),s=t+(n^r^e)+a[6]+76029189&4294967295,t=n+(s<<23&4294967295|s>>>9),s=e+(t^n^r)+a[9]+3654602809&4294967295,e=t+(s<<4&4294967295|s>>>28),s=r+(e^t^n)+a[12]+3873151461&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^t)+a[15]+530742520&4294967295,n=r+(s<<16&4294967295|s>>>16),s=t+(n^r^e)+a[2]+3299628645&4294967295,t=n+(s<<23&4294967295|s>>>9),s=e+(n^(t|~r))+a[0]+4096336452&4294967295,e=t+(s<<6&4294967295|s>>>26),s=r+(t^(e|~n))+a[7]+1126891415&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~t))+a[14]+2878612391&4294967295,n=r+(s<<15&4294967295|s>>>17),s=t+(r^(n|~e))+a[5]+4237533241&4294967295,t=n+(s<<21&4294967295|s>>>11),s=e+(n^(t|~r))+a[12]+1700485571&4294967295,e=t+(s<<6&4294967295|s>>>26),s=r+(t^(e|~n))+a[3]+2399980690&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~t))+a[10]+4293915773&4294967295,n=r+(s<<15&4294967295|s>>>17),s=t+(r^(n|~e))+a[1]+2240044497&4294967295,t=n+(s<<21&4294967295|s>>>11),s=e+(n^(t|~r))+a[8]+1873313359&4294967295,e=t+(s<<6&4294967295|s>>>26),s=r+(t^(e|~n))+a[15]+4264355552&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~t))+a[6]+2734768916&4294967295,n=r+(s<<15&4294967295|s>>>17),s=t+(r^(n|~e))+a[13]+1309151649&4294967295,t=n+(s<<21&4294967295|s>>>11),s=e+(n^(t|~r))+a[4]+4149444226&4294967295,e=t+(s<<6&4294967295|s>>>26),s=r+(t^(e|~n))+a[11]+3174756917&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~t))+a[2]+718787259&4294967295,n=r+(s<<15&4294967295|s>>>17),s=t+(r^(n|~e))+a[9]+3951481745&4294967295,c.g[0]=c.g[0]+e&4294967295,c.g[1]=c.g[1]+(n+(s<<21&4294967295|s>>>11))&4294967295,c.g[2]=c.g[2]+n&4294967295,c.g[3]=c.g[3]+r&4294967295}K1.prototype.j=function(c,e){e===void 0&&(e=c.length);for(var t=e-this.blockSize,a=this.m,n=this.h,r=0;r<e;){if(n==0)for(;r<=t;)Xt(this,c,r),r+=this.blockSize;if(typeof c=="string"){for(;r<e;)if(a[n++]=c.charCodeAt(r++),n==this.blockSize){Xt(this,a),n=0;break}}else for(;r<e;)if(a[n++]=c[r++],n==this.blockSize){Xt(this,a),n=0;break}}this.h=n,this.i+=e};K1.prototype.l=function(){var c=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);c[0]=128;for(var e=1;e<c.length-8;++e)c[e]=0;var t=8*this.i;for(e=c.length-8;e<c.length;++e)c[e]=t&255,t/=256;for(this.j(c),c=Array(16),e=t=0;4>e;++e)for(var a=0;32>a;a+=8)c[t++]=this.g[e]>>>a&255;return c};function C2(c,e){this.h=e;for(var t=[],a=!0,n=c.length-1;0<=n;n--){var r=c[n]|0;a&&r==e||(t[n]=r,a=!1)}this.g=t}var xx={};function En(c){return-128<=c&&128>c?Ib(c,function(e){return new C2([e|0],0>e?-1:0)}):new C2([c|0],0>c?-1:0)}function n3(c){if(isNaN(c)||!isFinite(c))return d6;if(0>c)return t1(n3(-c));for(var e=[],t=1,a=0;c>=t;a++)e[a]=c/t|0,t*=ca;return new C2(e,0)}function _f(c,e){if(c.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(c.charAt(0)=="-")return t1(_f(c.substring(1),e));if(0<=c.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=n3(Math.pow(e,8)),a=d6,n=0;n<c.length;n+=8){var r=Math.min(8,c.length-n),s=parseInt(c.substring(n,n+r),e);8>r?(r=n3(Math.pow(e,r)),a=a.R(r).add(n3(s))):(a=a.R(t),a=a.add(n3(s)))}return a}var ca=4294967296,d6=En(0),ta=En(1),li=En(16777216);I=C2.prototype;I.ea=function(){if(T1(this))return-t1(this).ea();for(var c=0,e=1,t=0;t<this.g.length;t++){var a=this.D(t);c+=(0<=a?a:ca+a)*e,e*=ca}return c};I.toString=function(c){if(c=c||10,2>c||36<c)throw Error("radix out of range: "+c);if(H3(this))return"0";if(T1(this))return"-"+t1(this).toString(c);for(var e=n3(Math.pow(c,6)),t=this,a="";;){var n=F8(t,e).g;t=O8(t,n.R(e));var r=((0<t.g.length?t.g[0]:t.h)>>>0).toString(c);if(t=n,H3(t))return r+a;for(;6>r.length;)r="0"+r;a=r+a}};I.D=function(c){return 0>c?0:c<this.g.length?this.g[c]:this.h};function H3(c){if(c.h!=0)return!1;for(var e=0;e<c.g.length;e++)if(c.g[e]!=0)return!1;return!0}function T1(c){return c.h==-1}I.X=function(c){return c=O8(this,c),T1(c)?-1:H3(c)?0:1};function t1(c){for(var e=c.g.length,t=[],a=0;a<e;a++)t[a]=~c.g[a];return new C2(t,~c.h).add(ta)}I.abs=function(){return T1(this)?t1(this):this};I.add=function(c){for(var e=Math.max(this.g.length,c.g.length),t=[],a=0,n=0;n<=e;n++){var r=a+(this.D(n)&65535)+(c.D(n)&65535),s=(r>>>16)+(this.D(n)>>>16)+(c.D(n)>>>16);a=s>>>16,r&=65535,s&=65535,t[n]=s<<16|r}return new C2(t,t[t.length-1]&-2147483648?-1:0)};function O8(c,e){return c.add(t1(e))}I.R=function(c){if(H3(this)||H3(c))return d6;if(T1(this))return T1(c)?t1(this).R(t1(c)):t1(t1(this).R(c));if(T1(c))return t1(this.R(t1(c)));if(0>this.X(li)&&0>c.X(li))return n3(this.ea()*c.ea());for(var e=this.g.length+c.g.length,t=[],a=0;a<2*e;a++)t[a]=0;for(a=0;a<this.g.length;a++)for(var n=0;n<c.g.length;n++){var r=this.D(a)>>>16,s=this.D(a)&65535,i=c.D(n)>>>16,o=c.D(n)&65535;t[2*a+2*n]+=s*o,K0(t,2*a+2*n),t[2*a+2*n+1]+=r*o,K0(t,2*a+2*n+1),t[2*a+2*n+1]+=s*i,K0(t,2*a+2*n+1),t[2*a+2*n+2]+=r*i,K0(t,2*a+2*n+2)}for(a=0;a<e;a++)t[a]=t[2*a+1]<<16|t[2*a];for(a=e;a<2*e;a++)t[a]=0;return new C2(t,0)};function K0(c,e){for(;(c[e]&65535)!=c[e];)c[e+1]+=c[e]>>>16,c[e]&=65535,e++}function J6(c,e){this.g=c,this.h=e}function F8(c,e){if(H3(e))throw Error("division by zero");if(H3(c))return new J6(d6,d6);if(T1(c))return e=F8(t1(c),e),new J6(t1(e.g),t1(e.h));if(T1(e))return e=F8(c,t1(e)),new J6(t1(e.g),e.h);if(30<c.g.length){if(T1(c)||T1(e))throw Error("slowDivide_ only works with positive integers.");for(var t=ta,a=e;0>=a.X(c);)t=fi(t),a=fi(a);var n=e6(t,1),r=e6(a,1);for(a=e6(a,2),t=e6(t,2);!H3(a);){var s=r.add(a);0>=s.X(c)&&(n=n.add(t),r=s),a=e6(a,1),t=e6(t,1)}return e=O8(c,n.R(e)),new J6(n,e)}for(n=d6;0<=c.X(e);){for(t=Math.max(1,Math.floor(c.ea()/e.ea())),a=Math.ceil(Math.log(t)/Math.LN2),a=48>=a?1:Math.pow(2,a-48),r=n3(t),s=r.R(e);T1(s)||0<s.X(c);)t-=a,r=n3(t),s=r.R(e);H3(r)&&(r=ta),n=n.add(r),c=O8(c,s)}return new J6(n,c)}I.gb=function(c){return F8(this,c).h};I.and=function(c){for(var e=Math.max(this.g.length,c.g.length),t=[],a=0;a<e;a++)t[a]=this.D(a)&c.D(a);return new C2(t,this.h&c.h)};I.or=function(c){for(var e=Math.max(this.g.length,c.g.length),t=[],a=0;a<e;a++)t[a]=this.D(a)|c.D(a);return new C2(t,this.h|c.h)};I.xor=function(c){for(var e=Math.max(this.g.length,c.g.length),t=[],a=0;a<e;a++)t[a]=this.D(a)^c.D(a);return new C2(t,this.h^c.h)};function fi(c){for(var e=c.g.length+1,t=[],a=0;a<e;a++)t[a]=c.D(a)<<1|c.D(a-1)>>>31;return new C2(t,c.h)}function e6(c,e){var t=e>>5;e%=32;for(var a=c.g.length-t,n=[],r=0;r<a;r++)n[r]=0<e?c.D(r+t)>>>e|c.D(r+t+1)<<32-e:c.D(r+t);return new C2(n,c.h)}D8.prototype.createWebChannel=D8.prototype.g;N1.prototype.send=N1.prototype.u;N1.prototype.open=N1.prototype.m;N1.prototype.close=N1.prototype.close;_c.NO_ERROR=0;_c.TIMEOUT=8;_c.HTTP_ERROR=6;Ql.COMPLETE="complete";Xl.EventType=f0;f0.OPEN="a";f0.CLOSE="b";f0.ERROR="c";f0.MESSAGE="d";J2.prototype.listen=J2.prototype.O;P2.prototype.listenOnce=P2.prototype.P;P2.prototype.getLastError=P2.prototype.Sa;P2.prototype.getLastErrorCode=P2.prototype.Ia;P2.prototype.getStatus=P2.prototype.da;P2.prototype.getResponseJson=P2.prototype.Wa;P2.prototype.getResponseText=P2.prototype.ja;P2.prototype.send=P2.prototype.ha;P2.prototype.setWithCredentials=P2.prototype.Oa;K1.prototype.digest=K1.prototype.l;K1.prototype.reset=K1.prototype.reset;K1.prototype.update=K1.prototype.j;C2.prototype.add=C2.prototype.add;C2.prototype.multiply=C2.prototype.R;C2.prototype.modulo=C2.prototype.gb;C2.prototype.compare=C2.prototype.X;C2.prototype.toNumber=C2.prototype.ea;C2.prototype.toString=C2.prototype.toString;C2.prototype.getBits=C2.prototype.D;C2.fromNumber=n3;C2.fromString=_f;var Sx=function(){return new D8},Nx=function(){return Tc()},Jt=_c,Ax=Ql,kx=W4,ui={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Tx=d0,Y0=Xl,_x=P2,Ex=K1,m6=C2;const hi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}i1.UNAUTHENTICATED=new i1(null),i1.GOOGLE_CREDENTIALS=new i1("google-credentials-uid"),i1.FIRST_PARTY=new i1("first-party-uid"),i1.MOCK_USER=new i1("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F6="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E4=new wc("@firebase/firestore");function di(){return E4.logLevel}function q(c,...e){if(E4.logLevel<=m2.DEBUG){const t=e.map(In);E4.debug(`Firestore (${F6}): ${c}`,...t)}}function y3(c,...e){if(E4.logLevel<=m2.ERROR){const t=e.map(In);E4.error(`Firestore (${F6}): ${c}`,...t)}}function w6(c,...e){if(E4.logLevel<=m2.WARN){const t=e.map(In);E4.warn(`Firestore (${F6}): ${c}`,...t)}}function In(c){if(typeof c=="string")return c;try{return e=c,JSON.stringify(e)}catch{return c}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(c="Unexpected state"){const e=`FIRESTORE (${F6}) INTERNAL ASSERTION FAILED: `+c;throw y3(e),new Error(e)}function A2(c,e){c||c2()}function r2(c,e){return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Q1{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ix{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(i1.UNAUTHENTICATED))}shutdown(){}}class Px{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Rx{constructor(e){this.t=e,this.currentUser=i1.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let a=this.i;const n=o=>this.i!==a?(a=this.i,t(o)):Promise.resolve();let r=new Z3;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Z3,e.enqueueRetryable(()=>n(this.currentUser))};const s=()=>{const o=r;e.enqueueRetryable(async()=>{await o.promise,await n(this.currentUser)})},i=o=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(o=>i(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?i(o):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Z3)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(a=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(A2(typeof a.accessToken=="string"),new Ef(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return A2(e===null||typeof e=="string"),new i1(e)}}class Dx{constructor(e,t,a){this.h=e,this.l=t,this.m=a,this.type="FirstParty",this.user=i1.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ox{constructor(e,t,a){this.h=e,this.l=t,this.m=a}getToken(){return Promise.resolve(new Dx(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(i1.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bx{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const a=r=>{r.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const s=r.token!==this.T;return this.T=r.token,q("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>a(r))};const n=r=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>n(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?n(r):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(A2(typeof t.token=="string"),this.T=t.token,new Fx(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(c){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(c);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let a=0;a<c;a++)t[a]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let a="";for(;a.length<20;){const n=Ux(40);for(let r=0;r<n.length;++r)a.length<20&&n[r]<t&&(a+=e.charAt(n[r]%e.length))}return a}}function v2(c,e){return c<e?-1:c>e?1:0}function b6(c,e,t){return c.length===e.length&&c.every((a,n)=>t(a,e[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new W(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return G2.fromMillis(Date.now())}static fromDate(e){return G2.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),a=Math.floor(1e6*(e-1e3*t));return new G2(t,a)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?v2(this.nanoseconds,e.nanoseconds):v2(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n2(e)}static min(){return new n2(new G2(0,0))}static max(){return new n2(new G2(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,a){t===void 0?t=0:t>e.length&&c2(),a===void 0?a=e.length-t:a>e.length-t&&c2(),this.segments=e,this.offset=t,this.len=a}get length(){return this.len}isEqual(e){return je.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof je?e.forEach(a=>{t.push(a)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,a=this.limit();t<a;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const a=Math.min(e.length,t.length);for(let n=0;n<a;n++){const r=e.get(n),s=t.get(n);if(r<s)return-1;if(r>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class T2 extends je{construct(e,t,a){return new T2(e,t,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const a of e){if(a.indexOf("//")>=0)throw new W(x.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);t.push(...a.split("/").filter(n=>n.length>0))}return new T2(t)}static emptyPath(){return new T2([])}}const $x=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class f1 extends je{construct(e,t,a){return new f1(e,t,a)}static isValidIdentifier(e){return $x.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),f1.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new f1(["__name__"])}static fromServerFormat(e){const t=[];let a="",n=0;const r=()=>{if(a.length===0)throw new W(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(a),a=""};let s=!1;for(;n<e.length;){const i=e[n];if(i==="\\"){if(n+1===e.length)throw new W(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const o=e[n+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new W(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=o,n+=2}else i==="`"?(s=!s,n++):i!=="."||s?(a+=i,n++):(r(),n++)}if(r(),s)throw new W(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new f1(t)}static emptyPath(){return new f1([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(T2.fromString(e))}static fromName(e){return new Y(T2.fromString(e).popFirst(5))}static empty(){return new Y(T2.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&T2.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return T2.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new T2(e.slice()))}}function qx(c,e){const t=c.toTimestamp().seconds,a=c.toTimestamp().nanoseconds+1,n=n2.fromTimestamp(a===1e9?new G2(t+1,0):new G2(t,a));return new n4(n,Y.empty(),e)}function jx(c){return new n4(c.readTime,c.key,-1)}class n4{constructor(e,t,a){this.readTime=e,this.documentKey=t,this.largestBatchId=a}static min(){return new n4(n2.min(),Y.empty(),-1)}static max(){return new n4(n2.max(),Y.empty(),-1)}}function Wx(c,e){let t=c.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(c.documentKey,e.documentKey),t!==0?t:v2(c.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(c){if(c.code!==x.FAILED_PRECONDITION||c.message!==Gx)throw c;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&c2(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((a,n)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(a,n)},this.catchCallback=r=>{this.wrapFailure(t,r).next(a,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,a)=>{t(e)})}static reject(e){return new N((t,a)=>{a(e)})}static waitFor(e){return new N((t,a)=>{let n=0,r=0,s=!1;e.forEach(i=>{++n,i.next(()=>{++r,s&&r===n&&t()},o=>a(o))}),s=!0,r===n&&t()})}static or(e){let t=N.resolve(!1);for(const a of e)t=t.next(n=>n?N.resolve(n):a());return t}static forEach(e,t){const a=[];return e.forEach((n,r)=>{a.push(t.call(this,n,r))}),this.waitFor(a)}static mapArray(e,t){return new N((a,n)=>{const r=e.length,s=new Array(r);let i=0;for(let o=0;o<r;o++){const l=o;t(e[l]).next(f=>{s[l]=f,++i,i===r&&a(s)},f=>n(f))}})}static doWhile(e,t){return new N((a,n)=>{const r=()=>{e()===!0?t().next(()=>{r()},n):a()};r()})}}function g0(c){return c.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=a=>this.ot(a),this.ut=a=>t.writeSequenceNumber(a))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Pn.ct=-1;function Bc(c){return c==null}function B8(c){return c===0&&1/c==-1/0}function Yx(c){return typeof c=="number"&&Number.isInteger(c)&&!B8(c)&&c<=Number.MAX_SAFE_INTEGER&&c>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(c){let e=0;for(const t in c)Object.prototype.hasOwnProperty.call(c,t)&&e++;return e}function G4(c,e){for(const t in c)Object.prototype.hasOwnProperty.call(c,t)&&e(t,c[t])}function Pf(c){for(const e in c)if(Object.prototype.hasOwnProperty.call(c,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e,t){this.comparator=e,this.root=t||c1.EMPTY}insert(e,t){return new _2(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,c1.BLACK,null,null))}remove(e){return new _2(this.comparator,this.root.remove(e,this.comparator).copy(null,null,c1.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const a=this.comparator(e,t.key);if(a===0)return t.value;a<0?t=t.left:a>0&&(t=t.right)}return null}indexOf(e){let t=0,a=this.root;for(;!a.isEmpty();){const n=this.comparator(e,a.key);if(n===0)return t+a.left.size;n<0?a=a.left:(t+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,a)=>(e(t,a),!1))}toString(){const e=[];return this.inorderTraversal((t,a)=>(e.push(`${t}:${a}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Q0(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Q0(this.root,e,this.comparator,!1)}getReverseIterator(){return new Q0(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Q0(this.root,e,this.comparator,!0)}}class Q0{constructor(e,t,a,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?a(e.key,t):1,t&&n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class c1{constructor(e,t,a,n,r){this.key=e,this.value=t,this.color=a??c1.RED,this.left=n??c1.EMPTY,this.right=r??c1.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,a,n,r){return new c1(e??this.key,t??this.value,a??this.color,n??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,a){let n=this;const r=a(e,n.key);return n=r<0?n.copy(null,null,null,n.left.insert(e,t,a),null):r===0?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,a)),n.fixUp()}removeMin(){if(this.left.isEmpty())return c1.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let a,n=this;if(t(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),t(e,n.key)===0){if(n.right.isEmpty())return c1.EMPTY;a=n.right.min(),n=n.copy(a.key,a.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,c1.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,c1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw c2();const e=this.left.check();if(e!==this.right.check())throw c2();return e+(this.isRed()?0:1)}}c1.EMPTY=null,c1.RED=!0,c1.BLACK=!1;c1.EMPTY=new class{constructor(){this.size=0}get key(){throw c2()}get value(){throw c2()}get color(){throw c2()}get left(){throw c2()}get right(){throw c2()}copy(c,e,t,a,n){return this}insert(c,e,t){return new c1(c,e)}remove(c,e){return this}isEmpty(){return!0}inorderTraversal(c){return!1}reverseTraversal(c){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.comparator=e,this.data=new _2(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,a)=>(e(t),!1))}forEachInRange(e,t){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const n=a.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let a;for(a=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new pi(this.data.getIterator())}getIteratorFrom(e){return new pi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(a=>{t=t.add(a)}),t}isEqual(e){if(!(e instanceof d1)||this.size!==e.size)return!1;const t=this.data.getIterator(),a=e.data.getIterator();for(;t.hasNext();){const n=t.getNext().key,r=a.getNext().key;if(this.comparator(n,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new d1(this.comparator);return t.data=e,t}}class pi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.fields=e,e.sort(f1.comparator)}static empty(){return new x1([])}unionWith(e){let t=new d1(f1.comparator);for(const a of this.fields)t=t.add(a);for(const a of e)t=t.add(a);return new x1(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return b6(this.fields,e.fields,(t,a)=>t.isEqual(a))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(n){throw typeof DOMException<"u"&&n instanceof DOMException?new Rf("Invalid base64 string: "+n):n}}(e);return new p1(t)}static fromUint8Array(e){const t=function(a){let n="";for(let r=0;r<a.length;++r)n+=String.fromCharCode(a[r]);return n}(e);return new p1(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let a=0;a<e.length;a++)t[a]=e.charCodeAt(a);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return v2(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}p1.EMPTY_BYTE_STRING=new p1("");const Qx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function r4(c){if(A2(!!c),typeof c=="string"){let e=0;const t=Qx.exec(c);if(A2(!!t),t[1]){let n=t[1];n=(n+"000000000").substr(0,9),e=Number(n)}const a=new Date(c);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:B2(c.seconds),nanos:B2(c.nanos)}}function B2(c){return typeof c=="number"?c:typeof c=="string"?Number(c):0}function I4(c){return typeof c=="string"?p1.fromBase64String(c):p1.fromUint8Array(c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(c){var e,t;return((t=(((e=c==null?void 0:c.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Dn(c){const e=c.mapValue.fields.__previous_value__;return Rn(e)?Dn(e):e}function We(c){const e=r4(c.mapValue.fields.__local_write_time__.timestampValue);return new G2(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,t,a,n,r,s,i,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=a,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=i,this.longPollingOptions=o,this.useFetchStreams=l}}class Ge{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ge("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ge&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function P4(c){return"nullValue"in c?0:"booleanValue"in c?1:"integerValue"in c||"doubleValue"in c?2:"timestampValue"in c?3:"stringValue"in c?5:"bytesValue"in c?6:"referenceValue"in c?7:"geoPointValue"in c?8:"arrayValue"in c?9:"mapValue"in c?Rn(c)?4:Jx(c)?9007199254740991:10:c2()}function u3(c,e){if(c===e)return!0;const t=P4(c);if(t!==P4(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return c.booleanValue===e.booleanValue;case 4:return We(c).isEqual(We(e));case 3:return function(a,n){if(typeof a.timestampValue=="string"&&typeof n.timestampValue=="string"&&a.timestampValue.length===n.timestampValue.length)return a.timestampValue===n.timestampValue;const r=r4(a.timestampValue),s=r4(n.timestampValue);return r.seconds===s.seconds&&r.nanos===s.nanos}(c,e);case 5:return c.stringValue===e.stringValue;case 6:return function(a,n){return I4(a.bytesValue).isEqual(I4(n.bytesValue))}(c,e);case 7:return c.referenceValue===e.referenceValue;case 8:return function(a,n){return B2(a.geoPointValue.latitude)===B2(n.geoPointValue.latitude)&&B2(a.geoPointValue.longitude)===B2(n.geoPointValue.longitude)}(c,e);case 2:return function(a,n){if("integerValue"in a&&"integerValue"in n)return B2(a.integerValue)===B2(n.integerValue);if("doubleValue"in a&&"doubleValue"in n){const r=B2(a.doubleValue),s=B2(n.doubleValue);return r===s?B8(r)===B8(s):isNaN(r)&&isNaN(s)}return!1}(c,e);case 9:return b6(c.arrayValue.values||[],e.arrayValue.values||[],u3);case 10:return function(a,n){const r=a.mapValue.fields||{},s=n.mapValue.fields||{};if(mi(r)!==mi(s))return!1;for(const i in r)if(r.hasOwnProperty(i)&&(s[i]===void 0||!u3(r[i],s[i])))return!1;return!0}(c,e);default:return c2()}}function Ke(c,e){return(c.values||[]).find(t=>u3(t,e))!==void 0}function x6(c,e){if(c===e)return 0;const t=P4(c),a=P4(e);if(t!==a)return v2(t,a);switch(t){case 0:case 9007199254740991:return 0;case 1:return v2(c.booleanValue,e.booleanValue);case 2:return function(n,r){const s=B2(n.integerValue||n.doubleValue),i=B2(r.integerValue||r.doubleValue);return s<i?-1:s>i?1:s===i?0:isNaN(s)?isNaN(i)?0:-1:1}(c,e);case 3:return vi(c.timestampValue,e.timestampValue);case 4:return vi(We(c),We(e));case 5:return v2(c.stringValue,e.stringValue);case 6:return function(n,r){const s=I4(n),i=I4(r);return s.compareTo(i)}(c.bytesValue,e.bytesValue);case 7:return function(n,r){const s=n.split("/"),i=r.split("/");for(let o=0;o<s.length&&o<i.length;o++){const l=v2(s[o],i[o]);if(l!==0)return l}return v2(s.length,i.length)}(c.referenceValue,e.referenceValue);case 8:return function(n,r){const s=v2(B2(n.latitude),B2(r.latitude));return s!==0?s:v2(B2(n.longitude),B2(r.longitude))}(c.geoPointValue,e.geoPointValue);case 9:return function(n,r){const s=n.values||[],i=r.values||[];for(let o=0;o<s.length&&o<i.length;++o){const l=x6(s[o],i[o]);if(l)return l}return v2(s.length,i.length)}(c.arrayValue,e.arrayValue);case 10:return function(n,r){if(n===X0.mapValue&&r===X0.mapValue)return 0;if(n===X0.mapValue)return 1;if(r===X0.mapValue)return-1;const s=n.fields||{},i=Object.keys(s),o=r.fields||{},l=Object.keys(o);i.sort(),l.sort();for(let f=0;f<i.length&&f<l.length;++f){const u=v2(i[f],l[f]);if(u!==0)return u;const h=x6(s[i[f]],o[l[f]]);if(h!==0)return h}return v2(i.length,l.length)}(c.mapValue,e.mapValue);default:throw c2()}}function vi(c,e){if(typeof c=="string"&&typeof e=="string"&&c.length===e.length)return v2(c,e);const t=r4(c),a=r4(e),n=v2(t.seconds,a.seconds);return n!==0?n:v2(t.nanos,a.nanos)}function S6(c){return aa(c)}function aa(c){return"nullValue"in c?"null":"booleanValue"in c?""+c.booleanValue:"integerValue"in c?""+c.integerValue:"doubleValue"in c?""+c.doubleValue:"timestampValue"in c?function(a){const n=r4(a);return`time(${n.seconds},${n.nanos})`}(c.timestampValue):"stringValue"in c?c.stringValue:"bytesValue"in c?I4(c.bytesValue).toBase64():"referenceValue"in c?(t=c.referenceValue,Y.fromName(t).toString()):"geoPointValue"in c?`geo(${(e=c.geoPointValue).latitude},${e.longitude})`:"arrayValue"in c?function(a){let n="[",r=!0;for(const s of a.values||[])r?r=!1:n+=",",n+=aa(s);return n+"]"}(c.arrayValue):"mapValue"in c?function(a){const n=Object.keys(a.fields||{}).sort();let r="{",s=!0;for(const i of n)s?s=!1:r+=",",r+=`${i}:${aa(a.fields[i])}`;return r+"}"}(c.mapValue):c2();var e,t}function na(c){return!!c&&"integerValue"in c}function On(c){return!!c&&"arrayValue"in c}function gi(c){return!!c&&"nullValue"in c}function Hi(c){return!!c&&"doubleValue"in c&&isNaN(Number(c.doubleValue))}function p8(c){return!!c&&"mapValue"in c}function He(c){if(c.geoPointValue)return{geoPointValue:Object.assign({},c.geoPointValue)};if(c.timestampValue&&typeof c.timestampValue=="object")return{timestampValue:Object.assign({},c.timestampValue)};if(c.mapValue){const e={mapValue:{fields:{}}};return G4(c.mapValue.fields,(t,a)=>e.mapValue.fields[t]=He(a)),e}if(c.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(c.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=He(c.arrayValue.values[t]);return e}return Object.assign({},c)}function Jx(c){return(((c.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.value=e}static empty(){return new M1({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let a=0;a<e.length-1;++a)if(t=(t.mapValue.fields||{})[e.get(a)],!p8(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=He(t)}setAll(e){let t=f1.emptyPath(),a={},n=[];e.forEach((s,i)=>{if(!t.isImmediateParentOf(i)){const o=this.getFieldsMap(t);this.applyChanges(o,a,n),a={},n=[],t=i.popLast()}s?a[i.lastSegment()]=He(s):n.push(i.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,a,n)}delete(e){const t=this.field(e.popLast());p8(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return u3(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let a=0;a<e.length;++a){let n=t.mapValue.fields[e.get(a)];p8(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(a)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,a){G4(t,(n,r)=>e[n]=r);for(const n of a)delete e[n]}clone(){return new M1(He(this.value))}}function Df(c){const e=[];return G4(c.fields,(t,a)=>{const n=new f1([t]);if(p8(a)){const r=Df(a.mapValue).fields;if(r.length===0)e.push(n);else for(const s of r)e.push(n.child(s))}else e.push(n)}),new x1(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,t,a,n,r,s,i){this.key=e,this.documentType=t,this.version=a,this.readTime=n,this.createTime=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new o1(e,0,n2.min(),n2.min(),n2.min(),M1.empty(),0)}static newFoundDocument(e,t,a,n){return new o1(e,1,t,n2.min(),a,n,0)}static newNoDocument(e,t){return new o1(e,2,t,n2.min(),n2.min(),M1.empty(),0)}static newUnknownDocument(e,t){return new o1(e,3,t,n2.min(),n2.min(),M1.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(n2.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=M1.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=M1.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=n2.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof o1&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new o1(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U8{constructor(e,t){this.position=e,this.inclusive=t}}function zi(c,e,t){let a=0;for(let n=0;n<c.position.length;n++){const r=e[n],s=c.position[n];if(r.field.isKeyField()?a=Y.comparator(Y.fromName(s.referenceValue),t.key):a=x6(s,t.data.field(r.field)),r.dir==="desc"&&(a*=-1),a!==0)break}return a}function Vi(c,e){if(c===null)return e===null;if(e===null||c.inclusive!==e.inclusive||c.position.length!==e.position.length)return!1;for(let t=0;t<c.position.length;t++)if(!u3(c.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t="asc"){this.field=e,this.dir=t}}function Zx(c,e){return c.dir===e.dir&&c.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{}class W2 extends Of{constructor(e,t,a){super(),this.field=e,this.op=t,this.value=a}static create(e,t,a){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,a):new cS(e,t,a):t==="array-contains"?new nS(e,a):t==="in"?new rS(e,a):t==="not-in"?new sS(e,a):t==="array-contains-any"?new iS(e,a):new W2(e,t,a)}static createKeyFieldInFilter(e,t,a){return t==="in"?new tS(e,a):new aS(e,a)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(x6(t,this.value)):t!==null&&P4(this.value)===P4(t)&&this.matchesComparison(x6(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return c2()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class h3 extends Of{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new h3(e,t)}matches(e){return Ff(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Ff(c){return c.op==="and"}function Bf(c){return eS(c)&&Ff(c)}function eS(c){for(const e of c.filters)if(e instanceof h3)return!1;return!0}function ra(c){if(c instanceof W2)return c.field.canonicalString()+c.op.toString()+S6(c.value);if(Bf(c))return c.filters.map(e=>ra(e)).join(",");{const e=c.filters.map(t=>ra(t)).join(",");return`${c.op}(${e})`}}function Uf(c,e){return c instanceof W2?function(t,a){return a instanceof W2&&t.op===a.op&&t.field.isEqual(a.field)&&u3(t.value,a.value)}(c,e):c instanceof h3?function(t,a){return a instanceof h3&&t.op===a.op&&t.filters.length===a.filters.length?t.filters.reduce((n,r,s)=>n&&Uf(r,a.filters[s]),!0):!1}(c,e):void c2()}function $f(c){return c instanceof W2?function(e){return`${e.field.canonicalString()} ${e.op} ${S6(e.value)}`}(c):c instanceof h3?function(e){return e.op.toString()+" {"+e.getFilters().map($f).join(" ,")+"}"}(c):"Filter"}class cS extends W2{constructor(e,t,a){super(e,t,a),this.key=Y.fromName(a.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class tS extends W2{constructor(e,t){super(e,"in",t),this.keys=qf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class aS extends W2{constructor(e,t){super(e,"not-in",t),this.keys=qf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function qf(c,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(a=>Y.fromName(a.referenceValue))}class nS extends W2{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return On(t)&&Ke(t.arrayValue,this.value)}}class rS extends W2{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ke(this.value.arrayValue,t)}}class sS extends W2{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ke(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ke(this.value.arrayValue,t)}}class iS extends W2{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!On(t)||!t.arrayValue.values)&&t.arrayValue.values.some(a=>Ke(this.value.arrayValue,a))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,t=null,a=[],n=[],r=null,s=null,i=null){this.path=e,this.collectionGroup=t,this.orderBy=a,this.filters=n,this.limit=r,this.startAt=s,this.endAt=i,this.dt=null}}function Ci(c,e=null,t=[],a=[],n=null,r=null,s=null){return new oS(c,e,t,a,n,r,s)}function Fn(c){const e=r2(c);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(a=>ra(a)).join(","),t+="|ob:",t+=e.orderBy.map(a=>function(n){return n.field.canonicalString()+n.dir}(a)).join(","),Bc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(a=>S6(a)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(a=>S6(a)).join(",")),e.dt=t}return e.dt}function Bn(c,e){if(c.limit!==e.limit||c.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<c.orderBy.length;t++)if(!Zx(c.orderBy[t],e.orderBy[t]))return!1;if(c.filters.length!==e.filters.length)return!1;for(let t=0;t<c.filters.length;t++)if(!Uf(c.filters[t],e.filters[t]))return!1;return c.collectionGroup===e.collectionGroup&&!!c.path.isEqual(e.path)&&!!Vi(c.startAt,e.startAt)&&Vi(c.endAt,e.endAt)}function sa(c){return Y.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t=null,a=[],n=[],r=null,s="F",i=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=a,this.filters=n,this.limit=r,this.limitType=s,this.startAt=i,this.endAt=o,this.wt=null,this._t=null,this.startAt,this.endAt}}function lS(c,e,t,a,n,r,s,i){return new Uc(c,e,t,a,n,r,s,i)}function jf(c){return new Uc(c)}function Mi(c){return c.filters.length===0&&c.limit===null&&c.startAt==null&&c.endAt==null&&(c.explicitOrderBy.length===0||c.explicitOrderBy.length===1&&c.explicitOrderBy[0].field.isKeyField())}function fS(c){return c.explicitOrderBy.length>0?c.explicitOrderBy[0].field:null}function uS(c){for(const e of c.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function hS(c){return c.collectionGroup!==null}function p6(c){const e=r2(c);if(e.wt===null){e.wt=[];const t=uS(e),a=fS(e);if(t!==null&&a===null)t.isKeyField()||e.wt.push(new ze(t)),e.wt.push(new ze(f1.keyField(),"asc"));else{let n=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(n=!0);if(!n){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ze(f1.keyField(),r))}}}return e.wt}function L3(c){const e=r2(c);if(!e._t)if(e.limitType==="F")e._t=Ci(e.path,e.collectionGroup,p6(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of p6(e)){const s=r.dir==="desc"?"asc":"desc";t.push(new ze(r.field,s))}const a=e.endAt?new U8(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new U8(e.startAt.position,e.startAt.inclusive):null;e._t=Ci(e.path,e.collectionGroup,t,e.filters,e.limit,a,n)}return e._t}function ia(c,e,t){return new Uc(c.path,c.collectionGroup,c.explicitOrderBy.slice(),c.filters.slice(),e,t,c.startAt,c.endAt)}function $c(c,e){return Bn(L3(c),L3(e))&&c.limitType===e.limitType}function Wf(c){return`${Fn(L3(c))}|lt:${c.limitType}`}function oa(c){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(a=>$f(a)).join(", ")}]`),Bc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(a=>function(n){return`${n.field.canonicalString()} (${n.dir})`}(a)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(a=>S6(a)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(a=>S6(a)).join(",")),`Target(${t})`}(L3(c))}; limitType=${c.limitType})`}function qc(c,e){return e.isFoundDocument()&&function(t,a){const n=a.key.path;return t.collectionGroup!==null?a.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Y.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(c,e)&&function(t,a){for(const n of p6(t))if(!n.field.isKeyField()&&a.data.field(n.field)===null)return!1;return!0}(c,e)&&function(t,a){for(const n of t.filters)if(!n.matches(a))return!1;return!0}(c,e)&&function(t,a){return!(t.startAt&&!function(n,r,s){const i=zi(n,r,s);return n.inclusive?i<=0:i<0}(t.startAt,p6(t),a)||t.endAt&&!function(n,r,s){const i=zi(n,r,s);return n.inclusive?i>=0:i>0}(t.endAt,p6(t),a))}(c,e)}function dS(c){return c.collectionGroup||(c.path.length%2==1?c.path.lastSegment():c.path.get(c.path.length-2))}function Gf(c){return(e,t)=>{let a=!1;for(const n of p6(c)){const r=mS(n,e,t);if(r!==0)return r;a=a||n.field.isKeyField()}return 0}}function mS(c,e,t){const a=c.field.isKeyField()?Y.comparator(e.key,t.key):function(n,r,s){const i=r.data.field(n),o=s.data.field(n);return i!==null&&o!==null?x6(i,o):c2()}(c.field,e,t);switch(c.dir){case"asc":return a;case"desc":return-1*a;default:return c2()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B6{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),a=this.inner[t];if(a!==void 0){for(const[n,r]of a)if(this.equalsFn(n,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const a=this.mapKeyFn(e),n=this.inner[a];if(n===void 0)return this.inner[a]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),a=this.inner[t];if(a===void 0)return!1;for(let n=0;n<a.length;n++)if(this.equalsFn(a[n][0],e))return a.length===1?delete this.inner[t]:a.splice(n,1),this.innerSize--,!0;return!1}forEach(e){G4(this.inner,(t,a)=>{for(const[n,r]of a)e(n,r)})}isEmpty(){return Pf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=new _2(Y.comparator);function w3(){return pS}const Kf=new _2(Y.comparator);function re(...c){let e=Kf;for(const t of c)e=e.insert(t.key,t);return e}function Yf(c){let e=Kf;return c.forEach((t,a)=>e=e.insert(t,a.overlayedDocument)),e}function w4(){return Ve()}function Qf(){return Ve()}function Ve(){return new B6(c=>c.toString(),(c,e)=>c.isEqual(e))}const vS=new _2(Y.comparator),gS=new d1(Y.comparator);function o2(...c){let e=gS;for(const t of c)e=e.add(t);return e}const HS=new d1(v2);function zS(){return HS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(c,e){if(c.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:B8(e)?"-0":e}}function Jf(c){return{integerValue:""+c}}function VS(c,e){return Yx(e)?Jf(e):Xf(c,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this._=void 0}}function CS(c,e,t){return c instanceof $8?function(a,n){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return n&&Rn(n)&&(n=Dn(n)),n&&(r.fields.__previous_value__=n),{mapValue:r}}(t,e):c instanceof Ye?eu(c,e):c instanceof Qe?cu(c,e):function(a,n){const r=Zf(a,n),s=yi(r)+yi(a.gt);return na(r)&&na(a.gt)?Jf(s):Xf(a.serializer,s)}(c,e)}function MS(c,e,t){return c instanceof Ye?eu(c,e):c instanceof Qe?cu(c,e):t}function Zf(c,e){return c instanceof q8?na(t=e)||function(a){return!!a&&"doubleValue"in a}(t)?e:{integerValue:0}:null;var t}class $8 extends jc{}class Ye extends jc{constructor(e){super(),this.elements=e}}function eu(c,e){const t=tu(e);for(const a of c.elements)t.some(n=>u3(n,a))||t.push(a);return{arrayValue:{values:t}}}class Qe extends jc{constructor(e){super(),this.elements=e}}function cu(c,e){let t=tu(e);for(const a of c.elements)t=t.filter(n=>!u3(n,a));return{arrayValue:{values:t}}}class q8 extends jc{constructor(e,t){super(),this.serializer=e,this.gt=t}}function yi(c){return B2(c.integerValue||c.doubleValue)}function tu(c){return On(c)&&c.arrayValue.values?c.arrayValue.values.slice():[]}function yS(c,e){return c.field.isEqual(e.field)&&function(t,a){return t instanceof Ye&&a instanceof Ye||t instanceof Qe&&a instanceof Qe?b6(t.elements,a.elements,u3):t instanceof q8&&a instanceof q8?u3(t.gt,a.gt):t instanceof $8&&a instanceof $8}(c.transform,e.transform)}class LS{constructor(e,t){this.version=e,this.transformResults=t}}class j1{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new j1}static exists(e){return new j1(void 0,e)}static updateTime(e){return new j1(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function v8(c,e){return c.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(c.updateTime):c.exists===void 0||c.exists===e.isFoundDocument()}class Wc{}function au(c,e){if(!c.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return c.isNoDocument()?new Un(c.key,j1.none()):new H0(c.key,c.data,j1.none());{const t=c.data,a=M1.empty();let n=new d1(f1.comparator);for(let r of e.fields)if(!n.has(r)){let s=t.field(r);s===null&&r.length>1&&(r=r.popLast(),s=t.field(r)),s===null?a.delete(r):a.set(r,s),n=n.add(r)}return new d4(c.key,a,new x1(n.toArray()),j1.none())}}function wS(c,e,t){c instanceof H0?function(a,n,r){const s=a.value.clone(),i=wi(a.fieldTransforms,n,r.transformResults);s.setAll(i),n.convertToFoundDocument(r.version,s).setHasCommittedMutations()}(c,e,t):c instanceof d4?function(a,n,r){if(!v8(a.precondition,n))return void n.convertToUnknownDocument(r.version);const s=wi(a.fieldTransforms,n,r.transformResults),i=n.data;i.setAll(nu(a)),i.setAll(s),n.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(c,e,t):function(a,n,r){n.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function Ce(c,e,t,a){return c instanceof H0?function(n,r,s,i){if(!v8(n.precondition,r))return s;const o=n.value.clone(),l=bi(n.fieldTransforms,i,r);return o.setAll(l),r.convertToFoundDocument(r.version,o).setHasLocalMutations(),null}(c,e,t,a):c instanceof d4?function(n,r,s,i){if(!v8(n.precondition,r))return s;const o=bi(n.fieldTransforms,i,r),l=r.data;return l.setAll(nu(n)),l.setAll(o),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),s===null?null:s.unionWith(n.fieldMask.fields).unionWith(n.fieldTransforms.map(f=>f.field))}(c,e,t,a):function(n,r,s){return v8(n.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):s}(c,e,t)}function bS(c,e){let t=null;for(const a of c.fieldTransforms){const n=e.data.field(a.field),r=Zf(a.transform,n||null);r!=null&&(t===null&&(t=M1.empty()),t.set(a.field,r))}return t||null}function Li(c,e){return c.type===e.type&&!!c.key.isEqual(e.key)&&!!c.precondition.isEqual(e.precondition)&&!!function(t,a){return t===void 0&&a===void 0||!(!t||!a)&&b6(t,a,(n,r)=>yS(n,r))}(c.fieldTransforms,e.fieldTransforms)&&(c.type===0?c.value.isEqual(e.value):c.type!==1||c.data.isEqual(e.data)&&c.fieldMask.isEqual(e.fieldMask))}class H0 extends Wc{constructor(e,t,a,n=[]){super(),this.key=e,this.value=t,this.precondition=a,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class d4 extends Wc{constructor(e,t,a,n,r=[]){super(),this.key=e,this.data=t,this.fieldMask=a,this.precondition=n,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function nu(c){const e=new Map;return c.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const a=c.data.field(t);e.set(t,a)}}),e}function wi(c,e,t){const a=new Map;A2(c.length===t.length);for(let n=0;n<t.length;n++){const r=c[n],s=r.transform,i=e.data.field(r.field);a.set(r.field,MS(s,i,t[n]))}return a}function bi(c,e,t){const a=new Map;for(const n of c){const r=n.transform,s=t.data.field(n.field);a.set(n.field,CS(r,s,e))}return a}class Un extends Wc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xS extends Wc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,t,a,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=a,this.mutations=n}applyToRemoteDocument(e,t){const a=t.mutationResults;for(let n=0;n<this.mutations.length;n++){const r=this.mutations[n];r.key.isEqual(e.key)&&wS(r,e,a[n])}}applyToLocalView(e,t){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(t=Ce(a,e,t,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(t=Ce(a,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const a=Qf();return this.mutations.forEach(n=>{const r=e.get(n.key),s=r.overlayedDocument;let i=this.applyToLocalView(s,r.mutatedFields);i=t.has(n.key)?null:i;const o=au(s,i);o!==null&&a.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(n2.min())}),a}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),o2())}isEqual(e){return this.batchId===e.batchId&&b6(this.mutations,e.mutations,(t,a)=>Li(t,a))&&b6(this.baseMutations,e.baseMutations,(t,a)=>Li(t,a))}}class $n{constructor(e,t,a,n){this.batch=e,this.commitVersion=t,this.mutationResults=a,this.docVersions=n}static from(e,t,a){A2(e.mutations.length===a.length);let n=vS;const r=e.mutations;for(let s=0;s<r.length;s++)n=n.insert(r[s].key,a[s].version);return new $n(e,t,a,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F2,f2;function kS(c){switch(c){default:return c2();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function ru(c){if(c===void 0)return y3("GRPC error has no .code"),x.UNKNOWN;switch(c){case F2.OK:return x.OK;case F2.CANCELLED:return x.CANCELLED;case F2.UNKNOWN:return x.UNKNOWN;case F2.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case F2.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case F2.INTERNAL:return x.INTERNAL;case F2.UNAVAILABLE:return x.UNAVAILABLE;case F2.UNAUTHENTICATED:return x.UNAUTHENTICATED;case F2.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case F2.NOT_FOUND:return x.NOT_FOUND;case F2.ALREADY_EXISTS:return x.ALREADY_EXISTS;case F2.PERMISSION_DENIED:return x.PERMISSION_DENIED;case F2.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case F2.ABORTED:return x.ABORTED;case F2.OUT_OF_RANGE:return x.OUT_OF_RANGE;case F2.UNIMPLEMENTED:return x.UNIMPLEMENTED;case F2.DATA_LOSS:return x.DATA_LOSS;default:return c2()}}(f2=F2||(F2={}))[f2.OK=0]="OK",f2[f2.CANCELLED=1]="CANCELLED",f2[f2.UNKNOWN=2]="UNKNOWN",f2[f2.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",f2[f2.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",f2[f2.NOT_FOUND=5]="NOT_FOUND",f2[f2.ALREADY_EXISTS=6]="ALREADY_EXISTS",f2[f2.PERMISSION_DENIED=7]="PERMISSION_DENIED",f2[f2.UNAUTHENTICATED=16]="UNAUTHENTICATED",f2[f2.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",f2[f2.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",f2[f2.ABORTED=10]="ABORTED",f2[f2.OUT_OF_RANGE=11]="OUT_OF_RANGE",f2[f2.UNIMPLEMENTED=12]="UNIMPLEMENTED",f2[f2.INTERNAL=13]="INTERNAL",f2[f2.UNAVAILABLE=14]="UNAVAILABLE",f2[f2.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return J0}static getOrCreateInstance(){return J0===null&&(J0=new qn),J0}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let J0=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=new m6([4294967295,4294967295],0);function xi(c){const e=TS().encode(c),t=new Ex;return t.update(e),new Uint8Array(t.digest())}function Si(c){const e=new DataView(c.buffer),t=e.getUint32(0,!0),a=e.getUint32(4,!0),n=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new m6([t,a],0),new m6([n,r],0)]}class jn{constructor(e,t,a){if(this.bitmap=e,this.padding=t,this.hashCount=a,t<0||t>=8)throw new se(`Invalid padding: ${t}`);if(a<0)throw new se(`Invalid hash count: ${a}`);if(e.length>0&&this.hashCount===0)throw new se(`Invalid hash count: ${a}`);if(e.length===0&&t!==0)throw new se(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=m6.fromNumber(this.It)}Et(e,t,a){let n=e.add(t.multiply(m6.fromNumber(a)));return n.compare(_S)===1&&(n=new m6([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=xi(e),[a,n]=Si(t);for(let r=0;r<this.hashCount;r++){const s=this.Et(a,n,r);if(!this.At(s))return!1}return!0}static create(e,t,a){const n=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),s=new jn(r,n,t);return a.forEach(i=>s.insert(i)),s}insert(e){if(this.It===0)return;const t=xi(e),[a,n]=Si(t);for(let r=0;r<this.hashCount;r++){const s=this.Et(a,n,r);this.Rt(s)}}Rt(e){const t=Math.floor(e/8),a=e%8;this.bitmap[t]|=1<<a}}class se extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,a,n,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=a,this.documentUpdates=n,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,a){const n=new Map;return n.set(e,z0.createSynthesizedTargetChangeForCurrentChange(e,t,a)),new Gc(n2.min(),n,new _2(v2),w3(),o2())}}class z0{constructor(e,t,a,n,r){this.resumeToken=e,this.current=t,this.addedDocuments=a,this.modifiedDocuments=n,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,a){return new z0(a,t,o2(),o2(),o2())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g8{constructor(e,t,a,n){this.Pt=e,this.removedTargetIds=t,this.key=a,this.bt=n}}class su{constructor(e,t){this.targetId=e,this.Vt=t}}class iu{constructor(e,t,a=p1.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=a,this.cause=n}}class Ni{constructor(){this.St=0,this.Dt=ki(),this.Ct=p1.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=o2(),t=o2(),a=o2();return this.Dt.forEach((n,r)=>{switch(r){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:a=a.add(n);break;default:c2()}}),new z0(this.Ct,this.xt,e,t,a)}Ft(){this.Nt=!1,this.Dt=ki()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class ES{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=w3(),this.zt=Ai(),this.Wt=new _2(v2)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const a=this.Zt(t);switch(e.state){case 0:this.te(t)&&a.$t(e.resumeToken);break;case 1:a.Ut(),a.kt||a.Ft(),a.$t(e.resumeToken);break;case 2:a.Ut(),a.kt||this.removeTarget(t);break;case 3:this.te(t)&&(a.Kt(),a.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),a.$t(e.resumeToken));break;default:c2()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((a,n)=>{this.te(n)&&t(n)})}ne(e){var t;const a=e.targetId,n=e.Vt.count,r=this.se(a);if(r){const s=r.target;if(sa(s))if(n===0){const i=new Y(s.path);this.Yt(a,i,o1.newNoDocument(i,n2.min()))}else A2(n===1);else{const i=this.ie(a);if(i!==n){const o=this.re(e,i);if(o!==0){this.ee(a);const l=o===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(a,l)}(t=qn.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(l,f,u){var h,d,g,z,M,H;const V={localCacheCount:f,existenceFilterCount:u.count},A=u.unchangedNames;return A&&(V.bloomFilter={applied:l===0,hashCount:(h=A==null?void 0:A.hashCount)!==null&&h!==void 0?h:0,bitmapLength:(z=(g=(d=A==null?void 0:A.bits)===null||d===void 0?void 0:d.bitmap)===null||g===void 0?void 0:g.length)!==null&&z!==void 0?z:0,padding:(H=(M=A==null?void 0:A.bits)===null||M===void 0?void 0:M.padding)!==null&&H!==void 0?H:0}),V}(o,i,e.Vt))}}}}re(e,t){const{unchangedNames:a,count:n}=e.Vt;if(!a||!a.bits)return 1;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=a;let o,l;try{o=I4(r).toUint8Array()}catch(f){if(f instanceof Rf)return w6("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw f}try{l=new jn(o,s,i)}catch(f){return w6(f instanceof se?"BloomFilter error: ":"Applying bloom filter failed: ",f),1}return l.It===0?1:n!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const a=this.Gt.getRemoteKeysForTarget(e);let n=0;return a.forEach(r=>{const s=this.Gt.ue(),i=`projects/${s.projectId}/databases/${s.database}/documents/${r.path.canonicalString()}`;t.vt(i)||(this.Yt(e,r,null),n++)}),n}ce(e){const t=new Map;this.Qt.forEach((r,s)=>{const i=this.se(s);if(i){if(r.current&&sa(i.target)){const o=new Y(i.target.path);this.jt.get(o)!==null||this.ae(s,o)||this.Yt(s,o,o1.newNoDocument(o,e))}r.Mt&&(t.set(s,r.Ot()),r.Ft())}});let a=o2();this.zt.forEach((r,s)=>{let i=!0;s.forEachWhile(o=>{const l=this.se(o);return!l||l.purpose==="TargetPurposeLimboResolution"||(i=!1,!1)}),i&&(a=a.add(r))}),this.jt.forEach((r,s)=>s.setReadTime(e));const n=new Gc(e,t,this.Wt,this.jt,a);return this.jt=w3(),this.zt=Ai(),this.Wt=new _2(v2),n}Jt(e,t){if(!this.te(e))return;const a=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,a),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,a){if(!this.te(e))return;const n=this.Zt(e);this.ae(e,t)?n.Bt(t,1):n.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),a&&(this.jt=this.jt.insert(t,a))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Ni,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new d1(v2),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Ni),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Ai(){return new _2(Y.comparator)}function ki(){return new _2(Y.comparator)}const IS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),PS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),RS=(()=>({and:"AND",or:"OR"}))();class DS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function la(c,e){return c.useProto3Json||Bc(e)?e:{value:e}}function j8(c,e){return c.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ou(c,e){return c.useProto3Json?e.toBase64():e.toUint8Array()}function OS(c,e){return j8(c,e.toTimestamp())}function s3(c){return A2(!!c),n2.fromTimestamp(function(e){const t=r4(e);return new G2(t.seconds,t.nanos)}(c))}function Wn(c,e){return function(t){return new T2(["projects",t.projectId,"databases",t.database])}(c).child("documents").child(e).canonicalString()}function lu(c){const e=T2.fromString(c);return A2(du(e)),e}function fa(c,e){return Wn(c.databaseId,e.path)}function Zt(c,e){const t=lu(e);if(t.get(1)!==c.databaseId.projectId)throw new W(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+c.databaseId.projectId);if(t.get(3)!==c.databaseId.database)throw new W(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+c.databaseId.database);return new Y(fu(t))}function ua(c,e){return Wn(c.databaseId,e)}function FS(c){const e=lu(c);return e.length===4?T2.emptyPath():fu(e)}function ha(c){return new T2(["projects",c.databaseId.projectId,"databases",c.databaseId.database]).canonicalString()}function fu(c){return A2(c.length>4&&c.get(4)==="documents"),c.popFirst(5)}function Ti(c,e,t){return{name:fa(c,e),fields:t.value.mapValue.fields}}function BS(c,e){let t;if("targetChange"in e){e.targetChange;const a=function(o){return o==="NO_CHANGE"?0:o==="ADD"?1:o==="REMOVE"?2:o==="CURRENT"?3:o==="RESET"?4:c2()}(e.targetChange.targetChangeType||"NO_CHANGE"),n=e.targetChange.targetIds||[],r=function(o,l){return o.useProto3Json?(A2(l===void 0||typeof l=="string"),p1.fromBase64String(l||"")):(A2(l===void 0||l instanceof Uint8Array),p1.fromUint8Array(l||new Uint8Array))}(c,e.targetChange.resumeToken),s=e.targetChange.cause,i=s&&function(o){const l=o.code===void 0?x.UNKNOWN:ru(o.code);return new W(l,o.message||"")}(s);t=new iu(a,n,r,i||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const n=Zt(c,a.document.name),r=s3(a.document.updateTime),s=a.document.createTime?s3(a.document.createTime):n2.min(),i=new M1({mapValue:{fields:a.document.fields}}),o=o1.newFoundDocument(n,r,s,i),l=a.targetIds||[],f=a.removedTargetIds||[];t=new g8(l,f,o.key,o)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const n=Zt(c,a.document),r=a.readTime?s3(a.readTime):n2.min(),s=o1.newNoDocument(n,r),i=a.removedTargetIds||[];t=new g8([],i,s.key,s)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const n=Zt(c,a.document),r=a.removedTargetIds||[];t=new g8([],r,n,null)}else{if(!("filter"in e))return c2();{e.filter;const a=e.filter;a.targetId;const{count:n=0,unchangedNames:r}=a,s=new AS(n,r),i=a.targetId;t=new su(i,s)}}return t}function US(c,e){let t;if(e instanceof H0)t={update:Ti(c,e.key,e.value)};else if(e instanceof Un)t={delete:fa(c,e.key)};else if(e instanceof d4)t={update:Ti(c,e.key,e.data),updateMask:XS(e.fieldMask)};else{if(!(e instanceof xS))return c2();t={verify:fa(c,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(a=>function(n,r){const s=r.transform;if(s instanceof $8)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(s instanceof Ye)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:s.elements}};if(s instanceof Qe)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:s.elements}};if(s instanceof q8)return{fieldPath:r.field.canonicalString(),increment:s.gt};throw c2()}(0,a))),e.precondition.isNone||(t.currentDocument=function(a,n){return n.updateTime!==void 0?{updateTime:OS(a,n.updateTime)}:n.exists!==void 0?{exists:n.exists}:c2()}(c,e.precondition)),t}function $S(c,e){return c&&c.length>0?(A2(e!==void 0),c.map(t=>function(a,n){let r=a.updateTime?s3(a.updateTime):s3(n);return r.isEqual(n2.min())&&(r=s3(n)),new LS(r,a.transformResults||[])}(t,e))):[]}function qS(c,e){return{documents:[ua(c,e.path)]}}function jS(c,e){const t={structuredQuery:{}},a=e.path;e.collectionGroup!==null?(t.parent=ua(c,a),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=ua(c,a.popLast()),t.structuredQuery.from=[{collectionId:a.lastSegment()}]);const n=function(o){if(o.length!==0)return hu(h3.create(o,"and"))}(e.filters);n&&(t.structuredQuery.where=n);const r=function(o){if(o.length!==0)return o.map(l=>function(f){return{field:a6(f.field),direction:KS(f.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const s=la(c,e.limit);var i;return s!==null&&(t.structuredQuery.limit=s),e.startAt&&(t.structuredQuery.startAt={before:(i=e.startAt).inclusive,values:i.position}),e.endAt&&(t.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(e.endAt)),t}function WS(c){let e=FS(c.parent);const t=c.structuredQuery,a=t.from?t.from.length:0;let n=null;if(a>0){A2(a===1);const f=t.from[0];f.allDescendants?n=f.collectionId:e=e.child(f.collectionId)}let r=[];t.where&&(r=function(f){const u=uu(f);return u instanceof h3&&Bf(u)?u.getFilters():[u]}(t.where));let s=[];t.orderBy&&(s=t.orderBy.map(f=>function(u){return new ze(n6(u.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(u.direction))}(f)));let i=null;t.limit&&(i=function(f){let u;return u=typeof f=="object"?f.value:f,Bc(u)?null:u}(t.limit));let o=null;t.startAt&&(o=function(f){const u=!!f.before,h=f.values||[];return new U8(h,u)}(t.startAt));let l=null;return t.endAt&&(l=function(f){const u=!f.before,h=f.values||[];return new U8(h,u)}(t.endAt)),lS(e,n,s,r,i,"F",o,l)}function GS(c,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return c2()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function uu(c){return c.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=n6(e.unaryFilter.field);return W2.create(t,"==",{doubleValue:NaN});case"IS_NULL":const a=n6(e.unaryFilter.field);return W2.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=n6(e.unaryFilter.field);return W2.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=n6(e.unaryFilter.field);return W2.create(r,"!=",{nullValue:"NULL_VALUE"});default:return c2()}}(c):c.fieldFilter!==void 0?function(e){return W2.create(n6(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return c2()}}(e.fieldFilter.op),e.fieldFilter.value)}(c):c.compositeFilter!==void 0?function(e){return h3.create(e.compositeFilter.filters.map(t=>uu(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return c2()}}(e.compositeFilter.op))}(c):c2()}function KS(c){return IS[c]}function YS(c){return PS[c]}function QS(c){return RS[c]}function a6(c){return{fieldPath:c.canonicalString()}}function n6(c){return f1.fromServerFormat(c.fieldPath)}function hu(c){return c instanceof W2?function(e){if(e.op==="=="){if(Hi(e.value))return{unaryFilter:{field:a6(e.field),op:"IS_NAN"}};if(gi(e.value))return{unaryFilter:{field:a6(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Hi(e.value))return{unaryFilter:{field:a6(e.field),op:"IS_NOT_NAN"}};if(gi(e.value))return{unaryFilter:{field:a6(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:a6(e.field),op:YS(e.op),value:e.value}}}(c):c instanceof h3?function(e){const t=e.getFilters().map(a=>hu(a));return t.length===1?t[0]:{compositeFilter:{op:QS(e.op),filters:t}}}(c):c2()}function XS(c){const e=[];return c.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function du(c){return c.length>=4&&c.get(0)==="projects"&&c.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W3{constructor(e,t,a,n,r=n2.min(),s=n2.min(),i=p1.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=a,this.sequenceNumber=n,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=i,this.expectedCount=o}withSequenceNumber(e){return new W3(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new W3(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new W3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new W3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.fe=e}}function ZS(c){const e=WS({parent:c.parent,structuredQuery:c.structuredQuery});return c.limitType==="LAST"?ia(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(){this.rn=new cN}addToCollectionParentIndex(e,t){return this.rn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(n4.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(n4.min())}updateCollectionGroup(e,t,a){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class cN{constructor(){this.index={}}add(e){const t=e.lastSegment(),a=e.popLast(),n=this.index[t]||new d1(T2.comparator),r=!n.has(a);return this.index[t]=n.add(a),r}has(e){const t=e.lastSegment(),a=e.popLast(),n=this.index[t];return n&&n.has(a)}getEntries(e){return(this.index[e]||new d1(T2.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N6{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new N6(0)}static Mn(){return new N6(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.changes=new B6(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,o1.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const a=this.changes.get(t);return a!==void 0?N.resolve(a):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,t,a,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=a,this.indexManager=n}getDocument(e,t){let a=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(a=n,this.remoteDocumentCache.getEntry(e,t))).next(n=>(a!==null&&Ce(a.mutation,n,x1.empty(),G2.now()),n))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(a=>this.getLocalViewOfDocuments(e,a,o2()).next(()=>a))}getLocalViewOfDocuments(e,t,a=o2()){const n=w4();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,a).next(r=>{let s=re();return r.forEach((i,o)=>{s=s.insert(i,o.overlayedDocument)}),s}))}getOverlayedDocuments(e,t){const a=w4();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,o2()))}populateOverlays(e,t,a){const n=[];return a.forEach(r=>{t.has(r)||n.push(r)}),this.documentOverlayCache.getOverlays(e,n).next(r=>{r.forEach((s,i)=>{t.set(s,i)})})}computeViews(e,t,a,n){let r=w3();const s=Ve(),i=Ve();return t.forEach((o,l)=>{const f=a.get(l.key);n.has(l.key)&&(f===void 0||f.mutation instanceof d4)?r=r.insert(l.key,l):f!==void 0?(s.set(l.key,f.mutation.getFieldMask()),Ce(f.mutation,l,f.mutation.getFieldMask(),G2.now())):s.set(l.key,x1.empty())}),this.recalculateAndSaveOverlays(e,r).next(o=>(o.forEach((l,f)=>s.set(l,f)),t.forEach((l,f)=>{var u;return i.set(l,new aN(f,(u=s.get(l))!==null&&u!==void 0?u:null))}),i))}recalculateAndSaveOverlays(e,t){const a=Ve();let n=new _2((s,i)=>s-i),r=o2();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(s=>{for(const i of s)i.keys().forEach(o=>{const l=t.get(o);if(l===null)return;let f=a.get(o)||x1.empty();f=i.applyToLocalView(l,f),a.set(o,f);const u=(n.get(i.batchId)||o2()).add(o);n=n.insert(i.batchId,u)})}).next(()=>{const s=[],i=n.getReverseIterator();for(;i.hasNext();){const o=i.getNext(),l=o.key,f=o.value,u=Qf();f.forEach(h=>{if(!r.has(h)){const d=au(t.get(h),a.get(h));d!==null&&u.set(h,d),r=r.add(h)}}),s.push(this.documentOverlayCache.saveOverlays(e,l,u))}return N.waitFor(s)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(a=>this.recalculateAndSaveOverlays(e,a))}getDocumentsMatchingQuery(e,t,a){return function(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,a):this.getDocumentsMatchingCollectionQuery(e,t,a)}getNextDocuments(e,t,a,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,a,n).next(r=>{const s=n-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,a.largestBatchId,n-r.size):N.resolve(w4());let i=-1,o=r;return s.next(l=>N.forEach(l,(f,u)=>(i<u.largestBatchId&&(i=u.largestBatchId),r.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(h=>{o=o.insert(f,h)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,o,l,o2())).next(f=>({batchId:i,changes:Yf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(a=>{let n=re();return a.isFoundDocument()&&(n=n.insert(a.key,a)),n})}getDocumentsMatchingCollectionGroupQuery(e,t,a){const n=t.collectionGroup;let r=re();return this.indexManager.getCollectionParents(e,n).next(s=>N.forEach(s,i=>{const o=function(l,f){return new Uc(f,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,i.child(n));return this.getDocumentsMatchingCollectionQuery(e,o,a).next(l=>{l.forEach((f,u)=>{r=r.insert(f,u)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,a){let n;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,a.largestBatchId).next(r=>(n=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,a,n))).next(r=>{n.forEach((i,o)=>{const l=o.getKey();r.get(l)===null&&(r=r.insert(l,o1.newInvalidDocument(l)))});let s=re();return r.forEach((i,o)=>{const l=n.get(i);l!==void 0&&Ce(l.mutation,o,x1.empty(),G2.now()),qc(t,o)&&(s=s.insert(i,o))}),s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return N.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var a;return this.cs.set(t.id,{id:(a=t).id,version:a.version,createTime:s3(a.createTime)}),N.resolve()}getNamedQuery(e,t){return N.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(a){return{name:a.name,query:ZS(a.bundledQuery),readTime:s3(a.readTime)}}(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(){this.overlays=new _2(Y.comparator),this.ls=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const a=w4();return N.forEach(t,n=>this.getOverlay(e,n).next(r=>{r!==null&&a.set(n,r)})).next(()=>a)}saveOverlays(e,t,a){return a.forEach((n,r)=>{this.we(e,t,r)}),N.resolve()}removeOverlaysForBatchId(e,t,a){const n=this.ls.get(a);return n!==void 0&&(n.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(a)),N.resolve()}getOverlaysForCollection(e,t,a){const n=w4(),r=t.length+1,s=new Y(t.child("")),i=this.overlays.getIteratorFrom(s);for(;i.hasNext();){const o=i.getNext().value,l=o.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&o.largestBatchId>a&&n.set(o.getKey(),o)}return N.resolve(n)}getOverlaysForCollectionGroup(e,t,a,n){let r=new _2((l,f)=>l-f);const s=this.overlays.getIterator();for(;s.hasNext();){const l=s.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>a){let f=r.get(l.largestBatchId);f===null&&(f=w4(),r=r.insert(l.largestBatchId,f)),f.set(l.getKey(),l)}}const i=w4(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((l,f)=>i.set(l,f)),!(i.size()>=n)););return N.resolve(i)}we(e,t,a){const n=this.overlays.get(a.key);if(n!==null){const s=this.ls.get(n.largestBatchId).delete(a.key);this.ls.set(n.largestBatchId,s)}this.overlays=this.overlays.insert(a.key,new NS(t,a));let r=this.ls.get(t);r===void 0&&(r=o2(),this.ls.set(t,r)),this.ls.set(t,r.add(a.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.fs=new d1(Y2.ds),this.ws=new d1(Y2._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const a=new Y2(e,t);this.fs=this.fs.add(a),this.ws=this.ws.add(a)}gs(e,t){e.forEach(a=>this.addReference(a,t))}removeReference(e,t){this.ys(new Y2(e,t))}ps(e,t){e.forEach(a=>this.removeReference(a,t))}Is(e){const t=new Y(new T2([])),a=new Y2(t,e),n=new Y2(t,e+1),r=[];return this.ws.forEachInRange([a,n],s=>{this.ys(s),r.push(s.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new Y(new T2([])),a=new Y2(t,e),n=new Y2(t,e+1);let r=o2();return this.ws.forEachInRange([a,n],s=>{r=r.add(s.key)}),r}containsKey(e){const t=new Y2(e,0),a=this.fs.firstAfterOrEqual(t);return a!==null&&e.isEqual(a.key)}}class Y2{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return Y.comparator(e.key,t.key)||v2(e.As,t.As)}static _s(e,t){return v2(e.As,t.As)||Y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new d1(Y2.ds)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,a,n){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new SS(r,t,a,n);this.mutationQueue.push(s);for(const i of n)this.Rs=this.Rs.add(new Y2(i.key,r)),this.indexManager.addToCollectionParentIndex(e,i.key.path.popLast());return N.resolve(s)}lookupMutationBatch(e,t){return N.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const a=t+1,n=this.bs(a),r=n<0?0:n;return N.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const a=new Y2(t,0),n=new Y2(t,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([a,n],s=>{const i=this.Ps(s.As);r.push(i)}),N.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let a=new d1(v2);return t.forEach(n=>{const r=new Y2(n,0),s=new Y2(n,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,s],i=>{a=a.add(i.As)})}),N.resolve(this.Vs(a))}getAllMutationBatchesAffectingQuery(e,t){const a=t.path,n=a.length+1;let r=a;Y.isDocumentKey(r)||(r=r.child(""));const s=new Y2(new Y(r),0);let i=new d1(v2);return this.Rs.forEachWhile(o=>{const l=o.key.path;return!!a.isPrefixOf(l)&&(l.length===n&&(i=i.add(o.As)),!0)},s),N.resolve(this.Vs(i))}Vs(e){const t=[];return e.forEach(a=>{const n=this.Ps(a);n!==null&&t.push(n)}),t}removeMutationBatch(e,t){A2(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let a=this.Rs;return N.forEach(t.mutations,n=>{const r=new Y2(n.key,t.batchId);return a=a.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Rs=a})}Cn(e){}containsKey(e,t){const a=new Y2(t,0),n=this.Rs.firstAfterOrEqual(a);return N.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.Ds=e,this.docs=new _2(Y.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const a=t.key,n=this.docs.get(a),r=n?n.size:0,s=this.Ds(t);return this.docs=this.docs.insert(a,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const a=this.docs.get(t);return N.resolve(a?a.document.mutableCopy():o1.newInvalidDocument(t))}getEntries(e,t){let a=w3();return t.forEach(n=>{const r=this.docs.get(n);a=a.insert(n,r?r.document.mutableCopy():o1.newInvalidDocument(n))}),N.resolve(a)}getDocumentsMatchingQuery(e,t,a,n){let r=w3();const s=t.path,i=new Y(s.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:l,value:{document:f}}=o.getNext();if(!s.isPrefixOf(l.path))break;l.path.length>s.length+1||Wx(jx(f),a)<=0||(n.has(f.key)||qc(t,f))&&(r=r.insert(f.key,f.mutableCopy()))}return N.resolve(r)}getAllFromCollectionGroup(e,t,a,n){c2()}Cs(e,t){return N.forEach(this.docs,a=>t(a))}newChangeBuffer(e){return new lN(this)}getSize(e){return N.resolve(this.size)}}class lN extends tN{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((a,n)=>{n.isValidDocument()?t.push(this.os.addEntry(e,n)):this.os.removeEntry(a)}),N.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.persistence=e,this.xs=new B6(t=>Fn(t),Bn),this.lastRemoteSnapshotVersion=n2.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Gn,this.targetCount=0,this.Ms=N6.kn()}forEachTarget(e,t){return this.xs.forEach((a,n)=>t(n)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,a){return a&&(this.lastRemoteSnapshotVersion=a),t>this.Ns&&(this.Ns=t),N.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new N6(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Fn(t),N.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,a){let n=0;const r=[];return this.xs.forEach((s,i)=>{i.sequenceNumber<=t&&a.get(i.targetId)===null&&(this.xs.delete(s),r.push(this.removeMatchingKeysForTargetId(e,i.targetId)),n++)}),N.waitFor(r).next(()=>n)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const a=this.xs.get(t)||null;return N.resolve(a)}addMatchingKeys(e,t,a){return this.ks.gs(t,a),N.resolve()}removeMatchingKeys(e,t,a){this.ks.ps(t,a);const n=this.persistence.referenceDelegate,r=[];return n&&t.forEach(s=>{r.push(n.markPotentiallyOrphaned(e,s))}),N.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),N.resolve()}getMatchingKeysForTargetId(e,t){const a=this.ks.Es(t);return N.resolve(a)}containsKey(e,t){return N.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,t){this.$s={},this.overlays={},this.Os=new Pn(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new fN(this),this.indexManager=new eN,this.remoteDocumentCache=function(a){return new oN(a)}(a=>this.referenceDelegate.Ls(a)),this.serializer=new JS(t),this.qs=new rN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sN,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let a=this.$s[e.toKey()];return a||(a=new iN(t,this.referenceDelegate),this.$s[e.toKey()]=a),a}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,a){q("MemoryPersistence","Starting transaction:",e);const n=new hN(this.Os.next());return this.referenceDelegate.Us(),a(n).next(r=>this.referenceDelegate.Ks(n).next(()=>r)).toPromise().then(r=>(n.raiseOnCommittedEvent(),r))}Gs(e,t){return N.or(Object.values(this.$s).map(a=>()=>a.containsKey(e,t)))}}class hN extends Kx{constructor(e){super(),this.currentSequenceNumber=e}}class Kn{constructor(e){this.persistence=e,this.Qs=new Gn,this.js=null}static zs(e){return new Kn(e)}get Ws(){if(this.js)return this.js;throw c2()}addReference(e,t,a){return this.Qs.addReference(a,t),this.Ws.delete(a.toString()),N.resolve()}removeReference(e,t,a){return this.Qs.removeReference(a,t),this.Ws.add(a.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),N.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(n=>this.Ws.add(n.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,t.targetId).next(n=>{n.forEach(r=>this.Ws.add(r.toString()))}).next(()=>a.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Ws,a=>{const n=Y.fromPath(a);return this.Hs(e,n).next(r=>{r||t.removeEntry(n,n2.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(a=>{a?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return N.or([()=>N.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t,a,n){this.targetId=e,this.fromCache=t,this.Fi=a,this.Bi=n}static Li(e,t){let a=o2(),n=o2();for(const r of t.docChanges)switch(r.type){case 0:a=a.add(r.doc.key);break;case 1:n=n.add(r.doc.key)}return new Yn(e,t.fromCache,a,n)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,a,n){return this.Ki(e,t).next(r=>r||this.Gi(e,t,n,a)).next(r=>r||this.Qi(e,t))}Ki(e,t){if(Mi(t))return N.resolve(null);let a=L3(t);return this.indexManager.getIndexType(e,a).next(n=>n===0?null:(t.limit!==null&&n===1&&(t=ia(t,null,"F"),a=L3(t)),this.indexManager.getDocumentsMatchingTarget(e,a).next(r=>{const s=o2(...r);return this.Ui.getDocuments(e,s).next(i=>this.indexManager.getMinOffset(e,a).next(o=>{const l=this.ji(t,i);return this.zi(t,l,s,o.readTime)?this.Ki(e,ia(t,null,"F")):this.Wi(e,l,t,o)}))})))}Gi(e,t,a,n){return Mi(t)||n.isEqual(n2.min())?this.Qi(e,t):this.Ui.getDocuments(e,a).next(r=>{const s=this.ji(t,r);return this.zi(t,s,a,n)?this.Qi(e,t):(di()<=m2.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),oa(t)),this.Wi(e,s,t,qx(n,-1)))})}ji(e,t){let a=new d1(Gf(e));return t.forEach((n,r)=>{qc(e,r)&&(a=a.add(r))}),a}zi(e,t,a,n){if(e.limit===null)return!1;if(a.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(n)>0)}Qi(e,t){return di()<=m2.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",oa(t)),this.Ui.getDocumentsMatchingQuery(e,t,n4.min())}Wi(e,t,a,n){return this.Ui.getDocumentsMatchingQuery(e,a,n).next(r=>(t.forEach(s=>{r=r.insert(s.key,s)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,t,a,n){this.persistence=e,this.Hi=t,this.serializer=n,this.Ji=new _2(v2),this.Yi=new B6(r=>Fn(r),Bn),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(a)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nN(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function pN(c,e,t,a){return new mN(c,e,t,a)}async function mu(c,e){const t=r2(c);return await t.persistence.runTransaction("Handle user change","readonly",a=>{let n;return t.mutationQueue.getAllMutationBatches(a).next(r=>(n=r,t.tr(e),t.mutationQueue.getAllMutationBatches(a))).next(r=>{const s=[],i=[];let o=o2();for(const l of n){s.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}for(const l of r){i.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}return t.localDocuments.getDocuments(a,o).next(l=>({er:l,removedBatchIds:s,addedBatchIds:i}))})})}function vN(c,e){const t=r2(c);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const n=e.batch.keys(),r=t.Zi.newChangeBuffer({trackRemovals:!0});return function(s,i,o,l){const f=o.batch,u=f.keys();let h=N.resolve();return u.forEach(d=>{h=h.next(()=>l.getEntry(i,d)).next(g=>{const z=o.docVersions.get(d);A2(z!==null),g.version.compareTo(z)<0&&(f.applyToRemoteDocument(g,o),g.isValidDocument()&&(g.setReadTime(o.commitVersion),l.addEntry(g)))})}),h.next(()=>s.mutationQueue.removeMutationBatch(i,f))}(t,a,e,r).next(()=>r.apply(a)).next(()=>t.mutationQueue.performConsistencyCheck(a)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(a,n,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(s){let i=o2();for(let o=0;o<s.mutationResults.length;++o)s.mutationResults[o].transformResults.length>0&&(i=i.add(s.batch.mutations[o].key));return i}(e))).next(()=>t.localDocuments.getDocuments(a,n))})}function pu(c){const e=r2(c);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function gN(c,e){const t=r2(c),a=e.snapshotVersion;let n=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const s=t.Zi.newChangeBuffer({trackRemovals:!0});n=t.Ji;const i=[];e.targetChanges.forEach((f,u)=>{const h=n.get(u);if(!h)return;i.push(t.Bs.removeMatchingKeys(r,f.removedDocuments,u).next(()=>t.Bs.addMatchingKeys(r,f.addedDocuments,u)));let d=h.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(u)!==null?d=d.withResumeToken(p1.EMPTY_BYTE_STRING,n2.min()).withLastLimboFreeSnapshotVersion(n2.min()):f.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(f.resumeToken,a)),n=n.insert(u,d),function(g,z,M){return g.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(h,d,f)&&i.push(t.Bs.updateTargetData(r,d))});let o=w3(),l=o2();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&i.push(t.persistence.referenceDelegate.updateLimboDocument(r,f))}),i.push(HN(r,s,e.documentUpdates).next(f=>{o=f.nr,l=f.sr})),!a.isEqual(n2.min())){const f=t.Bs.getLastRemoteSnapshotVersion(r).next(u=>t.Bs.setTargetsMetadata(r,r.currentSequenceNumber,a));i.push(f)}return N.waitFor(i).next(()=>s.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,o,l)).next(()=>o)}).then(r=>(t.Ji=n,r))}function HN(c,e,t){let a=o2(),n=o2();return t.forEach(r=>a=a.add(r)),e.getEntries(c,a).next(r=>{let s=w3();return t.forEach((i,o)=>{const l=r.get(i);o.isFoundDocument()!==l.isFoundDocument()&&(n=n.add(i)),o.isNoDocument()&&o.version.isEqual(n2.min())?(e.removeEntry(i,o.readTime),s=s.insert(i,o)):!l.isValidDocument()||o.version.compareTo(l.version)>0||o.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(o),s=s.insert(i,o)):q("LocalStore","Ignoring outdated watch update for ",i,". Current version:",l.version," Watch version:",o.version)}),{nr:s,sr:n}})}function zN(c,e){const t=r2(c);return t.persistence.runTransaction("Get next mutation batch","readonly",a=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(a,e)))}function VN(c,e){const t=r2(c);return t.persistence.runTransaction("Allocate target","readwrite",a=>{let n;return t.Bs.getTargetData(a,e).next(r=>r?(n=r,N.resolve(n)):t.Bs.allocateTargetId(a).next(s=>(n=new W3(e,s,"TargetPurposeListen",a.currentSequenceNumber),t.Bs.addTargetData(a,n).next(()=>n))))}).then(a=>{const n=t.Ji.get(a.targetId);return(n===null||a.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(a.targetId,a),t.Yi.set(e,a.targetId)),a})}async function da(c,e,t){const a=r2(c),n=a.Ji.get(e),r=t?"readwrite":"readwrite-primary";try{t||await a.persistence.runTransaction("Release target",r,s=>a.persistence.referenceDelegate.removeTarget(s,n))}catch(s){if(!g0(s))throw s;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}a.Ji=a.Ji.remove(e),a.Yi.delete(n.target)}function _i(c,e,t){const a=r2(c);let n=n2.min(),r=o2();return a.persistence.runTransaction("Execute query","readonly",s=>function(i,o,l){const f=r2(i),u=f.Yi.get(l);return u!==void 0?N.resolve(f.Ji.get(u)):f.Bs.getTargetData(o,l)}(a,s,L3(e)).next(i=>{if(i)return n=i.lastLimboFreeSnapshotVersion,a.Bs.getMatchingKeysForTargetId(s,i.targetId).next(o=>{r=o})}).next(()=>a.Hi.getDocumentsMatchingQuery(s,e,t?n:n2.min(),t?r:o2())).next(i=>(CN(a,dS(e),i),{documents:i,ir:r})))}function CN(c,e,t){let a=c.Xi.get(e)||n2.min();t.forEach((n,r)=>{r.readTime.compareTo(a)>0&&(a=r.readTime)}),c.Xi.set(e,a)}class Ei{constructor(){this.activeTargetIds=zS()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MN{constructor(){this.Hr=new Ei,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,a){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,a){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Ei,Promise.resolve()}handleUserChange(e,t,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z0=null;function e5(){return Z0===null?Z0=268435456+Math.round(2147483648*Math.random()):Z0++,"0x"+Z0.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="WebChannelConnection";class bN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,a,n,r){const s=e5(),i=this.To(e,t);q("RestConnection",`Sending RPC '${e}' ${s}:`,i,a);const o={};return this.Eo(o,n,r),this.Ao(e,i,o,a).then(l=>(q("RestConnection",`Received RPC '${e}' ${s}: `,l),l),l=>{throw w6("RestConnection",`RPC '${e}' ${s} failed with error: `,l,"url: ",i,"request:",a),l})}vo(e,t,a,n,r,s){return this.Io(e,t,a,n,r)}Eo(e,t,a){e["X-Goog-Api-Client"]="gl-js/ fire/"+F6,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((n,r)=>e[r]=n),a&&a.headers.forEach((n,r)=>e[r]=n)}To(e,t){const a=LN[e];return`${this.mo}/v1/${t}:${a}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,a,n){const r=e5();return new Promise((s,i)=>{const o=new _x;o.setWithCredentials(!0),o.listenOnce(Ax.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case Jt.NO_ERROR:const f=o.getResponseJson();q(s1,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),s(f);break;case Jt.TIMEOUT:q(s1,`RPC '${e}' ${r} timed out`),i(new W(x.DEADLINE_EXCEEDED,"Request time out"));break;case Jt.HTTP_ERROR:const u=o.getStatus();if(q(s1,`RPC '${e}' ${r} failed with status:`,u,"response text:",o.getResponseText()),u>0){let h=o.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(z){const M=z.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(M)>=0?M:x.UNKNOWN}(d.status);i(new W(g,d.message))}else i(new W(x.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new W(x.UNAVAILABLE,"Connection failed."));break;default:c2()}}finally{q(s1,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(n);q(s1,`RPC '${e}' ${r} sending request:`,n),o.send(t,"POST",l,a,15)})}Ro(e,t,a){const n=e5(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Sx(),i=Nx(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.xmlHttpFactory=new Tx({})),this.Eo(o.initMessageHeaders,t,a),o.encodeInitMessageHeaders=!0;const f=r.join("");q(s1,`Creating RPC '${e}' stream ${n}: ${f}`,o);const u=s.createWebChannel(f,o);let h=!1,d=!1;const g=new wN({ro:M=>{d?q(s1,`Not sending because RPC '${e}' stream ${n} is closed:`,M):(h||(q(s1,`Opening RPC '${e}' stream ${n} transport.`),u.open(),h=!0),q(s1,`RPC '${e}' stream ${n} sending:`,M),u.send(M))},oo:()=>u.close()}),z=(M,H,V)=>{M.listen(H,A=>{try{V(A)}catch(w){setTimeout(()=>{throw w},0)}})};return z(u,Y0.EventType.OPEN,()=>{d||q(s1,`RPC '${e}' stream ${n} transport opened.`)}),z(u,Y0.EventType.CLOSE,()=>{d||(d=!0,q(s1,`RPC '${e}' stream ${n} transport closed`),g.wo())}),z(u,Y0.EventType.ERROR,M=>{d||(d=!0,w6(s1,`RPC '${e}' stream ${n} transport errored:`,M),g.wo(new W(x.UNAVAILABLE,"The operation could not be completed")))}),z(u,Y0.EventType.MESSAGE,M=>{var H;if(!d){const V=M.data[0];A2(!!V);const A=V,w=A.error||((H=A[0])===null||H===void 0?void 0:H.error);if(w){q(s1,`RPC '${e}' stream ${n} received error:`,w);const R=w.status;let J=function(T){const P=F2[T];if(P!==void 0)return ru(P)}(R),X=w.message;J===void 0&&(J=x.INTERNAL,X="Unknown error status: "+R+" with message "+w.message),d=!0,g.wo(new W(J,X)),u.close()}else q(s1,`RPC '${e}' stream ${n} received:`,V),g._o(V)}}),z(i,kx.STAT_EVENT,M=>{M.stat===ui.PROXY?q(s1,`RPC '${e}' stream ${n} detected buffering proxy`):M.stat===ui.NOPROXY&&q(s1,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}function c5(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(c){return new DS(c,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t,a=1e3,n=1.5,r=6e4){this.ii=e,this.timerId=t,this.Po=a,this.bo=n,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),a=Math.max(0,Date.now()-this.Co),n=Math.max(0,t-a);n>0&&q("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${a} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,n,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t,a,n,r,s,i,o){this.ii=e,this.$o=a,this.Oo=n,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=i,this.listener=o,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new vu(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(y3(t.toString()),y3("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,n])=>{this.Fo===t&&this.Zo(a,n)},a=>{e(()=>{const n=new W(x.UNKNOWN,"Fetching auth token failed: "+a.message);return this.tu(n)})})}Zo(e,t){const a=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{a(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(n=>{a(()=>this.tu(n))}),this.stream.onMessage(n=>{a(()=>this.onMessage(n))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xN extends gu{constructor(e,t,a,n,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,a,n,s),this.serializer=r}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=BS(this.serializer,e),a=function(n){if(!("targetChange"in n))return n2.min();const r=n.targetChange;return r.targetIds&&r.targetIds.length?n2.min():r.readTime?s3(r.readTime):n2.min()}(e);return this.listener.nu(t,a)}su(e){const t={};t.database=ha(this.serializer),t.addTarget=function(n,r){let s;const i=r.target;if(s=sa(i)?{documents:qS(n,i)}:{query:jS(n,i)},s.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){s.resumeToken=ou(n,r.resumeToken);const o=la(n,r.expectedCount);o!==null&&(s.expectedCount=o)}else if(r.snapshotVersion.compareTo(n2.min())>0){s.readTime=j8(n,r.snapshotVersion.toTimestamp());const o=la(n,r.expectedCount);o!==null&&(s.expectedCount=o)}return s}(this.serializer,e);const a=GS(this.serializer,e);a&&(t.labels=a),this.Wo(t)}iu(e){const t={};t.database=ha(this.serializer),t.removeTarget=e,this.Wo(t)}}class SN extends gu{constructor(e,t,a,n,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,a,n,s),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(A2(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=$S(e.writeResults,e.commitTime),a=s3(e.commitTime);return this.listener.cu(a,t)}return A2(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=ha(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(a=>US(this.serializer,a))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN extends class{}{constructor(e,t,a,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=a,this.serializer=n,this.lu=!1}fu(){if(this.lu)throw new W(x.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,a){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,r])=>this.connection.Io(e,t,a,n,r)).catch(n=>{throw n.name==="FirebaseError"?(n.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),n):new W(x.UNKNOWN,n.toString())})}vo(e,t,a,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.vo(e,t,a,r,s,n)).catch(r=>{throw r.name==="FirebaseError"?(r.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(x.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class AN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(y3(t),this.mu=!1):q("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,t,a,n,r){this.localStore=e,this.datastore=t,this.asyncQueue=a,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(s=>{a.enqueueAndForget(async()=>{K4(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(i){const o=r2(i);o.vu.add(4),await V0(o),o.bu.set("Unknown"),o.vu.delete(4),await Yc(o)}(this))})}),this.bu=new AN(a,n)}}async function Yc(c){if(K4(c))for(const e of c.Ru)await e(!0)}async function V0(c){for(const e of c.Ru)await e(!1)}function Hu(c,e){const t=r2(c);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),Jn(t)?Xn(t):U6(t).Ko()&&Qn(t,e))}function zu(c,e){const t=r2(c),a=U6(t);t.Au.delete(e),a.Ko()&&Vu(t,e),t.Au.size===0&&(a.Ko()?a.jo():K4(t)&&t.bu.set("Unknown"))}function Qn(c,e){if(c.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(n2.min())>0){const t=c.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}U6(c).su(e)}function Vu(c,e){c.Vu.qt(e),U6(c).iu(e)}function Xn(c){c.Vu=new ES({getRemoteKeysForTarget:e=>c.remoteSyncer.getRemoteKeysForTarget(e),le:e=>c.Au.get(e)||null,ue:()=>c.datastore.serializer.databaseId}),U6(c).start(),c.bu.gu()}function Jn(c){return K4(c)&&!U6(c).Uo()&&c.Au.size>0}function K4(c){return r2(c).vu.size===0}function Cu(c){c.Vu=void 0}async function TN(c){c.Au.forEach((e,t)=>{Qn(c,e)})}async function _N(c,e){Cu(c),Jn(c)?(c.bu.Iu(e),Xn(c)):c.bu.set("Unknown")}async function EN(c,e,t){if(c.bu.set("Online"),e instanceof iu&&e.state===2&&e.cause)try{await async function(a,n){const r=n.cause;for(const s of n.targetIds)a.Au.has(s)&&(await a.remoteSyncer.rejectListen(s,r),a.Au.delete(s),a.Vu.removeTarget(s))}(c,e)}catch(a){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),a),await W8(c,a)}else if(e instanceof g8?c.Vu.Ht(e):e instanceof su?c.Vu.ne(e):c.Vu.Xt(e),!t.isEqual(n2.min()))try{const a=await pu(c.localStore);t.compareTo(a)>=0&&await function(n,r){const s=n.Vu.ce(r);return s.targetChanges.forEach((i,o)=>{if(i.resumeToken.approximateByteSize()>0){const l=n.Au.get(o);l&&n.Au.set(o,l.withResumeToken(i.resumeToken,r))}}),s.targetMismatches.forEach((i,o)=>{const l=n.Au.get(i);if(!l)return;n.Au.set(i,l.withResumeToken(p1.EMPTY_BYTE_STRING,l.snapshotVersion)),Vu(n,i);const f=new W3(l.target,i,o,l.sequenceNumber);Qn(n,f)}),n.remoteSyncer.applyRemoteEvent(s)}(c,t)}catch(a){q("RemoteStore","Failed to raise snapshot:",a),await W8(c,a)}}async function W8(c,e,t){if(!g0(e))throw e;c.vu.add(1),await V0(c),c.bu.set("Offline"),t||(t=()=>pu(c.localStore)),c.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await t(),c.vu.delete(1),await Yc(c)})}function Mu(c,e){return e().catch(t=>W8(c,t,e))}async function Qc(c){const e=r2(c),t=s4(e);let a=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;IN(e);)try{const n=await zN(e.localStore,a);if(n===null){e.Eu.length===0&&t.jo();break}a=n.batchId,PN(e,n)}catch(n){await W8(e,n)}yu(e)&&Lu(e)}function IN(c){return K4(c)&&c.Eu.length<10}function PN(c,e){c.Eu.push(e);const t=s4(c);t.Ko()&&t.ou&&t.uu(e.mutations)}function yu(c){return K4(c)&&!s4(c).Uo()&&c.Eu.length>0}function Lu(c){s4(c).start()}async function RN(c){s4(c).hu()}async function DN(c){const e=s4(c);for(const t of c.Eu)e.uu(t.mutations)}async function ON(c,e,t){const a=c.Eu.shift(),n=$n.from(a,e,t);await Mu(c,()=>c.remoteSyncer.applySuccessfulWrite(n)),await Qc(c)}async function FN(c,e){e&&s4(c).ou&&await async function(t,a){if(n=a.code,kS(n)&&n!==x.ABORTED){const r=t.Eu.shift();s4(t).Qo(),await Mu(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,a)),await Qc(t)}var n}(c,e),yu(c)&&Lu(c)}async function Pi(c,e){const t=r2(c);t.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const a=K4(t);t.vu.add(3),await V0(t),a&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Yc(t)}async function BN(c,e){const t=r2(c);e?(t.vu.delete(2),await Yc(t)):e||(t.vu.add(2),await V0(t),t.bu.set("Unknown"))}function U6(c){return c.Su||(c.Su=function(e,t,a){const n=r2(e);return n.fu(),new xN(t,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,a)}(c.datastore,c.asyncQueue,{uo:TN.bind(null,c),ao:_N.bind(null,c),nu:EN.bind(null,c)}),c.Ru.push(async e=>{e?(c.Su.Qo(),Jn(c)?Xn(c):c.bu.set("Unknown")):(await c.Su.stop(),Cu(c))})),c.Su}function s4(c){return c.Du||(c.Du=function(e,t,a){const n=r2(e);return n.fu(),new SN(t,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,a)}(c.datastore,c.asyncQueue,{uo:RN.bind(null,c),ao:FN.bind(null,c),au:DN.bind(null,c),cu:ON.bind(null,c)}),c.Ru.push(async e=>{e?(c.Du.Qo(),await Qc(c)):(await c.Du.stop(),c.Eu.length>0&&(q("RemoteStore",`Stopping write stream with ${c.Eu.length} pending writes`),c.Eu=[]))})),c.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,a,n,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=a,this.op=n,this.removalCallback=r,this.deferred=new Z3,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(e,t,a,n,r){const s=Date.now()+a,i=new Zn(e,t,s,n,r);return i.start(a),i}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function e7(c,e){if(y3("AsyncQueue",`${e}: ${c}`),g0(c))return new W(x.UNAVAILABLE,`${e}: ${c}`);throw c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v6{constructor(e){this.comparator=e?(t,a)=>e(t,a)||Y.comparator(t.key,a.key):(t,a)=>Y.comparator(t.key,a.key),this.keyedMap=re(),this.sortedSet=new _2(this.comparator)}static emptySet(e){return new v6(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,a)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof v6)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),a=e.sortedSet.getIterator();for(;t.hasNext();){const n=t.getNext().key,r=a.getNext().key;if(!n.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const a=new v6;return a.comparator=this.comparator,a.keyedMap=e,a.sortedSet=t,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.Cu=new _2(Y.comparator)}track(e){const t=e.doc.key,a=this.Cu.get(t);a?e.type!==0&&a.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&a.type!==1?this.Cu=this.Cu.insert(t,{type:a.type,doc:e.doc}):e.type===2&&a.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&a.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&a.type===0?this.Cu=this.Cu.remove(t):e.type===1&&a.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:a.doc}):e.type===0&&a.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):c2():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,a)=>{e.push(a)}),e}}class A6{constructor(e,t,a,n,r,s,i,o,l){this.query=e,this.docs=t,this.oldDocs=a,this.docChanges=n,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=i,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,a,n,r){const s=[];return t.forEach(i=>{s.push({type:0,doc:i})}),new A6(e,t,v6.emptySet(t),s,a,n,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,a=e.docChanges;if(t.length!==a.length)return!1;for(let n=0;n<t.length;n++)if(t[n].type!==a[n].type||!t[n].doc.isEqual(a[n].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(){this.Nu=void 0,this.listeners=[]}}class $N{constructor(){this.queries=new B6(e=>Wf(e),$c),this.onlineState="Unknown",this.ku=new Set}}async function qN(c,e){const t=r2(c),a=e.query;let n=!1,r=t.queries.get(a);if(r||(n=!0,r=new UN),n)try{r.Nu=await t.onListen(a)}catch(s){const i=e7(s,`Initialization of query '${oa(e.query)}' failed`);return void e.onError(i)}t.queries.set(a,r),r.listeners.push(e),e.Mu(t.onlineState),r.Nu&&e.$u(r.Nu)&&c7(t)}async function jN(c,e){const t=r2(c),a=e.query;let n=!1;const r=t.queries.get(a);if(r){const s=r.listeners.indexOf(e);s>=0&&(r.listeners.splice(s,1),n=r.listeners.length===0)}if(n)return t.queries.delete(a),t.onUnlisten(a)}function WN(c,e){const t=r2(c);let a=!1;for(const n of e){const r=n.query,s=t.queries.get(r);if(s){for(const i of s.listeners)i.$u(n)&&(a=!0);s.Nu=n}}a&&c7(t)}function GN(c,e,t){const a=r2(c),n=a.queries.get(e);if(n)for(const r of n.listeners)r.onError(t);a.queries.delete(e)}function c7(c){c.ku.forEach(e=>{e.next()})}class KN{constructor(e,t,a){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=a||{}}$u(e){if(!this.options.includeMetadataChanges){const a=[];for(const n of e.docChanges)n.type!==3&&a.push(n);e=new A6(e.query,e.docs,e.oldDocs,a,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const a=t!=="Offline";return(!this.options.Ku||!a)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=A6.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.key=e}}class bu{constructor(e){this.key=e}}class YN{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=o2(),this.mutatedKeys=o2(),this.tc=Gf(e),this.ec=new v6(this.tc)}get nc(){return this.Yu}sc(e,t){const a=t?t.ic:new Ri,n=t?t.ec:this.ec;let r=t?t.mutatedKeys:this.mutatedKeys,s=n,i=!1;const o=this.query.limitType==="F"&&n.size===this.query.limit?n.last():null,l=this.query.limitType==="L"&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((f,u)=>{const h=n.get(f),d=qc(this.query,u)?u:null,g=!!h&&this.mutatedKeys.has(h.key),z=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let M=!1;h&&d?h.data.isEqual(d.data)?g!==z&&(a.track({type:3,doc:d}),M=!0):this.rc(h,d)||(a.track({type:2,doc:d}),M=!0,(o&&this.tc(d,o)>0||l&&this.tc(d,l)<0)&&(i=!0)):!h&&d?(a.track({type:0,doc:d}),M=!0):h&&!d&&(a.track({type:1,doc:h}),M=!0,(o||l)&&(i=!0)),M&&(d?(s=s.add(d),r=z?r.add(f):r.delete(f)):(s=s.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),r=r.delete(f.key),a.track({type:1,doc:f})}return{ec:s,ic:a,zi:i,mutatedKeys:r}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,a){const n=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((l,f)=>function(u,h){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return c2()}};return d(u)-d(h)}(l.type,f.type)||this.tc(l.doc,f.doc)),this.oc(a);const s=t?this.uc():[],i=this.Zu.size===0&&this.current?1:0,o=i!==this.Xu;return this.Xu=i,r.length!==0||o?{snapshot:new A6(this.query,e.ec,n,r,e.mutatedKeys,i===0,o,!1,!!a&&a.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Ri,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=o2(),this.ec.forEach(a=>{this.ac(a.key)&&(this.Zu=this.Zu.add(a.key))});const t=[];return e.forEach(a=>{this.Zu.has(a)||t.push(new bu(a))}),this.Zu.forEach(a=>{e.has(a)||t.push(new wu(a))}),t}hc(e){this.Yu=e.ir,this.Zu=o2();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return A6.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class QN{constructor(e,t,a){this.query=e,this.targetId=t,this.view=a}}class XN{constructor(e){this.key=e,this.fc=!1}}class JN{constructor(e,t,a,n,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=a,this.sharedClientState=n,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new B6(i=>Wf(i),$c),this._c=new Map,this.mc=new Set,this.gc=new _2(Y.comparator),this.yc=new Map,this.Ic=new Gn,this.Tc={},this.Ec=new Map,this.Ac=N6.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function ZN(c,e){const t=lA(c);let a,n;const r=t.wc.get(e);if(r)a=r.targetId,t.sharedClientState.addLocalQueryTarget(a),n=r.view.lc();else{const s=await VN(t.localStore,L3(e)),i=t.sharedClientState.addLocalQueryTarget(s.targetId);a=s.targetId,n=await eA(t,e,a,i==="current",s.resumeToken),t.isPrimaryClient&&Hu(t.remoteStore,s)}return n}async function eA(c,e,t,a,n){c.Rc=(u,h,d)=>async function(g,z,M,H){let V=z.view.sc(M);V.zi&&(V=await _i(g.localStore,z.query,!1).then(({documents:R})=>z.view.sc(R,V)));const A=H&&H.targetChanges.get(z.targetId),w=z.view.applyChanges(V,g.isPrimaryClient,A);return Oi(g,z.targetId,w.cc),w.snapshot}(c,u,h,d);const r=await _i(c.localStore,e,!0),s=new YN(e,r.ir),i=s.sc(r.documents),o=z0.createSynthesizedTargetChangeForCurrentChange(t,a&&c.onlineState!=="Offline",n),l=s.applyChanges(i,c.isPrimaryClient,o);Oi(c,t,l.cc);const f=new QN(e,t,s);return c.wc.set(e,f),c._c.has(t)?c._c.get(t).push(e):c._c.set(t,[e]),l.snapshot}async function cA(c,e){const t=r2(c),a=t.wc.get(e),n=t._c.get(a.targetId);if(n.length>1)return t._c.set(a.targetId,n.filter(r=>!$c(r,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(a.targetId),t.sharedClientState.isActiveQueryTarget(a.targetId)||await da(t.localStore,a.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(a.targetId),zu(t.remoteStore,a.targetId),ma(t,a.targetId)}).catch(v0)):(ma(t,a.targetId),await da(t.localStore,a.targetId,!0))}async function tA(c,e,t){const a=fA(c);try{const n=await function(r,s){const i=r2(r),o=G2.now(),l=s.reduce((h,d)=>h.add(d.key),o2());let f,u;return i.persistence.runTransaction("Locally write mutations","readwrite",h=>{let d=w3(),g=o2();return i.Zi.getEntries(h,l).next(z=>{d=z,d.forEach((M,H)=>{H.isValidDocument()||(g=g.add(M))})}).next(()=>i.localDocuments.getOverlayedDocuments(h,d)).next(z=>{f=z;const M=[];for(const H of s){const V=bS(H,f.get(H.key).overlayedDocument);V!=null&&M.push(new d4(H.key,V,Df(V.value.mapValue),j1.exists(!0)))}return i.mutationQueue.addMutationBatch(h,o,M,s)}).next(z=>{u=z;const M=z.applyToLocalDocumentSet(f,g);return i.documentOverlayCache.saveOverlays(h,z.batchId,M)})}).then(()=>({batchId:u.batchId,changes:Yf(f)}))}(a.localStore,e);a.sharedClientState.addPendingMutation(n.batchId),function(r,s,i){let o=r.Tc[r.currentUser.toKey()];o||(o=new _2(v2)),o=o.insert(s,i),r.Tc[r.currentUser.toKey()]=o}(a,n.batchId,t),await C0(a,n.changes),await Qc(a.remoteStore)}catch(n){const r=e7(n,"Failed to persist write");t.reject(r)}}async function xu(c,e){const t=r2(c);try{const a=await gN(t.localStore,e);e.targetChanges.forEach((n,r)=>{const s=t.yc.get(r);s&&(A2(n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size<=1),n.addedDocuments.size>0?s.fc=!0:n.modifiedDocuments.size>0?A2(s.fc):n.removedDocuments.size>0&&(A2(s.fc),s.fc=!1))}),await C0(t,a,e)}catch(a){await v0(a)}}function Di(c,e,t){const a=r2(c);if(a.isPrimaryClient&&t===0||!a.isPrimaryClient&&t===1){const n=[];a.wc.forEach((r,s)=>{const i=s.view.Mu(e);i.snapshot&&n.push(i.snapshot)}),function(r,s){const i=r2(r);i.onlineState=s;let o=!1;i.queries.forEach((l,f)=>{for(const u of f.listeners)u.Mu(s)&&(o=!0)}),o&&c7(i)}(a.eventManager,e),n.length&&a.dc.nu(n),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function aA(c,e,t){const a=r2(c);a.sharedClientState.updateQueryState(e,"rejected",t);const n=a.yc.get(e),r=n&&n.key;if(r){let s=new _2(Y.comparator);s=s.insert(r,o1.newNoDocument(r,n2.min()));const i=o2().add(r),o=new Gc(n2.min(),new Map,new _2(v2),s,i);await xu(a,o),a.gc=a.gc.remove(r),a.yc.delete(e),t7(a)}else await da(a.localStore,e,!1).then(()=>ma(a,e,t)).catch(v0)}async function nA(c,e){const t=r2(c),a=e.batch.batchId;try{const n=await vN(t.localStore,e);Nu(t,a,null),Su(t,a),t.sharedClientState.updateMutationState(a,"acknowledged"),await C0(t,n)}catch(n){await v0(n)}}async function rA(c,e,t){const a=r2(c);try{const n=await function(r,s){const i=r2(r);return i.persistence.runTransaction("Reject batch","readwrite-primary",o=>{let l;return i.mutationQueue.lookupMutationBatch(o,s).next(f=>(A2(f!==null),l=f.keys(),i.mutationQueue.removeMutationBatch(o,f))).next(()=>i.mutationQueue.performConsistencyCheck(o)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(o,l,s)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(o,l)).next(()=>i.localDocuments.getDocuments(o,l))})}(a.localStore,e);Nu(a,e,t),Su(a,e),a.sharedClientState.updateMutationState(e,"rejected",t),await C0(a,n)}catch(n){await v0(n)}}function Su(c,e){(c.Ec.get(e)||[]).forEach(t=>{t.resolve()}),c.Ec.delete(e)}function Nu(c,e,t){const a=r2(c);let n=a.Tc[a.currentUser.toKey()];if(n){const r=n.get(e);r&&(t?r.reject(t):r.resolve(),n=n.remove(e)),a.Tc[a.currentUser.toKey()]=n}}function ma(c,e,t=null){c.sharedClientState.removeLocalQueryTarget(e);for(const a of c._c.get(e))c.wc.delete(a),t&&c.dc.Pc(a,t);c._c.delete(e),c.isPrimaryClient&&c.Ic.Is(e).forEach(a=>{c.Ic.containsKey(a)||Au(c,a)})}function Au(c,e){c.mc.delete(e.path.canonicalString());const t=c.gc.get(e);t!==null&&(zu(c.remoteStore,t),c.gc=c.gc.remove(e),c.yc.delete(t),t7(c))}function Oi(c,e,t){for(const a of t)a instanceof wu?(c.Ic.addReference(a.key,e),sA(c,a)):a instanceof bu?(q("SyncEngine","Document no longer in limbo: "+a.key),c.Ic.removeReference(a.key,e),c.Ic.containsKey(a.key)||Au(c,a.key)):c2()}function sA(c,e){const t=e.key,a=t.path.canonicalString();c.gc.get(t)||c.mc.has(a)||(q("SyncEngine","New document in limbo: "+t),c.mc.add(a),t7(c))}function t7(c){for(;c.mc.size>0&&c.gc.size<c.maxConcurrentLimboResolutions;){const e=c.mc.values().next().value;c.mc.delete(e);const t=new Y(T2.fromString(e)),a=c.Ac.next();c.yc.set(a,new XN(t)),c.gc=c.gc.insert(t,a),Hu(c.remoteStore,new W3(L3(jf(t.path)),a,"TargetPurposeLimboResolution",Pn.ct))}}async function C0(c,e,t){const a=r2(c),n=[],r=[],s=[];a.wc.isEmpty()||(a.wc.forEach((i,o)=>{s.push(a.Rc(o,e,t).then(l=>{if((l||t)&&a.isPrimaryClient&&a.sharedClientState.updateQueryState(o.targetId,l!=null&&l.fromCache?"not-current":"current"),l){n.push(l);const f=Yn.Li(o.targetId,l);r.push(f)}}))}),await Promise.all(s),a.dc.nu(n),await async function(i,o){const l=r2(i);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>N.forEach(o,u=>N.forEach(u.Fi,h=>l.persistence.referenceDelegate.addReference(f,u.targetId,h)).next(()=>N.forEach(u.Bi,h=>l.persistence.referenceDelegate.removeReference(f,u.targetId,h)))))}catch(f){if(!g0(f))throw f;q("LocalStore","Failed to update sequence numbers: "+f)}for(const f of o){const u=f.targetId;if(!f.fromCache){const h=l.Ji.get(u),d=h.snapshotVersion,g=h.withLastLimboFreeSnapshotVersion(d);l.Ji=l.Ji.insert(u,g)}}}(a.localStore,r))}async function iA(c,e){const t=r2(c);if(!t.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const a=await mu(t.localStore,e);t.currentUser=e,function(n,r){n.Ec.forEach(s=>{s.forEach(i=>{i.reject(new W(x.CANCELLED,r))})}),n.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await C0(t,a.er)}}function oA(c,e){const t=r2(c),a=t.yc.get(e);if(a&&a.fc)return o2().add(a.key);{let n=o2();const r=t._c.get(e);if(!r)return n;for(const s of r){const i=t.wc.get(s);n=n.unionWith(i.view.nc)}return n}}function lA(c){const e=r2(c);return e.remoteStore.remoteSyncer.applyRemoteEvent=xu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aA.bind(null,e),e.dc.nu=WN.bind(null,e.eventManager),e.dc.Pc=GN.bind(null,e.eventManager),e}function fA(c){const e=r2(c);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rA.bind(null,e),e}class Fi{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Kc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return pN(this.persistence,new dN,e.initialUser,this.serializer)}createPersistence(e){return new uN(Kn.zs,this.serializer)}createSharedClientState(e){return new MN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uA{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>Di(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=iA.bind(null,this.syncEngine),await BN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $N}createDatastore(e){const t=Kc(e.databaseInfo.databaseId),a=(n=e.databaseInfo,new bN(n));var n;return function(r,s,i,o){return new NN(r,s,i,o)}(e.authCredentials,e.appCheckCredentials,a,t)}createRemoteStore(e){return t=this.localStore,a=this.datastore,n=e.asyncQueue,r=i=>Di(this.syncEngine,i,0),s=Ii.D()?new Ii:new yN,new kN(t,a,n,r,s);var t,a,n,r,s}createSyncEngine(e,t){return function(a,n,r,s,i,o,l){const f=new JN(a,n,r,s,i,o);return l&&(f.vc=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=r2(e);q("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await V0(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):y3("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,t,a,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=a,this.databaseInfo=n,this.user=i1.UNAUTHENTICATED,this.clientId=If.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(a,async r=>{q("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(a,r=>(q("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Z3;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const a=e7(t,"Failed to shutdown persistence");e.reject(a)}}),e.promise}}async function t5(c,e){c.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const t=await c.getConfiguration();await e.initialize(t);let a=t.initialUser;c.setCredentialChangeListener(async n=>{a.isEqual(n)||(await mu(e.localStore,n),a=n)}),e.persistence.setDatabaseDeletedListener(()=>c.terminate()),c._offlineComponents=e}async function Bi(c,e){c.asyncQueue.verifyOperationInProgress();const t=await pA(c);q("FirestoreClient","Initializing OnlineComponentProvider");const a=await c.getConfiguration();await e.initialize(t,a),c.setCredentialChangeListener(n=>Pi(e.remoteStore,n)),c.setAppCheckTokenChangeListener((n,r)=>Pi(e.remoteStore,r)),c._onlineComponents=e}function mA(c){return c.name==="FirebaseError"?c.code===x.FAILED_PRECONDITION||c.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&c instanceof DOMException)||c.code===22||c.code===20||c.code===11}async function pA(c){if(!c._offlineComponents)if(c._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await t5(c,c._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!mA(t))throw t;w6("Error using user provided cache. Falling back to memory cache: "+t),await t5(c,new Fi)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await t5(c,new Fi);return c._offlineComponents}async function ku(c){return c._onlineComponents||(c._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Bi(c,c._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Bi(c,new uA))),c._onlineComponents}function vA(c){return ku(c).then(e=>e.syncEngine)}async function gA(c){const e=await ku(c),t=e.eventManager;return t.onListen=ZN.bind(null,e.syncEngine),t.onUnlisten=cA.bind(null,e.syncEngine),t}function HA(c,e,t={}){const a=new Z3;return c.asyncQueue.enqueueAndForget(async()=>function(n,r,s,i,o){const l=new hA({next:u=>{r.enqueueAndForget(()=>jN(n,f)),u.fromCache&&i.source==="server"?o.reject(new W(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(u)},error:u=>o.reject(u)}),f=new KN(s,l,{includeMetadataChanges:!0,Ku:!0});return qN(n,f)}(await gA(c),c.asyncQueue,e,t,a)),a.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(c){const e={};return c.timeoutSeconds!==void 0&&(e.timeoutSeconds=c.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(c,e,t){if(!t)throw new W(x.INVALID_ARGUMENT,`Function ${c}() cannot be called with an empty ${e}.`)}function zA(c,e,t,a){if(e===!0&&a===!0)throw new W(x.INVALID_ARGUMENT,`${c} and ${t} cannot be used together.`)}function $i(c){if(!Y.isDocumentKey(c))throw new W(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${c} has ${c.length}.`)}function qi(c){if(Y.isDocumentKey(c))throw new W(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${c} has ${c.length}.`)}function a7(c){if(c===void 0)return"undefined";if(c===null)return"null";if(typeof c=="string")return c.length>20&&(c=`${c.substring(0,20)}...`),JSON.stringify(c);if(typeof c=="number"||typeof c=="boolean")return""+c;if(typeof c=="object"){if(c instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(c);return e?`a custom ${e} object`:"an object"}}return typeof c=="function"?"a function":c2()}function R4(c,e){if("_delegate"in c&&(c=c._delegate),!(c instanceof e)){if(e.name===c.constructor.name)throw new W(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=a7(c);throw new W(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){var t,a;if(e.host===void 0){if(e.ssl!==void 0)throw new W(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tu((a=e.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new W(x.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new W(x.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new W(x.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,a=e.experimentalLongPollingOptions,t.timeoutSeconds===a.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,a}}class Xc{constructor(e,t,a,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=a,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ji({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ji(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Ix;switch(t.type){case"firstParty":return new Ox(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new W(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ui.get(e);t&&(q("ComponentProvider","Removing Datastore"),Ui.delete(e),t.terminate())}(this),Promise.resolve()}}function VA(c,e,t,a={}){var n;const r=(c=R4(c,Xc))._getSettings(),s=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==s&&w6("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),c._setSettings(Object.assign(Object.assign({},r),{host:s,ssl:!1})),a.mockUserToken){let i,o;if(typeof a.mockUserToken=="string")i=a.mockUserToken,o=i1.MOCK_USER;else{i=rw(a.mockUserToken,(n=c._app)===null||n===void 0?void 0:n.options.projectId);const l=a.mockUserToken.sub||a.mockUserToken.user_id;if(!l)throw new W(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");o=new i1(l)}c._authCredentials=new Px(new Ef(i,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,t,a){this.converter=t,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new e4(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new D1(this.firestore,e,this._key)}}class Jc{constructor(e,t,a){this.converter=t,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new Jc(this.firestore,e,this._query)}}class e4 extends Jc{constructor(e,t,a){super(e,t,jf(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new D1(this.firestore,null,new Y(e))}withConverter(e){return new e4(this.firestore,e,this._path)}}function CA(c,e,...t){if(c=n1(c),_u("collection","path",e),c instanceof Xc){const a=T2.fromString(e,...t);return qi(a),new e4(c,null,a)}{if(!(c instanceof D1||c instanceof e4))throw new W(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=c._path.child(T2.fromString(e,...t));return qi(a),new e4(c.firestore,null,a)}}function pa(c,e,...t){if(c=n1(c),arguments.length===1&&(e=If.A()),_u("doc","path",e),c instanceof Xc){const a=T2.fromString(e,...t);return $i(a),new D1(c,null,new Y(a))}{if(!(c instanceof D1||c instanceof e4))throw new W(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=c._path.child(T2.fromString(e,...t));return $i(a),new D1(c.firestore,c instanceof e4?c.converter:null,new Y(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new vu(this,"async_queue_retry"),this.Xc=()=>{const t=c5();t&&q("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=c5();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=c5();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new Z3;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!g0(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(a=>{this.Wc=a,this.Hc=!1;const n=function(r){let s=r.message||"";return r.stack&&(s=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),s}(a);throw y3("INTERNAL UNHANDLED ERROR: ",n),a}).then(a=>(this.Hc=!1,a))));return this.Gc=t,t}enqueueAfterDelay(e,t,a){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const n=Zn.createAndSchedule(this,e,t,a,r=>this.na(r));return this.zc.push(n),n}Zc(){this.Wc&&c2()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,a)=>t.targetTimeMs-a.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class M0 extends Xc{constructor(e,t,a,n){super(e,t,a,n),this.type="firestore",this._queue=new MA,this._persistenceKey=(n==null?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Iu(this),this._firestoreClient.terminate()}}function yA(c,e){const t=typeof c=="object"?c:hn(),a=typeof c=="string"?c:e||"(default)",n=j4(t,"firestore").getImmediate({identifier:a});if(!n._initialized){const r=aw("firestore");r&&VA(n,...r)}return n}function Eu(c){return c._firestoreClient||Iu(c),c._firestoreClient.verifyNotTerminated(),c._firestoreClient}function Iu(c){var e,t,a;const n=c._freezeSettings(),r=function(s,i,o,l){return new Xx(s,i,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Tu(l.experimentalLongPollingOptions),l.useFetchStreams)}(c._databaseId,((e=c._app)===null||e===void 0?void 0:e.options.appId)||"",c._persistenceKey,n);c._firestoreClient=new dA(c._authCredentials,c._appCheckCredentials,c._queue,r),!((t=n.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((a=n.cache)===null||a===void 0)&&a._onlineComponentProvider)&&(c._firestoreClient._uninitializedComponentsProvider={_offlineKind:n.cache.kind,_offline:n.cache._offlineComponentProvider,_online:n.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k6{constructor(e){this._byteString=e}static fromBase64String(e){try{return new k6(p1.fromBase64String(e))}catch(t){throw new W(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new k6(p1.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new f1(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r7{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return v2(this._lat,e._lat)||v2(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=/^__.*__$/;class wA{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return this.fieldMask!==null?new d4(e,this.data,this.fieldMask,t,this.fieldTransforms):new H0(e,this.data,t,this.fieldTransforms)}}class Pu{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return new d4(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ru(c){switch(c){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw c2()}}class s7{constructor(e,t,a,n,r,s){this.settings=e,this.databaseId=t,this.serializer=a,this.ignoreUndefinedProperties=n,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new s7(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const a=(t=this.path)===null||t===void 0?void 0:t.child(e),n=this.aa({path:a,la:!1});return n.fa(e),n}da(e){var t;const a=(t=this.path)===null||t===void 0?void 0:t.child(e),n=this.aa({path:a,la:!1});return n.ua(),n}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return G8(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Ru(this.ca)&&LA.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class bA{constructor(e,t,a){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=a||Kc(e)}ya(e,t,a,n=!1){return new s7({ca:e,methodName:t,ga:a,path:f1.emptyPath(),la:!1,ma:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Du(c){const e=c._freezeSettings(),t=Kc(c._databaseId);return new bA(c._databaseId,!!e.ignoreUndefinedProperties,t)}function xA(c,e,t,a,n,r={}){const s=c.ya(r.merge||r.mergeFields?2:0,e,t,n);i7("Data must be an object, but it was:",s,a);const i=Ou(a,s);let o,l;if(r.merge)o=new x1(s.fieldMask),l=s.fieldTransforms;else if(r.mergeFields){const f=[];for(const u of r.mergeFields){const h=va(e,u,t);if(!s.contains(h))throw new W(x.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);Bu(f,h)||f.push(h)}o=new x1(f),l=s.fieldTransforms.filter(u=>o.covers(u.field))}else o=null,l=s.fieldTransforms;return new wA(new M1(i),o,l)}class et extends n7{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof et}}function SA(c,e,t,a){const n=c.ya(1,e,t);i7("Data must be an object, but it was:",n,a);const r=[],s=M1.empty();G4(a,(o,l)=>{const f=o7(e,o,t);l=n1(l);const u=n.da(f);if(l instanceof et)r.push(f);else{const h=ct(l,u);h!=null&&(r.push(f),s.set(f,h))}});const i=new x1(r);return new Pu(s,i,n.fieldTransforms)}function NA(c,e,t,a,n,r){const s=c.ya(1,e,t),i=[va(e,a,t)],o=[n];if(r.length%2!=0)throw new W(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<r.length;h+=2)i.push(va(e,r[h])),o.push(r[h+1]);const l=[],f=M1.empty();for(let h=i.length-1;h>=0;--h)if(!Bu(l,i[h])){const d=i[h];let g=o[h];g=n1(g);const z=s.da(d);if(g instanceof et)l.push(d);else{const M=ct(g,z);M!=null&&(l.push(d),f.set(d,M))}}const u=new x1(l);return new Pu(f,u,s.fieldTransforms)}function ct(c,e){if(Fu(c=n1(c)))return i7("Unsupported field value:",e,c),Ou(c,e);if(c instanceof n7)return function(t,a){if(!Ru(a.ca))throw a._a(`${t._methodName}() can only be used with update() and set()`);if(!a.path)throw a._a(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(a);n&&a.fieldTransforms.push(n)}(c,e),null;if(c===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),c instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,a){const n=[];let r=0;for(const s of t){let i=ct(s,a.wa(r));i==null&&(i={nullValue:"NULL_VALUE"}),n.push(i),r++}return{arrayValue:{values:n}}}(c,e)}return function(t,a){if((t=n1(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return VS(a.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const n=G2.fromDate(t);return{timestampValue:j8(a.serializer,n)}}if(t instanceof G2){const n=new G2(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:j8(a.serializer,n)}}if(t instanceof r7)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof k6)return{bytesValue:ou(a.serializer,t._byteString)};if(t instanceof D1){const n=a.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw a._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Wn(t.firestore._databaseId||a.databaseId,t._key.path)}}throw a._a(`Unsupported field value: ${a7(t)}`)}(c,e)}function Ou(c,e){const t={};return Pf(c)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):G4(c,(a,n)=>{const r=ct(n,e.ha(a));r!=null&&(t[a]=r)}),{mapValue:{fields:t}}}function Fu(c){return!(typeof c!="object"||c===null||c instanceof Array||c instanceof Date||c instanceof G2||c instanceof r7||c instanceof k6||c instanceof D1||c instanceof n7)}function i7(c,e,t){if(!Fu(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const a=a7(t);throw a==="an object"?e._a(c+" a custom object"):e._a(c+" "+a)}}function va(c,e,t){if((e=n1(e))instanceof Zc)return e._internalPath;if(typeof e=="string")return o7(c,e);throw G8("Field path arguments must be of type string or ",c,!1,void 0,t)}const AA=new RegExp("[~\\*/\\[\\]]");function o7(c,e,t){if(e.search(AA)>=0)throw G8(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,c,!1,void 0,t);try{return new Zc(...e.split("."))._internalPath}catch{throw G8(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,c,!1,void 0,t)}}function G8(c,e,t,a,n){const r=a&&!a.isEmpty(),s=n!==void 0;let i=`Function ${e}() called with invalid data`;t&&(i+=" (via `toFirestore()`)"),i+=". ";let o="";return(r||s)&&(o+=" (found",r&&(o+=` in field ${a}`),s&&(o+=` in document ${n}`),o+=")"),new W(x.INVALID_ARGUMENT,i+c+o)}function Bu(c,e){return c.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t,a,n,r){this._firestore=e,this._userDataWriter=t,this._key=a,this._document=n,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new D1(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($u("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class kA extends Uu{data(){return super.data()}}function $u(c,e){return typeof e=="string"?o7(c,e):e instanceof Zc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(c){if(c.limitType==="L"&&c.explicitOrderBy.length===0)throw new W(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _A{convertValue(e,t="none"){switch(P4(e)){case 0:return null;case 1:return e.booleanValue;case 2:return B2(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(I4(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw c2()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const a={};return G4(e,(n,r)=>{a[n]=this.convertValue(r,t)}),a}convertGeoPoint(e){return new r7(B2(e.latitude),B2(e.longitude))}convertArray(e,t){return(e.values||[]).map(a=>this.convertValue(a,t))}convertServerTimestamp(e,t){switch(t){case"previous":const a=Dn(e);return a==null?null:this.convertValue(a,t);case"estimate":return this.convertTimestamp(We(e));default:return null}}convertTimestamp(e){const t=r4(e);return new G2(t.seconds,t.nanos)}convertDocumentKey(e,t){const a=T2.fromString(e);A2(du(a));const n=new Ge(a.get(1),a.get(3)),r=new Y(a.popFirst(5));return n.isEqual(t)||y3(`Document ${r} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(c,e,t){let a;return a=c?t&&(t.merge||t.mergeFields)?c.toFirestore(e,t):c.toFirestore(e):e,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e8{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class IA extends Uu{constructor(e,t,a,n,r,s){super(e,t,a,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new H8(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const a=this._document.data.field($u("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,t.serverTimestamps)}}}class H8 extends IA{data(e={}){return super.data(e)}}class PA{constructor(e,t,a,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new e8(n.hasPendingWrites,n.fromCache),this.query=a}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(a=>{e.call(t,new H8(this._firestore,this._userDataWriter,a.key,a,new e8(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,n){if(a._snapshot.oldDocs.isEmpty()){let r=0;return a._snapshot.docChanges.map(s=>{const i=new H8(a._firestore,a._userDataWriter,s.doc.key,s.doc,new e8(a._snapshot.mutatedKeys.has(s.doc.key),a._snapshot.fromCache),a.query.converter);return s.doc,{type:"added",doc:i,oldIndex:-1,newIndex:r++}})}{let r=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(s=>n||s.type!==3).map(s=>{const i=new H8(a._firestore,a._userDataWriter,s.doc.key,s.doc,new e8(a._snapshot.mutatedKeys.has(s.doc.key),a._snapshot.fromCache),a.query.converter);let o=-1,l=-1;return s.type!==0&&(o=r.indexOf(s.doc.key),r=r.delete(s.doc.key)),s.type!==1&&(r=r.add(s.doc),l=r.indexOf(s.doc.key)),{type:RA(s.type),doc:i,oldIndex:o,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function RA(c){switch(c){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return c2()}}class DA extends _A{constructor(e){super(),this.firestore=e}convertBytes(e){return new k6(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new D1(this.firestore,null,t)}}function OA(c){c=R4(c,Jc);const e=R4(c.firestore,M0),t=Eu(e),a=new DA(e);return TA(c._query),HA(t,c._query).then(n=>new PA(e,a,c,n))}function FA(c,e,t,...a){c=R4(c,D1);const n=R4(c.firestore,M0),r=Du(n);let s;return s=typeof(e=n1(e))=="string"||e instanceof Zc?NA(r,"updateDoc",c._key,e,t,a):SA(r,"updateDoc",c._key,e),l7(n,[s.toMutation(c._key,j1.exists(!0))])}function BA(c){return l7(R4(c.firestore,M0),[new Un(c._key,j1.none())])}function UA(c,e){const t=R4(c.firestore,M0),a=pa(c),n=EA(c.converter,e);return l7(t,[xA(Du(c.firestore),"addDoc",a._key,n,c.converter!==null,{}).toMutation(a._key,j1.exists(!1))]).then(()=>a)}function l7(c,e){return function(t,a){const n=new Z3;return t.asyncQueue.enqueueAndForget(async()=>tA(await vA(t),a,n)),n.promise}(Eu(c),e)}(function(c,e=!0){(function(t){F6=t})(R6),f3(new G1("firestore",(t,{instanceIdentifier:a,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new M0(new Rx(t.getProvider("auth-internal")),new Bx(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new W(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ge(i.options.projectId,o)}(r,a),r);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),R1(hi,"3.12.2",c),R1(hi,"3.12.2","esm2017")})();const $A=(c,e)=>e.some(t=>c instanceof t);let Wi,Gi;function qA(){return Wi||(Wi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jA(){return Gi||(Gi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qu=new WeakMap,ga=new WeakMap,ju=new WeakMap,a5=new WeakMap,f7=new WeakMap;function WA(c){const e=new Promise((t,a)=>{const n=()=>{c.removeEventListener("success",r),c.removeEventListener("error",s)},r=()=>{t(c4(c.result)),n()},s=()=>{a(c.error),n()};c.addEventListener("success",r),c.addEventListener("error",s)});return e.then(t=>{t instanceof IDBCursor&&qu.set(t,c)}).catch(()=>{}),f7.set(e,c),e}function GA(c){if(ga.has(c))return;const e=new Promise((t,a)=>{const n=()=>{c.removeEventListener("complete",r),c.removeEventListener("error",s),c.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{a(c.error||new DOMException("AbortError","AbortError")),n()};c.addEventListener("complete",r),c.addEventListener("error",s),c.addEventListener("abort",s)});ga.set(c,e)}let Ha={get(c,e,t){if(c instanceof IDBTransaction){if(e==="done")return ga.get(c);if(e==="objectStoreNames")return c.objectStoreNames||ju.get(c);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return c4(c[e])},set(c,e,t){return c[e]=t,!0},has(c,e){return c instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in c}};function KA(c){Ha=c(Ha)}function YA(c){return c===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const a=c.call(n5(this),e,...t);return ju.set(a,e.sort?e.sort():[e]),c4(a)}:jA().includes(c)?function(...e){return c.apply(n5(this),e),c4(qu.get(this))}:function(...e){return c4(c.apply(n5(this),e))}}function QA(c){return typeof c=="function"?YA(c):(c instanceof IDBTransaction&&GA(c),$A(c,qA())?new Proxy(c,Ha):c)}function c4(c){if(c instanceof IDBRequest)return WA(c);if(a5.has(c))return a5.get(c);const e=QA(c);return e!==c&&(a5.set(c,e),f7.set(e,c)),e}const n5=c=>f7.get(c);function XA(c,e,{blocked:t,upgrade:a,blocking:n,terminated:r}={}){const s=indexedDB.open(c,e),i=c4(s);return a&&s.addEventListener("upgradeneeded",o=>{a(c4(s.result),o.oldVersion,o.newVersion,c4(s.transaction))}),t&&s.addEventListener("blocked",()=>t()),i.then(o=>{r&&o.addEventListener("close",()=>r()),n&&o.addEventListener("versionchange",()=>n())}).catch(()=>{}),i}const JA=["get","getKey","getAll","getAllKeys","count"],ZA=["put","add","delete","clear"],r5=new Map;function Ki(c,e){if(!(c instanceof IDBDatabase&&!(e in c)&&typeof e=="string"))return;if(r5.get(e))return r5.get(e);const t=e.replace(/FromIndex$/,""),a=e!==t,n=ZA.includes(t);if(!(t in(a?IDBIndex:IDBObjectStore).prototype)||!(n||JA.includes(t)))return;const r=async function(s,...i){const o=this.transaction(s,n?"readwrite":"readonly");let l=o.store;return a&&(l=l.index(i.shift())),(await Promise.all([l[t](...i),n&&o.done]))[0]};return r5.set(e,r),r}KA(c=>({...c,get:(e,t,a)=>Ki(e,t)||c.get(e,t,a),has:(e,t)=>!!Ki(e,t)||c.has(e,t)}));const Wu="@firebase/installations",u7="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=1e4,Ku=`w:${u7}`,Yu="FIS_v2",ek="https://firebaseinstallations.googleapis.com/v1",ck=60*60*1e3,tk="installations",ak="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},D4=new q4(tk,ak,nk);function Qu(c){return c instanceof Q1&&c.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu({projectId:c}){return`${ek}/projects/${c}/installations`}function Ju(c){return{token:c.token,requestStatus:2,expiresIn:sk(c.expiresIn),creationTime:Date.now()}}async function Zu(c,e){const a=(await e.json()).error;return D4.create("request-failed",{requestName:c,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function eh({apiKey:c}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":c})}function rk(c,{refreshToken:e}){const t=eh(c);return t.append("Authorization",ik(e)),t}async function ch(c){const e=await c();return e.status>=500&&e.status<600?c():e}function sk(c){return Number(c.replace("s","000"))}function ik(c){return`${Yu} ${c}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok({appConfig:c,heartbeatServiceProvider:e},{fid:t}){const a=Xu(c),n=eh(c),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&n.append("x-firebase-client",l)}const s={fid:t,authVersion:Yu,appId:c.appId,sdkVersion:Ku},i={method:"POST",headers:n,body:JSON.stringify(s)},o=await ch(()=>fetch(a,i));if(o.ok){const l=await o.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ju(l.authToken)}}else throw await Zu("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(c){return new Promise(e=>{setTimeout(e,c)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(c){return btoa(String.fromCharCode(...c)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=/^[cdef][\w-]{21}$/,za="";function uk(){try{const c=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(c),c[0]=112+c[0]%16;const t=hk(c);return fk.test(t)?t:za}catch{return za}}function hk(c){return lk(c).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(c){return`${c.appName}!${c.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=new Map;function nh(c,e){const t=tt(c);rh(t,e),dk(t,e)}function rh(c,e){const t=ah.get(c);if(t)for(const a of t)a(e)}function dk(c,e){const t=mk();t&&t.postMessage({key:c,fid:e}),pk()}let b4=null;function mk(){return!b4&&"BroadcastChannel"in self&&(b4=new BroadcastChannel("[Firebase] FID Change"),b4.onmessage=c=>{rh(c.data.key,c.data.fid)}),b4}function pk(){ah.size===0&&b4&&(b4.close(),b4=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk="firebase-installations-database",gk=1,O4="firebase-installations-store";let s5=null;function h7(){return s5||(s5=XA(vk,gk,{upgrade:(c,e)=>{switch(e){case 0:c.createObjectStore(O4)}}})),s5}async function K8(c,e){const t=tt(c),n=(await h7()).transaction(O4,"readwrite"),r=n.objectStore(O4),s=await r.get(t);return await r.put(e,t),await n.done,(!s||s.fid!==e.fid)&&nh(c,e.fid),e}async function sh(c){const e=tt(c),a=(await h7()).transaction(O4,"readwrite");await a.objectStore(O4).delete(e),await a.done}async function at(c,e){const t=tt(c),n=(await h7()).transaction(O4,"readwrite"),r=n.objectStore(O4),s=await r.get(t),i=e(s);return i===void 0?await r.delete(t):await r.put(i,t),await n.done,i&&(!s||s.fid!==i.fid)&&nh(c,i.fid),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d7(c){let e;const t=await at(c.appConfig,a=>{const n=Hk(a),r=zk(c,n);return e=r.registrationPromise,r.installationEntry});return t.fid===za?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Hk(c){const e=c||{fid:uk(),registrationStatus:0};return ih(e)}function zk(c,e){if(e.registrationStatus===0){if(!navigator.onLine){const n=Promise.reject(D4.create("app-offline"));return{installationEntry:e,registrationPromise:n}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=Vk(c,t);return{installationEntry:t,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ck(c)}:{installationEntry:e}}async function Vk(c,e){try{const t=await ok(c,e);return K8(c.appConfig,t)}catch(t){throw Qu(t)&&t.customData.serverCode===409?await sh(c.appConfig):await K8(c.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Ck(c){let e=await Yi(c.appConfig);for(;e.registrationStatus===1;)await th(100),e=await Yi(c.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:a}=await d7(c);return a||t}return e}function Yi(c){return at(c,e=>{if(!e)throw D4.create("installation-not-found");return ih(e)})}function ih(c){return Mk(c)?{fid:c.fid,registrationStatus:0}:c}function Mk(c){return c.registrationStatus===1&&c.registrationTime+Gu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yk({appConfig:c,heartbeatServiceProvider:e},t){const a=Lk(c,t),n=rk(c,t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&n.append("x-firebase-client",l)}const s={installation:{sdkVersion:Ku,appId:c.appId}},i={method:"POST",headers:n,body:JSON.stringify(s)},o=await ch(()=>fetch(a,i));if(o.ok){const l=await o.json();return Ju(l)}else throw await Zu("Generate Auth Token",o)}function Lk(c,{fid:e}){return`${Xu(c)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m7(c,e=!1){let t;const a=await at(c.appConfig,r=>{if(!oh(r))throw D4.create("not-registered");const s=r.authToken;if(!e&&xk(s))return r;if(s.requestStatus===1)return t=wk(c,e),r;{if(!navigator.onLine)throw D4.create("app-offline");const i=Nk(r);return t=bk(c,i),i}});return t?await t:a.authToken}async function wk(c,e){let t=await Qi(c.appConfig);for(;t.authToken.requestStatus===1;)await th(100),t=await Qi(c.appConfig);const a=t.authToken;return a.requestStatus===0?m7(c,e):a}function Qi(c){return at(c,e=>{if(!oh(e))throw D4.create("not-registered");const t=e.authToken;return Ak(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function bk(c,e){try{const t=await yk(c,e),a=Object.assign(Object.assign({},e),{authToken:t});return await K8(c.appConfig,a),t}catch(t){if(Qu(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await sh(c.appConfig);else{const a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await K8(c.appConfig,a)}throw t}}function oh(c){return c!==void 0&&c.registrationStatus===2}function xk(c){return c.requestStatus===2&&!Sk(c)}function Sk(c){const e=Date.now();return e<c.creationTime||c.creationTime+c.expiresIn<e+ck}function Nk(c){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},c),{authToken:e})}function Ak(c){return c.requestStatus===1&&c.requestTime+Gu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(c){const e=c,{installationEntry:t,registrationPromise:a}=await d7(e);return a?a.catch(console.error):m7(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(c,e=!1){const t=c;return await _k(t),(await m7(t,e)).token}async function _k(c){const{registrationPromise:e}=await d7(c);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(c){if(!c||!c.options)throw i5("App Configuration");if(!c.name)throw i5("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!c.options[t])throw i5(t);return{appName:c.name,projectId:c.options.projectId,apiKey:c.options.apiKey,appId:c.options.appId}}function i5(c){return D4.create("missing-app-config-values",{valueName:c})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="installations",Ik="installations-internal",Pk=c=>{const e=c.getProvider("app").getImmediate(),t=Ek(e),a=j4(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Rk=c=>{const e=c.getProvider("app").getImmediate(),t=j4(e,lh).getImmediate();return{getId:()=>kk(t),getToken:n=>Tk(t,n)}};function Dk(){f3(new G1(lh,Pk,"PUBLIC")),f3(new G1(Ik,Rk,"PRIVATE"))}Dk();R1(Wu,u7);R1(Wu,u7,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y8="analytics",Ok="firebase_id",Fk="origin",Bk=60*1e3,Uk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",p7="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=new wc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},S1=new q4("analytics","Analytics",$k);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(c){if(!c.startsWith(p7)){const e=S1.create("invalid-gtag-resource",{gtagURL:c});return y1.warn(e.message),""}return c}function fh(c){return Promise.all(c.map(e=>e.catch(t=>t)))}function jk(c,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(c,e)),t}function Wk(c,e){const t=jk("firebase-js-sdk-policy",{createScriptURL:qk}),a=document.createElement("script"),n=`${p7}?l=${c}&id=${e}`;a.src=t?t==null?void 0:t.createScriptURL(n):n,a.async=!0,document.head.appendChild(a)}function Gk(c){let e=[];return Array.isArray(window[c])?e=window[c]:window[c]=e,e}async function Kk(c,e,t,a,n,r){const s=a[n];try{if(s)await e[s];else{const o=(await fh(t)).find(l=>l.measurementId===n);o&&await e[o.appId]}}catch(i){y1.error(i)}c("config",n,r)}async function Yk(c,e,t,a,n){try{let r=[];if(n&&n.send_to){let s=n.send_to;Array.isArray(s)||(s=[s]);const i=await fh(t);for(const o of s){const l=i.find(u=>u.measurementId===o),f=l&&e[l.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),c("event",a,n||{})}catch(r){y1.error(r)}}function Qk(c,e,t,a){async function n(r,...s){try{if(r==="event"){const[i,o]=s;await Yk(c,e,t,i,o)}else if(r==="config"){const[i,o]=s;await Kk(c,e,t,a,i,o)}else if(r==="consent"){const[i]=s;c("consent","update",i)}else if(r==="get"){const[i,o,l]=s;c("get",i,o,l)}else if(r==="set"){const[i]=s;c("set",i)}else c(r,...s)}catch(i){y1.error(i)}}return n}function Xk(c,e,t,a,n){let r=function(...s){window[a].push(arguments)};return window[n]&&typeof window[n]=="function"&&(r=window[n]),window[n]=Qk(r,c,e,t),{gtagCore:r,wrappedGtag:window[n]}}function Jk(c){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(p7)&&t.src.includes(c))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=30,eT=1e3;class cT{constructor(e={},t=eT){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const uh=new cT;function tT(c){return new Headers({Accept:"application/json","x-goog-api-key":c})}async function aT(c){var e;const{appId:t,apiKey:a}=c,n={method:"GET",headers:tT(a)},r=Uk.replace("{app-id}",t),s=await fetch(r,n);if(s.status!==200&&s.status!==304){let i="";try{const o=await s.json();!((e=o.error)===null||e===void 0)&&e.message&&(i=o.error.message)}catch{}throw S1.create("config-fetch-failed",{httpStatus:s.status,responseMessage:i})}return s.json()}async function nT(c,e=uh,t){const{appId:a,apiKey:n,measurementId:r}=c.options;if(!a)throw S1.create("no-app-id");if(!n){if(r)return{measurementId:r,appId:a};throw S1.create("no-api-key")}const s=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},i=new iT;return setTimeout(async()=>{i.abort()},t!==void 0?t:Bk),hh({appId:a,apiKey:n,measurementId:r},s,i,e)}async function hh(c,{throttleEndTimeMillis:e,backoffCount:t},a,n=uh){var r;const{appId:s,measurementId:i}=c;try{await rT(a,e)}catch(o){if(i)return y1.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${o==null?void 0:o.message}]`),{appId:s,measurementId:i};throw o}try{const o=await aT(c);return n.deleteThrottleMetadata(s),o}catch(o){const l=o;if(!sT(l)){if(n.deleteThrottleMetadata(s),i)return y1.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:i};throw o}const f=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?qs(t,n.intervalMillis,Zk):qs(t,n.intervalMillis),u={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return n.setThrottleMetadata(s,u),y1.debug(`Calling attemptFetch again in ${f} millis`),hh(c,u,a,n)}}function rT(c,e){return new Promise((t,a)=>{const n=Math.max(e-Date.now(),0),r=setTimeout(t,n);c.addEventListener(()=>{clearTimeout(r),a(S1.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function sT(c){if(!(c instanceof Q1)||!c.customData)return!1;const e=Number(c.customData.httpStatus);return e===429||e===500||e===503||e===504}class iT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function oT(c,e,t,a,n){if(n&&n.global){c("event",t,a);return}else{const r=await e,s=Object.assign(Object.assign({},a),{send_to:r});c("event",t,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lT(){if(Ll())try{await wl()}catch(c){return y1.warn(S1.create("indexeddb-unavailable",{errorInfo:c==null?void 0:c.toString()}).message),!1}else return y1.warn(S1.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fT(c,e,t,a,n,r,s){var i;const o=nT(c);o.then(d=>{t[d.measurementId]=d.appId,c.options.measurementId&&d.measurementId!==c.options.measurementId&&y1.warn(`The measurement ID in the local Firebase config (${c.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>y1.error(d)),e.push(o);const l=lT().then(d=>{if(d)return a.getId()}),[f,u]=await Promise.all([o,l]);Jk(r)||Wk(r,f.measurementId),n("js",new Date);const h=(i=s==null?void 0:s.config)!==null&&i!==void 0?i:{};return h[Fk]="firebase",h.update=!0,u!=null&&(h[Ok]=u),n("config",f.measurementId,h),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.app=e}_delete(){return delete Me[this.app.options.appId],Promise.resolve()}}let Me={},Xi=[];const Ji={};let o5="dataLayer",hT="gtag",Zi,dh,e9=!1;function dT(){const c=[];if(yl()&&c.push("This is a browser extension environment."),lw()||c.push("Cookies are not available."),c.length>0){const e=c.map((a,n)=>`(${n+1}) ${a}`).join(" "),t=S1.create("invalid-analytics-context",{errorInfo:e});y1.warn(t.message)}}function mT(c,e,t){dT();const a=c.options.appId;if(!a)throw S1.create("no-app-id");if(!c.options.apiKey)if(c.options.measurementId)y1.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${c.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw S1.create("no-api-key");if(Me[a]!=null)throw S1.create("already-exists",{id:a});if(!e9){Gk(o5);const{wrappedGtag:r,gtagCore:s}=Xk(Me,Xi,Ji,o5,hT);dh=r,Zi=s,e9=!0}return Me[a]=fT(c,Xi,Ji,e,Zi,o5,t),new uT(c)}function pT(c=hn()){c=n1(c);const e=j4(c,Y8);return e.isInitialized()?e.getImmediate():vT(c)}function vT(c,e={}){const t=j4(c,Y8);if(t.isInitialized()){const n=t.getImmediate();if(Ie(e,t.getOptions()))return n;throw S1.create("already-initialized")}return t.initialize({options:e})}function gT(c,e,t,a){c=n1(c),oT(dh,Me[c.app.options.appId],e,t,a).catch(n=>y1.error(n))}const c9="@firebase/analytics",t9="0.10.0";function HT(){f3(new G1(Y8,(e,{options:t})=>{const a=e.getProvider("app").getImmediate(),n=e.getProvider("installations-internal").getImmediate();return mT(a,n,t)},"PUBLIC")),f3(new G1("analytics-internal",c,"PRIVATE")),R1(c9,t9),R1(c9,t9,"esm2017");function c(e){try{const t=e.getProvider(Y8).getImmediate();return{logEvent:(a,n,r)=>gT(t,a,n,r)}}catch(t){throw S1.create("interop-component-reg-failed",{reason:t})}}}HT();function v7(c,e){var t={};for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&e.indexOf(a)<0&&(t[a]=c[a]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(c);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(c,a[n])&&(t[a[n]]=c[a[n]]);return t}function mh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zT=mh,ph=new q4("auth","Firebase",mh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q8=new wc("@firebase/auth");function VT(c,...e){Q8.logLevel<=m2.WARN&&Q8.warn(`Auth (${R6}): ${c}`,...e)}function z8(c,...e){Q8.logLevel<=m2.ERROR&&Q8.error(`Auth (${R6}): ${c}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(c,...e){throw g7(c,...e)}function i3(c,...e){return g7(c,...e)}function CT(c,e,t){const a=Object.assign(Object.assign({},zT()),{[e]:t});return new q4("auth","Firebase",a).create(e,{appName:c.name})}function g7(c,...e){if(typeof c!="string"){const t=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=c.name),c._errorFactory.create(t,...a)}return ph.create(c,...e)}function e2(c,e,...t){if(!c)throw g7(e,...t)}function z3(c){const e="INTERNAL ASSERTION FAILED: "+c;throw z8(e),new Error(e)}function b3(c,e){c||z3(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(){var c;return typeof self<"u"&&((c=self.location)===null||c===void 0?void 0:c.href)||""}function MT(){return a9()==="http:"||a9()==="https:"}function a9(){var c;return typeof self<"u"&&((c=self.location)===null||c===void 0?void 0:c.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MT()||yl()||"connection"in navigator)?navigator.onLine:!0}function LT(){if(typeof navigator>"u")return null;const c=navigator;return c.languages&&c.languages[0]||c.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,t){this.shortDelay=e,this.longDelay=t,b3(t>e,"Short delay should be less than long delay!"),this.isMobile=sw()||iw()}get(){return yT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H7(c,e){b3(c.emulator,"Emulator should always be set here");const{url:t}=c.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{static initialize(e,t,a){this.fetchImpl=e,t&&(this.headersImpl=t),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;z3("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;z3("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;z3("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=new y0(3e4,6e4);function $6(c,e){return c.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:c.tenantId}):e}async function q6(c,e,t,a,n={}){return gh(c,n,async()=>{let r={},s={};a&&(e==="GET"?s=a:r={body:JSON.stringify(a)});const i=s0(Object.assign({key:c.config.apiKey},s)).slice(1),o=await c._getAdditionalHeaders();return o["Content-Type"]="application/json",c.languageCode&&(o["X-Firebase-Locale"]=c.languageCode),vh.fetch()(Hh(c,c.config.apiHost,t,i),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},r))})}async function gh(c,e,t){c._canInitEmulator=!1;const a=Object.assign(Object.assign({},wT),e);try{const n=new xT(c),r=await Promise.race([t(),n.promise]);n.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw c8(c,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const i=r.ok?s.errorMessage:s.error.message,[o,l]=i.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw c8(c,"credential-already-in-use",s);if(o==="EMAIL_EXISTS")throw c8(c,"email-already-in-use",s);if(o==="USER_DISABLED")throw c8(c,"user-disabled",s);const f=a[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw CT(c,f,l);Y1(c,f)}}catch(n){if(n instanceof Q1)throw n;Y1(c,"network-request-failed",{message:String(n)})}}async function L0(c,e,t,a,n={}){const r=await q6(c,e,t,a,n);return"mfaPendingCredential"in r&&Y1(c,"multi-factor-auth-required",{_serverResponse:r}),r}function Hh(c,e,t,a){const n=`${e}${t}?${a}`;return c.config.emulator?H7(c.config,n):`${c.config.apiScheme}://${n}`}class xT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,a)=>{this.timer=setTimeout(()=>a(i3(this.auth,"network-request-failed")),bT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function c8(c,e,t){const a={appName:c.name};t.email&&(a.email=t.email),t.phoneNumber&&(a.phoneNumber=t.phoneNumber);const n=i3(c,e,a);return n.customData._tokenResponse=t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(c,e){return q6(c,"POST","/v1/accounts:delete",e)}async function NT(c,e){return q6(c,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(c){if(c)try{const e=new Date(Number(c));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AT(c,e=!1){const t=n1(c),a=await t.getIdToken(e),n=z7(a);e2(n&&n.exp&&n.auth_time&&n.iat,t.auth,"internal-error");const r=typeof n.firebase=="object"?n.firebase:void 0,s=r==null?void 0:r.sign_in_provider;return{claims:n,token:a,authTime:ye(l5(n.auth_time)),issuedAtTime:ye(l5(n.iat)),expirationTime:ye(l5(n.exp)),signInProvider:s||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function l5(c){return Number(c)*1e3}function z7(c){const[e,t,a]=c.split(".");if(e===void 0||t===void 0||a===void 0)return z8("JWT malformed, contained fewer than 3 sections"),null;try{const n=zl(t);return n?JSON.parse(n):(z8("Failed to decode base64 JWT payload"),null)}catch(n){return z8("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function kT(c){const e=z7(c);return e2(e,"internal-error"),e2(typeof e.exp<"u","internal-error"),e2(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(c,e,t=!1){if(t)return e;try{return await e}catch(a){throw a instanceof Q1&&TT(a)&&c.auth.currentUser===c&&await c.auth.signOut(),a}}function TT({code:c}){return c==="auth/user-disabled"||c==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const n=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ye(this.lastLoginAt),this.creationTime=ye(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X8(c){var e;const t=c.auth,a=await c.getIdToken(),n=await Xe(c,NT(t,{idToken:a}));e2(n==null?void 0:n.users.length,t,"internal-error");const r=n.users[0];c._notifyReloadListener(r);const s=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?PT(r.providerUserInfo):[],i=IT(c.providerData,s),o=c.isAnonymous,l=!(c.email&&r.passwordHash)&&!(i!=null&&i.length),f=o?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new zh(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(c,u)}async function ET(c){const e=n1(c);await X8(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IT(c,e){return[...c.filter(a=>!e.some(n=>n.providerId===a.providerId)),...e]}function PT(c){return c.map(e=>{var{providerId:t}=e,a=v7(e,["providerId"]);return{providerId:t,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(c,e){const t=await gh(c,{},async()=>{const a=s0({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:r}=c.config,s=Hh(c,n,"/v1/token",`key=${r}`),i=await c._getAdditionalHeaders();return i["Content-Type"]="application/x-www-form-urlencoded",vh.fetch()(s,{method:"POST",headers:i,body:a})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){e2(e.idToken,"internal-error"),e2(typeof e.idToken<"u","internal-error"),e2(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return e2(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:a,refreshToken:n,expiresIn:r}=await RT(e,t);this.updateTokensAndExpiration(a,n,Number(r))}updateTokensAndExpiration(e,t,a){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,t){const{refreshToken:a,accessToken:n,expirationTime:r}=t,s=new Je;return a&&(e2(typeof a=="string","internal-error",{appName:e}),s.refreshToken=a),n&&(e2(typeof n=="string","internal-error",{appName:e}),s.accessToken=n),r&&(e2(typeof r=="number","internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Je,this.toJSON())}_performRefresh(){return z3("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R3(c,e){e2(typeof c=="string"||typeof c>"u","internal-error",{appName:e})}class T4{constructor(e){var{uid:t,auth:a,stsTokenManager:n}=e,r=v7(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _T(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=a,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new zh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Xe(this,this.stsTokenManager.getToken(this.auth,e));return e2(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return AT(this,e)}reload(){return ET(this)}_assign(e){this!==e&&(e2(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new T4(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){e2(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),t&&await X8(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xe(this,ST(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var a,n,r,s,i,o,l,f;const u=(a=t.displayName)!==null&&a!==void 0?a:void 0,h=(n=t.email)!==null&&n!==void 0?n:void 0,d=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,g=(s=t.photoURL)!==null&&s!==void 0?s:void 0,z=(i=t.tenantId)!==null&&i!==void 0?i:void 0,M=(o=t._redirectEventId)!==null&&o!==void 0?o:void 0,H=(l=t.createdAt)!==null&&l!==void 0?l:void 0,V=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:w,isAnonymous:R,providerData:J,stsTokenManager:X}=t;e2(A&&X,e,"internal-error");const T=Je.fromJSON(this.name,X);e2(typeof A=="string",e,"internal-error"),R3(u,e.name),R3(h,e.name),e2(typeof w=="boolean",e,"internal-error"),e2(typeof R=="boolean",e,"internal-error"),R3(d,e.name),R3(g,e.name),R3(z,e.name),R3(M,e.name),R3(H,e.name),R3(V,e.name);const P=new T4({uid:A,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:R,photoURL:g,phoneNumber:d,tenantId:z,stsTokenManager:T,createdAt:H,lastLoginAt:V});return J&&Array.isArray(J)&&(P.providerData=J.map(Z=>Object.assign({},Z))),M&&(P._redirectEventId=M),P}static async _fromIdTokenResponse(e,t,a=!1){const n=new Je;n.updateFromServerResponse(t);const r=new T4({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:a});return await X8(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n9=new Map;function V3(c){b3(c instanceof Function,"Expected a class definition");let e=n9.get(c);return e?(b3(e instanceof c,"Instance stored in cache mismatched with class"),e):(e=new c,n9.set(c,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vh.type="NONE";const r9=Vh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V8(c,e,t){return`firebase:${c}:${e}:${t}`}class g6{constructor(e,t,a){this.persistence=e,this.auth=t,this.userKey=a;const{config:n,name:r}=this.auth;this.fullUserKey=V8(this.userKey,n.apiKey,r),this.fullPersistenceKey=V8("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?T4._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,a="authUser"){if(!t.length)return new g6(V3(r9),e,a);const n=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=n[0]||V3(r9);const s=V8(a,e.config.apiKey,e.name);let i=null;for(const l of t)try{const f=await l._get(s);if(f){const u=T4._fromJSON(e,f);l!==r&&(i=u),r=l;break}}catch{}const o=n.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!o.length?new g6(r,e,a):(r=o[0],i&&await r._set(s,i.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(s)}catch{}})),new g6(r,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s9(c){const e=c.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ch(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wh(e))return"Blackberry";if(bh(e))return"Webos";if(V7(e))return"Safari";if((e.includes("chrome/")||Mh(e))&&!e.includes("edge/"))return"Chrome";if(Lh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=c.match(t);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function Ch(c=m1()){return/firefox\//i.test(c)}function V7(c=m1()){const e=c.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mh(c=m1()){return/crios\//i.test(c)}function yh(c=m1()){return/iemobile/i.test(c)}function Lh(c=m1()){return/android/i.test(c)}function wh(c=m1()){return/blackberry/i.test(c)}function bh(c=m1()){return/webos/i.test(c)}function nt(c=m1()){return/iphone|ipad|ipod/i.test(c)||/macintosh/i.test(c)&&/mobile/i.test(c)}function DT(c=m1()){var e;return nt(c)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OT(){return ow()&&document.documentMode===10}function xh(c=m1()){return nt(c)||Lh(c)||bh(c)||wh(c)||/windows phone/i.test(c)||yh(c)}function FT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(c,e=[]){let t;switch(c){case"Browser":t=s9(m1());break;case"Worker":t=`${s9(m1())}-${c}`;break;default:t=c}const a=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${R6}/${a}`}async function Nh(c,e){return q6(c,"GET","/v2/recaptchaConfig",$6(c,e))}function i9(c){return c!==void 0&&c.enterprise!==void 0}class Ah{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(){var c,e;return(e=(c=document.getElementsByTagName("head"))===null||c===void 0?void 0:c[0])!==null&&e!==void 0?e:document}function kh(c){return new Promise((e,t)=>{const a=document.createElement("script");a.setAttribute("src",c),a.onload=e,a.onerror=n=>{const r=i3("internal-error");r.customData=n,t(r)},a.type="text/javascript",a.charset="UTF-8",BT().appendChild(a)})}function UT(c){return`__${c}${Math.floor(Math.random()*1e6)}`}const $T="https://www.google.com/recaptcha/enterprise.js?render=",qT="recaptcha-enterprise",jT="NO_RECAPTCHA";class Th{constructor(e){this.type=qT,this.auth=j6(e)}async verify(e="verify",t=!1){async function a(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(s,i)=>{Nh(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)i(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ah(o);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,s(l.siteKey)}}).catch(o=>{i(o)})})}function n(r,s,i){const o=window.grecaptcha;i9(o)?o.enterprise.ready(()=>{o.enterprise.execute(r,{action:e}).then(l=>{s(l)}).catch(()=>{s(jT)})}):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,s)=>{a(this.auth).then(i=>{if(!t&&i9(window.grecaptcha))n(i,r,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}kh($T+i).then(()=>{n(i,r,s)}).catch(o=>{s(o)})}}).catch(i=>{s(i)})})}}async function J8(c,e,t,a=!1){const n=new Th(c);let r;try{r=await n.verify(t)}catch{r=await n.verify(t,!0)}const s=Object.assign({},e);return a?Object.assign(s,{captchaResp:r}):Object.assign(s,{captchaResponse:r}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const a=r=>new Promise((s,i)=>{try{const o=e(r);s(o)}catch(o){i(o)}});a.onAbort=t,this.queue.push(a);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const a of this.queue)await a(e),a.onAbort&&t.push(a.onAbort)}catch(a){t.reverse();for(const n of t)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,t,a,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=a,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new o9(this),this.idTokenSubscription=new o9(this),this.beforeStateQueue=new WT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ph,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=V3(t)),this._initializationPromise=this.queue(async()=>{var a,n;if(!this._deleted&&(this.persistenceManager=await g6.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((n=this.currentUser)===null||n===void 0?void 0:n.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const a=await this.assertedPersistence.getCurrentUser();let n=a,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,i=n==null?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o!=null&&o.user)&&(n=o.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return e2(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await X8(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?n1(e):null;return t&&e2(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&e2(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(V3(e))})}async initializeRecaptchaConfig(){const e=await Nh(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ah(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Th(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new q4("auth","Firebase",e())}onAuthStateChanged(e,t,a){return this.registerStateListener(this.authStateSubscription,e,t,a)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,a){return this.registerStateListener(this.idTokenSubscription,e,t,a)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const a=await this.getOrInitRedirectPersistenceManager(t);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&V3(e)||this._popupRedirectResolver;e2(t,this,"argument-error"),this.redirectPersistenceManager=await g6.create(this,[V3(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,a;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,a,n){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return e2(s,this,"internal-error"),s.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,a,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return e2(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(t["X-Firebase-Client"]=a);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&VT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function j6(c){return n1(c)}class o9{constructor(e){this.auth=e,this.observer=null,this.addObserver=mw(t=>this.observer=t)}get next(){return e2(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(c,e){const t=j4(c,"auth");if(t.isInitialized()){const n=t.getImmediate(),r=t.getOptions();if(Ie(r,e??{}))return n;Y1(n,"already-initialized")}return t.initialize({options:e})}function YT(c,e){const t=(e==null?void 0:e.persistence)||[],a=(Array.isArray(t)?t:[t]).map(V3);e!=null&&e.errorMap&&c._updateErrorMap(e.errorMap),c._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function QT(c,e,t){const a=j6(c);e2(a._canInitEmulator,a,"emulator-config-failed"),e2(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const n=!!(t!=null&&t.disableWarnings),r=_h(e),{host:s,port:i}=XT(e),o=i===null?"":`:${i}`;a.config.emulator={url:`${r}//${s}${o}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:s,port:i,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:n})}),n||JT()}function _h(c){const e=c.indexOf(":");return e<0?"":c.substr(0,e+1)}function XT(c){const e=_h(c),t=/(\/\/)?([^?#/]+)/.exec(c.substr(e.length));if(!t)return{host:"",port:null};const a=t[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(a);if(n){const r=n[1];return{host:r,port:l9(a.substr(r.length+1))}}else{const[r,s]=a.split(":");return{host:r,port:l9(s)}}}function l9(c){if(!c)return null;const e=Number(c);return isNaN(e)?null:e}function JT(){function c(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",c):c())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C7{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return z3("not implemented")}_getIdTokenResponse(e){return z3("not implemented")}_linkToIdToken(e,t){return z3("not implemented")}_getReauthenticationResolver(e){return z3("not implemented")}}async function ZT(c,e){return q6(c,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f5(c,e){return L0(c,"POST","/v1/accounts:signInWithPassword",$6(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e_(c,e){return L0(c,"POST","/v1/accounts:signInWithEmailLink",$6(c,e))}async function c_(c,e){return L0(c,"POST","/v1/accounts:signInWithEmailLink",$6(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends C7{constructor(e,t,a,n=null){super("password",a),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new Ze(e,t,"password")}static _fromEmailAndCode(e,t,a=null){return new Ze(e,t,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const a={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const n=await J8(e,a,"signInWithPassword");return f5(e,n)}else return f5(e,a).catch(async n=>{if(n.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await J8(e,a,"signInWithPassword");return f5(e,r)}else return Promise.reject(n)});case"emailLink":return e_(e,{email:this._email,oobCode:this._password});default:Y1(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ZT(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return c_(e,{idToken:t,email:this._email,oobCode:this._password});default:Y1(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H6(c,e){return L0(c,"POST","/v1/accounts:signInWithIdp",$6(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="http://localhost";class F4 extends C7{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new F4(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Y1("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:n}=t,r=v7(t,["providerId","signInMethod"]);if(!a||!n)return null;const s=new F4(a,n);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return H6(e,t)}_linkToIdToken(e,t){const a=this.buildRequest();return a.idToken=t,H6(e,a)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,H6(e,t)}buildRequest(){const e={requestUri:t_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=s0(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(c){switch(c){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n_(c){const e=ce(te(c)).link,t=e?ce(te(e)).deep_link_id:null,a=ce(te(c)).deep_link_id;return(a?ce(te(a)).link:null)||a||t||e||c}class M7{constructor(e){var t,a,n,r,s,i;const o=ce(te(e)),l=(t=o.apiKey)!==null&&t!==void 0?t:null,f=(a=o.oobCode)!==null&&a!==void 0?a:null,u=a_((n=o.mode)!==null&&n!==void 0?n:null);e2(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=(r=o.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(s=o.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(i=o.tenantId)!==null&&i!==void 0?i:null}static parseLink(e){const t=n_(e);try{return new M7(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W6{constructor(){this.providerId=W6.PROVIDER_ID}static credential(e,t){return Ze._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const a=M7.parseLink(t);return e2(a,"argument-error"),Ze._fromEmailAndCode(e,a.code,a.tenantId)}}W6.PROVIDER_ID="password";W6.EMAIL_PASSWORD_SIGN_IN_METHOD="password";W6.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0 extends Eh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U3 extends w0{constructor(){super("facebook.com")}static credential(e){return F4._fromParams({providerId:U3.PROVIDER_ID,signInMethod:U3.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return U3.credentialFromTaggedObject(e)}static credentialFromError(e){return U3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return U3.credential(e.oauthAccessToken)}catch{return null}}}U3.FACEBOOK_SIGN_IN_METHOD="facebook.com";U3.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $3 extends w0{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return F4._fromParams({providerId:$3.PROVIDER_ID,signInMethod:$3.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $3.credentialFromTaggedObject(e)}static credentialFromError(e){return $3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:a}=e;if(!t&&!a)return null;try{return $3.credential(t,a)}catch{return null}}}$3.GOOGLE_SIGN_IN_METHOD="google.com";$3.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q3 extends w0{constructor(){super("github.com")}static credential(e){return F4._fromParams({providerId:q3.PROVIDER_ID,signInMethod:q3.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return q3.credentialFromTaggedObject(e)}static credentialFromError(e){return q3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return q3.credential(e.oauthAccessToken)}catch{return null}}}q3.GITHUB_SIGN_IN_METHOD="github.com";q3.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3 extends w0{constructor(){super("twitter.com")}static credential(e,t){return F4._fromParams({providerId:j3.PROVIDER_ID,signInMethod:j3.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return j3.credentialFromTaggedObject(e)}static credentialFromError(e){return j3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:a}=e;if(!t||!a)return null;try{return j3.credential(t,a)}catch{return null}}}j3.TWITTER_SIGN_IN_METHOD="twitter.com";j3.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u5(c,e){return L0(c,"POST","/v1/accounts:signUp",$6(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,a,n=!1){const r=await T4._fromIdTokenResponse(e,a,n),s=f9(a);return new B4({user:r,providerId:s,_tokenResponse:a,operationType:t})}static async _forOperation(e,t,a){await e._updateTokensIfNecessary(a,!0);const n=f9(a);return new B4({user:e,providerId:n,_tokenResponse:a,operationType:t})}}function f9(c){return c.providerId?c.providerId:"phoneNumber"in c?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z8 extends Q1{constructor(e,t,a,n){var r;super(t.code,t.message),this.operationType=a,this.user=n,Object.setPrototypeOf(this,Z8.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,t,a,n){return new Z8(e,t,a,n)}}function Ih(c,e,t,a){return(e==="reauthenticate"?t._getReauthenticationResolver(c):t._getIdTokenResponse(c)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Z8._fromErrorAndOperation(c,r,e,a):r})}async function r_(c,e,t=!1){const a=await Xe(c,e._linkToIdToken(c.auth,await c.getIdToken()),t);return B4._forOperation(c,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(c,e,t=!1){const{auth:a}=c,n="reauthenticate";try{const r=await Xe(c,Ih(a,n,e,c),t);e2(r.idToken,a,"internal-error");const s=z7(r.idToken);e2(s,a,"internal-error");const{sub:i}=s;return e2(c.uid===i,a,"user-mismatch"),B4._forOperation(c,n,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Y1(a,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ph(c,e,t=!1){const a="signIn",n=await Ih(c,a,e),r=await B4._fromIdTokenResponse(c,a,n);return t||await c._updateCurrentUser(r.user),r}async function i_(c,e){return Ph(j6(c),e)}async function o_(c,e,t){var a;const n=j6(c),r={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let s;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.emailPasswordEnabled){const l=await J8(n,r,"signUpPassword");s=u5(n,l)}else s=u5(n,r).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const f=await J8(n,r,"signUpPassword");return u5(n,f)}else return Promise.reject(l)});const i=await s.catch(l=>Promise.reject(l)),o=await B4._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(o.user),o}function l_(c,e,t){return i_(n1(c),W6.credential(e,t))}function f_(c,e,t,a){return n1(c).onIdTokenChanged(e,t,a)}function u_(c,e,t){return n1(c).beforeAuthStateChanged(e,t)}const ec="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ec,"1"),this.storage.removeItem(ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(){const c=m1();return V7(c)||nt(c)}const d_=1e3,m_=10;class Dh extends Rh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=h_()&&FT(),this.fallbackToPolling=xh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const a=this.storage.getItem(t),n=this.localCache[t];a!==n&&e(t,n,a)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((s,i,o)=>{this.notifyListeners(s,o)});return}const a=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(a);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(a,e.newValue):this.storage.removeItem(a);else if(this.localCache[a]===e.newValue&&!t)return}const n=()=>{const s=this.storage.getItem(a);!t&&this.localCache[a]===s||this.notifyListeners(a,s)},r=this.storage.getItem(a);OT()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,m_):n()}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const n of Array.from(a))n(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:a}),!0)})},d_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dh.type="LOCAL";const p_=Dh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh extends Rh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Oh.type="SESSION";const Fh=Oh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(c){return Promise.all(c.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(n=>n.isListeningto(e));if(t)return t;const a=new rt(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:a,eventType:n,data:r}=t.data,s=this.handlersMap[n];if(!(s!=null&&s.size))return;t.ports[0].postMessage({status:"ack",eventId:a,eventType:n});const i=Array.from(s).map(async l=>l(t.origin,r)),o=await v_(i);t.ports[0].postMessage({status:"done",eventId:a,eventType:n,response:o})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y7(c="",e=10){let t="";for(let a=0;a<e;a++)t+=Math.floor(Math.random()*10);return c+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,a=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,s;return new Promise((i,o)=>{const l=y7("",20);n.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},a);s={messageChannel:n,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),i(h.data.response);break;default:clearTimeout(f),clearTimeout(r),o(new Error("invalid_response"));break}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o3(){return window}function H_(c){o3().location.href=c}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(){return typeof o3().WorkerGlobalScope<"u"&&typeof o3().importScripts=="function"}async function z_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V_(){var c;return((c=navigator==null?void 0:navigator.serviceWorker)===null||c===void 0?void 0:c.controller)||null}function C_(){return Bh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="firebaseLocalStorageDb",M_=1,cc="firebaseLocalStorage",$h="fbase_key";class b0{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function st(c,e){return c.transaction([cc],e?"readwrite":"readonly").objectStore(cc)}function y_(){const c=indexedDB.deleteDatabase(Uh);return new b0(c).toPromise()}function Ca(){const c=indexedDB.open(Uh,M_);return new Promise((e,t)=>{c.addEventListener("error",()=>{t(c.error)}),c.addEventListener("upgradeneeded",()=>{const a=c.result;try{a.createObjectStore(cc,{keyPath:$h})}catch(n){t(n)}}),c.addEventListener("success",async()=>{const a=c.result;a.objectStoreNames.contains(cc)?e(a):(a.close(),await y_(),e(await Ca()))})})}async function u9(c,e,t){const a=st(c,!0).put({[$h]:e,value:t});return new b0(a).toPromise()}async function L_(c,e){const t=st(c,!1).get(e),a=await new b0(t).toPromise();return a===void 0?null:a.value}function h9(c,e){const t=st(c,!0).delete(e);return new b0(t).toPromise()}const w_=800,b_=3;class qh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ca(),this.db)}async _withRetries(e){let t=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(t++>b_)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rt._getInstance(C_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await z_(),!this.activeServiceWorker)return;this.sender=new g_(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((t=a[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||V_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ca();return await u9(e,ec,"1"),await h9(e,ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(a=>u9(a,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(a=>L_(a,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>h9(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(n=>{const r=st(n,!1).getAll();return new b0(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],a=new Set;for(const{fbase_key:n,value:r}of e)a.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!a.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const n of Array.from(a))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qh.type="LOCAL";const x_=qh;new y0(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(c,e){return e?V3(e):(e2(c._popupRedirectResolver,c,"argument-error"),c._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L7 extends C7{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return H6(e,this._buildIdpRequest())}_linkToIdToken(e,t){return H6(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return H6(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function N_(c){return Ph(c.auth,new L7(c),c.bypassAuthState)}function A_(c){const{auth:e,user:t}=c;return e2(t,e,"internal-error"),s_(t,new L7(c),c.bypassAuthState)}async function k_(c){const{auth:e,user:t}=c;return e2(t,e,"internal-error"),r_(t,new L7(c),c.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,t,a,n,r=!1){this.auth=e,this.resolver=a,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:a,postBody:n,tenantId:r,error:s,type:i}=e;if(s){this.reject(s);return}const o={auth:this.auth,requestUri:t,sessionId:a,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(i)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return N_;case"linkViaPopup":case"linkViaRedirect":return k_;case"reauthViaPopup":case"reauthViaRedirect":return A_;default:Y1(this.auth,"internal-error")}}resolve(e){b3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=new y0(2e3,1e4);class s6 extends jh{constructor(e,t,a,n,r){super(e,t,n,r),this.provider=a,this.authWindow=null,this.pollId=null,s6.currentPopupAction&&s6.currentPopupAction.cancel(),s6.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return e2(e,this.auth,"internal-error"),e}async onExecution(){b3(this.filter.length===1,"Popup operations only handle one event");const e=y7();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(i3(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(i3(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,s6.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,a;if(!((a=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(i3(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,T_.get())};e()}}s6.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="pendingRedirect",C8=new Map;class E_ extends jh{constructor(e,t,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,a),this.eventId=null}async execute(){let e=C8.get(this.auth._key());if(!e){try{const a=await I_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(t){e=()=>Promise.reject(t)}C8.set(this.auth._key(),e)}return this.bypassAuthState||C8.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function I_(c,e){const t=D_(e),a=R_(c);if(!await a._isAvailable())return!1;const n=await a._get(t)==="true";return await a._remove(t),n}function P_(c,e){C8.set(c._key(),e)}function R_(c){return V3(c._redirectPersistence)}function D_(c){return V8(__,c.config.apiKey,c.name)}async function O_(c,e,t=!1){const a=j6(c),n=S_(a,e),s=await new E_(a,n,t).execute();return s&&!t&&(delete s.user._redirectEventId,await a._persistUserIfCurrent(s.user),await a._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=10*60*1e3;class B_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(t=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!U_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var a;if(e.error&&!Wh(e)){const n=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";t.onError(i3(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const a=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F_&&this.cachedEventUids.clear(),this.cachedEventUids.has(d9(e))}saveEventToCache(e){this.cachedEventUids.add(d9(e)),this.lastProcessedEventTime=Date.now()}}function d9(c){return[c.type,c.eventId,c.sessionId,c.tenantId].filter(e=>e).join("-")}function Wh({type:c,error:e}){return c==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function U_(c){switch(c.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wh(c);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $_(c,e={}){return q6(c,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,j_=/^https?/;async function W_(c){if(c.config.emulator)return;const{authorizedDomains:e}=await $_(c);for(const t of e)try{if(G_(t))return}catch{}Y1(c,"unauthorized-domain")}function G_(c){const e=Va(),{protocol:t,hostname:a}=new URL(e);if(c.startsWith("chrome-extension://")){const s=new URL(c);return s.hostname===""&&a===""?t==="chrome-extension:"&&c.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&s.hostname===a}if(!j_.test(t))return!1;if(q_.test(c))return a===c;const n=c.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=new y0(3e4,6e4);function m9(){const c=o3().___jsl;if(c!=null&&c.H){for(const e of Object.keys(c.H))if(c.H[e].r=c.H[e].r||[],c.H[e].L=c.H[e].L||[],c.H[e].r=[...c.H[e].L],c.CP)for(let t=0;t<c.CP.length;t++)c.CP[t]=null}}function Y_(c){return new Promise((e,t)=>{var a,n,r;function s(){m9(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{m9(),t(i3(c,"network-request-failed"))},timeout:K_.get()})}if(!((n=(a=o3().gapi)===null||a===void 0?void 0:a.iframes)===null||n===void 0)&&n.Iframe)e(gapi.iframes.getContext());else if(!((r=o3().gapi)===null||r===void 0)&&r.load)s();else{const i=UT("iframefcb");return o3()[i]=()=>{gapi.load?s():t(i3(c,"network-request-failed"))},kh(`https://apis.google.com/js/api.js?onload=${i}`).catch(o=>t(o))}}).catch(e=>{throw M8=null,e})}let M8=null;function Q_(c){return M8=M8||Y_(c),M8}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=new y0(5e3,15e3),J_="__/auth/iframe",Z_="emulator/auth/iframe",eE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tE(c){const e=c.config;e2(e.authDomain,c,"auth-domain-config-required");const t=e.emulator?H7(e,Z_):`https://${c.config.authDomain}/${J_}`,a={apiKey:e.apiKey,appName:c.name,v:R6},n=cE.get(c.config.apiHost);n&&(a.eid=n);const r=c._getFrameworks();return r.length&&(a.fw=r.join(",")),`${t}?${s0(a).slice(1)}`}async function aE(c){const e=await Q_(c),t=o3().gapi;return e2(t,c,"internal-error"),e.open({where:document.body,url:tE(c),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eE,dontclear:!0},a=>new Promise(async(n,r)=>{await a.restyle({setHideOnLeave:!1});const s=i3(c,"network-request-failed"),i=o3().setTimeout(()=>{r(s)},X_.get());function o(){o3().clearTimeout(i),n(a)}a.ping(o).then(o,()=>{r(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rE=500,sE=600,iE="_blank",oE="http://localhost";class p9{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lE(c,e,t,a=rE,n=sE){const r=Math.max((window.screen.availHeight-n)/2,0).toString(),s=Math.max((window.screen.availWidth-a)/2,0).toString();let i="";const o=Object.assign(Object.assign({},nE),{width:a.toString(),height:n.toString(),top:r,left:s}),l=m1().toLowerCase();t&&(i=Mh(l)?iE:t),Ch(l)&&(e=e||oE,o.scrollbars="yes");const f=Object.entries(o).reduce((h,[d,g])=>`${h}${d}=${g},`,"");if(DT(l)&&i!=="_self")return fE(e||"",i),new p9(null);const u=window.open(e||"",i,f);e2(u,c,"popup-blocked");try{u.focus()}catch{}return new p9(u)}function fE(c,e){const t=document.createElement("a");t.href=c,t.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="__/auth/handler",hE="emulator/auth/handler",dE=encodeURIComponent("fac");async function v9(c,e,t,a,n,r){e2(c.config.authDomain,c,"auth-domain-config-required"),e2(c.config.apiKey,c,"invalid-api-key");const s={apiKey:c.config.apiKey,appName:c.name,authType:t,redirectUrl:a,v:R6,eventId:n};if(e instanceof Eh){e.setDefaultLanguage(c.languageCode),s.providerId=e.providerId||"",dw(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(r||{}))s[f]=u}if(e instanceof w0){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(s.scopes=f.join(","))}c.tenantId&&(s.tid=c.tenantId);const i=s;for(const f of Object.keys(i))i[f]===void 0&&delete i[f];const o=await c._getAppCheckToken(),l=o?`#${dE}=${encodeURIComponent(o)}`:"";return`${mE(c)}?${s0(i).slice(1)}${l}`}function mE({config:c}){return c.emulator?H7(c,hE):`https://${c.authDomain}/${uE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h5="webStorageSupport";class pE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fh,this._completeRedirectFn=O_,this._overrideRedirectResult=P_}async _openPopup(e,t,a,n){var r;b3((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const s=await v9(e,t,a,Va(),n);return lE(e,s,y7())}async _openRedirect(e,t,a,n){await this._originValidation(e);const r=await v9(e,t,a,Va(),n);return H_(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:n,promise:r}=this.eventManagers[t];return n?Promise.resolve(n):(b3(r,"If manager is not set, promise should be"),r)}const a=this.initAndGetManager(e);return this.eventManagers[t]={promise:a},a.catch(()=>{delete this.eventManagers[t]}),a}async initAndGetManager(e){const t=await aE(e),a=new B_(e);return t.register("authEvent",n=>(e2(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:a.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=t,a}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(h5,{type:h5},n=>{var r;const s=(r=n==null?void 0:n[0])===null||r===void 0?void 0:r[h5];s!==void 0&&t(!!s),Y1(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=W_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xh()||V7()||nt()}}const vE=pE;var g9="@firebase/auth",H9="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){e2(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(c){switch(c){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zE(c){f3(new G1("auth",(e,{options:t})=>{const a=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:i}=a.options;e2(s&&!s.includes(":"),"invalid-api-key",{appName:a.name});const o={apiKey:s,authDomain:i,clientPlatform:c,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sh(c)},l=new GT(a,n,r,o);return YT(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,a)=>{e.getProvider("auth-internal").initialize()})),f3(new G1("auth-internal",e=>{const t=j6(e.getProvider("auth").getImmediate());return(a=>new gE(a))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),R1(g9,H9,HE(c)),R1(g9,H9,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=5*60,CE=Ml("authIdTokenMaxAge")||VE;let z9=null;const ME=c=>async e=>{const t=e&&await e.getIdTokenResult(),a=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(a&&a>CE)return;const n=t==null?void 0:t.token;z9!==n&&(z9=n,await fetch(c,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function yE(c=hn()){const e=j4(c,"auth");if(e.isInitialized())return e.getImmediate();const t=KT(c,{popupRedirectResolver:vE,persistence:[x_,p_,Fh]}),a=Ml("authTokenSyncURL");if(a){const r=ME(a);u_(t,r,()=>r(t.currentUser)),f_(t,s=>r(s))}const n=Vl("auth");return n&&QT(t,`http://${n}`),t}zE("Browser");const LE={apiKey:{}.VITE_API_KEYS,authDomain:{}.VITE_AUTH_DOMAIN,projectId:{}.VITE_PROJECT_ID,storageBucket:{}.VITE_STORAGE_BUCKET,messagingSenderId:{}.VITE_MESSAGING_SENDER_ID,appId:{}.VITE_APP_ID,measurementId:{}.VITE_MEASUREMENT_ID},w7=Sl(LE),V9=yE(w7),Ma=yA(w7);pT(w7);const C9=CA(Ma,"youngList"),b7=rl("youngCollection",{state:()=>({young:[]}),getters:{groups:c=>c.young.map(e=>e.group)},actions:{async getYoung(){const c=await OA(C9);c==null||c.forEach(e=>{this.young.push({...e.data(),uid:e.id})})},pickOneYoung(c){return this.young.find(e=>+e.group===c)},async changeOneEntry(c,e){const t=this.young.findIndex(a=>a.group===e.group);t!==-1&&await FA(pa(Ma,"youngList",this.young[t].uid),{...this.young[t],...e}).then(a=>{this.young[t]={...this.young[t],...e}}).catch(a=>{console.log(a)})},async addOneEntry(c){await UA(C9,{...c}).then(e=>{this.young.push({...c,uid:e.id})}).catch(e=>{console.log(e)})},async deleteOneYoung(c){await BA(pa(Ma,"youngList",c)).then(e=>{this.young=this.young.filter(t=>t.uid!==c)}).catch(e=>console.log(e))}},persist:!1}),wE={key:0,class:"modal"},bE=O1({__name:"DialogComponent",props:{openDialog:Boolean},setup(c){return(e,t)=>(L2(),f4(OM,{to:"body"},[c.openDialog?(L2(),q2("div",wE,[HM(e.$slots,"default",{},void 0,!0)])):Te("",!0)]))}});const xE=d3(bE,[["__scopeId","data-v-33606bfc"]]),SE={class:"generic-container"},NE={class:"generic-container__action"},AE=O1({__name:"GenericDialogComponent",props:{title:String},setup(c){return(e,t)=>(L2(),q2("div",SE,[z2("p",null,oe(c.title),1),z2("div",NE,[z2("button",{onClick:t[0]||(t[0]=a=>e.$emit("genericMsg",!0)),class:"generic-container__action-yes"},"Yes"),z2("button",{onClick:t[1]||(t[1]=a=>e.$emit("genericMsg",!1)),class:"generic-container__action-no"},"No")])]))}});const kE=d3(AE,[["__scopeId","data-v-4714f351"]]),TE={class:"young-list-container"},_E=O1({__name:"YoungList",setup(c){const e=b7(),t=on(),a=(o,l)=>{t.push({name:"editYoungList",params:{id:o.group},query:{component:l}})},n=Y3(!1),r=Y3(""),s=o=>{o&&e.deleteOneYoung(r.value),n.value=!1},i=o=>{r.value=o.uid,n.value=!0};return(o,l)=>(L2(),q2(Q2,null,[z2("div",TE,[_1(e).young.length?(L2(),f4(YL,{key:0,"data-source":_1(e).young,"show-cells":["group","count","leader"],"action-row":{show:!0,title:"Action",icons:[{iconName:["fas","plus"],actionPress:"pressOnTheAction",className:"row-content-action__45"}]},onPressOnTheRow:l[0]||(l[0]=f=>a(f,"LayoutComponent")),onPressOnTheAction:l[1]||(l[1]=f=>i(f))},null,8,["data-source"])):Te("",!0)]),D2(xE,{"open-dialog":n.value},{default:le(()=>[D2(kE,{title:"Are you sure",onGenericMsg:l[2]||(l[2]=f=>s(f))})]),_:1},8,["open-dialog"])],64))}});const EE=d3(_E,[["__scopeId","data-v-cc159bb0"]]),x7=c=>(No("data-v-01d61851"),c=c(),Ao(),c),IE={class:"form-submit"},PE=x7(()=>z2("button",null,"Add Group",-1)),RE={class:"container-dashboard"},DE={class:"container-dashboard-first-row"},OE={class:"container-dashboard-first-row__division"},FE=x7(()=>z2("div",{class:"container-dashboard-first-row__division"},"TESDA",-1)),BE=x7(()=>z2("div",{class:"container-dashboard-second-row"},[z2("div",{class:"container-dashboard-second-row__division"},"sdddds"),z2("div",{class:"container-dashboard-second-row__division"},"dasd")],-1)),UE=O1({__name:"DashboadView",setup(c){const e=b7();return gc(()=>{e.getYoung()}),(t,a)=>{const n=x5("router-link"),r=x5("router-view");return L2(),q2(Q2,null,[z2("div",IE,[D2(n,{to:{name:"editYoungList",params:{id:"new"},query:{component:"LayoutComponent"}}},{default:le(()=>[PE]),_:1})]),z2("div",RE,[z2("div",DE,[z2("div",OE,[D2(EE)]),FE]),BE]),D2(r,null,{default:le(({Component:s,route:i})=>[D2(nn,{name:"bounce"},{default:le(()=>[(L2(),f4(Oo(s),{key:i.path}))]),_:2},1024)]),_:1})],64)}}});const $E=d3(UE,[["__scopeId","data-v-01d61851"]]),qE={};function jE(c,e){return L2(),q2("main",null,"TEST")}const WE=d3(qE,[["render",jE]]),S7=c=>(No("data-v-0ff3588d"),c=c(),Ao(),c),GE=["onSubmit"],KE={class:"form-submit"},YE=["disabled"],QE={class:"form-group"},XE={class:"form-group-cat"},JE=S7(()=>z2("label",null,"Group",-1)),ZE=["disabled","readonly"],eI={key:0},cI={class:"form-group-cat"},tI=S7(()=>z2("label",null,"How manny are in group",-1)),aI={class:"form-group-cat"},nI=S7(()=>z2("label",null,"Leader",-1)),rI=O1({__name:"GroupView",setup(c){const e=Y3(""),t=Y3(""),a=Y3(""),n=ln(),r=on(),s=b7();gc(()=>{if(n.params.id!=="new"){const{group:l,count:f,leader:u}=s.pickOneYoung(+n.params.id);e.value=l,t.value=f+"",a.value=u}});const i=()=>{n.params.id==="new"?e.value>0&&!o.value&&(s.addOneEntry({group:e.value,count:+t.value,leader:a.value}),r.push("/landing-state-vex/dashboard")):(s.changeOneEntry(+e.value,{group:e.value,count:+t.value,leader:a.value}),r.push("/landing-state-vex/dashboard"))},o=U2(()=>n.params.id!=="new"?!1:!!s.groups.find(l=>l===e.value));return(l,f)=>(L2(),q2("form",{class:"form",onSubmit:Sy(i,["prevent"])},[z2("div",KE,[z2("button",{disabled:o.value||+e.value<=0},oe(_1(n).params.id==="new"?"Create new Group":"Send Edit the group"),9,YE)]),z2("div",QE,[z2("div",XE,[JE,Nt(z2("input",{"onUpdate:modelValue":f[0]||(f[0]=u=>e.value=u),placeholder:"Group Number",disabled:_1(n).params.id!=="new",readonly:_1(n).params.id!=="new",type:"number"},null,8,ZE),[[Pt,e.value]]),o.value?(L2(),q2("p",eI,"Group exist already")):Te("",!0)]),z2("div",cI,[tI,Nt(z2("input",{"onUpdate:modelValue":f[1]||(f[1]=u=>t.value=u),placeholder:"Count Number",type:"number"},null,512),[[Pt,t.value]])]),z2("div",aI,[nI,Nt(z2("input",{"onUpdate:modelValue":f[2]||(f[2]=u=>a.value=u),placeholder:"Leader Name"},null,512),[[Pt,a.value]])])])],40,GE))}});const sI=d3(rI,[["__scopeId","data-v-0ff3588d"]]),iI=O1({__name:"LayoutComponent",setup(c){return ln(),(e,t)=>(L2(),f4(sI,{class:"group-slot"}))}});const oI=d3(iI,[["__scopeId","data-v-5e32c159"]]),lI={class:"container-young"},fI=O1({__name:"EditYoungListView",setup(c){var i,o;const e=y5(null),t=on(),a=ln(),n=y5(null),r=(l,f)=>{f==="LayoutComponent"&&(e.value=oI)},s=l=>{var f;((f=l.target.children[0])==null?void 0:f.className)==="container-young"&&t.push("/landing-state-vex/dashboard")};return aM(()=>{var l,f;return[(l=t.params)==null?void 0:l.id,(f=a.query)==null?void 0:f.component]},r((i=t.params)==null?void 0:i.id,(o=a.query)==null?void 0:o.component)),(l,f)=>(L2(),q2("div",{class:"container",ref_key:"container",ref:n,onClick:s},[z2("div",lI,[(L2(),f4(Oo(e.value)))])],512))}});const uI=d3(fI,[["__scopeId","data-v-807c5dbc"]]),hI=rl("auth",{state:()=>({user:{}}),getters:{state:()=>{}},actions:{registerWithEmail(c){o_(V9,c.email,c.password).then(e=>{console.log(e)}).catch(e=>console.log(e))},loginWithEmail(c){l_(V9,c.email,c.password).then(e=>{e?(this.user=e.user,this.router.push("/")):this.user={}}).catch(e=>{e.code,e.message})},logOut(){localStorage.clear(),this.user={},this.router.push({name:"Login",params:{id:"login"}})}},persist:{storage:localStorage}}),N7=UL({history:rL("/landing-state-vex"),routes:[{path:"/landing-state-vex",component:()=>q0(()=>import("./ShellView-6ccbafb5.js"),["assets/ShellView-6ccbafb5.js","assets/ShellView-32d8fa83.css"]),meta:{routes:[{icon:"gauge-high",path:"/landing-state-vex/dashboard",name:"Dashboard"},{icon:"user",path:"/landing-state-vex/user",name:"Users"}]},children:[{path:"dashboard",name:"Dashboard",component:$E,children:[{path:"edit/:id",name:"editYoungList",component:uI,props:!0}]},{path:"user",component:WE},{path:"",redirect:"/landing-state-vex/dashboard"},{path:"/:catchAll(.*)",name:"NotFound",component:()=>q0(()=>import("./NotFoundView-e7181ab2.js"),["assets/NotFoundView-e7181ab2.js","assets/NotFoundView-e2f65a53.css"])}]},{path:"/auth",name:"LandingAuth",component:()=>q0(()=>import("./LandingAuthView-4e0b349d.js"),["assets/LandingAuthView-4e0b349d.js","assets/LandingAuthView-65135d76.css"]),children:[{path:":id",name:"Login",component:()=>q0(()=>import("./LoginView-de0233fd.js"),["assets/LoginView-de0233fd.js","assets/LoginView-eecc8240.css"])},{path:"",redirect:"/auth/login"}]},{path:"",redirect:"/landing-state-vex"}]});N7.beforeEach(async(c,e)=>{const t=hI();if(!t.user.uid&&c.name!=="Login")return"/auth/login";if(t.user.uid&&c.name=="Login")return{name:"Dashboard"}});function M9(c,e){var t=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);e&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),t.push.apply(t,a)}return t}function O(c){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?M9(Object(t),!0).forEach(function(a){K2(c,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(t)):M9(Object(t)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(t,a))})}return c}function tc(c){"@babel/helpers - typeof";return tc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tc(c)}function dI(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function y9(c,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}}function mI(c,e,t){return e&&y9(c.prototype,e),t&&y9(c,t),Object.defineProperty(c,"prototype",{writable:!1}),c}function K2(c,e,t){return e in c?Object.defineProperty(c,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):c[e]=t,c}function A7(c,e){return vI(c)||HI(c,e)||Gh(c,e)||VI()}function x0(c){return pI(c)||gI(c)||Gh(c)||zI()}function pI(c){if(Array.isArray(c))return ya(c)}function vI(c){if(Array.isArray(c))return c}function gI(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function HI(c,e){var t=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(t!=null){var a=[],n=!0,r=!1,s,i;try{for(t=t.call(c);!(n=(s=t.next()).done)&&(a.push(s.value),!(e&&a.length===e));n=!0);}catch(o){r=!0,i=o}finally{try{!n&&t.return!=null&&t.return()}finally{if(r)throw i}}return a}}function Gh(c,e){if(c){if(typeof c=="string")return ya(c,e);var t=Object.prototype.toString.call(c).slice(8,-1);if(t==="Object"&&c.constructor&&(t=c.constructor.name),t==="Map"||t==="Set")return Array.from(c);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ya(c,e)}}function ya(c,e){(e==null||e>c.length)&&(e=c.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=c[t];return a}function zI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function VI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var L9=function(){},k7={},Kh={},Yh=null,Qh={mark:L9,measure:L9};try{typeof window<"u"&&(k7=window),typeof document<"u"&&(Kh=document),typeof MutationObserver<"u"&&(Yh=MutationObserver),typeof performance<"u"&&(Qh=performance)}catch{}var CI=k7.navigator||{},w9=CI.userAgent,b9=w9===void 0?"":w9,i4=k7,N2=Kh,x9=Yh,t8=Qh;i4.document;var k3=!!N2.documentElement&&!!N2.head&&typeof N2.addEventListener=="function"&&typeof N2.createElement=="function",Xh=~b9.indexOf("MSIE")||~b9.indexOf("Trident/"),a8,n8,r8,s8,i8,x3="___FONT_AWESOME___",La=16,Jh="fa",Zh="svg-inline--fa",U4="data-fa-i2svg",wa="data-fa-pseudo-element",MI="data-fa-pseudo-element-pending",T7="data-prefix",_7="data-icon",S9="fontawesome-i2svg",yI="async",LI=["HTML","HEAD","STYLE","SCRIPT"],ed=function(){try{return!0}catch{return!1}}(),x2="classic",E2="sharp",E7=[x2,E2];function S0(c){return new Proxy(c,{get:function(t,a){return a in t?t[a]:t[x2]}})}var e0=S0((a8={},K2(a8,x2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),K2(a8,E2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),a8)),c0=S0((n8={},K2(n8,x2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),K2(n8,E2,{solid:"fass",regular:"fasr",light:"fasl"}),n8)),t0=S0((r8={},K2(r8,x2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),K2(r8,E2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),r8)),wI=S0((s8={},K2(s8,x2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),K2(s8,E2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),s8)),bI=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,cd="fa-layers-text",xI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,SI=S0((i8={},K2(i8,x2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),K2(i8,E2,{900:"fass",400:"fasr",300:"fasl"}),i8)),td=[1,2,3,4,5,6,7,8,9,10],NI=td.concat([11,12,13,14,15,16,17,18,19,20]),AI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],x4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},a0=new Set;Object.keys(c0[x2]).map(a0.add.bind(a0));Object.keys(c0[E2]).map(a0.add.bind(a0));var kI=[].concat(E7,x0(a0),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",x4.GROUP,x4.SWAP_OPACITY,x4.PRIMARY,x4.SECONDARY]).concat(td.map(function(c){return"".concat(c,"x")})).concat(NI.map(function(c){return"w-".concat(c)})),Le=i4.FontAwesomeConfig||{};function TI(c){var e=N2.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function _I(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(N2&&typeof N2.querySelector=="function"){var EI=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];EI.forEach(function(c){var e=A7(c,2),t=e[0],a=e[1],n=_I(TI(t));n!=null&&(Le[a]=n)})}var ad={styleDefault:"solid",familyDefault:"classic",cssPrefix:Jh,replacementClass:Zh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Le.familyPrefix&&(Le.cssPrefix=Le.familyPrefix);var T6=O(O({},ad),Le);T6.autoReplaceSvg||(T6.observeMutations=!1);var $={};Object.keys(ad).forEach(function(c){Object.defineProperty($,c,{enumerable:!0,set:function(t){T6[c]=t,we.forEach(function(a){return a($)})},get:function(){return T6[c]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(e){T6.cssPrefix=e,we.forEach(function(t){return t($)})},get:function(){return T6.cssPrefix}});i4.FontAwesomeConfig=$;var we=[];function II(c){return we.push(c),function(){we.splice(we.indexOf(c),1)}}var D3=La,r3={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function PI(c){if(!(!c||!k3)){var e=N2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var t=N2.head.childNodes,a=null,n=t.length-1;n>-1;n--){var r=t[n],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=r)}return N2.head.insertBefore(e,a),c}}var RI="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function n0(){for(var c=12,e="";c-- >0;)e+=RI[Math.random()*62|0];return e}function G6(c){for(var e=[],t=(c||[]).length>>>0;t--;)e[t]=c[t];return e}function I7(c){return c.classList?G6(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function nd(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function DI(c){return Object.keys(c||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(nd(c[t]),'" ')},"").trim()}function it(c){return Object.keys(c||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(c[t].trim(),";")},"")}function P7(c){return c.size!==r3.size||c.x!==r3.x||c.y!==r3.y||c.rotate!==r3.rotate||c.flipX||c.flipY}function OI(c){var e=c.transform,t=c.containerWidth,a=c.iconWidth,n={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(r," ").concat(s," ").concat(i)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:n,inner:o,path:l}}function FI(c){var e=c.transform,t=c.width,a=t===void 0?La:t,n=c.height,r=n===void 0?La:n,s=c.startCentered,i=s===void 0?!1:s,o="";return i&&Xh?o+="translate(".concat(e.x/D3-a/2,"em, ").concat(e.y/D3-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(e.x/D3,"em), calc(-50% + ").concat(e.y/D3,"em)) "):o+="translate(".concat(e.x/D3,"em, ").concat(e.y/D3,"em) "),o+="scale(".concat(e.size/D3*(e.flipX?-1:1),", ").concat(e.size/D3*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var BI=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function rd(){var c=Jh,e=Zh,t=$.cssPrefix,a=$.replacementClass,n=BI;if(t!==c||a!==e){var r=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");n=n.replace(r,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(i,".".concat(a))}return n}var N9=!1;function d5(){$.autoAddCss&&!N9&&(PI(rd()),N9=!0)}var UI={mixout:function(){return{dom:{css:rd,insertCss:d5}}},hooks:function(){return{beforeDOMElementCreation:function(){d5()},beforeI2svg:function(){d5()}}}},S3=i4||{};S3[x3]||(S3[x3]={});S3[x3].styles||(S3[x3].styles={});S3[x3].hooks||(S3[x3].hooks={});S3[x3].shims||(S3[x3].shims=[]);var $1=S3[x3],sd=[],$I=function c(){N2.removeEventListener("DOMContentLoaded",c),ac=1,sd.map(function(e){return e()})},ac=!1;k3&&(ac=(N2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N2.readyState),ac||N2.addEventListener("DOMContentLoaded",$I));function qI(c){k3&&(ac?setTimeout(c,0):sd.push(c))}function N0(c){var e=c.tag,t=c.attributes,a=t===void 0?{}:t,n=c.children,r=n===void 0?[]:n;return typeof c=="string"?nd(c):"<".concat(e," ").concat(DI(a),">").concat(r.map(N0).join(""),"</").concat(e,">")}function A9(c,e,t){if(c&&c[e]&&c[e][t])return{prefix:e,iconName:t,icon:c[e][t]}}var jI=function(e,t){return function(a,n,r,s){return e.call(t,a,n,r,s)}},m5=function(e,t,a,n){var r=Object.keys(e),s=r.length,i=n!==void 0?jI(t,n):t,o,l,f;for(a===void 0?(o=1,f=e[r[0]]):(o=0,f=a);o<s;o++)l=r[o],f=i(f,e[l],l,e);return f};function WI(c){for(var e=[],t=0,a=c.length;t<a;){var n=c.charCodeAt(t++);if(n>=55296&&n<=56319&&t<a){var r=c.charCodeAt(t++);(r&64512)==56320?e.push(((n&1023)<<10)+(r&1023)+65536):(e.push(n),t--)}else e.push(n)}return e}function ba(c){var e=WI(c);return e.length===1?e[0].toString(16):null}function GI(c,e){var t=c.length,a=c.charCodeAt(e),n;return a>=55296&&a<=56319&&t>e+1&&(n=c.charCodeAt(e+1),n>=56320&&n<=57343)?(a-55296)*1024+n-56320+65536:a}function k9(c){return Object.keys(c).reduce(function(e,t){var a=c[t],n=!!a.icon;return n?e[a.iconName]=a.icon:e[t]=a,e},{})}function xa(c,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,n=a===void 0?!1:a,r=k9(e);typeof $1.hooks.addPack=="function"&&!n?$1.hooks.addPack(c,k9(e)):$1.styles[c]=O(O({},$1.styles[c]||{}),r),c==="fas"&&xa("fa",e)}var o8,l8,f8,i6=$1.styles,KI=$1.shims,YI=(o8={},K2(o8,x2,Object.values(t0[x2])),K2(o8,E2,Object.values(t0[E2])),o8),R7=null,id={},od={},ld={},fd={},ud={},QI=(l8={},K2(l8,x2,Object.keys(e0[x2])),K2(l8,E2,Object.keys(e0[E2])),l8);function XI(c){return~kI.indexOf(c)}function JI(c,e){var t=e.split("-"),a=t[0],n=t.slice(1).join("-");return a===c&&n!==""&&!XI(n)?n:null}var hd=function(){var e=function(r){return m5(i6,function(s,i,o){return s[o]=m5(i,r,{}),s},{})};id=e(function(n,r,s){if(r[3]&&(n[r[3]]=s),r[2]){var i=r[2].filter(function(o){return typeof o=="number"});i.forEach(function(o){n[o.toString(16)]=s})}return n}),od=e(function(n,r,s){if(n[s]=s,r[2]){var i=r[2].filter(function(o){return typeof o=="string"});i.forEach(function(o){n[o]=s})}return n}),ud=e(function(n,r,s){var i=r[2];return n[s]=s,i.forEach(function(o){n[o]=s}),n});var t="far"in i6||$.autoFetchSvg,a=m5(KI,function(n,r){var s=r[0],i=r[1],o=r[2];return i==="far"&&!t&&(i="fas"),typeof s=="string"&&(n.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(n.unicodes[s.toString(16)]={prefix:i,iconName:o}),n},{names:{},unicodes:{}});ld=a.names,fd=a.unicodes,R7=ot($.styleDefault,{family:$.familyDefault})};II(function(c){R7=ot(c.styleDefault,{family:$.familyDefault})});hd();function D7(c,e){return(id[c]||{})[e]}function ZI(c,e){return(od[c]||{})[e]}function S4(c,e){return(ud[c]||{})[e]}function dd(c){return ld[c]||{prefix:null,iconName:null}}function eP(c){var e=fd[c],t=D7("fas",c);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function o4(){return R7}var O7=function(){return{prefix:null,iconName:null,rest:[]}};function ot(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,a=t===void 0?x2:t,n=e0[a][c],r=c0[a][c]||c0[a][n],s=c in $1.styles?c:null;return r||s||null}var T9=(f8={},K2(f8,x2,Object.keys(t0[x2])),K2(f8,E2,Object.keys(t0[E2])),f8);function lt(c){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,n=a===void 0?!1:a,r=(e={},K2(e,x2,"".concat($.cssPrefix,"-").concat(x2)),K2(e,E2,"".concat($.cssPrefix,"-").concat(E2)),e),s=null,i=x2;(c.includes(r[x2])||c.some(function(l){return T9[x2].includes(l)}))&&(i=x2),(c.includes(r[E2])||c.some(function(l){return T9[E2].includes(l)}))&&(i=E2);var o=c.reduce(function(l,f){var u=JI($.cssPrefix,f);if(i6[f]?(f=YI[i].includes(f)?wI[i][f]:f,s=f,l.prefix=f):QI[i].indexOf(f)>-1?(s=f,l.prefix=ot(f,{family:i})):u?l.iconName=u:f!==$.replacementClass&&f!==r[x2]&&f!==r[E2]&&l.rest.push(f),!n&&l.prefix&&l.iconName){var h=s==="fa"?dd(l.iconName):{},d=S4(l.prefix,l.iconName);h.prefix&&(s=null),l.iconName=h.iconName||d||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!i6.far&&i6.fas&&!$.autoFetchSvg&&(l.prefix="fas")}return l},O7());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===E2&&(i6.fass||$.autoFetchSvg)&&(o.prefix="fass",o.iconName=S4(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=o4()||"fas"),o}var cP=function(){function c(){dI(this,c),this.definitions={}}return mI(c,[{key:"add",value:function(){for(var t=this,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];var s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(i){t.definitions[i]=O(O({},t.definitions[i]||{}),s[i]),xa(i,s[i]);var o=t0[x2][i];o&&xa(o,s[i]),hd()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var n=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(n).map(function(r){var s=n[r],i=s.prefix,o=s.iconName,l=s.icon,f=l[2];t[i]||(t[i]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(t[i][u]=l)}),t[i][o]=l}),t}}]),c}(),_9=[],o6={},z6={},tP=Object.keys(z6);function aP(c,e){var t=e.mixoutsTo;return _9=c,o6={},Object.keys(z6).forEach(function(a){tP.indexOf(a)===-1&&delete z6[a]}),_9.forEach(function(a){var n=a.mixout?a.mixout():{};if(Object.keys(n).forEach(function(s){typeof n[s]=="function"&&(t[s]=n[s]),tc(n[s])==="object"&&Object.keys(n[s]).forEach(function(i){t[s]||(t[s]={}),t[s][i]=n[s][i]})}),a.hooks){var r=a.hooks();Object.keys(r).forEach(function(s){o6[s]||(o6[s]=[]),o6[s].push(r[s])})}a.provides&&a.provides(z6)}),t}function Sa(c,e){for(var t=arguments.length,a=new Array(t>2?t-2:0),n=2;n<t;n++)a[n-2]=arguments[n];var r=o6[c]||[];return r.forEach(function(s){e=s.apply(null,[e].concat(a))}),e}function $4(c){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];var n=o6[c]||[];n.forEach(function(r){r.apply(null,t)})}function N3(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return z6[c]?z6[c].apply(null,e):void 0}function Na(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,t=c.prefix||o4();if(e)return e=S4(t,e)||e,A9(md.definitions,t,e)||A9($1.styles,t,e)}var md=new cP,nP=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,$4("noAuto")},rP={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return k3?($4("beforeI2svg",e),N3("pseudoElements2svg",e),N3("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,qI(function(){iP({autoReplaceSvgRoot:t}),$4("watch",e)})}},sP={icon:function(e){if(e===null)return null;if(tc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:S4(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=ot(e[0]);return{prefix:a,iconName:S4(a,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat($.cssPrefix,"-"))>-1||e.match(bI))){var n=lt(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||o4(),iconName:S4(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){var r=o4();return{prefix:r,iconName:S4(r,e)||e}}}},A1={noAuto:nP,config:$,dom:rP,parse:sP,library:md,findIconDefinition:Na,toHtml:N0},iP=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,a=t===void 0?N2:t;(Object.keys($1.styles).length>0||$.autoFetchSvg)&&k3&&$.autoReplaceSvg&&A1.dom.i2svg({node:a})};function ft(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(a){return N0(a)})}}),Object.defineProperty(c,"node",{get:function(){if(k3){var a=N2.createElement("div");return a.innerHTML=c.html,a.children}}}),c}function oP(c){var e=c.children,t=c.main,a=c.mask,n=c.attributes,r=c.styles,s=c.transform;if(P7(s)&&t.found&&!a.found){var i=t.width,o=t.height,l={x:i/o/2,y:.5};n.style=it(O(O({},r),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:n,children:e}]}function lP(c){var e=c.prefix,t=c.iconName,a=c.children,n=c.attributes,r=c.symbol,s=r===!0?"".concat(e,"-").concat($.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},n),{},{id:s}),children:a}]}]}function F7(c){var e=c.icons,t=e.main,a=e.mask,n=c.prefix,r=c.iconName,s=c.transform,i=c.symbol,o=c.title,l=c.maskId,f=c.titleId,u=c.extra,h=c.watchable,d=h===void 0?!1:h,g=a.found?a:t,z=g.width,M=g.height,H=n==="fak",V=[$.replacementClass,r?"".concat($.cssPrefix,"-").concat(r):""].filter(function(P){return u.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(u.classes).join(" "),A={children:[],attributes:O(O({},u.attributes),{},{"data-prefix":n,"data-icon":r,class:V,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(M)})},w=H&&!~u.classes.indexOf("fa-fw")?{width:"".concat(z/M*16*.0625,"em")}:{};d&&(A.attributes[U4]=""),o&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||n0())},children:[o]}),delete A.attributes.title);var R=O(O({},A),{},{prefix:n,iconName:r,main:t,mask:a,maskId:l,transform:s,symbol:i,styles:O(O({},w),u.styles)}),J=a.found&&t.found?N3("generateAbstractMask",R)||{children:[],attributes:{}}:N3("generateAbstractIcon",R)||{children:[],attributes:{}},X=J.children,T=J.attributes;return R.children=X,R.attributes=T,i?lP(R):oP(R)}function E9(c){var e=c.content,t=c.width,a=c.height,n=c.transform,r=c.title,s=c.extra,i=c.watchable,o=i===void 0?!1:i,l=O(O(O({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});o&&(l[U4]="");var f=O({},s.styles);P7(n)&&(f.transform=FI({transform:n,startCentered:!0,width:t,height:a}),f["-webkit-transform"]=f.transform);var u=it(f);u.length>0&&(l.style=u);var h=[];return h.push({tag:"span",attributes:l,children:[e]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function fP(c){var e=c.content,t=c.title,a=c.extra,n=O(O(O({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),r=it(a.styles);r.length>0&&(n.style=r);var s=[];return s.push({tag:"span",attributes:n,children:[e]}),t&&s.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),s}var p5=$1.styles;function Aa(c){var e=c[0],t=c[1],a=c.slice(4),n=A7(a,1),r=n[0],s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(x4.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(x4.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(x4.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:t,icon:s}}var uP={found:!1,width:512,height:512};function hP(c,e){!ed&&!$.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function ka(c,e){var t=e;return e==="fa"&&$.styleDefault!==null&&(e=o4()),new Promise(function(a,n){if(N3("missingIconAbstract"),t==="fa"){var r=dd(c)||{};c=r.iconName||c,e=r.prefix||e}if(c&&e&&p5[e]&&p5[e][c]){var s=p5[e][c];return a(Aa(s))}hP(c,e),a(O(O({},uP),{},{icon:$.showMissingIcons&&c?N3("missingIconAbstract")||{}:{}}))})}var I9=function(){},Ta=$.measurePerformance&&t8&&t8.mark&&t8.measure?t8:{mark:I9,measure:I9},ie='FA "6.4.0"',dP=function(e){return Ta.mark("".concat(ie," ").concat(e," begins")),function(){return pd(e)}},pd=function(e){Ta.mark("".concat(ie," ").concat(e," ends")),Ta.measure("".concat(ie," ").concat(e),"".concat(ie," ").concat(e," begins"),"".concat(ie," ").concat(e," ends"))},B7={begin:dP,end:pd},y8=function(){};function P9(c){var e=c.getAttribute?c.getAttribute(U4):null;return typeof e=="string"}function mP(c){var e=c.getAttribute?c.getAttribute(T7):null,t=c.getAttribute?c.getAttribute(_7):null;return e&&t}function pP(c){return c&&c.classList&&c.classList.contains&&c.classList.contains($.replacementClass)}function vP(){if($.autoReplaceSvg===!0)return L8.replace;var c=L8[$.autoReplaceSvg];return c||L8.replace}function gP(c){return N2.createElementNS("http://www.w3.org/2000/svg",c)}function HP(c){return N2.createElement(c)}function vd(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,a=t===void 0?c.tag==="svg"?gP:HP:t;if(typeof c=="string")return N2.createTextNode(c);var n=a(c.tag);Object.keys(c.attributes||[]).forEach(function(s){n.setAttribute(s,c.attributes[s])});var r=c.children||[];return r.forEach(function(s){n.appendChild(vd(s,{ceFn:a}))}),n}function zP(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var L8={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(n){t.parentNode.insertBefore(vd(n),t)}),t.getAttribute(U4)===null&&$.keepOriginalSource){var a=N2.createComment(zP(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(e){var t=e[0],a=e[1];if(~I7(t).indexOf($.replacementClass))return L8.replace(e);var n=new RegExp("".concat($.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var r=a[0].attributes.class.split(" ").reduce(function(i,o){return o===$.replacementClass||o.match(n)?i.toSvg.push(o):i.toNode.push(o),i},{toNode:[],toSvg:[]});a[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",r.toNode.join(" "))}var s=a.map(function(i){return N0(i)}).join(`
`);t.setAttribute(U4,""),t.innerHTML=s}};function R9(c){c()}function gd(c,e){var t=typeof e=="function"?e:y8;if(c.length===0)t();else{var a=R9;$.mutateApproach===yI&&(a=i4.requestAnimationFrame||R9),a(function(){var n=vP(),r=B7.begin("mutate");c.map(n),r(),t()})}}var U7=!1;function Hd(){U7=!0}function _a(){U7=!1}var nc=null;function D9(c){if(x9&&$.observeMutations){var e=c.treeCallback,t=e===void 0?y8:e,a=c.nodeCallback,n=a===void 0?y8:a,r=c.pseudoElementsCallback,s=r===void 0?y8:r,i=c.observeMutationsRoot,o=i===void 0?N2:i;nc=new x9(function(l){if(!U7){var f=o4();G6(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!P9(u.addedNodes[0])&&($.searchPseudoElements&&s(u.target),t(u.target)),u.type==="attributes"&&u.target.parentNode&&$.searchPseudoElements&&s(u.target.parentNode),u.type==="attributes"&&P9(u.target)&&~AI.indexOf(u.attributeName))if(u.attributeName==="class"&&mP(u.target)){var h=lt(I7(u.target)),d=h.prefix,g=h.iconName;u.target.setAttribute(T7,d||f),g&&u.target.setAttribute(_7,g)}else pP(u.target)&&n(u.target)})}}),k3&&nc.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function VP(){nc&&nc.disconnect()}function CP(c){var e=c.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(a,n){var r=n.split(":"),s=r[0],i=r.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),t}function MP(c){var e=c.getAttribute("data-prefix"),t=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",n=lt(I7(c));return n.prefix||(n.prefix=o4()),e&&t&&(n.prefix=e,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&a.length>0&&(n.iconName=ZI(n.prefix,c.innerText)||D7(n.prefix,ba(c.innerText))),!n.iconName&&$.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function yP(c){var e=G6(c.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),t=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return $.autoA11y&&(t?e["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(a||n0()):(e["aria-hidden"]="true",e.focusable="false")),e}function LP(){return{iconName:null,title:null,titleId:null,prefix:null,transform:r3,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function O9(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=MP(c),a=t.iconName,n=t.prefix,r=t.rest,s=yP(c),i=Sa("parseNodeAttributes",{},c),o=e.styleParser?CP(c):[];return O({iconName:a,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:n,transform:r3,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}var wP=$1.styles;function zd(c){var e=$.autoReplaceSvg==="nest"?O9(c,{styleParser:!1}):O9(c);return~e.extra.classes.indexOf(cd)?N3("generateLayersText",c,e):N3("generateSvgReplacementMutation",c,e)}var l4=new Set;E7.map(function(c){l4.add("fa-".concat(c))});Object.keys(e0[x2]).map(l4.add.bind(l4));Object.keys(e0[E2]).map(l4.add.bind(l4));l4=x0(l4);function F9(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!k3)return Promise.resolve();var t=N2.documentElement.classList,a=function(u){return t.add("".concat(S9,"-").concat(u))},n=function(u){return t.remove("".concat(S9,"-").concat(u))},r=$.autoFetchSvg?l4:E7.map(function(f){return"fa-".concat(f)}).concat(Object.keys(wP));r.includes("fa")||r.push("fa");var s=[".".concat(cd,":not([").concat(U4,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(U4,"])")})).join(", ");if(s.length===0)return Promise.resolve();var i=[];try{i=G6(c.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),n("complete");else return Promise.resolve();var o=B7.begin("onTree"),l=i.reduce(function(f,u){try{var h=zd(u);h&&f.push(h)}catch(d){ed||d.name==="MissingIcon"&&console.error(d)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(h){gd(h,function(){a("active"),a("complete"),n("pending"),typeof e=="function"&&e(),o(),f()})}).catch(function(h){o(),u(h)})})}function bP(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zd(c).then(function(t){t&&gd([t],e)})}function xP(c){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Na(e||{}),n=t.mask;return n&&(n=(n||{}).icon?n:Na(n||{})),c(a,O(O({},t),{},{mask:n}))}}var SP=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,n=a===void 0?r3:a,r=t.symbol,s=r===void 0?!1:r,i=t.mask,o=i===void 0?null:i,l=t.maskId,f=l===void 0?null:l,u=t.title,h=u===void 0?null:u,d=t.titleId,g=d===void 0?null:d,z=t.classes,M=z===void 0?[]:z,H=t.attributes,V=H===void 0?{}:H,A=t.styles,w=A===void 0?{}:A;if(e){var R=e.prefix,J=e.iconName,X=e.icon;return ft(O({type:"icon"},e),function(){return $4("beforeDOMElementCreation",{iconDefinition:e,params:t}),$.autoA11y&&(h?V["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(g||n0()):(V["aria-hidden"]="true",V.focusable="false")),F7({icons:{main:Aa(X),mask:o?Aa(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:J,transform:O(O({},r3),n),symbol:s,title:h,maskId:f,titleId:g,extra:{attributes:V,styles:w,classes:M}})})}},NP={mixout:function(){return{icon:xP(SP)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=F9,t.nodeCallback=bP,t}}},provides:function(e){e.i2svg=function(t){var a=t.node,n=a===void 0?N2:a,r=t.callback,s=r===void 0?function(){}:r;return F9(n,s)},e.generateSvgReplacementMutation=function(t,a){var n=a.iconName,r=a.title,s=a.titleId,i=a.prefix,o=a.transform,l=a.symbol,f=a.mask,u=a.maskId,h=a.extra;return new Promise(function(d,g){Promise.all([ka(n,i),f.iconName?ka(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var M=A7(z,2),H=M[0],V=M[1];d([t,F7({icons:{main:H,mask:V},prefix:i,iconName:n,transform:o,symbol:l,maskId:u,title:r,titleId:s,extra:h,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){var a=t.children,n=t.attributes,r=t.main,s=t.transform,i=t.styles,o=it(i);o.length>0&&(n.style=o);var l;return P7(s)&&(l=N3("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),a.push(l||r.icon),{children:a,attributes:n}}}},AP={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.classes,r=n===void 0?[]:n;return ft({type:"layer"},function(){$4("beforeDOMElementCreation",{assembler:t,params:a});var s=[];return t(function(i){Array.isArray(i)?i.map(function(o){s=s.concat(o.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(x0(r)).join(" ")},children:s}]})}}}},kP={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.title,r=n===void 0?null:n,s=a.classes,i=s===void 0?[]:s,o=a.attributes,l=o===void 0?{}:o,f=a.styles,u=f===void 0?{}:f;return ft({type:"counter",content:t},function(){return $4("beforeDOMElementCreation",{content:t,params:a}),fP({content:t.toString(),title:r,extra:{attributes:l,styles:u,classes:["".concat($.cssPrefix,"-layers-counter")].concat(x0(i))}})})}}}},TP={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?r3:n,s=a.title,i=s===void 0?null:s,o=a.classes,l=o===void 0?[]:o,f=a.attributes,u=f===void 0?{}:f,h=a.styles,d=h===void 0?{}:h;return ft({type:"text",content:t},function(){return $4("beforeDOMElementCreation",{content:t,params:a}),E9({content:t,transform:O(O({},r3),r),title:i,extra:{attributes:u,styles:d,classes:["".concat($.cssPrefix,"-layers-text")].concat(x0(l))}})})}}},provides:function(e){e.generateLayersText=function(t,a){var n=a.title,r=a.transform,s=a.extra,i=null,o=null;if(Xh){var l=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();i=f.width/l,o=f.height/l}return $.autoA11y&&!n&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,E9({content:t.innerHTML,width:i,height:o,transform:r,title:n,extra:s,watchable:!0})])}}},_P=new RegExp('"',"ug"),B9=[1105920,1112319];function EP(c){var e=c.replace(_P,""),t=GI(e,0),a=t>=B9[0]&&t<=B9[1],n=e.length===2?e[0]===e[1]:!1;return{value:ba(n?e[0]:e),isSecondary:a||n}}function U9(c,e){var t="".concat(MI).concat(e.replace(":","-"));return new Promise(function(a,n){if(c.getAttribute(t)!==null)return a();var r=G6(c.children),s=r.filter(function(X){return X.getAttribute(wa)===e})[0],i=i4.getComputedStyle(c,e),o=i.getPropertyValue("font-family").match(xI),l=i.getPropertyValue("font-weight"),f=i.getPropertyValue("content");if(s&&!o)return c.removeChild(s),a();if(o&&f!=="none"&&f!==""){var u=i.getPropertyValue("content"),h=~["Sharp"].indexOf(o[2])?E2:x2,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?c0[h][o[2].toLowerCase()]:SI[h][l],g=EP(u),z=g.value,M=g.isSecondary,H=o[0].startsWith("FontAwesome"),V=D7(d,z),A=V;if(H){var w=eP(z);w.iconName&&w.prefix&&(V=w.iconName,d=w.prefix)}if(V&&!M&&(!s||s.getAttribute(T7)!==d||s.getAttribute(_7)!==A)){c.setAttribute(t,A),s&&c.removeChild(s);var R=LP(),J=R.extra;J.attributes[wa]=e,ka(V,d).then(function(X){var T=F7(O(O({},R),{},{icons:{main:X,mask:O7()},prefix:d,iconName:A,extra:J,watchable:!0})),P=N2.createElement("svg");e==="::before"?c.insertBefore(P,c.firstChild):c.appendChild(P),P.outerHTML=T.map(function(Z){return N0(Z)}).join(`