(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();function H0(c,a){const e=Object.create(null),r=c.split(",");for(let s=0;s<r.length;s++)e[r[s]]=!0;return a?s=>!!e[s.toLowerCase()]:s=>!!e[s]}const l2={},c3=[],G2=()=>{},Xt=()=>!1,Qt=/^on[^a-z]/,k4=c=>Qt.test(c),h0=c=>c.startsWith("onUpdate:"),p2=Object.assign,z0=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Jt=Object.prototype.hasOwnProperty,Z=(c,a)=>Jt.call(c,a),W=Array.isArray,a3=c=>A4(c)==="[object Map]",k7=c=>A4(c)==="[object Set]",$=c=>typeof c=="function",h2=c=>typeof c=="string",p0=c=>typeof c=="symbol",u2=c=>c!==null&&typeof c=="object",A7=c=>u2(c)&&$(c.then)&&$(c.catch),P7=Object.prototype.toString,A4=c=>P7.call(c),Zt=c=>A4(c).slice(8,-1),T7=c=>A4(c)==="[object Object]",V0=c=>h2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,u4=H0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),P4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},cl=/-(\w)/g,Z2=P4(c=>c.replace(cl,(a,e)=>e?e.toUpperCase():"")),al=/\B([A-Z])/g,m3=P4(c=>c.replace(al,"-$1").toLowerCase()),T4=P4(c=>c.charAt(0).toUpperCase()+c.slice(1)),z6=P4(c=>c?`on${T4(c)}`:""),y3=(c,a)=>!Object.is(c,a),v4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},M4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},R6=c=>{const a=parseFloat(c);return isNaN(a)?c:a},el=c=>{const a=h2(c)?Number(c):NaN;return isNaN(a)?c:a};let Z8;const B6=()=>Z8||(Z8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function d0(c){if(W(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],s=h2(r)?il(r):d0(r);if(s)for(const n in s)a[n]=s[n]}return a}else{if(h2(c))return c;if(u2(c))return c}}const rl=/;(?![^(]*\))/g,sl=/:([^]+)/,nl=/\/\*[^]*?\*\//g;function il(c){const a={};return c.replace(nl,"").split(rl).forEach(e=>{if(e){const r=e.split(sl);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function M0(c){let a="";if(h2(c))a=c;else if(W(c))for(let e=0;e<c.length;e++){const r=M0(c[e]);r&&(a+=r+" ")}else if(u2(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const tl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ll=H0(tl);function _7(c){return!!c||c===""}const c5=c=>h2(c)?c:c==null?"":W(c)||u2(c)&&(c.toString===P7||!$(c.toString))?JSON.stringify(c,R7,2):String(c),R7=(c,a)=>a&&a.__v_isRef?R7(c,a.value):a3(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,s])=>(e[`${r} =>`]=s,e),{})}:k7(a)?{[`Set(${a.size})`]:[...a.values()]}:u2(a)&&!W(a)&&!T7(a)?String(a):a;let R2;class B7{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=R2,!a&&R2&&(this.index=(R2.scopes||(R2.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=R2;try{return R2=this,a()}finally{R2=e}}}on(){R2=this}off(){R2=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function E7(c){return new B7(c)}function ol(c,a=R2){a&&a.active&&a.effects.push(c)}function F7(){return R2}function fl(c){R2&&R2.cleanups.push(c)}const C0=c=>{const a=new Set(c);return a.w=0,a.n=0,a},D7=c=>(c.w&b1)>0,O7=c=>(c.n&b1)>0,ml=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=b1},ul=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const s=a[r];D7(s)&&!O7(s)?s.delete(c):a[e++]=s,s.w&=~b1,s.n&=~b1}a.length=e}},C4=new WeakMap;let d3=0,b1=1;const E6=30;let I2;const U1=Symbol(""),F6=Symbol("");class L0{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,ol(this,r)}run(){if(!this.active)return this.fn();let a=I2,e=L1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=I2,I2=this,L1=!0,b1=1<<++d3,d3<=E6?ml(this):a5(this),this.fn()}finally{d3<=E6&&ul(this),b1=1<<--d3,I2=this.parent,L1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){I2===this?this.deferStop=!0:this.active&&(a5(this),this.onStop&&this.onStop(),this.active=!1)}}function a5(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let L1=!0;const U7=[];function u3(){U7.push(L1),L1=!1}function v3(){const c=U7.pop();L1=c===void 0?!0:c}function T2(c,a,e){if(L1&&I2){let r=C4.get(c);r||C4.set(c,r=new Map);let s=r.get(e);s||r.set(e,s=C0()),I7(s)}}function I7(c,a){let e=!1;d3<=E6?O7(c)||(c.n|=b1,e=!D7(c)):e=!c.has(I2),e&&(c.add(I2),I2.deps.push(c))}function t1(c,a,e,r,s,n){const i=C4.get(c);if(!i)return;let t=[];if(a==="clear")t=[...i.values()];else if(e==="length"&&W(c)){const l=Number(r);i.forEach((o,f)=>{(f==="length"||f>=l)&&t.push(o)})}else switch(e!==void 0&&t.push(i.get(e)),a){case"add":W(c)?V0(e)&&t.push(i.get("length")):(t.push(i.get(U1)),a3(c)&&t.push(i.get(F6)));break;case"delete":W(c)||(t.push(i.get(U1)),a3(c)&&t.push(i.get(F6)));break;case"set":a3(c)&&t.push(i.get(U1));break}if(t.length===1)t[0]&&D6(t[0]);else{const l=[];for(const o of t)o&&l.push(...o);D6(C0(l))}}function D6(c,a){const e=W(c)?c:[...c];for(const r of e)r.computed&&e5(r);for(const r of e)r.computed||e5(r)}function e5(c,a){(c!==I2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}function vl(c,a){var e;return(e=C4.get(c))==null?void 0:e.get(a)}const Hl=H0("__proto__,__v_isRef,__isVue"),q7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(p0)),hl=g0(),zl=g0(!1,!0),pl=g0(!0),r5=Vl();function Vl(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=Q(this);for(let n=0,i=this.length;n<i;n++)T2(r,"get",n+"");const s=r[a](...e);return s===-1||s===!1?r[a](...e.map(Q)):s}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){u3();const r=Q(this)[a].apply(this,e);return v3(),r}}),c}function dl(c){const a=Q(this);return T2(a,"has",c),a.hasOwnProperty(c)}function g0(c=!1,a=!1){return function(r,s,n){if(s==="__v_isReactive")return!c;if(s==="__v_isReadonly")return c;if(s==="__v_isShallow")return a;if(s==="__v_raw"&&n===(c?a?Rl:K7:a?$7:j7).get(r))return r;const i=W(r);if(!c){if(i&&Z(r5,s))return Reflect.get(r5,s,n);if(s==="hasOwnProperty")return dl}const t=Reflect.get(r,s,n);return(p0(s)?q7.has(s):Hl(s))||(c||T2(r,"get",s),a)?t:H2(t)?i&&V0(s)?t:t.value:u2(t)?c?Y7(t):H3(t):t}}const Ml=W7(),Cl=W7(!0);function W7(c=!1){return function(e,r,s,n){let i=e[r];if(i3(i)&&H2(i)&&!H2(s))return!1;if(!c&&(!L4(s)&&!i3(s)&&(i=Q(i),s=Q(s)),!W(e)&&H2(i)&&!H2(s)))return i.value=s,!0;const t=W(e)&&V0(r)?Number(r)<e.length:Z(e,r),l=Reflect.set(e,r,s,n);return e===Q(n)&&(t?y3(s,i)&&t1(e,"set",r,s):t1(e,"add",r,s)),l}}function Ll(c,a){const e=Z(c,a);c[a];const r=Reflect.deleteProperty(c,a);return r&&e&&t1(c,"delete",a,void 0),r}function gl(c,a){const e=Reflect.has(c,a);return(!p0(a)||!q7.has(a))&&T2(c,"has",a),e}function xl(c){return T2(c,"iterate",W(c)?"length":U1),Reflect.ownKeys(c)}const G7={get:hl,set:Ml,deleteProperty:Ll,has:gl,ownKeys:xl},bl={get:pl,set(c,a){return!0},deleteProperty(c,a){return!0}},Nl=p2({},G7,{get:zl,set:Cl}),x0=c=>c,_4=c=>Reflect.getPrototypeOf(c);function Q3(c,a,e=!1,r=!1){c=c.__v_raw;const s=Q(c),n=Q(a);e||(a!==n&&T2(s,"get",a),T2(s,"get",n));const{has:i}=_4(s),t=r?x0:e?S0:k3;if(i.call(s,a))return t(c.get(a));if(i.call(s,n))return t(c.get(n));c!==s&&c.get(a)}function J3(c,a=!1){const e=this.__v_raw,r=Q(e),s=Q(c);return a||(c!==s&&T2(r,"has",c),T2(r,"has",s)),c===s?e.has(c):e.has(c)||e.has(s)}function Z3(c,a=!1){return c=c.__v_raw,!a&&T2(Q(c),"iterate",U1),Reflect.get(c,"size",c)}function s5(c){c=Q(c);const a=Q(this);return _4(a).has.call(a,c)||(a.add(c),t1(a,"add",c,c)),this}function n5(c,a){a=Q(a);const e=Q(this),{has:r,get:s}=_4(e);let n=r.call(e,c);n||(c=Q(c),n=r.call(e,c));const i=s.call(e,c);return e.set(c,a),n?y3(a,i)&&t1(e,"set",c,a):t1(e,"add",c,a),this}function i5(c){const a=Q(this),{has:e,get:r}=_4(a);let s=e.call(a,c);s||(c=Q(c),s=e.call(a,c)),r&&r.call(a,c);const n=a.delete(c);return s&&t1(a,"delete",c,void 0),n}function t5(){const c=Q(this),a=c.size!==0,e=c.clear();return a&&t1(c,"clear",void 0,void 0),e}function c4(c,a){return function(r,s){const n=this,i=n.__v_raw,t=Q(i),l=a?x0:c?S0:k3;return!c&&T2(t,"iterate",U1),i.forEach((o,f)=>r.call(s,l(o),l(f),n))}}function a4(c,a,e){return function(...r){const s=this.__v_raw,n=Q(s),i=a3(n),t=c==="entries"||c===Symbol.iterator&&i,l=c==="keys"&&i,o=s[c](...r),f=e?x0:a?S0:k3;return!a&&T2(n,"iterate",l?F6:U1),{next(){const{value:m,done:H}=o.next();return H?{value:m,done:H}:{value:t?[f(m[0]),f(m[1])]:f(m),done:H}},[Symbol.iterator](){return this}}}}function H1(c){return function(...a){return c==="delete"?!1:this}}function Sl(){const c={get(n){return Q3(this,n)},get size(){return Z3(this)},has:J3,add:s5,set:n5,delete:i5,clear:t5,forEach:c4(!1,!1)},a={get(n){return Q3(this,n,!1,!0)},get size(){return Z3(this)},has:J3,add:s5,set:n5,delete:i5,clear:t5,forEach:c4(!1,!0)},e={get(n){return Q3(this,n,!0)},get size(){return Z3(this,!0)},has(n){return J3.call(this,n,!0)},add:H1("add"),set:H1("set"),delete:H1("delete"),clear:H1("clear"),forEach:c4(!0,!1)},r={get(n){return Q3(this,n,!0,!0)},get size(){return Z3(this,!0)},has(n){return J3.call(this,n,!0)},add:H1("add"),set:H1("set"),delete:H1("delete"),clear:H1("clear"),forEach:c4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{c[n]=a4(n,!1,!1),e[n]=a4(n,!0,!1),a[n]=a4(n,!1,!0),r[n]=a4(n,!0,!0)}),[c,e,a,r]}const[wl,yl,kl,Al]=Sl();function b0(c,a){const e=a?c?Al:kl:c?yl:wl;return(r,s,n)=>s==="__v_isReactive"?!c:s==="__v_isReadonly"?c:s==="__v_raw"?r:Reflect.get(Z(e,s)&&s in r?e:r,s,n)}const Pl={get:b0(!1,!1)},Tl={get:b0(!1,!0)},_l={get:b0(!0,!1)},j7=new WeakMap,$7=new WeakMap,K7=new WeakMap,Rl=new WeakMap;function Bl(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function El(c){return c.__v_skip||!Object.isExtensible(c)?0:Bl(Zt(c))}function H3(c){return i3(c)?c:N0(c,!1,G7,Pl,j7)}function Fl(c){return N0(c,!1,Nl,Tl,$7)}function Y7(c){return N0(c,!0,bl,_l,K7)}function N0(c,a,e,r,s){if(!u2(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const n=s.get(c);if(n)return n;const i=El(c);if(i===0)return c;const t=new Proxy(c,i===2?r:e);return s.set(c,t),t}function g1(c){return i3(c)?g1(c.__v_raw):!!(c&&c.__v_isReactive)}function i3(c){return!!(c&&c.__v_isReadonly)}function L4(c){return!!(c&&c.__v_isShallow)}function X7(c){return g1(c)||i3(c)}function Q(c){const a=c&&c.__v_raw;return a?Q(a):c}function R4(c){return M4(c,"__v_skip",!0),c}const k3=c=>u2(c)?H3(c):c,S0=c=>u2(c)?Y7(c):c;function Q7(c){L1&&I2&&(c=Q(c),I7(c.dep||(c.dep=C0())))}function J7(c,a){c=Q(c);const e=c.dep;e&&D6(e)}function H2(c){return!!(c&&c.__v_isRef===!0)}function e3(c){return Z7(c,!1)}function O6(c){return Z7(c,!0)}function Z7(c,a){return H2(c)?c:new Dl(c,a)}class Dl{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:Q(a),this._value=e?a:k3(a)}get value(){return Q7(this),this._value}set value(a){const e=this.__v_isShallow||L4(a)||i3(a);a=e?a:Q(a),y3(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:k3(a),J7(this))}}function n1(c){return H2(c)?c.value:c}const Ol={get:(c,a,e)=>n1(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const s=c[a];return H2(s)&&!H2(e)?(s.value=e,!0):Reflect.set(c,a,e,r)}};function cc(c){return g1(c)?c:new Proxy(c,Ol)}function Ul(c){const a=W(c)?new Array(c.length):{};for(const e in c)a[e]=ql(c,e);return a}class Il{constructor(a,e,r){this._object=a,this._key=e,this._defaultValue=r,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return vl(Q(this._object),this._key)}}function ql(c,a,e){const r=c[a];return H2(r)?r:new Il(c,a,e)}class Wl{constructor(a,e,r,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new L0(a,()=>{this._dirty||(this._dirty=!0,J7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const a=Q(this);return Q7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function Gl(c,a,e=!1){let r,s;const n=$(c);return n?(r=c,s=G2):(r=c.get,s=c.set),new Wl(r,s,n||!s,e)}function x1(c,a,e,r){let s;try{s=r?c(...r):c()}catch(n){B4(n,a,e)}return s}function D2(c,a,e,r){if($(c)){const n=x1(c,a,e,r);return n&&A7(n)&&n.catch(i=>{B4(i,a,e)}),n}const s=[];for(let n=0;n<c.length;n++)s.push(D2(c[n],a,e,r));return s}function B4(c,a,e,r=!0){const s=a?a.vnode:null;if(a){let n=a.parent;const i=a.proxy,t=e;for(;n;){const o=n.ec;if(o){for(let f=0;f<o.length;f++)if(o[f](c,i,t)===!1)return}n=n.parent}const l=a.appContext.config.errorHandler;if(l){x1(l,null,10,[c,i,t]);return}}jl(c,e,s,r)}function jl(c,a,e,r=!0){console.error(c)}let A3=!1,U6=!1;const b2=[];let Q2=0;const r3=[];let r1=null,R1=0;const ac=Promise.resolve();let w0=null;function y0(c){const a=w0||ac;return c?a.then(this?c.bind(this):c):a}function $l(c){let a=Q2+1,e=b2.length;for(;a<e;){const r=a+e>>>1;P3(b2[r])<c?a=r+1:e=r}return a}function k0(c){(!b2.length||!b2.includes(c,A3&&c.allowRecurse?Q2+1:Q2))&&(c.id==null?b2.push(c):b2.splice($l(c.id),0,c),ec())}function ec(){!A3&&!U6&&(U6=!0,w0=ac.then(sc))}function Kl(c){const a=b2.indexOf(c);a>Q2&&b2.splice(a,1)}function Yl(c){W(c)?r3.push(...c):(!r1||!r1.includes(c,c.allowRecurse?R1+1:R1))&&r3.push(c),ec()}function l5(c,a=A3?Q2+1:0){for(;a<b2.length;a++){const e=b2[a];e&&e.pre&&(b2.splice(a,1),a--,e())}}function rc(c){if(r3.length){const a=[...new Set(r3)];if(r3.length=0,r1){r1.push(...a);return}for(r1=a,r1.sort((e,r)=>P3(e)-P3(r)),R1=0;R1<r1.length;R1++)r1[R1]();r1=null,R1=0}}const P3=c=>c.id==null?1/0:c.id,Xl=(c,a)=>{const e=P3(c)-P3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function sc(c){U6=!1,A3=!0,b2.sort(Xl);const a=G2;try{for(Q2=0;Q2<b2.length;Q2++){const e=b2[Q2];e&&e.active!==!1&&x1(e,null,14)}}finally{Q2=0,b2.length=0,rc(),A3=!1,w0=null,(b2.length||r3.length)&&sc()}}function Ql(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||l2;let s=e;const n=a.startsWith("update:"),i=n&&a.slice(7);if(i&&i in r){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:m,trim:H}=r[f]||l2;H&&(s=e.map(z=>h2(z)?z.trim():z)),m&&(s=e.map(R6))}let t,l=r[t=z6(a)]||r[t=z6(Z2(a))];!l&&n&&(l=r[t=z6(m3(a))]),l&&D2(l,c,6,s);const o=r[t+"Once"];if(o){if(!c.emitted)c.emitted={};else if(c.emitted[t])return;c.emitted[t]=!0,D2(o,c,6,s)}}function nc(c,a,e=!1){const r=a.emitsCache,s=r.get(c);if(s!==void 0)return s;const n=c.emits;let i={},t=!1;if(!$(c)){const l=o=>{const f=nc(o,a,!0);f&&(t=!0,p2(i,f))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!n&&!t?(u2(c)&&r.set(c,null),null):(W(n)?n.forEach(l=>i[l]=null):p2(i,n),u2(c)&&r.set(c,i),i)}function E4(c,a){return!c||!k4(a)?!1:(a=a.slice(2).replace(/Once$/,""),Z(c,a[0].toLowerCase()+a.slice(1))||Z(c,m3(a))||Z(c,a))}let P2=null,F4=null;function g4(c){const a=P2;return P2=c,F4=c&&c.type.__scopeId||null,a}function ic(c){F4=c}function tc(){F4=null}function H4(c,a=P2,e){if(!a||c._n)return c;const r=(...s)=>{r._d&&C5(-1);const n=g4(a);let i;try{i=c(...s)}finally{g4(n),r._d&&C5(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function p6(c){const{type:a,vnode:e,proxy:r,withProxy:s,props:n,propsOptions:[i],slots:t,attrs:l,emit:o,render:f,renderCache:m,data:H,setupState:z,ctx:g,inheritAttrs:b}=c;let P,V;const M=g4(c);try{if(e.shapeFlag&4){const S=s||r;P=X2(f.call(S,S,m,n,z,H,g)),V=l}else{const S=a;P=X2(S.length>1?S(n,{attrs:l,slots:t,emit:o}):S(n,null)),V=a.props?l:Jl(l)}}catch(S){g3.length=0,B4(S,c,1),P=L2(i1)}let A=P;if(V&&b!==!1){const S=Object.keys(V),{shapeFlag:O}=A;S.length&&O&7&&(i&&S.some(h0)&&(V=Zl(V,i)),A=N1(A,V))}return e.dirs&&(A=N1(A),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition&&(A.transition=e.transition),P=A,g4(M),P}const Jl=c=>{let a;for(const e in c)(e==="class"||e==="style"||k4(e))&&((a||(a={}))[e]=c[e]);return a},Zl=(c,a)=>{const e={};for(const r in c)(!h0(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function co(c,a,e){const{props:r,children:s,component:n}=c,{props:i,children:t,patchFlag:l}=a,o=n.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return r?o5(r,i,o):!!i;if(l&8){const f=a.dynamicProps;for(let m=0;m<f.length;m++){const H=f[m];if(i[H]!==r[H]&&!E4(o,H))return!0}}}else return(s||t)&&(!t||!t.$stable)?!0:r===i?!1:r?i?o5(r,i,o):!0:!!i;return!1}function o5(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let s=0;s<r.length;s++){const n=r[s];if(a[n]!==c[n]&&!E4(e,n))return!0}return!1}function ao({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const eo=c=>c.__isSuspense;function ro(c,a){a&&a.pendingBranch?W(c)?a.effects.push(...c):a.effects.push(c):Yl(c)}function so(c,a){return A0(c,null,a)}const e4={};function s3(c,a,e){return A0(c,a,e)}function A0(c,a,{immediate:e,deep:r,flush:s,onTrack:n,onTrigger:i}=l2){var t;const l=F7()===((t=d2)==null?void 0:t.scope)?d2:null;let o,f=!1,m=!1;if(H2(c)?(o=()=>c.value,f=L4(c)):g1(c)?(o=()=>c,r=!0):W(c)?(m=!0,f=c.some(S=>g1(S)||L4(S)),o=()=>c.map(S=>{if(H2(S))return S.value;if(g1(S))return F1(S);if($(S))return x1(S,l,2)})):$(c)?a?o=()=>x1(c,l,2):o=()=>{if(!(l&&l.isUnmounted))return H&&H(),D2(c,l,3,[z])}:o=G2,a&&r){const S=o;o=()=>F1(S())}let H,z=S=>{H=M.onStop=()=>{x1(S,l,4)}},g;if(R3)if(z=G2,a?e&&D2(a,l,3,[o(),m?[]:void 0,z]):o(),s==="sync"){const S=cf();g=S.__watcherHandles||(S.__watcherHandles=[])}else return G2;let b=m?new Array(c.length).fill(e4):e4;const P=()=>{if(M.active)if(a){const S=M.run();(r||f||(m?S.some((O,J)=>y3(O,b[J])):y3(S,b)))&&(H&&H(),D2(a,l,3,[S,b===e4?void 0:m&&b[0]===e4?[]:b,z]),b=S)}else M.run()};P.allowRecurse=!!a;let V;s==="sync"?V=P:s==="post"?V=()=>k2(P,l&&l.suspense):(P.pre=!0,l&&(P.id=l.uid),V=()=>k0(P));const M=new L0(o,V);a?e?P():b=M.run():s==="post"?k2(M.run.bind(M),l&&l.suspense):M.run();const A=()=>{M.stop(),l&&l.scope&&z0(l.scope.effects,M)};return g&&g.push(A),A}function no(c,a,e){const r=this.proxy,s=h2(c)?c.includes(".")?lc(r,c):()=>r[c]:c.bind(r,r);let n;$(a)?n=a:(n=a.handler,e=a);const i=d2;t3(this);const t=A0(s,n.bind(r),e);return i?t3(i):I1(),t}function lc(c,a){const e=a.split(".");return()=>{let r=c;for(let s=0;s<e.length&&r;s++)r=r[e[s]];return r}}function F1(c,a){if(!u2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),H2(c))F1(c.value,a);else if(W(c))for(let e=0;e<c.length;e++)F1(c[e],a);else if(k7(c)||a3(c))c.forEach(e=>{F1(e,a)});else if(T7(c))for(const e in c)F1(c[e],a);return c}function V6(c,a){const e=P2;if(e===null)return c;const r=W4(e)||e.proxy,s=c.dirs||(c.dirs=[]);for(let n=0;n<a.length;n++){let[i,t,l,o=l2]=a[n];i&&($(i)&&(i={mounted:i,updated:i}),i.deep&&F1(t),s.push({dir:i,instance:r,value:t,oldValue:void 0,arg:l,modifiers:o}))}return c}function A1(c,a,e,r){const s=c.dirs,n=a&&a.dirs;for(let i=0;i<s.length;i++){const t=s[i];n&&(t.oldValue=n[i].value);let l=t.dir[r];l&&(u3(),D2(l,e,8,[c.el,t,c,a]),v3())}}function io(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return P0(()=>{c.isMounted=!0}),vc(()=>{c.isUnmounting=!0}),c}const E2=[Function,Array],oc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:E2,onEnter:E2,onAfterEnter:E2,onEnterCancelled:E2,onBeforeLeave:E2,onLeave:E2,onAfterLeave:E2,onLeaveCancelled:E2,onBeforeAppear:E2,onAppear:E2,onAfterAppear:E2,onAppearCancelled:E2},to={name:"BaseTransition",props:oc,setup(c,{slots:a}){const e=jo(),r=io();let s;return()=>{const n=a.default&&mc(a.default(),!0);if(!n||!n.length)return;let i=n[0];if(n.length>1){for(const b of n)if(b.type!==i1){i=b;break}}const t=Q(c),{mode:l}=t;if(r.isLeaving)return d6(i);const o=f5(i);if(!o)return d6(i);const f=I6(o,t,r,e);q6(o,f);const m=e.subTree,H=m&&f5(m);let z=!1;const{getTransitionKey:g}=o.type;if(g){const b=g();s===void 0?s=b:b!==s&&(s=b,z=!0)}if(H&&H.type!==i1&&(!B1(o,H)||z)){const b=I6(H,t,r,e);if(q6(H,b),l==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,e.update.active!==!1&&e.update()},d6(i);l==="in-out"&&o.type!==i1&&(b.delayLeave=(P,V,M)=>{const A=fc(r,H);A[String(H.key)]=H,P._leaveCb=()=>{V(),P._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=M})}return i}}},lo=to;function fc(c,a){const{leavingVNodes:e}=c;let r=e.get(a.type);return r||(r=Object.create(null),e.set(a.type,r)),r}function I6(c,a,e,r){const{appear:s,mode:n,persisted:i=!1,onBeforeEnter:t,onEnter:l,onAfterEnter:o,onEnterCancelled:f,onBeforeLeave:m,onLeave:H,onAfterLeave:z,onLeaveCancelled:g,onBeforeAppear:b,onAppear:P,onAfterAppear:V,onAppearCancelled:M}=a,A=String(c.key),S=fc(e,c),O=(T,E)=>{T&&D2(T,r,9,E)},J=(T,E)=>{const j=E[1];O(T,E),W(T)?T.every(n2=>n2.length<=1)&&j():T.length<=1&&j()},Y={mode:n,persisted:i,beforeEnter(T){let E=t;if(!e.isMounted)if(s)E=b||t;else return;T._leaveCb&&T._leaveCb(!0);const j=S[A];j&&B1(c,j)&&j.el._leaveCb&&j.el._leaveCb(),O(E,[T])},enter(T){let E=l,j=o,n2=f;if(!e.isMounted)if(s)E=P||l,j=V||o,n2=M||f;else return;let B=!1;const c2=T._enterCb=C2=>{B||(B=!0,C2?O(n2,[T]):O(j,[T]),Y.delayedLeave&&Y.delayedLeave(),T._enterCb=void 0)};E?J(E,[T,c2]):c2()},leave(T,E){const j=String(c.key);if(T._enterCb&&T._enterCb(!0),e.isUnmounting)return E();O(m,[T]);let n2=!1;const B=T._leaveCb=c2=>{n2||(n2=!0,E(),c2?O(g,[T]):O(z,[T]),T._leaveCb=void 0,S[j]===c&&delete S[j])};S[j]=c,H?J(H,[T,B]):B()},clone(T){return I6(T,a,e,r)}};return Y}function d6(c){if(D4(c))return c=N1(c),c.children=null,c}function f5(c){return D4(c)?c.children?c.children[0]:void 0:c}function q6(c,a){c.shapeFlag&6&&c.component?q6(c.component.subTree,a):c.shapeFlag&128?(c.ssContent.transition=a.clone(c.ssContent),c.ssFallback.transition=a.clone(c.ssFallback)):c.transition=a}function mc(c,a=!1,e){let r=[],s=0;for(let n=0;n<c.length;n++){let i=c[n];const t=e==null?i.key:String(e)+String(i.key!=null?i.key:n);i.type===A2?(i.patchFlag&128&&s++,r=r.concat(mc(i.children,a,t))):(a||i.type!==i1)&&r.push(t!=null?N1(i,{key:t}):i)}if(s>1)for(let n=0;n<r.length;n++)r[n].patchFlag=-2;return r}function c1(c,a){return $(c)?(()=>p2({name:c.name},a,{setup:c}))():c}const h4=c=>!!c.type.__asyncLoader,D4=c=>c.type.__isKeepAlive;function oo(c,a){uc(c,"a",a)}function fo(c,a){uc(c,"da",a)}function uc(c,a,e=d2){const r=c.__wdc||(c.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return c()});if(O4(a,r,e),e){let s=e.parent;for(;s&&s.parent;)D4(s.parent.vnode)&&mo(r,a,e,s),s=s.parent}}function mo(c,a,e,r){const s=O4(a,c,r,!0);Hc(()=>{z0(r[a],s)},e)}function O4(c,a,e=d2,r=!1){if(e){const s=e[c]||(e[c]=[]),n=a.__weh||(a.__weh=(...i)=>{if(e.isUnmounted)return;u3(),t3(e);const t=D2(a,e,c,i);return I1(),v3(),t});return r?s.unshift(n):s.push(n),n}}const m1=c=>(a,e=d2)=>(!R3||c==="sp")&&O4(c,(...r)=>a(...r),e),uo=m1("bm"),P0=m1("m"),vo=m1("bu"),Ho=m1("u"),vc=m1("bum"),Hc=m1("um"),ho=m1("sp"),zo=m1("rtg"),po=m1("rtc");function Vo(c,a=d2){O4("ec",c,a)}const T0="components";function m5(c,a){return pc(T0,c,!0,a)||c}const hc=Symbol.for("v-ndc");function zc(c){return h2(c)?pc(T0,c,!1)||c:c||hc}function pc(c,a,e=!0,r=!1){const s=P2||d2;if(s){const n=s.type;if(c===T0){const t=Qo(n,!1);if(t&&(t===a||t===Z2(a)||t===T4(Z2(a))))return n}const i=u5(s[c]||n[c],a)||u5(s.appContext[c],a);return!i&&r?n:i}}function u5(c,a){return c&&(c[a]||c[Z2(a)]||c[T4(Z2(a))])}function M6(c,a,e,r){let s;const n=e&&e[r];if(W(c)||h2(c)){s=new Array(c.length);for(let i=0,t=c.length;i<t;i++)s[i]=a(c[i],i,void 0,n&&n[i])}else if(typeof c=="number"){s=new Array(c);for(let i=0;i<c;i++)s[i]=a(i+1,i,void 0,n&&n[i])}else if(u2(c))if(c[Symbol.iterator])s=Array.from(c,(i,t)=>a(i,t,void 0,n&&n[t]));else{const i=Object.keys(c);s=new Array(i.length);for(let t=0,l=i.length;t<l;t++){const o=i[t];s[t]=a(c[o],o,t,n&&n[t])}}else s=[];return e&&(e[r]=s),s}const W6=c=>c?wc(c)?W4(c)||c.proxy:W6(c.parent):null,L3=p2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>W6(c.parent),$root:c=>W6(c.root),$emit:c=>c.emit,$options:c=>_0(c),$forceUpdate:c=>c.f||(c.f=()=>k0(c.update)),$nextTick:c=>c.n||(c.n=y0.bind(c.proxy)),$watch:c=>no.bind(c)}),C6=(c,a)=>c!==l2&&!c.__isScriptSetup&&Z(c,a),Mo={get({_:c},a){const{ctx:e,setupState:r,data:s,props:n,accessCache:i,type:t,appContext:l}=c;let o;if(a[0]!=="$"){const z=i[a];if(z!==void 0)switch(z){case 1:return r[a];case 2:return s[a];case 4:return e[a];case 3:return n[a]}else{if(C6(r,a))return i[a]=1,r[a];if(s!==l2&&Z(s,a))return i[a]=2,s[a];if((o=c.propsOptions[0])&&Z(o,a))return i[a]=3,n[a];if(e!==l2&&Z(e,a))return i[a]=4,e[a];G6&&(i[a]=0)}}const f=L3[a];let m,H;if(f)return a==="$attrs"&&T2(c,"get",a),f(c);if((m=t.__cssModules)&&(m=m[a]))return m;if(e!==l2&&Z(e,a))return i[a]=4,e[a];if(H=l.config.globalProperties,Z(H,a))return H[a]},set({_:c},a,e){const{data:r,setupState:s,ctx:n}=c;return C6(s,a)?(s[a]=e,!0):r!==l2&&Z(r,a)?(r[a]=e,!0):Z(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(n[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:s,propsOptions:n}},i){let t;return!!e[i]||c!==l2&&Z(c,i)||C6(a,i)||(t=n[0])&&Z(t,i)||Z(r,i)||Z(L3,i)||Z(s.config.globalProperties,i)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:Z(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function v5(c){return W(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let G6=!0;function Co(c){const a=_0(c),e=c.proxy,r=c.ctx;G6=!1,a.beforeCreate&&H5(a.beforeCreate,c,"bc");const{data:s,computed:n,methods:i,watch:t,provide:l,inject:o,created:f,beforeMount:m,mounted:H,beforeUpdate:z,updated:g,activated:b,deactivated:P,beforeDestroy:V,beforeUnmount:M,destroyed:A,unmounted:S,render:O,renderTracked:J,renderTriggered:Y,errorCaptured:T,serverPrefetch:E,expose:j,inheritAttrs:n2,components:B,directives:c2,filters:C2}=a;if(o&&Lo(o,r,null),i)for(const i2 in i){const a2=i[i2];$(a2)&&(r[i2]=a2.bind(e))}if(s){const i2=s.call(e,e);u2(i2)&&(c.data=H3(i2))}if(G6=!0,n)for(const i2 in n){const a2=n[i2],a1=$(a2)?a2.bind(e,e):$(a2.get)?a2.get.bind(e,e):G2,v1=!$(a2)&&$(a2.set)?a2.set.bind(e):G2,$2=V2({get:a1,set:v1});Object.defineProperty(r,i2,{enumerable:!0,configurable:!0,get:()=>$2.value,set:w2=>$2.value=w2})}if(t)for(const i2 in t)Vc(t[i2],r,e,i2);if(l){const i2=$(l)?l.call(e):l;Reflect.ownKeys(i2).forEach(a2=>{z4(a2,i2[a2])})}f&&H5(f,c,"c");function X(i2,a2){W(a2)?a2.forEach(a1=>i2(a1.bind(e))):a2&&i2(a2.bind(e))}if(X(uo,m),X(P0,H),X(vo,z),X(Ho,g),X(oo,b),X(fo,P),X(Vo,T),X(po,J),X(zo,Y),X(vc,M),X(Hc,S),X(ho,E),W(j))if(j.length){const i2=c.exposed||(c.exposed={});j.forEach(a2=>{Object.defineProperty(i2,a2,{get:()=>e[a2],set:a1=>e[a2]=a1})})}else c.exposed||(c.exposed={});O&&c.render===G2&&(c.render=O),n2!=null&&(c.inheritAttrs=n2),B&&(c.components=B),c2&&(c.directives=c2)}function Lo(c,a,e=G2){W(c)&&(c=j6(c));for(const r in c){const s=c[r];let n;u2(s)?"default"in s?n=O2(s.from||r,s.default,!0):n=O2(s.from||r):n=O2(s),H2(n)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):a[r]=n}}function H5(c,a,e){D2(W(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function Vc(c,a,e,r){const s=r.includes(".")?lc(e,r):()=>e[r];if(h2(c)){const n=a[c];$(n)&&s3(s,n)}else if($(c))s3(s,c.bind(e));else if(u2(c))if(W(c))c.forEach(n=>Vc(n,a,e,r));else{const n=$(c.handler)?c.handler.bind(e):a[c.handler];$(n)&&s3(s,n,c)}}function _0(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:s,optionsCache:n,config:{optionMergeStrategies:i}}=c.appContext,t=n.get(a);let l;return t?l=t:!s.length&&!e&&!r?l=a:(l={},s.length&&s.forEach(o=>x4(l,o,i,!0)),x4(l,a,i)),u2(a)&&n.set(a,l),l}function x4(c,a,e,r=!1){const{mixins:s,extends:n}=a;n&&x4(c,n,e,!0),s&&s.forEach(i=>x4(c,i,e,!0));for(const i in a)if(!(r&&i==="expose")){const t=go[i]||e&&e[i];c[i]=t?t(c[i],a[i]):a[i]}return c}const go={data:h5,props:z5,emits:z5,methods:M3,computed:M3,beforeCreate:S2,created:S2,beforeMount:S2,mounted:S2,beforeUpdate:S2,updated:S2,beforeDestroy:S2,beforeUnmount:S2,destroyed:S2,unmounted:S2,activated:S2,deactivated:S2,errorCaptured:S2,serverPrefetch:S2,components:M3,directives:M3,watch:bo,provide:h5,inject:xo};function h5(c,a){return a?c?function(){return p2($(c)?c.call(this,this):c,$(a)?a.call(this,this):a)}:a:c}function xo(c,a){return M3(j6(c),j6(a))}function j6(c){if(W(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function S2(c,a){return c?[...new Set([].concat(c,a))]:a}function M3(c,a){return c?p2(Object.create(null),c,a):a}function z5(c,a){return c?W(c)&&W(a)?[...new Set([...c,...a])]:p2(Object.create(null),v5(c),v5(a??{})):a}function bo(c,a){if(!c)return a;if(!a)return c;const e=p2(Object.create(null),c);for(const r in a)e[r]=S2(c[r],a[r]);return e}function dc(){return{app:null,config:{isNativeTag:Xt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let No=0;function So(c,a){return function(r,s=null){$(r)||(r=p2({},r)),s!=null&&!u2(s)&&(s=null);const n=dc(),i=new Set;let t=!1;const l=n.app={_uid:No++,_component:r,_props:s,_container:null,_context:n,_instance:null,version:af,get config(){return n.config},set config(o){},use(o,...f){return i.has(o)||(o&&$(o.install)?(i.add(o),o.install(l,...f)):$(o)&&(i.add(o),o(l,...f))),l},mixin(o){return n.mixins.includes(o)||n.mixins.push(o),l},component(o,f){return f?(n.components[o]=f,l):n.components[o]},directive(o,f){return f?(n.directives[o]=f,l):n.directives[o]},mount(o,f,m){if(!t){const H=L2(r,s);return H.appContext=n,f&&a?a(H,o):c(H,o,m),t=!0,l._container=o,o.__vue_app__=l,W4(H.component)||H.component.proxy}},unmount(){t&&(c(null,l._container),delete l._container.__vue_app__)},provide(o,f){return n.provides[o]=f,l},runWithContext(o){T3=l;try{return o()}finally{T3=null}}};return l}}let T3=null;function z4(c,a){if(d2){let e=d2.provides;const r=d2.parent&&d2.parent.provides;r===e&&(e=d2.provides=Object.create(r)),e[c]=a}}function O2(c,a,e=!1){const r=d2||P2;if(r||T3){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:T3._context.provides;if(s&&c in s)return s[c];if(arguments.length>1)return e&&$(a)?a.call(r&&r.proxy):a}}function wo(){return!!(d2||P2||T3)}function yo(c,a,e,r=!1){const s={},n={};M4(n,q4,1),c.propsDefaults=Object.create(null),Mc(c,a,s,n);for(const i in c.propsOptions[0])i in s||(s[i]=void 0);e?c.props=r?s:Fl(s):c.type.props?c.props=s:c.props=n,c.attrs=n}function ko(c,a,e,r){const{props:s,attrs:n,vnode:{patchFlag:i}}=c,t=Q(s),[l]=c.propsOptions;let o=!1;if((r||i>0)&&!(i&16)){if(i&8){const f=c.vnode.dynamicProps;for(let m=0;m<f.length;m++){let H=f[m];if(E4(c.emitsOptions,H))continue;const z=a[H];if(l)if(Z(n,H))z!==n[H]&&(n[H]=z,o=!0);else{const g=Z2(H);s[g]=$6(l,t,g,z,c,!1)}else z!==n[H]&&(n[H]=z,o=!0)}}}else{Mc(c,a,s,n)&&(o=!0);let f;for(const m in t)(!a||!Z(a,m)&&((f=m3(m))===m||!Z(a,f)))&&(l?e&&(e[m]!==void 0||e[f]!==void 0)&&(s[m]=$6(l,t,m,void 0,c,!0)):delete s[m]);if(n!==t)for(const m in n)(!a||!Z(a,m))&&(delete n[m],o=!0)}o&&t1(c,"set","$attrs")}function Mc(c,a,e,r){const[s,n]=c.propsOptions;let i=!1,t;if(a)for(let l in a){if(u4(l))continue;const o=a[l];let f;s&&Z(s,f=Z2(l))?!n||!n.includes(f)?e[f]=o:(t||(t={}))[f]=o:E4(c.emitsOptions,l)||(!(l in r)||o!==r[l])&&(r[l]=o,i=!0)}if(n){const l=Q(e),o=t||l2;for(let f=0;f<n.length;f++){const m=n[f];e[m]=$6(s,l,m,o[m],c,!Z(o,m))}}return i}function $6(c,a,e,r,s,n){const i=c[e];if(i!=null){const t=Z(i,"default");if(t&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&$(l)){const{propsDefaults:o}=s;e in o?r=o[e]:(t3(s),r=o[e]=l.call(null,a),I1())}else r=l}i[0]&&(n&&!t?r=!1:i[1]&&(r===""||r===m3(e))&&(r=!0))}return r}function Cc(c,a,e=!1){const r=a.propsCache,s=r.get(c);if(s)return s;const n=c.props,i={},t=[];let l=!1;if(!$(c)){const f=m=>{l=!0;const[H,z]=Cc(m,a,!0);p2(i,H),z&&t.push(...z)};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}if(!n&&!l)return u2(c)&&r.set(c,c3),c3;if(W(n))for(let f=0;f<n.length;f++){const m=Z2(n[f]);p5(m)&&(i[m]=l2)}else if(n)for(const f in n){const m=Z2(f);if(p5(m)){const H=n[f],z=i[m]=W(H)||$(H)?{type:H}:p2({},H);if(z){const g=M5(Boolean,z.type),b=M5(String,z.type);z[0]=g>-1,z[1]=b<0||g<b,(g>-1||Z(z,"default"))&&t.push(m)}}}const o=[i,t];return u2(c)&&r.set(c,o),o}function p5(c){return c[0]!=="$"}function V5(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function d5(c,a){return V5(c)===V5(a)}function M5(c,a){return W(a)?a.findIndex(e=>d5(e,c)):$(a)&&d5(a,c)?0:-1}const Lc=c=>c[0]==="_"||c==="$stable",R0=c=>W(c)?c.map(X2):[X2(c)],Ao=(c,a,e)=>{if(a._n)return a;const r=H4((...s)=>R0(a(...s)),e);return r._c=!1,r},gc=(c,a,e)=>{const r=c._ctx;for(const s in c){if(Lc(s))continue;const n=c[s];if($(n))a[s]=Ao(s,n,r);else if(n!=null){const i=R0(n);a[s]=()=>i}}},xc=(c,a)=>{const e=R0(a);c.slots.default=()=>e},Po=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=Q(a),M4(a,"_",e)):gc(a,c.slots={})}else c.slots={},a&&xc(c,a);M4(c.slots,q4,1)},To=(c,a,e)=>{const{vnode:r,slots:s}=c;let n=!0,i=l2;if(r.shapeFlag&32){const t=a._;t?e&&t===1?n=!1:(p2(s,a),!e&&t===1&&delete s._):(n=!a.$stable,gc(a,s)),i=a}else a&&(xc(c,a),i={default:1});if(n)for(const t in s)!Lc(t)&&!(t in i)&&delete s[t]};function K6(c,a,e,r,s=!1){if(W(c)){c.forEach((H,z)=>K6(H,a&&(W(a)?a[z]:a),e,r,s));return}if(h4(r)&&!s)return;const n=r.shapeFlag&4?W4(r.component)||r.component.proxy:r.el,i=s?null:n,{i:t,r:l}=c,o=a&&a.r,f=t.refs===l2?t.refs={}:t.refs,m=t.setupState;if(o!=null&&o!==l&&(h2(o)?(f[o]=null,Z(m,o)&&(m[o]=null)):H2(o)&&(o.value=null)),$(l))x1(l,t,12,[i,f]);else{const H=h2(l),z=H2(l);if(H||z){const g=()=>{if(c.f){const b=H?Z(m,l)?m[l]:f[l]:l.value;s?W(b)&&z0(b,n):W(b)?b.includes(n)||b.push(n):H?(f[l]=[n],Z(m,l)&&(m[l]=f[l])):(l.value=[n],c.k&&(f[c.k]=l.value))}else H?(f[l]=i,Z(m,l)&&(m[l]=i)):z&&(l.value=i,c.k&&(f[c.k]=i))};i?(g.id=-1,k2(g,e)):g()}}}const k2=ro;function _o(c){return Ro(c)}function Ro(c,a){const e=B6();e.__VUE__=!0;const{insert:r,remove:s,patchProp:n,createElement:i,createText:t,createComment:l,setText:o,setElementText:f,parentNode:m,nextSibling:H,setScopeId:z=G2,insertStaticContent:g}=c,b=(u,v,h,p=null,C=null,L=null,k=!1,N=null,w=!!v.dynamicChildren)=>{if(u===v)return;u&&!B1(u,v)&&(p=d(u),w2(u,C,L,!0),u=null),v.patchFlag===-2&&(w=!1,v.dynamicChildren=null);const{type:x,ref:I,shapeFlag:F}=v;switch(x){case U4:P(u,v,h,p);break;case i1:V(u,v,h,p);break;case L6:u==null&&M(v,h,p,k);break;case A2:B(u,v,h,p,C,L,k,N,w);break;default:F&1?O(u,v,h,p,C,L,k,N,w):F&6?c2(u,v,h,p,C,L,k,N,w):(F&64||F&128)&&x.process(u,v,h,p,C,L,k,N,w,y)}I!=null&&C&&K6(I,u&&u.ref,L,v||u,!v)},P=(u,v,h,p)=>{if(u==null)r(v.el=t(v.children),h,p);else{const C=v.el=u.el;v.children!==u.children&&o(C,v.children)}},V=(u,v,h,p)=>{u==null?r(v.el=l(v.children||""),h,p):v.el=u.el},M=(u,v,h,p)=>{[u.el,u.anchor]=g(u.children,v,h,p,u.el,u.anchor)},A=({el:u,anchor:v},h,p)=>{let C;for(;u&&u!==v;)C=H(u),r(u,h,p),u=C;r(v,h,p)},S=({el:u,anchor:v})=>{let h;for(;u&&u!==v;)h=H(u),s(u),u=h;s(v)},O=(u,v,h,p,C,L,k,N,w)=>{k=k||v.type==="svg",u==null?J(v,h,p,C,L,k,N,w):E(u,v,C,L,k,N,w)},J=(u,v,h,p,C,L,k,N)=>{let w,x;const{type:I,props:F,shapeFlag:q,transition:G,dirs:K}=u;if(w=u.el=i(u.type,L,F&&F.is,F),q&8?f(w,u.children):q&16&&T(u.children,w,null,p,C,L&&I!=="foreignObject",k,N),K&&A1(u,null,p,"created"),Y(w,u,u.scopeId,k,p),F){for(const s2 in F)s2!=="value"&&!u4(s2)&&n(w,s2,null,F[s2],L,u.children,p,C,g2);"value"in F&&n(w,"value",null,F.value),(x=F.onVnodeBeforeMount)&&Y2(x,p,u)}K&&A1(u,null,p,"beforeMount");const t2=(!C||C&&!C.pendingBranch)&&G&&!G.persisted;t2&&G.beforeEnter(w),r(w,v,h),((x=F&&F.onVnodeMounted)||t2||K)&&k2(()=>{x&&Y2(x,p,u),t2&&G.enter(w),K&&A1(u,null,p,"mounted")},C)},Y=(u,v,h,p,C)=>{if(h&&z(u,h),p)for(let L=0;L<p.length;L++)z(u,p[L]);if(C){let L=C.subTree;if(v===L){const k=C.vnode;Y(u,k,k.scopeId,k.slotScopeIds,C.parent)}}},T=(u,v,h,p,C,L,k,N,w=0)=>{for(let x=w;x<u.length;x++){const I=u[x]=N?M1(u[x]):X2(u[x]);b(null,I,v,h,p,C,L,k,N)}},E=(u,v,h,p,C,L,k)=>{const N=v.el=u.el;let{patchFlag:w,dynamicChildren:x,dirs:I}=v;w|=u.patchFlag&16;const F=u.props||l2,q=v.props||l2;let G;h&&P1(h,!1),(G=q.onVnodeBeforeUpdate)&&Y2(G,h,v,u),I&&A1(v,u,h,"beforeUpdate"),h&&P1(h,!0);const K=C&&v.type!=="foreignObject";if(x?j(u.dynamicChildren,x,N,h,p,K,L):k||a2(u,v,N,null,h,p,K,L,!1),w>0){if(w&16)n2(N,v,F,q,h,p,C);else if(w&2&&F.class!==q.class&&n(N,"class",null,q.class,C),w&4&&n(N,"style",F.style,q.style,C),w&8){const t2=v.dynamicProps;for(let s2=0;s2<t2.length;s2++){const z2=t2[s2],U2=F[z2],$1=q[z2];($1!==U2||z2==="value")&&n(N,z2,U2,$1,C,u.children,h,p,g2)}}w&1&&u.children!==v.children&&f(N,v.children)}else!k&&x==null&&n2(N,v,F,q,h,p,C);((G=q.onVnodeUpdated)||I)&&k2(()=>{G&&Y2(G,h,v,u),I&&A1(v,u,h,"updated")},p)},j=(u,v,h,p,C,L,k)=>{for(let N=0;N<v.length;N++){const w=u[N],x=v[N],I=w.el&&(w.type===A2||!B1(w,x)||w.shapeFlag&70)?m(w.el):h;b(w,x,I,null,p,C,L,k,!0)}},n2=(u,v,h,p,C,L,k)=>{if(h!==p){if(h!==l2)for(const N in h)!u4(N)&&!(N in p)&&n(u,N,h[N],null,k,v.children,C,L,g2);for(const N in p){if(u4(N))continue;const w=p[N],x=h[N];w!==x&&N!=="value"&&n(u,N,x,w,k,v.children,C,L,g2)}"value"in p&&n(u,"value",h.value,p.value)}},B=(u,v,h,p,C,L,k,N,w)=>{const x=v.el=u?u.el:t(""),I=v.anchor=u?u.anchor:t("");let{patchFlag:F,dynamicChildren:q,slotScopeIds:G}=v;G&&(N=N?N.concat(G):G),u==null?(r(x,h,p),r(I,h,p),T(v.children,h,I,C,L,k,N,w)):F>0&&F&64&&q&&u.dynamicChildren?(j(u.dynamicChildren,q,h,C,L,k,N),(v.key!=null||C&&v===C.subTree)&&bc(u,v,!0)):a2(u,v,h,I,C,L,k,N,w)},c2=(u,v,h,p,C,L,k,N,w)=>{v.slotScopeIds=N,u==null?v.shapeFlag&512?C.ctx.activate(v,h,p,k,w):C2(v,h,p,C,L,k,w):N2(u,v,w)},C2=(u,v,h,p,C,L,k)=>{const N=u.component=Go(u,p,C);if(D4(u)&&(N.ctx.renderer=y),$o(N),N.asyncDep){if(C&&C.registerDep(N,X),!u.el){const w=N.subTree=L2(i1);V(null,w,v,h)}return}X(N,u,v,h,C,L,k)},N2=(u,v,h)=>{const p=v.component=u.component;if(co(u,v,h))if(p.asyncDep&&!p.asyncResolved){i2(p,v,h);return}else p.next=v,Kl(p.update),p.update();else v.el=u.el,p.vnode=v},X=(u,v,h,p,C,L,k)=>{const N=()=>{if(u.isMounted){let{next:I,bu:F,u:q,parent:G,vnode:K}=u,t2=I,s2;P1(u,!1),I?(I.el=K.el,i2(u,I,k)):I=K,F&&v4(F),(s2=I.props&&I.props.onVnodeBeforeUpdate)&&Y2(s2,G,I,K),P1(u,!0);const z2=p6(u),U2=u.subTree;u.subTree=z2,b(U2,z2,m(U2.el),d(U2),u,C,L),I.el=z2.el,t2===null&&ao(u,z2.el),q&&k2(q,C),(s2=I.props&&I.props.onVnodeUpdated)&&k2(()=>Y2(s2,G,I,K),C)}else{let I;const{el:F,props:q}=v,{bm:G,m:K,parent:t2}=u,s2=h4(v);if(P1(u,!1),G&&v4(G),!s2&&(I=q&&q.onVnodeBeforeMount)&&Y2(I,t2,v),P1(u,!0),F&&e2){const z2=()=>{u.subTree=p6(u),e2(F,u.subTree,u,C,null)};s2?v.type.__asyncLoader().then(()=>!u.isUnmounted&&z2()):z2()}else{const z2=u.subTree=p6(u);b(null,z2,h,p,u,C,L),v.el=z2.el}if(K&&k2(K,C),!s2&&(I=q&&q.onVnodeMounted)){const z2=v;k2(()=>Y2(I,t2,z2),C)}(v.shapeFlag&256||t2&&h4(t2.vnode)&&t2.vnode.shapeFlag&256)&&u.a&&k2(u.a,C),u.isMounted=!0,v=h=p=null}},w=u.effect=new L0(N,()=>k0(x),u.scope),x=u.update=()=>w.run();x.id=u.uid,P1(u,!0),x()},i2=(u,v,h)=>{v.component=u;const p=u.vnode.props;u.vnode=v,u.next=null,ko(u,v.props,p,h),To(u,v.children,h),u3(),l5(),v3()},a2=(u,v,h,p,C,L,k,N,w=!1)=>{const x=u&&u.children,I=u?u.shapeFlag:0,F=v.children,{patchFlag:q,shapeFlag:G}=v;if(q>0){if(q&128){v1(x,F,h,p,C,L,k,N,w);return}else if(q&256){a1(x,F,h,p,C,L,k,N,w);return}}G&8?(I&16&&g2(x,C,L),F!==x&&f(h,F)):I&16?G&16?v1(x,F,h,p,C,L,k,N,w):g2(x,C,L,!0):(I&8&&f(h,""),G&16&&T(F,h,p,C,L,k,N,w))},a1=(u,v,h,p,C,L,k,N,w)=>{u=u||c3,v=v||c3;const x=u.length,I=v.length,F=Math.min(x,I);let q;for(q=0;q<F;q++){const G=v[q]=w?M1(v[q]):X2(v[q]);b(u[q],G,h,null,C,L,k,N,w)}x>I?g2(u,C,L,!0,!1,F):T(v,h,p,C,L,k,N,w,F)},v1=(u,v,h,p,C,L,k,N,w)=>{let x=0;const I=v.length;let F=u.length-1,q=I-1;for(;x<=F&&x<=q;){const G=u[x],K=v[x]=w?M1(v[x]):X2(v[x]);if(B1(G,K))b(G,K,h,null,C,L,k,N,w);else break;x++}for(;x<=F&&x<=q;){const G=u[F],K=v[q]=w?M1(v[q]):X2(v[q]);if(B1(G,K))b(G,K,h,null,C,L,k,N,w);else break;F--,q--}if(x>F){if(x<=q){const G=q+1,K=G<I?v[G].el:p;for(;x<=q;)b(null,v[x]=w?M1(v[x]):X2(v[x]),h,K,C,L,k,N,w),x++}}else if(x>q)for(;x<=F;)w2(u[x],C,L,!0),x++;else{const G=x,K=x,t2=new Map;for(x=K;x<=q;x++){const _2=v[x]=w?M1(v[x]):X2(v[x]);_2.key!=null&&t2.set(_2.key,x)}let s2,z2=0;const U2=q-K+1;let $1=!1,X8=0;const z3=new Array(U2);for(x=0;x<U2;x++)z3[x]=0;for(x=G;x<=F;x++){const _2=u[x];if(z2>=U2){w2(_2,C,L,!0);continue}let K2;if(_2.key!=null)K2=t2.get(_2.key);else for(s2=K;s2<=q;s2++)if(z3[s2-K]===0&&B1(_2,v[s2])){K2=s2;break}K2===void 0?w2(_2,C,L,!0):(z3[K2-K]=x+1,K2>=X8?X8=K2:$1=!0,b(_2,v[K2],h,null,C,L,k,N,w),z2++)}const Q8=$1?Bo(z3):c3;for(s2=Q8.length-1,x=U2-1;x>=0;x--){const _2=K+x,K2=v[_2],J8=_2+1<I?v[_2+1].el:p;z3[x]===0?b(null,K2,h,J8,C,L,k,N,w):$1&&(s2<0||x!==Q8[s2]?$2(K2,h,J8,2):s2--)}}},$2=(u,v,h,p,C=null)=>{const{el:L,type:k,transition:N,children:w,shapeFlag:x}=u;if(x&6){$2(u.component.subTree,v,h,p);return}if(x&128){u.suspense.move(v,h,p);return}if(x&64){k.move(u,v,h,y);return}if(k===A2){r(L,v,h);for(let F=0;F<w.length;F++)$2(w[F],v,h,p);r(u.anchor,v,h);return}if(k===L6){A(u,v,h);return}if(p!==2&&x&1&&N)if(p===0)N.beforeEnter(L),r(L,v,h),k2(()=>N.enter(L),C);else{const{leave:F,delayLeave:q,afterLeave:G}=N,K=()=>r(L,v,h),t2=()=>{F(L,()=>{K(),G&&G()})};q?q(L,K,t2):t2()}else r(L,v,h)},w2=(u,v,h,p=!1,C=!1)=>{const{type:L,props:k,ref:N,children:w,dynamicChildren:x,shapeFlag:I,patchFlag:F,dirs:q}=u;if(N!=null&&K6(N,null,h,u,!0),I&256){v.ctx.deactivate(u);return}const G=I&1&&q,K=!h4(u);let t2;if(K&&(t2=k&&k.onVnodeBeforeUnmount)&&Y2(t2,v,u),I&6)X3(u.component,h,p);else{if(I&128){u.suspense.unmount(h,p);return}G&&A1(u,null,v,"beforeUnmount"),I&64?u.type.remove(u,v,h,C,y,p):x&&(L!==A2||F>0&&F&64)?g2(x,v,h,!1,!0):(L===A2&&F&384||!C&&I&16)&&g2(w,v,h),p&&G1(u)}(K&&(t2=k&&k.onVnodeUnmounted)||G)&&k2(()=>{t2&&Y2(t2,v,u),G&&A1(u,null,v,"unmounted")},h)},G1=u=>{const{type:v,el:h,anchor:p,transition:C}=u;if(v===A2){j1(h,p);return}if(v===L6){S(u);return}const L=()=>{s(h),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(u.shapeFlag&1&&C&&!C.persisted){const{leave:k,delayLeave:N}=C,w=()=>k(h,L);N?N(u.el,L,w):w()}else L()},j1=(u,v)=>{let h;for(;u!==v;)h=H(u),s(u),u=h;s(v)},X3=(u,v,h)=>{const{bum:p,scope:C,update:L,subTree:k,um:N}=u;p&&v4(p),C.stop(),L&&(L.active=!1,w2(k,u,v,h)),N&&k2(N,v),k2(()=>{u.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},g2=(u,v,h,p=!1,C=!1,L=0)=>{for(let k=L;k<u.length;k++)w2(u[k],v,h,p,C)},d=u=>u.shapeFlag&6?d(u.component.subTree):u.shapeFlag&128?u.suspense.next():H(u.anchor||u.el),R=(u,v,h)=>{u==null?v._vnode&&w2(v._vnode,null,null,!0):b(v._vnode||null,u,v,null,null,null,h),l5(),rc(),v._vnode=u},y={p:b,um:w2,m:$2,r:G1,mt:C2,mc:T,pc:a2,pbc:j,n:d,o:c};let U,e2;return a&&([U,e2]=a(y)),{render:R,hydrate:U,createApp:So(R,U)}}function P1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function bc(c,a,e=!1){const r=c.children,s=a.children;if(W(r)&&W(s))for(let n=0;n<r.length;n++){const i=r[n];let t=s[n];t.shapeFlag&1&&!t.dynamicChildren&&((t.patchFlag<=0||t.patchFlag===32)&&(t=s[n]=M1(s[n]),t.el=i.el),e||bc(i,t)),t.type===U4&&(t.el=i.el)}}function Bo(c){const a=c.slice(),e=[0];let r,s,n,i,t;const l=c.length;for(r=0;r<l;r++){const o=c[r];if(o!==0){if(s=e[e.length-1],c[s]<o){a[r]=s,e.push(r);continue}for(n=0,i=e.length-1;n<i;)t=n+i>>1,c[e[t]]<o?n=t+1:i=t;o<c[e[n]]&&(n>0&&(a[r]=e[n-1]),e[n]=r)}}for(n=e.length,i=e[n-1];n-- >0;)e[n]=i,i=a[i];return e}const Eo=c=>c.__isTeleport,A2=Symbol.for("v-fgt"),U4=Symbol.for("v-txt"),i1=Symbol.for("v-cmt"),L6=Symbol.for("v-stc"),g3=[];let q2=null;function x2(c=!1){g3.push(q2=c?null:[])}function Fo(){g3.pop(),q2=g3[g3.length-1]||null}let _3=1;function C5(c){_3+=c}function Nc(c){return c.dynamicChildren=_3>0?q2||c3:null,Fo(),_3>0&&q2&&q2.push(c),c}function F2(c,a,e,r,s,n){return Nc(o2(c,a,e,r,s,n,!0))}function I4(c,a,e,r,s){return Nc(L2(c,a,e,r,s,!0))}function Y6(c){return c?c.__v_isVNode===!0:!1}function B1(c,a){return c.type===a.type&&c.key===a.key}const q4="__vInternal",Sc=({key:c})=>c??null,p4=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?h2(c)||H2(c)||$(c)?{i:P2,r:c,k:a,f:!!e}:c:null);function o2(c,a=null,e=null,r=0,s=null,n=c===A2?0:1,i=!1,t=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&Sc(a),ref:a&&p4(a),scopeId:F4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:P2};return t?(B0(l,e),n&128&&c.normalize(l)):e&&(l.shapeFlag|=h2(e)?8:16),_3>0&&!i&&q2&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&q2.push(l),l}const L2=Do;function Do(c,a=null,e=null,r=0,s=null,n=!1){if((!c||c===hc)&&(c=i1),Y6(c)){const t=N1(c,a,!0);return e&&B0(t,e),_3>0&&!n&&q2&&(t.shapeFlag&6?q2[q2.indexOf(c)]=t:q2.push(t)),t.patchFlag|=-2,t}if(Jo(c)&&(c=c.__vccOpts),a){a=Oo(a);let{class:t,style:l}=a;t&&!h2(t)&&(a.class=M0(t)),u2(l)&&(X7(l)&&!W(l)&&(l=p2({},l)),a.style=d0(l))}const i=h2(c)?1:eo(c)?128:Eo(c)?64:u2(c)?4:$(c)?2:0;return o2(c,a,e,r,s,i,n,!0)}function Oo(c){return c?X7(c)||q4 in c?p2({},c):c:null}function N1(c,a,e=!1){const{props:r,ref:s,patchFlag:n,children:i}=c,t=a?Io(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:t,key:t&&Sc(t),ref:a&&a.ref?e&&s?W(s)?s.concat(p4(a)):[s,p4(a)]:p4(a):s,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==A2?n===-1?16:n|16:n,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&N1(c.ssContent),ssFallback:c.ssFallback&&N1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function Uo(c=" ",a=0){return L2(U4,null,c,a)}function X2(c){return c==null||typeof c=="boolean"?L2(i1):W(c)?L2(A2,null,c.slice()):typeof c=="object"?M1(c):L2(U4,null,String(c))}function M1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:N1(c)}function B0(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(W(a))e=16;else if(typeof a=="object")if(r&65){const s=a.default;s&&(s._c&&(s._d=!1),B0(c,s()),s._c&&(s._d=!0));return}else{e=32;const s=a._;!s&&!(q4 in a)?a._ctx=P2:s===3&&P2&&(P2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else $(a)?(a={default:a,_ctx:P2},e=32):(a=String(a),r&64?(e=16,a=[Uo(a)]):e=8);c.children=a,c.shapeFlag|=e}function Io(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const s in r)if(s==="class")a.class!==r.class&&(a.class=M0([a.class,r.class]));else if(s==="style")a.style=d0([a.style,r.style]);else if(k4(s)){const n=a[s],i=r[s];i&&n!==i&&!(W(n)&&n.includes(i))&&(a[s]=n?[].concat(n,i):i)}else s!==""&&(a[s]=r[s])}return a}function Y2(c,a,e,r=null){D2(c,a,7,[e,r])}const qo=dc();let Wo=0;function Go(c,a,e){const r=c.type,s=(a?a.appContext:c.appContext)||qo,n={uid:Wo++,vnode:c,type:r,parent:a,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new B7(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cc(r,s),emitsOptions:nc(r,s),emit:null,emitted:null,propsDefaults:l2,inheritAttrs:r.inheritAttrs,ctx:l2,data:l2,props:l2,attrs:l2,slots:l2,refs:l2,setupState:l2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=a?a.root:n,n.emit=Ql.bind(null,n),c.ce&&c.ce(n),n}let d2=null;const jo=()=>d2||P2;let E0,K1,L5="__VUE_INSTANCE_SETTERS__";(K1=B6()[L5])||(K1=B6()[L5]=[]),K1.push(c=>d2=c),E0=c=>{K1.length>1?K1.forEach(a=>a(c)):K1[0](c)};const t3=c=>{E0(c),c.scope.on()},I1=()=>{d2&&d2.scope.off(),E0(null)};function wc(c){return c.vnode.shapeFlag&4}let R3=!1;function $o(c,a=!1){R3=a;const{props:e,children:r}=c.vnode,s=wc(c);yo(c,e,s,a),Po(c,r);const n=s?Ko(c,a):void 0;return R3=!1,n}function Ko(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=R4(new Proxy(c.ctx,Mo));const{setup:r}=e;if(r){const s=c.setupContext=r.length>1?Xo(c):null;t3(c),u3();const n=x1(r,c,0,[c.props,s]);if(v3(),I1(),A7(n)){if(n.then(I1,I1),a)return n.then(i=>{g5(c,i,a)}).catch(i=>{B4(i,c,0)});c.asyncDep=n}else g5(c,n,a)}else yc(c,a)}function g5(c,a,e){$(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:u2(a)&&(c.setupState=cc(a)),yc(c,e)}let x5;function yc(c,a,e){const r=c.type;if(!c.render){if(!a&&x5&&!r.render){const s=r.template||_0(c).template;if(s){const{isCustomElement:n,compilerOptions:i}=c.appContext.config,{delimiters:t,compilerOptions:l}=r,o=p2(p2({isCustomElement:n,delimiters:t},i),l);r.render=x5(s,o)}}c.render=r.render||G2}t3(c),u3(),Co(c),v3(),I1()}function Yo(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return T2(c,"get","$attrs"),a[e]}}))}function Xo(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return Yo(c)},slots:c.slots,emit:c.emit,expose:a}}function W4(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(cc(R4(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in L3)return L3[e](c)},has(a,e){return e in a||e in L3}}))}function Qo(c,a=!0){return $(c)?c.displayName||c.name:c.name||a&&c.__name}function Jo(c){return $(c)&&"__vccOpts"in c}const V2=(c,a)=>Gl(c,a,R3);function G4(c,a,e){const r=arguments.length;return r===2?u2(a)&&!W(a)?Y6(a)?L2(c,null,[a]):L2(c,a):L2(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&Y6(e)&&(e=[e]),L2(c,a,e))}const Zo=Symbol.for("v-scx"),cf=()=>O2(Zo),af="3.3.4",ef="http://www.w3.org/2000/svg",E1=typeof document<"u"?document:null,b5=E1&&E1.createElement("template"),rf={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const s=a?E1.createElementNS(ef,c):E1.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:c=>E1.createTextNode(c),createComment:c=>E1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>E1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,s,n){const i=e?e.previousSibling:a.lastChild;if(s&&(s===n||s.nextSibling))for(;a.insertBefore(s.cloneNode(!0),e),!(s===n||!(s=s.nextSibling)););else{b5.innerHTML=r?`<svg>${c}</svg>`:c;const t=b5.content;if(r){const l=t.firstChild;for(;l.firstChild;)t.appendChild(l.firstChild);t.removeChild(l)}a.insertBefore(t,e)}return[i?i.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function sf(c,a,e){const r=c._vtc;r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function nf(c,a,e){const r=c.style,s=h2(e);if(e&&!s){if(a&&!h2(a))for(const n in a)e[n]==null&&X6(r,n,"");for(const n in e)X6(r,n,e[n])}else{const n=r.display;s?a!==e&&(r.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(r.display=n)}}const N5=/\s*!important$/;function X6(c,a,e){if(W(e))e.forEach(r=>X6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=tf(c,a);N5.test(e)?c.setProperty(m3(r),e.replace(N5,""),"important"):c[r]=e}}const S5=["Webkit","Moz","ms"],g6={};function tf(c,a){const e=g6[a];if(e)return e;let r=Z2(a);if(r!=="filter"&&r in c)return g6[a]=r;r=T4(r);for(let s=0;s<S5.length;s++){const n=S5[s]+r;if(n in c)return g6[a]=n}return a}const w5="http://www.w3.org/1999/xlink";function lf(c,a,e,r,s){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(w5,a.slice(6,a.length)):c.setAttributeNS(w5,a,e);else{const n=ll(a);e==null||n&&!_7(e)?c.removeAttribute(a):c.setAttribute(a,n?"":e)}}function of(c,a,e,r,s,n,i){if(a==="innerHTML"||a==="textContent"){r&&i(r,s,n),c[a]=e??"";return}const t=c.tagName;if(a==="value"&&t!=="PROGRESS"&&!t.includes("-")){c._value=e;const o=t==="OPTION"?c.getAttribute("value"):c.value,f=e??"";o!==f&&(c.value=f),e==null&&c.removeAttribute(a);return}let l=!1;if(e===""||e==null){const o=typeof c[a];o==="boolean"?e=_7(e):e==null&&o==="string"?(e="",l=!0):o==="number"&&(e=0,l=!0)}try{c[a]=e}catch{}l&&c.removeAttribute(a)}function X1(c,a,e,r){c.addEventListener(a,e,r)}function ff(c,a,e,r){c.removeEventListener(a,e,r)}function mf(c,a,e,r,s=null){const n=c._vei||(c._vei={}),i=n[a];if(r&&i)i.value=r;else{const[t,l]=uf(a);if(r){const o=n[a]=hf(r,s);X1(c,t,o,l)}else i&&(ff(c,t,i,l),n[a]=void 0)}}const y5=/(?:Once|Passive|Capture)$/;function uf(c){let a;if(y5.test(c)){a={};let r;for(;r=c.match(y5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):m3(c.slice(2)),a]}let x6=0;const vf=Promise.resolve(),Hf=()=>x6||(vf.then(()=>x6=0),x6=Date.now());function hf(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;D2(zf(r,e.value),a,5,[r])};return e.value=c,e.attached=Hf(),e}function zf(c,a){if(W(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>s=>!s._stopped&&r&&r(s))}else return a}const k5=/^on[a-z]/,pf=(c,a,e,r,s=!1,n,i,t,l)=>{a==="class"?sf(c,r,s):a==="style"?nf(c,e,r):k4(a)?h0(a)||mf(c,a,e,r,i):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Vf(c,a,r,s))?of(c,a,r,n,i,t,l):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),lf(c,a,r,s))};function Vf(c,a,e,r){return r?!!(a==="innerHTML"||a==="textContent"||a in c&&k5.test(a)&&$(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||k5.test(a)&&h2(e)?!1:a in c}const h1="transition",p3="animation",F0=(c,{slots:a})=>G4(lo,df(c),a);F0.displayName="Transition";const kc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};F0.props=p2({},oc,kc);const T1=(c,a=[])=>{W(c)?c.forEach(e=>e(...a)):c&&c(...a)},A5=c=>c?W(c)?c.some(a=>a.length>1):c.length>1:!1;function df(c){const a={};for(const B in c)B in kc||(a[B]=c[B]);if(c.css===!1)return a;const{name:e="v",type:r,duration:s,enterFromClass:n=`${e}-enter-from`,enterActiveClass:i=`${e}-enter-active`,enterToClass:t=`${e}-enter-to`,appearFromClass:l=n,appearActiveClass:o=i,appearToClass:f=t,leaveFromClass:m=`${e}-leave-from`,leaveActiveClass:H=`${e}-leave-active`,leaveToClass:z=`${e}-leave-to`}=c,g=Mf(s),b=g&&g[0],P=g&&g[1],{onBeforeEnter:V,onEnter:M,onEnterCancelled:A,onLeave:S,onLeaveCancelled:O,onBeforeAppear:J=V,onAppear:Y=M,onAppearCancelled:T=A}=a,E=(B,c2,C2)=>{_1(B,c2?f:t),_1(B,c2?o:i),C2&&C2()},j=(B,c2)=>{B._isLeaving=!1,_1(B,m),_1(B,z),_1(B,H),c2&&c2()},n2=B=>(c2,C2)=>{const N2=B?Y:M,X=()=>E(c2,B,C2);T1(N2,[c2,X]),P5(()=>{_1(c2,B?l:n),z1(c2,B?f:t),A5(N2)||T5(c2,r,b,X)})};return p2(a,{onBeforeEnter(B){T1(V,[B]),z1(B,n),z1(B,i)},onBeforeAppear(B){T1(J,[B]),z1(B,l),z1(B,o)},onEnter:n2(!1),onAppear:n2(!0),onLeave(B,c2){B._isLeaving=!0;const C2=()=>j(B,c2);z1(B,m),gf(),z1(B,H),P5(()=>{B._isLeaving&&(_1(B,m),z1(B,z),A5(S)||T5(B,r,P,C2))}),T1(S,[B,C2])},onEnterCancelled(B){E(B,!1),T1(A,[B])},onAppearCancelled(B){E(B,!0),T1(T,[B])},onLeaveCancelled(B){j(B),T1(O,[B])}})}function Mf(c){if(c==null)return null;if(u2(c))return[b6(c.enter),b6(c.leave)];{const a=b6(c);return[a,a]}}function b6(c){return el(c)}function z1(c,a){a.split(/\s+/).forEach(e=>e&&c.classList.add(e)),(c._vtc||(c._vtc=new Set)).add(a)}function _1(c,a){a.split(/\s+/).forEach(r=>r&&c.classList.remove(r));const{_vtc:e}=c;e&&(e.delete(a),e.size||(c._vtc=void 0))}function P5(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let Cf=0;function T5(c,a,e,r){const s=c._endId=++Cf,n=()=>{s===c._endId&&r()};if(e)return setTimeout(n,e);const{type:i,timeout:t,propCount:l}=Lf(c,a);if(!i)return r();const o=i+"end";let f=0;const m=()=>{c.removeEventListener(o,H),n()},H=z=>{z.target===c&&++f>=l&&m()};setTimeout(()=>{f<l&&m()},t+1),c.addEventListener(o,H)}function Lf(c,a){const e=window.getComputedStyle(c),r=g=>(e[g]||"").split(", "),s=r(`${h1}Delay`),n=r(`${h1}Duration`),i=_5(s,n),t=r(`${p3}Delay`),l=r(`${p3}Duration`),o=_5(t,l);let f=null,m=0,H=0;a===h1?i>0&&(f=h1,m=i,H=n.length):a===p3?o>0&&(f=p3,m=o,H=l.length):(m=Math.max(i,o),f=m>0?i>o?h1:p3:null,H=f?f===h1?n.length:l.length:0);const z=f===h1&&/\b(transform|all)(,|$)/.test(r(`${h1}Property`).toString());return{type:f,timeout:m,propCount:H,hasTransform:z}}function _5(c,a){for(;c.length<a.length;)c=c.concat(c);return Math.max(...a.map((e,r)=>R5(e)+R5(c[r])))}function R5(c){return Number(c.slice(0,-1).replace(",","."))*1e3}function gf(){return document.body.offsetHeight}const B5=c=>{const a=c.props["onUpdate:modelValue"]||!1;return W(a)?e=>v4(a,e):a};function xf(c){c.target.composing=!0}function E5(c){const a=c.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const N6={created(c,{modifiers:{lazy:a,trim:e,number:r}},s){c._assign=B5(s);const n=r||s.props&&s.props.type==="number";X1(c,a?"change":"input",i=>{if(i.target.composing)return;let t=c.value;e&&(t=t.trim()),n&&(t=R6(t)),c._assign(t)}),e&&X1(c,"change",()=>{c.value=c.value.trim()}),a||(X1(c,"compositionstart",xf),X1(c,"compositionend",E5),X1(c,"change",E5))},mounted(c,{value:a}){c.value=a??""},beforeUpdate(c,{value:a,modifiers:{lazy:e,trim:r,number:s}},n){if(c._assign=B5(n),c.composing||document.activeElement===c&&c.type!=="range"&&(e||r&&c.value.trim()===a||(s||c.type==="number")&&R6(c.value)===a))return;const i=a??"";c.value!==i&&(c.value=i)}},bf=["ctrl","shift","alt","meta"],Nf={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>bf.some(e=>c[`${e}Key`]&&!a.includes(e))},Sf=(c,a)=>(e,...r)=>{for(let s=0;s<a.length;s++){const n=Nf[a[s]];if(n&&n(e,a))return}return c(e,...r)},wf=p2({patchProp:pf},rf);let F5;function yf(){return F5||(F5=_o(wf))}const kf=(...c)=>{const a=yf().createApp(...c),{mount:e}=a;return a.mount=r=>{const s=Af(r);if(!s)return;const n=a._component;!$(n)&&!n.render&&!n.template&&(n.template=s.innerHTML),s.innerHTML="";const i=e(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},a};function Af(c){return h2(c)?document.querySelector(c):c}var Pf=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Ac;const j4=c=>Ac=c,Pc=Symbol();function Q6(c){return c&&typeof c=="object"&&Object.prototype.toString.call(c)==="[object Object]"&&typeof c.toJSON!="function"}var x3;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(x3||(x3={}));function Tf(){const c=E7(!0),a=c.run(()=>e3({}));let e=[],r=[];const s=R4({install(n){j4(s),s._a=n,n.provide(Pc,s),n.config.globalProperties.$pinia=s,r.forEach(i=>e.push(i)),r=[]},use(n){return!this._a&&!Pf?r.push(n):e.push(n),this},_p:e,_a:null,_e:c,_s:new Map,state:a});return s}const Tc=()=>{};function D5(c,a,e,r=Tc){c.push(a);const s=()=>{const n=c.indexOf(a);n>-1&&(c.splice(n,1),r())};return!e&&F7()&&fl(s),s}function Y1(c,...a){c.slice().forEach(e=>{e(...a)})}const _f=c=>c();function J6(c,a){c instanceof Map&&a instanceof Map&&a.forEach((e,r)=>c.set(r,e)),c instanceof Set&&a instanceof Set&&a.forEach(c.add,c);for(const e in a){if(!a.hasOwnProperty(e))continue;const r=a[e],s=c[e];Q6(s)&&Q6(r)&&c.hasOwnProperty(e)&&!H2(r)&&!g1(r)?c[e]=J6(s,r):c[e]=r}return c}const Rf=Symbol();function Bf(c){return!Q6(c)||!c.hasOwnProperty(Rf)}const{assign:d1}=Object;function Ef(c){return!!(H2(c)&&c.effect)}function Ff(c,a,e,r){const{state:s,actions:n,getters:i}=a,t=e.state.value[c];let l;function o(){t||(e.state.value[c]=s?s():{});const f=Ul(e.state.value[c]);return d1(f,n,Object.keys(i||{}).reduce((m,H)=>(m[H]=R4(V2(()=>{j4(e);const z=e._s.get(c);return i[H].call(z,z)})),m),{}))}return l=_c(c,o,a,e,r,!0),l}function _c(c,a,e={},r,s,n){let i;const t=d1({actions:{}},e),l={deep:!0};let o,f,m=[],H=[],z;const g=r.state.value[c];!n&&!g&&(r.state.value[c]={}),e3({});let b;function P(T){let E;o=f=!1,typeof T=="function"?(T(r.state.value[c]),E={type:x3.patchFunction,storeId:c,events:z}):(J6(r.state.value[c],T),E={type:x3.patchObject,payload:T,storeId:c,events:z});const j=b=Symbol();y0().then(()=>{b===j&&(o=!0)}),f=!0,Y1(m,E,r.state.value[c])}const V=n?function(){const{state:E}=e,j=E?E():{};this.$patch(n2=>{d1(n2,j)})}:Tc;function M(){i.stop(),m=[],H=[],r._s.delete(c)}function A(T,E){return function(){j4(r);const j=Array.from(arguments),n2=[],B=[];function c2(X){n2.push(X)}function C2(X){B.push(X)}Y1(H,{args:j,name:T,store:O,after:c2,onError:C2});let N2;try{N2=E.apply(this&&this.$id===c?this:O,j)}catch(X){throw Y1(B,X),X}return N2 instanceof Promise?N2.then(X=>(Y1(n2,X),X)).catch(X=>(Y1(B,X),Promise.reject(X))):(Y1(n2,N2),N2)}}const S={_p:r,$id:c,$onAction:D5.bind(null,H),$patch:P,$reset:V,$subscribe(T,E={}){const j=D5(m,T,E.detached,()=>n2()),n2=i.run(()=>s3(()=>r.state.value[c],B=>{(E.flush==="sync"?f:o)&&T({storeId:c,type:x3.direct,events:z},B)},d1({},l,E)));return j},$dispose:M},O=H3(S);r._s.set(c,O);const J=r._a&&r._a.runWithContext||_f,Y=r._e.run(()=>(i=E7(),J(()=>i.run(a))));for(const T in Y){const E=Y[T];if(H2(E)&&!Ef(E)||g1(E))n||(g&&Bf(E)&&(H2(E)?E.value=g[T]:J6(E,g[T])),r.state.value[c][T]=E);else if(typeof E=="function"){const j=A(T,E);Y[T]=j,t.actions[T]=E}}return d1(O,Y),d1(Q(O),Y),Object.defineProperty(O,"$state",{get:()=>r.state.value[c],set:T=>{P(E=>{d1(E,T)})}}),r._p.forEach(T=>{d1(O,i.run(()=>T({store:O,app:r._a,pinia:r,options:t})))}),g&&n&&e.hydrate&&e.hydrate(O.$state,g),o=!0,f=!0,O}function Df(c,a,e){let r,s;const n=typeof a=="function";typeof c=="string"?(r=c,s=n?e:a):(s=c,r=c.id);function i(t,l){const o=wo();return t=t||(o?O2(Pc,null):null),t&&j4(t),t=Ac,t._s.has(r)||(n?_c(r,a,s,t):Ff(r,s,t)),t._s.get(r)}return i.$id=r,i}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Q1=typeof window<"u";function Of(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const r2=Object.assign;function S6(c,a){const e={};for(const r in a){const s=a[r];e[r]=j2(s)?s.map(c):c(s)}return e}const b3=()=>{},j2=Array.isArray,Uf=/\/$/,If=c=>c.replace(Uf,"");function w6(c,a,e="/"){let r,s={},n="",i="";const t=a.indexOf("#");let l=a.indexOf("?");return t<l&&t>=0&&(l=-1),l>-1&&(r=a.slice(0,l),n=a.slice(l+1,t>-1?t:a.length),s=c(n)),t>-1&&(r=r||a.slice(0,t),i=a.slice(t,a.length)),r=jf(r??a,e),{fullPath:r+(n&&"?")+n+i,path:r,query:s,hash:i}}function qf(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function O5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function Wf(c,a,e){const r=a.matched.length-1,s=e.matched.length-1;return r>-1&&r===s&&l3(a.matched[r],e.matched[s])&&Rc(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function l3(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function Rc(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!Gf(c[e],a[e]))return!1;return!0}function Gf(c,a){return j2(c)?U5(c,a):j2(a)?U5(a,c):c===a}function U5(c,a){return j2(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function jf(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let n=e.length-1,i,t;for(i=0;i<r.length;i++)if(t=r[i],t!==".")if(t==="..")n>1&&n--;else break;return e.slice(0,n).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var B3;(function(c){c.pop="pop",c.push="push"})(B3||(B3={}));var N3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(N3||(N3={}));function $f(c){if(!c)if(Q1){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),If(c)}const Kf=/^[^#]+#/;function Yf(c,a){return c.replace(Kf,"#")+a}function Xf(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const $4=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qf(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;a=Xf(s,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function I5(c,a){return(history.state?history.state.position-a:-1)+c}const Z6=new Map;function Jf(c,a){Z6.set(c,a)}function Zf(c){const a=Z6.get(c);return Z6.delete(c),a}let cm=()=>location.protocol+"//"+location.host;function Bc(c,a){const{pathname:e,search:r,hash:s}=a,n=c.indexOf("#");if(n>-1){let t=s.includes(c.slice(n))?c.slice(n).length:1,l=s.slice(t);return l[0]!=="/"&&(l="/"+l),O5(l,"")}return O5(e,c)+r+s}function am(c,a,e,r){let s=[],n=[],i=null;const t=({state:H})=>{const z=Bc(c,location),g=e.value,b=a.value;let P=0;if(H){if(e.value=z,a.value=H,i&&i===g){i=null;return}P=b?H.position-b.position:0}else r(z);s.forEach(V=>{V(e.value,g,{delta:P,type:B3.pop,direction:P?P>0?N3.forward:N3.back:N3.unknown})})};function l(){i=e.value}function o(H){s.push(H);const z=()=>{const g=s.indexOf(H);g>-1&&s.splice(g,1)};return n.push(z),z}function f(){const{history:H}=window;H.state&&H.replaceState(r2({},H.state,{scroll:$4()}),"")}function m(){for(const H of n)H();n=[],window.removeEventListener("popstate",t),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",t),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:o,destroy:m}}function q5(c,a,e,r=!1,s=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:s?$4():null}}function em(c){const{history:a,location:e}=window,r={value:Bc(c,e)},s={value:a.state};s.value||n(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function n(l,o,f){const m=c.indexOf("#"),H=m>-1?(e.host&&document.querySelector("base")?c:c.slice(m))+l:cm()+c+l;try{a[f?"replaceState":"pushState"](o,"",H),s.value=o}catch(z){console.error(z),e[f?"replace":"assign"](H)}}function i(l,o){const f=r2({},a.state,q5(s.value.back,l,s.value.forward,!0),o,{position:s.value.position});n(l,f,!0),r.value=l}function t(l,o){const f=r2({},s.value,a.state,{forward:l,scroll:$4()});n(f.current,f,!0);const m=r2({},q5(r.value,l,null),{position:f.position+1},o);n(l,m,!1),r.value=l}return{location:r,state:s,push:t,replace:i}}function rm(c){c=$f(c);const a=em(c),e=am(c,a.state,a.location,a.replace);function r(n,i=!0){i||e.pauseListeners(),history.go(n)}const s=r2({location:"",base:c,go:r,createHref:Yf.bind(null,c)},a,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>a.state.value}),s}function sm(c){return typeof c=="string"||c&&typeof c=="object"}function Ec(c){return typeof c=="string"||typeof c=="symbol"}const p1={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fc=Symbol("");var W5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(W5||(W5={}));function o3(c,a){return r2(new Error,{type:c,[Fc]:!0},a)}function e1(c,a){return c instanceof Error&&Fc in c&&(a==null||!!(c.type&a))}const G5="[^/]+?",nm={sensitive:!1,strict:!1,start:!0,end:!0},im=/[.+*?^${}()[\]/\\]/g;function tm(c,a){const e=r2({},nm,a),r=[];let s=e.start?"^":"";const n=[];for(const o of c){const f=o.length?[]:[90];e.strict&&!o.length&&(s+="/");for(let m=0;m<o.length;m++){const H=o[m];let z=40+(e.sensitive?.25:0);if(H.type===0)m||(s+="/"),s+=H.value.replace(im,"\\$&"),z+=40;else if(H.type===1){const{value:g,repeatable:b,optional:P,regexp:V}=H;n.push({name:g,repeatable:b,optional:P});const M=V||G5;if(M!==G5){z+=10;try{new RegExp(`(${M})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+S.message)}}let A=b?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;m||(A=P&&o.length<2?`(?:/${A})`:"/"+A),P&&(A+="?"),s+=A,z+=20,P&&(z+=-8),b&&(z+=-20),M===".*"&&(z+=-50)}f.push(z)}r.push(f)}if(e.strict&&e.end){const o=r.length-1;r[o][r[o].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const i=new RegExp(s,e.sensitive?"":"i");function t(o){const f=o.match(i),m={};if(!f)return null;for(let H=1;H<f.length;H++){const z=f[H]||"",g=n[H-1];m[g.name]=z&&g.repeatable?z.split("/"):z}return m}function l(o){let f="",m=!1;for(const H of c){(!m||!f.endsWith("/"))&&(f+="/"),m=!1;for(const z of H)if(z.type===0)f+=z.value;else if(z.type===1){const{value:g,repeatable:b,optional:P}=z,V=g in o?o[g]:"";if(j2(V)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=j2(V)?V.join("/"):V;if(!M)if(P)H.length<2&&(f.endsWith("/")?f=f.slice(0,-1):m=!0);else throw new Error(`Missing required param "${g}"`);f+=M}}return f||"/"}return{re:i,score:r,keys:n,parse:t,stringify:l}}function lm(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function om(c,a){let e=0;const r=c.score,s=a.score;for(;e<r.length&&e<s.length;){const n=lm(r[e],s[e]);if(n)return n;e++}if(Math.abs(s.length-r.length)===1){if(j5(r))return 1;if(j5(s))return-1}return s.length-r.length}function j5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const fm={type:0,value:""},mm=/[a-zA-Z0-9_]/;function um(c){if(!c)return[[]];if(c==="/")return[[fm]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(z){throw new Error(`ERR (${e})/"${o}": ${z}`)}let e=0,r=e;const s=[];let n;function i(){n&&s.push(n),n=[]}let t=0,l,o="",f="";function m(){o&&(e===0?n.push({type:0,value:o}):e===1||e===2||e===3?(n.length>1&&(l==="*"||l==="+")&&a(`A repeatable param (${o}) must be alone in its segment. eg: '/:ids+.`),n.push({type:1,value:o,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):a("Invalid state to consume buffer"),o="")}function H(){o+=l}for(;t<c.length;){if(l=c[t++],l==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:l==="/"?(o&&m(),i()):l===":"?(m(),e=1):H();break;case 4:H(),e=r;break;case 1:l==="("?e=2:mm.test(l)?H():(m(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&t--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:e=3:f+=l;break;case 3:m(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&t--,f="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${o}"`),m(),i(),s}function vm(c,a,e){const r=tm(um(c.path),e),s=r2(r,{record:c,parent:a,children:[],alias:[]});return a&&!s.record.aliasOf==!a.record.aliasOf&&a.children.push(s),s}function Hm(c,a){const e=[],r=new Map;a=Y5({strict:!1,end:!0,sensitive:!1},a);function s(f){return r.get(f)}function n(f,m,H){const z=!H,g=hm(f);g.aliasOf=H&&H.record;const b=Y5(a,f),P=[g];if("alias"in f){const A=typeof f.alias=="string"?[f.alias]:f.alias;for(const S of A)P.push(r2({},g,{components:H?H.record.components:g.components,path:S,aliasOf:H?H.record:g}))}let V,M;for(const A of P){const{path:S}=A;if(m&&S[0]!=="/"){const O=m.record.path,J=O[O.length-1]==="/"?"":"/";A.path=m.record.path+(S&&J+S)}if(V=vm(A,m,b),H?H.alias.push(V):(M=M||V,M!==V&&M.alias.push(V),z&&f.name&&!K5(V)&&i(f.name)),g.children){const O=g.children;for(let J=0;J<O.length;J++)n(O[J],V,H&&H.children[J])}H=H||V,(V.record.components&&Object.keys(V.record.components).length||V.record.name||V.record.redirect)&&l(V)}return M?()=>{i(M)}:b3}function i(f){if(Ec(f)){const m=r.get(f);m&&(r.delete(f),e.splice(e.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=e.indexOf(f);m>-1&&(e.splice(m,1),f.record.name&&r.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function t(){return e}function l(f){let m=0;for(;m<e.length&&om(f,e[m])>=0&&(f.record.path!==e[m].record.path||!Dc(f,e[m]));)m++;e.splice(m,0,f),f.record.name&&!K5(f)&&r.set(f.record.name,f)}function o(f,m){let H,z={},g,b;if("name"in f&&f.name){if(H=r.get(f.name),!H)throw o3(1,{location:f});b=H.record.name,z=r2($5(m.params,H.keys.filter(M=>!M.optional).map(M=>M.name)),f.params&&$5(f.params,H.keys.map(M=>M.name))),g=H.stringify(z)}else if("path"in f)g=f.path,H=e.find(M=>M.re.test(g)),H&&(z=H.parse(g),b=H.record.name);else{if(H=m.name?r.get(m.name):e.find(M=>M.re.test(m.path)),!H)throw o3(1,{location:f,currentLocation:m});b=H.record.name,z=r2({},m.params,f.params),g=H.stringify(z)}const P=[];let V=H;for(;V;)P.unshift(V.record),V=V.parent;return{name:b,path:g,params:z,matched:P,meta:pm(P)}}return c.forEach(f=>n(f)),{addRoute:n,resolve:o,removeRoute:i,getRoutes:t,getRecordMatcher:s}}function $5(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function hm(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:zm(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function zm(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="boolean"?e:e[r];return a}function K5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function pm(c){return c.reduce((a,e)=>r2(a,e.meta),{})}function Y5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function Dc(c,a){return a.children.some(e=>e===c||Dc(c,e))}const Oc=/#/g,Vm=/&/g,dm=/\//g,Mm=/=/g,Cm=/\?/g,Uc=/\+/g,Lm=/%5B/g,gm=/%5D/g,Ic=/%5E/g,xm=/%60/g,qc=/%7B/g,bm=/%7C/g,Wc=/%7D/g,Nm=/%20/g;function D0(c){return encodeURI(""+c).replace(bm,"|").replace(Lm,"[").replace(gm,"]")}function Sm(c){return D0(c).replace(qc,"{").replace(Wc,"}").replace(Ic,"^")}function c0(c){return D0(c).replace(Uc,"%2B").replace(Nm,"+").replace(Oc,"%23").replace(Vm,"%26").replace(xm,"`").replace(qc,"{").replace(Wc,"}").replace(Ic,"^")}function wm(c){return c0(c).replace(Mm,"%3D")}function ym(c){return D0(c).replace(Oc,"%23").replace(Cm,"%3F")}function km(c){return c==null?"":ym(c).replace(dm,"%2F")}function b4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function Am(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let s=0;s<r.length;++s){const n=r[s].replace(Uc," "),i=n.indexOf("="),t=b4(i<0?n:n.slice(0,i)),l=i<0?null:b4(n.slice(i+1));if(t in a){let o=a[t];j2(o)||(o=a[t]=[o]),o.push(l)}else a[t]=l}return a}function X5(c){let a="";for(let e in c){const r=c[e];if(e=wm(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(j2(r)?r.map(n=>n&&c0(n)):[r&&c0(r)]).forEach(n=>{n!==void 0&&(a+=(a.length?"&":"")+e,n!=null&&(a+="="+n))})}return a}function Pm(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=j2(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return a}const Tm=Symbol(""),Q5=Symbol(""),K4=Symbol(""),O0=Symbol(""),a0=Symbol("");function V3(){let c=[];function a(r){return c.push(r),()=>{const s=c.indexOf(r);s>-1&&c.splice(s,1)}}function e(){c=[]}return{add:a,list:()=>c,reset:e}}function C1(c,a,e,r,s){const n=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((i,t)=>{const l=m=>{m===!1?t(o3(4,{from:e,to:a})):m instanceof Error?t(m):sm(m)?t(o3(2,{from:a,to:m})):(n&&r.enterCallbacks[s]===n&&typeof m=="function"&&n.push(m),i())},o=c.call(r&&r.instances[s],a,e,l);let f=Promise.resolve(o);c.length<3&&(f=f.then(l)),f.catch(m=>t(m))})}function y6(c,a,e,r){const s=[];for(const n of c)for(const i in n.components){let t=n.components[i];if(!(a!=="beforeRouteEnter"&&!n.instances[i]))if(_m(t)){const o=(t.__vccOpts||t)[a];o&&s.push(C1(o,e,r,n,i))}else{let l=t();s.push(()=>l.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${n.path}"`));const f=Of(o)?o.default:o;n.components[i]=f;const H=(f.__vccOpts||f)[a];return H&&C1(H,e,r,n,i)()}))}}return s}function _m(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function J5(c){const a=O2(K4),e=O2(O0),r=V2(()=>a.resolve(n1(c.to))),s=V2(()=>{const{matched:l}=r.value,{length:o}=l,f=l[o-1],m=e.matched;if(!f||!m.length)return-1;const H=m.findIndex(l3.bind(null,f));if(H>-1)return H;const z=Z5(l[o-2]);return o>1&&Z5(f)===z&&m[m.length-1].path!==z?m.findIndex(l3.bind(null,l[o-2])):H}),n=V2(()=>s.value>-1&&Fm(e.params,r.value.params)),i=V2(()=>s.value>-1&&s.value===e.matched.length-1&&Rc(e.params,r.value.params));function t(l={}){return Em(l)?a[n1(c.replace)?"replace":"push"](n1(c.to)).catch(b3):Promise.resolve()}return{route:r,href:V2(()=>r.value.href),isActive:n,isExactActive:i,navigate:t}}const Rm=c1({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:J5,setup(c,{slots:a}){const e=H3(J5(c)),{options:r}=O2(K4),s=V2(()=>({[c7(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[c7(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const n=a.default&&a.default(e);return c.custom?n:G4("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},n)}}}),Bm=Rm;function Em(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function Fm(c,a){for(const e in a){const r=a[e],s=c[e];if(typeof r=="string"){if(r!==s)return!1}else if(!j2(s)||s.length!==r.length||r.some((n,i)=>n!==s[i]))return!1}return!0}function Z5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const c7=(c,a,e)=>c??a??e,Dm=c1({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=O2(a0),s=V2(()=>c.route||r.value),n=O2(Q5,0),i=V2(()=>{let o=n1(n);const{matched:f}=s.value;let m;for(;(m=f[o])&&!m.components;)o++;return o}),t=V2(()=>s.value.matched[i.value]);z4(Q5,V2(()=>i.value+1)),z4(Tm,t),z4(a0,s);const l=e3();return s3(()=>[l.value,t.value,c.name],([o,f,m],[H,z,g])=>{f&&(f.instances[m]=o,z&&z!==f&&o&&o===H&&(f.leaveGuards.size||(f.leaveGuards=z.leaveGuards),f.updateGuards.size||(f.updateGuards=z.updateGuards))),o&&f&&(!z||!l3(f,z)||!H)&&(f.enterCallbacks[m]||[]).forEach(b=>b(o))},{flush:"post"}),()=>{const o=s.value,f=c.name,m=t.value,H=m&&m.components[f];if(!H)return a7(e.default,{Component:H,route:o});const z=m.props[f],g=z?z===!0?o.params:typeof z=="function"?z(o):z:null,P=G4(H,r2({},g,a,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(m.instances[f]=null)},ref:l}));return a7(e.default,{Component:P,route:o})||P}}});function a7(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const Gc=Dm;function Om(c){const a=Hm(c.routes,c),e=c.parseQuery||Am,r=c.stringifyQuery||X5,s=c.history,n=V3(),i=V3(),t=V3(),l=O6(p1);let o=p1;Q1&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=S6.bind(null,d=>""+d),m=S6.bind(null,km),H=S6.bind(null,b4);function z(d,R){let y,U;return Ec(d)?(y=a.getRecordMatcher(d),U=R):U=d,a.addRoute(U,y)}function g(d){const R=a.getRecordMatcher(d);R&&a.removeRoute(R)}function b(){return a.getRoutes().map(d=>d.record)}function P(d){return!!a.getRecordMatcher(d)}function V(d,R){if(R=r2({},R||l.value),typeof d=="string"){const h=w6(e,d,R.path),p=a.resolve({path:h.path},R),C=s.createHref(h.fullPath);return r2(h,p,{params:H(p.params),hash:b4(h.hash),redirectedFrom:void 0,href:C})}let y;if("path"in d)y=r2({},d,{path:w6(e,d.path,R.path).path});else{const h=r2({},d.params);for(const p in h)h[p]==null&&delete h[p];y=r2({},d,{params:m(h)}),R.params=m(R.params)}const U=a.resolve(y,R),e2=d.hash||"";U.params=f(H(U.params));const u=qf(r,r2({},d,{hash:Sm(e2),path:U.path})),v=s.createHref(u);return r2({fullPath:u,hash:e2,query:r===X5?Pm(d.query):d.query||{}},U,{redirectedFrom:void 0,href:v})}function M(d){return typeof d=="string"?w6(e,d,l.value.path):r2({},d)}function A(d,R){if(o!==d)return o3(8,{from:R,to:d})}function S(d){return Y(d)}function O(d){return S(r2(M(d),{replace:!0}))}function J(d){const R=d.matched[d.matched.length-1];if(R&&R.redirect){const{redirect:y}=R;let U=typeof y=="function"?y(d):y;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=M(U):{path:U},U.params={}),r2({query:d.query,hash:d.hash,params:"path"in U?{}:d.params},U)}}function Y(d,R){const y=o=V(d),U=l.value,e2=d.state,u=d.force,v=d.replace===!0,h=J(y);if(h)return Y(r2(M(h),{state:typeof h=="object"?r2({},e2,h.state):e2,force:u,replace:v}),R||y);const p=y;p.redirectedFrom=R;let C;return!u&&Wf(r,U,y)&&(C=o3(16,{to:p,from:U}),$2(U,U,!0,!1)),(C?Promise.resolve(C):j(p,U)).catch(L=>e1(L)?e1(L,2)?L:v1(L):a2(L,p,U)).then(L=>{if(L){if(e1(L,2))return Y(r2({replace:v},M(L.to),{state:typeof L.to=="object"?r2({},e2,L.to.state):e2,force:u}),R||p)}else L=B(p,U,!0,v,e2);return n2(p,U,L),L})}function T(d,R){const y=A(d,R);return y?Promise.reject(y):Promise.resolve()}function E(d){const R=j1.values().next().value;return R&&typeof R.runWithContext=="function"?R.runWithContext(d):d()}function j(d,R){let y;const[U,e2,u]=Um(d,R);y=y6(U.reverse(),"beforeRouteLeave",d,R);for(const h of U)h.leaveGuards.forEach(p=>{y.push(C1(p,d,R))});const v=T.bind(null,d,R);return y.push(v),g2(y).then(()=>{y=[];for(const h of n.list())y.push(C1(h,d,R));return y.push(v),g2(y)}).then(()=>{y=y6(e2,"beforeRouteUpdate",d,R);for(const h of e2)h.updateGuards.forEach(p=>{y.push(C1(p,d,R))});return y.push(v),g2(y)}).then(()=>{y=[];for(const h of d.matched)if(h.beforeEnter&&!R.matched.includes(h))if(j2(h.beforeEnter))for(const p of h.beforeEnter)y.push(C1(p,d,R));else y.push(C1(h.beforeEnter,d,R));return y.push(v),g2(y)}).then(()=>(d.matched.forEach(h=>h.enterCallbacks={}),y=y6(u,"beforeRouteEnter",d,R),y.push(v),g2(y))).then(()=>{y=[];for(const h of i.list())y.push(C1(h,d,R));return y.push(v),g2(y)}).catch(h=>e1(h,8)?h:Promise.reject(h))}function n2(d,R,y){for(const U of t.list())E(()=>U(d,R,y))}function B(d,R,y,U,e2){const u=A(d,R);if(u)return u;const v=R===p1,h=Q1?history.state:{};y&&(U||v?s.replace(d.fullPath,r2({scroll:v&&h&&h.scroll},e2)):s.push(d.fullPath,e2)),l.value=d,$2(d,R,y,v),v1()}let c2;function C2(){c2||(c2=s.listen((d,R,y)=>{if(!X3.listening)return;const U=V(d),e2=J(U);if(e2){Y(r2(e2,{replace:!0}),U).catch(b3);return}o=U;const u=l.value;Q1&&Jf(I5(u.fullPath,y.delta),$4()),j(U,u).catch(v=>e1(v,12)?v:e1(v,2)?(Y(v.to,U).then(h=>{e1(h,20)&&!y.delta&&y.type===B3.pop&&s.go(-1,!1)}).catch(b3),Promise.reject()):(y.delta&&s.go(-y.delta,!1),a2(v,U,u))).then(v=>{v=v||B(U,u,!1),v&&(y.delta&&!e1(v,8)?s.go(-y.delta,!1):y.type===B3.pop&&e1(v,20)&&s.go(-1,!1)),n2(U,u,v)}).catch(b3)}))}let N2=V3(),X=V3(),i2;function a2(d,R,y){v1(d);const U=X.list();return U.length?U.forEach(e2=>e2(d,R,y)):console.error(d),Promise.reject(d)}function a1(){return i2&&l.value!==p1?Promise.resolve():new Promise((d,R)=>{N2.add([d,R])})}function v1(d){return i2||(i2=!d,C2(),N2.list().forEach(([R,y])=>d?y(d):R()),N2.reset()),d}function $2(d,R,y,U){const{scrollBehavior:e2}=c;if(!Q1||!e2)return Promise.resolve();const u=!y&&Zf(I5(d.fullPath,0))||(U||!y)&&history.state&&history.state.scroll||null;return y0().then(()=>e2(d,R,u)).then(v=>v&&Qf(v)).catch(v=>a2(v,d,R))}const w2=d=>s.go(d);let G1;const j1=new Set,X3={currentRoute:l,listening:!0,addRoute:z,removeRoute:g,hasRoute:P,getRoutes:b,resolve:V,options:c,push:S,replace:O,go:w2,back:()=>w2(-1),forward:()=>w2(1),beforeEach:n.add,beforeResolve:i.add,afterEach:t.add,onError:X.add,isReady:a1,install(d){const R=this;d.component("RouterLink",Bm),d.component("RouterView",Gc),d.config.globalProperties.$router=R,Object.defineProperty(d.config.globalProperties,"$route",{enumerable:!0,get:()=>n1(l)}),Q1&&!G1&&l.value===p1&&(G1=!0,S(s.location).catch(e2=>{}));const y={};for(const e2 in p1)y[e2]=V2(()=>l.value[e2]);d.provide(K4,R),d.provide(O0,H3(y)),d.provide(a0,l);const U=d.unmount;j1.add(d),d.unmount=function(){j1.delete(d),j1.size<1&&(o=p1,c2&&c2(),c2=null,l.value=p1,G1=!1,i2=!1),U()}}};function g2(d){return d.reduce((R,y)=>R.then(()=>E(y)),Promise.resolve())}return X3}function Um(c,a){const e=[],r=[],s=[],n=Math.max(a.matched.length,c.matched.length);for(let i=0;i<n;i++){const t=a.matched[i];t&&(c.matched.find(o=>l3(o,t))?r.push(t):e.push(t));const l=c.matched[i];l&&(a.matched.find(o=>l3(o,l))||s.push(l))}return[e,r,s]}function U0(){return O2(K4)}function I0(){return O2(O0)}const Im=c1({__name:"App",setup(c){return(a,e)=>(x2(),I4(n1(Gc)))}});const k1=(c,a)=>{const e=c.__vccOpts||c;for(const[r,s]of a)e[r]=s;return e},qm=k1(Im,[["__scopeId","data-v-b74a1260"]]),Wm="modulepreload",Gm=function(c){return"/landing-state-vex/"+c},e7={},jm=function(a,e,r){if(!e||e.length===0)return a();const s=document.getElementsByTagName("link");return Promise.all(e.map(n=>{if(n=Gm(n),n in e7)return;e7[n]=!0;const i=n.endsWith(".css"),t=i?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const m=s[f];if(m.href===n&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${t}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":Wm,i||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),i)return new Promise((f,m)=>{o.addEventListener("load",f),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>a())},$m=["onClick"],Km=c1({__name:"DataTable",props:{dataSource:{},zebra:{type:Boolean},showCells:{}},setup(c){return(a,e)=>(x2(),F2("table",null,[o2("tr",null,[(x2(!0),F2(A2,null,M6(Object.keys(a.dataSource[0]),(r,s)=>(x2(),F2("th",{key:s},c5(r.slice(0,1).toUpperCase()+r.slice(1)),1))),128))]),(x2(!0),F2(A2,null,M6(a.dataSource,(r,s)=>(x2(),F2("tr",{key:s,onClick:n=>a.$emit("pressOnTheRow",r),class:"row-content"},[(x2(!0),F2(A2,null,M6(a.showCells,(n,i)=>(x2(),F2("td",{key:i},c5(r[n]),1))),128))],8,$m))),128))]))}});const Ym=k1(Km,[["__scopeId","data-v-38a327a4"]]),jc=Df("young-list",{state:()=>({young:[{group:"7",count:10,leader:"Raul C"},{group:"3",count:50,leader:"Emanuel A"}]}),getters:{},actions:{pickOneYoung(c){return this.young.find(a=>+a.group===c)},changeOneEntry(c,a){const e=this.young.findIndex(r=>r.group===a.group);e!==-1&&(this.young[e]=a)},addOneEntry(c){this.young.push({...c})}}}),Xm={class:"young-list-container"},Qm=c1({__name:"YoungList",setup(c){const a=jc(),e=U0(),r=(s,n)=>{e.push({name:"editYoungList",params:{id:s.group},query:{component:n}})};return(s,n)=>(x2(),F2("div",Xm,[L2(Ym,{"data-source":n1(a).young,"show-cells":["group","count","leader"],onPressOnTheRow:n[0]||(n[0]=i=>r(i,"LayoutComponent"))},null,8,["data-source"])]))}});const Jm=k1(Qm,[["__scopeId","data-v-8c610f9a"]]),q0=c=>(ic("data-v-a01e44ed"),c=c(),tc(),c),Zm={class:"form-submit"},cu=q0(()=>o2("button",null,"Add Group",-1)),au={class:"container-dashboard"},eu={class:"container-dashboard-first-row"},ru={class:"container-dashboard-first-row__division"},su=q0(()=>o2("div",{class:"container-dashboard-first-row__division"},"TESD",-1)),nu=q0(()=>o2("div",{class:"container-dashboard-second-row"},[o2("div",{class:"container-dashboard-second-row__division"},"sdddds"),o2("div",{class:"container-dashboard-second-row__division"},"dasd")],-1)),iu=c1({__name:"DashboadView",setup(c){return(a,e)=>{const r=m5("router-link"),s=m5("router-view");return x2(),F2(A2,null,[o2("div",Zm,[L2(r,{to:{name:"editYoungList",params:{id:"new"},query:{component:"LayoutComponent"}}},{default:H4(()=>[cu]),_:1})]),o2("div",au,[o2("div",eu,[o2("div",ru,[L2(Jm)]),su]),nu]),L2(s,null,{default:H4(({Component:n,route:i})=>[L2(F0,{name:"bounce"},{default:H4(()=>[(x2(),I4(zc(n),{key:i.path}))]),_:2},1024)]),_:1})],64)}}});const tu=k1(iu,[["__scopeId","data-v-a01e44ed"]]),lu={};function ou(c,a){return x2(),F2("main",null,"TEST")}const fu=k1(lu,[["render",ou]]),Y4=c=>(ic("data-v-4e6c774c"),c=c(),tc(),c),mu=["onSubmit"],uu=Y4(()=>o2("div",{class:"form-submit"},[o2("button",null,"Send Data")],-1)),vu={class:"form-group"},Hu={class:"form-group-cat"},hu=Y4(()=>o2("label",null,"Group",-1)),zu=["readonly"],pu={class:"form-group-cat"},Vu=Y4(()=>o2("label",null,"How manny are in group",-1)),du={class:"form-group-cat"},Mu=Y4(()=>o2("label",null,"Leader",-1)),Cu=c1({__name:"GroupView",setup(c){const a=e3(""),e=e3(""),r=e3(""),s=I0(),n=U0(),i=jc();P0(()=>{if(s.params.id!=="new"){const{group:l,count:o,leader:f}=i.pickOneYoung(+s.params.id);a.value=l,e.value=o+"",r.value=f}});const t=()=>{s.params.id==="new"?a.value>0&&(i.addOneEntry({group:a.value,count:+e.value,leader:r.value}),n.push("/landing-state-vex/dashboard")):i.changeOneEntry(+a.value,{group:a.value,count:+e.value,leader:r.value})};return(l,o)=>(x2(),F2("form",{class:"form",onSubmit:Sf(t,["prevent"])},[uu,o2("div",vu,[o2("div",Hu,[hu,V6(o2("input",{"onUpdate:modelValue":o[0]||(o[0]=f=>a.value=f),placeholder:"Group Number",readonly:n1(s).params.id!=="new",type:"number"},null,8,zu),[[N6,a.value]])]),o2("div",pu,[Vu,V6(o2("input",{"onUpdate:modelValue":o[1]||(o[1]=f=>e.value=f),placeholder:"Count Number",type:"number"},null,512),[[N6,e.value]])]),o2("div",du,[Mu,V6(o2("input",{"onUpdate:modelValue":o[2]||(o[2]=f=>r.value=f),placeholder:"Leader Name"},null,512),[[N6,r.value]])])])],40,mu))}});const Lu=k1(Cu,[["__scopeId","data-v-4e6c774c"]]),gu=c1({__name:"LayoutComponent",setup(c){return I0(),(a,e)=>(x2(),I4(Lu,{class:"group-slot"}))}});const xu=k1(gu,[["__scopeId","data-v-5e32c159"]]),bu={class:"container-young"},Nu=c1({__name:"EditYoungListView",setup(c){var t,l;const a=O6(null),e=U0(),r=I0(),s=O6(null),n=(o,f)=>{f==="LayoutComponent"&&(a.value=xu)},i=o=>{var f;((f=o.target.children[0])==null?void 0:f.className)==="container-young"&&e.push("/landing-state-vex/dashboard")};return so(()=>{var o,f;return[(o=e.params)==null?void 0:o.id,(f=r.query)==null?void 0:f.component]},n((t=e.params)==null?void 0:t.id,(l=r.query)==null?void 0:l.component)),(o,f)=>(x2(),F2("div",{class:"container",ref_key:"container",ref:s,onClick:i},[o2("div",bu,[(x2(),I4(zc(a.value)))])],512))}});const Su=k1(Nu,[["__scopeId","data-v-807c5dbc"]]),wu=Om({history:rm("/landing-state-vex"),routes:[{path:"/landing-state-vex",component:()=>jm(()=>import("./ShellView-b4bc6c85.js"),["assets/ShellView-b4bc6c85.js","assets/ShellView-0174619c.css"]),meta:{routes:[{icon:"gauge-high",path:"/landing-state-vex/dashboard",name:"Dashboard"},{icon:"user",path:"/landing-state-vex/user",name:"Users"}]},children:[{path:"dashboard",component:tu,children:[{path:"edit/:id",name:"editYoungList",component:Su}]},{path:"user",component:fu},{path:"",redirect:"/landing-state-vex/dashboard"}]},{path:"",redirect:"/landing-state-vex"}]});function r7(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function _(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?r7(Object(e),!0).forEach(function(r){M2(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):r7(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function N4(c){"@babel/helpers - typeof";return N4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},N4(c)}function yu(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function s7(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function ku(c,a,e){return a&&s7(c.prototype,a),e&&s7(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function M2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function W0(c,a){return Pu(c)||_u(c,a)||$c(c,a)||Bu()}function I3(c){return Au(c)||Tu(c)||$c(c)||Ru()}function Au(c){if(Array.isArray(c))return e0(c)}function Pu(c){if(Array.isArray(c))return c}function Tu(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function _u(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,t;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(l){n=!0,t=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw t}}return r}}function $c(c,a){if(c){if(typeof c=="string")return e0(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return e0(c,a)}}function e0(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function Ru(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n7=function(){},G0={},Kc={},Yc=null,Xc={mark:n7,measure:n7};try{typeof window<"u"&&(G0=window),typeof document<"u"&&(Kc=document),typeof MutationObserver<"u"&&(Yc=MutationObserver),typeof performance<"u"&&(Xc=performance)}catch{}var Eu=G0.navigator||{},i7=Eu.userAgent,t7=i7===void 0?"":i7,S1=G0,m2=Kc,l7=Yc,r4=Xc;S1.document;var u1=!!m2.documentElement&&!!m2.head&&typeof m2.addEventListener=="function"&&typeof m2.createElement=="function",Qc=~t7.indexOf("MSIE")||~t7.indexOf("Trident/"),s4,n4,i4,t4,l4,l1="___FONT_AWESOME___",r0=16,Jc="fa",Zc="svg-inline--fa",q1="data-fa-i2svg",s0="data-fa-pseudo-element",Fu="data-fa-pseudo-element-pending",j0="data-prefix",$0="data-icon",o7="fontawesome-i2svg",Du="async",Ou=["HTML","HEAD","STYLE","SCRIPT"],c9=function(){try{return!0}catch{return!1}}(),f2="classic",v2="sharp",K0=[f2,v2];function q3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[f2]}})}var E3=q3((s4={},M2(s4,f2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),M2(s4,v2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),s4)),F3=q3((n4={},M2(n4,f2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),M2(n4,v2,{solid:"fass",regular:"fasr",light:"fasl"}),n4)),D3=q3((i4={},M2(i4,f2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),M2(i4,v2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),i4)),Uu=q3((t4={},M2(t4,f2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),M2(t4,v2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),t4)),Iu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,a9="fa-layers-text",qu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Wu=q3((l4={},M2(l4,f2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),M2(l4,v2,{900:"fass",400:"fasr",300:"fasl"}),l4)),e9=[1,2,3,4,5,6,7,8,9,10],Gu=e9.concat([11,12,13,14,15,16,17,18,19,20]),ju=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],D1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},O3=new Set;Object.keys(F3[f2]).map(O3.add.bind(O3));Object.keys(F3[v2]).map(O3.add.bind(O3));var $u=[].concat(K0,I3(O3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",D1.GROUP,D1.SWAP_OPACITY,D1.PRIMARY,D1.SECONDARY]).concat(e9.map(function(c){return"".concat(c,"x")})).concat(Gu.map(function(c){return"w-".concat(c)})),S3=S1.FontAwesomeConfig||{};function Ku(c){var a=m2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Yu(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(m2&&typeof m2.querySelector=="function"){var Xu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Xu.forEach(function(c){var a=W0(c,2),e=a[0],r=a[1],s=Yu(Ku(e));s!=null&&(S3[r]=s)})}var r9={styleDefault:"solid",familyDefault:"classic",cssPrefix:Jc,replacementClass:Zc,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};S3.familyPrefix&&(S3.cssPrefix=S3.familyPrefix);var f3=_(_({},r9),S3);f3.autoReplaceSvg||(f3.observeMutations=!1);var D={};Object.keys(r9).forEach(function(c){Object.defineProperty(D,c,{enumerable:!0,set:function(e){f3[c]=e,w3.forEach(function(r){return r(D)})},get:function(){return f3[c]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(a){f3.cssPrefix=a,w3.forEach(function(e){return e(D)})},get:function(){return f3.cssPrefix}});S1.FontAwesomeConfig=D;var w3=[];function Qu(c){return w3.push(c),function(){w3.splice(w3.indexOf(c),1)}}var V1=r0,J2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ju(c){if(!(!c||!u1)){var a=m2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=m2.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return m2.head.insertBefore(a,r),c}}var Zu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U3(){for(var c=12,a="";c-- >0;)a+=Zu[Math.random()*62|0];return a}function h3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function Y0(c){return c.classList?h3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function s9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cv(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(s9(c[e]),'" ')},"").trim()}function X4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function X0(c){return c.size!==J2.size||c.x!==J2.x||c.y!==J2.y||c.rotate!==J2.rotate||c.flipX||c.flipY}function av(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(n," ").concat(i," ").concat(t)},o={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:o}}function ev(c){var a=c.transform,e=c.width,r=e===void 0?r0:e,s=c.height,n=s===void 0?r0:s,i=c.startCentered,t=i===void 0?!1:i,l="";return t&&Qc?l+="translate(".concat(a.x/V1-r/2,"em, ").concat(a.y/V1-n/2,"em) "):t?l+="translate(calc(-50% + ".concat(a.x/V1,"em), calc(-50% + ").concat(a.y/V1,"em)) "):l+="translate(".concat(a.x/V1,"em, ").concat(a.y/V1,"em) "),l+="scale(".concat(a.size/V1*(a.flipX?-1:1),", ").concat(a.size/V1*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var rv=`:root, :host {
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
}`;function n9(){var c=Jc,a=Zc,e=D.cssPrefix,r=D.replacementClass,s=rv;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(t,".".concat(r))}return s}var f7=!1;function k6(){D.autoAddCss&&!f7&&(Ju(n9()),f7=!0)}var sv={mixout:function(){return{dom:{css:n9,insertCss:k6}}},hooks:function(){return{beforeDOMElementCreation:function(){k6()},beforeI2svg:function(){k6()}}}},o1=S1||{};o1[l1]||(o1[l1]={});o1[l1].styles||(o1[l1].styles={});o1[l1].hooks||(o1[l1].hooks={});o1[l1].shims||(o1[l1].shims=[]);var W2=o1[l1],i9=[],nv=function c(){m2.removeEventListener("DOMContentLoaded",c),S4=1,i9.map(function(a){return a()})},S4=!1;u1&&(S4=(m2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(m2.readyState),S4||m2.addEventListener("DOMContentLoaded",nv));function iv(c){u1&&(S4?setTimeout(c,0):i9.push(c))}function W3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?s9(c):"<".concat(a," ").concat(cv(r),">").concat(n.map(W3).join(""),"</").concat(a,">")}function m7(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var tv=function(a,e){return function(r,s,n,i){return a.call(e,r,s,n,i)}},A6=function(a,e,r,s){var n=Object.keys(a),i=n.length,t=s!==void 0?tv(e,s):e,l,o,f;for(r===void 0?(l=1,f=a[n[0]]):(l=0,f=r);l<i;l++)o=n[l],f=t(f,a[o],o,a);return f};function lv(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function n0(c){var a=lv(c);return a.length===1?a[0].toString(16):null}function ov(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function u7(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function i0(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=u7(a);typeof W2.hooks.addPack=="function"&&!s?W2.hooks.addPack(c,u7(a)):W2.styles[c]=_(_({},W2.styles[c]||{}),n),c==="fas"&&i0("fa",a)}var o4,f4,m4,J1=W2.styles,fv=W2.shims,mv=(o4={},M2(o4,f2,Object.values(D3[f2])),M2(o4,v2,Object.values(D3[v2])),o4),Q0=null,t9={},l9={},o9={},f9={},m9={},uv=(f4={},M2(f4,f2,Object.keys(E3[f2])),M2(f4,v2,Object.keys(E3[v2])),f4);function vv(c){return~$u.indexOf(c)}function Hv(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!vv(s)?s:null}var u9=function(){var a=function(n){return A6(J1,function(i,t,l){return i[l]=A6(t,n,{}),i},{})};t9=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var t=n[2].filter(function(l){return typeof l=="number"});t.forEach(function(l){s[l.toString(16)]=i})}return s}),l9=a(function(s,n,i){if(s[i]=i,n[2]){var t=n[2].filter(function(l){return typeof l=="string"});t.forEach(function(l){s[l]=i})}return s}),m9=a(function(s,n,i){var t=n[2];return s[i]=i,t.forEach(function(l){s[l]=i}),s});var e="far"in J1||D.autoFetchSvg,r=A6(fv,function(s,n){var i=n[0],t=n[1],l=n[2];return t==="far"&&!e&&(t="fas"),typeof i=="string"&&(s.names[i]={prefix:t,iconName:l}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:t,iconName:l}),s},{names:{},unicodes:{}});o9=r.names,f9=r.unicodes,Q0=Q4(D.styleDefault,{family:D.familyDefault})};Qu(function(c){Q0=Q4(c.styleDefault,{family:D.familyDefault})});u9();function J0(c,a){return(t9[c]||{})[a]}function hv(c,a){return(l9[c]||{})[a]}function O1(c,a){return(m9[c]||{})[a]}function v9(c){return o9[c]||{prefix:null,iconName:null}}function zv(c){var a=f9[c],e=J0("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function w1(){return Q0}var Z0=function(){return{prefix:null,iconName:null,rest:[]}};function Q4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?f2:e,s=E3[r][c],n=F3[r][c]||F3[r][s],i=c in W2.styles?c:null;return n||i||null}var v7=(m4={},M2(m4,f2,Object.keys(D3[f2])),M2(m4,v2,Object.keys(D3[v2])),m4);function J4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},M2(a,f2,"".concat(D.cssPrefix,"-").concat(f2)),M2(a,v2,"".concat(D.cssPrefix,"-").concat(v2)),a),i=null,t=f2;(c.includes(n[f2])||c.some(function(o){return v7[f2].includes(o)}))&&(t=f2),(c.includes(n[v2])||c.some(function(o){return v7[v2].includes(o)}))&&(t=v2);var l=c.reduce(function(o,f){var m=Hv(D.cssPrefix,f);if(J1[f]?(f=mv[t].includes(f)?Uu[t][f]:f,i=f,o.prefix=f):uv[t].indexOf(f)>-1?(i=f,o.prefix=Q4(f,{family:t})):m?o.iconName=m:f!==D.replacementClass&&f!==n[f2]&&f!==n[v2]&&o.rest.push(f),!s&&o.prefix&&o.iconName){var H=i==="fa"?v9(o.iconName):{},z=O1(o.prefix,o.iconName);H.prefix&&(i=null),o.iconName=H.iconName||z||o.iconName,o.prefix=H.prefix||o.prefix,o.prefix==="far"&&!J1.far&&J1.fas&&!D.autoFetchSvg&&(o.prefix="fas")}return o},Z0());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&t===v2&&(J1.fass||D.autoFetchSvg)&&(l.prefix="fass",l.iconName=O1(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=w1()||"fas"),l}var pv=function(){function c(){yu(this,c),this.definitions={}}return ku(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){e.definitions[t]=_(_({},e.definitions[t]||{}),i[t]),i0(t,i[t]);var l=D3[f2][t];l&&i0(l,i[t]),u9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],t=i.prefix,l=i.iconName,o=i.icon,f=o[2];e[t]||(e[t]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(e[t][m]=o)}),e[t][l]=o}),e}}]),c}(),H7=[],Z1={},n3={},Vv=Object.keys(n3);function dv(c,a){var e=a.mixoutsTo;return H7=c,Z1={},Object.keys(n3).forEach(function(r){Vv.indexOf(r)===-1&&delete n3[r]}),H7.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),N4(s[i])==="object"&&Object.keys(s[i]).forEach(function(t){e[i]||(e[i]={}),e[i][t]=s[i][t]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){Z1[i]||(Z1[i]=[]),Z1[i].push(n[i])})}r.provides&&r.provides(n3)}),e}function t0(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=Z1[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function W1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=Z1[c]||[];s.forEach(function(n){n.apply(null,e)})}function f1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return n3[c]?n3[c].apply(null,a):void 0}function l0(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||w1();if(a)return a=O1(e,a)||a,m7(H9.definitions,e,a)||m7(W2.styles,e,a)}var H9=new pv,Mv=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,W1("noAuto")},Cv={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return u1?(W1("beforeI2svg",a),f1("pseudoElements2svg",a),f1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,iv(function(){gv({autoReplaceSvgRoot:e}),W1("watch",a)})}},Lv={icon:function(a){if(a===null)return null;if(N4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:O1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=Q4(a[0]);return{prefix:r,iconName:O1(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(D.cssPrefix,"-"))>-1||a.match(Iu))){var s=J4(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||w1(),iconName:O1(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=w1();return{prefix:n,iconName:O1(n,a)||a}}}},B2={noAuto:Mv,config:D,dom:Cv,parse:Lv,library:H9,findIconDefinition:l0,toHtml:W3},gv=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?m2:e;(Object.keys(W2.styles).length>0||D.autoFetchSvg)&&u1&&D.autoReplaceSvg&&B2.dom.i2svg({node:r})};function Z4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return W3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(u1){var r=m2.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function xv(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(X0(i)&&e.found&&!r.found){var t=e.width,l=e.height,o={x:t/l/2,y:.5};s.style=X4(_(_({},n),{},{"transform-origin":"".concat(o.x+i.x/16,"em ").concat(o.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function bv(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(D.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_(_({},s),{},{id:i}),children:r}]}]}function c8(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,t=c.symbol,l=c.title,o=c.maskId,f=c.titleId,m=c.extra,H=c.watchable,z=H===void 0?!1:H,g=r.found?r:e,b=g.width,P=g.height,V=s==="fak",M=[D.replacementClass,n?"".concat(D.cssPrefix,"-").concat(n):""].filter(function(E){return m.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(m.classes).join(" "),A={children:[],attributes:_(_({},m.attributes),{},{"data-prefix":s,"data-icon":n,class:M,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(P)})},S=V&&!~m.classes.indexOf("fa-fw")?{width:"".concat(b/P*16*.0625,"em")}:{};z&&(A.attributes[q1]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||U3())},children:[l]}),delete A.attributes.title);var O=_(_({},A),{},{prefix:s,iconName:n,main:e,mask:r,maskId:o,transform:i,symbol:t,styles:_(_({},S),m.styles)}),J=r.found&&e.found?f1("generateAbstractMask",O)||{children:[],attributes:{}}:f1("generateAbstractIcon",O)||{children:[],attributes:{}},Y=J.children,T=J.attributes;return O.children=Y,O.attributes=T,t?bv(O):xv(O)}function h7(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,t=c.watchable,l=t===void 0?!1:t,o=_(_(_({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});l&&(o[q1]="");var f=_({},i.styles);X0(s)&&(f.transform=ev({transform:s,startCentered:!0,width:e,height:r}),f["-webkit-transform"]=f.transform);var m=X4(f);m.length>0&&(o.style=m);var H=[];return H.push({tag:"span",attributes:o,children:[a]}),n&&H.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),H}function Nv(c){var a=c.content,e=c.title,r=c.extra,s=_(_(_({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=X4(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var P6=W2.styles;function o0(c){var a=c[0],e=c[1],r=c.slice(4),s=W0(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(D1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(D1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(D1.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var Sv={found:!1,width:512,height:512};function wv(c,a){!c9&&!D.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function f0(c,a){var e=a;return a==="fa"&&D.styleDefault!==null&&(a=w1()),new Promise(function(r,s){if(f1("missingIconAbstract"),e==="fa"){var n=v9(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&P6[a]&&P6[a][c]){var i=P6[a][c];return r(o0(i))}wv(c,a),r(_(_({},Sv),{},{icon:D.showMissingIcons&&c?f1("missingIconAbstract")||{}:{}}))})}var z7=function(){},m0=D.measurePerformance&&r4&&r4.mark&&r4.measure?r4:{mark:z7,measure:z7},C3='FA "6.4.0"',yv=function(a){return m0.mark("".concat(C3," ").concat(a," begins")),function(){return h9(a)}},h9=function(a){m0.mark("".concat(C3," ").concat(a," ends")),m0.measure("".concat(C3," ").concat(a),"".concat(C3," ").concat(a," begins"),"".concat(C3," ").concat(a," ends"))},a8={begin:yv,end:h9},V4=function(){};function p7(c){var a=c.getAttribute?c.getAttribute(q1):null;return typeof a=="string"}function kv(c){var a=c.getAttribute?c.getAttribute(j0):null,e=c.getAttribute?c.getAttribute($0):null;return a&&e}function Av(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(D.replacementClass)}function Pv(){if(D.autoReplaceSvg===!0)return d4.replace;var c=d4[D.autoReplaceSvg];return c||d4.replace}function Tv(c){return m2.createElementNS("http://www.w3.org/2000/svg",c)}function _v(c){return m2.createElement(c)}function z9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Tv:_v:e;if(typeof c=="string")return m2.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(z9(i,{ceFn:r}))}),s}function Rv(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var d4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(z9(s),e)}),e.getAttribute(q1)===null&&D.keepOriginalSource){var r=m2.createComment(Rv(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~Y0(e).indexOf(D.replacementClass))return d4.replace(a);var s=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(t,l){return l===D.replacementClass||l.match(s)?t.toSvg.push(l):t.toNode.push(l),t},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(t){return W3(t)}).join(`
`);e.setAttribute(q1,""),e.innerHTML=i}};function V7(c){c()}function p9(c,a){var e=typeof a=="function"?a:V4;if(c.length===0)e();else{var r=V7;D.mutateApproach===Du&&(r=S1.requestAnimationFrame||V7),r(function(){var s=Pv(),n=a8.begin("mutate");c.map(s),n(),e()})}}var e8=!1;function V9(){e8=!0}function u0(){e8=!1}var w4=null;function d7(c){if(l7&&D.observeMutations){var a=c.treeCallback,e=a===void 0?V4:a,r=c.nodeCallback,s=r===void 0?V4:r,n=c.pseudoElementsCallback,i=n===void 0?V4:n,t=c.observeMutationsRoot,l=t===void 0?m2:t;w4=new l7(function(o){if(!e8){var f=w1();h3(o).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!p7(m.addedNodes[0])&&(D.searchPseudoElements&&i(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&D.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&p7(m.target)&&~ju.indexOf(m.attributeName))if(m.attributeName==="class"&&kv(m.target)){var H=J4(Y0(m.target)),z=H.prefix,g=H.iconName;m.target.setAttribute(j0,z||f),g&&m.target.setAttribute($0,g)}else Av(m.target)&&s(m.target)})}}),u1&&w4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Bv(){w4&&w4.disconnect()}function Ev(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],t=n.slice(1);return i&&t.length>0&&(r[i]=t.join(":").trim()),r},{})),e}function Fv(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=J4(Y0(c));return s.prefix||(s.prefix=w1()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=hv(s.prefix,c.innerText)||J0(s.prefix,n0(c.innerText))),!s.iconName&&D.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function Dv(c){var a=h3(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return D.autoA11y&&(e?a["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||U3()):(a["aria-hidden"]="true",a.focusable="false")),a}function Ov(){return{iconName:null,title:null,titleId:null,prefix:null,transform:J2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function M7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Fv(c),r=e.iconName,s=e.prefix,n=e.rest,i=Dv(c),t=t0("parseNodeAttributes",{},c),l=a.styleParser?Ev(c):[];return _({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:J2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:l,attributes:i}},t)}var Uv=W2.styles;function d9(c){var a=D.autoReplaceSvg==="nest"?M7(c,{styleParser:!1}):M7(c);return~a.extra.classes.indexOf(a9)?f1("generateLayersText",c,a):f1("generateSvgReplacementMutation",c,a)}var y1=new Set;K0.map(function(c){y1.add("fa-".concat(c))});Object.keys(E3[f2]).map(y1.add.bind(y1));Object.keys(E3[v2]).map(y1.add.bind(y1));y1=I3(y1);function C7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!u1)return Promise.resolve();var e=m2.documentElement.classList,r=function(m){return e.add("".concat(o7,"-").concat(m))},s=function(m){return e.remove("".concat(o7,"-").concat(m))},n=D.autoFetchSvg?y1:K0.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Uv));n.includes("fa")||n.push("fa");var i=[".".concat(a9,":not([").concat(q1,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(q1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var t=[];try{t=h3(c.querySelectorAll(i))}catch{}if(t.length>0)r("pending"),s("complete");else return Promise.resolve();var l=a8.begin("onTree"),o=t.reduce(function(f,m){try{var H=d9(m);H&&f.push(H)}catch(z){c9||z.name==="MissingIcon"&&console.error(z)}return f},[]);return new Promise(function(f,m){Promise.all(o).then(function(H){p9(H,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),f()})}).catch(function(H){l(),m(H)})})}function Iv(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;d9(c).then(function(e){e&&p9([e],a)})}function qv(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:l0(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:l0(s||{})),c(r,_(_({},e),{},{mask:s}))}}var Wv=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?J2:r,n=e.symbol,i=n===void 0?!1:n,t=e.mask,l=t===void 0?null:t,o=e.maskId,f=o===void 0?null:o,m=e.title,H=m===void 0?null:m,z=e.titleId,g=z===void 0?null:z,b=e.classes,P=b===void 0?[]:b,V=e.attributes,M=V===void 0?{}:V,A=e.styles,S=A===void 0?{}:A;if(a){var O=a.prefix,J=a.iconName,Y=a.icon;return Z4(_({type:"icon"},a),function(){return W1("beforeDOMElementCreation",{iconDefinition:a,params:e}),D.autoA11y&&(H?M["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(g||U3()):(M["aria-hidden"]="true",M.focusable="false")),c8({icons:{main:o0(Y),mask:l?o0(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:J,transform:_(_({},J2),s),symbol:i,title:H,maskId:f,titleId:g,extra:{attributes:M,styles:S,classes:P}})})}},Gv={mixout:function(){return{icon:qv(Wv)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=C7,e.nodeCallback=Iv,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?m2:r,n=e.callback,i=n===void 0?function(){}:n;return C7(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,t=r.prefix,l=r.transform,o=r.symbol,f=r.mask,m=r.maskId,H=r.extra;return new Promise(function(z,g){Promise.all([f0(s,t),f.iconName?f0(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var P=W0(b,2),V=P[0],M=P[1];z([e,c8({icons:{main:V,mask:M},prefix:t,iconName:s,transform:l,symbol:o,maskId:m,title:n,titleId:i,extra:H,watchable:!0})])}).catch(g)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,t=e.styles,l=X4(t);l.length>0&&(s.style=l);var o;return X0(i)&&(o=f1("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(o||n.icon),{children:r,attributes:s}}}},jv={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return Z4({type:"layer"},function(){W1("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(t){Array.isArray(t)?t.map(function(l){i=i.concat(l.abstract)}):i=i.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(I3(n)).join(" ")},children:i}]})}}}},$v={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,t=i===void 0?[]:i,l=r.attributes,o=l===void 0?{}:l,f=r.styles,m=f===void 0?{}:f;return Z4({type:"counter",content:e},function(){return W1("beforeDOMElementCreation",{content:e,params:r}),Nv({content:e.toString(),title:n,extra:{attributes:o,styles:m,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(I3(t))}})})}}}},Kv={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?J2:s,i=r.title,t=i===void 0?null:i,l=r.classes,o=l===void 0?[]:l,f=r.attributes,m=f===void 0?{}:f,H=r.styles,z=H===void 0?{}:H;return Z4({type:"text",content:e},function(){return W1("beforeDOMElementCreation",{content:e,params:r}),h7({content:e,transform:_(_({},J2),n),title:t,extra:{attributes:m,styles:z,classes:["".concat(D.cssPrefix,"-layers-text")].concat(I3(o))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,t=null,l=null;if(Qc){var o=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();t=f.width/o,l=f.height/o}return D.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,h7({content:e.innerHTML,width:t,height:l,transform:n,title:s,extra:i,watchable:!0})])}}},Yv=new RegExp('"',"ug"),L7=[1105920,1112319];function Xv(c){var a=c.replace(Yv,""),e=ov(a,0),r=e>=L7[0]&&e<=L7[1],s=a.length===2?a[0]===a[1]:!1;return{value:n0(s?a[0]:a),isSecondary:r||s}}function g7(c,a){var e="".concat(Fu).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=h3(c.children),i=n.filter(function(Y){return Y.getAttribute(s0)===a})[0],t=S1.getComputedStyle(c,a),l=t.getPropertyValue("font-family").match(qu),o=t.getPropertyValue("font-weight"),f=t.getPropertyValue("content");if(i&&!l)return c.removeChild(i),r();if(l&&f!=="none"&&f!==""){var m=t.getPropertyValue("content"),H=~["Sharp"].indexOf(l[2])?v2:f2,z=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?F3[H][l[2].toLowerCase()]:Wu[H][o],g=Xv(m),b=g.value,P=g.isSecondary,V=l[0].startsWith("FontAwesome"),M=J0(z,b),A=M;if(V){var S=zv(b);S.iconName&&S.prefix&&(M=S.iconName,z=S.prefix)}if(M&&!P&&(!i||i.getAttribute(j0)!==z||i.getAttribute($0)!==A)){c.setAttribute(e,A),i&&c.removeChild(i);var O=Ov(),J=O.extra;J.attributes[s0]=a,f0(M,z).then(function(Y){var T=c8(_(_({},O),{},{icons:{main:Y,mask:Z0()},prefix:z,iconName:A,extra:J,watchable:!0})),E=m2.createElement("svg");a==="::before"?c.insertBefore(E,c.firstChild):c.appendChild(E),E.outerHTML=T.map(function(j){return W3(j)}).join(`