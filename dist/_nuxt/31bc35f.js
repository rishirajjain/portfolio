(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{496:function(t,e,r){"use strict";r.r(e);r(48),r(28),r(29),r(14),r(40);var n=r(18),o=r(23);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{fullPath:this.$route.path}},props:["head","content","type","hashtags","publishDate","desc","coverImg"],computed:l({richtext:function(){return this.content?this.$storyapi.richTextResolver.render(this.content):""},titleForShare:function(){return this.head}},Object(o.c)(["gallery"])),mounted:function(){var t,s,e,r,n,o=this;this.getImages(),window.fbAsyncInit=function(){FB.init({cookie:!0,xfbml:!0,version:"v4.0"})},t=document,s="script",e="facebook-jssdk",n=t.getElementsByTagName(s)[0],t.getElementById(e)||((r=t.createElement(s)).id=e,r.src="//connect.facebook.net/en/sdk.js",n.parentNode.insertBefore(r,n)),setTimeout((function(){o.initCreationFacebookComments()}),2e3)},methods:l(l({},Object(o.b)(["setGallery"])),{},{getImages:function(){this.setGallery()},formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},initCreationFacebookComments:function(){FB.XFBML.parse()}}),head:function(){return{title:this.head,meta:[{hid:"description",name:"description",content:this.desc}]}}},f=r(9);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={mounted:function(){this.getBlogData(this.$route.fullPath)},components:{blogPosts:Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-4 bg-white rounded-md shadow p-7"},[r("div",[r("div",{staticClass:"flex flex-col flex-wrap justify-between"},[r("h2",{staticClass:"text-gray-800 text-3xl font-semibold"},[t._v(t._s(t.head))]),t._v(" "),r("p",{staticClass:"text-xs mt-2"},[t._v("Published on "+t._s(t.formatDate(t.publishDate)))])]),t._v(" "),r("div",{staticClass:"text-base"},[r("div",{staticClass:"w-full h-64 bg-contain mb-8 bg-center bg-no-repeat",style:{"background-image":"url("+t.coverImg+")"}}),t._v(" "),r("div",{staticClass:"space-y-8",domProps:{innerHTML:t._s(t.richtext)}})]),t._v(" "),r("hr",{staticClass:"mt-16 mb-4"}),t._v(" "),r("div",{staticClass:"flex space-x-4 items-center"},[t._l(t.gallery.imageLink,(function(e){return r("div",{key:e.id},["profilepic"===e.alt?r("img",{staticClass:"rounded-full w-12 h-12 self-start",attrs:{src:e.filename,alt:"Rishi Raj Jain"}}):t._e()])})),t._v(" "),r("div",{staticClass:"flex flex-col"},[r("p",{},[t._v("Words by,")]),t._v(" "),r("p",{staticClass:"font-bold mt-2"},[t._v("Rishi Raj Jain")]),t._v(" "),r("div",{staticClass:"flex mt-8"},[r("ShareNetwork",{staticClass:"cursor-pointer flex transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",attrs:{network:"twitter",url:"https://rishirajjain.com"+t.fullPath,title:t.titleForShare||"Not Set"}},[r("img",{staticClass:"w-6 h-6",attrs:{src:"/social/twitter-black.svg",alt:""}}),t._v(" "),r("p",{staticClass:"self-center ml-1 text-xs"},[t._v("Tweet")])]),t._v(" "),r("ShareNetwork",{staticClass:"cursor-pointer ml-4 flex transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",attrs:{network:"facebook",url:"https://rishirajjain.com"+t.fullPath,title:t.titleForShare||"Not Set"}},[r("img",{staticClass:"w-6 h-6",attrs:{src:"/social/fb.svg",alt:""}}),t._v(" "),r("p",{staticClass:"self-center ml-1 text-xs"},[t._v("Share on facebook")])])],1)])],2),t._v(" "),r("div",{staticClass:"flex justify-center mt-8"},[r("client-only",[r("div",[r("div",{staticClass:"text-xs-center",attrs:{id:"fb_thread"}},[r("div",{staticClass:"fb-comments",attrs:{"data-href":"https://rishirajjain.com"+ +t.fullPath,"data-numposts":"5"}})]),t._v(" "),r("div",{attrs:{id:"fb-root"}})])])],1),t._v(" "),r("div",{staticClass:"flex flex-wrap justify-between md:justify-end"},t._l(t.hashtags,(function(e){return r("div",{key:e.id,staticClass:"mt-8"},t._l(e.body,(function(e){return r("p",{key:e.id,staticClass:"bg-gray-400 mt-2 md:ml-2 text-xs rounded-full px-4 py-1 hover:bg-gray-500"},[t._v(t._s(e.value))])})),0)})),0)])])}),[],!1,null,null,null).exports},computed:m({},Object(o.c)(["blogDataIndi"])),methods:m(m({},Object(o.b)(["loadBlogIndi"])),{},{getBlogData:function(t){this.loadBlogIndi(t)}})},y=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"space-y-4 flex flex-col justify-center items-center"},[r("div",{staticClass:"container flex flex-col w-4/5 space-y-12 mb-8 z-30"},[r("div",{staticClass:"self-start underline text-xl"},[r("nuxt-link",{staticClass:"text-txt-pri cursor-pointer",attrs:{to:"/blog"}},[t._v("Back")])],1),t._v(" "),r("blogPosts",{attrs:{head:t.blogDataIndi.title,content:t.blogDataIndi.content,type:t.blogDataIndi.type,hashtags:t.blogDataIndi.tags,publishDate:t.blogDataIndi.datePub,desc:t.blogDataIndi.description,coverImg:t.blogDataIndi.coverImage}})],1)])}),[],!1,null,null,null);e.default=y.exports}}]);