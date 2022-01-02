import{_ as O}from"./Nav.13dfaf00.js";import{h as f,o as _,j as $,d as B,z as I,u as N,r as H,a as n,k as r,m as F,l,t as d,q as h,y as C,A as E,F as b,p as T,B as M,s as j,x as U}from"./vendor.1d84e38c.js";function J(m){const y=f([]),o=async()=>{y.value=await x(m)};function v(){let i="b0e9d82cf5c14e9cba3c9af305157476",a="gP76fsO3D7xW4VitN4ekhlwgDqU",t=new Date().toUTCString(),e=new $("SHA-1","TEXT");e.setHMACKey(a,"TEXT"),e.update("x-date: "+t);let s=e.getHMAC("B64");return console.log("hmac",s),{Authorization:'hmac username="'+i+'", algorithm="hmac-sha1", headers="x-date", signature="'+s+'"',"X-Date":t}}function x(i){return new Promise((a,t)=>{fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${i}?&$format=JSON&$top=20`,{headers:v()}).then(e=>e.json()).then(e=>{for(let s=0;s<e.length;s++)JSON.stringify(e[s].Picture)==="{}"&&(e[s].Picture.PictureUrl1="https://angelofshiva.com/resources/assets/images/no-img.jpg");a(e)}).catch(e=>{t()})})}const p=f([]),D=async()=>{p.value=await P(m)};function P(i){return new Promise((a,t)=>{fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${i}?&$format=JSON&$top=20`,{headers:v()}).then(e=>e.json()).then(e=>{for(let s=0;s<e.length;s++)JSON.stringify(e[s].Picture)==="{}"&&(e[s].Picture.PictureUrl1="https://angelofshiva.com/resources/assets/images/no-img.jpg");a(e)}).catch(e=>t())})}const c=f([]),u=async()=>{c.value=await w(m)};function w(i){return new Promise((a,t)=>{fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/${i}?&$format=JSON&$top=20`,{headers:v()}).then(e=>e.json()).then(e=>{for(let s=0;s<e.length;s++)JSON.stringify(e[s].Picture)==="{}"&&(e[s].Picture.PictureUrl1="https://angelofshiva.com/resources/assets/images/no-img.jpg");a(e)}).catch(e=>t())})}const g=f([]),A=async()=>{g.value=await S(m)};function S(i){return new Promise((a,t)=>{fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${i}?&$format=JSON&$top=20`,{headers:v()}).then(e=>e.json()).then(e=>{for(let s=0;s<e.length;s++)JSON.stringify(e[s].Picture)==="{}"&&(e[s].Picture.PictureUrl1="https://angelofshiva.com/resources/assets/images/no-img.jpg");a(e)}).catch(e=>t())})}return _(o),_(D),_(u),_(A),{oneSpot:y,oneFood:p,oneHotel:c,oneActivity:g}}const R={class:"container mx-auto"},z=l("div",null,null,-1),V={class:"flex flex-col md:flex-row-reverse"},X=["src"],q={class:"w-full md:w-6/12"},K={class:"mt-10 text-left mx-10 text-3xl font-bold"},G={class:"flex flex-col md:grid-cols-6 grid-cols-12"},L={class:"flex justify-center"},W=M('<div class="col-start-2 col-end-4 mr-5 mt-5 ml-5 relative"><div class="w-6 h-6 absolute top-10 -mt-10 rounded-full bg-green-500 shadow text-center"></div><div class="h-full w-6 flex items-center justify-center"><div class="h-full w-1 bg-green-500 pointer-events-none"></div></div><div class="w-6 h-6 absolute bottom-0 mt-5 rounded-full bg-green-500 shadow text-center"></div></div>',1),Q={class:"col-start-4 col-end-12 p-4 rounded-xl mt-5 mr-auto w-8/12 text-left"},Y={key:0,class:"font-semibold md:text-2xl"},Z={key:1,class:"font-semibold md:text-2xl"},tt={key:2,class:"font-semibold md:text-2xl"},et={key:3,class:"font-semibold md:text-2xl"},st={key:4,class:"leading-tight text-justify w-full my-3"},ot=l("i",{class:"fas fa-car mr-3 text-2xl"},null,-1),lt={class:"leading-tight text-justify w-full my-3"},at=l("i",{class:"fas fa-phone-alt mr-3 text-2xl"},null,-1),ct={key:5,class:"leading-tight text-justify w-full my-3"},ut=l("i",{class:"fas fa-clock mr-3 text-2xl"},null,-1),nt={class:"leading-tight text-justify w-full my-3"},rt=l("i",{class:"fas fa-map mr-3 text-2xl"},null,-1),it={key:6,class:"font-semibold mb-0 md:text-2xl"},ft={class:"w-10/12 mx-auto my-10 text-left"},dt={class:"mt-5"},ht=l("h1",{class:"font-mono text-3xl font-bold mt-8"},"\u9644\u8FD1\u666F\u9EDE",-1),vt={class:"flex flex-col md:flex-row md:justify-between"},mt={class:"font-mono font-bold mt-2"},pt=l("h1",{class:"font-mono text-3xl font-bold mt-8"},"\u9644\u8FD1\u7F8E\u98DF",-1),gt={class:"flex flex-col md:flex-row md:justify-between"},_t={class:"font-mono font-bold mt-2"},Dt=B({setup(m){const y=I(),o=N(),v=f(y.params.ID),x=f(o.state.allSpotData),p=f(o.state.allFoodData),D=f(o.state.allHotelData),P=f(o.state.allActivityData),c=f({}),u=f(""),{oneSpot:w,oneFood:g,oneHotel:A,oneActivity:S}=J(o.state.selectCountry);async function i(a){console.log(a,o.state.selectType),o.state.selectType=="\u65C5\u904A\u666F\u9EDE"?o.state.selectCountry==""?x.value.forEach(t=>{t.ScenicSpotID==a&&(c.value=t,u.value=t.Picture.PictureUrl1)}):u.value=w.Picture.PictureUrl1:o.state.selectType=="\u89C0\u5149\u6D3B\u52D5"?o.state.selectCountry==""?P.value.forEach(t=>{t.ActivityID==a&&(c.value=t,u.value=t.Picture.PictureUrl1)}):u.value=S.Picture.PictureUrl1:o.state.selectType=="\u7F8E\u98DF\u54C1\u5617"?o.state.selectCountry==""?p.value.forEach(t=>{t.RestaurantID==a&&(c.value=t,u.value=t.Picture.PictureUrl1)}):u.value=g.Picture.PictureUrl1:o.state.selectType=="\u4F4F\u5BBF\u63A8\u85A6"?o.state.selectCountry==""?D.value.forEach(t=>{t.HotelID==a&&(c.value=t,u.value=t.Picture.PictureUrl1)}):u.value=A.Picture.PictureUrl1:o.state.selectCountry==""?(x.value.forEach(t=>{t.ScenicSpotID==a&&(console.log("spot"),o.dispatch("selecttype","\u65C5\u904A\u666F\u9EDE"),c.value=t,u.value=t.Picture.PictureUrl1,console.log("1",u.value))}),P.value.forEach(t=>{t.ActivityID==a&&(console.log("activity"),o.dispatch("selecttype","\u89C0\u5149\u6D3B\u52D5"),c.value=t,u.value=t.Picture.PictureUrl1)}),D.value.forEach(t=>{t.HotelID==a&&(console.log("hotel"),o.dispatch("selecttype","\u7F8E\u98DF\u54C1\u5617"),c.value=t,u.value=t.Picture.PictureUrl1,console.log("no"))}),p.value.forEach(t=>{t.RestaurantID==a&&(console.log("food"),o.dispatch("selecttype","\u4F4F\u5BBF\u63A8\u85A6"),c.value=t,u.value=t.Picture.PictureUrl1)})):u.value=A.Picture.PictureUrl1}return _(()=>{i(v.value)}),(a,t)=>{const e=H("router-link");return n(),r("div",R,[F(O),z,l("div",V,[l("img",{src:u.value,class:"w-10/12 mx-auto h-80 md:h-auto md:w-6/12 mt-10 rounded-3xl bg-no-repeat bg-center bg-cover"},null,8,X),l("div",q,[l("h1",K,d(c.value.Name),1),l("div",G,[l("div",L,[W,l("div",Q,[h(o).state.selectType=="\u65C5\u904A\u666F\u9EDE"?(n(),r("h3",Y,"\u666F\u9EDE\u8CC7\u8A0A")):h(o).state.selectType=="\u89C0\u5149\u6D3B\u52D5"?(n(),r("h3",Z,"\u6D3B\u52D5\u8CC7\u8A0A")):h(o).state.selectType=="\u7F8E\u98DF\u54C1\u5617"?(n(),r("h3",tt,"\u5E97\u5BB6\u8CC7\u8A0A")):(n(),r("h3",et,"\u4F4F\u5BBF\u8CC7\u8A0A")),h(o).state.selectType=="\u65C5\u904A\u666F\u9EDE"?(n(),r("p",st,[ot,C(d(c.value.TravelInfo),1)])):E("",!0),l("p",lt,[at,C(d(c.value.Phone),1)]),h(o).state.selectType=="\u65C5\u904A\u666F\u9EDE"?(n(),r("p",ct,[ut,C(d(c.value.OpenTime),1)])):E("",!0),l("p",nt,[rt,C(d(c.value.Address),1)]),h(o).state.selectType=="\u65C5\u904A\u666F\u9EDE"?(n(),r("h3",it,"\u666F\u9EDE\u4ECB\u7D39")):E("",!0)])])])])]),l("div",ft,d(c.value.DescriptionDetail),1),l("div",dt,[l("div",null,[ht,l("div",vt,[(n(!0),r(b,null,T(h(w).slice(0,4),s=>(n(),r("div",{class:"my-5 mx-auto w-10/12 md:w-3/12 h-28",key:s.ScenicSpotID},[F(e,{to:`${s.ScenicSpotID}`,onClick:k=>`id=${s.ScenicSpotID}`},{default:j(()=>[l("div",{class:"flex justify-center items-center w-8/12 md:w-10/12 mx-auto h-full relative bg-no-repeat bg-center bg-cover",style:U({backgroundImage:`url(${s.Picture.PictureUrl1})`})},null,4),l("p",mt,d(s.ScenicSpotName),1)]),_:2},1032,["to","onClick"])]))),128))])]),l("div",null,[pt,l("div",gt,[(n(!0),r(b,null,T(h(g).slice(0,4),s=>(n(),r("div",{class:"my-5 mx-auto w-10/12 md:w-3/12 h-28",key:s.RestaurantID},[F(e,{to:`${s.RestaurantID}`},{default:j(()=>[l("div",{class:"flex justify-center items-center w-8/12 md:w-10/12 mx-auto h-full relative bg-no-repeat bg-center bg-cover",style:U({backgroundImage:`url(${s.Picture.PictureUrl1})`})},null,4),l("p",_t,d(s.RestaurantName),1)]),_:2},1032,["to"])]))),128))])])])])}}});export{Dt as default};
