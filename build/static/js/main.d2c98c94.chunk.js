(this["webpackJsonpclone-youtube"]=this["webpackJsonpclone-youtube"]||[]).push([[0],{116:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(0),i=s.n(c),n=s(24),o=s.n(n),r=s(19),l=s.n(r),d=s(25),j=s(17),b=(s(81),s(18)),h=s.n(b),u=s(26),m=s.n(u),p=s(49),O=s.n(p),v=s(50),x=s.n(v),_=s(51),f=s.n(_),g=s(48),N=s.n(g),y=s(15),w=s(130),M=function(e){var t=e.onFormSubmit,s=e.open,i=e.setOpen,n=Object(c.useState)(""),o=Object(j.a)(n,2),r=o[0],l=o[1];return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsxs)("div",{className:"header__navigation",children:[Object(a.jsx)(m.a,{className:"header__menu",style:{fontSize:28},onClick:function(){i(!s)}}),Object(a.jsx)(y.b,{to:"/",children:Object(a.jsx)("img",{src:"/yt-icon.png",alt:"youtube icon",className:"youtube__icon"})})]}),Object(a.jsxs)("form",{className:"header__search",onSubmit:function(e){e.preventDefault(),t(r),window.history.pushState({},"","/components/search/SearchVideos");var s=new PopStateEvent("popstate");setTimeout((function(){window.dispatchEvent(s)}),500)},children:[Object(a.jsx)("input",{type:"text",placeholder:"Search",value:r,onChange:function(e){l(e.target.value)}}),Object(a.jsx)("div",{className:"header__search--icon",children:Object(a.jsx)(N.a,{style:{fontSize:20}})})]}),Object(a.jsxs)("div",{className:"header__icons",children:[Object(a.jsx)(O.a,{className:"header__icons-icon",style:{fontSize:45}}),Object(a.jsx)(x.a,{className:"header__icons-icon",style:{fontSize:45}}),Object(a.jsx)(f.a,{className:"header__icons-icon",style:{fontSize:45}}),Object(a.jsx)(w.a,{className:"header__avatar"})]})]})},S=s(52),I=s.n(S),k=s(53),C=s.n(k),T=s(54),z=s.n(T),E=s(55),A=s.n(E),R=s(57),V=s.n(R),D=s(56),F=s.n(D),H=s(58),P=s.n(H),U=s(59),q=s.n(U),B=s(60),L=s.n(B),G=s(61),J=s.n(G),W=s(62),Y=s.n(W),K=s(63),Q=s.n(K),X=s(64),Z=s.n(X),$=s(65),ee=s.n($),te=function(e){var t=e.selected,s=e.title,c=e.Icon;return Object(a.jsxs)("div",{className:"sidebar__item ".concat(t&&"selected"," "),children:[Object(a.jsx)(c,{className:"sidebar__icon"}),Object(a.jsx)("h2",{className:"sidebar__title",children:s})]})},se=function(e){var t=e.open;return Object(a.jsxs)("div",{className:"sidebar ".concat(t?"active":"hidden"),children:[Object(a.jsx)(te,{selected:!0,Icon:I.a,title:"Home"}),Object(a.jsx)(te,{Icon:C.a,title:"Trending"}),Object(a.jsx)(te,{Icon:z.a,title:"Subscriptions"}),Object(a.jsx)("div",{className:"sidebar__border"}),Object(a.jsx)(te,{Icon:A.a,title:"Library"}),Object(a.jsx)(te,{Icon:F.a,title:"History"}),Object(a.jsx)(te,{Icon:V.a,title:"Your videos"}),Object(a.jsx)(te,{Icon:P.a,title:"Watch later"}),Object(a.jsx)(te,{Icon:q.a,title:"Liked videos"}),Object(a.jsx)(te,{Icon:L.a,title:"Favorites"}),Object(a.jsx)("div",{className:"sidebar__border"}),Object(a.jsx)("h3",{className:"sidebar__subhead",children:"subscriptions"}),Object(a.jsx)(te,{Icon:J.a,title:"Browse channels"}),Object(a.jsx)("div",{className:"sidebar__border"}),Object(a.jsx)("h3",{className:"sidebar__subhead",children:"More from youtube"}),Object(a.jsx)(te,{Icon:Y.a,title:"Settings"}),Object(a.jsx)(te,{Icon:Q.a,title:"Report history"}),Object(a.jsx)(te,{Icon:Z.a,title:"Help"}),Object(a.jsx)(te,{Icon:ee.a,title:"Send feedback"})]})},ae="AIzaSyCwa8UG_zq1kewf35h5UdGTaNqa3i1uH2c",ce=function(e){var t=e.video,s=new Date(t.snippet.publishedAt).getTime(),c=(new Date).getTime();var i;return Object(a.jsx)(y.b,{to:"/PlayVideo/".concat(t.id),children:Object(a.jsxs)("div",{className:"video__item",children:[Object(a.jsx)("div",{className:"video__container",children:Object(a.jsx)("img",{src:t.snippet.thumbnails.medium.url,alt:t.snippet.title,className:"video__thumbnail"})}),Object(a.jsxs)("div",{className:"video__info",children:[Object(a.jsx)("div",{className:"suggest__avatar",children:Object(a.jsx)(w.a,{alt:"channel image",src:t.snippet.thumbnails.medium.url})}),Object(a.jsxs)("div",{className:"suggest__description",children:[Object(a.jsx)("h2",{children:t.snippet.title.substring(0,60)}),Object(a.jsx)("p",{className:"video__channel",children:t.snippet.channelTitle}),Object(a.jsxs)("p",{className:"video__publish",children:[" ".concat((i=t.statistics.viewCount,null==i?"":"".concat(i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," views \u2022 ")))," ",function(e,t){var s=e-t;return s/1e3<60?Math.floor(s/1e4)+" seconds ago":s/6e4<60?Math.floor(s/6e4)+" minutes ago":1===Math.floor(s/36e5)?(Math.floor(s/36e5),"1 hour ago"):s/36e5<24?Math.floor(s/36e5)+" hours ago":s/36e5<48?(Math.floor(s/36e5),"1 day ago"):s/36e5<168?Math.floor(s/864e5)+" days ago":1===Math.floor(2628e6/s)?Math.floor(2628e6/s)+" week ago":s<2628e6?Math.floor(2628e6/s)+" weeks ago":1===Math.floor(31536e6/s)?Math.floor(31536e6/s)+" month ago":s<31536e6?Math.floor(31536e6/s)+" months ago":1===Math.floor(s/31536e6)?Math.floor(s/31536e6)+" year ago":s>31536e6?Math.floor(s/31536e6)+" years ago":void 0}(c,s)]})]})]})]})},t.id)},ie=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),s=t[0],i=t[1];Object(c.useEffect)((function(){h.a.get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer%2Cstatistics&type=video&chart=mostPopular&regionCode=US&maxResults=20&key=".concat(ae)).then((function(e){i(e.data.items)}))}),[]);var n=s.map((function(e){return Object(a.jsx)(ce,{video:e},e.etag)}));return Object(a.jsxs)("div",{className:"suggested__videos",children:[Object(a.jsx)("div",{className:"videos__border"}),n]})},ne=function(e){var t=e.video,s=new Date(t.snippet.publishedAt).getTime(),c=(new Date).getTime();return Object(a.jsx)(y.b,{to:"/PlayVideo/".concat(t.id.videoId),children:Object(a.jsxs)("div",{className:"video__item",children:[Object(a.jsx)("div",{className:"video__container",children:Object(a.jsx)("img",{src:t.snippet.thumbnails.medium.url,alt:t.snippet.title,className:"video__thumbnail"})}),Object(a.jsxs)("div",{className:"video__info",children:[Object(a.jsx)("h2",{children:t.snippet.title.substring(0,60)}),Object(a.jsx)("p",{className:"video__publish",children:function(e,t){var s=e-t;return s/1e3<60?Math.floor(s/1e4)+" seconds ago":s/6e4<60?Math.floor(s/6e4)+" minutes ago":1===Math.floor(s/36e5)?(Math.floor(s/36e5),"1 hour ago"):s/36e5<24?Math.floor(s/36e5)+" hours ago":s/36e5<48?(Math.floor(s/36e5),"1 day ago"):s/36e5<168?Math.floor(s/864e5)+" days ago":1===Math.floor(2628e6/s)?Math.floor(2628e6/s)+" week ago":s<2628e6?Math.floor(2628e6/s)+" weeks ago":1===Math.floor(31536e6/s)?Math.floor(31536e6/s)+" month ago":s<31536e6?Math.floor(31536e6/s)+" months ago":1===Math.floor(s/31536e6)?Math.floor(s/31536e6)+" year ago":s>31536e6?Math.floor(s/31536e6)+" years ago":void 0}(c,s)}),Object(a.jsx)("p",{className:"video__channel",children:t.snippet.channelTitle}),Object(a.jsx)("p",{className:"video__description",children:t.snippet.description})]})]})},t.id.videoId)},oe=function(e){var t=e.videos.map((function(e){return Object(a.jsx)(ne,{video:e},e.id.videoId)}));return Object(a.jsx)("div",{className:"search__videos",children:t})},re=s(7),le=s(66),de=s(69),je=s.n(de),be=s(70),he=s.n(be),ue=s(71),me=s.n(ue),pe=s(72),Oe=s.n(pe),ve=function(e){var t=e.title,s=e.Icon;return Object(a.jsxs)("div",{className:"player__icons",children:[Object(a.jsx)(s,{className:"player__icon",style:{fontSize:28}}),Object(a.jsx)("h3",{className:"player__title",children:t})]})},xe=function(){var e=Object(re.e)().videoId,t=Object(c.useState)([]),s=Object(j.a)(t,2),i=s[0],n=s[1];function o(){return(o=Object(d.a)(l.a.mark((function e(t){var s,a,c,i,o,r,d,j,b,u,m,p,O;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.snippet,a=t.statistics,c=s.channelId,e.next=5,h.a.get("https://www.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=".concat(c,"&key=").concat(ae));case 5:i=e.sent,o=i.data.items[0].snippet.thumbnails.medium.url,r=i.data.items[0].statistics.subscriberCount,d=s.title,j=s.publishedAt,b=s.description,u=s.channelTitle,m=a.viewCount,p=a.likeCount,O=a.dislikeCount,n({title:d,description:b,channelTitle:u,channelImage:o,viewCount:m,likeCount:p,dislikeCount:O,subcount:r,dateStamp:j});case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){h.a.get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=".concat(e,"&key=").concat(ae)).then((function(e){!function(e){o.apply(this,arguments)}(e.data.items[0]),console.log(e.data.items[0])})).catch((function(e){console.log(e)}))}),[e]),Object(a.jsxs)("div",{className:"videos video__player",children:[Object(a.jsxs)("div",{className:"player__container",children:[Object(a.jsx)("div",{className:"player__frame",children:Object(a.jsx)(le.a,{width:740,videoId:e})}),Object(a.jsxs)("div",{className:"player__info",children:[Object(a.jsx)("h2",{children:i.title}),Object(a.jsxs)("div",{className:"player__info--stats",children:[Object(a.jsx)("div",{className:"player__info--left",children:Object(a.jsxs)("p",{className:"player__publish",children:[i.viewCount," views ",Object(a.jsx)("span",{children:"\u2022"})," ",i.dateStamp]})}),Object(a.jsxs)("div",{className:"player__info--right",children:[Object(a.jsx)(ve,{Icon:je.a,title:i.likeCount}),Object(a.jsx)(ve,{Icon:he.a,title:i.dislikeCount}),Object(a.jsx)(ve,{Icon:me.a,title:"SHARE"}),Object(a.jsx)(ve,{Icon:Oe.a,title:"SAVE"})]})]}),Object(a.jsx)("div",{className:"player__border"}),Object(a.jsxs)("div",{className:"player__info--channel",children:[Object(a.jsx)("div",{className:"player__info--avatar",children:Object(a.jsx)(w.a,{alt:"channel image",src:i.channelImage})}),Object(a.jsxs)("div",{className:"player__info--description",children:[Object(a.jsx)("h4",{className:"channel__name",children:i.channelTitle}),Object(a.jsxs)("p",{className:"channel__subs",children:[i.subcount," subscribers"]}),Object(a.jsx)("p",{className:"player__description",children:i.description})]})]})]})]}),Object(a.jsx)("div",{className:"player__recommend",children:Object(a.jsx)(ie,{})})]})},_e=h.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:25,key:ae}}),fe=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),s=t[0],i=t[1],n=Object(c.useState)(!0),o=Object(j.a)(n,2),r=o[0],b=o[1],h=function(){var e=Object(d.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e.get("/search",{params:{q:t}});case 2:s=e.sent,i(s.data.items),console.log(s.data.items);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(y.a,{children:[Object(a.jsxs)(re.a,{path:"/",exact:!0,children:[Object(a.jsx)(M,{onFormSubmit:h,open:r,setOpen:b}),Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(se,{open:r}),Object(a.jsxs)("div",{className:"suggest__videos videos ".concat(r?"active":"hidden"),children:[Object(a.jsx)("h3",{className:"suggested__header",children:"Recommended"}),Object(a.jsx)(ie,{})]})]})]}),Object(a.jsxs)(re.a,{path:"/components/search/SearchVideos",exact:!0,children:[Object(a.jsx)(M,{onFormSubmit:h,open:r,setOpen:b}),Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(se,{open:r}),Object(a.jsx)(oe,{videos:s})]})]}),Object(a.jsx)(re.a,{path:"/PlayVideo/:videoId",exact:!0,children:Object(a.jsxs)("div",{className:"videoplayer",children:[Object(a.jsx)(M,{onFormSubmit:h,open:r,setOpen:b}),Object(a.jsxs)("div",{className:"main__video",children:[Object(a.jsxs)("div",{className:"sidebar__container ".concat(r?"active":"hidden"),children:[Object(a.jsxs)("div",{className:"header__navigation",children:[Object(a.jsx)(m.a,{className:"header__menu",style:{fontSize:28},onClick:function(){b(!r)}}),Object(a.jsx)(y.b,{to:"/",children:Object(a.jsx)("img",{src:"/yt-icon.png",alt:"youtube icon",className:"youtube__icon"})})]}),Object(a.jsx)("div",{className:"sidebar__border"}),Object(a.jsx)(se,{open:r})]}),Object(a.jsx)(xe,{setOpen:b})]})]})})]})})};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(fe,{})}),document.getElementById("root"))},81:function(e,t,s){}},[[116,1,2]]]);
//# sourceMappingURL=main.d2c98c94.chunk.js.map