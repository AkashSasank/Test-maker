(this["webpackJsonpreact-boil"]=this["webpackJsonpreact-boil"]||[]).push([[5],{53:function(t,e,n){"use strict";var s=n(57);var r=n.n(s).a.create({baseURL:"https://test-taking-app.herokuapp.com/api/v1/",timeout:3e3});r.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));e.a=r},84:function(t,e,n){},88:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var s=n(12),r=n(13),c=n(15),i=n(14),o=n(1),a=n(0),u=n.n(a),l=n(6),d=n(7);function b(){var t=Object(l.a)(["\n  color: #61dafb;\n"]);return b=function(){return t},t}function h(){var t=Object(l.a)(["\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]);return h=function(){return t},t}function j(){var t=Object(l.a)(["\n  height: 40vmin;\n  pointer-events: none;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: "," infinite 20s linear;\n  }\n"]);return j=function(){return t},t}function p(){var t=Object(l.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return p=function(){return t},t}function f(){var t=Object(l.a)(["\n  text-align: center;\n"]);return f=function(){return t},t}var v=d.a.div(f()),x=Object(d.b)(p()),m=(d.a.img(j(),x),d.a.header(h())),O=(d.a.a(b()),n(53)),g=(n(84),function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).setQuestionNumber=function(){localStorage.setItem("q",0===r.props.value?0:r.props.value-1),console.log(localStorage.getItem("q"))},r.props={value:"",status:"to-do",color:"bg-primary"},r}return Object(r.a)(n,[{key:"render",value:function(){return Object(o.jsx)("button",{class:"button col-sm border border-dark rounded p-1 "+this.props.color,onClick:this.setQuestionNumber,children:this.props.value})}}]),n}(a.Component)),q=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).props={num_questions:0},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){localStorage.setItem("q",0)}},{key:"render",value:function(){for(var t=[],e=Math.ceil(Math.sqrt(this.props.num_questions)),n=Math.ceil(this.props.num_questions/e),s=0;s<e;s++){for(var r=[],c=1;c<=n;c++){var i=s*n+c;i<=this.props.num_questions&&r.push(Object(o.jsx)(g,{value:i,color:"bg-primary"}))}t.push(Object(o.jsx)("div",{class:"row flex-nowrap",children:r}))}return Object(o.jsx)("div",{children:Object(o.jsx)("table",{class:"table d-flex justify-content-center",children:Object(o.jsx)("tbody",{children:t})})})}}]),n}(a.Component),y=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={questions:[],count:0,question_text:"",choice_list:[],q_num:0,uuid:"",category:""},t.setQuestion=function(){var e=parseInt(localStorage.getItem("q")),n=t.state.questions[e];t.setState({q_num:e,question_text:n.question_text,choice_list:n.choice_list,uuid:n.uuid,category:n.category})},t.nextQuestion=function(){var e=t.state.q_num===t.state.count-1?0:t.state.q_num+1;t.setNextQuestion(e)},t.previousQuestion=function(){var e=0===t.state.q_num?t.state.count-1:t.state.q_num-1;t.setNextQuestion(e)},t.setNextQuestion=function(e){localStorage.setItem("q",e);var n=t.state.questions[e];t.setState({q_num:e,question_text:n.question_text,choice_list:n.choice_list,uuid:n.uuid,category:n.category})},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;localStorage.setItem("q",0);var e=this.props.match.params.testId;O.a.get("tests/"+e+"/").then((function(e){var n=e.data[0],s=n.question_list,r=n.question_list[parseInt(localStorage.getItem("q"))];t.setState({questions:s,count:s.length,question_text:r.question_text,choice_list:r.choice_list,uuid:r.uuid,category:r.category})}))}},{key:"render",value:function(){var t=this;return Object(o.jsx)(v,{children:Object(o.jsx)(m,{children:Object(o.jsxs)("div",{class:"d-flex flex-wrap justify-content-around w-100",children:[Object(o.jsxs)("div",{class:"container w-100 p-5 bg-dark rounded shadow-lg ",children:[Object(o.jsxs)("div",{class:"d-flex justify-content-between",children:[Object(o.jsxs)("h5",{children:["Question ",this.state.q_num+1]}),Object(o.jsxs)("h5",{children:["Category: ",this.state.category]})]}),Object(o.jsxs)("div",{class:"card text-white bg-secondary mb-3 w-100",children:[Object(o.jsx)("div",{class:"card-header ",children:Object(o.jsx)("h3",{children:this.state.question_text})}),Object(o.jsx)("div",{class:"card-body left",children:this.state.choice_list.map((function(e){return Object(o.jsx)("table",{class:"table table-hover table-dark",children:Object(o.jsx)("tbody",{children:Object(o.jsx)("tr",{children:Object(o.jsx)("td",{children:Object(o.jsxs)("div",{class:"text-justify",children:[Object(o.jsx)("input",{type:"radio",name:t.state.uuid}),Object(o.jsx)("label",{for:"male",children:e})]})})})})})}))})]}),Object(o.jsxs)("div",{class:"d-flex w-100 justify-content-between",children:[Object(o.jsx)("button",{class:"btn btn-primary",onClick:this.previousQuestion,children:"Previous"}),Object(o.jsx)("button",{class:"btn btn-success",children:"Save Response"}),Object(o.jsx)("button",{class:"btn btn-primary",onClick:this.nextQuestion,children:"Next"})]})]}),Object(o.jsxs)("div",{class:"container w-auto h-100 p-5 bg-dark rounded shadow-lg ",onClick:this.setQuestion,children:[Object(o.jsx)("h3",{children:"Navigator"}),Object(o.jsx)(q,{num_questions:this.state.count})]})]})})})}}]),n}(u.a.Component)}}]);
//# sourceMappingURL=5.33943483.chunk.js.map