(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about~articleView~articles~projects"],{"132d":function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("7db0"),n("caad"),n("c975"),n("fb6a"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("2532"),n("498a"),n("c96a"),n("159b");var i,a=n("ade3"),r=(n("4804"),n("7e2b")),s=n("a9ad"),o=n("af2b"),c=n("7560"),l=n("80d2"),d=n("2b0e"),u=n("58df");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t){return["fas","far","fal","fab"].some((function(e){return t.includes(e)}))}function m(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));var g=Object(u["a"])(r["a"],s["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["m"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["l"])(t).find((function(e){return t[e]}));return e&&i[e]||Object(l["d"])(this.size)},getDefaultData:function(){var t=Boolean(this.listeners$.click||this.listeners$["!click"]),e={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":t,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:h({"aria-hidden":!t,role:t?"button":null},this.attrs$),on:this.listeners$};return e},applyColors:function(t){t.class=h({},t.class,{},this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],i=this.getDefaultData(),a="material-icons",r=t.indexOf("-"),s=r<=-1;s?n.push(t):(a=t.slice(0,r),p(a)&&(a="")),i.class[a]=!0,i.class[t]=!s;var o=this.getSize();return o&&(i.style={fontSize:o}),this.applyColors(i),e(this.tag,i,n)},renderSvgIcon:function(t,e){var n=this.getSize(),i=h({},this.getDefaultData(),{style:n?{fontSize:n,height:n,width:n}:void 0});i.class["v-icon--svg"]=!0,this.applyColors(i);var a={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:n||"32",width:n||"32",role:"img","aria-hidden":!this.attrs$["aria-label"],"aria-label":this.attrs$["aria-label"]}};return e("span",i,[e("svg",a,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n=this.getDefaultData();n.class["v-icon--is-component"]=!0;var i=this.getSize();i&&(n.style={fontSize:i,height:i}),this.applyColors(n);var a=t.component;return n.props=t.props,n.nativeOn=n.on,e(a,n)}},render:function(t){var e=this.getIcon();return"string"===typeof e?m(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=d["default"].extend({name:"v-icon",$_wrapperFor:g,functional:!0,render:function(t,e){var n=e.data,i=e.children,a="";return n.domProps&&(a=n.domProps.textContent||n.domProps.innerHTML||a,delete n.domProps.textContent,delete n.domProps.innerHTML),t(g,n,a?[a]:i)}})},"20f68":function(t,e,n){},4804:function(t,e,n){},"4b85":function(t,e,n){},bbf6:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{ref:"container",staticClass:"container",staticStyle:{"max-width":"42rem"}},[n("div",{staticClass:"heading mt-2 mb-4"},[void 0!==t.back?n("v-btn",{staticClass:"mr-3",attrs:{icon:"",color:"white"},on:{click:function(e){t.back?t.$router.push(t.back):t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1):n("v-btn",{staticClass:"mr-3",attrs:{icon:"",color:"white",to:"/"}},[n("v-icon",[t._v("mdi-close")])],1),n("MiniLogo",{staticClass:"mr-2",attrs:{height:"50px"}}),n("h4",{staticStyle:{opacity:"0.5"},domProps:{textContent:t._s(t.name)}})],1),n("v-slide-y-transition",[t.show?n("div",{ref:"slot"},[t._t("default")],2):t._e()])],1)},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",style:{height:t.height,width:t.height},on:{click:t.click}})},s=[],o=n("94f1"),c=n.n(o),l=n("f6c8"),d={props:["height"],data:function(){return{playing:!1,anim:void 0}},mounted:function(){var t=this,e=this.$refs.container;this.anim=c.a.loadAnimation({container:e,animationData:l,renderer:"svg",loop:!1,autoplay:!1}),this.anim.goToAndStop(this.anim.getDuration(!0)-1,!0),this.anim.addEventListener("complete",(function(){t.playing=!1}))},methods:{click:function(){this.playing||(this.playing=!0,this.anim.goToAndPlay(0,!0))}}},u=d,f=n("2877"),h=Object(f["a"])(u,r,s,!1,null,null,null),p=h.exports,m={components:{MiniLogo:p},props:["name","back","temporaryHeading"],data:function(){return{show:!1}},mounted:function(){var t=this;this.show=!0,this.$nextTick((function(){var e=t.$refs,n=e.container,i=e.slot;void 0!==t.temporaryHeading?n.classList.add("content"):i.classList.add("content")}))}},g=m,v=(n("d06b"),n("6544")),b=n.n(v),x=n("8336"),y=(n("99af"),n("4de4"),n("b64b"),n("2ca0"),n("20f68"),n("4b85"),n("e8f2")),k=n("d9f7"),S=Object(y["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,i=e.props,a=e.data,r=e.children,s=a.attrs;return s&&(a.attrs={},n=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),t(i.tag,Object(k["a"])(a,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(n||[])}),r)}}),w=n("132d"),O=n("0789"),j=Object(f["a"])(g,i,a,!1,null,"22782ea0",null);e["a"]=j.exports;b()(j,{VBtn:x["a"],VContainer:S,VIcon:w["a"],VSlideYTransition:O["d"]})},d06b:function(t,e,n){"use strict";var i=n("e972"),a=n.n(i);a.a},e8f2:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("99af"),n("4de4"),n("a15b"),n("b64b"),n("2ca0"),n("498a");var i=n("2b0e");function a(t){return i["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var i=n.props,a=n.data,r=n.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var s=a.attrs;if(s){a.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(a.staticClass+=" ".concat(o.join(" ")))}return i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),e(i.tag,a,r)}})}},e972:function(t,e,n){},f6c8:function(t){t.exports=JSON.parse('{"v":"5.5.8","fr":60,"ip":0,"op":60,"w":512,"h":512,"nm":"Композиция 3","ddd":0,"assets":[],"fonts":{"list":[{"fName":"SourceSansPro-Light","fFamily":"Source Sans Pro","fStyle":"Light","ascent":71.9985961914062}]},"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Слой-фигура 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.568],"y":[1]},"o":{"x":[0.119],"y":[0]},"t":0,"s":[33]},{"t":60,"s":[393]}],"ix":10},"p":{"a":0,"k":[256,256,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[330,330],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Контур прямоугольника 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Обводка 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Преобразовать"}],"nm":"Прямоугольник 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":5,"nm":"M","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[255.351,342.277,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"s":260,"f":"SourceSansPro-Light","t":"M","j":2,"tr":20,"lh":312,"ls":0,"fc":[1,1,1]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":60,"st":0,"bm":0}],"markers":[],"chars":[{"ch":"M","size":260,"style":"Light","w":70.4,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.201,5.539],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-5.338],[0,0],[0,0],[0,0],[0,0],[0,0],[1.712,-5.035],[0,0],[1.712,4.935],[0,0],[0,0]],"o":[[0,0],[0,0],[0,-5.338],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.201,5.539],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.712,4.935],[0,0],[-1.712,-5.035],[0,0],[0,0],[0,0]],"v":[[9.869,0],[13.898,0],[13.898,-44.312],[13.293,-62.137],[13.696,-62.137],[18.933,-47.232],[33.435,-7.251],[37.463,-7.251],[51.865,-47.232],[57.001,-62.137],[57.404,-62.137],[56.799,-44.312],[56.799,0],[61.029,0],[61.029,-66.367],[54.684,-66.367],[40.787,-27.09],[35.751,-12.286],[35.349,-12.286],[30.112,-27.09],[16.214,-66.367],[9.869,-66.367]],"c":true},"ix":2},"nm":"M","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"M","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"Source Sans Pro"}]}')}}]);