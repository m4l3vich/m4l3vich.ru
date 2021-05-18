(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"07fd":function(t,e,i){"use strict";i("d157")},"46eb":function(t,e,i){},d157:function(t,e,i){},eb56:function(t,e,i){"use strict";i("46eb")},f820:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Section",{staticClass:"article",attrs:{name:"Обо мне"}},[i("p",[t._v(" Меня зовут "),i("b",[t._v("Евгений Малевич")]),t._v(". Я живу в России, в Иркутской области "),i("a",{staticClass:"white--text",on:{click:function(){t.timeShown=!t.timeShown}}},[t._v("(часовой пояс UTC+8 или MSK+5)")]),t._v(". ")]),i("v-expand-transition",[t.timeShown?i("p",{staticClass:"text-center",staticStyle:{"margin-bottom":"0","padding-bottom":"20px"}},[i("span",{staticClass:"display-1",domProps:{textContent:t._s(t.time)}}),i("br"),i("span",{staticClass:"overline grey--text"},[t._v("Иркутское время (IRKT)")])]):t._e()]),i("p",[t._v(" Я - графический дизайнер и full stack веб-разработчик. Пока что в своём портфолио, к сожалению, не имею никаких проектов. ")]),i("p"),i("p",[t._v(" Предпочитаю использовать "),i("twi",{attrs:{icon:"mdi-apple-keyboard-command"}},[t._v("macOS")]),t._v(" и редактор кода "),i("twi",{attrs:{link:"https://code.visualstudio.com/",icon:"mdi-microsoft-visual-studio-code"}},[t._v("Visual Studio Code")]),t._v(". ")],1),i("p",[t._v(" В качестве основного языка программирования я выбираю "),i("twi",{attrs:{icon:"mdi-language-javascript"}},[t._v("JavaScript")]),t._v(". Для создания консольных и серверных приложений пользуюсь "),i("twi",{attrs:{link:"https://nodejs.org/ru/",icon:"mdi-nodejs"}},[t._v("Node.js")]),t._v(", "),i("twi",{attrs:{link:"https://www.postgresql.org/"}},[t._v("PostgreSQL")]),t._v(" как основной СУБД и "),i("twi",{attrs:{link:"https://koajs.com/"}},[t._v("Koa")]),t._v(" в качестве веб-сервера. ")],1),i("p",[t._v(" По возможности на бэкенде применяю headless CMS "),i("twi",{attrs:{link:"https://strapi.io/"}},[t._v("Strapi")]),t._v(", активно использую "),i("twi",{attrs:{link:"https://www.docker.com/",icon:"mdi-docker"}},[t._v("Docker")]),t._v(". Для создания Desktop-приложений я выбираю "),i("twi",{attrs:{link:"https://www.electronjs.org/",icon:"mdi-electron-framework"}},[t._v("Electron")]),t._v(". ")],1),i("p",[t._v(" Для создания веб-сайтов и веб-интерфейсов в основном использую "),i("twi",{attrs:{link:"https://vuejs.org/",icon:"mdi-vuejs"}},[t._v("Vue.js")]),t._v(". ")],1),i("p"),i("p",[t._v(" Графический дизайн я создаю с помощью "),i("twi",[t._v("Adobe Photoshop")]),t._v(" и "),i("twi",[t._v("Adobe Illustrator")]),t._v(", анимации создаю через "),i("twi",[t._v("Adobe After Effects")]),t._v(". ")],1),i("p",[i("i",[t._v("А ещё мне нравится сериал "),i("a",{staticClass:"orange--text font-weight-bold",on:{click:t.gallifreyStands}},[t._v("«Доктор Кто».")])])])],1)},o=[],a=i("bbf6"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b",{staticClass:"blue--text text--lighten-1"},[t.icon?i("v-icon",{staticStyle:{"vertical-align":"unset"},attrs:{small:"",color:"blue lighten-1"},domProps:{textContent:t._s(t.icon)}}):t._e(),t._v(" "),i("a",{attrs:{href:t.link,target:"_blank"}},[t._t("default")],2)],1)},r=[],c={props:["icon","link"]},l=c,v=(i("eb56"),i("2877")),d=i("6544"),_=i.n(d),p=i("132d"),u=Object(v["a"])(l,s,r,!1,null,"bc159150",null),w=u.exports;_()(u,{VIcon:p["a"]});var f={components:{Section:a["a"],twi:w},data:function(){return{timeShown:!1,intval:void 0,time:""}},methods:{gallifreyStands:function(){window.location.hash="#gallifrey",window.location.reload()},onEverySecondStart:function(t){var e=this,i=Date.now()%1e3;setTimeout((function(){e.intval=setInterval(t,1e3)}),i)}},mounted:function(){var t=this;this.onEverySecondStart((function(){var e=new Date,i=e.getTime()+6e4*e.getTimezoneOffset(),n=new Date(i+288e5);t.time=t.fecha.format(n,"HH:mm:ss")}))},beforeDestroy:function(){clearInterval(this.intval)}},m=f,h=(i("07fd"),i("0789")),b=Object(v["a"])(m,n,o,!1,null,"f81df326",null);e["default"]=b.exports;_()(b,{VExpandTransition:h["a"]})}}]);