(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{483:function(t,e,n){"use strict";n.r(e);var r={props:["title","content","type","duration","whatidid","myrole"],computed:{richtext:function(){return this.content?this.$storyapi.richTextResolver.render(this.content):""}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4 bg-white rounded-md shadow p-10 md:p-16"},[n("div",[n("h2",{staticClass:"text-gray-800 text-3xl font-semibold mb-8"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row justify-between mt-2 mb-8 space-y-4 md:space-y-0 text-xs text-gray-700"},[n("div",{staticClass:"flex flex-col space-y-4"},[n("h4",{staticClass:"font-bold text-sm text-black"},[t._v("Type")]),t._v(" "),n("p",[t._v(t._s(t.type))])]),t._v(" "),n("div",{staticClass:"flex flex-col space-y-4"},[n("h4",{staticClass:"font-bold text-sm text-black"},[t._v("Duration")]),t._v(" "),n("p",[t._v(t._s(t.duration))])]),t._v(" "),n("div",{staticClass:"flex flex-col space-y-4"},[n("h4",{staticClass:"font-bold text-sm text-black"},[t._v("My Role")]),t._v(" "),n("p",[t._v(t._s(t.myrole))])]),t._v(" "),n("div",{staticClass:"flex flex-col space-y-4"},[n("h4",{staticClass:"font-bold text-sm text-black"},[t._v("What I did")]),t._v(" "),n("div",[n("p",{staticClass:"whitespace-pre-line"},[t._v(t._s(t.whatidid))])])])]),t._v(" "),n("div",{staticClass:"mt-2 text-base"},[n("div",{staticClass:"space-y-8",domProps:{innerHTML:t._s(t.richtext)}})])])])}),[],!1,null,null,null);e.default=component.exports},490:function(t,e,n){"use strict";n.r(e);n(48),n(28),n(29),n(14),n(40);var r=n(19),o=n(483),l=n(26);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={mounted:function(){this.getWorkData(this.$route.fullPath)},components:{workdetails:o.default},computed:d({},Object(l.c)(["workDataIndi"])),methods:d(d({},Object(l.b)(["loadWorkIndi"])),{},{getWorkData:function(t){this.loadWorkIndi(t)}}),head:function(){return{title:"Work -"+this.workDataIndi.title,meta:[{hid:"description",name:"description",content:this.workDataIndi.description}]}}},v=n(12),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"space-y-4 flex flex-col justify-center items-center"},[n("div",{staticClass:"container flex flex-col w-11/12 md:w-4/5 space-y-12 mb-8 z-30"},[n("div",{staticClass:"self-start underline text-xl"},[n("nuxt-link",{staticClass:"text-txt-pri",attrs:{to:"/home"}},[t._v("Back")])],1),t._v(" "),n("workdetails",{attrs:{title:t.workDataIndi.title,content:t.workDataIndi.content,type:t.workDataIndi.type,duration:t.workDataIndi.duration,myrole:t.workDataIndi.myrole,whatidid:t.workDataIndi.whatidid}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Workdetails:n(483).default})}}]);