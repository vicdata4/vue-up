(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3],{231:function(e,t,r){var content=r(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("56a8d5cc",content,!0,{sourceMap:!1})},233:function(e,t,r){"use strict";r(231)},234:function(e,t,r){var o=r(56)(!1);o.push([e.i,"form>*{display:block}.input-text{margin:20px 0}",""]),e.exports=o},240:function(e,t,r){var content=r(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("3f79e54e",content,!0,{sourceMap:!1})},258:function(e,t,r){"use strict";r.r(t);var o,n=r(4),c=(r(25),r(53),r(66)),l={data:function(){return{email:"",password:""}},methods:{submitForm:(o=Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:data={email:this.email,password:this.password},Object(c.emailValidator)(this.email)&&this.password?this.$emit("submit-form",data):console.log("Complete all fields");case 2:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})}},m=(r(233),r(13)),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input-text",attrs:{type:"text",name:"email",placeholder:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input-text",attrs:{type:"password",name:"password",placeholder:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),r("button",{attrs:{type:"submit"}},[e._v("Login")])])}),[],!1,null,null,null);t.default=component.exports},266:function(e,t,r){"use strict";r(240)},267:function(e,t,r){var o=r(56)(!1);o.push([e.i,".login-case[data-v-1e212c10]{margin-bottom:20px}",""]),e.exports=o},283:function(e,t,r){"use strict";r.r(t);r(35),r(21),r(34),r(42),r(26),r(43);var o=r(17),n=r(4),c=(r(25),r(24)),l=r(53);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={middleware:"login",methods:{submitForm:function(data){return Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.default)(l.http.post(data),"/login");case 2:(t=e.sent).error?alert("Invalid email or password"):(document.cookie="XSRF-TOKEN=".concat(t.accessToken),window.location.href="/app");case 4:case"end":return e.stop()}}),e)})))()}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)({isLogged:"isLogged"}))},f=(r(266),r(13)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.isLogged?e._e():r("LoginForm",{ref:"loginForm",staticClass:"login-case",on:{"submit-form":e.submitForm}})],1)}),[],!1,null,"1e212c10",null);t.default=component.exports;installComponents(component,{LoginForm:r(258).default})}}]);