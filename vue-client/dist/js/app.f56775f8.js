(function(e){function t(t){for(var r,a,i=t[0],u=t[1],c=t[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"199c":function(e,t){},"23be":function(e,t,n){"use strict";var r=n("199c"),o=n.n(r);t["default"]=o.a},"2faf":function(e,t,n){},"3dfd":function(e,t,n){"use strict";var r=n("87ae"),o=n("23be"),s=(n("034f"),n("2877")),a=Object(s["a"])(o["default"],r["a"],r["b"],!1,null,null,null);t["default"]=a.exports},"52e7":function(e,t,n){"use strict";var r=n("2faf"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("8c4f"),s=n("3dfd"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"surveyCreate-container"},[n("div",{staticClass:"surveyCreate-main-box"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.question,expression:"question",modifiers:{lazy:!0}}],staticClass:"survey-create-group",attrs:{type:"text",placeholder:"Enter Question"},domProps:{value:e.question},on:{change:function(t){e.question=t.target.value}}}),e._l(this.$store.state.options,(function(t,r){return n("OptionInput",{key:r,attrs:{index:r},on:{something:e.newValue}})})),n("button",{staticClass:"surveyCreate-main-btn-group",on:{click:e.addOption}},[e._v("Add")]),n("button",{staticClass:"surveyCreate-main-btn-group",on:{click:e.submitPoll}},[e._v("Submits")])],2)])},i=[],u=(n("4de4"),n("d3b7"),n("96cf"),n("cb29"),n("d81d"),n("0d03"),n("ac1f"),n("25f0"),n("5319"),n("9f12"));function c(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,n="x"==e?t:3&t|8;return n.toString(16)}))}var l=function e(t,n){Object(u["a"])(this,e),this.id=c(),this.question=t,this.options=new Array(n.length).fill(0).map((function(e){return{counter:0,optionName:"",voterNames:[]}}));for(var r=0;r<n.length;r++)this.options[r].optionName=n[r]},p=n("3d20"),d=n.n(p);function h(e,t){"warning"===t?d.a.fire({title:e,position:"top",customClass:"swal-warning",showConfirmButton:!1,showClass:{popup:"animated fadeInDown faster"},hideClass:{popup:"animated fadeOutUp faster"},timer:1200}):"copylink"===t&&d.a.fire({title:e,position:"top",customClass:"swal-copyclipboard",showConfirmButton:!1,showClass:{popup:"animated fadeInDown faster"},hideClass:{popup:"animated fadeOutUp faster"},timer:1200})}var f="http://localhost:5000/api/surveys",v=f;function m(e){var t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(fetch("".concat(v,"/").concat(e)));case 2:return t=r.sent,console.log("this response",t),r.next=6,regeneratorRuntime.awrap(t.json());case 6:return n=r.sent,console.log("this json",n),r.abrupt("return",n);case 9:case"end":return r.stop()}}))}function x(e){var t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(e),t="".concat(v,"/").concat(e.id),r.prev=2,r.next=5,regeneratorRuntime.awrap(fetch(t,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}));case 5:return n=r.sent,r.abrupt("return",n.status);case 9:throw r.prev=9,r.t0=r["catch"](2),console.error("Error:",r.t0);case 12:case"end":return r.stop()}}),null,null,[[2,9]])}function g(e){var t,n,r;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return t="".concat(v),o.prev=1,o.next=4,regeneratorRuntime.awrap(fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}));case 4:return n=o.sent,o.next=7,regeneratorRuntime.awrap(n.json());case 7:r=o.sent,console.log("Success:",JSON.stringify(r)),o.next=14;break;case 11:throw o.prev=11,o.t0=o["catch"](1),console.error("Error:",o.t0);case 14:case"end":return o.stop()}}),null,null,[[1,11]])}var y={data:function(){return{question:""}},methods:{submitPoll:function(){var e,t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log(this.$store),console.log(this.$store.state.options),console.log(this.question),e=this.$store.state.options.filter((function(e){return""!==e})),""!==this.question){n.next=7;break}return h("Enter a question first","warning"),n.abrupt("return");case 7:if(!(e.length<2)){n.next=11;break}h("Enter at least 2 options","warning"),n.next=18;break;case 11:return t=new l(this.question,this.$store.state.options),console.log(t),this.$store.state.currentSurvey=t,this.$store.state.title=this.question,n.next=17,regeneratorRuntime.awrap(g(t));case 17:this.$router.push("/survey/".concat(t.id));case 18:case"end":return n.stop()}}),null,this)},newValue:function(e,t){this.$store.state.options[t]=e},addOption:function(){this.$store.state.options.push("")}}},b=y,w=n("2877"),O=Object(w["a"])(b,a,i,!1,null,null,null),_=O.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.value,expression:"value",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"Add Option..."},domProps:{value:e.value},on:{change:[function(t){e.value=t.target.value},e.getValue]}})},C=[],j={props:["index"],data:function(){return{value:""}},methods:{getValue:function(){this.$emit("something",this.value,this.index)}}},S=j,k=Object(w["a"])(S,$,C,!1,null,null,null),P=k.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"surveyPage-container"},[n("div",{staticClass:"surveyPage-main-box"},[n("h1",{attrs:{id:"surveyPage-survey-question"}},[e._v(e._s(e.question))]),e.reRender?e._l(e.options,(function(t,r){return n("SingleOption",{key:r,attrs:{index:r,currentOption:t,eachVote:e.eachVote}})})):e._e(),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.voterName,expression:"voterName",modifiers:{lazy:!0}}],staticClass:"survey-answer-group",attrs:{id:"input-name",type:"text",placeholder:"Enter name...",autofocus:""},domProps:{value:e.voterName},on:{change:function(t){e.voterName=t.target.value}}}),n("button",{attrs:{id:"add-btn"}},[e._v("Add Option")]),n("button",{attrs:{id:"submit-option"},on:{click:e.vote}},[e._v("Vote")])],2)])},N=[],I=(n("4160"),n("159b"),{data:function(){return{reRender:!0,eachVote:0,id:this.$route.params.id,options:null,question:"",voterName:""}},methods:{vote:function(){var e,t=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e={name:this.voterName,indexs:this.$store.state.voterIndexs,id:this.$route.params.id},console.log("indexs",this.$store.state.voterIndexs),n.next=4,regeneratorRuntime.awrap(x(e));case 4:if(n.t0=n.sent,400!==n.t0){n.next=9;break}h("Alredy Voted For that Option","warning"),n.next=14;break;case 9:return this.$store.state.voterIndexs=[],n.next=12,regeneratorRuntime.awrap(this.loadData());case 12:this.reRender=!1,this.$nextTick((function(){t.reRender=!0}));case 14:case"end":return n.stop()}}),null,this)},loadData:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("t1",this.$store.state.currentSurvey),t.next=3,regeneratorRuntime.awrap(m(this.id));case 3:this.$store.state.currentSurvey=t.sent,console.log("t2",this.$store.state.currentSurvey),this.options=this.$store.state.currentSurvey.options,this.question=this.$store.state.currentSurvey.question,e=0,this.$store.state.currentSurvey.options.forEach((function(t){e+=t.counter})),0!==e&&(this.eachVote=Math.floor(100/e));case 10:case"end":return t.stop()}}),null,this)}},created:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:this.loadData(),console.log("hi");case 2:case"end":return e.stop()}}),null,this)}}),q=I,E=Object(w["a"])(q,R,N,!1,null,null,null),V=E.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("div",{staticClass:"navBar",on:{click:e.goToHomePage}},[e._m(0),e._m(1)])])},A=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("img",{attrs:{id:"homepageImg",src:n("8dcc"),height:"48px"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{staticClass:"active",attrs:{id:"homepage"}},[e._v("Home")])])}],B={methods:{goToHomePage:function(){console.log("homePage")}}},M=B,z=Object(w["a"])(M,T,A,!1,null,null,null),D=z.exports,J=n("2f62");r["a"].use(J["a"]);var F=new J["a"].Store({state:{options:["snuday","monday"],title:"",currentSurvey:null,voterIndexs:[]},mutations:{},actions:{},modules:{}}),H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"optionSingleDiv"},[n("div",{attrs:{id:"myProgress"}},[e._v(" "+e._s(e.currentOption.optionName)+" "),n("div",{style:e.styleObject,attrs:{"v-if":Math.random()>.5,id:"myBar"}},[e._v(e._s(e.styleObject.width)+" ")])]),n("input",{staticClass:"dynamicCheckBox",attrs:{type:"checkbox"},on:{change:e.onInputChange}})])])},U=[],Q=(n("caad"),n("2532"),{props:["currentOption","eachVote","index"],data:function(){return{percentage:0,checked:!1,styleObject:{width:"0%"}}},methods:{onInputChange:function(){var e=this;this.checked=!this.checked,this.checked?this.$store.state.voterIndexs.includes(this.index)||this.$store.state.voterIndexs.push(this.index):this.$store.state.voterIndexs=this.$store.state.voterIndexs.filter((function(t){return t!==e.index}))}},created:function(){var e=function(){n>=t?clearInterval(o):(n++,r.width=n+"%")},t=this.currentOption.counter*this.eachVote;console.log(this.$store.state.currentSurvey);var n=0,r=this.styleObject,o=setInterval(e,10)}}),G=Q,K=(n("52e7"),Object(w["a"])(G,H,U,!1,null,null,null)),L=K.exports,W=[{path:"",component:_},{path:"/survey/:id",component:V}];r["a"].use(o["a"]);var X=new o["a"]({routes:W,mode:"history"});r["a"].config.productionTip=!1,r["a"].component("NavBar",D),r["a"].component("SurveyCreateForm",_),r["a"].component("OptionInput",P),r["a"].component("SurveyPageForm",V),r["a"].component("SingleOption",L),new r["a"]({router:X,store:F,render:function(e){return e(s["default"])}}).$mount("#app")},"85ec":function(e,t,n){},"87ae":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("NavBar"),n("router-view")],1)},o=[];n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))},"8dcc":function(e,t,n){e.exports=n.p+"img/iconfinder_poll red_10494.3cff7b1a.png"}});
//# sourceMappingURL=app.f56775f8.js.map