(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(70),i=a(255),s=a(251);t.default=function(){var e=r.a.useState(!1),t=e[0],a=e[1];return r.a.useEffect(function(){a(!0)}),r.a.createElement(i.a,null,t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{id:"404.title",defaultMessage:"404: Not found"},function(e){return r.a.createElement(s.a,{title:e})}),r.a.createElement("h1",null,r.a.createElement(l.a,{id:"404.title",defaultMessage:"404: Not found"})),r.a.createElement("p",null,r.a.createElement(l.a,{id:"404.message",defaultMessage:"You just hit a route that doesn't exist... the sadness."}))))}},248:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(86),i=a.n(l);a.d(t,"a",function(){return i.a}),a.d(t,"c",function(){return l.withPrefix}),a.d(t,"b",function(){return l.navigate});a(249),a(20).default.enqueue,r.a.createContext({})},249:function(e,t,a){var n;e.exports=(n=a(253))&&n.default||n},251:function(e,t,a){"use strict";var n=a(254),r=a(0),l=a(256),i=a.n(l),s=function(e){var t=e.description,a=e.lang,l=e.meta,s=e.title,c=n.data.site,o=t||c.siteMetadata.description,u=[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}];return r.createElement(i.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:u.concat(l)})};s.defaultProps={lang:"en",meta:[],description:""},t.a=s},252:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby TypeScript Application Starter"}}}}},253:function(e,t,a){"use strict";a.r(t);a(27);var n=a(0),r=a.n(n),l=a(116);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},254:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby TypeScript Application Starter",description:"Kick off your next, great Gatsby typescript application project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@erkobridee"}}}}},255:function(e,t,a){"use strict";var n=a(252),r=a(0),l=a(248),i=(a(229),function(e){var t=e.siteTitle,a=void 0===t?"":t;return r.createElement("div",{className:"layoutheader"},r.createElement("div",{className:"layoutheader__content"},r.createElement("div",{className:"layoutheader__title"},r.createElement(l.a,{to:"/",className:"layoutheader__link"},a))))}),s=a(70),c=(a(14),a(13),a(1),a(29),a(27),a(17),a(250)),o=a.n(c);var u=function(e){var t=e.name,a=e.className,n=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["name","className"]),l=o()("icon icon-"+t+"_icon",a);return r.createElement("i",Object.assign({className:l},n))},d=a(60),m=a(117),f=a(115),g=(a(230),Object(s.d)({en:{id:"language.selector.option.english",defaultMessage:"English"},es:{id:"language.selector.option.spanish",defaultMessage:"Spanish"},pt:{id:"language.selector.option.portuguese",defaultMessage:"Portuguese"}})),p=Object(s.e)(function(e){var t=e.intl,a=e.className,n=e.label,l=void 0===n?r.createElement(s.a,{id:"language.selector.label",defaultMessage:"Select another available language"}):n,i=Object(d.b)(),c=Object(d.c)(f.b);return r.createElement("div",{className:o()("languageselector",a)},l&&r.createElement("div",{className:"languageselector__label"},l),r.createElement("div",{className:"languageselector__selectcontainer"},r.createElement("select",{value:c,onChange:function(e){i(Object(m.a)(e.target.value))},className:"languageselector__select"},Object.keys(g).map(function(e,a){return r.createElement("option",{key:a,value:e},t.formatMessage(g[e]))}),"}")))}),v=(a(231),function(){return r.createElement("div",{className:"layoutfooter"},r.createElement("div",{className:"layoutfooter__content"},r.createElement("div",null,"© ",(new Date).getFullYear(),", ",r.createElement(s.a,{id:"layout.build-with",defaultMessage:"Built with"})," ",r.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby ",r.createElement(u,{name:"heart"}))),r.createElement(p,null)))});a(232),t.a=function(e){var t=e.children,a=e.displayFooter,l=void 0===a||a,s=n.data;return r.createElement("div",{className:"layout"},r.createElement(i,{siteTitle:s.site.siteMetadata.title}),r.createElement("div",{className:"layout__content"},t),l&&r.createElement(v,null))}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-89e057259bc8b562aff5.js.map