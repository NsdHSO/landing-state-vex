import{a as w,j as b,k as r,l as V,u as S,o as d,b as c,e as s,m as x,n as m,v,q as f,t as y,f as I,p as k,i as L,_ as E}from"./index-1aac7221.js";const _=o=>(k("data-v-84cb2e5e"),o=o(),L(),o),N={class:"container-login"},P=_(()=>s("div",{class:"container-login__header"},[s("p",null,"Landing")],-1)),B={class:"container-login__form"},U=["onSubmit"],j={class:"container-login__form-division"},C=_(()=>s("label",null,"Username",-1)),D={key:0,class:"container-login__form-division-error"},M={class:"container-login__form-division"},R=_(()=>s("label",null,"Password",-1)),W={key:0,class:"container-login__form-division-error"},q={class:"container-login__form-submit"},A=w({__name:"LoginView",setup(o){const p=b(),g=r(p.params.id),e=V({email:"",password:""}),i=r(!1),a=r(!1),u=S(),h=()=>{const n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;!e.email||!e.password?console.log("Your username and password it is a must  "):(g.value==="register"?n.test(e.email)&&e.password.length>=6&&(u.registerWithEmail(e),e.email="",e.password="",i.value=!1,a.value=!1):u.loginWithEmail(e),n.test(e.email)||(i.value=!0),e.password.length<6&&(a.value=!0))};return(n,t)=>(d(),c("div",N,[P,s("div",B,[s("form",{onSubmit:x(h,["prevent"])},[s("div",j,[C,m(s("input",{placeholder:"joshi100@fardex.com","onUpdate:modelValue":t[0]||(t[0]=l=>e.email=l),type:"email"},null,512),[[v,e.email]]),i.value?(d(),c("p",D," Email is not valid ")):f("",!0)]),s("div",M,[R,m(s("input",{placeholder:"********",type:"password","onUpdate:modelValue":t[1]||(t[1]=l=>e.password=l)},null,512),[[v,e.password]]),a.value?(d(),c("p",W," Password is to short ")):f("",!0)]),s("div",q,[s("button",null,y(I(p).params.id==="register"?"Register":"Login"),1)])],40,U)])]))}});const T=E(A,[["__scopeId","data-v-84cb2e5e"]]);export{T as default};
