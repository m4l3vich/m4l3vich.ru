(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["articleView"],{"2b26":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Section",{attrs:{name:"Статья",back:"/articles","temporary-heading":""}},[r("div",{staticClass:"mb-5 pt-3"},[r("h5",{domProps:{textContent:t._s(t.article.title)}}),r("p",{staticClass:"caption grey--text mb-1",domProps:{textContent:t._s(t.fecha.format(new Date(t.article.date),t.datePrefix+" DD MMMM YYYY г."))}}),t.article.original?r("v-btn",{attrs:{href:t.article.original,target:"_blank","x-small":"",text:"",color:"blue"}},[r("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-open-in-new")]),t._v(" Оригинал статьи ")],1):t._e(),r("ShareButtons",{staticClass:"mt-1",attrs:{title:t.article.title}})],1),"ready"===t.state?r("div",{staticClass:"mb-4"},[r("VueShowdown",{attrs:{id:"markdown",markdown:t.content}}),r("ShareButtons",{staticClass:"mt-1",attrs:{title:t.article.title}})],1):"loading"===t.state?r("div",{staticClass:"text-center py-3"},[r("v-progress-circular",{attrs:{indeterminate:"",size:48}})],1):"errored"===t.state?r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",{staticClass:"overline",attrs:{shrink:"","d-flex":"","align-center":""}},[r("v-icon",{attrs:{small:"",left:"",color:"red"}},[t._v("mdi-alert-circle")]),r("b",{staticClass:"red--text"},[t._v("Произошла ошибка при загрузке статьи")])],1)],1):t._e()],1)},n=[],i=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("96cf"),r("1da1")),s=r("bbf6"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shareContainer py-2"},[r("div",{staticClass:"overline grey--text mr-3"},[t._v("Поделиться")]),t._l(t.templates,(function(e,a){var n=e.icon,i=e.link;return r("v-btn",{key:a,staticClass:"mr-1",attrs:{small:"",color:"grey",icon:"",href:t.shareLink(i),target:"_blank"}},[r("v-icon",{attrs:{small:""},domProps:{textContent:t._s(n)}})],1)}))],2)},c=[],o=(r("ac1f"),r("5319"),[{icon:"mdi-telegram",link:"tg://msg?url={url}&text={title}"},{icon:"mdi-vk",link:"http://vk.com/share.php?url={url}&title={title}"},{icon:"mdi-twitter",link:"https://twitter.com/intent/tweet?url={url}&text={title}"},{icon:"mdi-skype",link:"https://web.skype.com/share?url={url}&text={text}"}]),u={props:{title:{type:String,required:!0},url:{type:String,default:function(){return window.location.href}}},data:function(){return{templates:o}},methods:{shareLink:function(t){var e=this.url,r=this.title;return t.replace("{url}",e).replace("{title}",r)}}},d=u,p=(r("8b71"),r("2877")),f=r("6544"),m=r.n(f),h=r("8336"),v=r("132d"),b=Object(p["a"])(d,l,c,!1,null,"6183f63e",null),x=b.exports;m()(b,{VBtn:h["a"],VIcon:v["a"]});var w=r("9285"),g={props:["id"],components:{Section:s["a"],ShareButtons:x},data:function(){return{fecha:w["a"],article:null,state:"loading",content:""}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.article=this.$store.state.assets.articles[this.id],e=new URL(window.location),e.pathname="/assets/articleFiles/"+this.id,t.prev=3,t.next=6,fetch(e);case 6:return r=t.sent,t.next=9,r.text();case 9:this.content=t.sent,t.next=17;break;case 12:return t.prev=12,t.t0=t["catch"](3),console.error(t.t0),this.state="errored",t.abrupt("return");case 17:this.state="ready";case 18:case"end":return t.stop()}}),t,this,[[3,12]])})));function e(){return t.apply(this,arguments)}return e}(),computed:{datePrefix:function(){return this.article.original?"Переведено":"Опубликовано"}}},k=g,y=(r("e31d"),r("20f68"),r("e8f2")),_=Object(y["a"])("flex"),C=Object(y["a"])("layout"),V=r("490a"),S=Object(p["a"])(k,a,n,!1,null,null,null);e["default"]=S.exports;m()(S,{VBtn:h["a"],VFlex:_,VIcon:v["a"],VLayout:C,VProgressCircular:V["a"]})},"65e4":function(t,e,r){},"84bf":function(t,e,r){},"8b71":function(t,e,r){"use strict";var a=r("65e4"),n=r.n(a);n.a},e31d:function(t,e,r){"use strict";var a=r("84bf"),n=r.n(a);n.a}}]);