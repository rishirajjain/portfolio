(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{446:function(t,e,r){"use strict";r.r(e);var o={props:["title","description","img","id"]},n=r(15),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{attrs:{to:"/work/"+t.id}},[r("div",{staticClass:"mx-auto py-8 max-w-xl"},[r("div",{staticClass:"relative overflow-hidden hover:shadow-xl hover:transition ease-in-out duration-500 rounded-lg mb-6 tracking-wide"},[r("svg",{staticClass:"absolute bottom-0 left-0",staticStyle:{transform:"scale(1.5)",opacity:"0.1"},attrs:{viewBox:"0 0 375 283",fill:"none"}},[r("rect",{attrs:{x:"159.52",y:"175",width:"152",height:"152",rx:"8",transform:"rotate(-45 159.52 175)",fill:"white"}}),t._v(" "),r("rect",{attrs:{y:"107.48",width:"152",height:"152",rx:"8",transform:"rotate(-45 0 107.48)",fill:"white"}})]),t._v(" "),r("div",{staticClass:"md:flex-shrink-0 bg-background-crd"},[r("img",{staticClass:"relative w-full h-64 rounded-lg rounded-b-none",attrs:{src:t.img,alt:"cover pictures"}})]),t._v(" "),r("div",{staticClass:"p-8 bg-white rounded-b-lg"},[r("h2",{staticClass:"font-bold text-2xl text-gray-800 tracking-normal"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"text-sm text-gray-700 break-word"},[t._v(t._s(t.description))])])])])])}),[],!1,null,null,null);e.default=component.exports},452:function(t,e,r){"use strict";r.r(e);r(108),r(41),r(42),r(20),r(79);var o=r(43),n=r(446),c=r(109);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={mounted:function(){this.getWorkData()},computed:d({},Object(c.c)(["workData"])),components:{myworksection:n.default},methods:d(d({},Object(c.b)(["loadWorkData"])),{},{getWorkData:function(){this.loadWorkData()}}),head:function(){return{title:"Work",meta:[{hid:"description",name:"description",content:"All my work experiences encapsulated into one section"}]}}},m=r(15),component=Object(m.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"space-y-4 flex flex-col justify-center items-center"},[e("div",{staticClass:"container flex flex-col w-4/5 mb-8"},[e("div",{staticClass:"self-start font-bold text-3xl text-txt-pri"},[this._v("Work")]),this._v(" "),e("div",{staticClass:"md:grid md:grid-cols-2 md:gap-12 mt-8"},this._l(this.workData,(function(t){return e("myworksection",{key:t.id,attrs:{title:t.title,description:t.description,id:t.id,img:t.img}})})),1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Myworksection:r(446).default})}}]);