webpackJsonp([12],{"+H76":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("c/Tr"),i=n.n(a),r={name:"NotFound",methods:{bubble:function(){var e,t,n,a,r=function(e){return e[Math.floor(Math.random()*e.length)]},o=[5,10,15,20],u=document.querySelector(".bubbling"),l=i()(Array(u.offsetWidth).keys());e=function(){var e=r(o),t=r(l),n=document.createElement("div");n.className="bubble",n.style.width=e+"px",n.style.height=e+"px",n.style.left=t+"px",u.append(n),n.animate([{bottom:"10px",opacity:1},{bottom:"180%",opacity:.6}],{fill:"forwards",duration:5e3}).onfinish=function(){return n.remove()}},t=300,n=(new Date).getTime(),(a={value:0}).value=requestAnimationFrame(function i(){a.value=requestAnimationFrame(i),(new Date).getTime()-n>=t&&(e(),n=(new Date).getTime())})}},mounted:function(){this.bubble()}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"err-page"},[n("div",{staticClass:"bubbling"},[e._v("页面走丢了（╯－＿－），访问其他页面试试吧(ง •̀_•́)ง")]),e._v(" "),n("el-button",{staticClass:"back",attrs:{type:"primary",plain:""},on:{click:function(t){e.$router.go(-1)}}},[e._v("返回上一级")])],1)},staticRenderFns:[]};var u=n("VU/8")(r,o,!1,function(e){n("Jyr8")},null,null);t.default=u.exports},Jyr8:function(e,t){}});
//# sourceMappingURL=12.77784a7a9d381033f7cf.js.map