"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{726:function(e,t,n){n.d(t,{JS:function(){return r},Kd:function(){return a},mt:function(){return o},s9:function(){return s},vU:function(){return c}});var i="e0ed1638ffdd17848c4367fe92782c7d",r=function(){var e=new URLSearchParams({api_key:i});return fetch("https://api.themoviedb.org/3/trending/all/week?".concat(e)).then((function(e){return e.json()})).then((function(e){return e.results}))},s=function(e){var t=new URLSearchParams({api_key:i});return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?").concat(t,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("We don't have information about this Movie"))}))},a=function(e){var t=new URLSearchParams({api_key:i,q:e});return fetch("https://api.themoviedb.org/3/search/movie?".concat(t,"&language=en-US&page=1&include_adult=false&query=").concat(e)).then((function(e){return e.json()})).then((function(e){return e.results}))},o=function(e){var t=new URLSearchParams({api_key:i});return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?").concat(t,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("We don't have about this Movie"))})).then((function(e){return e.cast}))},c=function(e){var t=new URLSearchParams({api_key:i});return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?").concat(t,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("We don't have about this Movie"))})).then((function(e){return e.results}))}},135:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var i=n(439),r=n(791),s=n(87),a=n(689),o="MovieDetails_container__Ys+c9",c="MovieDetails_second_container__dQyHj",l="MovieDetails_movie_pic__qHRf+",u="MovieDetails_title__cUGs9",v="MovieDetails_user_score__D3Cud",h="MovieDetails_overview__U5Vnb",d="MovieDetails_overview_text__OOuMT",_="MovieDetails_genres__Pnmgt",m="MovieDetails_genres_list__14ciI",f="MovieDetails_genres_padding_list__k8z4A",p="MovieDetails_button__uXZxd",j="MovieDetails_option__4wZyM",g="MovieDetails_link__U+v+7",w=n(726),x=n(184),M=function(){var e,t,n,M,b,k,U=(0,a.UO)().movieId,N=(0,r.useState)([]),D=(0,i.Z)(N,2),S=D[0],y=D[1],P=(0,a.TH)();(0,r.useEffect)((function(){w.s9(U).then(y)}),[U]);var R=null!==(e=null===(t=P.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies",L=S.genres;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.rU,{className:p,to:R,children:"Back"}),S.status?(0,x.jsxs)("div",{className:o,children:[S.poster_path&&(0,x.jsx)("img",{className:l,width:"360",src:"https://image.tmdb.org/t/p/w780".concat(S.poster_path),alt:S.title}),(0,x.jsxs)("div",{className:c,children:[(0,x.jsxs)("b",{className:u,children:[S.title," (",Number.parseInt(S.release_date),")"]}),(0,x.jsxs)("p",{className:v,children:["User Score: ",(10*S.vote_average).toFixed(2),"%"]}),(0,x.jsx)("b",{className:h,children:"Overview"}),(0,x.jsx)("p",{className:d,children:S.overview}),(0,x.jsx)("b",{className:_,children:"Genres"}),(0,x.jsx)("ul",{className:m,children:L&&L.map((function(e){return(0,x.jsx)("li",{className:f,children:e.name},e.id)}))})]})]}):(0,x.jsxs)("div",{className:o,children:["We dont have any information about this Movie, try to find another one"," "]}),S.status&&(0,x.jsxs)("div",{children:[(0,x.jsxs)("ul",{className:j,children:[(0,x.jsx)("li",{children:(0,x.jsx)(s.rU,{className:g,to:"/movies/".concat(U,"/cast"),state:{from:null!==(n=null===(M=P.state)||void 0===M?void 0:M.from)&&void 0!==n?n:"/movies"},children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(s.rU,{className:g,to:"/movies/".concat(U,"/reviews"),state:{from:null!==(b=null===(k=P.state)||void 0===k?void 0:k.from)&&void 0!==b?b:"/movies"},children:"Reviews"})})]}),(0,x.jsx)(a.j3,{})]})]})}}}]);
//# sourceMappingURL=135.576feba2.chunk.js.map