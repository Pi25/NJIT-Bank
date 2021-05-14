(this["webpackJsonpbanking-app"]=this["webpackJsonpbanking-app"]||[]).push([[0],{39:function(t,e,c){},66:function(t,e,c){},67:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(19),i=c.n(r),o=(c(39),c(68)),s=c(11),u=c(0),d=function(t){var e=t.title,c=Object(o.e)(),n=Object(o.d)();return Object(u.jsxs)("div",{className:"title-bar",children:["/account"!==c.pathname&&Object(u.jsx)("img",{src:"/images/arrow-back.png",alt:"back icon",className:"back-button",title:"Back to Accounts",onClick:function(){n.push("/")}}),Object(u.jsx)("p",{children:e})]})},j=c(6),l=function(t){var e=t.account,c=Object(o.d)();return Object(u.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(u.jsxs)("div",{style:{flexGrow:1},children:[Object(u.jsxs)("h2",{children:["Balance: $",e.balance]}),Object(u.jsxs)("p",{children:["Account Type: ",e.type]}),Object(u.jsxs)("p",{children:["Last Updated: ",e.dateUpdated.toDateString()]}),Object(u.jsxs)("p",{children:["Date Created: ",e.dateCreated.toDateString()]})]}),Object(u.jsxs)("div",{className:"account-action",children:[Object(u.jsx)("button",{onClick:function(){c.push("/update-account/".concat(e.id))},children:"Edit Account"}),Object(u.jsx)("button",{onClick:function(){c.push("/account/".concat(e.id))},children:"View Account Information"})]})]})},b=function(t){var e=t.account,c=Object(n.useState)(!1),a=Object(j.a)(c,2),r=a[0],i=a[1];return Object(u.jsxs)("div",{className:"account-card",children:[Object(u.jsxs)("div",{className:"account-info",onClick:function(){return i(!r)},children:[Object(u.jsx)("div",{style:{flexGrow:1},children:Object(u.jsx)("h1",{children:e.name})}),Object(u.jsx)("div",{className:"account-action",children:r?Object(u.jsx)("img",{src:"/images/up-arrow.png",alt:"close icon",className:"account-card-icon"}):Object(u.jsx)("img",{src:"/images/down-arrow.png",alt:"close icon",className:"account-card-icon"})})]}),r&&Object(u.jsx)("div",{className:"account-description",children:Object(u.jsx)(l,{account:e})})]})},O=c(2),h=c(5),p=c.n(h),f=c(10),x=c(15),v=c(22),m=c(4),g=[{id:"0",accountId:"25466677",description:"Stock Trading",amount:20,type:"deposit",dateCreated:new Date},{id:"1",accountId:"25466677",description:"Pay Check",amount:20,type:"deposit",dateCreated:new Date},{id:"2",accountId:"25466677",description:"Venmo",amount:20,type:"withdraw",dateCreated:new Date}],y=function(t){var e=Object(m.a)(Object(m.a)({id:Date.now().toString()},t),{},{dateCreated:new Date});g.push(e)},w=function(t){return g.filter((function(e){return e.accountId==t}))},C=(c(47),[{id:"08786666",name:"Test Reserve Account",type:"reserve",balance:1600,dateCreated:new Date(1995,11,17),dateUpdated:new Date(2020,2,12)},{id:"122666626",name:"My Savings Account",type:"saving",balance:1400,dateCreated:new Date(1995,11,17),dateUpdated:new Date(2020,2,12)},{id:"25466677",name:"My Checkings Account",type:"checking",balance:1200,dateCreated:new Date(1995,11,17),dateUpdated:new Date(2020,2,12)}]),k=function(t){var e=Object(m.a)(Object(m.a)({id:Date.now().toString()},t),{},{dateCreated:new Date,dateUpdated:new Date});C=[].concat(Object(v.a)(C),[e])},N=function(t){return C.find((function(e){return e.id===t}))},A=function(t){var e=C.findIndex((function(e){return e.id===t.id})),c=C.find((function(e){return e.id==t.id})),n=Object(m.a)(Object(m.a)({},t),{},{dateUpdated:new Date});if(c.balance!=t.balance){var a=c.balance-t.balance;D(a,c.id)}C[e]=n},D=function(t,e){if(t>0){var c={accountId:e,description:"Balance changed",amount:Math.abs(t),type:"withdraw"};y(c)}else if(t<0){var n={accountId:e,description:"Balance changed",amount:Math.abs(t),type:"deposit"};y(n)}},S=Object(x.b)({name:"account",initialState:{accounts:[],loading:!1,selectedAccount:null},reducers:{setAccounts:function(t,e){t.accounts=e.payload},setLoading:function(t){t.loading=!t.loading},setSelectedAccount:function(t,e){t.selectedAccount=e.payload}}}),I=function(){return function(){var t=Object(f.a)(p.a.mark((function t(e){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(B()),t.next=3,C;case 3:c=t.sent,e(T(c)),e(B());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},F=function(t){return function(){var e=Object(f.a)(p.a.mark((function e(c){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(B()),n=N(t),c(M(n)),c(B());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=S.actions,B=E.setLoading,T=E.setAccounts,M=E.setSelectedAccount,U=S.reducer,L=function(){var t=Object(O.b)(),e=Object(o.d)(),c=Object(O.c)((function(t){return t.account.accounts}));return Object(n.useEffect)((function(){t(I())}),[]),Object(u.jsxs)("div",{className:"account-list",children:[Object(u.jsx)("button",{className:"new-button",onClick:function(){e.push("/create-account")},children:"Create New Account"}),c.map((function(t){return Object(u.jsx)(b,{account:t},t.id)}))]})},J=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{title:"Accounts"}),Object(u.jsx)(L,{})]})},Y=c(13),$=function(t){var e=t.account,c=Object(n.useState)(e),a=Object(j.a)(c,2),r=a[0],i=a[1],s=Object(O.b)(),d=Object(o.d)(),l=function(t){i(Object(m.a)(Object(m.a)({},r),{},Object(Y.a)({},t.target.name,t.target.value)))};return Object(u.jsxs)("div",{className:"account-form",children:[Object(u.jsx)("h2",{children:"Name:"}),Object(u.jsx)("input",{type:"text",value:r.name,onChange:l,name:"name"}),Object(u.jsx)("h2",{children:"Account Type:"}),Object(u.jsxs)("select",{value:r.type,onChange:l,name:"type",children:[Object(u.jsx)("option",{disabled:!0,children:"Select account type"}),Object(u.jsx)("option",{value:"reserve",children:"Reserve"}),Object(u.jsx)("option",{value:"saving",children:"Savings"}),Object(u.jsx)("option",{value:"checking",children:"Checking"})]}),Object(u.jsx)("h2",{children:"Account Balance:"}),Object(u.jsx)("input",{type:"number",value:r.balance,onChange:l,name:"balance"}),Object(u.jsxs)("div",{className:"account-form-action",children:[Object(u.jsx)("button",{onClick:function(){i(e)},children:"Clear"}),Object(u.jsx)("button",{onClick:function(){var t;e.id?(s((t=r,function(){var e=Object(f.a)(p.a.mark((function e(c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(B()),A(t),c(B());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),d.push("/account/".concat(r.id))):(s(function(t){return function(){var e=Object(f.a)(p.a.mark((function e(c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(B()),k(t),c(I()),c(B());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(r)),d.push("/"))},children:"Submit"})]})]})},G=function(){var t=Object(o.f)().accountId,e=Object(O.b)(),c=Object(O.c)((function(t){return t.account.selectedAccount}));return Object(n.useEffect)((function(){e(F(t))}),[t]),Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{title:"Edit Account"}),(null===c||void 0===c?void 0:c.id)&&Object(u.jsx)($,{account:c})]})},W={name:"",type:"checking",balance:0},P=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{title:"Create Account"}),Object(u.jsx)($,{account:W})]})},R=function(){var t=Object(O.c)((function(t){return t.account.selectedAccount})),e=Object(o.d)();return Object(u.jsxs)("div",{className:"account-details",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{children:["Balance: $",t.balance]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Account Type:"})," ",t.type]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Last Updated:"})," ",t.dateUpdated.toDateString()]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Date Created:"})," ",t.dateCreated.toDateString()]})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){e.push("/update-account/".concat(t.id))},children:"Edit Account"})})]})},V=Object(x.b)({name:"transaction",initialState:{transactions:[],loading:!1,filteredtransactions:[]},reducers:{setTransactions:function(t,e){t.transactions=e.payload,t.filteredtransactions=e.payload},setFilteredTransaction:function(t,e){t.filteredtransactions=e.payload},setLoading:function(t){t.loading=!t.loading}}}),_=function(){return function(){var t=Object(f.a)(p.a.mark((function t(e,c){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=c().account.selectedAccount.id,e(Q()),a=w(n),e(X(a)),e(Q());case 5:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()},q=function(t,e){return-1==t.year?e:-1!=t.year&&-1==t.month?z(t,e):-1!=t.year&&-1!=t.month?H(t,e):void 0},z=function(t,e){var c=[];return e.forEach((function(e){t.year==new Date(e.dateCreated).getFullYear()&&c.push(e)})),c},H=function(t,e){var c=[];return e.forEach((function(e){var n=t.year==new Date(e.dateCreated).getFullYear(),a=t.month==new Date(e.dateCreated).getMonth();n&&a&&c.push(e)})),c},K=V.actions,Q=K.setLoading,X=K.setTransactions,Z=K.setFilteredTransaction,tt=V.reducer,et={description:"",amount:0},ct=function(t){var e=t.type,c=t.closeForm,a=Object(n.useState)(et),r=Object(j.a)(a,2),i=r[0],o=r[1],s=Object(O.b)(),d=function(t){o(Object(m.a)(Object(m.a)({},i),{},Object(Y.a)({},t.target.name,t.target.value)))};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Amount:"}),Object(u.jsx)("input",{type:"number",value:i.amount,onChange:d,name:"amount"}),Object(u.jsx)("h2",{children:"Description"}),Object(u.jsx)("input",{type:"text",value:i.description,onChange:d,name:"description"}),Object(u.jsxs)("div",{className:"transaction-form-action",children:[Object(u.jsx)("button",{onClick:function(){o(et)},children:"Clear"}),Object(u.jsx)("button",{onClick:function(){c()},children:"Close"}),Object(u.jsx)("button",{onClick:function(){var t,c=e?"deposit":"withdraw";s((t=Object(m.a)(Object(m.a)({},i),{},{type:c}),function(){var e=Object(f.a)(p.a.mark((function e(c,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n().account.selectedAccount.id,c(Q()),r=Object(m.a)(Object(m.a)({},t),{},{accountId:a}),y(r),c(_()),c(Q());case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()))},style:{backgroundColor:e?"green":"red"},children:"Submit"})]})]})},nt=function(t){var e=t.transaction;return Object(u.jsxs)("div",{className:"transaction-card",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"transaction-description",children:e.description}),Object(u.jsx)("p",{className:"transaction-date",children:e.dateCreated.toDateString()})]}),"withdraw"===e.type?Object(u.jsxs)("p",{className:"transaction-amount withdraw",children:["$",e.amount]}):Object(u.jsxs)("p",{className:"transaction-amount deposit",children:["$",e.amount]})]})},at=function(){var t=Object(O.b)(),e=Object(O.c)((function(t){return t.transaction.filteredtransactions})),c=Object(O.c)((function(t){return t.account.selectedAccount.id}));return Object(n.useEffect)((function(){t(_())}),[c]),Object(u.jsx)(u.Fragment,{children:e.map((function(t){return Object(u.jsx)(nt,{transaction:t},t.id)}))})},rt=["January","February","March","April","May","June","July","August","September","October","November","December"],it=function(){var t=Object(O.b)(),e=Object(n.useState)({year:-1,month:-1}),c=Object(j.a)(e,2),a=c[0],r=c[1],i=Object(O.c)((function(t){return t.account.selectedAccount.dateCreated})),o=Object(n.useState)([]),s=Object(j.a)(o,2),d=s[0],l=s[1],b=function(e){var c,n=Object(m.a)(Object(m.a)({},a),{},Object(Y.a)({},e.target.name,e.target.value));r(n),t((c=n,function(){var t=Object(f.a)(p.a.mark((function t(e,n){var a,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Q()),a=n().transaction.transactions,r=q(c,a),e(Z(r)),e(Q());case 5:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()))};return Object(n.useEffect)((function(){!function(){var t=(new Date).getFullYear(),e=new Date(i).getFullYear(),c=Array.from({length:t+1-e},(function(t,c){return e+c}));l(Object(v.a)(c))}()}),[i]),Object(u.jsxs)("div",{className:"filter-container",children:[Object(u.jsxs)("div",{className:"filter-content",children:[Object(u.jsx)("p",{children:"Filter By Month :"}),Object(u.jsxs)("select",{value:a.month,onChange:b,name:"month",disabled:-1==a.year,children:[Object(u.jsx)("option",{value:-1,children:"Any"}),rt.map((function(t,e){return Object(u.jsx)("option",{value:e,children:t},t)}))]})]}),Object(u.jsxs)("div",{className:"filter-content",children:[Object(u.jsx)("p",{children:"Filter By Year :"}),Object(u.jsxs)("select",{value:a.year,onChange:b,name:"year",children:[Object(u.jsx)("option",{value:-1,children:"Any"}),d.map((function(t){return Object(u.jsx)("option",{value:t,children:t},t)}))]})]})]})},ot=function(){var t=Object(O.b)(),e=Object(n.useState)(""),c=Object(j.a)(e,2),a=c[0],r=c[1];return Object(u.jsx)("input",{className:"search-box",placeholder:"search transaction",value:a,onChange:function(e){var c;r(e.target.value),t((c=e.target.value,function(){var t=Object(f.a)(p.a.mark((function t(e,n){var a,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Q()),a=n().transaction.transactions,r=[],a.forEach((function(t){t.description.includes(c)&&r.push(t)})),e(Z(r)),e(Q());case 6:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()))}})},st=function(){var t=Object(n.useState)(!1),e=Object(j.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)(!0),i=Object(j.a)(r,2),o=i[0],s=i[1],d=Object(n.useState)(""),l=Object(j.a)(d,2);l[0],l[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"account-card",children:[Object(u.jsxs)("div",{className:"account-info",children:[Object(u.jsx)("div",{style:{flexGrow:1},children:Object(u.jsx)("h1",{children:"Transactions"})}),Object(u.jsx)(ot,{})]}),Object(u.jsxs)("div",{className:"account-description",children:[Object(u.jsx)("div",{className:"transaction-actions",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("button",{onClick:function(){a(!0),s(!1)},children:"Withdraw"}),Object(u.jsx)("button",{onClick:function(){a(!0),s(!0)},className:"deposit-button",children:"Deposit"})]}),c&&Object(u.jsx)(ct,{type:o,closeForm:function(){a(!1),s(!0)}})]})}),Object(u.jsx)(it,{}),Object(u.jsx)(at,{})]})]})})},ut=function(){var t=Object(o.f)().accountId,e=Object(O.b)(),c=Object(O.c)((function(t){return t.account.selectedAccount}));return Object(n.useEffect)((function(){e(F(t))}),[t]),Object(u.jsx)("div",{children:(null===c||void 0===c?void 0:c.id)&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{title:c.name}),Object(u.jsx)(R,{}),Object(u.jsx)(st,{})]})})},dt=function(){return Object(u.jsx)("div",{className:"app-bar",children:Object(u.jsx)("img",{src:"/images/logo.PNG",alt:"njit bank logo",className:"app-bar_logo"})})},jt=(c(66),Object(s.a)());var lt=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(dt,{}),Object(u.jsx)(o.b,{history:jt,children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:J}),Object(u.jsx)(o.a,{exact:!0,path:"/account",component:J}),Object(u.jsx)(o.a,{exact:!0,path:"/update-account/:accountId",component:G}),Object(u.jsx)(o.a,{exact:!0,path:"/create-account",component:P}),Object(u.jsx)(o.a,{exact:!0,path:"/account/:accountId",component:ut}),Object(u.jsx)(o.a,{component:J})]})})]})})},bt=Object(x.a)({reducer:{account:U,transaction:tt}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O.a,{store:bt,children:Object(u.jsx)(lt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[67,1,2]]]);
//# sourceMappingURL=main.f598d1a8.chunk.js.map