(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(10),i=n.n(r),s=n(9),o=n(3),l=n(2),u=n.n(l),j=n(0),_=function(e){var t=e.id,n=e.state,c=e.onClick,a=e.running;return Object(j.jsxs)("div",{className:"".concat(u.a.container," ").concat(t%2===0?u.a.blue:""),onClick:function(){c(t)},children:["O"===n&&Object(j.jsx)("div",{className:u.a.circleContainer,children:Object(j.jsx)("div",{className:u.a.circle})}),"X"===n&&Object(j.jsxs)("div",{className:u.a.x,children:[Object(j.jsx)("span",{className:u.a.line1}),Object(j.jsx)("span",{className:u.a.line2})]}),"empty"===n&&Object(j.jsx)("div",{className:"".concat(u.a.empty," ").concat(a?u.a.pointer:u.a.noPointer)})]})},b=n(6),p=n.n(b),O=n(4),d=n.n(O),f=function(e){var t=e.XCounter,n=e.YCounter,c=e.resetCounter;return Object(j.jsxs)("div",{className:d.a.container,children:[Object(j.jsxs)("div",{className:d.a.textContainer,children:[" ",Object(j.jsxs)("p",{className:d.a.text,children:["X: ",t," "]}),Object(j.jsxs)("p",{className:d.a.text,children:["O: ",n," "]})]}),Object(j.jsx)("button",{className:d.a.resetButton,onClick:c,children:"Reset Counter"})]})};var x=function(){var e=JSON.parse(localStorage.getItem("XCounter"))||0,t=JSON.parse(localStorage.getItem("YCounter"))||0,n=Object(c.useState)(Array.from({length:9},(function(e,t){return"empty"}))),a=Object(o.a)(n,2),r=a[0],i=a[1],l=Object(c.useState)(Array.from({length:9},(function(e,t){return t}))),u=Object(o.a)(l,2),b=u[0],O=u[1],d=Object(c.useState)(!0),x=Object(o.a)(d,2),m=x[0],h=x[1],y=Object(c.useState)(!1),C=Object(o.a)(y,2),N=C[0],v=C[1],g=Object(c.useState)("X"),S=Object(o.a)(g,2),A=S[0],X=S[1],I=Object(c.useState)(e),k=Object(o.a)(I,2),w=k[0],J=k[1],K=Object(c.useState)(t),P=Object(o.a)(K,2),T=P[0],B=P[1];Object(c.useEffect)((function(){window.localStorage.setItem("XCounter",w),window.localStorage.setItem("YCounter",T)}),[w,T]),Object(c.useEffect)((function(){b[0]===b[1]&&b[0]===b[2]||b[3]===b[4]&&b[3]===b[5]||b[6]===b[7]&&b[6]===b[8]||b[0]===b[3]&&b[0]===b[6]||b[1]===b[4]&&b[1]===b[7]||b[2]===b[5]&&b[2]===b[8]||b[0]===b[4]&&b[0]===b[8]||b[2]===b[4]&&b[2]===b[6]?(Y(A),h(!1)):r.includes("empty")||(h(!1),v(!0))}),[b,r]);var E=function(e){m&&("number"===typeof b[e]&&function(e,t){var n=Object(s.a)(b);n[e]=t,O(n)}(e,A),"empty"===r[e]&&function(e,t){var n=Object(s.a)(r);n[e]=t,i(n)}(e,A),X((function(e){return"X"===e?"O":"X"})))},Y=function(e){"X"===e?B((function(e){return e+1})):J((function(e){return e+1}))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:p.a.box,children:[Object(j.jsx)(f,{XCounter:w,resetCounter:function(){J(0),B(0)},YCounter:T}),Object(j.jsx)("h1",{className:p.a.heading,children:"TIC TAC TOE"}),Object(j.jsx)("div",{className:p.a.container,children:r.map((function(e,t){return Object(j.jsx)(_,{id:t,state:e,onClick:E,running:m},t)}))}),!m&&Object(j.jsxs)("div",{className:p.a.popup,children:[N?Object(j.jsx)("p",{children:"TIE"}):Object(j.jsxs)("p",{children:["X"===A?"O":"X"," HAS WON "]}),Object(j.jsx)("button",{onClick:function(){i(Array.from({length:9},(function(e,t){return"empty"}))),O(Array.from({length:9},(function(e,t){return t}))),h(!0),v(!1)},children:"PLAY AGAIN"})]})]})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={circle:"fieldstyle_circle__A1ntS",circleContainer:"fieldstyle_circleContainer__2_QP2",container:"fieldstyle_container__3oxui",blue:"fieldstyle_blue__2MK-9",x:"fieldstyle_x__3Udi_",line1:"fieldstyle_line1__2-BlT",line2:"fieldstyle_line2__2GlDf",empty:"fieldstyle_empty__1KK0K",noPointer:"fieldstyle_noPointer__3yGGI",pointer:"fieldstyle_pointer__3TaAA"}},4:function(e,t,n){e.exports={text:"counter_text__n-uJV",textContainer:"counter_textContainer__2lqJ2",container:"counter_container__4KMpM",resetButton:"counter_resetButton__PhRFW"}},6:function(e,t,n){e.exports={container:"app_container__38Dec",box:"app_box__28iWw",popup:"app_popup__Oej9Z",heading:"app_heading__26Khc"}}},[[16,1,2]]]);
//# sourceMappingURL=main.6148b17a.chunk.js.map