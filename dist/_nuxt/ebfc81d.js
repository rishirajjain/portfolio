(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{484:function(t,e,r){"use strict";r.r(e);r(48),r(28),r(29),r(13),r(40);var n=r(18),o=r(23);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={props:["title","description","img","id"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["theme"]))},d=r(17),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{attrs:{to:"/work/"+t.id}},[r("div",{staticClass:"mx-auto py-8"},[r("div",{staticClass:"relative transition duration-500 ease-in-out transform hover:-translate-y-1 overflow-hidden bg-background-pri rounded-lg mb-6 tracking-wide",class:"theme-light"==t.theme?"cardEffLight":"cardEffDark"},[r("svg",{staticClass:"absolute bottom-0 left-0",staticStyle:{transform:"scale(1.5)",opacity:"0.02"},attrs:{viewBox:"0 0 375 283",fill:"none"}},[r("rect",{attrs:{x:"159.52",y:"175",width:"152",height:"152",rx:"8",transform:"rotate(-45 159.52 175)",fill:"white"}}),t._v(" "),r("rect",{attrs:{y:"107.48",width:"152",height:"152",rx:"8",transform:"rotate(-45 0 107.48)",fill:"white"}})]),t._v(" "),r("div",{staticClass:"md:flex-shrink-0"},[r("img",{staticClass:"relative w-full h-64 rounded-lg rounded-b-none",attrs:{src:t.img,alt:"cover pictures"}})]),t._v(" "),r("div",{staticClass:"p-8 rounded-b-lg"},[r("h2",{staticClass:"font-bold text-2xl text-txt-pri tracking-normal"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"text-sm text-txt-sec break-word"},[t._v(t._s(t.description))])])])])])}),[],!1,null,null,null);e.default=component.exports},492:function(t,e,r){"use strict";r.r(e);r(48),r(28),r(29),r(13),r(40);var n=r(18),o=r(484),c=r(23);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={mounted:function(){this.getWorkData()},computed:d({},Object(c.c)(["workData"])),components:{myworksection:o.default},methods:d(d({},Object(c.b)(["loadWorkData"])),{},{getWorkData:function(){this.loadWorkData()}}),head:function(){return{title:"Work",meta:[{hid:"description",name:"description",content:"All my work experiences encapsulated into one section"}]}}},m=r(17),component=Object(m.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"space-y-4 flex flex-col justify-center items-center"},[e("div",{staticClass:"container flex flex-col w-4/5 mb-8"},[e("div",{staticClass:"self-start font-bold text-3xl text-txt-pri"},[this._v("Work")]),this._v(" "),e("div",{staticClass:"md:grid md:grid-cols-2 md:gap-12 mt-8"},this._l(this.workData,(function(t){return e("myworksection",{key:t.id,attrs:{title:t.title,description:t.description,id:t.id,img:t.img}})})),1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Myworksection:r(484).default})}}]);