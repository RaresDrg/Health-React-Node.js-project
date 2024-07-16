"use strict";(self.webpackChunkHealth_React_Node_js_project=self.webpackChunkHealth_React_Node_js_project||[]).push([[713],{4380:function(n,e,t){t.d(e,{Z:function(){return g}});var i,r=t(168),a=t(9256),o=t(5705),l=t(8007),d=t(218),s=t(4420),c=t(9273),p=t(2564),h=t(7689),f=t(2791),u=t(184),x=function(n){var e=n.className,t=n.openModal,i=(0,s.I0)(),r=(0,h.TH)();(0,f.useEffect)((function(){function n(){"number"===document.activeElement.type&&document.activeElement.blur()}return document.addEventListener("wheel",n),function(){document.removeEventListener("wheel",n)}}));var a=l.Ry({height:l.Rx().min(100,"Height must be between: 100 - 230 cm").max(230,"Height must be between: 100 - 230 cm").required("Required *").integer("Round the value to the nearest integer"),age:l.Rx().min(10,"Age must be between: 10 - 100 years").max(100,"Age must be between: 10 - 100 years").required("Required *").integer("Round the value to the nearest integer"),currentWeight:l.Rx().min(40,"Weight must be between: 40 - 160 kg").max(160,"Weight must be between: 40 - 160 kg").required("Required *").integer("Round the value to the nearest integer"),desiredWeight:l.Rx().min(40,"Weight must be between: 40 - 160 kg").max(160,"Weight must be between: 40 - 160 kg").required("Required *").integer("Round the value to the nearest integer"),bloodType:l.Z_().oneOf(["1","2","3","4"],"Blood type can be either: 1, 2, 3, or 4")});return(0,u.jsx)("div",{className:e,children:(0,u.jsx)(o.J9,{initialValues:{height:"",age:"",currentWeight:"",desiredWeight:"",bloodType:"1"},validationSchema:a,onSubmit:function(n,e){var a=e.setSubmitting,o=e.resetForm;a(!0),i((0,c.vO)(n)).unwrap().then((function(n){"/calculator"===r.pathname?i((0,c.nS)({dailyCalorieIntake:n.data.dailyCalorieIntake})):localStorage.setItem("dailyCalorieIntake",n.data.dailyCalorieIntake),window.scrollTo({top:0,behavior:"smooth"}),p.Am.success(n.message),o(),t()})).catch((function(n){var e,t,i=(null===n||void 0===n||null===(e=n.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Internal server error";p.Am.error(i)})).finally((function(){return a(!1)}))},children:function(n){var e=n.isSubmitting,t=n.errors;return(0,u.jsxs)(o.l0,{children:[(0,u.jsx)("h1",{children:"Calculate your daily calorie intake right now"}),(0,u.jsxs)("div",{className:"field ".concat(t.height?"onError":""),children:[(0,u.jsx)("label",{htmlFor:"heightInput",children:"Height *"}),(0,u.jsx)(o.gN,{id:"heightInput",type:"number",name:"height",placeholder:"Enter your height in cm"}),(0,u.jsx)("div",{className:"error",children:(0,u.jsx)(o.Bc,{name:"height",component:"span"})})]}),(0,u.jsxs)("div",{className:"field ".concat(t.age?"onError":""),children:[(0,u.jsx)("label",{htmlFor:"ageInput",children:"Age *"}),(0,u.jsx)(o.gN,{id:"ageInput",type:"number",name:"age",placeholder:"Enter your age"}),(0,u.jsx)("div",{className:"error",children:(0,u.jsx)(o.Bc,{name:"age",component:"span"})})]}),(0,u.jsxs)("div",{className:"field ".concat(t.currentWeight?"onError":""),children:[(0,u.jsx)("label",{htmlFor:"currentWeightInput",children:"Current weight *"}),(0,u.jsx)(o.gN,{id:"currentWeightInput",type:"number",name:"currentWeight",placeholder:"Enter your current weight"}),(0,u.jsx)("div",{className:"error",children:(0,u.jsx)(o.Bc,{name:"currentWeight",component:"span"})})]}),(0,u.jsxs)("div",{className:"field ".concat(t.desiredWeight?"onError":""),children:[(0,u.jsx)("label",{htmlFor:"desiredWeightInput",children:"Desired weight *"}),(0,u.jsx)(o.gN,{id:"desiredWeightInput",type:"number",name:"desiredWeight",placeholder:"Enter your desired weight"}),(0,u.jsx)("div",{className:"error",children:(0,u.jsx)(o.Bc,{name:"desiredWeight",component:"span"})})]}),(0,u.jsxs)("div",{className:"radioField }",children:[(0,u.jsx)("p",{children:"Blood type *"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"one",children:"1"}),(0,u.jsx)(o.gN,{id:"one",value:"1",type:"radio",name:"bloodType"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"two",children:"2"}),(0,u.jsx)(o.gN,{id:"two",value:"2",type:"radio",name:"bloodType"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"three",children:"3"}),(0,u.jsx)(o.gN,{id:"three",value:"3",type:"radio",name:"bloodType"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"four",children:"4"}),(0,u.jsx)(o.gN,{id:"four",value:"4",type:"radio",name:"bloodType"})]})]}),(0,u.jsx)(d.m3,{type:"submit",text:e?"Loading...":"Calculate",isDisabled:!!e})]})}})})},g=(0,a.ZP)(x)(i||(i=(0,r.Z)(['\n  & {\n    form {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n\n      & {\n        h1 {\n          color: #212121;\n          font-size: 18px;\n          line-height: 25.2px;\n          text-align: center;\n          margin-bottom: 30px;\n        }\n\n        div.field {\n          width: 100%;\n          height: 70px;\n          margin-bottom: 15px;\n\n          & {\n            label {\n              display: inline-block;\n              line-height: 17px;\n              letter-spacing: 0.04em;\n              transition: all 0.45s ease-in-out;\n              font-size: 14px;\n              font-weight: 400;\n              color: #9b9faa;\n\n              transform: translate(20px, 27px);\n              cursor: pointer;\n\n              & {\n                &:has(+ input:not(:placeholder-shown)),\n                &:has(+ input:focus) {\n                  transform: translate(0, 0);\n                  /* cursor: pointer; */\n                  font-size: 16px;\n                  font-weight: 700;\n                  color: black;\n                  transition: all 0.45s ease-in-out;\n                }\n              }\n            }\n\n            input {\n              width: 100%;\n              appearance: none;\n              border: none;\n              outline: none;\n              background-color: transparent;\n              border-bottom: 1px solid #e0e0e0;\n              font-size: 14px;\n              font-weight: 700;\n              line-height: 17px;\n              letter-spacing: 0.04em;\n              color: black;\n              margin-top: 5px;\n              padding: 5px 20px;\n              transition: all 0.45s ease-in-out;\n              color: #20b602;\n\n              & {\n                &:focus {\n                  border-bottom: 1px solid black;\n                  transition: all 0.45s ease-in-out;\n                }\n\n                &::placeholder {\n                  opacity: 0;\n                  transition: all 0.45s ease-in-out;\n                }\n\n                &:focus::placeholder {\n                  color: #9b9faa;\n                  opacity: 1;\n                  transition: all 0.45s ease-in-out;\n                }\n              }\n            }\n\n            div.error {\n              color: #ff003b;\n              font-style: italic;\n              font-size: 12px;\n              margin-top: 2px;\n              text-transform: lowercase;\n            }\n          }\n        }\n\n        div.field.onError {\n          & {\n            input {\n              color: #ff003b;\n            }\n          }\n        }\n\n        div.radioField {\n          margin-top: 5px;\n          margin-bottom: 40px;\n          display: flex;\n          justify-content: center;\n          flex-wrap: wrap;\n          row-gap: 10px;\n          column-gap: 25px;\n\n          & {\n            p {\n              flex: 1 0 100%;\n              text-align: center;\n              color: black;\n              font-size: 16px;\n              font-weight: 700;\n              line-height: 17px;\n              letter-spacing: 0.04em;\n            }\n\n            div {\n              display: flex;\n              align-items: center;\n              gap: 5px;\n\n              & {\n                label {\n                  color: #9b9faa;\n                  font-size: 14px;\n                  font-weight: 400;\n                  line-height: 17px;\n                  letter-spacing: 0.04em;\n                  cursor: pointer;\n                  transition: all 0.35s ease-in-out;\n\n                  &:has(+ input:checked) {\n                    color: #fc842d;\n                    font-size: 15px;\n                    font-weight: 700;\n                    transition: all 0.35s ease-in-out;\n                  }\n                }\n\n                input {\n                  appearance: none;\n                  outline: none;\n                  width: 20px;\n                  height: 20px;\n                  border-radius: 50%;\n                  background-color: #ffffff;\n                  border: 1px solid #e0e0e0;\n                  cursor: pointer;\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n\n                  &:hover:not(:checked)::after {\n                    content: "";\n                    display: block;\n                    width: 10px;\n                    height: 10px;\n                    background-color: #e0e0e0;\n                    border-radius: 50%;\n                  }\n\n                  &:checked::after {\n                    content: "";\n                    display: block;\n                    width: 10px;\n                    height: 10px;\n                    background-color: #fc842d;\n                    border-radius: 50%;\n                    transition: all 0.35s ease-in-out;\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  @media (min-width: 768px) {\n    & {\n      form {\n        flex-direction: row;\n        align-items: flex-start;\n        flex-wrap: wrap;\n        column-gap: 35px;\n        position: relative;\n\n        & {\n          h1 {\n            font-size: 34px;\n            line-height: 47.6px;\n            margin-bottom: 54px;\n            flex: 1 0 100%;\n            text-align: left;\n            max-width: 530px;\n          }\n\n          div.field {\n            width: 265px;\n            margin-bottom: 30px;\n\n            & {\n              label {\n                font-size: 17px;\n\n                & {\n                  &:has(+ input:not(:placeholder-shown)),\n                  &:has(+ input:focus) {\n                    font-size: 20px;\n                  }\n                }\n              }\n\n              input {\n                font-size: 17px;\n              }\n\n              div.error {\n                font-size: 14px;\n              }\n            }\n          }\n\n          div.radioField {\n            width: 265px;\n            row-gap: 20px;\n\n            & {\n              p {\n                text-align: left;\n                font-size: 19px;\n              }\n\n              div {\n                & {\n                  label {\n                    font-size: 17px;\n\n                    &:has(+ input:checked) {\n                      font-size: 18px;\n                    }\n                  }\n\n                  input {\n                    width: 26px;\n                    height: 26px;\n\n                    &:hover:not(:checked)::after {\n                      width: 13px;\n                      height: 13px;\n                    }\n\n                    &:checked::after {\n                      width: 13px;\n                      height: 13px;\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  @media (min-width: 1280px) {\n    & {\n      form {\n        width: 565px;\n\n        & {\n          div.radioField {\n            margin-left: auto;\n            margin-right: auto;\n\n            & {\n              p {\n                text-align: center;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'])))},218:function(n,e,t){t.d(e,{m3:function(){return h},Yo:function(){return f},IK:function(){return u}});var i,r,a,o,l=t(168),d=t(9256),s=t(184),c=function(n){var e=n.className,t=n.type,i=n.text,r=n.handlerFunction,a=n.isDisabled;return(0,s.jsx)("button",{onClick:r,type:t,className:e,disabled:a,children:i})},p=(0,d.ZP)(c)(i||(i=(0,l.Z)(['\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  border-radius: 30px;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  transition: all 0.35s ease-in-out;\n\n  &:before {\n    content: "";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 0%;\n    height: 100%;\n    transition: all 0.35s ease-in-out;\n    z-index: -1;\n  }\n\n  &:hover:not(:disabled) {\n    transition: all 0.35s ease-in-out;\n    &:before {\n      width: 100%;\n    }\n  }\n\n  &:disabled {\n    background-color: grey;\n    opacity: 0.5;\n    box-shadow: none;\n    cursor: not-allowed;\n    transition: all 0.35s ease-in-out;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 17px;\n  }\n']))),h=(0,d.ZP)(p)(r||(r=(0,l.Z)(["\n  padding: 13px 35px;\n  background-color: #fc842d;\n  color: #ffffff;\n  border: 1px solid #e0e0e0;\n  box-shadow: 0px 4px 10px 0px #fc842d80;\n\n  &:before {\n    background-color: #ffffff;\n  }\n\n  &:hover:not(:disabled) {\n    color: #fc842d;\n    border: 1px solid #fc842d;\n    scale: 1.07;\n  }\n\n  &:active:not(:disabled) {\n    scale: 1.1;\n    transition: all 0.35s ease-in-out;\n  }\n\n  @media (min-width: 768px) {\n    padding-top: 16px;\n    padding-bottom: 16px;\n    position: absolute;\n    bottom: -60px;\n    left: 0;\n    width: 190px;\n  }\n\n  @media (min-width: 1280px) {\n    transform: translateX(-50%);\n    left: 50%;\n  }\n"]))),f=(0,d.ZP)(p)(a||(a=(0,l.Z)(["\n  width: 182px;\n  height: 44px;\n  background-color: #fc842d;\n  color: #ffffff;\n  border: 1px solid black;\n\n  &:before {\n    background-color: rgba(33, 33, 33, 0.2);\n  }\n\n  &:hover:not(:disabled) {\n    color: blanchedalmond;\n    border: 2px solid #ffffff;\n    box-shadow: 0px 4px 10px 0px #fc842d80;\n    transform: scale(1.1);\n  }\n\n  &:active:not(:disabled) {\n    transform: scale(1.2);\n  }\n"]))),u=(0,d.ZP)(p)(o||(o=(0,l.Z)(["\n  width: 182px;\n  height: 44px;\n  background-color: #ffffff;\n  color: #fc842d;\n  border: 1px solid #fc842d;\n\n  &:before {\n    background-color: rgba(33, 33, 33, 0.3);\n  }\n\n  &:hover:not(:disabled) {\n    color: #ffffff;\n    border: 2px solid #ffffff;\n    box-shadow: 0px 4px 10px 0px #fc842d80;\n    transform: scale(1.1);\n  }\n\n  &:active:not(:disabled) {\n    transform: scale(1.2);\n  }\n"])))},3541:function(n,e,t){t.d(e,{Z:function(){return f}});var i=t.p+"static/media/banana-layer.2d4f2c16266d868a94f0.png",r=t.p+"static/media/leaves-layer.5893589dbf8ee6aea12d.png",a=t.p+"static/media/strawberry-layer.cd21ebf8180f96894f57.png";t(2791);var o=t.p+"static/media/vector-layer.252ca4cd3c12609ac3a6bce79989f953.svg",l=t.p+"static/media/banana-layer.938c4f16826fd4c82840.png",d=t.p+"static/media/leaves-layer.3fca79abdb58bbb85379.png",s=t.p+"static/media/strawberry-layer.24d57ef20c753947905b.png";var c=t.p+"static/media/vector-layer.472d8c07b9f1d601619d84cd5dc72f2b.svg",p=t.p+"static/media/side-bar-layer-tablet.2a9083b6eaed67c251a7.png",h=t.p+"static/media/side-bar-layer-desktop.4fd334b006c541e7827a.png";var f=function(n,e){if("desktop"===n){if("banana"===e)return i;if("leaves"===e)return r;if("strawberry"===e)return a;if("vector"===e)return o;if("sidebar"===e)return h}if("tablet"===n){if("banana"===e)return l;if("leaves"===e)return d;if("strawberry"===e)return s;if("vector"===e)return c;if("sidebar"===e)return p}}}}]);
//# sourceMappingURL=713.190c0ee4.chunk.js.map