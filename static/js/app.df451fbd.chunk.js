(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{10:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n={CREATE_USER:"create user",FETCH_CURRENT_PLAYER:"fetch current player",CHOOSE_ROOM:"create or join room",ENTER_ROOM:"enter room",UPDATE_ROOM_PLAYERS:"update room players",PLAYER_LEFT:"player left",START_GAME:"start game",PAUSE_GAME:"pause game",PENALTY_ROWS:"penalty rows",UPDATE_SPECTRUM:"update spectrum",FETCH_WAITING_ROOMS:"fetch waiting rooms",UPDATE_WAITING_ROOMS:"update waiting rooms",GAMEOVER:"gameover",FETCH_ROOM_RANKING:"fetch room ranking",UPDATE_SCORE:"update score",REDIRECT_TO_RANKING:"redirect to ranking",CHAT_MESSAGE:"chat message",FORBIDDEN:"access forbidden"},a={ROW_DESTROYED:10,PIECE_PLACED:4,LAST_PLAYER:200}},105:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return f})),r.d(t,"c",(function(){return d}));var n=r(11),a=r.n(n),o=r(153),s=r.n(o),i=r(106),c=function(e){return void 0===e||null===e||""===e},l=function(e){return!c(e)&&!(e&&e.length>15)},u=function(e){var t=new RegExp("\\W");return!!e&&!e.match(t)},m=function(t){var r;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(l(t)){n.next=2;break}throw Error("Name must be 1-15 symbols");case 2:if(u(t)){n.next=4;break}throw Error("Use letters and numbers");case 4:return n.next=6,a.a.awrap(s.a.get((e&&Object({NODE_ENV:"production",PUBLIC_URL:"/42-red-tetris",APP_MANIFEST:{scheme:"red-tetris",name:"red-tetris",slug:"red-tetris",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{},sdkVersion:"38.0.0",platforms:["ios","android","web"]}})&&Object({NODE_ENV:"production",PUBLIC_URL:"/42-red-tetris",APP_MANIFEST:{scheme:"red-tetris",name:"red-tetris",slug:"red-tetris",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{},sdkVersion:"38.0.0",platforms:["ios","android","web"]}}).SERVER_URL||"http://localhost:3001")+"/player/"+t));case 6:if(!(r=n.sent)||!c(r.data.username)){n.next=9;break}return n.abrupt("return",!0);case 9:throw Error("Username already taken");case 10:case"end":return n.stop()}}),null,null,null,Promise)},f=function(t){var r;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(l(t)){n.next=2;break}throw Error("Name must be 1-15 symbols");case 2:if(u(t)){n.next=4;break}throw Error("Use letters and numbers");case 4:return n.next=6,a.a.awrap(s.a.get((e&&Object({NODE_ENV:"production",PUBLIC_URL:"/42-red-tetris",APP_MANIFEST:{scheme:"red-tetris",name:"red-tetris",slug:"red-tetris",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{},sdkVersion:"38.0.0",platforms:["ios","android","web"]}})&&Object({NODE_ENV:"production",PUBLIC_URL:"/42-red-tetris",APP_MANIFEST:{scheme:"red-tetris",name:"red-tetris",slug:"red-tetris",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{},sdkVersion:"38.0.0",platforms:["ios","android","web"]}}).SERVER_URL||"http://localhost:3001")+"/room/"+t));case 6:if(!(r=n.sent)||!c(r.data.name)){n.next=9;break}return n.abrupt("return",!0);case 9:throw Error("Room name already taken");case 10:case"end":return n.stop()}}),null,null,null,Promise)},d=function(t){var r;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.a.awrap(s.a.get((e&&Object({NODE_ENV:"production",PUBLIC_URL:"/42-red-tetris",APP_MANIFEST:{scheme:"red-tetris",name:"red-tetris",slug:"red-tetris",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{},sdkVersion:"38.0.0",platforms:["ios","android","web"]}})&&Object({NODE_ENV:"production",PUBLIC_URL:"/42-red-tetris",APP_MANIFEST:{scheme:"red-tetris",name:"red-tetris",slug:"red-tetris",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{},sdkVersion:"38.0.0",platforms:["ios","android","web"]}}).SERVER_URL||"http://localhost:3001")+"/room/"+t));case 2:if(!((r=n.sent)&&r.data.players.length>=i.a)){n.next=5;break}throw Error("Too many players in the room");case 5:return n.abrupt("return",!0);case 6:case"end":return n.stop()}}),null,null,null,Promise)}}).call(this,r(14))},106:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=4},242:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(243),a=r(0),o=r.n(a),s=r(429),i=r(244);function c(){return window.addEventListener("keydown",(function(e){32===e.keyCode&&e.target==document.body&&e.preventDefault()})),o.a.createElement(s.b,null,o.a.createElement(i.a,null),o.a.createElement(n.StatusBar,null))}},244:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return O}));var n=r(5),a=r.n(n),o=r(170),s=r(168),i=r(73),c=r(428),l=r(0),u=r.n(l),m=r(245),f=r(307),d=r(304),E=r(284),p=r(285),b=r(288),g=r.n(b),h=r(45),y=r(38);function O(e){var t=e.colorScheme;return u.a.createElement(o.a,{linking:p.a,theme:"dark"===t?s.a:i.a},u.a.createElement(v,null))}var C=Object(c.a)();function v(){var t=Object(l.useState)(void 0),r=a()(t,2),n=r[0],o=r[1],s=Object(l.useState)({username:void 0,room:void 0}),i=a()(s,2),c=i[0],p=i[1];return u.a.createElement(h.a.Provider,{value:function(){if(n)return n;var t=g()(""+(e&&Object({NODE_ENV:"production",PUBLIC_URL:"/42-red-tetris",APP_MANIFEST:{scheme:"red-tetris",name:"red-tetris",slug:"red-tetris",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{},sdkVersion:"38.0.0",platforms:["ios","android","web"]}})&&Object({NODE_ENV:"production",PUBLIC_URL:"/42-red-tetris",APP_MANIFEST:{scheme:"red-tetris",name:"red-tetris",slug:"red-tetris",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{},sdkVersion:"38.0.0",platforms:["ios","android","web"]}}).SERVER_URL||"http://localhost:3001"));return o(t),t}()},u.a.createElement(y.a.Provider,{value:{userContext:c,setUserContext:p}},u.a.createElement(C.Navigator,{screenOptions:{headerShown:!1}},u.a.createElement(C.Screen,{name:"Root",component:f.a}),u.a.createElement(C.Screen,{name:"Playground",component:d.a}),u.a.createElement(C.Screen,{name:"Ranking",component:E.a}),u.a.createElement(C.Screen,{name:"NotFound",component:m.a,options:{title:"Oops!"}}))))}}).call(this,r(14))},245:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),a=r(3),o=r(9),s=r(46),i=r(2);function c(e){var t=e.navigation;return n.createElement(i.a,{style:l.container},n.createElement(o.a,{style:l.title},"This screen doesn't exist."),n.createElement(s.a,{onPress:function(){return t.replace("Root")},style:l.link},n.createElement(o.a,{style:l.linkText},"Go to home screen!")))}var l=a.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",padding:20},title:{fontSize:20,fontWeight:"bold"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#2e78b7"}})},284:function(e,t,r){"use strict";var n=r(5),a=r.n(n),o=r(0),s=r.n(o),i=r(7),c=r.n(i),l=r(3),u=r(2),m=r(9),f=r(20),d=r(83),E=r(10),p=r(45),b=r(38),g=l.a.create({title:{fontSize:26,fontWeight:"bold",alignSelf:"center",marginBottom:"10%"},subtitle:{fontSize:24,alignSelf:"center",marginBottom:"10%"},tableContainer:{width:300,flexDirection:"row",justifyContent:"space-between"},tableHeader:{fontSize:18,fontWeight:"bold"},tableContent:{fontSize:18,marginBottom:3,marginTop:3}});t.a=function(){var e=Object(o.useContext)(p.a),t=Object(o.useContext)(b.a),r=(t.userContext,t.setUserContext,Object(f.useRoute)().params),n=null!=r?r:{},i=n.room,l=n.username,h=Object(o.useState)([]),y=a()(h,2),O=y[0],C=y[1];console.log("roomPlayers:",O);var v=function(){console.log("aaaaaaaaaaaa forbidden")},S=function(e){C(e)};return Object(o.useEffect)((function(){if(!e)throw Error("No socket");return e.emit(E.b.FETCH_ROOM_RANKING,{username:l,roomName:i,gameMode:"not solo"}),e.on(E.b.FORBIDDEN,v),e.on(E.b.FETCH_ROOM_RANKING,S),function(){e.removeListener(E.b.FORBIDDEN,v),e.removeListener(E.b.FETCH_ROOM_RANKING,S)}}),[]),s.a.createElement(d.a,null,s.a.createElement(u.a,{style:{justifyContent:"space-between"}},s.a.createElement(m.a,{style:g.title},"Game report"),l&&O[0]&&l===O[0].username?s.a.createElement(m.a,{style:g.subtitle},l,", you are the winner!"):s.a.createElement(m.a,{style:g.subtitle},l," @ ",i),s.a.createElement(u.a,{style:g.tableContainer},s.a.createElement(u.a,null,s.a.createElement(m.a,{style:g.tableHeader},"Place"),c.a.map(O,(function(e,t){return s.a.createElement(m.a,{key:t,style:g.tableContent},t+1)}))),s.a.createElement(u.a,null,s.a.createElement(m.a,{style:g.tableHeader},"Name"),c.a.map(O,(function(e,t){return s.a.createElement(m.a,{key:t,style:g.tableContent},e.username)}))),s.a.createElement(u.a,null,s.a.createElement(m.a,{style:g.tableHeader},"Score"),c.a.map(O,(function(e,t){return s.a.createElement(m.a,{key:t,style:g.tableContent},e.score)}))))))}},285:function(e,t,r){"use strict";(function(e){var n=r(286),a=function(t){return(e&&Object({NODE_ENV:"production",PUBLIC_URL:"/42-red-tetris",APP_MANIFEST:{scheme:"red-tetris",name:"red-tetris",slug:"red-tetris",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{},sdkVersion:"38.0.0",platforms:["ios","android","web"]}})?"/42-red-tetris":void 0)+"/"+t};t.a={prefixes:[n.makeUrl(e&&Object({NODE_ENV:"production",PUBLIC_URL:"/42-red-tetris",APP_MANIFEST:{scheme:"red-tetris",name:"red-tetris",slug:"red-tetris",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{},sdkVersion:"38.0.0",platforms:["ios","android","web"]}})?"/42-red-tetris":void 0)],config:{screens:{Root:a("/"),Playground:a("/play"),Ranking:a("/ranking"),NotFound:"*"}}}}).call(this,r(14))},304:function(e,t,r){"use strict";r.d(t,"a",(function(){return ee}));var n,a=r(13),o=r.n(a),s=r(29),i=r.n(s),c=r(5),l=r.n(c),u=r(0),m=r.n(u),f=r(7),d=r.n(f),E=r(2),p=r(9),b=r(278),g=r(20),h=r(10),y={I:[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],L:[[0,0,1],[1,1,1],[0,0,0]],J:[[1,0,0],[1,1,1],[0,0,0]],Z:[[1,1,0],[0,1,1],[0,0,0]],S:[[0,1,1],[1,1,0],[0,0,0]],O:[[1,1],[1,1]],T:[[0,1,0],[1,1,1],[0,0,0]]},O={I:[-2,3],L:[-2,4],J:[-2,4],Z:[-2,4],S:[-2,4],O:[-2,4],T:[-2,4]},C=["I","L","J","Z","S","O","T"];!function(e){e[e.FREE=0]="FREE",e[e.OCCUPIED=1]="OCCUPIED",e[e.BLOCKED=2]="BLOCKED"}(n||(n={}));d.a.fill(Array(10),n.OCCUPIED);var v=d.a.fill(Array(10),n.FREE),S=d.a.fill(Array(10),n.BLOCKED),P=d.a.map(Array(20),(function(){return d.a.fill(Array(10),n.FREE)})),R=d.a.map(Array(2),(function(){return d.a.fill(Array(4),n.FREE)})),T=(r(368),r(94)),w=r(433),_=r(281);function k(e){var t=e.style,n=w.a.fromModule(r(378)).uri;return u.createElement(E.a,{style:[{flexDirection:"row"},t]},d.a.map(Array(6),(function(e,t){return u.createElement(_.a,{key:t,source:{uri:n},style:{width:14,height:24,overflow:"hidden"},imageStyle:{height:186,left:-215,resizeMode:"cover",top:-25,width:400}})})))}var N=function(e){return e&&0!==e.length?e.map((function(e){return e.username})):[]},A=r(83),x=r(3),L=x.a.create({outer:{alignItems:"center",borderColor:"#879372",borderWidth:1,height:20,justifyContent:"center",width:20},outerSpectrum:{alignItems:"center",borderColor:"#879372",borderWidth:1,height:6,justifyContent:"center",width:6},inner:{height:12,width:12,backgroundColor:"#879372"},innerSpectrum:{height:2,width:2,backgroundColor:"#879372"}}),I=function(e){var t=e.value;return e.isSpectrum?u.createElement(E.a,{style:[L.outerSpectrum,t===n.OCCUPIED||t===n.BLOCKED?{borderColor:"black"}:void 0]},u.createElement(E.a,{style:[L.innerSpectrum,t===n.OCCUPIED?{backgroundColor:"black"}:t===n.BLOCKED?{backgroundColor:"transparent"}:void 0]})):u.createElement(E.a,{style:[L.outer,t===n.OCCUPIED||t===n.BLOCKED?{borderColor:"black"}:void 0]},u.createElement(E.a,{style:[L.inner,t===n.OCCUPIED?{backgroundColor:"black"}:t===n.BLOCKED?{backgroundColor:"transparent"}:void 0]}))},M=function(e){var t=e.pos,r=e.shape,n=e.type,a=e.timeStamp;return{pos:null!=t?t:O[n],shape:null!=r?r:y[n],type:n,timeStamp:null!=a?a:Date.now()}},j=function(e){var t=e.shape,r=t[0].map((function(e,r){return t.map((function(e){return e[r]})).reverse()}));return{pos:e.pos,shape:r,type:e.type,timeStamp:e.timeStamp}},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{pos:[e.pos[0]+t,e.pos[1]],shape:e.shape,type:e.type,timeStamp:e.timeStamp}},U=function(e){return{pos:[e.pos[0],e.pos[1]+1],shape:e.shape,type:e.type,timeStamp:e.timeStamp}},B=function(e){return{pos:[e.pos[0],e.pos[1]-1],shape:e.shape,type:e.type,timeStamp:e.timeStamp}},z=function(e){var t=[];return d.a.map(e.shape,(function(r,n){return d.a.map(r,(function(r,a){r&&t.push([n+e.pos[0],a+e.pos[1]])}))})),t},F=function(e,t){return void 0!==d.a.find(z(e),(function(e){return d.a.isEqual(e,t)}))},W=function(e,t){var r=d.a.find(z(e),(function(e){var r,a,o=l()(e,2),s=o[0],i=o[1];return(null==t||null==(r=t[s])?void 0:r[i])===n.BLOCKED||(null==t||null==(a=t[s])?void 0:a[i])===n.OCCUPIED})),a=function(e){var t,r,n,a,o=d.a.map(z(e),(function(e){return l()(e,1)[0]})),s=d.a.map(z(e),(function(e){return l()(e,2)[1]}));return{left:null!=(t=d.a.min(s))?t:0,top:null!=(r=d.a.min(o))?r:0,right:null!=(n=d.a.max(s))?n:0,bottom:null!=(a=d.a.max(o))?a:0}}(e),o=a.left,s=a.right;return a.bottom<20&&o>=0&&s<10&&!r},G=function(e,t){var r=d.a.cloneDeep(t);return d.a.map(z(e),(function(e){e[0]>=0&&e[0]<d.a.size(r)&&e[1]>=0&&e[1]<d.a.size(r[0])&&(r[e[0]][e[1]]=n.OCCUPIED)})),r},V=function(e){var t=e.block,r=e.matrix,a=e.style,o=e.isSpectrum,s=o?8:22;return u.createElement(E.a,{style:[H.container,{height:d.a.size(r)*s},a]},d.a.map(r,(function(e,r){return u.createElement(E.a,{key:r,style:{flexDirection:"row",width:d.a.size(e)*s,justifyContent:"space-between"}},d.a.map(e,(function(e,a){return u.createElement(I,{key:a,isSpectrum:o,value:F(t,[r,a])?n.OCCUPIED:e})})))})))},H=x.a.create({container:{padding:2,justifyContent:"space-between",borderColor:"black",borderWidth:1,backgroundColor:"#9ead86"}}),Y=r(283),K=r.n(Y),J=r(36),Z=function(e){var t=e.setIsPause,r=e.setMatrix,n=e.setBlock;K()((function(e,a){var o=a.keyCode;if(!Object(T.isWidgetOpened)()){var s;if(o===J.a.reset)n(M({type:null!=(s=d.a.sample(C))?s:"T"})),r(P),t(!0);t((function(e){return r((function(t){return e||(o===J.a.rotate&&n((function(e){return W(j(e),t)?j(e):e})),o===J.a.left&&n((function(e){return W(B(e),t)?B(e):e})),o===J.a.right&&n((function(e){return W(U(e),t)?U(e):e})),o===J.a.down&&n((function(e){return W(D(e),t)?D(e):(r(G(e,t)),e)})),o===J.a.space&&n((function(e){var n=function(e,t){for(var r=M({type:e.type,pos:e.pos,shape:e.shape});W(D(r),t);)r=D(r);return r}(e,t);return r(G(n,t)),n}))),t})),e}))}}))},q=r(45),Q=r(38);function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(){var e,t,r=Object(u.useContext)(q.a),a=Object(u.useContext)(Q.a),s=a.userContext,i=a.setUserContext,c=Object(g.useNavigation)(),f=Object(g.useRoute)().params,y=null!=f?f:{},O=y.room,w=y.username,_=Object(u.useState)([]),x=l()(_,2),L=x[0],I=x[1],j=Object(u.useState)(M({type:null!=(e=d.a.sample(C))?e:"T"})),U=l()(j,2),B=U[0],z=U[1],F=Object(u.useState)(P),H=l()(F,2),Y=H[0],K=H[1],J=Object(u.useState)(!0),X=l()(J,2),ee=X[0],te=X[1],re=Object(u.useState)(),ne=l()(re,2),ae=ne[0],oe=ne[1],se=Object(u.useState)(),ie=l()(se,2),ce=ie[0],le=ie[1],ue=Object(u.useState)(!1),me=l()(ue,2),fe=me[0],de=me[1],Ee=Object(u.useState)(!1),pe=l()(Ee,2),be=pe[0],ge=pe[1],he=!O||!w;Z({setBlock:z,setMatrix:K,setIsPause:te});var ye=function(e){Object(T.addResponseMessage)(e.username+": "+e.text,e.username)},Oe=function(e){oe(e),console.log("FETCH_CURRENT_PLAYER",e)},Ce=function(e){I(e.players);var t=d.a.find(e.players,(function(e){return e.isLeader}));le(t),oe((function(e){return e&&t&&e.id===t.id?t:e}))},ve=function(e){var t=e.tilesStack,r=e.startTile;console.log("START_GAME",r,t,ee),ge(!0),te(!1)},Se=function(){te((function(e){return!e}))},Pe=function(e){K((function(t){var r=Ne(t,e);return console.log("PENALTY_ROWS receive. rowsNumber, newMatrix:",e,r),r}))},Re=function(){c.push("Ranking",{username:w,room:O})},Te=function(e){var t=e.players,n=e.endGame,a=d.a.find(t,(function(e){return e.isWinner}));oe((function(e){return e&&a&&a.username===e.username?$($({},e),{},{score:e.score+h.a.LAST_PLAYER}):e})),n&&(!function(){if(!r)throw Error("No socket");oe((function(e){if(e)return r.emit(h.b.UPDATE_SCORE,{username:e.username,roomName:e.room,score:e.score}),e}))}(),te(!0),de(!0))},we=function(e){console.log("SOCKET.UPDATE_SPECTRUM, roomPlayers",e),I(e)};Object(u.useEffect)((function(){if(Object(T.dropMessages)(),i({username:w,room:O}),console.log("Playground, User context:",s),!r)throw Error("No socket");return r.emit(h.b.ENTER_ROOM,{username:w,roomName:O}),r.on(h.b.CHAT_MESSAGE,ye),r.on(h.b.FETCH_CURRENT_PLAYER,Oe),r.on(h.b.UPDATE_ROOM_PLAYERS,Ce),r.on(h.b.START_GAME,ve),r.on(h.b.PAUSE_GAME,Se),r.on(h.b.PENALTY_ROWS,Pe),r.on(h.b.GAMEOVER,Te),r.on(h.b.UPDATE_SPECTRUM,we),r.on(h.b.REDIRECT_TO_RANKING,Re),function(){r.emit(h.b.PLAYER_LEFT,w),r.removeListener(h.b.CHAT_MESSAGE,ye),r.removeListener(h.b.FETCH_CURRENT_PLAYER,Oe),r.removeListener(h.b.UPDATE_ROOM_PLAYERS,Ce),r.removeListener(h.b.START_GAME,Se),r.removeListener(h.b.PAUSE_GAME,ve),r.removeListener(h.b.PENALTY_ROWS,Pe),r.removeListener(h.b.GAMEOVER,Te),r.removeListener(h.b.UPDATE_SPECTRUM,we),r.removeListener(h.b.REDIRECT_TO_RANKING,Re),Object(T.dropMessages)()}}),[]);var _e,ke,Ne=function(e,t){var r=Array(t).fill(S),n=d.a.cloneDeep([].concat(o()(e),o()(r)));return d.a.slice(n,t,n.length)},Ae=C[0];return Object(b.a)((function(){ee||(d.a.includes(Y[0],1)?(K(P),te(!0),de(!0),function(){if(!r)throw Error("No socket");r.emit(h.b.GAMEOVER,{username:s.username,roomName:s.room})}()):z((function(e){if(W(D(e),Y))return D(e);var t=function(e){var t=[],r=[];return d.a.map(e,(function(e){d.a.sum(e)<10||d.a.sum(e)>10?t=d.a.cloneDeep([].concat(o()(t),[e])):r=d.a.cloneDeep([].concat(o()(r),[v]))})),console.log("Destroy",d.a.cloneDeep([].concat(o()(r),o()(t)))),{newMatrix:d.a.cloneDeep([].concat(o()(r),o()(t))),deletedRows:r.length}}(G(B,Y)),a=t.newMatrix,i=t.deletedRows;return K(a),i>0&&function(e){if(!r)throw Error("No socket");console.log("PENALTY_ROWS emit, rowsNumber:",e),r.emit(h.b.PENALTY_ROWS,{username:w,roomName:O,rowsNumber:e})}(i),function(e){if(!r)throw Error("No socket");r.emit(h.b.UPDATE_SPECTRUM,{username:s.username,roomName:s.room,spectrum:e})}(function(e){for(var t=d.a.cloneDeep(e),r=0;r<e[0].length;r++)for(var a=!1,o=0;o<e.length;o++)e[o][r]===n.OCCUPIED&&(a=!0),a&&(t[o][r]=n.OCCUPIED);return t}(a)),oe((function(e){if(e)return $($({},e),{},{score:e.score+h.a.PIECE_PLACED+h.a.ROW_DESTROYED*i})})),M({type:Ae})})))}),500),m.a.createElement(m.a.Fragment,null,m.a.createElement(A.a,{isPause:ee,setIsPause:te,roomPlayers:N(L),isLeader:null==ae?void 0:ae.isLeader,gameStarted:be,gameover:fe,isSoloMode:he},m.a.createElement(m.a.Fragment,null,w&&O&&m.a.createElement(p.a,{style:{fontSize:16,marginBottom:10,alignSelf:"flex-start"}},w," @ ",O),m.a.createElement(E.a,{style:{position:"absolute",zIndex:1,marginLeft:600}},m.a.createElement(p.a,null,null==ae?void 0:ae.score),d.a.map(function(e,t){return d.a.filter(e,(function(e){return e.username!==t}))}(L,s.username||""),(function(e){return m.a.createElement(E.a,{key:e.id,style:{width:85}},m.a.createElement(E.a,{style:{alignItems:"center"}},m.a.createElement(p.a,{style:{fontWeight:"bold",color:"white"}},e.username)),m.a.createElement(V,{matrix:e.spectrum,isSpectrum:!0,block:M({type:Ae,pos:[-10,-10]})}))}))),m.a.createElement(E.a,{style:{flexDirection:"row",alignSelf:"flex-start",width:"100%"}},m.a.createElement(V,{matrix:Y,block:B}),m.a.createElement(E.a,{style:{marginLeft:20,flex:1}},m.a.createElement(p.a,{style:{fontSize:20}},"Score"),m.a.createElement(k,{style:{marginVertical:10,alignSelf:"flex-end"}}),m.a.createElement(p.a,{style:{fontSize:20}},"Start Line"),m.a.createElement(k,{style:{marginVertical:10,alignSelf:"flex-end"}}),m.a.createElement(p.a,{style:{fontSize:20}},"Level"),m.a.createElement(k,{style:{marginVertical:10,alignSelf:"flex-end"}}),m.a.createElement(p.a,{style:{fontSize:20}},"Next"),m.a.createElement(V,{matrix:R,block:M({type:Ae,pos:[0,0]}),style:{borderWidth:0,marginVertical:10,alignSelf:"flex-end"}}))))),O&&w&&m.a.createElement(T.Widget,{title:(ke=null!=(t=null==ce?void 0:ce.username)?t:"no leader","Leader: "+ke),subtitle:(_e=N(L),0===_e.length?"No players":"Players: "+_e.join(", ")),handleNewUserMessage:function(e){if(!r)throw Error("No socket");r.emit(h.b.CHAT_MESSAGE,{username:w,message:e,roomName:O})}}))}},307:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(5),a=r.n(n),o=r(0),s=r.n(o),i=r(2),c=r(3),l=r(9),u=r(46),m=r(47),f=r(20),d=r(10),E=r(105),p=r(45),b=r(38);function g(e){var t=e.setScreenNumber,r=Object(o.useContext)(b.a),n=r.userContext,c=r.setUserContext,g=n.username,y=Object(o.useContext)(p.a),O=Object(f.useNavigation)(),C=Object(o.useState)(""),v=a()(C,2),S=v[0],P=v[1];return s.a.createElement(i.a,{style:{width:"100%",alignItems:"center"}},s.a.createElement(l.a,{style:h.title},"Username"),s.a.createElement(l.a,{style:h.error},S),s.a.createElement(m.a,{value:null!=g?g:"",onChangeText:function(e){P(""),c({username:e,room:void 0})},style:{borderWidth:1,marginBottom:20,height:30,width:"100%"}}),s.a.createElement(u.a,{style:h.button,onPress:function(){Object(E.b)(g).then((function(e){if(!0===e){if(!y)throw Error("No socket");y.emit(d.b.CREATE_USER,g),t(2)}})).catch((function(e){P(e.message)}))}},s.a.createElement(l.a,{style:h.linkText},"Next")),s.a.createElement(u.a,{style:h.button,onPress:function(){return O.push("Playground",{})}},s.a.createElement(l.a,{style:h.linkText},"Solo mode")))}var h=c.a.create({title:{marginBottom:5,alignSelf:"flex-start",textAlign:"center"},error:{marginBottom:5,alignSelf:"flex-start",textAlign:"center",color:"#980f0f"},linkText:{fontSize:14},button:{width:"70%",borderWidth:1,borderRadius:10,alignItems:"center",padding:3,marginBottom:30}});function y(e){var t=e.setScreenNumber,r=Object(o.useContext)(b.a),n=r.userContext,c=r.setUserContext,g=n.username,h=n.room,y=Object(o.useContext)(p.a),C=Object(f.useNavigation)(),v=Object(o.useState)(""),S=a()(v,2),P=S[0],R=S[1],T=Object(o.useState)(""),w=a()(T,2),_=w[0],k=w[1],N=Object(o.useState)([]),A=a()(N,2),x=A[0],L=A[1];console.log("Updates for waitingRooms:",x);var I=function(e){return L(e)},M=function(e){return R(""),k(""),L(e)};Object(o.useEffect)((function(){if(!y)throw Error("No socket");return y.emit(d.b.FETCH_WAITING_ROOMS),y.on(d.b.FETCH_WAITING_ROOMS,I),y.on(d.b.UPDATE_WAITING_ROOMS,M),function(){y.removeListener(d.b.FETCH_WAITING_ROOMS,I),y.removeListener(d.b.UPDATE_WAITING_ROOMS,M)}}),[]);return s.a.createElement(i.a,{style:{width:"100%",alignItems:"center"}},s.a.createElement(l.a,{style:{fontSize:16,marginBottom:50}},"Hello, ",g),s.a.createElement(l.a,{style:O.title},"Create room"),s.a.createElement(l.a,{style:O.error},P),s.a.createElement(m.a,{value:null!=h?h:"",onChangeText:function(e){R(""),k(""),c({username:g,room:e})},style:{borderWidth:1,marginBottom:20,height:30,width:"100%"}}),s.a.createElement(u.a,{style:O.button,onPress:function(){return function(e){Object(E.a)(e).then((function(r){if(!0===r){if(!y)throw Error("No socket");y.emit(d.b.CHOOSE_ROOM,{username:g,roomName:e}),g&&e&&C.push("Playground",{username:g,room:e}),t(1)}})).catch((function(e){k(""),R(e.message)}))}(h)}},s.a.createElement(l.a,{style:O.linkText},"Play")),s.a.createElement(i.a,{style:{width:"90%",marginTop:20}},x.length>0&&s.a.createElement(l.a,{style:O.title},"Join room"),s.a.createElement(l.a,{style:O.error},_),x.length>0&&x.map((function(e){return s.a.createElement(i.a,{key:e},s.a.createElement(u.a,{style:O.roomsList,onPress:function(){return function(e){R(""),k(""),Object(E.c)(e).then((function(r){if(!0===r){if(c({username:g,room:e}),!y)throw Error("No socket");y.emit(d.b.CHOOSE_ROOM,{username:g,roomName:e}),g&&e&&C.push("Playground",{username:g,room:e}),t(1)}})).catch((function(e){R(""),k(e.message)}))}(e)}},s.a.createElement(l.a,null,e)))}))))}var O=c.a.create({title:{marginBottom:5,alignSelf:"flex-start",textAlign:"center"},error:{marginBottom:5,alignSelf:"flex-start",textAlign:"center",color:"#980f0f"},linkText:{fontSize:14},roomsList:{borderWidth:1,borderRadius:5,margin:3,padding:2,alignItems:"center"},button:{width:"70%",borderWidth:1,borderRadius:10,alignItems:"center",padding:3,marginBottom:10}}),C=r(83);function v(){var e=Object(o.useState)(1),t=a()(e,2),r=t[0],n=t[1];return s.a.createElement(C.a,null,s.a.createElement(i.a,{style:{alignItems:"center",width:"60%"}},1===r?s.a.createElement(g,{setScreenNumber:n}):s.a.createElement(y,{setScreenNumber:n})))}},319:function(e,t,r){r(320),e.exports=r(426)},320:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/42-red-tetris/expo-service-worker.js",{scope:"/42-red-tetris/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},36:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={left:37,rotate:38,right:39,down:40,space:32,sound:83,reset:82}},378:function(e,t,r){e.exports=r.p+"static/media/sprite.81de6409.png"},38:function(e,t,r){"use strict";var n=r(0),a={username:void 0,room:void 0},o=Object(n.createContext)({userContext:a,setUserContext:function(){}});t.a=o},408:function(e,t){},45:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},83:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return S}));var n=r(3),a=r(9),o=r(2),s=r(0),i=r.n(s),c=r(46),l=r(20),u=r(36),m=r(10),f=r(45),d=r(38),E=function(e){var t=e.size,r=e.color,n=e.label,s=e.style,l=e.onPress,u=e.disabled,m=e.text,f=i.a.useRef(null);return i.a.createElement(o.a,{style:[{alignItems:"center"},s]},i.a.createElement(c.a,{ref:f,disabled:u,onPress:function(){var e;null==f||null==(e=f.current)||e.blur(),null==l||l()},style:{backgroundColor:r,borderRadius:t/2,height:t,width:t,shadowColor:"rgba(0,0,0, .4)",shadowOffset:{height:1,width:1},shadowOpacity:20,shadowRadius:5,justifyContent:"center",alignItems:"center"}},m&&i.a.createElement(a.a,{style:{fontSize:25}},m)),n&&i.a.createElement(a.a,{style:{marginTop:10}},n))},p=function(e){var t=e.isPause,r=e.setIsPause,n=e.opponentsNumber,a=e.isLeader,c=e.gameStarted,p=e.disabled,b=e.isSoloMode,g=Object(s.useContext)(f.a),h=Object(s.useContext)(d.a),y=h.userContext,O=h.setUserContext,C=Object(l.useNavigation)(),v=!b&&a&&!c,S=a&&c||b,P=!b&&(p||n<1),R=function(e){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:e,which:e}))};return i.a.createElement(o.a,{style:{width:400}},i.a.createElement(o.a,{style:{width:"100%"}},i.a.createElement(o.a,{style:{flexDirection:"row",marginVertical:20,justifyContent:"space-between"}},v&&i.a.createElement(E,{color:P?"#c0c0c0":"#2dc421",size:50,label:"Start",text:"\u25b6",disabled:P,onPress:function(){if(!g)throw Error("No socket");g.emit(m.b.START_GAME,{username:y.username,roomName:y.room})}}),S&&i.a.createElement(E,{disabled:P,color:P?"#c0c0c0":"#efcc19",size:50,label:t?"Play(P)":"Pause(P)",text:t?"\u25b6":"||",onPress:function(){if(!g)throw Error("No socket");g.emit(m.b.PAUSE_GAME,{username:y.username,roomName:y.room})}}),i.a.createElement(E,{disabled:P,color:P?"#c0c0c0":"#2dc421",size:50,label:"Sound(S)",onPress:function(){return R(u.a.sound)}}),i.a.createElement(E,{disabled:P,color:P?"#c0c0c0":"#efcc19",size:50,label:"Reset(R)",onPress:function(){return R(u.a.reset)}}),i.a.createElement(E,{color:"white",size:50,style:{margin:0},label:"Exit",text:"\u2573",onPress:function(){if(!g)throw Error("No socket");O({username:void 0,room:void 0}),r(!0),g.emit(m.b.PLAYER_LEFT,y.username),C.navigate("Root")}})),i.a.createElement(o.a,{style:{flexDirection:"row",alignItems:"center",marginTop:20}},i.a.createElement(o.a,{style:{marginRight:20}},i.a.createElement(E,{color:P?"#c0c0c0":"#5a65f1",size:160,label:"Drop(Space)",style:{marginTop:20},disabled:P||t,onPress:function(){return R(u.a.space)}})),i.a.createElement(o.a,{style:{marginLeft:20}},i.a.createElement(E,{color:P?"#c0c0c0":"#5a65f1",size:70,style:{margin:0},disabled:P||t,onPress:function(){return R(u.a.rotate)}}),i.a.createElement(o.a,{style:{flexDirection:"row"}},i.a.createElement(E,{color:P?"#c0c0c0":"#5a65f1",size:70,style:{margin:0,marginRight:60},disabled:P||t,onPress:function(){return R(u.a.left)}}),i.a.createElement(E,{color:P?"#c0c0c0":"#5a65f1",size:70,style:{margin:0},disabled:P||t,onPress:function(){return R(u.a.right)}})),i.a.createElement(E,{color:P?"#c0c0c0":"#5a65f1",size:70,style:{margin:0},disabled:P||t,onPress:function(){return R(u.a.down)}})))))},b=r(5),g=r.n(b),h=r(30),y=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"window",t=s.useState((function(){return h.a.get(e)})),r=g()(t,2),n=r[0],a=r[1];return s.useEffect((function(){var t=!0,r=function(r){t&&a(r[e])};return h.a.addEventListener("change",r),function(){t=!1,h.a.removeEventListener("change",r)}}),[e,a]),n}("window")},O=r(106),C=function(e){var t=e.isMultiplayerMode,r=e.opponentsNumber,n=e.isLeader;return e.gameover?i.a.createElement(o.a,{style:{alignItems:"center"}},i.a.createElement(a.a,{style:S.gameover},"Game Over"),i.a.createElement(a.a,{style:S.gameMode},"Please wait for other players to finish")):t?i.a.createElement(o.a,{style:{alignItems:"center"}},i.a.createElement(a.a,{style:S.gameMode},"You are in multiplayer mode"),i.a.createElement(a.a,{style:S.gameMode},r," other player(s) in your room"),i.a.createElement(a.a,null,function(e,t){return e<=0?"Wait for other players":e>0&&e+1>=O.a&&t?"Room is full, press Start to begin":e>0&&t?"Press Start to begin":e>0&&e+1>=O.a&&!t?"Room is full, ask leader to start the game":e>0&&!t?"Wait for leader to start the game":void 0}(r,n))):i.a.createElement(o.a,{style:{alignItems:"center"}},i.a.createElement(a.a,{style:S.gameMode},"You are in solo mode"),i.a.createElement(a.a,null,"Press Play(P) to start"))};function v(e){var t,r=e.children,n=e.isPause,c=e.setIsPause,l=e.roomPlayers,u=e.isLeader,m=e.gameStarted,f=e.gameover,E=e.isSoloMode,b=Object(s.useContext)(d.a).userContext,g=l&&0!==l.length?l.length-1:0,h=!(!b.username||!b.room),O=y(),v=O.width,P=O.height;t=P/v<1.5?P/960:v/560;var R=f;return i.a.createElement(o.a,{style:S.container},i.a.createElement(o.a,{style:[S.gameboy,{transform:[{scale:t}]}]},i.a.createElement(a.a,{style:S.title},"R E D \u25a0 T E T R I S"),i.a.createElement(o.a,{style:S.display},r,n?i.a.createElement(o.a,{style:[S.display,{position:"absolute",opacity:.8}]},i.a.createElement(C,{isMultiplayerMode:h,opponentsNumber:g,isLeader:u,gameover:f})):null),i.a.createElement(p,{isPause:n,setIsPause:c,opponentsNumber:g,isLeader:u,gameStarted:m,disabled:R,isSoloMode:E})))}var S=n.a.create({container:{flex:1,backgroundColor:"#1f393e",alignItems:"center",justifyContent:"center",padding:20,height:"100%"},display:{alignItems:"center",backgroundColor:"#9ead86",borderBottomColor:"#fa6b6b",borderLeftColor:"#980f0f",borderRightColor:"#fa6b6b",borderTopColor:"#980f0f",borderWidth:5,height:500,justifyContent:"center",padding:10,width:400},gameboy:{justifyContent:"center",alignItems:"center",backgroundColor:"#990011",borderRadius:20,paddingBottom:30,paddingHorizontal:50},title:{fontSize:30,marginVertical:15,textAlign:"center"},gameMode:{marginBottom:20,fontSize:18},gameover:{marginBottom:20,fontWeight:"bold",color:"#990011",fontSize:24}})}},[[319,1,2]]]);
//# sourceMappingURL=app.df451fbd.chunk.js.map