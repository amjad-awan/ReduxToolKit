(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(32)},22:function(e,n,t){},24:function(e,n,t){e.exports=t.p+"static/media/logo.06e73328.svg"},25:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),a=t(12),o=t.n(a),u=(t(22),t(24),t(25),t(3)),l=t(5),i=Object(l.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){console.log(e),e.value+=n.payload}}}),m=i.actions,d=m.increment,f=(m.decrement,m.incrementByAmount),s=i.reducer,E=Object(l.a)({reducer:{counter:s}});var v=function(){var e=Object(u.c)(function(e){return e.counter.value}),n=Object(u.b)();return r.a.createElement("div",null,r.a.createElement("h1",null,e),r.a.createElement("button",{onClick:function(){return n(d())}},"INCREMENT"),r.a.createElement("button",{onClick:function(){return n(f(10))}},"VAL"))};var b=function(){return r.a.createElement(u.a,{store:E},r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"REDUX"),r.a.createElement(v,null)))},p=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,33)).then(function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),a(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null))),p()}},[[15,3,2]]]);
//# sourceMappingURL=main.07e6ae7d.chunk.js.map