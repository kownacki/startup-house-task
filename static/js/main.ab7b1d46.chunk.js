(this["webpackJsonpstartup-house-task"]=this["webpackJsonpstartup-house-task"]||[]).push([[0],{107:function(t,e,n){},113:function(t,e,n){"use strict";n.r(e);var c,a,r,i,o,s,j,b,u,O,d,l,p,x,f,h,m,v,y,k,w,g,S,R=n(0),C=n.n(R),E=n(70),I=n.n(E),z=n(27),A=n(37),M=(n(107),n(14)),T=n(16),_=n(15),B="/details",F="https://www.alphavantage.co/",D=839,Y=599,N=n(22),P=n(33),q=n(13),H=n(163),L=n(166),U=function(t){return t.query},G=function(t){return t.searchResult},Q=function(t){return t.portfolio},V=function(){return Object(z.c)(Q)},J=function(t){return{symbol:t["1. symbol"],name:t["2. name"]}},W=function(){var t=Object(P.a)(Object(N.a)().mark((function t(e){var n;return Object(N.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:return n=t.sent,t.abrupt("return",n.bestMatches.map(J));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),K=function(){var t=Object(P.a)(Object(N.a)().mark((function t(e){var n;return Object(N.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(F,"query?function=SYMBOL_SEARCH&keywords=").concat(e,"&apikey=","5UID986T5QBYBMON"));case 2:if(200!==(n=t.sent).status){t.next=10;break}return t.next=6,W(n);case 6:t.t1=t.sent,t.t0={companies:t.t1,isSuccess:!0},t.next=11;break;case 10:t.t0={isSuccess:!1};case 11:return t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),X=function(){var t=Object(P.a)(Object(N.a)().mark((function t(e){var n;return Object(N.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:return n=t.sent,t.abrupt("return",{address:(c=n).Address,description:c.Description,marketCapitalization:c.MarketCapitalization});case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}(),Z=function(){var t=Object(P.a)(Object(N.a)().mark((function t(e){var n;return Object(N.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(F,"query?function=OVERVIEW&symbol=").concat(e,"&apikey=","5UID986T5QBYBMON"));case 2:if(200!==(n=t.sent).status){t.next=10;break}return t.next=6,X(n);case 6:t.t1=t.sent,t.t0={details:t.t1,isSuccess:!0},t.next=11;break;case 10:t.t0={isSuccess:!1};case 11:return t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),$=n(2),tt=_.c.div(c||(c=Object(M.a)(["\n"]))),et=_.c.h2(a||(a=Object(M.a)(["\n"]))),nt=_.c.div(r||(r=Object(M.a)(["\n"]))),ct=_.c.span(i||(i=Object(M.a)(["\n  font-weight: 700;\n  margin-right: 5px;\n"]))),at=_.c.div(o||(o=Object(M.a)(["\n  margin: 20px 0;\n"]))),rt=function(t){var e=t.company,n=t.details;return Object($.jsxs)(tt,{children:[Object($.jsx)(et,{children:e.name}),Object($.jsxs)(nt,{children:[Object($.jsx)(ct,{children:"Address:"}),n.address]}),Object($.jsxs)(nt,{children:[Object($.jsx)(ct,{children:"Market Capitalization:"}),n.marketCapitalization]}),Object($.jsx)(at,{children:n.description})]})},it=_.c.div(s||(s=Object(M.a)(["\n  margin-top: 30px;\n"]))),ot=_.c.div(j||(j=Object(M.a)(["\n  margin-bottom: 20px;\n"]))),st=function(){var t=Object(T.g)().companyIndex,e=V(),n=Object(R.useState)(!0),c=Object(q.a)(n,2),a=c[0],r=c[1],i=Object(R.useState)(),o=Object(q.a)(i,2),s=o[0],j=o[1],b=function(t,e){if(e&&t.length>0)return t[Number(e)]}(e,t),u=Object(R.useCallback)(function(){var t=Object(P.a)(Object(N.a)().mark((function t(e){var n;return Object(N.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.next=3,Z(e);case 3:(n=t.sent).isSuccess&&(j(n.details),r(!1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(R.useEffect)((function(){b&&u(b.symbol)}),[b,u]),Object($.jsxs)(it,{children:[Object($.jsx)(ot,{children:Object($.jsx)(H.a,{variant:"contained",component:A.b,to:"/",children:"Go Back"})}),a&&Object($.jsx)(L.a,{}),!a&&Object($.jsx)(rt,{company:b,details:s})]})},jt=_.c.header(b||(b=Object(M.a)(["\n  border-bottom: solid 1px black;\n  font-size: 30px;\n  font-family: monospace;\n  height: ","px;\n  line-height: ","px;\n\n  @media (max-width: ","px) {\n    font-size: 20px;\n  }\n"])),60,60,Y),bt=_.c.div(u||(u=Object(M.a)(["\n  max-width: ","px;\n  padding: 0 20px;\n  margin: auto;\n"])),1e3),ut=function(){return Object($.jsx)(jt,{children:Object($.jsx)(bt,{children:"SDH Frontend Homework"})})},Ot=n(165),dt=n(168),lt="SET_QUERY",pt="SET_SEARCH_RESULT",xt="ADD_TO_PORTFOLIO",ft="REMOVE_FROM_PORTFOLIO",ht=function(t){return{type:pt,payload:t}},mt=n(162),vt=n(76),yt=n.n(vt),kt=n(169),wt=n(158),gt=n(170),St=Object(_.c)(mt.a)(O||(O=Object(M.a)(["\n  background: ",";\n"])),"#F2F2F2"),Rt=function(t){var e=t.company,n=t.index,c=t.onRemove;return Object($.jsx)(St,{disablePadding:!0,disableGutters:!0,secondaryAction:Object($.jsx)(kt.a,{"aria-label":"remove",onClick:function(){return c()},children:Object($.jsx)(yt.a,{})}),children:Object($.jsx)(wt.a,{component:A.b,to:"".concat(B,"/").concat(n),children:Object($.jsx)(gt.a,{primary:"".concat(e.symbol," - ").concat(e.name)})})})},Ct=_.c.div(d||(d=Object(M.a)(["\n"]))),Et=function(){var t=Object(z.b)(),e=V(),n=Object(R.useCallback)((function(e){t({type:ft,payload:{index:e}})}),[t]);return Object($.jsx)(Ct,{children:Object($.jsxs)(dt.a,{children:[0===e.length&&Object($.jsx)("div",{children:"No items in portfolio"}),e.map((function(t,e){return Object($.jsx)(Rt,{company:t,index:e,onRemove:function(){return n(e)}},t.symbol)}))]})})},It=_.c.div(l||(l=Object(M.a)(["\n  font-size: 20px;\n"]))),zt=function(t){var e=t.children;return Object($.jsx)(It,{children:e})},At=_.c.div(p||(p=Object(M.a)(["\n"]))),Mt=function(){return Object($.jsxs)(At,{children:[Object($.jsx)(zt,{children:"Your Portfolio"}),Object($.jsx)(Et,{})]})},Tt=n(78),_t=n.n(Tt),Bt=n(167),Ft=n(160),Dt=n(77),Yt=_.c.div(x||(x=Object(M.a)(["\n"]))),Nt=function(){var t=Object(z.b)(),e=Object(R.useState)(""),n=Object(q.a)(e,2),c=n[0],a=n[1],r=Object(R.useCallback)(Object(Dt.debounce)(function(){var e=Object(P.a)(Object(N.a)().mark((function e(n){var c;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t({type:lt,payload:n}),!n){e.next=6;break}return e.next=4,K(n);case 4:(c=e.sent).isSuccess&&t(ht(c.companies));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),300),[t]);return Object(R.useEffect)((function(){c&&r(c)}),[r,c]),Object($.jsx)(Yt,{children:Object($.jsx)(Ft.a,{id:"outlined-basic",label:"Company Name",variant:"outlined",InputProps:{startAdornment:Object($.jsx)(Bt.a,{position:"start",children:Object($.jsx)(_t.a,{})})},onChange:function(t){return a(t.currentTarget.value)}})})},Pt=n(79),qt=n.n(Pt),Ht=function(t){var e=t.company,n=t.onAdd;return Object($.jsx)(mt.a,{disableGutters:!0,secondaryAction:Object($.jsx)(kt.a,{"aria-label":"add",onClick:function(){return n()},children:Object($.jsx)(qt.a,{})}),children:Object($.jsx)(gt.a,{primary:"".concat(e.symbol," - ").concat(e.name)})})},Lt=_.c.div(f||(f=Object(M.a)(["\n"]))),Ut=function(){var t=Object(z.b)(),e=Object(z.c)(U),n=V(),c=Object(z.c)(G),a=Object(R.useCallback)((function(e){n.find((function(t){return t.symbol===e.symbol}))?alert("You cannot add the same company twice to your portfolio"):t({type:xt,payload:e})}),[t,n]);return Object($.jsxs)(Lt,{children:[e&&Object($.jsx)(zt,{children:"Search Results"}),Object($.jsx)(dt.a,{children:c.map((function(t){return Object($.jsx)(Ht,{company:t,onAdd:function(){return a(t)}},t.symbol)}))})]})},Gt=_.c.div(h||(h=Object(M.a)(["\n"]))),Qt=_.c.div(m||(m=Object(M.a)(["\n  margin-bottom: 20px;\n"]))),Vt=function(){return Object($.jsxs)(Gt,{children:[Object($.jsx)(Qt,{children:Object($.jsx)(Nt,{})}),Object($.jsx)(Ut,{})]})},Jt=Object(_.c)(Ot.a)(v||(v=Object(M.a)(["\n"]))),Wt=_.c.div(y||(y=Object(M.a)(["\n  margin-top: 30px;\n  display: flex;\n  \n  ",'[orientation="horizontal"] {\n    display: none;\n  }\n\n  @media (max-width: ',"px) {\n    flex-direction: column;\n    ",'[orientation="vertical"] {\n      display: none;\n    }\n    ','[orientation="horizontal"] {\n      display: block;\n    }\n  }\n'])),Jt,D,Jt,Jt),Kt=_.c.div(k||(k=Object(M.a)(["\n  padding: 0 20px;\n  flex: 1;\n\n  @media (max-width: ","px) {\n    padding: 20px 0;\n  }\n"])),D),Xt=function(){return Object($.jsxs)(Wt,{children:[Object($.jsx)(Kt,{children:Object($.jsx)(Vt,{})}),Object($.jsx)(Jt,{orientation:"horizontal",flexItem:!0}),Object($.jsx)(Jt,{orientation:"vertical",flexItem:!0}),Object($.jsx)(Kt,{children:Object($.jsx)(Mt,{})})]})},Zt=_.c.div(w||(w=Object(M.a)(["\n"]))),$t=_.c.div(g||(g=Object(M.a)(["\n  max-width: ","px;\n  padding: 0 20px;\n  margin: 0 auto;\n"])),1e3),te=function(){return Object($.jsxs)(Zt,{children:[Object($.jsx)(ut,{}),Object($.jsx)($t,{children:Object($.jsxs)(T.c,{children:[Object($.jsx)(T.a,{path:"/",element:Object($.jsx)(Xt,{})}),Object($.jsx)(T.a,{path:"".concat(B,"/:companyIndex"),element:Object($.jsx)(st,{})})]})})]})},ee=n(4),ne=n(18),ce=n(28),ae=n(26),re=n(80),ie=n(47),oe=Object(re.a)({searchResult:[],portfolio:[]},(S={},Object(ee.a)(S,lt,(function(t,e){return Object(ce.a)(Object(ce.a)({},t),{},{query:e.payload})})),Object(ee.a)(S,pt,(function(t,e){return Object(ce.a)(Object(ce.a)({},t),{},{searchResult:e.payload})})),Object(ee.a)(S,xt,(function(t,e){return Object(ce.a)(Object(ce.a)({},t),{},{portfolio:[].concat(Object(ne.a)(t.portfolio),[e.payload])})})),Object(ee.a)(S,ft,(function(t,e){var n=Object(ne.a)(t.portfolio);return n.splice(e.payload.index,1),Object(ce.a)(Object(ce.a)({},t),{},{portfolio:n})})),S)),se=Object(ae.d)(oe,Object(ae.a)(ie.a));I.a.createRoot(document.getElementById("root")).render(Object($.jsx)(C.a.StrictMode,{children:Object($.jsx)(z.a,{store:se,children:Object($.jsx)(A.a,{children:Object($.jsx)(te,{})})})}))}},[[113,1,2]]]);
//# sourceMappingURL=main.ab7b1d46.chunk.js.map