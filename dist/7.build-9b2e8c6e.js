webpackJsonp([7],{103:function(e,t,n){var a=n(81);"string"==typeof a&&(a=[[e.i,a,""]]);n(4)(a,{});a.locals&&(e.exports=a.locals)},42:function(e,t,n){var a,o;n(103),a=n(69);var r=n(94);o=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(o=a=a["default"]),"function"==typeof o&&(o=o.options),o.name=o.name||"login",o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=a},69:function(e,t,n){"use strict";(function(e){t["default"]={data:function(){return{at:"",alert:{title:"",type:"",description:""},redirect:this.$route.query.redirect||""}},mounted:function(){},methods:{goBack:function(){var e=decodeURIComponent(this.$route.query.redirect);this.$router.replace(e)},login:function(){var t=this,n=this,a=n.at;return a?(this.setLoading(!0),void e.ajax({type:"POST",url:"https://cnodejs.org/api/v1/accesstoken",dataType:"json",data:{accesstoken:a}}).done(function(e){if(t.setLoading(!1),!e||!e.success)return void n.errorHandle();var o={id:e.id,loginname:e.loginname,avatar:e.avatar_url,accesstoken:a,score:null,message:null};Object.keys(o).forEach(function(e){localStorage[e]=o[e]}),t.$store.dispatch("setUserInfo",o).then(function(){n.$message({showClose:!0,message:"登录成功",type:"success",onClose:function(){var e=decodeURIComponent(n.$route.query.redirect||"/");n.$router.replace(e)}})})}).fail(function(e){t.setLoading(!1),n.errorHandle()})):void n.$message({showClose:!0,message:"token格式错误，可从官网个人设置页面获取",type:"error"})},errorHandle:function(){self.$message({showClose:!0,message:"登录出错，请稍候再试！",type:"warning"})},setLoading:function(e){this.$store.commit("setLoading",e)}}}}).call(t,n(2))},81:function(e,t,n){t=e.exports=n(3)(),t.push([e.i,"\n.input-area {\n  position: relative;\n  text-align: center;\n  width: 50%;\n  margin-left: 25%;\n}\n",""])},94:function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"container"}},[_h("main",{attrs:{id:"main"}},[_h("el-row",{attrs:{gutter:20}},[_h("el-col",{attrs:{span:18,id:"content",offset:3}},[_h("div",{staticClass:"grid-content bg-purple"},[_h("el-card",{staticClass:"box-card"},[_h("header",{slot:"header",staticClass:"clearfix",attrs:{id:"panel-header"}},[_m(0)])," ",_h("main",[_h("div",{staticClass:"input-area"},[_h("el-form",{ref:"form",attrs:{"label-width":"80px"},on:{submit:function(e){e.preventDefault(),login(e)}}},[_h("el-form-item",{attrs:{label:"token"}},[_h("el-input",{directives:[{name:"model",rawName:"v-model",value:at,expression:"at"}],attrs:{maxlength:36,minlength:36,placeholder:"请输入个人accesstoken..."},domProps:{value:at},on:{input:function(e){at=e}}})])," ",_h("el-form-item",[redirect?_h("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){goBack(e)}}},[_m(1),"返回上一页"]):_e()," ",_h("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){login(e)}}},["登录"])])])])])])])])])])])},staticRenderFns:[function(){with(this)return _h("span",["登录"])},function(){with(this)return _h("i",{staticClass:"el-icon-caret-left"})}]}}});