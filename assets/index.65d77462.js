import{d as m,u as d,o as g,r as A,a as v,c as S,j as y,b as T,e as L,f as O,g as E}from"./vendor.1d84e38c.js";const _=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function c(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=c(s);fetch(s.href,n)}};_();const P=m({setup(o){const e=d();function c(){let t="b0e9d82cf5c14e9cba3c9af305157476",r="gP76fsO3D7xW4VitN4ekhlwgDqU",l=new Date().toUTCString(),u=new y("SHA-1","TEXT");u.setHMACKey(r,"TEXT"),u.update("x-date: "+l);let h=u.getHMAC("B64");return{Authorization:'hmac username="'+t+'", algorithm="hmac-sha1", headers="x-date", signature="'+h+'"',"X-Date":l}}function a(){fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?&$format=JSON&$top=50",{headers:c()}).then(t=>t.json()).then(t=>{for(let r=0;r<t.length;r++)JSON.stringify(t[r].Picture)==="{}"&&(t[r].Picture.PictureUrl1="https://angelofshiva.com/resources/assets/images/no-img.jpg");e.dispatch("saveallspot",t)})}function s(){fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?&$format=JSON&$top=50",{headers:c()}).then(t=>t.json()).then(t=>{for(let r=0;r<t.length;r++)JSON.stringify(t[r].Picture)==="{}"&&(t[r].Picture.PictureUrl1="https://angelofshiva.com/resources/assets/images/no-img.jpg");e.dispatch("saveallfood",t)})}function n(){fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?&$format=JSON&$top=50",{headers:c()}).then(t=>t.json()).then(t=>{for(let r=0;r<t.length;r++)JSON.stringify(t[r].Picture)==="{}"&&(t[r].Picture.PictureUrl1="https://angelofshiva.com/resources/assets/images/no-img.jpg");e.dispatch("saveallhotel",t)})}function i(){fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?&$format=JSON&$top=50",{headers:c()}).then(t=>t.json()).then(t=>{for(let r=0;r<t.length;r++)JSON.stringify(t[r].Picture)==="{}"&&(t[r].Picture.PictureUrl1="https://angelofshiva.com/resources/assets/images/no-img.jpg");e.dispatch("saveallactivity",t)})}return g(()=>{a(),s(),n(),i()}),(t,r)=>{const l=A("router-view");return v(),S(l)}}});const C="modulepreload",f={},D="/tourism_web/",p=function(e,c){return!c||c.length===0?e():Promise.all(c.map(a=>{if(a=`${D}${a}`,a in f)return;f[a]=!0;const s=a.endsWith(".css"),n=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${n}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":C,s||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),s)return new Promise((t,r)=>{i.addEventListener("load",t),i.addEventListener("error",r)})})).then(()=>e())},j=[{path:"/",name:"Main",component:()=>p(()=>import("./Main.2c8f52e9.js"),["assets/Main.2c8f52e9.js","assets/vendor.1d84e38c.js","assets/Nav.13dfaf00.js","assets/Nav.086d6965.css"])},{path:"/content/:ID",name:"content",component:()=>p(()=>import("./Content.0cbad8e5.js"),["assets/Content.0cbad8e5.js","assets/Nav.13dfaf00.js","assets/Nav.086d6965.css","assets/vendor.1d84e38c.js"])}],H=T({history:L(),routes:j});var N=O({state:{selectType:"",selectCountry:"",allSpotData:[],allFoodData:[],allHotelData:[],allActivityData:[]},mutations:{SELECTTYPE(o,e){o.selectType=e},SELECTCOUNTRY(o,e){o.selectCountry=e},SAVEALLSPOT(o,e){o.allSpotData=e},SAVEALLFOOD(o,e){o.allFoodData=e},SAVEALLHOTEL(o,e){o.allHotelData=e},SAVEALLACTIVITY(o,e){o.allActivityData=e}},actions:{selecttype(o,e){o.commit("SELECTTYPE",e)},selectcountry(o,e){o.commit("SELECTCOUNTRY",e)},saveallspot(o,e){o.commit("SAVEALLSPOT",e)},saveallfood(o,e){o.commit("SAVEALLFOOD",e)},saveallhotel(o,e){o.commit("SAVEALLHOTEL",e)},saveallactivity(o,e){o.commit("SAVEALLACTIVITY",e)}}});E(P).use(H).use(N).mount("#app");
