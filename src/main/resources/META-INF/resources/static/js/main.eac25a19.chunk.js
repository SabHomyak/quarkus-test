(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{129:function(t,e,n){},223:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(33),o=n.n(c),s=n(82),i=n(35),u=n.n(i),d=n(90),j=n(53),f=(n(129),n(60)),p=n.n(f),l=n(227),b=n(41),h=n(226),x=n(22),O=[{title:"Todo",dataIndex:"name",render:function(t){return Object(x.jsx)("a",{children:t})}},{title:"Date",dataIndex:"date"},{title:"Status",dataIndex:"isDone"}],v="./api/todos",m=function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get(v,{headers:{Authorization:"Basic YWRtaW46YWRtaW4="}});case 2:return e=t.sent,t.next=5,e.data.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{isDone:t.isDone.toString()})}));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=function(t,e,n,a){var r=t.concat();e.forEach((function(t){var e,n=r.find((function(e){return e.id===t}));n.isDone=a.toString(),e=n,p.a.put("".concat(v,"/").concat(e.id),JSON.stringify(e),{headers:{Authorization:"Basic YWRtaW46YWRtaW4=","Content-Type":"application/json"}})})),n(r)},w=function(){var t=Object(j.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post(v,JSON.stringify(e),{headers:{Authorization:"Basic YWRtaW46YWRtaW4=","Content-Type":"application/json"}});case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)([]),o=Object(s.a)(c,2),i=o[0],d=o[1],f=Object(a.useState)(""),g=Object(s.a)(f,2),S=g[0],k=g[1];return Object(a.useEffect)(Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)}))),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"table",children:[Object(x.jsxs)("form",{className:"addTodo",children:[Object(x.jsx)(l.a,{value:S,placeholder:"Your todo...",onChange:function(t){k(t.target.value)}}),Object(x.jsx)(b.a,{onClick:Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===S){t.next=9;break}return t.next=3,w({name:S,date:(new Date).toISOString(),isDone:"false"});case 3:return t.sent,t.next=6,m();case 6:e=t.sent,r(e),k("");case 9:case"end":return t.stop()}}),t)}))),children:"Add"})]}),Object(x.jsx)(h.a,{rowKey:"id",rowSelection:{onChange:function(t){d(t)}},columns:O,dataSource:n,pagination:{position:["bottomCenter"],defaultPageSize:5}}),Object(x.jsxs)("div",{className:"buttons",children:[Object(x.jsx)(b.a,{type:"default",onClick:Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n=i,p.a.delete(v,{headers:{Authorization:"Basic YWRtaW46YWRtaW4="},data:n});case 2:return t.next=4,m();case 4:e=t.sent,r(e);case 6:case"end":return t.stop()}var n}),t)}))),danger:!0,children:"Remove"}),Object(x.jsx)(b.a,{onClick:function(){W(n,i,r,!0)},children:"Done"}),Object(x.jsx)(b.a,{onClick:function(){W(n,i,r,!1)},children:"Undone"})]})]})})},S=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(g,{})})};n(222);o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.eac25a19.chunk.js.map