(this["webpackJsonpreact-boil"]=this["webpackJsonpreact-boil"]||[]).push([[6],{53:function(t,e,n){"use strict";var r=n(57);var c=n.n(r).a.create({baseURL:"https://test-taking-app.herokuapp.com/api/v1/",timeout:3e3});c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));e.a=c},90:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var r=n(12),c=n(13),i=n(15),a=n(14),s=n(1),o=n(0),u=n.n(o),l=n(6),d=n(7);function j(){var t=Object(l.a)(["\n  color: #61dafb;\n"]);return j=function(){return t},t}function b(){var t=Object(l.a)(["\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]);return b=function(){return t},t}function f(){var t=Object(l.a)(["\n  height: 40vmin;\n  pointer-events: none;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: "," infinite 20s linear;\n  }\n"]);return f=function(){return t},t}function h(){var t=Object(l.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return h=function(){return t},t}function p(){var t=Object(l.a)(["\n  text-align: center;\n"]);return p=function(){return t},t}var v=d.a.div(p()),m=Object(d.b)(h()),O=(d.a.img(f(),m),d.a.header(b())),x=(d.a.a(j()),n(53)),g=function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={questions:[]},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.testId;x.a.get("tests/"+e+"/").then((function(e){var n=e.data[0];t.setState({questions:n.question_list}),console.log(t.state)}))}},{key:"render",value:function(){return Object(s.jsx)(v,{children:Object(s.jsx)(O,{children:Object(s.jsx)("div",{class:"container",children:this.state.questions.map((function(t){return Object(s.jsxs)("div",{class:"card text-white bg-secondary mb-3 w-100",children:[Object(s.jsx)("div",{class:"card-header ",children:Object(s.jsx)("h3",{children:t.question_text})}),Object(s.jsx)("div",{class:"card-body left",children:t.choice_list.map((function(e){return Object(s.jsx)("table",{class:"table table-hover table-dark",children:Object(s.jsx)("tbody",{children:Object(s.jsx)("tr",{children:Object(s.jsx)("td",{children:Object(s.jsxs)("div",{class:"text-justify",children:[Object(s.jsx)("input",{type:"radio",name:t.uuid}),Object(s.jsx)("label",{for:"male",children:e})]})})})})})}))})]})}))})})})}}]),n}(u.a.Component)}}]);
//# sourceMappingURL=6.1afcb352.chunk.js.map