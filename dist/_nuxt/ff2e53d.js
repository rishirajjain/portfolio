(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{491:function(t,e,n){"use strict";n.r(e);n(48),n(28),n(29),n(14),n(40);var r=n(19),l=n(479),o=n(86),c=n(480),d=n(26);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={mounted:function(){this.getWorkData()},components:{mywork:l.default,contactme:o.default,illustration:c.default},computed:m({},Object(d.c)(["workData","gallery"])),methods:m(m({},Object(d.b)(["loadWorkData","setGallery"])),{},{getWorkData:function(){this.loadWorkData(),this.setGallery()}})},w=n(12),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-wrap justify-center min-h-screen"},[n("div",{staticClass:"container flex justify-between w-4/5"},[t._m(0),t._v(" "),n("div",{staticClass:"hidden self-center w-1/4 lg:block -mt-40"},[n("illustration")],1),t._v(" "),n("div",{staticClass:"scroll-down"})])]),t._v(" "),n("div",{staticClass:"flex flex-wrap justify-center text-txt-pri",attrs:{id:"workSection"}},[n("div",{staticClass:"container mb-12 w-4/5"},[n("div",{staticClass:"flex flex-col self-start"},[t._m(1),t._v(" "),n("div",{staticClass:"mb-24"},t._l(t.workData,(function(t){return n("div",{key:t.id},[n("mywork",{key:t.id,attrs:{title:t.title,description:t.description,id:t.id,img:t.img}})],1)})),0)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-txt-pri self-center -mt-40"},[n("h1",{staticClass:"text-5xl md:text-7xl font-bold mt-2"},[t._v("\n          I create meaningful\n          "),n("br"),n("span",{staticClass:"name"},[t._v("experiences")])]),t._v(" "),n("p",{staticClass:"mt-8 text-txt-sec w-3/4"},[t._v("\n          Hi, I'm\n          "),n("span",{staticClass:"font-bold"},[t._v("Rishi Raj Jain")]),t._v("\n          , a Product designer. Currently working with MindPeers as Lead UX/UI Designer.\n        ")]),t._v(" "),n("div",{staticClass:"space-x-4 mt-8 mb-16 md:self-end"},[n("a",{staticClass:"btncol text-white focus:outline-none focus:shadow-outline px-8 py-2 shadow rounded-full",attrs:{href:"#workSection"}},[t._v("Recent Work")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"text-3xl md:text-5xl font-bold mt-10"},[this._v("Here is some of my "),e("span",{staticClass:"name"},[this._v("work")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Illustration:n(480).default,Mywork:n(479).default})}}]);