(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{258:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("32208169",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n(258)},281:function(t,e,n){var r=n(56)(!1);r.push([t.i,"textarea[data-v-6ac2ac83]{width:100%;height:400px;resize:none}table[data-v-6ac2ac83]{font-family:arial,sans-serif;border-collapse:collapse;width:100%}td[data-v-6ac2ac83],th[data-v-6ac2ac83]{border:1px solid #ddd;text-align:left;padding:8px}tr[data-v-6ac2ac83]:nth-child(2n){background-color:#ddd}",""]),t.exports=r},293:function(t,e,n){"use strict";n.r(e);var r=n(4),c=(n(25),n(66)),l={data:function(){return{list:[],columns:["author","title","genre","price","publish_date","description"],xmlString:""}},methods:{},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.getMLDocument)("/books.xml");case 2:n=e.sent,t.xmlString=n.xmlString,t.list=n.xmlList;case 5:case"end":return e.stop()}}),e)})))()}},o=(n(280),n(13)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h4",{staticClass:"title"},[t._v("XML File")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.xmlString,expression:"xmlString"}],attrs:{readonly:""},domProps:{value:t.xmlString},on:{input:function(e){e.target.composing||(t.xmlString=e.target.value)}}}),t._v(" "),n("h4",{staticClass:"title"},[t._v("Table representation")]),t._v(" "),n("table",[n("tr",t._l(t.columns,(function(e){return n("th",{key:e},[t._v("\n        "+t._s(e)+"\n      ")])})),0),t._v(" "),t._l(t.list,(function(element){return n("tr",{key:element.author},t._l(t.columns,(function(e){return n("td",{key:e},[t._v("\n        "+t._s(element.querySelector(e).innerHTML)+"\n      ")])})),0)}))],2)])}),[],!1,null,"6ac2ac83",null);e.default=component.exports}}]);