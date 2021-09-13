(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{116:function(t,e,r){"use strict";r.r(e);r(35),r(21),r(34),r(42),r(26),r(43);var n=r(17),o=r(66),c=r(24),menu=r(171),l=r.n(menu),d=r(172),f=r.n(d),h=r(173);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={props:["homeMenu"],components:{LogoutIcon:r.n(h).a,UserIcon:f.a,MenuIcon:l.a},methods:{openMenu:function(){var menu=document.querySelector(".menu-bar");menu.classList.contains("show")?menu.classList.remove("show"):menu.classList.add("show")},logOut:function(){Object(o.deleteCookie)("XSRF-TOKEN"),window.location.href="/"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({isLogged:"isLogged"}))},x=(r(224),r(13)),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("NuxtLink",{attrs:{to:"/"}},[n("img",{staticClass:"header-icon",attrs:{src:r(177),width:"30"}})]),t._v(" "),n("div",{staticClass:"header-menu"},[t.isLogged?n("NuxtLink",{class:"menu-link"+(t.homeMenu?" home":""),attrs:{to:"/app"}},[n("UserIcon")],1):t._e(),t._v(" "),t.isLogged?n("button",{staticClass:"clear",attrs:{id:"logout"},on:{click:t.logOut}},[n("LogoutIcon")],1):t._e(),t._v(" "),t.homeMenu?t._e():n("button",{staticClass:"mobile-menu clear",on:{click:t.openMenu}},[n("MenuIcon")],1)],1)],1)}),[],!1,null,"de39c642",null);e.default=component.exports;installComponents(component,{Header:r(116).default})},117:function(t,e,r){"use strict";r.r(e);e.default={list:[],isLogged:!1}},118:function(t,e,r){"use strict";r.r(e),e.default={isLogged:function(t){return t.isLogged}}},119:function(t,e,r){"use strict";r.r(e),e.default={setIsLogged:function(t,e){t.isLogged=e}}},120:function(t,e,r){"use strict";r.r(e),e.default={setAuthentication:function(t){var e=t.commit;t.dispatch,t.state;e("setIsLogged",!0)}}},163:function(t,e,r){var content=r(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("b7e08482",content,!0,{sourceMap:!1})},164:function(t,e,r){var content=r(225);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("4c8a20e4",content,!0,{sourceMap:!1})},165:function(t,e,r){var content=r(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("56b15182",content,!0,{sourceMap:!1})},166:function(t,e,r){var content=r(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("6ce1765d",content,!0,{sourceMap:!1})},167:function(t,e,r){"use strict";r.r(e);r(228);var n=r(13),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",[r("ul",[r("label",[r("NuxtLink",{staticClass:"link",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),r("label",[t._v("Units")]),t._v(" "),r("li",[r("NuxtLink",{staticClass:"link",attrs:{to:"/html"}},[t._v("HTML")])],1),t._v(" "),r("li",[r("NuxtLink",{staticClass:"link",attrs:{to:"/xml"}},[t._v("XML")])],1),t._v(" "),r("li",[r("NuxtLink",{staticClass:"link",attrs:{to:"/json"}},[t._v("JSON")])],1),t._v(" "),r("li",[r("NuxtLink",{staticClass:"link",attrs:{to:"/form"}},[t._v("Form")])],1),t._v(" "),r("li",[r("NuxtLink",{staticClass:"link",attrs:{to:"/components"}},[t._v("Components")])],1),t._v(" "),r("li",[r("NuxtLink",{staticClass:"link",attrs:{to:"/testing"}},[t._v("Testing")])],1),t._v(" "),r("li",[r("NuxtLink",{staticClass:"link",attrs:{to:"/ci"}},[t._v("CI")])],1),t._v(" "),r("li",[r("NuxtLink",{staticClass:"link",attrs:{to:"/login"}},[t._v("Auth")])],1),t._v(" "),r("label",[t._v("Documentation")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/vicdata4/vue-up",target:"_blank"}},[r("svg",{staticClass:"github-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}})])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{staticClass:"link",attrs:{target:"_blank",href:"https://vuejs.org/v2/guide/"}},[t._v("Vue")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{staticClass:"link",attrs:{target:"_blank",href:"https://nuxtjs.org/"}},[t._v("Nuxt")])])}],!1,null,"4c04b54a",null);e.default=component.exports;installComponents(component,{Aside:r(167).default})},171:function(t,e){t.exports={functional:!0,render(t,e){const{_c:r,_v:n,data:data,children:o=[]}=e,{class:c,staticClass:l,style:style,staticStyle:d,attrs:f={},...h}=data;return r("svg",{class:[c,l],style:[style,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},f),...h},o.concat([r("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),r("path",{attrs:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}})]))}}},172:function(t,e){t.exports={functional:!0,render(t,e){const{_c:r,_v:n,data:data,children:o=[]}=e,{class:c,staticClass:l,style:style,staticStyle:d,attrs:f={},...h}=data;return r("svg",{class:[c,l],style:[style,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},f),...h},o.concat([r("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),r("path",{attrs:{d:"M10.25 13a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM15 11.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47a8.046 8.046 0 003.66-4.44 8.046 8.046 0 00-3.66 4.44zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24a10 10 0 01-7.76-3.69A10.016 10.016 0 014 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z"}})]))}}},173:function(t,e){t.exports={functional:!0,render(t,e){const{_c:r,_v:n,data:data,children:o=[]}=e,{class:c,staticClass:l,style:style,staticStyle:d,attrs:f={},...h}=data;return r("svg",{class:[c,l],style:[style,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},f),...h},o.concat([r("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),r("path",{attrs:{d:"M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"}})]))}}},175:function(t,e,r){"use strict";r(222);var n=r(13),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("div",{staticClass:"page-container"},[r("div",{staticClass:"section-container"},[r("Nuxt")],1)])],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:r(116).default})},176:function(t,e,r){"use strict";r(226);var n=r(13),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("div",{staticClass:"page-container"},[r("Aside",{staticClass:"menu-bar"}),t._v(" "),r("div",{staticClass:"section-container"},[r("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:r(116).default,Aside:r(167).default})},177:function(t,e,r){t.exports=r.p+"img/seed-icon.fcbb4dc.png"},178:function(t,e,r){r(179),t.exports=r(180)},202:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(25),r(53));function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.redirect,n=e.store,t.next=3,Object(o.default)(o.http.get(),"/access");case 3:c=t.sent,!c.error?n.commit("setIsLogged",!0):(r({name:"/"}),alert("You need to be logged in"));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.default=function(t){return c.apply(this,arguments)}},205:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(25),r(53));function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.redirect,r=e.store,t.next=3,Object(o.default)(o.http.get(),"/access");case 3:n=t.sent,!n.error&&r.commit("setIsLogged",!0);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.default=function(t){return c.apply(this,arguments)}},222:function(t,e,r){"use strict";r(163)},223:function(t,e,r){var n=r(56)(!1);n.push([t.i,'body,html{--header-height:80px;--nav-height:50px;--header-padding:80px;--green-color:#1e9fa7;--purple-color:rgb(152 90 182);--color-black:#333;--color-blue:#0eb2f8;--header-background:#323232;--border-grey:#c7c4c4}html{font-family:"Open Sans",sans-serif,Arial;font-size:16px;line-height:1.6;letter-spacing:.4px;font-weight:300;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.page-container{display:grid;grid-template-columns:1fr;padding-top:var(--header-height);overflow:hidden}.section-container{padding:50px 30px;height:calc(100vh - var(--header-height));overflow:auto}.nuxt-link-active{font-weight:700;color:var(--green-color)!important}.title{color:#575e64;border-bottom:1px solid #975bb6;margin-bottom:50px;padding-bottom:20px;width:100%}.title-module{color:#2196f3;margin:20px 0;font-size:21px;width:100%}.clear{background-color:transparent;border:none;cursor:pointer}.prop-light{color:#0677aa;font-size:17px}.menu-bar{position:absolute;display:none}.menu-bar.show{display:block}.btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:10px 15px;border:none;border-radius:8px;color:#fff;font-size:16px;letter-spacing:1.2px;cursor:pointer}.btn.blue{background-color:var(--color-blue)}.btn.black,.btn.blue{border:1px solid transparent;transition:all .15s ease-in-out}.btn.black{background-color:var(--color-black)}.btn.hover.blue:hover{color:var(--color-blue);border:1px solid var(--color-blue);background-color:#fff}.btn.hover.black:hover{color:var(--color-black);border:1px solid var(--color-black);background-color:#fff}.container-section{margin-bottom:80px}@media (min-width:1024px){.title{width:50%}.menu-bar{position:relative;display:block}.page-container{grid-template-columns:300px 1fr}.section-container{padding:100px 80px}}',""]),t.exports=n},224:function(t,e,r){"use strict";r(164)},225:function(t,e,r){var n=r(56)(!1);n.push([t.i,"header[data-v-de39c642]{position:fixed;top:0;z-index:1;display:flex;align-items:center;justify-content:space-between;padding:0 20px;width:100%;height:var(--header-height);background-color:#fff;border-bottom:4px solid #f3f3f3}.github-icon[data-v-de39c642]{display:block}.header-menu[data-v-de39c642]{display:flex;align-items:center}.header-icon[data-v-de39c642]{display:block}.logo[data-v-de39c642]{width:115px;height:auto}.nuxt-link-active[data-v-de39c642]{font-weight:unset;color:#fff!important}.mobile-menu[data-v-de39c642]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;margin-right:30px}.menu-link.home[data-v-de39c642]{display:block}@media (min-width:540px){header[data-v-de39c642]{padding:0 var(--header-padding)}}@media (min-width:1024px){.menu-link[data-v-de39c642]{display:block}.mobile-menu[data-v-de39c642]{display:none}}",""]),t.exports=n},226:function(t,e,r){"use strict";r(165)},227:function(t,e,r){var n=r(56)(!1);n.push([t.i,'body,html{--header-height:80px;--nav-height:50px;--header-padding:80px;--green-color:#1e9fa7;--purple-color:rgb(152 90 182);--color-black:#333;--color-blue:#0eb2f8;--header-background:#323232;--border-grey:#c7c4c4}html{font-family:"Open Sans",sans-serif,Arial;font-size:16px;line-height:1.6;letter-spacing:.4px;font-weight:300;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.page-container{display:grid;grid-template-columns:1fr;padding-top:var(--header-height);overflow:hidden}.section-container{padding:50px 30px;height:calc(100vh - var(--header-height));overflow:auto}.nuxt-link-active{font-weight:700;color:var(--green-color)!important}.title{color:#575e64;border-bottom:1px solid #975bb6;margin-bottom:50px;padding-bottom:20px;width:100%}.title-module{color:#2196f3;margin:20px 0;font-size:21px;width:100%}.clear{background-color:transparent;border:none;cursor:pointer}.prop-light{color:#0677aa;font-size:17px}.menu-bar{position:absolute;display:none}.menu-bar.show{display:block}.btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:10px 15px;border:none;border-radius:8px;color:#fff;font-size:16px;letter-spacing:1.2px;cursor:pointer}.btn.blue{background-color:var(--color-blue)}.btn.black,.btn.blue{border:1px solid transparent;transition:all .15s ease-in-out}.btn.black{background-color:var(--color-black)}.btn.hover.blue:hover{color:var(--color-blue);border:1px solid var(--color-blue);background-color:#fff}.btn.hover.black:hover{color:var(--color-black);border:1px solid var(--color-black);background-color:#fff}.container-section{margin-bottom:80px}@media (min-width:1024px){.title{width:50%}.menu-bar{position:relative;display:block}.page-container{grid-template-columns:300px 1fr}.section-container{padding:100px 80px}}',""]),t.exports=n},228:function(t,e,r){"use strict";r(166)},229:function(t,e,r){var n=r(56)(!1);n.push([t.i,"ul[data-v-4c04b54a]{margin:0;border-right:1px solid #efe1f6;padding:50px;list-style:none;background-color:#fdfdfd;height:calc(100vh - var(--header-height));overflow:auto}ul>li[data-v-4c04b54a]{margin-bottom:20px;margin-left:10px}.link[data-v-4c04b54a]{text-decoration:none;color:#000}.link.active[data-v-4c04b54a]{font-weight:bolder;color:#1e9fa7!important}ul>label[data-v-4c04b54a]{margin:30px 0;display:block;font-weight:700}ul>label[data-v-4c04b54a],ul>label>a[data-v-4c04b54a]{color:var(--purple-color)}ul>label>a[data-v-4c04b54a]{text-decoration:none}ul>label>.link[data-v-4c04b54a]{color:var(--purple-color)!important}ul>label[data-v-4c04b54a]:first-child{margin-top:0}",""]),t.exports=n},230:function(t,e,r){"use strict";r.r(e);r(35),r(21),r(34),r(42),r(26),r(43);var n=r(17),o=r(1),c=r(24),l=r(117),d=r(118),f=r(119),h=r(120);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}o.a.use(c.a),e.default=function(){return new c.a.Store({state:m({},l.default),getters:d.default,mutations:m({},f.default),actions:h.default})}},38:function(t,e,r){"use strict";var n={props:["error"],layout:"error"},o=r(13),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[404===t.error.statusCode?r("h1",[t._v("Page not found")]):r("h1",[t._v("An error occurred")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("Home page")])],1)}),[],!1,null,null,null);e.a=component.exports},53:function(t,e,r){"use strict";r.r(e),r.d(e,"http",(function(){return d}));var n=r(4),o=(r(25),r(12),r(66)),c="http://localhost:2900";e.default=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var path,r=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return path=r.length>1&&void 0!==r[1]?r[1]:"",t.prev=1,t.next=4,fetch("".concat(c).concat(path),e).then(l).then((function(t){return t})).catch((function(t){return{error:t}}));case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",{error:t.t0});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();var l=function(t){return t.ok?t.json():{error:t.statusText,errorCode:t.status}},d={get:function(){return Object.assign(f,{method:"GET",body:void 0})},post:function(body){return Object.assign(f,{method:"POST",body:JSON.stringify(body)})},put:function(body){return Object.assign(f,{method:"PUT",body:JSON.stringify(body)})},delete:function(){return Object.assign(f,{method:"DELETE",body:void 0})}},f={headers:new Headers({"Content-Type":"application/json",Authorization:"Bearer "+Object(o.getCookie)("XSRF-TOKEN")})}},66:function(t,e,r){"use strict";r.r(e),r.d(e,"getCookie",(function(){return o})),r.d(e,"deleteCookie",(function(){return c})),r.d(e,"emailValidator",(function(){return l})),r.d(e,"getMLDocument",(function(){return d}));var n=r(4),o=(r(25),r(41),r(155),r(156),r(85),r(54),r(12),function(t){var e=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([.$?*|{}()[\]\\/+^])/g,"\\$1")+"=([^;]*)"));return e&&"null"!==e?decodeURIComponent(e[1]):void 0}),c=function(t){document.cookie="".concat(t,"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")},l=function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())},d=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){var n=new XMLHttpRequest;n.onload=function(e){var r=e.currentTarget.responseText,n=(new DOMParser).parseFromString(r,"text/xml").getElementsByTagName("book");t({xmlString:r,xmlList:n})},n.onerror=function(t){r()},n.open("GET","/vue-up".concat(e),!0),n.send()})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},[[178,21,2,22]]]);