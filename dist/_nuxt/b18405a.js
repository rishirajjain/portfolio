(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{484:function(t,e,r){"use strict";r.r(e);var n={props:["title","description","img","blogid","hashtags","publishDate"],methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},o=r(17),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-8 text-txt-pri"},[r("nuxt-link",{attrs:{to:"/blog/"+t.blogid}},[r("div",{staticClass:"container mx-auto mb-8"},[r("div",{staticClass:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4"},[t.img?r("div",{staticClass:"bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-no-repeat bg-center",style:{"background-image":"url("+t.img+")"}}):t._e(),t._v(" "),""==t.img?r("div",{staticClass:"bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-no-repeat bg-center",staticStyle:{"background-image":"url('/logomain_d.svg')"}}):t._e(),t._v(" "),r("div",{staticClass:"md:mb-0 flex flex-col justify-center items-center mx-auto"},[r("div",{staticClass:"w-11/12 transform hover:-translate-y-6 delay-100 duration-300 bg-background-crd -mt-10 shadow-lg rounded-lg overflow-hidden p-5"},[r("div",{staticClass:"title-post font-bold text-xl"},[t._v("\n              "+t._s(t.title)+"\n            ")]),t._v(" "),r("div",{staticClass:"text-sm mt-2"},[t._v("\n              "+t._s(t.description)+"\n              "),r("div",{staticClass:"flex mt-2 flex-wrap justify-between md:justify-start space-x-1 text-black"},t._l(t.hashtags,(function(e){return r("div",{key:e.id,staticClass:"mt-2"},t._l(e.body,(function(e){return r("p",{key:e.id,staticClass:"bg-blue-100 border-blue-300 border rounded-full px-2 py-1 text-xs"},[t._v("\n                    "+t._s(e.value)+"\n                  ")])})),0)})),0)]),t._v(" "),r("div",{staticClass:"flex justify-end mt-4"},[r("p",{staticClass:"text-xs text-txt-sec break-word"},[t._v("\n                Published on "+t._s(t.formatDate(t.publishDate))+"\n              ")])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports},493:function(t,e,r){"use strict";r.r(e);r(48),r(28),r(29),r(13),r(40);var n=r(18),o=r(484),l=r(23);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={mounted:function(){this.getBlogData()},computed:d({},Object(l.c)(["blogData"])),components:{myblogs:o.default},methods:d(d({},Object(l.b)(["loadBlogData"])),{},{getBlogData:function(){this.loadBlogData()}}),head:function(){return{title:"Blog",meta:[{hid:"description",name:"description",content:"Blog on design, photography, travel, art, entrepreneurship, coding."}]}}},f=r(17),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"space-y-4 flex flex-col justify-center items-center"},[r("div",{staticClass:"container flex flex-col w-4/5 mb-8"},[r("div",{staticClass:"self-start font-bold text-3xl text-txt-pri"},[t._v("Tracoph - Blog")]),t._v(" "),r("div",{staticClass:"mt-3 name font-bold"},[t._v("Travel, Code, Photography, Design, Entrepreneurship")]),t._v(" "),r("p",{staticClass:"text-sm font-semibold mt-8 text-txt-pri"},[t._v("Latest Posts")]),t._v(" "),r("div",{staticClass:"md:grid md:grid-cols-2 md:gap-24 my-8"},t._l(t.blogData,(function(t){return r("myblogs",{key:t.id,attrs:{title:t.title,description:t.description,blogid:t.id,img:t.img,hashtags:t.tags,publishDate:t.datePub}})})),1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Myblogs:r(484).default})}}]);