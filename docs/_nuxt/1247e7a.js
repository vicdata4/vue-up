(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{242:function(t,e,r){var content=r(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("b72e0b60",content,!0,{sourceMap:!1})},271:function(t,e,r){"use strict";r(242)},272:function(t,e,r){var n=r(56)(!1);n.push([t.i,"textarea[data-v-7a1ffc46]{width:100%;height:400px;resize:none}",""]),t.exports=n},288:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(25),r(66)),l={data:function(){return{xmlString:""}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getMLDocument)("/books.xml");case 2:r=e.sent,t.xmlString=r.xmlString;case 4:case"end":return e.stop()}}),e)})))()}},c=(r(271),r(13)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h2",{staticClass:"title"},[t._v("XML")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.xmlString,expression:"xmlString"}],attrs:{readonly:""},domProps:{value:t.xmlString},on:{input:function(e){e.target.composing||(t.xmlString=e.target.value)}}}),t._v(" "),r("ul",[t._m(0),t._v(" "),r("li",[r("NuxtLink",{attrs:{to:"/xml/table"}},[t._v("Table representation")])],1),t._v(" "),r("li",[r("NuxtLink",{attrs:{to:"/xml/schema"}},[t._v("XML Schema")])],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/vue-up/books.xml",target:"_blank"}},[t._v("Show document from browser")])])}],!1,null,"7a1ffc46",null);e.default=component.exports}}]);