(this["webpackJsonpstartup-house-task"]=this["webpackJsonpstartup-house-task"]||[]).push([[0],{106:function(t,e,n){},117:function(t,e,n){"use strict";n.r(e);var c,a,r,o,i,s,j,u,b,d,O,l,p,x,f,h,m,v,y,k,w,S,g=n(70),E=n.n(g),R=n(0),C=n.n(R),A=n(71),_=n.n(A),T=n(37),N=(n(106),n(14)),I=n(27),P=n(16),D=n(15),F="/startup-house-task/",M="".concat(F,"details"),z=839,H=599,U=n(25),L=n(47),Y=n(4),B=n(18),V=n(28),G=n(81),K="SET_QUERY",W="SET_SEARCH_RESULT",q="ADD_TO_PORTFOLIO",J="REMOVE_FROM_PORTFOLIO",Q=Object(G.a)({searchResult:[],portfolio:[]},(c={},Object(Y.a)(c,K,(function(t,e){return Object(V.a)(Object(V.a)({},t),{},{query:e.payload})})),Object(Y.a)(c,W,(function(t,e){return Object(V.a)(Object(V.a)({},t),{},{searchResult:e.payload})})),Object(Y.a)(c,q,(function(t,e){return Object(V.a)(Object(V.a)({},t),{},{portfolio:[].concat(Object(B.a)(t.portfolio),[e.payload])})})),Object(Y.a)(c,J,(function(t,e){var n=Object(B.a)(t.portfolio);return n.splice(e.payload.index,1),Object(V.a)(Object(V.a)({},t),{},{portfolio:n})})),c)),X=Object(U.d)(Q,Object(U.a)(L.a)),Z=n(22),$=n(33),tt=n(13),et=n(167),nt=n(170),ct=function(t){return t.query},at=function(t){return t.searchResult},rt=function(t){return t.portfolio},ot=function(){return Object(I.c)(rt)},it=function(t,e){var n="SYMBOL_SEARCH"===t?"keywords":"symbol";return"".concat("https://www.alphavantage.co/","query?function=").concat(t,"&").concat(n,"=").concat(e,"&apikey=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/startup-house-task",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).ALPHAVANTAGE_API_KEY)},st=function(t){return{symbol:t["1. symbol"],name:t["2. name"]}},jt=function(){var t=Object($.a)(Object(Z.a)().mark((function t(e){var n;return Object(Z.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:return n=t.sent,t.abrupt("return",{companies:(((c=n).Note?void 0:c.bestMatches)||[]).map(st),note:c.Note});case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}(),ut=function(){var t=Object($.a)(Object(Z.a)().mark((function t(e){var n;return Object(Z.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(it("SYMBOL_SEARCH",e));case 2:if(200!==(n=t.sent).status){t.next=10;break}return t.next=6,jt(n);case 6:t.t1=t.sent,t.t0={data:t.t1,isSuccess:!0},t.next=11;break;case 10:t.t0={data:{},isSuccess:!1};case 11:return t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),bt=function(){var t=Object($.a)(Object(Z.a)().mark((function t(e){var n;return Object(Z.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:return n=t.sent,t.abrupt("return",{details:(c=n).Note?void 0:{address:c.Address,description:c.Description,marketCapitalization:c.MarketCapitalization},note:c.Note});case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}(),dt=function(){var t=Object($.a)(Object(Z.a)().mark((function t(e){var n;return Object(Z.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(it("OVERVIEW",e));case 2:if(200!==(n=t.sent).status){t.next=10;break}return t.next=6,bt(n);case 6:t.t1=t.sent,t.t0={data:t.t1,isSuccess:!0},t.next=11;break;case 10:t.t0={data:{},isSuccess:!1};case 11:return t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Ot=Math.pow(10,9),lt=Math.pow(10,6),pt=n(2),xt=D.c.div(a||(a=Object(N.a)(["\n"]))),ft=D.c.h2(r||(r=Object(N.a)(["\n"]))),ht=D.c.div(o||(o=Object(N.a)(["\n"]))),mt=D.c.span(i||(i=Object(N.a)(["\n  font-weight: 700;\n  margin-right: 5px;\n"]))),vt=D.c.div(s||(s=Object(N.a)(["\n  margin: 20px 0;\n"]))),yt=function(t){var e,n=t.company,c=t.details;return Object(pt.jsxs)(xt,{children:[Object(pt.jsx)(ft,{children:n.name}),Object(pt.jsxs)(ht,{children:[Object(pt.jsx)(mt,{children:"Address:"}),(null===c||void 0===c?void 0:c.address)||"NOT FOUND"]}),Object(pt.jsxs)(ht,{children:[Object(pt.jsx)(mt,{children:"Market Capitalization:"}),null!==c&&void 0!==c&&c.marketCapitalization?(e=Number(c.marketCapitalization),e>=Ot?"".concat(Math.floor(e/Ot)," bln"):e>=lt?"".concat(Math.floor(e/lt)," mln"):String(e)):"NOT FOUND"]}),Object(pt.jsx)(vt,{children:(null===c||void 0===c?void 0:c.description)||"DESCRIPTION NOT FOUND"})]})},kt=D.c.div(j||(j=Object(N.a)(["\n  margin-top: 30px;\n"]))),wt=D.c.div(u||(u=Object(N.a)(["\n  margin-bottom: 20px;\n"]))),St=function(){var t=Object(P.g)().companyIndex,e=ot(),n=Object(R.useState)(!0),c=Object(tt.a)(n,2),a=c[0],r=c[1],o=Object(R.useState)(),i=Object(tt.a)(o,2),s=i[0],j=i[1],u=function(t,e){if(e&&t.length>0)return t[Number(e)]}(e,t),b=Object(R.useCallback)(function(){var t=Object($.a)(Object(Z.a)().mark((function t(e){var n;return Object(Z.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.next=3,dt(e);case 3:(n=t.sent).isSuccess?(n.data.note&&alert("API sent a note: ".concat(n.data.note)),j(n.data.details)):alert("Unknown error while fetching company details. Please try later"),r(!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(R.useEffect)((function(){u&&b(u.symbol)}),[u,b]),Object(pt.jsxs)(kt,{children:[Object(pt.jsx)(wt,{children:Object(pt.jsx)(et.a,{variant:"contained",component:T.b,to:F,children:"Go Back"})}),a&&Object(pt.jsx)(nt.a,{}),!a&&Object(pt.jsx)(yt,{company:u,details:s})]})},gt=D.c.header(b||(b=Object(N.a)(["\n  border-bottom: solid 1px black;\n  font-size: 30px;\n  font-family: monospace;\n  height: ","px;\n  line-height: ","px;\n\n  @media (max-width: ","px) {\n    font-size: 20px;\n  }\n"])),60,60,H),Et=D.c.div(d||(d=Object(N.a)(["\n  max-width: ","px;\n  padding: 0 20px;\n  margin: auto;\n"])),1e3),Rt=function(){return Object(pt.jsx)(gt,{children:Object(pt.jsx)(Et,{children:"SDH Frontend Homework"})})},Ct=n(169),At=n(172),_t=function(t){return{type:W,payload:t}},Tt=n(166),Nt=n(77),It=n.n(Nt),Pt=n(173),Dt=n(162),Ft=n(174),Mt=Object(D.c)(Tt.a)(O||(O=Object(N.a)(["\n  background: ",";\n"])),"#F2F2F2"),zt=function(t){var e=t.company,n=t.index,c=t.onRemove;return Object(pt.jsx)(Mt,{disablePadding:!0,disableGutters:!0,secondaryAction:Object(pt.jsx)(Pt.a,{"aria-label":"remove",onClick:function(){return c()},children:Object(pt.jsx)(It.a,{})}),children:Object(pt.jsx)(Dt.a,{component:T.b,to:"".concat(M,"/").concat(n),children:Object(pt.jsx)(Ft.a,{primary:"".concat(e.symbol," - ").concat(e.name)})})})},Ht=D.c.div(l||(l=Object(N.a)(["\n"]))),Ut=function(){var t=Object(I.b)(),e=ot(),n=Object(R.useCallback)((function(e){t({type:J,payload:{index:e}})}),[t]);return Object(pt.jsx)(Ht,{children:Object(pt.jsxs)(At.a,{children:[0===e.length&&Object(pt.jsx)("div",{children:"No items in portfolio"}),e.map((function(t,e){return Object(pt.jsx)(zt,{company:t,index:e,onRemove:function(){return n(e)}},t.symbol)}))]})})},Lt=D.c.div(p||(p=Object(N.a)(["\n  font-size: 20px;\n"]))),Yt=function(t){var e=t.children;return Object(pt.jsx)(Lt,{children:e})},Bt=D.c.div(x||(x=Object(N.a)(["\n"]))),Vt=function(){return Object(pt.jsxs)(Bt,{children:[Object(pt.jsx)(Yt,{children:"Your Portfolio"}),Object(pt.jsx)(Ut,{})]})},Gt=n(79),Kt=n.n(Gt),Wt=n(171),qt=n(164),Jt=n(78),Qt=D.c.div(f||(f=Object(N.a)(["\n"]))),Xt=function(){var t=Object(I.b)(),e=Object(R.useState)(""),n=Object(tt.a)(e,2),c=n[0],a=n[1],r=Object(R.useCallback)(Object(Jt.debounce)(function(){var e=Object($.a)(Object(Z.a)().mark((function e(n){var c;return Object(Z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t({type:K,payload:n}),!n){e.next=6;break}return e.next=4,ut(n);case 4:(c=e.sent).isSuccess?(c.data.note&&alert("API sent a note: ".concat(c.data.note)),t(_t(c.data.companies))):alert("Unknown error while fetching search result. Please try later");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),300),[t]);return Object(R.useEffect)((function(){c&&r(c)}),[r,c]),Object(pt.jsx)(Qt,{children:Object(pt.jsx)(qt.a,{id:"outlined-basic",label:"Company Name",variant:"outlined",InputProps:{startAdornment:Object(pt.jsx)(Wt.a,{position:"start",children:Object(pt.jsx)(Kt.a,{})})},onChange:function(t){return a(t.currentTarget.value)}})})},Zt=n(80),$t=n.n(Zt),te=function(t){var e=t.company,n=t.onAdd;return Object(pt.jsx)(Tt.a,{disableGutters:!0,secondaryAction:Object(pt.jsx)(Pt.a,{"aria-label":"add",onClick:function(){return n()},children:Object(pt.jsx)($t.a,{})}),children:Object(pt.jsx)(Ft.a,{primary:"".concat(e.symbol," - ").concat(e.name)})})},ee=D.c.div(h||(h=Object(N.a)(["\n"]))),ne=function(){var t=Object(I.b)(),e=Object(I.c)(ct),n=ot(),c=Object(I.c)(at),a=Object(R.useCallback)((function(e){!function(t,e){return t.find((function(t){return t.symbol===e.symbol}))}(n,e)?t({type:q,payload:e}):alert("You cannot add the same company twice to your portfolio")}),[t,n]);return Object(pt.jsxs)(ee,{children:[e&&Object(pt.jsxs)(Yt,{children:["Search Results: ",c.length]}),Object(pt.jsx)(At.a,{children:c.map((function(t){return Object(pt.jsx)(te,{company:t,onAdd:function(){return a(t)}},t.symbol)}))})]})},ce=D.c.div(m||(m=Object(N.a)(["\n"]))),ae=D.c.div(v||(v=Object(N.a)(["\n  margin-bottom: 20px;\n"]))),re=function(){return Object(pt.jsxs)(ce,{children:[Object(pt.jsx)(ae,{children:Object(pt.jsx)(Xt,{})}),Object(pt.jsx)(ne,{})]})},oe=Object(D.c)(Ct.a)(y||(y=Object(N.a)(["\n"]))),ie=D.c.div(k||(k=Object(N.a)(["\n  margin-top: 30px;\n  display: flex;\n  \n  ",'[orientation="horizontal"] {\n    display: none;\n  }\n\n  @media (max-width: ',"px) {\n    flex-direction: column;\n    ",'[orientation="vertical"] {\n      display: none;\n    }\n    ','[orientation="horizontal"] {\n      display: block;\n    }\n  }\n'])),oe,z,oe,oe),se=D.c.div(w||(w=Object(N.a)(["\n  padding: 0 20px;\n  flex: 1;\n\n  @media (max-width: ","px) {\n    padding: 20px 0;\n  }\n"])),z),je=function(){return Object(pt.jsxs)(ie,{children:[Object(pt.jsx)(se,{children:Object(pt.jsx)(re,{})}),Object(pt.jsx)(oe,{orientation:"horizontal",flexItem:!0}),Object(pt.jsx)(oe,{orientation:"vertical",flexItem:!0}),Object(pt.jsx)(se,{children:Object(pt.jsx)(Vt,{})})]})},ue=D.c.div(S||(S=Object(N.a)(["\n  max-width: ","px;\n  padding: 0 20px;\n  margin: 0 auto;\n"])),1e3),be=function(){return Object(pt.jsxs)(I.a,{store:X,children:[Object(pt.jsx)(Rt,{}),Object(pt.jsx)(ue,{children:Object(pt.jsxs)(P.c,{children:[Object(pt.jsx)(P.a,{path:F,element:Object(pt.jsx)(je,{})}),Object(pt.jsx)(P.a,{path:"".concat(M,"/:companyIndex"),element:Object(pt.jsx)(St,{})})]})})]})};E.a.config(),_.a.createRoot(document.getElementById("root")).render(Object(pt.jsx)(C.a.StrictMode,{children:Object(pt.jsx)(T.a,{children:Object(pt.jsx)(be,{})})}))}},[[117,1,2]]]);
//# sourceMappingURL=main.9e163f0e.chunk.js.map