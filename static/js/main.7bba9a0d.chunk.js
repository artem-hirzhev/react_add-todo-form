(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),c=a(2),s=a(7),o=(a(14),a(1)),l=a(9),u=a.n(l),d=a(0),m=function(e){var t=e.user,a=t.name,n=t.email;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},j=function(e){var t=e.todo,a=e.maxId,n=t.title,i=t.completed,r=t.user;return Object(d.jsxs)("article",{"data-id":a,className:u()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(d.jsx)(m,{user:r})]})},b=function(e){var t=e.todos,a=e.maxId;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(j,{todo:e,maxId:a},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function f(e){return h.find((function(t){return t.id===e}))||null}var p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:f(e.userId)})})),O=function(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),s=Object(c.a)(i,2),l=s[0],u=s[1],m=Object(o.useState)(p),j=Object(c.a)(m,2),O=j[0],x=j[1],v=Object(o.useState)(!1),I=Object(c.a)(v,2),S=I[0],y=I[1],N=Object(o.useState)(!1),C=Object(c.a)(N,2),g=C[0],_=C[1],k=O.map((function(e){return e.id})),D=Math.max.apply(Math,Object(r.a)(k)),w=function(e){var t=e.target;"titleInput"===t.id&&(u(function(e){var t=e.match(/[a-zA-Z\u0430-\u044f\u0410-\u042f\d\s]+/g);return t?t.join(""):""}(t.value)),y(!1)),"userSelect"===t.id&&(n(t.value),_(!1))};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){return e.preventDefault()},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("input",{type:"text",value:l,"data-cy":"titleInput",id:"titleInput",placeholder:"Enter a title",onChange:function(e){return w(e)}}),S&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("select",{"data-cy":"userSelect",value:a,id:"userSelect",onChange:function(e){return w(e)},children:[Object(d.jsx)("option",{value:"",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),g&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:function(){if(a||_(!0),l.trim()||y(!0),a&&l.trim()){var e={id:D+1,title:l,completed:!1,userId:+a,user:f(+a)};x((function(t){return[].concat(Object(r.a)(t),[e])})),n(""),u("")}},children:"Add"})]}),Object(d.jsx)(b,{todos:O,maxId:D})]})};i.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7bba9a0d.chunk.js.map