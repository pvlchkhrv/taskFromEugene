(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,n){e.exports={container:"BonusTask_container__9lw9h"}},33:function(e,t,n){e.exports={app:"App_app__3GVTi"}},48:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(12),s=n.n(r),i=(n(48),n(14)),j=n(19),l=n(33),b=n.n(l),h=n(34),d=n.n(h),o=n(35),O=n(87),x=n(88),u=n(89),p=n(90),g=n(91),m=n(92),f=n(93),v=n(2);var k=function(e){var t=e.data;return Object(v.jsx)(O.a,{elevation:3,children:Object(v.jsx)(x.a,{children:Object(v.jsxs)(u.a,{"aria-label":"simple table",children:[Object(v.jsx)(p.a,{children:Object(v.jsxs)(g.a,{children:[Object(v.jsx)(m.a,{children:Object(v.jsx)("b",{children:"Name"})}),Object(v.jsxs)(m.a,{align:"right",children:["\ud83c\udf1f ",Object(v.jsx)("b",{children:"Stars"})]}),Object(v.jsxs)(m.a,{align:"right",children:[" \ud83c\udf74 ",Object(v.jsx)("b",{children:"Forks"})]})]})}),Object(v.jsx)(f.a,{children:t.map((function(e){return Object(v.jsxs)(g.a,{children:[Object(v.jsx)(m.a,{component:"th",scope:"row",children:e.name}),Object(v.jsxs)(m.a,{align:"right",children:["\ud83c\udf1f ",e.stars]}),Object(v.jsxs)(m.a,{align:"right",children:["\ud83c\udf74 ",e.forks]})]},e.id)}))})]})})})},C=n(94),S=n(22),w=n.n(S);var _,F=(_=function(e){var t=e.data.slice(0,3).map((function(e){return Object(v.jsxs)(g.a,{children:[Object(v.jsx)(m.a,{component:"th",scope:"row",children:e.name}),Object(v.jsxs)(m.a,{align:"right",children:["\ud83c\udf1f ",e.stars]}),Object(v.jsxs)(m.a,{align:"right",children:["\ud83c\udf74 ",e.forks]})]},e.id)})),n=e.data.map((function(e){return Object(v.jsxs)(g.a,{children:[Object(v.jsx)(m.a,{component:"th",scope:"row",children:e.name}),Object(v.jsxs)(m.a,{align:"right",children:["\ud83c\udf1f ",e.stars]}),Object(v.jsxs)(m.a,{align:"right",children:["\ud83c\udf74 ",e.forks]})]},e.id)}));if(e.hasOwnProperty("isCollapsed"))return Object(v.jsxs)("div",{className:w.a.container,children:[Object(v.jsx)(C.a,{variant:"contained",color:"secondary",onClick:e.onClickHandler,children:e.isCollapsed?"See More":"See Less"}),Object(v.jsx)(O.a,{elevation:3,className:w.a.app,children:Object(v.jsx)(x.a,{children:Object(v.jsxs)(u.a,{"aria-label":"simple table",children:[Object(v.jsx)(p.a,{children:Object(v.jsxs)(g.a,{children:[Object(v.jsx)(m.a,{children:Object(v.jsx)("b",{children:"Name"})}),Object(v.jsxs)(m.a,{align:"right",children:["\ud83c\udf1f ",Object(v.jsx)("b",{children:"Stars"})]}),Object(v.jsxs)(m.a,{align:"right",children:[" \ud83c\udf74 ",Object(v.jsx)("b",{children:"Forks"})]})]})}),Object(v.jsx)(f.a,{children:e.isCollapsed?t:n})]})})})]});var c=e.data;return Object(v.jsx)(O.a,{elevation:3,children:Object(v.jsx)(x.a,{children:Object(v.jsxs)(u.a,{"aria-label":"simple table",children:[Object(v.jsx)(p.a,{children:Object(v.jsxs)(g.a,{children:[Object(v.jsx)(m.a,{children:Object(v.jsx)("b",{children:"Name"})}),Object(v.jsxs)(m.a,{align:"right",children:["\ud83c\udf1f ",Object(v.jsx)("b",{children:"Stars"})]}),Object(v.jsxs)(m.a,{align:"right",children:[" \ud83c\udf74 ",Object(v.jsx)("b",{children:"Forks"})]})]})}),Object(v.jsx)(f.a,{children:c.map((function(e){return Object(v.jsxs)(g.a,{children:[Object(v.jsx)(m.a,{component:"th",scope:"row",children:e.name}),Object(v.jsxs)(m.a,{align:"right",children:["\ud83c\udf1f ",e.stars]}),Object(v.jsxs)(m.a,{align:"right",children:["\ud83c\udf74 ",e.forks]})]},e.id)}))})]})})})},function(e){var t=Object(c.useState)(!0),n=Object(j.a)(t,2),a=n[0],r=n[1];return Object(v.jsx)(_,Object(i.a)(Object(i.a)({},e),{},{isCollapsed:a,onClickHandler:function(){r(!a)}}))});var N=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){d.a.get("https://api.github.com/search/repositories?q=react").then((function(e){return e.data.items})).then((function(e){return e.map((function(e){return{forks:e.forks,name:e.name,stars:e.stargazers_count,url:e.html_url}}))})).then((function(e){var t=e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Object(o.v1)()})}));a(t)}))})),Object(v.jsxs)("div",{className:b.a.app,children:[Object(v.jsx)(k,{data:n}),Object(v.jsx)(F,{data:n})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),y()}},[[74,1,2]]]);
//# sourceMappingURL=main.370b24d2.chunk.js.map