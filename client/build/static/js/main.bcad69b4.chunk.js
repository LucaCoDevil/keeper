(this.webpackJsonpkeeper=this.webpackJsonpkeeper||[]).push([[0],{52:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(8),a=n.n(o),r=(n(52),n(22)),i=n(2);var l=function(){return Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"Keeper"})})},s=n(42),d=n.n(s);var j=function(e){return Object(i.jsxs)("div",{className:"note",children:[Object(i.jsx)("h1",{children:e.title}),Object(i.jsx)("p",{children:e.content}),Object(i.jsx)("button",{onClick:function(){e.onDelete(e.data,e.id)},children:Object(i.jsx)(d.a,{})})]})},u=n(25),b=n(30),f=n(44),h=n.n(f),O=n(95),v=n(96);var x=function(e){var t=Object(c.useState)({title:"",content:""}),n=Object(r.a)(t,2),o=n[0],a=n[1],l=Object(c.useState)(!1),s=Object(r.a)(l,2),d=s[0],j=s[1];function f(e){var t=e.target,n=t.name,c=t.value;a((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},n,c))}))}return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{className:"create-note",children:[d&&Object(i.jsx)("input",{name:"title",onChange:f,value:o.title,placeholder:"Title"}),Object(i.jsx)("textarea",{name:"content",onClick:function(){j(!0)},onChange:f,value:o.content,placeholder:"Take a note...",rows:d?3:1}),Object(i.jsx)(v.a,{in:d,children:Object(i.jsx)(O.a,{onClick:function(t){""===o.title?alert("title required"):(e.onAdd(o),a({title:"",content:""}),t.preventDefault())},children:Object(i.jsx)(h.a,{})})})]})})},p=n(28),g=n.n(p);var m=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1];function a(){g.a.get("/api").then((function(e){console.log("work"),console.log("response: ",e.data);var t=e.data;o(t)})).catch((function(){console.log("error getting data from server")}))}function s(e,t){o((function(e){return e.filter((function(e,n){return n!==t}))})),g()({url:"/delete",method:"POST",data:e}).then((function(){console.log("sent delete data to server")})).catch((function(){console.log("failed to send delete data to server"),a()}))}return Object(c.useEffect)((function(){a()}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)(x,{onAdd:function(e){g()({url:"/save",method:"POST",data:e}).then((function(){console.log("successfully sent add data to the server")})).catch((function(){console.log("failed to send add data to the server")})),a()}}),Object(i.jsx)("div",{id:"note-container",children:n.map((function(e,t){return Object(i.jsx)(j,{id:t,data:e,title:e.title,content:e.content,onDelete:s},t)}))})]})};a.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.bcad69b4.chunk.js.map