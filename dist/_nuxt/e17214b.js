(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{486:function(t,e,l){"use strict";l.r(e);l(48),l(28),l(29),l(14),l(40);var n=l(18),r=l(479),c=l(86),o={props:["images"],data:function(){return{showFull:!1,filename:""}}},f=l(12),d=Object(f.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"md:grid md:grid-cols-4 md:gap-20 my-8"},t._l(t.images,(function(e){return l("div",{key:e.id,staticClass:"flex flex-col items-center justify-center"},[l("div",{staticClass:"w-56 h-56 bg-contain bg-no-repeat bg-center cursor-pointer transform duration-500 hover:scale-125",style:{"background-image":"url("+e.filename+")"},on:{click:function(l){t.showFull=!t.showFull,t.filename=e.filename}}}),t._v(" "),l("div",{staticClass:"uppercase text-xs mt-4 font-semibold"},[t._v(t._s(e.name))]),t._v(" "),t.showFull?l("div",{staticClass:"flex z-50 items-center justify-center fixed left-0 bottom-0 w-full h-full opacity-75 bg-gray-800",on:{click:function(e){t.showFull=!1}}},[l("div",{staticClass:"w-full md:w-1/2"},[l("svg",{staticClass:"ml-auto fill-current text-white w-6 h-6 cursor-pointer self-end",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18"}},[l("path",{attrs:{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"}})]),t._v(" "),l("div",{staticClass:"flex items-center justify-center p-4"},[l("img",{attrs:{src:t.filename,alt:"Work images"}})])])]):t._e()])})),0)}),[],!1,null,null,null).exports,m=l(480),v=l(23);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={mounted:function(){this.getWorkData()},components:{mywork:r.default,contactme:c.default,gallery:d,illustration:m.default},computed:h({},Object(v.c)(["workData","gallery"])),methods:h(h({},Object(v.b)(["loadWorkData","setGallery"])),{},{getWorkData:function(){this.loadWorkData(),this.setGallery()}})},y=Object(f.a)(x,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"flex flex-wrap justify-center min-h-screen"},[l("div",{staticClass:"container flex justify-between w-4/5"},[t._m(0),t._v(" "),l("div",{staticClass:"hidden self-center w-1/4 lg:block -mt-40"},[l("illustration")],1),t._v(" "),l("div",{staticClass:"scroll-down "})])]),t._v(" "),l("div",{staticClass:"flex flex-wrap justify-center text-txt-pri",attrs:{id:"workSection"}},[l("div",{staticClass:"container mb-12 w-4/5"},[l("div",{staticClass:"flex flex-col self-start"},[t._m(1),t._v(" "),l("div",{staticClass:"mb-24"},t._l(t.workData,(function(t){return l("div",{key:t.id},[l("mywork",{key:t.id,attrs:{title:t.title,description:t.description,id:t.id,img:t.img}})],1)})),0)])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"text-txt-pri self-center -mt-40"},[l("h1",{staticClass:"text-5xl md:text-7xl font-bold mt-2"},[t._v("\n          I create meaningful\n          "),l("br"),l("span",{staticClass:"name"},[t._v("experiences")])]),t._v(" "),l("p",{staticClass:"mt-8 text-txt-sec w-3/4"},[t._v("\n          Hi, I'm\n          "),l("span",{staticClass:"font-bold"},[t._v("Rishi Raj Jain")]),t._v("\n          , a Product designer. Currently working with MindPeers as Lead UX/UI Designer.\n        ")]),t._v(" "),l("div",{staticClass:"space-x-4 mt-8 mb-16 md:self-end"},[l("a",{staticClass:"btncol text-white focus:outline-none focus:shadow-outline px-8 py-2 shadow rounded-full",attrs:{href:"#workSection"}},[t._v("Recent Work")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"text-3xl md:text-5xl font-bold mt-10"},[this._v("Here is some of my "),e("span",{staticClass:"name"},[this._v("work")])])}],!1,null,null,null);e.default=y.exports;installComponents(y,{Illustration:l(480).default,Mywork:l(479).default})}}]);