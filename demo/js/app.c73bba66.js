(function(t){function e(e){for(var r,o,s=e[0],u=e[1],l=e[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"35c7":function(t,e,n){"use strict";var r=n("8150"),i=n.n(r);i.a},"40e8":function(t,e,n){t.exports=n.p+"img/wheel.1feeccf9.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("FortuneWheel",{staticStyle:{width:"500px"},attrs:{btnWidth:"30%",borderColor:"#584b43",borderWidth:6,prizes:t.prizes},on:{onRotateStart:t.onRotateStart,onRotateEnd:t.onRotateEnd}}),r("FortuneWheel",{staticStyle:{width:"500px"},attrs:{type:"image",prizeId:t.prizeId,prizes:t.prizes,angleBase:-10},on:{onRotateStart:t.onRotateStart,onRotateEnd:t.onRotateEnd}},[r("img",{staticStyle:{transform:"rotateZ(60deg)"},attrs:{slot:"wheel",src:n("40e8")},slot:"wheel"}),r("img",{attrs:{slot:"button",src:n("675d")},slot:"button"})]),r("button",{on:{click:function(e){t.prizeId=2}}},[t._v("change PrizeId Red")])],1)},a=[],o=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return 100===t.probabilityTotal?n("div",{staticClass:"vue-fortuneWheel"},[n("div",{ref:"fortuneWheelBox",staticClass:"fortuneWheel-box",style:t.fortuneWheelStyle,on:{transitionend:t.onRotateEnd,webkitTransitionend:t.onRotateEnd}},["canvas"===t.type?n("canvas",{ref:"fortuneWheelCanvas",attrs:{width:2*t.radius,height:2*t.radius}}):t._t("wheel")],2),n("div",{staticClass:"fortuneWheel-wrapper"},[n("div",{staticClass:"btn-container",style:{width:t.btnWidth,height:t.btnWidth},on:{click:t.onRotateStart}},["canvas"===t.type?n("div",{staticClass:"fortuneWheel-btn"},[t._v(t._s(t.btnText))]):t._t("button")],2)])]):t._e()}),s=[],u=(n("20d6"),n("28a5"),n("55dd"),n("75fc")),l=(n("6c7b"),n("ac6a"),n("c5f6"),n("7514"),n("a481"),n("6b54"),function(t,e){return Math.floor(Math.random()*(e-t+1))+t}),c=function(t,e){return t.map("function"===typeof e?e:function(t){return t[e]}).reduce((function(t,e){return f(t,e)}),0)},f=function(t,e){var n,r,i;try{n=t.toString().split(".")[1].length}catch(a){n=0}try{r=e.toString().split(".")[1].length}catch(a){r=0}return i=Math.pow(10,Math.max(n,r)),(d(t,i)+d(e,i))/i},d=function(t,e){var n=0,r=t.toString(),i=e.toString();try{n+=r.split(".")[1].length}catch(a){}try{n+=i.split(".")[1].length}catch(a){}return Number(r.replace(".",""))*Number(i.replace(".",""))/Math.pow(10,n)},p=function(t,e){return t.find((function(n){return n[e]===Math.max.apply(Math,t.map((function(t){return t[e]})))}))},h={name:"FortuneWheel",props:{type:{type:String,default:"canvas"},radius:{type:Number,default:250},textRadius:{type:Number,default:190},borderWidth:{type:Number,default:0},borderColor:{type:String,default:"transparent"},btnText:{type:String,default:"GO"},lineHeight:{type:Number,default:20},btnWidth:{type:String,default:"170px"},maxTimes:{type:Number,default:0},duration:{type:Number,default:6e3},timingFun:{type:String,default:"cubic-bezier(0.36, 0.95, 0.64, 1)"},angleBase:{type:Number,default:10},prizeId:{type:Number,default:0},prizes:{type:Array,default:function(){return[]}}},data:function(){return{playTimes:0,isRotating:!1,rotateEndDeg:0,prizeRes:{}}},computed:{probabilityTotal:function(){return c(this.prizes,(function(t){return t.probability}))},prizesIdArr:function(){var t=this,e=[];return this.prizes.forEach((function(n){var r=Math.round(n.probability*t.decimalSpaces),i=new Array(r).fill(n.id);e.push.apply(e,Object(u["a"])(i))})),e},decimalSpaces:function(){var t=Object(u["a"])(this.prizes).sort((function(t,e){var n=String(t.probability).split(".")[1],r=String(e.probability).split(".")[1],i=n?n.length:0,a=r?r.length:0;return a-i})),e=String(t[0].probability).split(".")[1],n=e?e.length:0;return[1,10,100,1e3][n>4?4:n]},rotateDuration:function(){return this.isRotating?this.duration/1e3:0},maxPrizeId:function(){var t=p(Object(u["a"])(this.prizes),"probability");return t.id},fortuneWheelStyle:function(){return{"-webkit-transform":"rotateZ(".concat(this.rotateEndDeg,"deg)"),transform:"rotateZ(".concat(this.rotateEndDeg,"deg)"),"-webkit-transition-duration":"".concat(this.rotateDuration,"s"),"transition-duration":"".concat(this.rotateDuration,"s"),"-webkit-transition-timing-function:":this.timingFun,"transition-timing-function":this.timingFun}}},watch:{prizeId:function(t){this.isRotating&&(this.rotateEndDeg=360*this.angleBase+this.getTargetDeg(t))}},mounted:function(){this.checkProbability()&&"canvas"===this.type&&this.drawCanvas()},methods:{checkProbability:function(){return 100===this.probabilityTotal||(console.error("Prizes Is Error: Sum of probabilities is not 100!"),!1)},drawCanvas:function(){var t=this,e=this.$refs.fortuneWheelCanvas;if(e.getContext){var n=Math.PI/(this.prizes.length/2),r=e.getContext("2d");r.clearRect(0,0,2*this.radius,2*this.radius),r.strokeStyle=this.borderColor,r.lineWidth=2*this.borderWidth,r.font="24px Microsoft YaHei",this.prizes.forEach((function(e,i){var a=i*n-Math.PI/2;if(r.fillStyle=e.bgColor,r.beginPath(),r.arc(t.radius,t.radius,t.radius-t.borderWidth,a,a+n,!1),r.stroke(),r.arc(t.radius,t.radius,0,a+n,a,!0),r.fill(),r.save(),r.fillStyle=e.color,r.translate(t.radius+Math.cos(a+n/2)*t.textRadius,t.radius+Math.sin(a+n/2)*t.textRadius),r.rotate(a+n/2+Math.PI/2),e.name.length>6)for(var o=[e.name.substring(0,6),e.name.substring(6)],s=0;s<o.length;s++)r.fillText(o[s],-r.measureText(o[s]).width/2,(s+1)*t.lineHeight);else r.fillText(e.name,-r.measureText(e.name).width/2,t.lineHeight);r.restore()}))}},onRotateStart:function(){if(!this.isRotating){this.isRotating=!0;var t=this.prizeId||this.getRandomPrize();this.rotateEndDeg=360*this.angleBase+this.getTargetDeg(t),this.$emit("onRotateStart")}},onRotateEnd:function(){this.isRotating=!1,this.rotateEndDeg-=360*this.angleBase,this.playTimes+=1,this.$emit("onRotateEnd",this.prizeRes.value)},getRandomPrize:function(){var t=this.prizesIdArr[l(0,100*this.decimalSpaces-1)];return this.maxTimes>0&&this.playTimes>this.maxTimes&&(t=this.maxPrizeId),t},getTargetDeg:function(t){var e=360/this.prizes.length,n=this.prizes.findIndex((function(e){return e.id===t}));return this.prizeRes=this.prizes.filter((function(e){return e.id===t}))[0]||[],360-(e*n+e/2)}}},b=h,g=(n("35c7"),n("2877")),m=Object(g["a"])(b,o,s,!1,null,"addc93f6",null),y=m.exports;y.install=function(t){t.component(y.name,y)};var v=y,S={name:"app",components:{FortuneWheel:v},data:function(){return{prizeId:1,prizes:[{id:1,name:"Blue",value:"Blue' value",bgColor:"#45ace9",color:"#ffffff",probability:30},{id:2,name:"Red",value:"Red' value",bgColor:"#dd3832",color:"#ffffff",probability:40},{id:3,name:"Yellow",value:"Yellow' value",bgColor:"#fef151",color:"#ffffff",probability:30}]}},methods:{onRotateStart:function(){console.log("onRotateStart")},onRotateEnd:function(t){alert(t)}}},R=S,x=(n("5c0b"),Object(g["a"])(R,i,a,!1,null,null,null)),w=x.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("e332"),i=n.n(r);i.a},"675d":function(t,e,n){t.exports=n.p+"img/button.7e09e29c.png"},8150:function(t,e,n){},e332:function(t,e,n){}});