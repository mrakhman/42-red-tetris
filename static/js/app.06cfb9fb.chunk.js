(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{217:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var r=n(218),a=n(0),o=n.n(a),i=n(377),l=n(273),c=n(266);n.n(c)()(""+(e&&Object({NODE_ENV:"production",PUBLIC_URL:"",APP_MANIFEST:{name:"red-tetris",slug:"red-tetris",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{},sdkVersion:"38.0.0",platforms:["ios","android","web"]}})&&Object({NODE_ENV:"production",PUBLIC_URL:"",APP_MANIFEST:{name:"red-tetris",slug:"red-tetris",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{},sdkVersion:"38.0.0",platforms:["ios","android","web"]}}).EXPO_SOCKET_URL||"http://localhost:3001"));function s(){return o.a.createElement(i.b,null,o.a.createElement(l.a,null),o.a.createElement(r.StatusBar,null))}}).call(this,n(12))},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return H}));var r=n(215),a=n(197),o=n(66),i=n(381),l=n(0),c=n(4),s=n(31),u=n(44),m=n(2);function d(e){var t=e.navigation;return l.createElement(m.a,{style:f.container},l.createElement(s.a,{style:f.title},"This screen doesn't exist."),l.createElement(u.a,{onPress:function(){return t.replace("Root")},style:f.link},l.createElement(s.a,{style:f.linkText},"Go to home screen!")))}var f=c.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",padding:20},title:{fontSize:20,fontWeight:"bold"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#2e78b7"}}),h=function(e){var t=e.size,n=e.color,r=e.label,a=e.style;return l.createElement(m.a,{style:[{alignItems:"center",margin:10},a]},l.createElement(u.a,{style:{backgroundColor:n,borderRadius:t/2,height:t,width:t,shadowColor:"rgba(0,0,0, .4)",shadowOffset:{height:1,width:1},shadowOpacity:20,shadowRadius:5}}),l.createElement(s.a,{style:{marginTop:10}},r))},p=function(){return l.createElement(m.a,null,l.createElement(m.a,{style:{flexDirection:"row"}},l.createElement(m.a,{style:{flex:1}},l.createElement(m.a,{style:{flexDirection:"row",marginTop:20}},l.createElement(h,{color:"#2dc421",size:50,label:"Pause(P)"}),l.createElement(h,{color:"#2dc421",size:50,label:"Sound(S)"}),l.createElement(h,{color:"#efcc19",size:50,label:"Reset(R)"})),l.createElement(m.a,{style:{alignItems:"center"}},l.createElement(h,{color:"#5a65f1",size:160,label:"Drop(Space)",style:{marginTop:20}}))),l.createElement(m.a,{style:{alignItems:"center",flex:1,justifyContent:"center"}},l.createElement(h,{color:"#5a65f1",size:70,style:{margin:0}}),l.createElement(m.a,{style:{flexDirection:"row"}},l.createElement(h,{color:"#5a65f1",size:70,style:{margin:0,marginRight:60}}),l.createElement(h,{color:"#5a65f1",size:70,style:{margin:0}})),l.createElement(h,{color:"#5a65f1",size:70,style:{margin:0}}))))};function y(e){var t=e.children;return l.createElement(m.a,{style:g.gameboy},l.createElement(s.a,{style:g.title},"R E D \u25a0 T E T R I S"),l.createElement(m.a,{style:g.display},t),l.createElement(p,null))}var g=c.a.create({display:{alignItems:"center",backgroundColor:"#9ead86",borderBottomColor:"#fa6b6b",borderLeftColor:"#980f0f",borderRightColor:"#fa6b6b",borderTopColor:"#980f0f",borderWidth:5,height:470,justifyContent:"center",padding:10,width:400},gameboy:{justifyContent:"center",alignItems:"center",backgroundColor:"#af0000",borderRadius:20,paddingBottom:50,paddingHorizontal:50},title:{fontSize:30,marginVertical:20,textAlign:"center"}});function E(e){var t=e.navigation;return l.createElement(m.a,{style:b.container},l.createElement(y,null,l.createElement(s.a,{style:b.title},"Login"),l.createElement(u.a,{onPress:function(){return t.push("Room")},style:b.link},l.createElement(s.a,{style:b.linkText},"Go to room!"))))}var b=c.a.create({container:{flex:1,backgroundColor:"#009688",alignItems:"center",justifyContent:"center",padding:20},title:{fontSize:20,fontWeight:"bold"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#004580"}});function x(e){var t=e.navigation;return l.createElement(m.a,{style:k.container},l.createElement(y,null,l.createElement(s.a,{style:k.title},"Room"),l.createElement(u.a,{onPress:function(){return t.push("Playground")},style:k.link},l.createElement(s.a,{style:k.linkText},"Go to Playground!"))))}var k=c.a.create({container:{flex:1,backgroundColor:"#009688",alignItems:"center",justifyContent:"center",padding:20},title:{fontSize:20,fontWeight:"bold"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#004580"}}),v=n(7),w=n.n(v),S=n(41),C=n.n(S),I=n(240),T=n(241),z=n.n(T),R={I:[[1,1,1,1]],L:[[0,0,1],[1,1,1]],J:[[1,0,0],[1,1,1]],Z:[[1,1,0],[0,1,1]],S:[[0,1,1],[1,1,0]],O:[[1,1],[1,1]],T:[[0,1,0],[1,1,1]]},P={I:[[-1,1],[1,-1]],L:[[0,0]],J:[[0,0]],Z:[[0,0]],S:[[0,0]],O:[[0,0]],T:[[0,0],[1,0],[-1,1],[0,-1]]},O=["I","L","J","Z","S","O","T"],j=37,L=38,D=39,N=40,B=n(13),V=n.n(B),W=n(17),_=n.n(W),A=function(){function e(t){var n;if(V()(this,e),this.type=t.type,this.xy=null!=(n=t.xy)?n:[-1,4],t.rotateIndex?this.rotateIndex=t.rotateIndex:this.rotateIndex=0,t.timeStamp?this.timeStamp=t.timeStamp:this.timeStamp=Date.now(),t.shape?this.shape=t.shape:this.shape=R[t.type].map((function(e){return e})),!t.xy)switch(t.type){case"I":this.xy=[0,3];break;case"L":case"J":case"Z":case"S":case"O":case"T":this.xy=[-1,4]}}return _()(e,[{key:"rotate",value:function(){var t=this.shape,n=t[0].map((function(e,n){return t.map((function(e){return e[n]})).reverse()})),r=[this.xy[0]+P[this.type][this.rotateIndex][0],this.xy[1]+P[this.type][this.rotateIndex][1]],a=this.rotateIndex+1>=P[this.type].length?0:this.rotateIndex+1;return new e({shape:n,type:this.type,xy:r,rotateIndex:a,timeStamp:this.timeStamp})}},{key:"fall",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new e({shape:this.shape,type:this.type,xy:[this.xy[0]+t,this.xy[1]],rotateIndex:this.rotateIndex,timeStamp:Date.now()})}},{key:"right",value:function(){return new e({shape:this.shape,type:this.type,xy:[this.xy[0],this.xy[1]+1],rotateIndex:this.rotateIndex,timeStamp:this.timeStamp})}},{key:"left",value:function(){return new e({shape:this.shape,type:this.type,xy:[this.xy[0],this.xy[1]-1],rotateIndex:this.rotateIndex,timeStamp:this.timeStamp})}}]),e}(),J=c.a.create({container:{marginRight:2,marginBottom:2},outer:{alignItems:"center",borderColor:"#879372",borderWidth:1,height:20,justifyContent:"center",width:20},inner:{height:12,width:12,backgroundColor:"#879372"}}),U=function(e){var t=e.value;return l.createElement(m.a,{style:[J.outer,t?{borderColor:"black"}:void 0]},l.createElement(m.a,{style:[J.inner,t?{backgroundColor:"black"}:void 0]}))},F=function(e){var t=e.matrix;return l.createElement(m.a,{style:{height:22*C.a.size(t),padding:2,justifyContent:"space-between",borderColor:"black",borderWidth:1,backgroundColor:"#9ead86"}},C.a.map(t,(function(e,t){return l.createElement(m.a,{key:t,style:{flexDirection:"row",width:22*C.a.size(e),justifyContent:"space-between"}},C.a.map(e,(function(e,t){return l.createElement(U,{key:t,value:e})})))})))};function M(){var e,t=l.useState(new A({type:null!=(e=C.a.sample(O))?e:"T"})),n=w()(t,2),r=n[0],a=n[1];Object(I.a)((function(){a((function(e){var t;return e.xy[0]+e.shape.length<20?e.fall():new A({type:null!=(t=C.a.sample(O))?t:"T"})}))}),500),z()((function(e){e===L&&a((function(e){return e.rotate()})),e===j&&a((function(e){return e.left()})),e===D&&a((function(e){return e.right()})),e===N&&a((function(e){return e.fall()}))}));var o=function(e,t){var n=t.shape,r=t.xy;return n.forEach((function(t,a){return t.forEach((function(t,o){r[0]+a>=0&&r[0]+a<20&&r[1]+o<10&&(e[r[0]+a][r[1]+o]=n[a][o])}))})),e}(C.a.map(Array(20),(function(){return C.a.map(Array(10),0)})),r);return l.createElement(m.a,{style:Z.container},l.createElement(y,null,l.createElement(m.a,{style:{flexDirection:"row"}},l.createElement(F,{matrix:o}),l.createElement(m.a,{style:{width:150}}))))}var Z=c.a.create({container:{flex:1,backgroundColor:"#009688",alignItems:"center",justifyContent:"center",padding:20}}),G={prefixes:[n(242).makeUrl("/")],config:{screens:{Root:"/",Room:"/room",Playground:"/play",NotFound:"*"}}};function H(e){var t=e.colorScheme;return l.createElement(r.a,{linking:G,theme:"dark"===t?a.a:o.a},l.createElement(X,null))}var K=Object(i.a)();function X(){return l.createElement(K.Navigator,{screenOptions:{headerShown:!1}},l.createElement(K.Screen,{name:"Root",component:E}),l.createElement(K.Screen,{name:"Room",component:x}),l.createElement(K.Screen,{name:"Playground",component:M}),l.createElement(K.Screen,{name:"NotFound",component:d,options:{title:"Oops!"}}))}},286:function(e,t,n){n(287),e.exports=n(375)},287:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},367:function(e,t){}},[[286,1,2]]]);
//# sourceMappingURL=app.06cfb9fb.chunk.js.map