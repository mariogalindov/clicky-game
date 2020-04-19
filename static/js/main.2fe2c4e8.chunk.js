(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Stan Marsh","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/stan-marsh.png?height=140","clicked":false},{"id":2,"name":"Kyle Broflovski","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/kyle-broflovski.png?height=140","clicked":false},{"id":3,"name":"Eric Cartman","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/eric-cartman.png?height=140","clicked":false},{"id":4,"name":"Kenny McCormick","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/kenny-mccormick.png?height=140","clicked":false},{"id":5,"name":"Butters Stotch","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/butters-stotch.png?height=140","clicked":false},{"id":6,"name":"Wendy Testaburger","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/wendy-testaburger.png?height=140","clicked":false},{"id":7,"name":"Jimmy Valmer","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/jimmy-valmer.png?height=140","clicked":false},{"id":8,"name":"Token Black","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/token-black.png?height=140","clicked":false},{"id":9,"name":"Clyde Donovan","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/clyde-donovan.png?height=140","clicked":false},{"id":10,"name":"Craig Tucker","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/craig-tucker.png?height=140","clicked":false},{"id":11,"name":"Tweek Tweak","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/tweek-tweak.png?height=140","clicked":false},{"id":12,"name":"Timmy Burch","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/timmy-burch.png?height=140","clicked":false}]')},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),i=(a(14),a(5)),o=a(1),m=a(2),l=a(3),h=a(4),u=(a(15),function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={message:"",animating:!1},e.renderMessage=function(){switch(e.state.message){case"correct":return"You guessed correctly!";case"incorrect":return"You guessed incorrectly!";default:return"Click an image to begin!"}},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.score,n=e.topScore,r={animating:!0};r.message=0===a&&0===n?"":0===a&&n>0?"incorrect":"correct",a===this.props.score&&this.state.message===r.message||this.setState(r)}},{key:"render",value:function(){var e=this;return r.a.createElement("li",{className:this.state.animating?this.state.message:"",onAnimationEnd:function(){return e.setState({animating:!1})}},this.renderMessage())}}]),a}(n.Component));a(16);var d=function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",{className:"brand"},r.a.createElement("a",{href:"/"},"Clicky Game")),r.a.createElement(u,{score:e.score,topScore:e.topScore}),r.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))};a(17);var g=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Clicky Game!"),r.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))};a(18);var k=function(e){return r.a.createElement("main",{className:"container"},e.children)};a(19);var p=function(e){return r.a.createElement("div",{role:"img","aria-label":"click item",onClick:function(){return e.handleClick(e.id)},style:{backgroundImage:'url("'.concat(e.image,'")')},className:"click-item".concat(e.shake?" shake":"")})},f=a(8),v=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:f,score:0,topScore:0},e.handleCorrectGuess=function(t){var a=e.state,n=a.topScore,r=a.score+1,c=Math.max(r,n);e.setState({data:e.shuffleData(t),score:r,topScore:c})},e.handleIncorrectGuess=function(t){e.setState({data:e.resetData(t),score:0})},e.resetData=function(t){var a=t.map((function(e){return Object(i.a)({},e,{clicked:!1})}));return e.shuffleData(a)},e.shuffleData=function(e){for(var t=e.length-1;t>0;){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n,t--}return e},e.handleItemClick=function(t){var a=!1,n=e.state.data.map((function(e){var n=Object(i.a)({},e);return n.id===t&&(n.clicked||(n.clicked=!0,a=!0)),n}));a?e.handleCorrectGuess(n):e.handleIncorrectGuess(n)},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setState({data:this.shuffleData(this.state.data)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement(g,null),r.a.createElement(k,null,this.state.data.map((function(t){return r.a.createElement(p,{key:t.id,id:t.id,shake:!e.state.score&&e.state.topScore,handleClick:e.handleItemClick,image:t.image})}))))}}]),a}(n.Component);var y=function(){return r.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.2fe2c4e8.chunk.js.map