(function(e){function n(n){for(var r,a,c=n[0],i=n[1],s=n[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(p.length)p.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-093b23fe":"5059f45d","chunk-36645526":"5b8388cd","chunk-3e49ea5f":"80282ffb","chunk-a06a09fc":"64540e6e"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-093b23fe":1,"chunk-36645526":1,"chunk-3e49ea5f":1,"chunk-a06a09fc":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-093b23fe":"245b30de","chunk-36645526":"53518508","chunk-3e49ea5f":"d40109be","chunk-a06a09fc":"31417d0d"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return n()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===r||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),t(u)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var p=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,t[1](p)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="vue-page-stack-example/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var p=0;p<s.length;p++)n(s[p]);var d=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},3504:function(e){e.exports=JSON.parse('{"language":"语言","quickStart":"开始体验","explain":"让Vue单页应用像原生App一样缓存UI页面","home":"主页","about":"关于","login":"登录","signup":"注册","placeholder":{"username":"请输入用户名","password":"请输入密码"},"detail":{"desc":"可以在下面的input中输入内容，然后push到下一页面","placeholder":"输入一些信息","push":{"same":"Push到下一页","login":"Push到登录","list":"Push到列表(可以缓存相同的页面)"},"replace":"Replace当前页","currentPageNumber":"当前页码","currentUserName":"当前用户"},"aboutPage":{"desc1":"Vue 单页应用导航管理器","desc2":"想法来源于实际业务需求，在进行公众号开发和Hybrid App开发的时候经常会有这样的需求，最后vue-stack-page诞生了","desc3":"欢迎使用，欢迎提PR，希望能帮到你"}}')},"49f8":function(e,n,t){var r={"./en.json":"edd4","./zh.json":"3504"};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="49f8"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=(t("8d0b"),t("0c10")),o=t.n(a),u=t("8cc1"),c=t.n(u),i=t("72b3"),s=t.n(i),l=t("294d"),p=t.n(l),d=t("0bb5"),f=t.n(d),h=t("b7ec"),m=t.n(h);t("955f"),t("692e"),t("54bb"),t("14bd"),t("082a"),t("5c85"),t("1012");r["a"].use(o.a),r["a"].use(c.a),r["a"].use(s.a),r["a"].use(p.a),r["a"].use(f.a),r["a"].use(m.a);var g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:e.transitionName}},[t("vue-page-stack",[t("router-view",{key:e.$route.fullPath,staticClass:"router-view-c"})],1)],1)],1)},b=[],v={name:"App",data:function(){return{transitionName:"forward"}},components:{},created:function(){},watch:{$route:function(e,n){"forward"===e.params["stack-key-dir"]?this.transitionName="forward":this.transitionName="back"}},methods:{}},k=v,y=(t("5c0b"),t("2877")),w=Object(y["a"])(k,g,b,!1,null,null,null),P=w.exports,x=(t("d3b7"),t("8c4f")),O=function(){return t.e("chunk-3e49ea5f").then(t.bind(null,"0a0d"))},N=function(){return t.e("chunk-36645526").then(t.bind(null,"9e87"))},S=function(){return t.e("chunk-093b23fe").then(t.bind(null,"ede4"))},j=function(){return t.e("chunk-a06a09fc").then(t.bind(null,"b3d7"))};r["a"].use(x["a"]);var A=[{path:"/",component:O},{path:"/home/:tab",component:j},{path:"/main-detail/:id",component:N},{path:"/login",component:S}],E=new x["a"]({mode:"history",base:"vue-page-stack-example/",routes:A});E.beforeEach((function(e,n,t){console.log("beforeEach"),t()}));var _=E,C=t("04e1"),L=t.n(C),T=(t("4160"),t("ac1f"),t("466d"),t("159b"),t("ddb0"),t("a925"));function U(){var e=t("49f8"),n={};return e.keys().forEach((function(t){var r=t.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var a=r[1];n[a]=e(t)}})),n}r["a"].use(T["a"]);var M=new T["a"]({locale:"zh",fallbackLocale:"zh",messages:U()});r["a"].config.productionTip=!1,r["a"].use(L.a,{router:_}),new r["a"]({router:_,i18n:M,render:function(e){return e(P)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),a=t.n(r);a.a},"9c0c":function(e,n,t){},edd4:function(e){e.exports=JSON.parse('{"language":"language","quickStart":"Quick Start","explain":"Caching Vue component instances without destroying them like native App in Vue SPA.","home":"Home","about":"About","login":"Login","signup":"Signup","placeholder":{"username":"please enter user name","password":"please enter password"},"detail":{"desc":"enter some text in the input，then push to next page","placeholder":"enter some text","push":{"same":"Push to next page","login":"Push to Login page","list":"Push to List (cached same page)"},"replace":"Replace current page","currentPageNumber":"current page number","currentUserName":"current user name"},"aboutPage":{"desc1":"Routing and navigation for your Vue SPA.","desc2":"The idea comes from actual business needs, there is often such a need when developing WeChat and Hybrid App, Finally vue-stack-page was born.","desc3":"Welcome to use, welcome to PR, hope to help you."}}')}});