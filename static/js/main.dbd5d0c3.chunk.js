(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(52)},38:function(e,t,a){},40:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),s=a.n(l),c=(a(38),a(11)),o=a(2),m=(a(39),a(40),a(19)),i=function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],l=t[1];return r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top",id:"mainNav"},r.a.createElement("span",{className:"navbar-brand ml-3 text-primary"},"myReactApp"),r.a.createElement("div",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":!a,"aria-label":"Toggle navigation",onClick:function(){return l(!a)}},r.a.createElement("i",{className:"fa fa-bars text-primary"})),r.a.createElement("div",{className:"".concat(a?"collapse":""," navbar-collapse"),id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto",id:"navbar"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"/myReactApp-02/"},"nasaStellarApp")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"/myReactApp-02/todolistapp"},"todoListApp")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"/myReactApp-02/twitterapp"},"twitterApp")))))},u=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 mt-5 divfooter"},r.a.createElement("footer",null,r.a.createElement("div",{className:"partie-footer"},r.a.createElement("ul",{className:"reseauxsociaux"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/fatimabenzaoui",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github-square"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/fatima-benzaoui",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-linkedin"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/benzaouifatima",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-facebook-square"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/fatimabenzaoui",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-instagram"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/fatimabenzaoui",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-twitter-square"})))),r.a.createElement("div",{className:"copyright text-primary"},"\xa9 2020 | Fatima Benzaoui | All Rights Reserved")))))},p=a(24),h=a.n(p),d=a(28),f=a(13),v=a.n(f),E="wtbx7AkGJWsprpnvdkCuP9xDyQzjAGpwP7pNXeCX",b=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(h.a.mark((function e(){var t,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.nasa.gov/planetary/apod?api_key=".concat(E),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,l(n),console.log(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a?r.a.createElement("div",{className:"api-apod-nasa container text-center mt-5"},"image"===a.media_type?r.a.createElement("img",{src:a.url,alt:a.title,className:"w-100"}):r.a.createElement("iframe",{style:{height:650},title:"space-video",src:a.url,frameBorder:"0",allow:"encrypted-media",allowFullScreen:!0,className:"w-100 border"}),r.a.createElement("div",null,r.a.createElement("h2",null,a.title),r.a.createElement("p",{className:"text-center"},v()(a.date).format("DD - MM - YYYY")),r.a.createElement("p",{className:"text-justify"},a.explanation))):r.a.createElement("div",null)},g=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(b,null),r.a.createElement(u,null))},k=a(20),w=a(7),y=a(8),N=a(10),x=a(9),j=a(16),O=a(31),C=a(29),S=a(30),A=(a(50),function(e){var t=e.tasks.map((function(t){var a=t.key,n=t.text;return r.a.createElement("div",{className:"list",key:a},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:a,value:n,onChange:function(t){e.updateTask(t.target.value,a)}}),r.a.createElement("span",null,r.a.createElement(C.a,{className:"icon",icon:"trash",onClick:function(){e.deleteTask(a)}}))))}));return r.a.createElement("div",null,r.a.createElement(S.a,{duration:250,easing:"ease-in-out"},t))});j.b.add(O.a);var F=function(e){Object(N.a)(a,e);var t=Object(x.a)(a);function a(){var e;return Object(w.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({currentTask:{text:t.target.value,key:Date.now()}})},e.addTask=function(t){t.preventDefault();var a=e.state.currentTask;if(""!==a.text){var n=[].concat(Object(k.a)(e.state.tasks),[a]);e.setState({tasks:n,currentTask:{text:"",key:""}})}},e.deleteTask=function(t){var a=e.state.tasks.filter((function(e){return e.key!==t}));e.setState({tasks:a})},e.updateTask=function(t,a){var n=e.state.tasks;n.map((function(e){return e.key===a?e.text=t:null})),e.setState({tasks:n})},e.handleFocus=function(t){var a=t.type;e._input.placeholder="focus"===a?"":"Saisir une t\xe2che"},e.state={tasks:[],currentTask:{text:"",key:""}},e}return Object(y.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-sm-12 col-md-6 mx-auto"},r.a.createElement("form",{id:"to-do-form",className:"w-100 form-inline",onSubmit:this.addTask},r.a.createElement("input",{type:"text",placeholder:"Enter a task",className:"form-control shadow-none w-75 mx-auto",value:this.state.currentTask.text,onChange:this.handleChange,ref:function(t){return e._input=t},onFocus:this.handleFocus,onBlur:this.handleFocus}),r.a.createElement("button",{type:"submit",className:"btn btn-dark shadow-none mx-auto w-25"},"ADD")),r.a.createElement("p",null,this.state.tasks.text),r.a.createElement(A,{tasks:this.state.tasks,deleteTask:this.deleteTask,updateTask:this.updateTask})))}}]),a}(n.Component),T=function(){return r.a.createElement("div",{className:"mt-5 pt-5"},r.a.createElement(i,null),r.a.createElement(F,null),r.a.createElement(u,null))},D=[{avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",username:"Bulbizarre",fullname:"Dan Abramov",content:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum http://youpi.com ipsum lorem ipsum lorem ipsum "},{avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",username:"Carapuce",fullname:"Pierre Dault",content:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum @toto ipsum lorem ipsum lorem ipsum lorem ipsum ",date:"12/12/2019"},{avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",username:"Sabelette",fullname:"Sophie Dupont",content:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum #love #peace #paradise",date:"17/17/2020"}],R=a(32),Y=a.n(R),_=function(e){Object(N.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isFocus:!1},e.handleFocus=function(t){var a=t.type;e.setState({isFocus:"mouseenter"===a})},e}return Object(y.a)(a,[{key:"render",value:function(){var e=this.props,t=e.avatar,a=e.fullname,n=e.content,l=e.username,s=e.date,o=e.index,m=e.remove,i=this.state.isFocus;return r.a.createElement("div",{className:"tweet"},r.a.createElement("div",{className:"container w-100 tweetbox p-3"},r.a.createElement("img",{src:t,alt:"avatar",className:"avatar",width:"40px",height:"40px"}),r.a.createElement("strong",null,a),r.a.createElement("small",{className:"gray"}," - @",l),r.a.createElement("small",{className:"gray date"}," - ",s," "),"Pikachu"===l&&r.a.createElement(Y.a,{className:"gray trash",name:i?"trash":"trash-o",onMouseEnter:this.handleFocus,onMouseLeave:this.handleFocus,onClick:function(){return m(o)}}),r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"contenutweet"},n.split(/\s/g).map((function(e,t){return function(e){return e.match(/((@)|(#)|(https?:\/\/))[\w.]+/gi)}(e)?e.includes("@")?r.a.createElement(c.b,{className:"highLight",to:"/tweets/".concat(e.substring(1)),key:t},e," "):r.a.createElement("a",{key:t,className:"highLight",href:"{word}"},e," "):r.a.createElement("span",{key:t},e," ")}))))))}}]),a}(n.Component);_.defaultProps={date:v()().format("DD/MM/YYYY")};var z=_,M=function(e){Object(N.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){var a=t.target.value;e.setState({value:a})},e.handleSubmit=function(){var t=e.state.value,a=e.props.publish;t.length&&t.length<=140&&(a(t),e.setState({value:""}))},e.handleFocus=function(t){var a=t.type;e._textarea.placeholder="focus"===a?"":"Composez votre tweet"},e}return Object(y.a)(a,[{key:"render",value:function(){var e=this,t=this.state.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container w-100 tweetbox bg-light p-3 pb-5"},r.a.createElement("textarea",{rows:3,placeholder:"Composez votre tweet",value:t,onChange:this.handleChange,className:t.length>140?"alert":t,ref:function(t){return e._textarea=t},onFocus:this.handleFocus,onBlur:this.handleFocus}),r.a.createElement("div",{className:"action"},r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-small float-right",disabled:!t.length||t.length>140,onClick:this.handleSubmit},"Tweet"),r.a.createElement("small",null,r.a.createElement("span",{className:"count mt-2 float-right"},140-t.length)))))}}]),a}(n.Component),B=(a(51),function(e){Object(N.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={tweets:D},e.publish=function(t){var a=e.state.tweets;e.setState({tweets:[{avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",username:"Pikachu",fullname:"Toto Zapatta",content:t,date:v()().format("DD/MM/YYYY")}].concat(Object(k.a)(a))})},e.remove=function(t){var a=e.state.tweets;e.setState({tweets:a.filter((function(e,a){return a!==t}))})},e}return Object(y.a)(a,[{key:"render",value:function(){var e=this,t=this.state.tweets;return r.a.createElement("div",{className:"container-fluid text-center mt-3 w-100"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4 mx-auto"},r.a.createElement(M,{publish:this.publish}),r.a.createElement("div",{className:"tweets"},t.map((function(t,a){return r.a.createElement(z,Object.assign({key:a,index:a,remove:e.remove},t))}))))))}}]),a}(n.Component)),P=function(){return r.a.createElement("div",{className:"mt-5 pt-2"},r.a.createElement(i,null),r.a.createElement(B,null),r.a.createElement(u,null))},L=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,{component:g,path:"/myReactApp/",exact:!0}),r.a.createElement(o.a,{component:T,path:"/myReactApp/todolistapp"}),r.a.createElement(o.a,{component:P,path:"/myReactApp/twitterapp"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=document.getElementById("root");s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),q),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.dbd5d0c3.chunk.js.map