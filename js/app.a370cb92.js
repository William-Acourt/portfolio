(function(t){function e(e){for(var i,n,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)n=s[u],a[n]&&d.push(a[n][0]),a[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],i=!0,n=1;n<o.length;n++){var s=o[n];0!==a[s]&&(i=!1)}i&&(r.splice(e--,1),t=l(l.s=o[0]))}return t}var i={},n={app:0},a={app:0},r=[];function s(t){return l.p+"js/"+({article:"article",contact:"contact",robots:"robots"}[t]||t)+"."+{article:"2946d70d",contact:"6541b58f",robots:"96da03be"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(t){var e=[],o={article:1,contact:1,robots:1};n[t]?e.push(n[t]):0!==n[t]&&o[t]&&e.push(n[t]=new Promise(function(e,o){for(var i="css/"+({article:"article",contact:"contact",robots:"robots"}[t]||t)+"."+{article:"ad41b3ff",contact:"678b4303",robots:"56f99fd7"}[t]+".css",n=l.p+i,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var s=a[r],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===i||c===n))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){s=u[r],c=s.getAttribute("data-href");if(c===i||c===n)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||n,a=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");a.request=i,o(a)},d.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){n[t]=0}));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise(function(e,o){i=a[t]=[e,o]});e.push(i[2]=r);var c,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(t),c=function(e){d.onerror=d.onload=null,clearTimeout(h);var o=a[t];if(0!==o){if(o){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+n+")");r.type=i,r.request=n,o[1](r)}a[t]=void 0}};var h=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,u.appendChild(d)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(o,i,function(e){return t[e]}.bind(null,i));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/portfolio/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var h=u;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1b4b":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[t._v(t._s(t.text)),t.cross?o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","times"]}}):t._e()],1)},n=[],a=(o("cadf"),o("551c"),{props:{text:String,cross:Boolean}}),r=a,s=(o("d92f"),o("2877")),l=Object(s["a"])(r,i,n,!1,null,"61d4cba8",null);e["a"]=l.exports},"26e5":function(t,e,o){"use strict";var i=o("905d"),n=o.n(i);n.a},"27dc":function(t,e,o){},"2eb5":function(t,e,o){},"2f2b":function(t,e,o){"use strict";var i=o("7796"),n=o.n(i);n.a},4597:function(t,e,o){t.exports=o.p+"img/logo-small.116f8a26.svg"},"4a5a":function(t,e,o){},"4ab4":function(t,e,o){},"527f":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c");var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"hammer",rawName:"v-hammer:swipe.left",value:t.toggleSidebar,expression:"toggleSidebar",arg:"swipe",modifiers:{left:!0}}],staticStyle:{"touch-action":"pan-y"},attrs:{id:"app"}},[o("page-header"),o("div",{staticClass:"container"},[o("router-view")],1)],1)},a=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("nav-bar",{staticClass:"main-nav"}),o("mobile-nav-bar",{staticClass:"mobile-nav"})],1)},s=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("nav",{staticClass:"main-nav pure-menu pure-menu-horizontal nav"},[o("div",{staticClass:"flex-item"},[o("router-link",{staticClass:"white",attrs:{id:"menuLink1",to:"/"}},[t._v("\n        William A'court\n      ")])],1),o("div",{staticClass:"flex-item"})])])},c=[],u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("nav",{staticClass:"main-nav pure-menu pure-menu-horizontal nav"},[o("div",{staticClass:"flex-item"},[o("router-link",{staticClass:"white",attrs:{id:"menuLink1",to:"/"}},[t._v("\n        William A'court\n      ")])],1),o("div",{staticClass:"flex-item"})])])},d=[],h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"dropdowns"},t._l(t.robotArticles,function(e,i){return o("li",{key:i,staticClass:"pure-menu-item"},[o("router-link",{staticClass:"pure-menu-link dropdown",attrs:{to:t.getArticleURL(e)}},[t._v(t._s(e.title))])],1)}),0)},f=[],m=(o("6762"),o("2fdb"),o("c93e")),p=o("d836"),b={methods:{getArticleURL:function(t){return t.slug?"/article/".concat(t.slug):"/article/".concat(t.index)}},computed:{robotArticles:function(){return p["a"].map(function(t,e){return Object(m["a"])({},t,{index:e})}).filter(function(t){return t.tags.includes("Robots")})}}},g=b,w=o("2877"),v=Object(w["a"])(g,h,f,!1,null,null,null),y=v.exports,C={components:{MobileNavBar:k,RobotDropdown:y}},T=C,x=(o("80b8"),Object(w["a"])(T,u,d,!1,null,"80131286",null)),k=x.exports,_={components:{MobileNavBar:k,RobotDropdown:y}},R=_,E=(o("922d"),Object(w["a"])(R,l,c,!1,null,"6f186a5a",null)),j=E.exports,O={components:{NavBar:j,MobileNavBar:k}},S=O,L=(o("2f2b"),Object(w["a"])(S,r,s,!1,null,"74600efa",null)),M=L.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("desktop-footer",{staticClass:"main-footer"}),o("mobile-footer",{staticClass:"mobile-footer"})],1)},P=[],V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"foot"},[t._m(0),o("div",{staticClass:"flex-item"},[o("span",{staticClass:"copy"},[t._v("Resolution Robotics - "+t._s(t.year))])]),o("div",{staticClass:"flex-item"},[o("span",{staticClass:"social"},[o("a",[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","envelope"]}})],1),o("a",[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","discord"]}})],1),o("a",{attrs:{href:"https://www.youtube.com/channel/UCiyNe-Cq0SIEDTA3PNi0hBg",target:"blank"}},[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","youtube"]}})],1),o("a",[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","instagram"]}})],1)])])])},A=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex-item"},[i("span",{staticClass:"logo"},[i("img",{attrs:{alt:"Small Logo",src:o("4597")}})])])}],F={computed:{year:function(){return(new Date).getFullYear()}}},q=F,W=(o("e216"),Object(w["a"])(q,V,A,!1,null,"35f1b7a1",null)),D=W.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"foot"},[o("div",{staticClass:"flex-item"},[o("span",{staticClass:"social"},[o("a",[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","envelope"]}})],1),o("a",[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","discord"]}})],1),o("a",{attrs:{href:"https://www.youtube.com/channel/UCiyNe-Cq0SIEDTA3PNi0hBg",target:"blank"}},[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","youtube"]}})],1),o("a",[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","instagram"]}})],1)])])])},X=[],$=(o("6c5f"),{}),Q=Object(w["a"])($,B,X,!1,null,"f5ae4c02",null),H=Q.exports,I={components:{DesktopFooter:D,MobileFooter:H}},G=I,U=(o("26e5"),Object(w["a"])(G,N,P,!1,null,"3c770e92",null)),Z=U.exports,J=new i["default"],z=J,Y={name:"app",components:{PageHeader:M,PageFooter:Z},methods:{toggleSidebar:function(){z.$emit("mobile-navbar-toggle")}}},K=Y,tt=(o("5c0b"),Object(w["a"])(K,n,a,!1,null,null,null)),et=tt.exports,ot=o("8c4f"),it=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("h1",[t._v("Portfolio")]),o("input",{staticClass:"search",attrs:{placeholder:"Search Projects..."},domProps:{value:t.textFilter},on:{input:t.updateTextFilterQuery}}),t.tagFilters.length>0?o("div",[o("p",{staticClass:"filterText"},[t._v("Tag filters (click to remove):")]),o("ul",{staticClass:"tagFilters"},t._l(t.tagFilters,function(e,i){return o("li",{key:i,on:{click:function(o){return t.removeTagFilter(e)}}},[o("tag-pill",{attrs:{text:e,cross:!0}})],1)}),0)]):t._e(),o("transition-group",{attrs:{name:"fade"}},t._l(t.filteredArticles,function(e,i){return o("article-list-item",{key:i,attrs:{article:e,index:i},on:{"tag-click":t.addTagFilter}})}),1)],1)},nt=[],at=(o("3b2b"),o("a481"),o("ac6a"),o("28a5"),o("55dd"),o("8afe")),rt=o("ced1"),st=o("1b4b"),lt={components:{ArticleListItem:rt["a"],TagPill:st["a"]},data:function(){return{articles:p["a"]}},methods:{pushNewTagsToQuery:function(t){this.$router.push({query:Object(m["a"])({},this.$route.query,{tags:t&&t.length>0?t.join(","):void 0})})},updateTextFilterQuery:function(t){var e=t.target.value;this.$router.push({query:Object(m["a"])({},this.$route.query,{filter:e||void 0})})},addTagFilter:function(t){if(!this.tagFilters.includes(t)){var e=Object(at["a"])(this.tagFilters).concat([t]);this.pushNewTagsToQuery(e)}},removeTagFilter:function(t){var e=this.tagFilters.filter(function(e){return e!==t});this.pushNewTagsToQuery(e)},getArticleURL:function(t){return"/article/".concat(t)}},computed:{filteredArticles:function(){var t=this.textFilter,e=this.tagFilters,o=e.map(function(t){return t.toLowerCase()});function i(e){var o=[],i=["title","subtitle"];function n(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length;function a(t){return t.index<i&&t.index+t.length>i||t.index>=i&&t.index<=i+n}o.filter(function(e){return e.prop===t}).some(a)||o.push({prop:t,keyword:e,index:i,length:n})}var a=t.toLowerCase().split(" ").filter(function(t){return!!t&&" "!==t}).sort(function(t,e){return e.length-t.length});return t?(i.forEach(function(t){var o=e[t];a.forEach(function(e){for(var i=e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&"),a=new RegExp(i,"gi"),r=[],s=a.exec(o);null!==s;s=a.exec(o))r.push(a.lastIndex);r.forEach(function(o){return n(t,e,o-e.length)})})}),{matches:o,article:e}):{matches:o,article:e}}return this.articles.filter(function(t){return 0===e.length||o.every(function(e){return t.tags.map(function(t){return t.toLowerCase()}).includes(e)})}).map(i).filter(function(e){return!t||e.matches.length>0}).sort(function(t,e){return e.matches.length-t.matches.length}).map(function(t){return Object(m["a"])({},t.article,{matches:t.matches})})},textFilter:function(){return this.$route.query.filter||""},tagFilters:function(){var t=this.$route.query.tags;return t?t.split(","):[]}}},ct=lt,ut=(o("87a6"),Object(w["a"])(ct,it,nt,!1,null,"dacd3aa2",null)),dt=ut.exports;i["default"].use(ot["a"]);var ht=new ot["a"]({base:"/portfolio",mode:"hash",routes:[{path:"/",name:"home",component:dt},{path:"/articles?tags=Robots",name:"robots",component:function(){return o.e("robots").then(o.bind(null,"291b"))},alias:"/robots"},{path:"/contact",name:"contact",component:function(){return o.e("contact").then(o.bind(null,"b8fa"))}},{path:"/profiles",name:"profiles",component:function(){return o.e("contact").then(o.bind(null,"88e6"))}},{path:"/articles",name:"articles",component:function(){return o.e("robots").then(o.bind(null,"291b"))}},{path:"/article/:id",name:"article",component:function(){return o.e("article").then(o.bind(null,"3ad6"))}},{path:"/404",component:function(){return o.e("article").then(o.bind(null,"8cdb"))}},{path:"*",redirect:"/404"}]}),ft=o("6591"),mt=o("f13c"),pt=o.n(mt),bt=o("ecee"),gt=o("ad3d"),wt=o("c074"),vt=o("b702"),yt=o("f2d1"),Ct=(o("27dc"),[wt["b"],wt["a"],vt["a"],yt["a"],yt["c"],yt["b"],wt["c"],wt["d"]]);bt["c"].add.apply(bt["c"],Ct),ft["VueHammer"].config.swipe={threshold:20,velocity:.5},i["default"].use(ft["VueHammer"]),i["default"].component("font-awesome-icon",gt["a"]),i["default"].use(pt.a),i["default"].config.productionTip=!1,new i["default"]({router:ht,render:function(t){return t(et)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var i=o("63fb"),n=o.n(i);n.a},"63fb":function(t,e,o){},"6c5f":function(t,e,o){"use strict";var i=o("6f2e"),n=o.n(i);n.a},"6f2e":function(t,e,o){},7077:function(t,e,o){},7796:function(t,e,o){},"80b8":function(t,e,o){"use strict";var i=o("4a5a"),n=o.n(i);n.a},"86f3":function(t,e,o){"use strict";var i=o("527f"),n=o.n(i);n.a},"87a6":function(t,e,o){"use strict";var i=o("7077"),n=o.n(i);n.a},"905d":function(t,e,o){},"922d":function(t,e,o){"use strict";var i=o("9e52"),n=o.n(i);n.a},"9e52":function(t,e,o){},ced1:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"article-preview"},[o("ul",t._l(t.article.tags,function(e,i){return o("li",{key:i,on:{click:function(o){return t.onTagClick(e)}}},[o("tag-pill",{attrs:{text:e}})],1)}),0),o("h3",[o("router-link",{attrs:{to:t.path},domProps:{innerHTML:t._s(t.title)}})],1),o("h4",{domProps:{innerHTML:t._s(t.subtitle)}}),o("p",[t._v(t._s(t.bodyPreview))])])},n=[],a=(o("ac6a"),o("55dd"),o("b5c1")),r=o.n(a),s=o("1b4b"),l={props:["article","index"],components:{TagPill:s["a"]},methods:{onTagClick:function(t){this.$emit("tag-click",t)}},computed:{path:function(){return this.article.slug?"/article/".concat(this.article.slug):"/article/".concat(this.index)},bodyPreview:function(){var t=this.article.body,e=r()(t),o=e.length>100?e.substr(0,100)+"...":e;return o},title:function(){var t=this.article.matches.filter(function(t){return"title"===t.prop});if(!t.length)return this.article.title;var e=this.article.title,o=0,i=t.sort(function(t,e){return t.index-e.index});return i.forEach(function(t){var i=t.index+o,n=e.substr(i,t.length),a='<span class="highlight">'.concat(n,"</span>");e=e.substr(0,i)+a+e.substr(i+t.length),o+=a.length-n.length}),e},subtitle:function(){var t=this.article.matches.filter(function(t){return"subtitle"===t.prop});if(!t.length)return this.article.subtitle;var e=this.article.subtitle,o=0,i=t.sort(function(t,e){return t.index-e.index});return i.forEach(function(t){var i=t.index+o,n=e.substr(i,t.length),a='<span class="highlight">'.concat(n,"</span>");e=e.substr(0,i)+a+e.substr(i+t.length),o+=a.length-n.length}),e}}},c=l,u=(o("86f3"),o("2877")),d=Object(u["a"])(c,i,n,!1,null,"43416e7a",null);e["a"]=d.exports},d836:function(t){t.exports={a:[{title:"Electric Longboard Project",slug:"longboard",subtitle:"December 2019",body:"![](https://cdn.discordapp.com/attachments/285485052035334154/743406792524038195/unknown.png 'Longboard')\nOver the summer I designed and built an electric longboard by modifying a cheap longboard with hobby RC components. The Longboard is powered using a 2.25kW brushless outrunner motor, which is capable at taking the board to theoretical speeds of up to 40km/h (not that I've ever been brave enough to push it anywhere close to that). This motor is driven by the open source VESC brushless speed controller, and is controlled from a handheld wireless controller. The whole setup is powered using two 6S LiPo batteries in series with a BMS to ensure the cells are kept at similar voltages.\n\n<div class='embed'><iframe src='https://drive.google.com/file/d/1g7fqVJUZNLr4VwzhiCuvXVj14GGYdnhM/preview' allow='autoplay; encrypted-media' allowfullscreen></iframe></div><br>",tags:[]},{title:"'Lossless' VEX Robot",slug:"lossless",subtitle:"March 2019 - April 2019",body:"![](https://cdn.discordapp.com/attachments/285485052035334154/743305538162655272/unknown.png 'Lossless Robot')\nOur final robot we built for the VEX robotics competition 2018-2019 season was constructed after the 2019 VEX Robotics NZ National Championships. In preparation for the 2019 world championships in Kentucky we designed and built an entirely new robot, based on our robot for Nationals (High Quality). This new robot used a similar flywheel design for scoring game objects in the competition, it was simply a more refined robot based on the newer VEX hardware that was available to us. Due to time constraints we didn't make a video for this robot; however, the design functions very similar to our earlier iteration 'High Quality', which has a video on its page.\n\n'Lossless' competed at the 2019 VEX Robotics World Championships, where we made it to the semifinals in our division before we were eliminated from the competition.\n\n<br>",tags:["VEX Robotics Competition","Robotics","Control Systems"]},{title:"'High Quality' VEX Robot",slug:"high-quality",subtitle:"November 2018 - February 2019",body:"![](https://media.discordapp.net/attachments/458051657503080450/547697033474211840/IMG_5446-compressor.jpg?width=1870&height=1247 'High Quality Robot')\nFor our third robot we designed for the 2018-2019 VEX Robotics Competition season, we decided to switch focus to a flywheel launching mechanism (compared to the catapult design of 'Medium Quality'). This change allowed us to control the flywheel velocity to adjust the arc the ball takes when launched. Something which allowed us to shoot the game objects at the targets (the flags) from many different robot positions, and also allowing us to hit 2 flags simultaneously.\n\n 'High Quality' competed at the 2019 VEX Robotics NZ National Championships, finishing qualifications in first place and winning the Tournament Champions and Design Awards.\n\n<div class='embed'><iframe src='https://www.youtube.com/embed/tEOX_e-BGyM' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div><br>",tags:["VEX Robotics Competition","Robotics","Control Systems"]},{title:"'Snow White' Combat Robot",subtitle:"November 2018",slug:"snow-white",body:"![](https://cdn.discordapp.com/attachments/520168409388941322/534690647228284938/krWZpbl4tOeBWLsHGufc6KC1OtkOOQBi0v5BnwLLiRkZSk0TN5ckwOGS2k5ytg3L-hq3uvpVmsFvUQldGiRNlbZEDwmD9uhui8QS.png 'Snow White')Snow White was our second combat robot we built. It was built for the 2018 Combat Robotics Nationals. After building our first combat robot 'Doorstop' we wanted to try building a combat robot with an active weapon rather than the simple wedge design of Doorstop. Snow White was originally planned with a spinning drum weapon, but we were quickly running out of time and manufacturing a drum would have been very difficult to do in the time we had. So we decided to just go for a simple horizontal spinner. The blade for this horizontal spinner was just a steel brushcutter blade from a hardware store. This was belt driven by a brushless outrunner motor and all the components were bolted to a titanium base plate with HDPE side and back armour. All of this was built over only a few days, so we didn’t really have high hopes for how well it would perform.\n\n### The CAD design for Snow White\n\n![](https://cdn.discordapp.com/attachments/285485052035334154/534691154596462602/5amCmOLuisaFi59LjpIqyssiCRTkeWsZvMAVNLbFHWdxGQP9bx9tUVOdXUlR29frzWPI5Mfxlq_5TOE6Ita51OZ0jHWCI-l8LYo6.png 'Snow White Render') \nUnfortunately the robot was quite front heavy, so the back wheels didn't get much traction which made driving very challenging. Because of this and some other issues we didn't perform too great at the competition, and the robot's final match can be seen below. \n\n#### The last match of Snow White...\n\n<div class='embed'><iframe src='https://www.youtube.com/embed/eMPulFDPUpY?start=333' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>\n\n",tags:["Combat Robotics","Robotics"]},{title:"Resolution Robotics Team Website",slug:"website",subtitle:"October 2018",body:"![](https://cdn.discordapp.com/attachments/285485052035334154/743425816032968704/unknown.png 'Resolution Robotics Website')\n\nFor one of my level 3 Digital Technology projects I decided to design and build a website for our independent robotics team we had recently started. This website was built off the Vue.js framework to streamline the development process, minimise repeated code, and allow for a Single Page Application website (improves flow across the website as the page doesn't refresh when navigating to subpages). This website also has a functional article section where content is fetched from an editable .json data file. With this system in place articles can be easily added to the webpage by simply editing a single data file. After editing this file the article is added to the article list, and all navigation menus are updated to reflect this. This allows for content to be added without touching the source code of the site. The articles are written in the popular markdown format which makes styling of the article content very simple. This markdown is automatically parsed to HTML and displayed on the site. Because of this, HTML elements can also be added to the data file if a specific element is desired (for example a YouTube embed).\n\n This portfolio website is based off the article section of the main website, and runs off the same code. The main website also features animations, responsive design, and is fully functional on mobile (including support for swipes).\n\n <a href='https://william-acourt.github.io/240P/'>The website is hosted on my github </a><br>",tags:["Web Development","Vue.js"]},{title:"'Medium Quality' VEX Robot",slug:"medium-quality",subtitle:"July 2018 - October 2018",body:"![](https://media.discordapp.net/attachments/285485052035334154/724030950668763226/IMG_5965.jpg?width=1406&height=937 'Medium Quality Robot')\nThis was the second robot our independent team had ever built together. We built this robot for the 2018-2019 VEX Robotics Competition season, we decided to focus on quickly and effectively firing balls to toggle flags with this iteration. This strategy has a much higher score potential compared to our first robot of the season. We designed a slip gear catapult mechanism, using elastics to provide the high force required to fire two balls simultaneously at the flag targets.\n\n Medium Quality competed at the 2018 World Skills NZ National Championships in Hamilton where we finished with the gold medal in the Mobile Robotics Category.\n\n<div class='embed'><iframe src='https://www.youtube.com/embed/VtBIXOg0EsI' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div><br>",tags:["VEX Robotics Competition","Robotics","Control Systems"]},{title:"'Doorstop' Combat Robot",slug:"doorstop",subtitle:"July 2018",body:"![](https://media.discordapp.net/attachments/285485052035334154/493614998262906900/hg6CGef7t2fQeZ_b7MAiDj9_kUK_qSWZnM0KpTJ5qs8GvhRmMbJrPfhY7z7wjyfKhtrqG7ekitvMwzmVwFhuqwGFsc71VOMQ0P0R.png 'Doorstop')Doorstop was our first attempt at building a robot outside of the VEX Robotics Competition, and our first attempt at building a combat robot. Doorstop was built in the beetleweight category for combat robots, which is for robots below 1.37kgs. As this was our first attempt for anything like this we built a simple design with only a powered drive. It comprised of a steel base and steel wedge with aluminum angle used for the sides and a polycarbonate cover for the top. Doorstop was powered with a 2 wheel brushed DC motor drive. Although it was our first attempt at combat robots, we actually did pretty well with Doorstop at our first competition, we ended up losing in finals and taking home the second place trophy.<div class='embed'><iframe src='https://www.youtube.com/embed/8YfsVjocByA' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div><br>\n\n",tags:["Combat Robotics","Robotics"]},{title:"'Low Quality' VEX Robot",slug:"low-quality",subtitle:"June 2018",body:"![](https://media.discordapp.net/attachments/285485052035334154/743989912231084152/ACtC-3cC8Awq3MjkG9RTH1_SYcJVIAOJ8bdF41m_nNMUqLmWg8G3d4dTKte0ETXTNGfaw5TRLWhb9oHxtLaXZBqZj2h9yyvjNMHK.png?width=930&height=1654 'Low Quality Robot')\nThis was the first robot our independent team had ever built together. We built this robot for the 2018-2019 VEX Robotics Competition season. We were heavily limited due to our lack of available parts and resources at this point in the season. Because of this, we built a fairly simple design to pick up the cap game elements and score them on posts (also with the ability to flip the caps so they our scored for our colour). All our future robots were significant improvements over this design, but this is how we started the season.\n\n<div class='embed'><iframe src='https://www.youtube.com/embed/06cEBmGx7Fo?rel=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div><br>",tags:["VEX Robotics Competition","Robotics","Control Systems"]}]}},d92f:function(t,e,o){"use strict";var i=o("2eb5"),n=o.n(i);n.a},e216:function(t,e,o){"use strict";var i=o("4ab4"),n=o.n(i);n.a}});
//# sourceMappingURL=app.a370cb92.js.map