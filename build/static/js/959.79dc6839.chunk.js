"use strict";(self.webpackChunkcrypto_currency_app=self.webpackChunkcrypto_currency_app||[]).push([[959],{959:(e,r,n)=>{n.r(r),n.d(r,{default:()=>b});var t=n(5043),o=n(9172),i=n(1551),s=n(1012),l=n(5966),a=n(6795),c=n(6187),d=n(6501),h=n(3359),g=n(7925),p=n(7503),y=n(4759),u=n(8885),x=n(2703),m=n(9691),f=n(3216),j=n(2116),C=n(8918),A=n(579);const k=(0,i.A)({row:{backgroundColor:"#16171a",cursor:"pointer","&:hover":{backgroundColor:"#131111"},fontFamily:"Montserrat"},pagination:{"& .MuiPaginationItem-root":{color:"gold"}}}),b=()=>{var e;const[r,n]=(0,t.useState)(""),[i,b]=(0,t.useState)(1),{currency:_,symbol:v,coins:w,loading:M,fetchCoins:F}=(0,o.h)(),S=k(),B=(0,f.Zp)(),E=(0,s.A)({palette:{primary:{main:"#fff"},type:"dark"}});(0,t.useEffect)((()=>{F()}),[_]);const P=()=>w.filter((e=>e.name.toLowerCase().includes(r)||e.symbol.toLowerCase().includes(r)));return(0,A.jsx)(l.A,{theme:E,children:(0,A.jsxs)(a.A,{style:{textAlign:"center"},children:[(0,A.jsx)(c.A,{variant:"h4",style:{margin:18,fontFamily:"Montserrat"},children:"Crypto-currency Prices by Market Cap"}),(0,A.jsx)(d.A,{label:"Search for a Crypto Currency..",variant:"outlined",style:{marginBottom:20,width:"75%"},onChange:e=>n(e.target.value)}),(0,A.jsx)(h.A,{children:M?(0,A.jsx)(g.A,{style:{backgroundColor:"gold"}}):(0,A.jsxs)(p.A,{children:[(0,A.jsx)(y.A,{style:{backgroundColor:"#EEBC1D"},children:(0,A.jsx)(u.A,{children:["Coin","Price","24h Change","Market Cap"].map((e=>(0,A.jsx)(x.A,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"Coin"===e?"":"right",children:e},e)))})}),(0,A.jsx)(m.A,{children:P().slice(10*(i-1),10*(i-1)+10).map((e=>{const r=e.price_change_percentage_24h>0;return(0,A.jsxs)(u.A,{onClick:()=>B("/coins/".concat(e.id)),className:S.row,children:[(0,A.jsxs)(x.A,{component:"th",scope:"row",style:{display:"flex",gap:15},children:[(0,A.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"50",style:{marginBottom:10}}),(0,A.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,A.jsx)("span",{style:{textTransform:"uppercase",fontSize:22},children:e.symbol}),(0,A.jsx)("span",{style:{color:"darkgrey"},children:e.name})]})]}),(0,A.jsxs)(x.A,{align:"right",children:[v," ",(0,j.q)(e.current_price.toFixed(2))]}),(0,A.jsxs)(x.A,{align:"right",style:{color:r>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[r&&"+",e.price_change_percentage_24h.toFixed(2),"%"]}),(0,A.jsxs)(x.A,{align:"right",children:[v," ",(0,j.q)(e.market_cap.toString().slice(0,-6)),"M"]})]},e.name)}))})]})}),(0,A.jsx)(C.A,{count:((null===(e=P())||void 0===e?void 0:e.length)/10).toFixed(0),style:{padding:20,width:"100%",display:"flex",justifyContent:"center"},classes:{ul:S.pagination},onChange:(e,r)=>{b(r),window.scroll(0,450)}})]})})}}}]);
//# sourceMappingURL=959.79dc6839.chunk.js.map