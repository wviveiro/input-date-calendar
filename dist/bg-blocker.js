"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var obj=null,create=function(){null!==obj||(obj=document.createElement("div"),obj.style.position="absolute",obj.style.top="0px",obj.style.bottom="0px",obj.style.left="0px",obj.style.right="0px",obj.style.zIndex=1,document.body.append(obj))},remove=function(){obj&&(document.body.removeChild(obj),obj=null)},_cb=null,onClick=function(a){obj&&(null!==_cb&&obj.removeEventListener("click",_cb),_cb=a,obj.addEventListener("click",_cb))},bgBlocker={create:create,remove:remove,onClick:onClick},_default=bgBlocker;exports.default=_default;