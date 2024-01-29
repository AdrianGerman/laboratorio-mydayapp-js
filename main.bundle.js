(()=>{"use strict";var n={402:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(81),i=t.n(o),r=t(645),a=t.n(r),l=t(667),c=t.n(l),d=new URL(t(808),t.b),s=new URL(t(36),t.b),p=a()(i());p.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;400;700&display=swap);"]);var u=c()(d),f=c()(s);p.push([n.id,'html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n  font-family: "Josefin Sans", sans-serif;\n  background: #0f172a;\n  color: #000000;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n}\n\n.container {\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n}\n\n.header {\n  background-image: linear-gradient(\n    224deg,\n    hsl(270deg 100% 15%) 2%,\n    hsl(280deg 100% 24%) 63%,\n    hsl(283deg 99% 29%) 78%,\n    hsl(284deg 98% 33%) 87%,\n    hsl(285deg 96% 38%) 92%,\n    hsl(284deg 93% 42%) 96%,\n    hsl(282deg 89% 46%) 98%,\n    hsl(277deg 81% 50%) 99%,\n    hsl(262deg 68% 53%) 100%,\n    hsl(230deg 53% 55%) 100%\n  );\n\n  padding-bottom: 4rem;\n}\n\n.hidden {\n  display: none;\n}\n\n.todoapp-wrapper {\n  position: relative;\n  top: -40px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.header h1 {\n  width: 100%;\n  font-size: 3.2rem;\n  font-weight: 700;\n  color: white;\n  padding-top: 2rem;\n  margin: 0;\n}\n\n.header h1 + p {\n  margin: 0;\n  color: white;\n  padding-bottom: 1.2rem;\n}\n\n.new-todo,\n.edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n  font-weight: 400;\n  font-style: none;\n  padding: 2rem;\n  height: 65px;\n  border: none;\n  background: white;\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n  border-radius: 8px;\n}\n\n.main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n\n.toggle-all {\n  width: 1px;\n  height: 1px;\n  border: none;\n  /* Mobile Safari */\n  opacity: 0;\n  position: absolute;\n  right: 100%;\n  bottom: 100%;\n}\n\n.toggle-all + label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45px;\n  height: 65px;\n  font-size: 0;\n  position: absolute;\n  top: -65px;\n  left: -0;\n}\n\n.toggle-all + label:before {\n  content: "❯";\n  display: inline-block;\n  font-size: 22px;\n  color: #949494;\n  padding: 10px 27px 10px 27px;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n.toggle-all:checked + label:before {\n  color: #484848;\n}\n\n.todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n  padding: 0rem 1rem;\n}\n\n.todo-list li:last-child {\n  border-bottom: none;\n}\n\n.todo-list li.editing {\n  border-bottom: none;\n  padding: 0;\n}\n\n.todo-list li.editing .edit {\n  display: block;\n  width: calc(100% - 4rem);\n  padding: 12px 16px;\n  margin: 0 0 0 4rem;\n}\n\n.todo-list li.editing .view {\n  display: none;\n}\n\n.todo-list li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn\'t support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none;\n  /* Mobile Safari */\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.todo-list li .toggle {\n  opacity: 0;\n}\n\n.todo-list li .toggle + label {\n  /*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n  background-image: url('+u+");\n  background-repeat: no-repeat;\n  background-position: center left;\n}\n\n.todo-list li .toggle:checked + label {\n  background-image: url("+f+');\n}\n\n.todo-list li label {\n  word-break: break-all;\n  padding: 15px 15px 15px 60px;\n  display: block;\n  line-height: 1.2;\n  transition: color 0.4s;\n  font-weight: 400;\n  color: #484848;\n}\n\n.todo-list li.completed label {\n  color: #949494;\n  text-decoration: line-through;\n}\n\n.todo-list li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #949494;\n  transition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover,\n.todo-list li .destroy:focus {\n  color: #c18585;\n}\n\n.todo-list li .destroy:after {\n  content: "×";\n  display: block;\n  height: 100%;\n  line-height: 1.1;\n}\n\n.todo-list li:hover .destroy {\n  display: block;\n}\n\n.todo-list li .edit {\n  display: none;\n}\n\n.todo-list li.editing:last-child {\n  margin-bottom: -1px;\n}\n\n.footer {\n  padding: 1rem 1.5rem;\n  height: 20px;\n  text-align: center;\n  font-size: 15px;\n  border-top: 1px solid #e6e6e6;\n}\n\n.todo-count {\n  float: left;\n  text-align: left;\n}\n\n.todo-count strong {\n  font-weight: 300;\n}\n\n.filters {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n\n.filters li {\n  display: inline;\n}\n\n.filters li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.filters li a:hover {\n  border-color: #6e49fe;\n}\n\n.filters li a.selected {\n  border-color: #4c33b1;\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n  float: right;\n  position: relative;\n  line-height: 19px;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.clear-completed:hover {\n  text-decoration: underline;\n}\n\n.info {\n  margin: 65px auto 0;\n  color: #4d4d4d;\n  font-size: 11px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  text-align: center;\n}\n\n.info p {\n  line-height: 1;\n}\n\n.info a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 400;\n}\n\n.info a:hover {\n  text-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan\'t use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .toggle-all,\n  .todo-list li .toggle {\n    background: none;\n  }\n\n  .todo-list li .toggle {\n    height: 40px;\n  }\n}\n\n@media (max-width: 430px) {\n  .footer {\n    height: 50px;\n  }\n\n  .filters {\n    bottom: 10px;\n  }\n}\n\n:focus {\n  outline: 0;\n}\n\n.inactive {\n  display: none;\n}\n\n@media screen and (max-width: 580px) {\n  .header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .header h1 + p {\n    padding-bottom: 2rem;\n  }\n\n  .new-todo,\n  .edit {\n    width: 90%;\n  }\n\n  .todoapp-wrapper {\n    margin: 10px;\n  }\n\n  .todo-list li {\n    font-size: 16px;\n  }\n\n  .footer {\n    font-size: 12px;\n  }\n}\n',""]);const g=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&a[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],l=0;l<n.length;l++){var c=n[l],d=o.base?c[0]+o.base:c[0],s=r[d]||0,p="".concat(d," ").concat(s);r[d]=s+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=i(f,o);o.byIndex=l,e.splice(l,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var l=t(r[a]);e[l].references--}for(var c=o(n,i),d=0;d<r.length;d++){var s=t(r[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},36:n=>{n.exports="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E"},808:n=>{n.exports="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E"}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),i=t.n(o),r=t(569),a=t.n(r),l=t(565),c=t.n(l),d=t(216),s=t.n(d),p=t(589),u=t.n(p),f=t(402),g={};function h(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?h(Object(t),!0).forEach((function(e){b(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function b(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}g.styleTagTransform=u(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=s(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var v=JSON.parse(localStorage.getItem("mydayapp-js"))||[],y=function(n,e){var t=v.findIndex((function(e){return e.id==n}));return v[t]=m(m({},v[t]),e),localStorage.setItem("mydayapp-js",JSON.stringify(v)),v[t]},x=function(n){var e=document.createElement(null),t=function(n){return"<li data-todo-id=".concat(n.id,' class="').concat(n.completed?"completed":"",'">\n    <div class="view">\n      <input class="toggle" type="checkbox" ').concat(n.completed?"checked":""," />\n      <label>").concat(n.title,'</label>\n      <button class="destroy"></button>\n    </div>\n    <input class="edit" value="').concat(n.text,'" />\n  </li>')}(n);e.innerHTML=t;var o=e.querySelector("input.toggle"),i=e.querySelector("label"),r=e.querySelector("input.edit"),a=e.querySelector("button.destroy");o.addEventListener("change",(function(e){return E(n.id,e.target.checked)})),i.addEventListener("dblclick",(function(){return D(n.id)})),r.addEventListener("focusout",(function(){return O(n.id)})),r.addEventListener("keydown",(function(e){"Enter"===e.key&&S(n.id,e.target.value),"Escape"===e.key&&r.blur()})),a.addEventListener("click",(function(){return k(n.id)})),document.querySelector(".todo-list").appendChild(e.firstElementChild);var l=document.querySelector(".todoapp-wrapper");l.classList.contains("inactive")&&l.classList.remove("inactive"),L()},w=function(n){document.querySelector(".todo-list").innerHTML="",n.forEach((function(n){return x(n)}))},k=function(n){var e,t;e=n,t=v.findIndex((function(n){return n.id==e})),v.splice(t,1),localStorage.setItem("mydayapp-js",JSON.stringify(v)),document.querySelector('li[data-todo-id="'.concat(n,'"]')).remove();var o=document.querySelector(".todoapp-wrapper");0==v.length&&o.classList.add("inactive"),L(),q()},S=function(n,e){var t=e.trim();if(t){y(n,{title:t});var o=document.querySelector('li[data-todo-id="'.concat(n,'"]')),i=o.querySelector("label"),r=o.querySelector("input.edit");i.innerHTML=t,r.blur()}},E=function(n,e){y(n,{completed:e});var t=document.querySelector('li[data-todo-id="'.concat(n,'"]'));e?t.classList.add("completed"):t.classList.remove("completed"),q(),L()},L=function(){var n,e=document.querySelector(".todo-count"),t=(n=v.filter((function(n){return!n.completed})).length,"<strong>".concat(n,"</strong> ").concat(1==n?"item":"items"," left"));e.innerHTML=t},D=function(n){var e=document.querySelector('li[data-todo-id="'.concat(n,'"]'));e.classList.add("editing");var t,o=e.querySelector("input.edit");o.value=(t=n,v.find((function(n){return n.id==t}))).title,o.focus()},O=function(n){document.querySelector('li[data-todo-id="'.concat(n,'"]')).classList.remove("editing")},q=function(){var n=document.querySelector(".clear-completed");0==v.filter((function(n){return n.completed})).length?n.classList.add("inactive"):n.classList.remove("inactive")},j=function(){var n=!1;Array.from(document.querySelectorAll(".filters a")).forEach((function(e){e.href==location.href?(n=!0,e.classList.add("selected")):e.classList.remove("selected")})),n||document.querySelector(".filters a[href='#/']").classList.add("selected")},z={"/":function(){return w(v)},"/all":function(){return w(v)},"/pending":function(){return w(v.filter((function(n){return!n.completed})))},"/completed":function(){return w(v.filter((function(n){return n.completed})))}},C=function(){var n=location.hash.slice(1).toLocaleLowerCase();(n&&z[n]?z[n]:z["/"])()};window.addEventListener("DOMContentLoaded",(function(){C(),j()})),window.addEventListener("hashchange",(function(){C(),j()})),document.querySelector(".new-todo").addEventListener("keydown",(function(n){"Enter"===n.key&&(function(n){var e=n.trim();if(e){var t=function(n){var e={id:Date.now(),title:n,completed:!1};return v.push(e),localStorage.setItem("mydayapp-js",JSON.stringify(v)),e}(e);x(t),q()}}(n.target.value),n.target.value="")})),document.querySelector(".clear-completed").addEventListener("click",(function(){v.filter((function(n){return n.completed})).forEach((function(n){return k(n.id)}))})),q()})()})();