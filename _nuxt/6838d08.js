(window.webpackJsonp=window.webpackJsonp||[]).push([[12,7,10],{278:function(t,e,n){var map={"./bobby.jpg":281,"./heemin.jpg":282,"./hongkyung.jpg":283,"./ilgoo.jpg":284,"./kate.JPG":285,"./lauren.jpg":286,"./peniel.jpg":287,"./taylor.png":288,"./uhyeon.JPG":289,"./wendy.jpg":290};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=278},281:function(t,e,n){t.exports=n.p+"img/bobby.1a88203.jpg"},282:function(t,e,n){t.exports=n.p+"img/heemin.c61b693.jpg"},283:function(t,e,n){t.exports=n.p+"img/hongkyung.b434b23.jpg"},284:function(t,e,n){t.exports=n.p+"img/ilgoo.39ec243.jpg"},285:function(t,e,n){t.exports=n.p+"img/kate.1e217f3.JPG"},286:function(t,e,n){t.exports=n.p+"img/lauren.c768a2e.jpg"},287:function(t,e,n){t.exports=n.p+"img/peniel.aabf029.jpg"},288:function(t,e,n){t.exports=n.p+"img/taylor.0ea95b8.png"},289:function(t,e,n){t.exports=n.p+"img/uhyeon.2b5ad42.JPG"},290:function(t,e,n){t.exports=n.p+"img/wendy.a89b3bc.jpg"},298:function(t,e,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("6010bd7c",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";n.r(e);n(31),n(50);var r={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"https://gdsc-cau.github.io/opengraph_image.png"}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._e()}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,n){"use strict";n(298)},303:function(t,e,n){var r=n(28)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.custom-text[data-v-4cfa916c]{\n  word-break:keep-all\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},315:function(t,e,n){var content=n(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("d5c995a2",content,!0,{sourceMap:!1})},318:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=(n(302),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between pt-12 px-3"},[n("div",{staticClass:"w-5/12 ml-3 md:ml-0 bg-white md:bg-gray-50 hover:bg-white border border-gray-400 md:border-gray-300 hover:border-gray-400 rounded-lg md:rounded-xl p-3 md:px-8 md:py-6 group transition duration-300"},[t.prev?n("NuxtLink",{attrs:{to:{name:"slug",params:{slug:t.prev.slug}}}},[n("div",{staticClass:"text-center md:text-left text-gray-500"},[t._v("Previous Post")]),t._v(" "),n("div",{staticClass:"hidden md:block text-gray-700 font-medium mt-1 custom-text"},[t._v(t._s(t.prev.title))])]):n("nuxt-link",{attrs:{to:"/"}},[n("div",{staticClass:"text-center md:text-left text-gray-500"},[t._v("No Previous Post")]),t._v(" "),n("div",{staticClass:"hidden md:block text-gray-700 font-medium mt-1"},[n("span",[t._v("홈으로 돌아가기")])])])],1),t._v(" "),n("div",{staticClass:"w-5/12 mr-3 md:mr-0 bg-white md:bg-gray-50 hover:bg-white border border-gray-400 md:border-gray-300 hover:border-gray-400 rounded-lg md:rounded-xl p-3 md:px-8 md:py-6 group transition duration-300"},[t.next?n("NuxtLink",{attrs:{to:{name:"slug",params:{slug:t.next.slug}}}},[n("div",{staticClass:"text-center md:text-right text-gray-500"},[t._v("Next Post")]),t._v(" "),n("div",{staticClass:"hidden md:block text-right text-gray-700 font-medium mt-1 custom-text"},[t._v(t._s(t.next.title))])]):n("nuxt-link",{attrs:{to:"/"}},[n("div",{staticClass:"text-center md:text-right text-gray-500"},[t._v("No Next Post")]),t._v(" "),n("div",{staticClass:"hidden md:block text-right text-gray-700 font-medium mt-1"},[n("span",[t._v("홈으로 돌아가기")])])])],1)])}),[],!1,null,"4cfa916c",null);e.default=component.exports},354:function(t,e,n){"use strict";n(315)},355:function(t,e,n){var r=n(28)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nimg{\n  margin-left:auto;\n  margin-right:auto\n}\n.custom-text{\n  word-break:keep-all\n}\n.box{\n  width:150px;\n  height:150px;\n  border-radius:70%;\n  overflow:hidden\n}\n.profile{\n  width:100%;\n  height:100%;\n  -o-object-fit:cover;\n     object-fit:cover\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},386:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(8),c=(n(42),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,article,c,l,d,m,x,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("blog",o.slug).fetch();case 3:return article=e.sent,e.next=6,n("blog").only(["title","slug"]).sortBy("datetime","desc").surround(o.slug).fetch();case 6:return c=e.sent,l=Object(r.a)(c,2),d=l[0],m=l[1],x=article.author,e.next=13,n("members",o.id).where({name:x}).fetch();case 13:return f=e.sent,e.abrupt("return",{article:article,prev:d,next:m,member:f,authorName:x});case 15:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},head:function(){return{title:this.article.title,htmlAttrs:{lang:"ko"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Tech Blog Run by GDSC CAU"},{name:"format-detection",content:"telephone=no"}],link:[{hid:"canonical",rel:"canonical",href:"https://gdsc-cau.github.io/".concat(this.$route.params.slug)}]}}}),l=(n(354),n(9)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full bg-gray-50"},[r("div",{staticClass:"related max-w-5xl mx-auto pt-28 pb-12 md:pb-24 md:pt-44"},[r("SocialHead",{attrs:{title:t.article.title,description:t.article.description,image:t.article.img}}),t._v(" "),r("div",{staticClass:"max-w-3xl mx-auto"},[r("p",{staticClass:"text-base md:text-xl text-gray-400 text-center mb-2"},[r("nuxt-link",{staticClass:"hover:underline",attrs:{to:""+t.article.category}},[t._v(t._s(t.article.category))])],1),t._v(" "),r("p",{staticClass:"custom-text leading-snug md:leading-normal px-5 md:px-0 mb-2 text-2xl md:text-5xl text-center text-gray-800 title font-semibold"},[t._v(t._s(t.article.title))]),t._v(" "),r("p",{staticClass:"text-base md:text-xl text-gray-500 text-center mb-16"},[t._v("\n                "+t._s(t.formatDate(t.article.createdAt))+" · by\n                "),t._l(t.member,(function(e){return r("span",{key:e},[r("nuxt-link",{staticClass:"hover:underline",attrs:{to:""+e.slug}},[t._v(t._s(e.name))])],1)}))],2)]),t._v(" "),r("nuxt-content",{staticClass:"prose max-w-5xl custom-text px-6",attrs:{document:t.article}}),t._v(" "),r("div",{staticClass:"max-w-6xl mx-auto px-5 flex justify-center pt-16 md:pt-20 pb-6 md:pb-20"},t._l(t.member,(function(e){return r("div",{key:e},[r("div",{staticClass:"box mb-4 md:mb-6 mx-auto"},[r("img",{staticClass:"profile",attrs:{src:n(278)("./"+e.img),alt:""}})]),t._v(" "),r("div",{staticClass:"text-gray-800 text-xl md:text-2xl pb-2 md:pb-3.5 font-medium flex justify-center poppins"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"text-gray-500 text-sm md:text-base pb-3 md:pb-4 flex justify-center px-3 text-center custom-text"},[t._v(t._s(e.description))]),t._v(" "),r("div",{staticClass:"flex justify-center itmes-center"},[r("nuxt-link",{staticClass:"poppins text-blue-500 text-base md:text-lg hover:underline",attrs:{to:""+e.slug}},[t._v("See More")])],1)])})),0),t._v(" "),r("Prevnext",{attrs:{prev:t.prev,next:t.next}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialHead:n(301).default,Prevnext:n(318).default})}}]);