(this["webpackJsonpstarnavi-game"]=this["webpackJsonpstarnavi-game"]||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),o=a.n(s),u=a(21),c=a(3),p=a(4),i=a(8),l=a(7),d=a(9),f=a(5),m=function(e){return{type:"ADD_HUMAN_SQUARE",payload:e}},g=function(e){return{type:"SET_RESULT_TABLE",payload:e}},h=function(e){return{type:"SET_SHOWED",payload:e}},b="https://starnavi-frontend-test-task.herokuapp.com/winners",E=a(11),v=a.n(E),y=a(16),S=function(){function e(){Object(c.a)(this,e)}return Object(p.a)(e,[{key:"getData",value:function(){var e=Object(y.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"}});case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t," received ").concat(a.status));case 5:return e.next=7,a;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"sendData",value:function(){var e=Object(y.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={date:Date().slice(0,21),winner:t},e.next=3,fetch(b,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Could not fetch ".concat(b," received ").concat(n.status));case 6:return e.next=8,n;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),T=(a(32),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).fetchService=new S,a.playClick=function(){if(""===a.props.name)a.props.setMessage("Enter your name");else if(""===a.props.mode)a.props.setMessage("Choose game mode");else{a.props.setMessage(""),a.props.addAISquare([]),a.props.addHumanSquare([]),a.props.setStatus("playing");for(var e=[],t=a.props.gameConfig[a.props.mode]?a.props.gameConfig[a.props.mode].field:5,n=0;n<t*t;n++)e.push(n);var r=setInterval((function(){if(a.props.squaresHuman.length>t*t/2&&(a.props.setMessage("Human won game!"),clearInterval(r),a.props.setStatus(""),a.fetchService.sendData(a.props.name).then((function(e){return e.json()})).then((function(e){return a.props.setResultTable(e.reverse())})).then((function(){return a.props.setShowed(a.props.resultTable.slice(4*a.props.page,4*a.props.page+4))})),a.props.setButtonLabel("Play Again")),a.props.squaresAI.length>t*t/2&&(a.props.setMessage("AI won game!"),clearInterval(r),a.props.setStatus(""),a.fetchService.sendData("Computer AI").then((function(e){return e.json()})).then((function(e){return a.props.setResultTable(e.reverse())})).then((function(){return a.props.setShowed(a.props.resultTable.slice(4*a.props.page,4*a.props.page+4))})),a.props.setButtonLabel("Play Again")),"playing"===a.props.status){var n=a.props.squaresAI,s=a.props.squaresHuman,o=n.filter((function(e){return s.includes(e)?"":e}));a.props.addAISquare(o);var u=Math.floor(Math.random()*e.length),c=e.splice(u,1);if(a.props.setActive(c[0]),!0!==a.props.squaresHuman.includes(c[0])){var p=a.props.squaresAI;p.push(c[0]),a.props.addAISquare(p)}}}),a.props.gameConfig[a.props.mode].delay)}},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchService.getData("https://starnavi-frontend-test-task.herokuapp.com/game-settings").then((function(e){return e.json()})).then((function(t){return e.props.setGameConfig(t)}))}},{key:"render",value:function(){var e=this,t=function(){return"playing"===e.props.status};return r.a.createElement("div",{className:"game-control"},r.a.createElement("select",{disabled:t(),onChange:function(t){return e.props.setMode(t.target.value)}},r.a.createElement("option",null,"Pick game mode"),Object.entries(this.props.gameConfig).map((function(e){var t=Object(u.a)(e,1)[0];return r.a.createElement("option",{key:t},t)}))),r.a.createElement("input",{disabled:t(),onChange:function(t){return e.props.setName(t.target.value)},type:"text",placeholder:"Enter your name"}),r.a.createElement("button",{disabled:t(),onClick:this.playClick},this.props.buttonLabel))}}]),t}(n.Component)),A=Object(f.b)((function(e){return{gameConfig:e.gameConfig,name:e.name,mode:e.mode,status:e.status,squaresAI:e.squaresAI,squaresHuman:e.squaresHuman,resultTable:e.resultTable,page:e.page,buttonLabel:e.buttonLabel}}),(function(e){return{setGameConfig:function(t){return e(function(e){return{type:"SET_GAME_CONFIG",payload:e}}(t))},setName:function(t){return e(function(e){return{type:"SET_NAME",payload:e}}(t))},setMode:function(t){return e(function(e){return{type:"SET_MODE",payload:e}}(t))},setStatus:function(t){return e(function(e){return{type:"SET_STATUS",payload:e}}(t))},setMessage:function(t){return e(function(e){return{type:"SET_MESSAGE",payload:e}}(t))},setActive:function(t){return e(function(e){return{type:"SET_ACTIVE",payload:e}}(t))},addAISquare:function(t){return e(function(e){return{type:"ADD_AI_SQUARE",payload:e}}(t))},addHumanSquare:function(t){return e(m(t))},setResultTable:function(t){return e(g(t))},setShowed:function(t){return e(h(t))},setButtonLabel:function(t){return e(function(e){return{type:"SET_BUTTON_LABEL",payload:e}}(t))}}}))(T),O=(a(33),function(e){return r.a.createElement("div",{className:"square",style:{backgroundColor:e.status},datatag:e.datatag})}),j=(a(34),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).getColor=function(e){return!0===a.props.squaresHuman.includes(e)?"green":!0===a.props.squaresAI.includes(e)?"red":a.props.active===e?"blue":void 0},a.handleSquareClick=function(e){var t=e.target.getAttribute("datatag");if(t==a.props.active){var n=a.props.squaresHuman;n.push(parseInt(t)),a.props.addHumanSquare(n)}},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){for(var e=[],t=this.props.gameConfig[this.props.mode]?this.props.gameConfig[this.props.mode].field:5,a=0;a<t*t;a++)e.push(r.a.createElement(O,{key:a,status:this.getColor(a),datatag:a}));return r.a.createElement("div",{className:"gamefield",onClick:this.handleSquareClick},r.a.createElement("div",{className:"message"},this.props.message),r.a.createElement("div",{className:"game-square-wrapper",style:{width:50*parseInt(t)+"px"}},e))}}]),t}(n.Component)),C=Object(f.b)((function(e){return{message:e.message,gameConfig:e.gameConfig,mode:e.mode,active:e.active,squaresAI:e.squaresAI,squaresHuman:e.squaresHuman}}),(function(e){return{addHumanSquare:function(t){return e(m(t))}}}))(j),w=(a(35),function(){return r.a.createElement("div",{className:"game-side"},r.a.createElement(A,null),r.a.createElement(C,null))}),_=(a(36),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).fetchService=new S,a.changePage=function(e){0===a.props.page&&e<0||(a.props.setPage(a.props.page+e),a.props.setShowed(a.props.resultTable.slice(4*(a.props.page+e),4*(a.props.page+e)+4)))},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchService.getData(b).then((function(e){return e.json()})).then((function(t){return e.props.setResultTable(t.reverse())})).then((function(){return e.props.setShowed(e.props.resultTable.slice(4*e.props.page,4*e.props.page+4))}))}},{key:"render",value:function(){var e=this,t=this.props.showed.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.winner),r.a.createElement("td",null,e.date))}));return r.a.createElement("div",{className:"game-table"},r.a.createElement("div",{className:"leaderboard"},"Leaderboard"),r.a.createElement("div",{className:"table"},r.a.createElement("table",null,r.a.createElement("tbody",null,t))),r.a.createElement("button",{onClick:function(){return e.changePage(-1)},disabled:0===this.props.page},"Prev"),r.a.createElement("button",{onClick:function(){return e.changePage(1)},disabled:this.props.showed.length<4&&0!==this.props.page},"Next"))}}]),t}(n.Component)),k=Object(f.b)((function(e){return{resultTable:e.resultTable,page:e.page,showed:e.showed,nextDisabled:e.nextDisabled,prevDisabled:e.prevDisabled}}),(function(e){return{setResultTable:function(t){return e(g(t))},setShowed:function(t){return e(h(t))},setPage:function(t){return e(function(e){return{type:"SET_PAGE",payload:e}}(t))}}}))(_),q=(a(37),function(){return r.a.createElement("div",{className:"gamepage"},"GamePage",r.a.createElement("div",{className:"gamepage-wrapper"},r.a.createElement(w,null),r.a.createElement(k,null)))});a(38);var I=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(q,null))},D=a(10),N=a(20),M=a(1),H={gameState:"ready",gameConfig:{},name:"",mode:"",message:"",squaresAI:[],squaresHuman:[],active:"",status:"",clicked:!1,resultTable:[],page:0,showed:[],buttonLabel:"Play"},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAME_CONFIG":return Object(M.a)({},e,{gameConfig:t.payload});case"SET_NAME":return Object(M.a)({},e,{name:t.payload});case"SET_MODE":return Object(M.a)({},e,{mode:t.payload});case"SET_MESSAGE":return Object(M.a)({},e,{message:t.payload});case"ADD_AI_SQUARE":return Object(M.a)({},e,{squaresAI:t.payload});case"ADD_HUMAN_SQUARE":return Object(M.a)({},e,{squaresHuman:t.payload});case"SET_ACTIVE":return Object(M.a)({},e,{active:t.payload});case"SET_STATUS":return Object(M.a)({},e,{status:t.payload});case"SET_RESULT_TABLE":return Object(M.a)({},e,{resultTable:t.payload});case"SET_SHOWED":return Object(M.a)({},e,{showed:t.payload});case"SET_PAGE":return Object(M.a)({},e,{page:t.payload});case"SET_BUTTON_LABEL":return Object(M.a)({},e,{buttonLabel:t.payload});default:return e}},x=[N.logger],P=Object(D.c)(L,D.a.apply(void 0,x));o.a.render(r.a.createElement(f.a,{store:P},r.a.createElement(I,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.821ee388.chunk.js.map