(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{455:function(t,e,r){"use strict";r.r(e);r(80),r(35),r(36),r(17),r(61);var n=r(29),o=r(445),l=(r(446),r(109));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={mounted:function(){this.getWorkData()},components:{mywork:o.default},computed:f({},Object(l.c)(["workData"])),methods:f(f({},Object(l.b)(["loadWorkData"])),{},{getWorkData:function(){this.loadWorkData()},modifyData:function(){var t=this.workData;return Object.keys(t).map((function(e){return t[e]})).filter((function(t){return"frrole"==t.id||"micro-interactions"==t.id||"portfolio-version-3"==t.id}))}})},m=r(15),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap justify-center height"},[r("div",{staticClass:"container flex justify-between w-4/5"},[r("div",{staticClass:"text-txt-pri flex flex-col self-start"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("p",{staticClass:"text-xs mt-10 font-bold"},[t._v("Featured Work")]),t._v(" "),r("div",{staticClass:"flex flex-wrap justify-between md:space-x-4"},t._l(t.modifyData(),(function(t){return r("div",{key:t.id},[r("mywork",{key:t.id,attrs:{title:t.title,shortdes:t.shortdes,id:t.id,img:t.img}})],1)})),0),t._v(" "),r("div",{staticClass:"space-x-4 mt-8 mb-16 md:self-end"},[r("nuxt-link",{staticClass:"hover:underline text-txt-sec",attrs:{to:"work"}},[t._v("See more work")]),t._v(" "),r("a",{staticClass:"btncol text-white focus:outline-none focus:shadow-outline px-8 py-2 shadow rounded-full",attrs:{href:"mailto:rishirajjain98@gmail.com?subject=Regarding an offer at {Insert Company name}&body=Hey Rishi, "}},[t._v("Hire Me")])],1)]),t._v(" "),r("div",{staticClass:"hidden self-center w-1/4 lg:block"},[r("illustration")],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"text-5xl md:text-6xl font-bold mt-2"},[this._v("\n        I create beautiful\n        "),e("br"),this._v("experiences\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt-2"},[this._v("\n        Hi, I'm\n        "),e("span",{staticClass:"font-bold"},[this._v("Rishi Raj Jain")]),this._v("\n        a\n        "),e("span",{staticClass:"name text-xl font-bold"},[this._v("Product designer")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Mywork:r(445).default,Illustration:r(446).default})}}]);