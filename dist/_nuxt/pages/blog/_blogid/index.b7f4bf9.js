(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{477:function(t,e,n){"use strict";n.r(e);n(84),n(36),n(37),n(17),n(66);var o=n(32),r={props:["title","content","type","hashtags","publishDate"],computed:{richtext:function(){return this.content?this.$storyapi.richTextResolver.render(this.content):""}}},l=n(15),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4 bg-white rounded-md shadow p-8"},[n("div",[n("h2",{staticClass:"text-gray-800 text-3xl font-semibold mb-8"},[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.publishDate))]),t._v(" "),n("div",{staticClass:"mt-2 text-base"},[n("div",{staticClass:"space-y-8",domProps:{innerHTML:t._s(t.richtext)}})]),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row justify-between"},t._l(t.hashtags,(function(e){return n("div",{key:e.id,staticClass:"flex mt-2"},t._l(e.body,(function(e){return n("p",{key:e.id,staticClass:"bg-gray-400 rounded-full px-4 py-1 hover:bg-gray-500"},[t._v(t._s(e.value))])})),0)})),0)])])}),[],!1,null,null,null).exports,d=n(114);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={mounted:function(){this.getBlogData(this.$route.fullPath)},components:{blogPosts:c},computed:f({},Object(d.c)(["blogDataIndi"])),methods:f(f({},Object(d.b)(["loadBlogIndi"])),{},{getBlogData:function(t){this.loadBlogIndi(t)}}),head:function(){return{title:this.blogDataIndi.title,meta:[{hid:"description",name:"description",content:this.blogDataIndi.description}]}}},y=Object(l.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"space-y-4 flex flex-col justify-center items-center"},[e("div",{staticClass:"container flex flex-col w-4/5 space-y-12 mb-8 z-30"},[e("div",{staticClass:"self-start underline text-xl"},[e("nuxt-link",{staticClass:"text-txt-pri",attrs:{to:"/blog"}},[this._v("Back")])],1),this._v(" "),e("blogPosts",{attrs:{title:this.blogDataIndi.title,content:this.blogDataIndi.content,type:this.blogDataIndi.type,hashtags:this.blogDataIndi.tags,publishDate:this.blogDataIndi.datePub}})],1)])}),[],!1,null,null,null);e.default=y.exports}}]);