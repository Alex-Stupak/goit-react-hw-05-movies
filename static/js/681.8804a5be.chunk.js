"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{726:function(e,n,t){t.d(n,{JS:function(){return a},Kd:function(){return c},mt:function(){return i},s9:function(){return o},vU:function(){return u}});var r="e0ed1638ffdd17848c4367fe92782c7d",a=function(){var e=new URLSearchParams({api_key:r});return fetch("https://api.themoviedb.org/3/trending/all/week?".concat(e)).then((function(e){return e.json()})).then((function(e){return e.results}))},o=function(e){var n=new URLSearchParams({api_key:r});return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?").concat(n,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("We don't have information about this Movie"))}))},c=function(e){var n=new URLSearchParams({api_key:r,q:e});return fetch("https://api.themoviedb.org/3/search/movie?".concat(n,"&language=en-US&page=1&include_adult=false&query=").concat(e)).then((function(e){return e.json()})).then((function(e){return e.results}))},i=function(e){var n=new URLSearchParams({api_key:r});return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?").concat(n,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("We don't have about this Movie"))})).then((function(e){return e.cast}))},u=function(e){var n=new URLSearchParams({api_key:r});return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?").concat(n,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("We don't have about this Movie"))})).then((function(e){return e.results}))}},681:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(439),a=t(726),o=t(791),c=t(87),i=t(689),u="Review_contsiner__8ekrg",s="Review_author__ms+C9",h="Review_text__kHvhy",f="Review_error_message__i3mCI",v=t(184),m=function(){var e=(0,i.UO)().movieId,n=(0,o.useState)([]),t=(0,r.Z)(n,2),m=t[0],d=t[1],l=(0,i.TH)();return(0,o.useEffect)((function(){a.vU(e).then(d)}),[e]),(0,v.jsx)("div",{className:u,children:m.length>0?(0,v.jsxs)("ul",{children:[m.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsx)("p",{className:s,children:e.author}),(0,v.jsxs)("p",{className:h,children:["Character: ",e.content]})]},e.id)})),(0,v.jsx)(c.rU,{state:{from:l}})]}):(0,v.jsx)("div",{className:f,children:"We dont have any information about it"})})}}}]);
//# sourceMappingURL=681.8804a5be.chunk.js.map