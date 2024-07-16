"use strict";(self.webpackChunkHealth_React_Node_js_project=self.webpackChunkHealth_React_Node_js_project||[]).push([[973],{218:function(n,e,a){a.d(e,{m3:function(){return x},Yo:function(){return m},IK:function(){return f}});var t,i,o,r,s=a(168),l=a(9256),d=a(184),p=function(n){var e=n.className,a=n.type,t=n.text,i=n.handlerFunction,o=n.isDisabled;return(0,d.jsx)("button",{onClick:i,type:a,className:e,disabled:o,children:t})},c=(0,l.ZP)(p)(t||(t=(0,s.Z)(['\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  border-radius: 30px;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  transition: all 0.35s ease-in-out;\n\n  &:before {\n    content: "";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 0%;\n    height: 100%;\n    transition: all 0.35s ease-in-out;\n    z-index: -1;\n  }\n\n  &:hover:not(:disabled) {\n    transition: all 0.35s ease-in-out;\n    &:before {\n      width: 100%;\n    }\n  }\n\n  &:disabled {\n    background-color: grey;\n    opacity: 0.5;\n    box-shadow: none;\n    cursor: not-allowed;\n    transition: all 0.35s ease-in-out;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 17px;\n  }\n']))),x=(0,l.ZP)(c)(i||(i=(0,s.Z)(["\n  padding: 13px 35px;\n  background-color: #fc842d;\n  color: #ffffff;\n  border: 1px solid #e0e0e0;\n  box-shadow: 0px 4px 10px 0px #fc842d80;\n\n  &:before {\n    background-color: #ffffff;\n  }\n\n  &:hover:not(:disabled) {\n    color: #fc842d;\n    border: 1px solid #fc842d;\n    scale: 1.07;\n  }\n\n  &:active:not(:disabled) {\n    scale: 1.1;\n    transition: all 0.35s ease-in-out;\n  }\n\n  @media (min-width: 768px) {\n    padding-top: 16px;\n    padding-bottom: 16px;\n    position: absolute;\n    bottom: -60px;\n    left: 0;\n    width: 190px;\n  }\n\n  @media (min-width: 1280px) {\n    transform: translateX(-50%);\n    left: 50%;\n  }\n"]))),m=(0,l.ZP)(c)(o||(o=(0,s.Z)(["\n  width: 182px;\n  height: 44px;\n  background-color: #fc842d;\n  color: #ffffff;\n  border: 1px solid black;\n\n  &:before {\n    background-color: rgba(33, 33, 33, 0.2);\n  }\n\n  &:hover:not(:disabled) {\n    color: blanchedalmond;\n    border: 2px solid #ffffff;\n    box-shadow: 0px 4px 10px 0px #fc842d80;\n    transform: scale(1.1);\n  }\n\n  &:active:not(:disabled) {\n    transform: scale(1.2);\n  }\n"]))),f=(0,l.ZP)(c)(r||(r=(0,s.Z)(["\n  width: 182px;\n  height: 44px;\n  background-color: #ffffff;\n  color: #fc842d;\n  border: 1px solid #fc842d;\n\n  &:before {\n    background-color: rgba(33, 33, 33, 0.3);\n  }\n\n  &:hover:not(:disabled) {\n    color: #ffffff;\n    border: 2px solid #ffffff;\n    box-shadow: 0px 4px 10px 0px #fc842d80;\n    transform: scale(1.1);\n  }\n\n  &:active:not(:disabled) {\n    transform: scale(1.2);\n  }\n"])))},8060:function(n,e,a){a.r(e),a.d(e,{default:function(){return Z}});var t,i,o=a(168),r=a(9256),s=a(7046),l=a(9439),d=a(2791),p=a(7689),c=a(5705),x=a(8007),m=a(99),f=a(2733),u=a(4420),b=a(9273),h=a(2564),k=a(218),g=a(184),v=function(n){var e=n.className,a=(0,p.s0)(),t=(0,u.I0)(),i=(0,d.useState)(!1),o=(0,l.Z)(i,2),r=o[0],s=o[1],v=x.Ry({email:x.Z_().matches(/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,{message:"Invalid email address"}).required("Required *"),password:x.Z_().min(8,"Password must be at least 8 characters").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,{message:"must include an uppercase, a lowercase and a digit"}).required("Required *")});return(0,g.jsx)("div",{className:e,children:(0,g.jsx)(c.J9,{initialValues:{email:"",password:""},validationSchema:v,onSubmit:function(n,e){var i=n.email,o=n.password,r=e.setSubmitting,s=e.setFieldError,l=e.resetForm;r(!0),t((0,b.x4)({email:i,password:o})).unwrap().then((function(n){h.Am.success(n.message),l(),a("/diary"),window.scrollTo({top:0,behavior:"smooth"})})).catch((function(n){var e,a,t,i,o,r,l=(null===n||void 0===n||null===(e=n.response)||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message)||"Internal server error";h.Am.error(l),"email is wrong"===(null===n||void 0===n||null===(t=n.response)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.message)&&(s("email","Email is wrong"),document.querySelector("form").scrollIntoView()),"password is wrong"===(null===n||void 0===n||null===(o=n.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.message)&&(s("password","Password is wrong"),document.querySelector("form").scrollIntoView())})).finally((function(){return r(!1)}))},children:function(n){var e=n.isSubmitting,t=n.errors,i=n.values;return(0,g.jsxs)(c.l0,{autoComplete:"off",children:[(0,g.jsx)("h1",{children:"Log in"}),(0,g.jsxs)("div",{className:"field ".concat(t.email?"onError":""),children:[(0,g.jsx)("label",{htmlFor:"emailInput",children:"Email *"}),(0,g.jsx)(c.gN,{autoComplete:"off",id:"emailInput",type:"email",name:"email",placeholder:"Please, enter your email !"}),(0,g.jsx)("div",{className:"error",children:(0,g.jsx)(c.Bc,{name:"email",component:"span"})})]}),(0,g.jsxs)("div",{className:"field ".concat(t.password?"onError":""),children:[(0,g.jsx)("label",{htmlFor:"passwordInput",children:"Password *"}),(0,g.jsx)(c.gN,{autoComplete:"off",id:"passwordInput",type:r?"text":"password",name:"password",placeholder:"Please, enter your password !"}),(0,g.jsx)("div",{className:"error",children:(0,g.jsx)(c.Bc,{name:"password",component:"span"})}),i.password&&(0,g.jsx)(m.Z,{animation:f.Z,onClick:function(){return s((function(n){return!n}))},size:30,className:"showPassword"})]}),(0,g.jsxs)("div",{className:"buttonWrapper",children:[(0,g.jsx)(k.Yo,{type:"submit",text:e?"Loading...":"Log in",isDisabled:!!e}),(0,g.jsx)(k.IK,{type:"button",text:"Register",handlerFunction:function(){window.scrollTo({top:0,behavior:"smooth"}),a("/register")}})]})]})}})})},w=(0,r.ZP)(v)(t||(t=(0,o.Z)(["\n  & {\n    form {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n\n      & {\n        h1 {\n          text-transform: uppercase;\n          color: #fc842d;\n          font-size: 18px;\n          line-height: 25.2px;\n          text-align: center;\n          letter-spacing: 0.04em;\n          margin-bottom: 30px;\n        }\n\n        div.field {\n          width: 100%;\n          height: 70px;\n          margin-bottom: 15px;\n          position: relative;\n\n          & {\n            label {\n              display: inline-block;\n              line-height: 17px;\n              letter-spacing: 0.04em;\n              transition: all 0.45s ease-in-out;\n              font-size: 14px;\n              font-weight: 400;\n              color: #9b9faa;\n\n              transform: translate(20px, 27px);\n              cursor: pointer;\n\n              & {\n                &:has(+ input:not(:placeholder-shown)),\n                &:has(+ input:focus) {\n                  transform: translate(0, 0);\n                  /* cursor: pointer; */\n                  font-size: 16px;\n                  font-weight: 700;\n                  color: black;\n                  transition: all 0.45s ease-in-out;\n                }\n              }\n            }\n\n            input {\n              width: 100%;\n              appearance: none;\n              border: none;\n              outline: none;\n              background-color: transparent;\n              border-bottom: 1px solid #e0e0e0;\n              font-size: 14px;\n              font-weight: 700;\n              line-height: 17px;\n              letter-spacing: 0.04em;\n              color: black;\n              margin-top: 5px;\n              padding: 5px 40px 5px 20px;\n              transition: all 0.45s ease-in-out;\n              color: #20b602;\n\n              & {\n                &:focus {\n                  border-bottom: 1px solid black;\n                  transition: all 0.45s ease-in-out;\n                }\n\n                &::placeholder {\n                  opacity: 0;\n                  transition: all 0.45s ease-in-out;\n                }\n\n                &:focus::placeholder {\n                  color: #9b9faa;\n                  opacity: 1;\n                  transition: all 0.45s ease-in-out;\n                }\n              }\n            }\n\n            div.error {\n              color: #ff003b;\n              font-style: italic;\n              font-size: 12px;\n              margin-top: 2px;\n              text-transform: lowercase;\n            }\n\n            div.showPassword {\n              position: absolute;\n              bottom: 20px;\n              right: 0;\n            }\n          }\n        }\n\n        div.field.onError {\n          & {\n            input {\n              color: #ff003b;\n            }\n          }\n        }\n\n        div.buttonWrapper {\n          display: flex;\n          flex-direction: column;\n          gap: 20px;\n          margin-top: 40px;\n        }\n      }\n    }\n  }\n\n  @media (min-width: 768px) {\n    & {\n      form {\n        width: 396px;\n\n        & {\n          h1 {\n            font-size: 34px;\n            line-height: 47.6px;\n            margin-bottom: 35px;\n          }\n\n          div.field {\n            margin-bottom: 35px;\n\n            & {\n              label {\n                font-size: 17px;\n\n                & {\n                  &:has(+ input:not(:placeholder-shown)),\n                  &:has(+ input:focus) {\n                    font-size: 20px;\n                  }\n                }\n              }\n\n              input {\n                font-size: 17px;\n              }\n\n              div.error {\n                font-size: 14px;\n              }\n            }\n          }\n\n          div.buttonWrapper {\n            margin-top: 15px;\n            flex-direction: row;\n          }\n        }\n      }\n    }\n  }\n"]))),y=function(n){var e=n.className;return(0,g.jsx)("section",{className:e,children:(0,g.jsx)(s.Z,{children:(0,g.jsx)(w,{})})})},j=a(3541),Z=(0,r.ZP)(y)(i||(i=(0,o.Z)(["\n  padding-top: 50px;\n  padding-bottom: 120px;\n\n  @media (min-width: 768px) {\n    padding-top: 100px;\n    padding-bottom: 400px;\n    width: 768px;\n    margin: 0 auto;\n    background-image: url(","),\n      url(","),\n      url(","),\n      url(",");\n    background-repeat: no-repeat;\n    background-position: bottom right, bottom left, bottom 170px right 5px,\n      bottom right;\n  }\n\n  @media (min-width: 1280px) {\n    width: 1280px;\n    position: relative;\n    padding-bottom: 340px;\n    padding-top: calc(45px + 85px);\n    background-image: url(","),\n      url(","),\n      url(","),\n      url(",");\n    background-repeat: no-repeat;\n    background-position: top right, top -30px left 305px,\n      bottom 40px right -35px, bottom right;\n  }\n"])),(0,j.Z)("tablet","banana"),(0,j.Z)("tablet","leaves"),(0,j.Z)("tablet","strawberry"),(0,j.Z)("tablet","vector"),(0,j.Z)("desktop","banana"),(0,j.Z)("desktop","leaves"),(0,j.Z)("desktop","strawberry"),(0,j.Z)("desktop","vector"))},3541:function(n,e,a){a.d(e,{Z:function(){return m}});var t=a.p+"static/media/banana-layer.2d4f2c16266d868a94f0.png",i=a.p+"static/media/leaves-layer.5893589dbf8ee6aea12d.png",o=a.p+"static/media/strawberry-layer.cd21ebf8180f96894f57.png";a(2791);var r=a.p+"static/media/vector-layer.252ca4cd3c12609ac3a6bce79989f953.svg",s=a.p+"static/media/banana-layer.938c4f16826fd4c82840.png",l=a.p+"static/media/leaves-layer.3fca79abdb58bbb85379.png",d=a.p+"static/media/strawberry-layer.24d57ef20c753947905b.png";var p=a.p+"static/media/vector-layer.472d8c07b9f1d601619d84cd5dc72f2b.svg",c=a.p+"static/media/side-bar-layer-tablet.2a9083b6eaed67c251a7.png",x=a.p+"static/media/side-bar-layer-desktop.4fd334b006c541e7827a.png";var m=function(n,e){if("desktop"===n){if("banana"===e)return t;if("leaves"===e)return i;if("strawberry"===e)return o;if("vector"===e)return r;if("sidebar"===e)return x}if("tablet"===n){if("banana"===e)return s;if("leaves"===e)return l;if("strawberry"===e)return d;if("vector"===e)return p;if("sidebar"===e)return c}}},2733:function(n,e,a){var t;e.Z=void 0;var i={animationData:((t=a(9432))&&t.__esModule?t:{default:t}).default,animationKey:"visibility"};e.Z=i},9432:function(n){n.exports=JSON.parse('{"v":"5.6.5","fr":30,"ip":0,"op":25,"w":32,"h":32,"nm":"visibility","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"cross line","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[16,16,0],"ix":2},"a":{"a":0,"k":[12,12,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-10,-9.75],[10,9.75]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[12,11.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-10,-9.75],[10,9.75]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[13,10.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.223],"y":[1]},"o":{"x":[0.588],"y":[0]},"t":0,"s":[0]},{"t":25,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[12.5,11.25],"ix":2},"a":{"a":0,"k":[12.5,11.25],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Line","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":25,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"eye","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[16,16,0],"ix":2},"a":{"a":0,"k":[12,12,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.657,0],[0,-1.657],[1.657,0],[0,1.657]],"o":[[1.657,0],[0,1.657],[-1.657,0],[0,-1.657]],"v":[[0,-3],[3,0],[0,3],[-3,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-7,0],[0,0],[7,0]],"o":[[0,0],[7,0],[0,0],[-7,0]],"v":[[-11,0],[0,-8],[11,0],[0,8]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":25,"st":0,"bm":0}],"markers":[]}')}}]);
//# sourceMappingURL=973.9dd2ab2a.chunk.js.map