(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projects"],{"0fd9":function(t,e,i){"use strict";i("a4d3"),i("99af"),i("4de4"),i("caad"),i("4ec9"),i("e439"),i("dbb4"),i("b64b"),i("d3b7"),i("ac1f"),i("2532"),i("3ca3"),i("5319"),i("159b"),i("ddb0");var n=i("ade3"),a=(i("4b85"),i("2b0e")),s=i("d9f7"),o=i("80d2");function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l=["sm","md","lg","xl"],u=["start","end","center"];function h(t,e){return l.reduce((function(i,n){return i[t+Object(o["n"])(n)]=e(),i}),{})}var d=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=h("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},p=h("justify",(function(){return{type:String,default:null,validator:v}})),m=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=h("alignContent",(function(){return{type:String,default:null,validator:m}})),b={align:Object.keys(f),justify:Object.keys(p),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function O(t,e,i){var n=y[t];if(null!=i){if(e){var a=e.replace(t,"");n+="-".concat(a)}return n+="-".concat(i),n.toLowerCase()}}var j=new Map;e["a"]=a["default"].extend({name:"v-row",functional:!0,props:c({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f,{justify:{type:String,default:null,validator:v}},p,{alignContent:{type:String,default:null,validator:m}},g),render:function(t,e){var i=e.props,a=e.data,o=e.children,r="";for(var c in i)r+=String(i[c]);var l=j.get(r);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var n=i[t],a=O(e,t,n);a&&l.push(a)}));l.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},Object(n["a"])(t,"align-".concat(i.align),i.align),Object(n["a"])(t,"justify-".concat(i.justify),i.justify),Object(n["a"])(t,"align-content-".concat(i.alignContent),i.alignContent),t)),j.set(r,l)}(),t(i.tag,Object(s["a"])(a,{staticClass:"row",class:l}),o)}})},"16b7":function(t,e,i){"use strict";i("a9e3"),i("e25e");var n=i("2b0e");e["a"]=n["default"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}})},"21be":function(t,e,i){"use strict";i("99af"),i("caad"),i("e25e"),i("2532");var n=i("2909"),a=i("2b0e"),s=i("80d2");e["a"]=a["default"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(s["j"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(s["j"])(e)],a=[].concat(Object(n["a"])(document.getElementsByClassName("v-menu__content--active")),Object(n["a"])(document.getElementsByClassName("v-dialog__content--active"))),o=0;o<a.length;o++)t.includes(a[o])||i.push(Object(s["j"])(a[o]));return Math.max.apply(Math,i)}}})},2718:function(t,e,i){},2909:function(t,e,i){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("e260"),i("d3b7"),i("25f0"),i("3ca3"),i("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(t){return n(t)||a(t)||s()}i.d(e,"a",(function(){return o}))},"36a7":function(t,e,i){},"4ad4":function(t,e,i){"use strict";i("caad"),i("b0c0"),i("b64b");var n=i("53ca"),a=i("16b7"),s=i("f2e7"),o=i("58df"),r=i("80d2"),c=i("d9bd"),l=Object(o["a"])(a["a"],s["a"]);e["a"]=l.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(n["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave"],listeners:{}}},watch:{activator:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(r["i"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(c["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(r["h"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var i=t.getActivator(e);i&&i.focus(),t.isActive=!t.isActive},e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var i=this.internalActivator?this.$el:document;e="string"===typeof this.activator?i.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var n=this.activatorNode[0].componentInstance;e=n&&n.$options.mixins&&n.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?n.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(r["h"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"62ad":function(t,e,i){"use strict";i("a4d3"),i("4de4"),i("caad"),i("4ec9"),i("a9e3"),i("e439"),i("dbb4"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("2ca0"),i("159b"),i("ddb0");var n=i("ade3"),a=(i("4b85"),i("2b0e")),s=i("d9f7"),o=i("80d2");function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l=["sm","md","lg","xl"],u=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),h=function(){return l.reduce((function(t,e){return t["offset"+Object(o["n"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return l.reduce((function(t,e){return t["order"+Object(o["n"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(u),offset:Object.keys(h),order:Object.keys(d)};function v(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var a=e.replace(t,"");n+="-".concat(a)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var p=new Map;e["a"]=a["default"].extend({name:"v-col",functional:!0,props:c({cols:{type:[Boolean,String,Number],default:!1}},u,{offset:{type:[String,Number],default:null}},h,{order:{type:[String,Number],default:null}},d,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,a=e.data,o=e.children,r=(e.parent,"");for(var c in i)r+=String(i[c]);var l=p.get(r);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var n=i[t],a=v(e,t,n);a&&l.push(a)}));var a=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!a||!i.cols},Object(n["a"])(t,"col-".concat(i.cols),i.cols),Object(n["a"])(t,"offset-".concat(i.offset),i.offset),Object(n["a"])(t,"order-".concat(i.order),i.order),Object(n["a"])(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),p.set(r,l)}(),t(i.tag,Object(s["a"])(a,{class:l}),o)}})},"75eb":function(t,e,i){"use strict";i("159b");var n=i("ade3"),a=i("53ca"),s=i("9d65"),o=i("80d2"),r=i("58df"),c=i("d9bd");function l(t){var e=Object(a["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]=Object(r["a"])(s["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:l},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var i=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,i)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(o["g"])(this.$vnode,"context.$options._scopeId");return t&&Object(n["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.insertBefore(this.$refs.content,t.firstChild),this.hasDetached=!0):Object(c["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},"8ce9":function(t,e,i){},"8efc":function(t,e,i){},9734:function(t,e,i){},9940:function(t,e,i){"use strict";var n=i("2718"),a=i.n(n);a.a},acca:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Section",{staticClass:"article",attrs:{name:"Проекты"}},[i("div",{staticClass:"mb-5"},[i("div",{staticClass:"blockHeader"},[i("span",[t._v("Активные")]),i("v-divider")],1),i("div",t._l(t.$store.state.assets.projects.active,(function(e,n){return i("ProjectItem",{key:n,attrs:{notLast:n!==t.$store.state.assets.projects.active.length-1,value:e}})})),1)]),i("div",[i("div",{staticClass:"blockHeader"},[i("span",[t._v("Архивные")]),i("v-divider")],1),t._l(t.$store.state.assets.projects.archive,(function(e,n){return i("ProjectItem",{key:n,attrs:{notLast:n!==t.$store.state.assets.projects.archive.length-1,value:e}})}))],2)])},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-list-item",{staticClass:"ma-0 mb-2",attrs:{ripple:!1},on:{click:function(e){t.open=!t.open}}},[i("v-list-item-avatar",[i("v-img",{attrs:{src:"/assets/projectPics/"+t.value.name+".png"}})],1),i("v-list-item-content",[i("v-list-item-title",[i("b",{staticClass:"blue--text text--lighten-2",domProps:{textContent:t._s(t.value.name)}}),i("span",{staticClass:"ml-2 overline",staticStyle:{opacity:"0.6"},domProps:{textContent:t._s(t.value.type)}})]),i("v-list-item-subtitle",{staticClass:"grey--text text--darken-2",domProps:{textContent:t._s(t.value.shortDescription)}})],1)],1),i("v-expand-transition",[t.open?i("div",[i("div",{staticClass:"pa-4 pt-0"},[i("v-row",{staticClass:"px-4 mb-2"},[i("v-col",{staticClass:"pa-0 pb-2"},[i("p",{staticClass:"overline mb-1",staticStyle:{opacity:"0.6"}},[t._v("Описание")]),i("p",{staticClass:"body-2 mb-0",domProps:{textContent:t._s(t.value.longDescription)}})]),t.value.myWork?i("v-col",{staticClass:"pa-0 pb-2"},[i("p",{staticClass:"overline mb-1",staticStyle:{opacity:"0.6"}},[t._v("Что сделал я")]),i("p",{staticClass:"body-2 mb-0",domProps:{textContent:t._s(t.value.myWork)}})]):t._e()],1),i("div",{staticClass:"px-1"},[i("p",{staticClass:"overline mb-2",staticStyle:{opacity:"0.6"}},[t._v("Ссылки")]),i("div",{staticClass:"d-flex"},[i("v-btn",{staticClass:"mr-2",attrs:{small:"",outlined:"",color:"primary",href:t.value.links[0].href,target:"_blank"}},[i("v-icon",{attrs:{small:"",left:""},domProps:{textContent:t._s("mdi-"+t.value.links[0].type)}}),t._v(" "+t._s(t.linkTypes[t.value.links[0].type])+" ")],1),t._l(t.value.links.slice(1),(function(e,n){return i("v-tooltip",{key:n,attrs:{right:"",dense:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[i("v-btn",t._g({staticClass:"ml-2",attrs:{icon:"",small:"",color:"grey darken-1",href:e.href,target:"_blank"}},a),[i("v-icon",{attrs:{small:""},domProps:{textContent:t._s("mdi-"+e.type)}})],1)]}}],null,!0)},[i("span",{staticClass:"caption",domProps:{textContent:t._s(t.linkTypes[e.type])}})])}))],2)])],1)]):t._e()]),t.notLast?i("v-divider",{staticClass:"mb-2",staticStyle:{opacity:"0.6"},attrs:{inset:!t.open,dark:""}}):t._e()],1)},o=[],r={props:["value","notLast"],data:function(){return{open:!1,linkTypes:{web:"Веб-сайт",vk:"ВКонтакте",npm:"NPM"}}},methods:{openLink:function(t){window.open(t,"_blank")}}},c=r,l=i("2877"),u=i("6544"),h=i.n(u),d=i("8336"),f=i("62ad"),v=(i("a4d3"),i("4de4"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("ade3")),p=(i("8ce9"),i("7560"));function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){Object(v["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var b=p["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:g({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:g({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),y=i("0789"),O=i("132d"),j=i("adda"),w=i("da13"),S=i("8270"),A=i("5d23"),C=i("0fd9"),_=(i("a9e3"),i("e25e"),i("9734"),i("4ad4")),x=i("a9ad"),k=i("16b7"),D=i("b848"),N=i("75eb"),$=(i("d3b7"),i("fe6c")),E=i("21be"),I=i("58df"),L=i("80d2"),P=Object(I["a"])(E["a"],$["a"],_["a"]),T=P.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),a=0;if(a+=this.left?i-(n-t.width):i,this.offsetX){var s=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));a+=this.left?-s:t.width}return this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),a},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(L["d"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(L["d"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,a=this.dimensions.content.height,s=t+a,o=i<s;return o&&this.offsetOverflow&&n.top>a?t=this.pageYOffset+(n.top-a):o&&!this.allowOverflow?t=i-a-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=_["a"].options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){e.content=t.measure(t.$refs.content),t.dimensions=e}))}}}),B=i("f2e7"),W=i("d9bd"),z=Object(I["a"])(x["a"],k["a"],D["a"],N["a"],T,B["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||n?s=a+e.width/2-i.width/2:(this.left||this.right)&&(s=a+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=n+e.height/2-i.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(a+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(L["d"])(this.maxWidth),minWidth:Object(L["d"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(L["i"])(this,"activator",!0)&&Object(W["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=_["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===L["k"].esc&&(t.getActivator(e),t.runDelay("close"))},e}},render:function(t){var e,i=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},Object(v["a"])(e,this.contentClass,!0),Object(v["a"])(e,"menuable__content__active",this.isActive),Object(v["a"])(e,"v-tooltip__content--fixed",this.activatorFixed),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.getContentSlot()));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[i]),this.genActivator()])}}),M=Object(l["a"])(c,s,o,!1,null,null,null),Y=M.exports;h()(M,{VBtn:d["a"],VCol:f["a"],VDivider:b,VExpandTransition:y["a"],VIcon:O["a"],VImg:j["a"],VListItem:w["a"],VListItemAvatar:S["a"],VListItemContent:A["a"],VListItemSubtitle:A["b"],VListItemTitle:A["c"],VRow:C["a"],VTooltip:z});var R=i("bbf6"),F={components:{Section:R["a"],ProjectItem:Y}},V=F,X=(i("9940"),Object(l["a"])(V,n,a,!1,null,"5b1688e1",null));e["default"]=X.exports;h()(X,{VDivider:b})},adda:function(t,e,i){"use strict";i("a15b"),i("a9e3"),i("8efc"),i("7db0");var n=i("53ca");function a(t,e){var i=e.modifiers||{},a=e.value,o="object"===Object(n["a"])(a),r=o?a.handler:a,c=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(t._observe){if(r&&(!i.quiet||t._observe.init)){var a=Boolean(e.find((function(t){return t.isIntersecting})));r(e,n,a)}t._observe.init&&i.once?s(t):t._observe.init=!0}}),a.options||{});t._observe={init:!1,observer:c},c.observe(t)}function s(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var o={inserted:a,unbind:s},r=o,c=(i("36a7"),i("24b2")),l=i("58df"),u=Object(l["a"])(c["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),h=u,d=i("d9bd");e["a"]=h.extend({name:"v-img",directives:{intersect:r},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},hasIntersect:function(){return"undefined"!==typeof window&&"IntersectionObserver"in window},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!this.hasIntersect||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(d["b"])("Image load failed\n\n"+"src: ".concat(this.normalisedSrc.src),this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(d["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var a=t.naturalHeight,s=t.naturalWidth;a||s?(e.naturalWidth=s,e.calculatedAspectRatio=s/a):null!=i&&setTimeout(n,i)};n()},genContent:function(){var t=h.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=h.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.directives=this.hasIntersect?[{name:"intersect",options:this.options,modifiers:{once:!0},value:this.init}]:[],e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},b848:function(t,e,i){"use strict";var n=i("2909"),a=i("58df");function s(t){for(var e=[],i=0;i<t.length;i++){var a=t[i];a.isActive&&a.isDependent?e.push(a):e.push.apply(e,Object(n["a"])(s(a.$children)))}return e}e["a"]=Object(a["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?s(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,Object(n["a"])(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(n["a"])(this.getOpenDependentElements())),t}}})}}]);