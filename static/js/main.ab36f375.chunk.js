(this.webpackJsonpreact_less2=this.webpackJsonpreact_less2||[]).push([[0],{15:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n=o(1),s=o.n(n),c=o(4),i=o.n(c),r=o(5),d=o(6),a=o(9),l=o(8),u=o(7),j=o(2),_=o.n(j),x=o(0),p=function(t){var e=t.todos,o=t.onDeleteTodo;return Object(x.jsx)("ul",{className:_.a.ToDoList,children:e.map((function(t){var e=t.id,n=t.text;t.completed;return Object(x.jsxs)("li",{className:_.a.ToDoList__item,children:[Object(x.jsx)("p",{className:_.a.ToDoList__text,children:n}),Object(x.jsx)("button",{type:"button",onClick:function(){return o(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})},b=function(t){Object(a.a)(o,t);var e=Object(l.a)(o);function o(){var t;Object(r.a)(this,o);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={todos:u},t.deleteTodo=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t}return Object(d.a)(o,[{key:"render",value:function(){var t=this.state.todos,e=t.length,o=t.reduce((function(t,e){return e.completed?t+1:t}),0);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b-\u0432\u043e todo: ",e]}),Object(x.jsxs)("p",{children:["\u041a\u043e\u043b-\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 todo: ",o]})]}),Object(x.jsx)(p,{todos:t,onDeleteTodo:this.deleteTodo})]})}}]),o}(n.Component);o(15);i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(b,{})}),document.getElementById("root"))},2:function(t,e,o){t.exports={ToDoList:"ToDoList_ToDoList__zXaoq",ToDoList__item:"ToDoList_ToDoList__item__3CUsR",ToDoList__text:"ToDoList_ToDoList__text__WHv0W"}},7:function(t){t.exports=JSON.parse('[{"id":"id-1","text":"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b React","completed":true},{"id":"id-2","text":"\u0420\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0441 React Router","completed":false},{"id":"id-3","text":"\u041f\u0435\u0440\u0435\u0436\u0438\u0442\u044c Redux","completed":false}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.ab36f375.chunk.js.map