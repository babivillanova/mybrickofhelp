/*! For license information please see main.fd3f447d.chunk.js.LICENSE.txt */
(this["webpackJsonpnft-launch"]=this["webpackJsonpnft-launch"]||[]).push([[1],{124:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},213:function(e,t){},226:function(e,t){},244:function(e,t){},252:function(e,t){},254:function(e,t){},272:function(e,t){},274:function(e,t){},294:function(e,t){},301:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){},306:function(e,t,n){},307:function(e,t,n){},308:function(e,t,n){},309:function(e,t,n){},310:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n(171),c=n.n(r),i=(n(206),n(33),n(14)),s=n(17),o=n(44),l=(n(207),n(172)),d=n(173),u=n(188),h=n(187),m=n(185),b=n(8);function j(){j=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(L){s=function(e,t,n){return e[t]=n}}function o(e,t,n,a){var r=t&&t.prototype instanceof u?t:u,c=Object.create(r.prototype),i=new N(a||[]);return c._invoke=function(e,t,n){var a="suspendedStart";return function(r,c){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw c;return k()}for(n.method=r,n.arg=c;;){var i=n.delegate;if(i){var s=O(i,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var o=l(e,t,n);if("normal"===o.type){if(a=n.done?"completed":"suspendedYield",o.arg===d)continue;return{value:o.arg,done:n.done}}"throw"===o.type&&(a="completed",n.method="throw",n.arg=o.arg)}}}(e,n,i),c}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=o;var d={};function u(){}function h(){}function m(){}var b={};s(b,r,(function(){return this}));var p=Object.getPrototypeOf,f=p&&p(p(A([])));f&&f!==t&&n.call(f,r)&&(b=f);var v=m.prototype=u.prototype=Object.create(b);function g(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function a(r,c,i,s){var o=l(e[r],e,c);if("throw"!==o.type){var d=o.arg,u=d.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){a("next",e,i,s)}),(function(e){a("throw",e,i,s)})):t.resolve(u).then((function(e){d.value=e,i(d)}),(function(e){return a("throw",e,i,s)}))}s(o.arg)}var r;this._invoke=function(e,n){function c(){return new t((function(t,r){a(e,n,t,r)}))}return r=r?r.then(c,c):c()}}function O(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=l(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function y(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(y,this),this.reset(!0)}function A(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,c=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return c.next=c}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=m,s(v,"constructor",m),s(m,"constructor",h),h.displayName=s(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(x.prototype),s(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,a,r,c){void 0===c&&(c=Promise);var i=new x(o(t,n,a,r),c);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(v),s(v,i,"Generator"),s(v,r,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=A,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r],i=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var s=n.call(c,"catchLoc"),o=n.call(c,"finallyLoc");if(s&&o){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var c=r;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=e,i.arg=t,c?(this.method="next",this.next=c.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;w(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:A(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var p=[Object(l.a)(),Object(d.a)(),Object(u.a)(),Object(m.a)()],f=Object(h.a)({wallets:p,chains:[{id:"0x1",token:"ETH",namespace:"evm",label:"Ethereum Mainnet",rpcUrl:"https://ethereum-mainnet--rpc.datahub.figment.io/apikey/a0ca8dabfea145062d347b295a502433"},{id:"0x4",token:"rETH",namespace:"evm",label:"Ethereum Rinkeby Testnet",rpcUrl:"https://ethereum-rinkeby--rpc.datahub.figment.io/apikey/a0ca8dabfea145062d347b295a502433"},{id:"0x89",token:"MATIC",label:"Matic(Polygon) Mainnet",rpcUrl:"https://matic-mainnet.chainstacklabs.com"},{id:"0x13881",token:"MAT",label:"Matic(Polygon) Mumbai Testnet",rpcUrl:"https://matic-mumbai.chainstacklabs.com"},{id:"0x4E454152",token:"ETH",label:"Aurora(Near) Mainnet",rpcUrl:"https://mainnet.aurora.dev\t"},{id:"0x4E454153",token:"ETH",label:"Aurora(Near) Testnet",rpcUrl:"https://testnet.aurora.dev/"},{id:"0xfa",token:"FTM",label:"Fantom Mainnet",rpcUrl:"https://rpc.ftm.tools/"}],appMetadata:{name:"Activate",icon:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",logo:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",description:"Fractionalized Real Estate",recommendedInjectedWallets:[{name:"Coinbase",url:"https://wallet.coinbase.com/"},{name:"MetaMask",url:"https://metamask.io"}]}});var v=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=(t[0],t[1]),r=Object(a.useState)(),c=Object(s.a)(r,2),l=(c[0],c[1]),d=Object(a.useState)(""),u=Object(s.a)(d,2),h=(u[0],u[1]),m=Object(a.useState)(),p=Object(s.a)(m,2),v=(p[0],p[1]),g=Object(a.useState)(),x=Object(s.a)(g,2),O=(x[0],x[1],Object(a.useState)(!1)),y=Object(s.a)(O,2),w=(y[0],y[1]),N=function(){var e=Object(i.a)(j().mark((function e(){var t,a,r,c,i;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.connectWallet();case 3:t=e.sent,w(!0),a=t[0],r=a.accounts,c=a.chains,i=a.provider,l(r[0].address),v(c[0].id),n(i),w(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),h(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(j().mark((function e(){var t,n,a;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.state.get().wallets;case 2:if(t=e.sent,n=Object(s.a)(t,1),a=n[0]){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,f.disconnectWallet({label:a.label});case 9:k();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){l(""),v(""),n()};return Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsx)("div",{className:"navbar-container",children:Object(b.jsx)("div",{className:"navbar__wrapper",children:Object(b.jsxs)("ul",{className:"navbar__nav",children:[Object(b.jsx)("img",{className:"navbar-logo",src:"data:image/png;base64,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"}),Object(b.jsx)(o.b,{to:"/MARKETPLACE",className:"navbar-menu",children:"MARKETPLACE"}),Object(b.jsx)(o.b,{to:"/participate",className:"navbar-menu",children:"\u0412\u0417\u042f\u0422\u042c \u0423\u0427\u0410\u0421\u0422\u042c \u0422\u0423\u0422"}),Object(b.jsx)(o.b,{to:"/governance",className:"navbar-menu",children:"GOVERNANCE"}),Object(b.jsx)(o.b,{to:"/participate",className:"navbar-menu",children:"FAQ"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:N,children:"Connect Wallet"}),Object(b.jsx)("button",{onClick:A,children:"Disconnect"})]})]})})})})},g=n(27),x=(n(301),["btn--primmary","btn--secondary","btn--outline"]),O=["btn--medium","btn--large"],y=function(e){var t=e.children,n=e.type,a=e.onClick,r=e.buttonStyle;x.includes(r)||x[0],O.includes(r)||O[0];return Object(b.jsx)(o.b,{to:"/marketplace",className:"btn-mobile",children:Object(b.jsx)("button",{className:"btn ${checkButtonStyle} ${checkButtonSize}",onClick:a,type:n,children:t})})},w=(n(302),n.p+"static/media/Hero.da612591.png");var N=function(){return Object(b.jsx)("div",{className:"hero-container",children:Object(b.jsx)("div",{className:"onboarding-container",children:Object(b.jsx)("img",{src:w,alt:"bla"})})})};n(303);n(124);var A=function(){return Object(b.jsxs)("div",{className:"bridge",children:[Object(b.jsxs)("div",{className:"bridge-container",children:[Object(b.jsx)("div",{className:"bridge-text",children:Object(b.jsx)("p",{children:" IF YOU ARE AN INVESTOR"})}),Object(b.jsxs)("div",{className:"explain",children:[Object(b.jsx)("div",{className:"explaintext",children:"Buy an NFT representing partial ownership of the aditional construction area of the building"}),Object(b.jsx)("div",{className:"explaintext",children:"Sponsor a local resident with participatory design voting rights "}),Object(b.jsx)("div",{className:"explaintext",children:"Receive 0,5% Yeild after construction completion and rented"})]})]}),Object(b.jsx)(y,{children:"BUY NOW"})]})};var k=function(){return Object(b.jsxs)("div",{className:"bridge",children:[Object(b.jsxs)("div",{className:"bridge-container",children:[Object(b.jsx)("div",{className:"bridge-text",children:Object(b.jsx)("p",{children:" IF YOU ARE A UKRANIAN CITIZEN"})}),Object(b.jsxs)("div",{className:"explain",children:[Object(b.jsx)("div",{className:"explaintext",children:"Check the eligibility of your building. Find more info on About"}),Object(b.jsx)("div",{className:"explaintext",children:"Receive an NFT to vote on architectonic decisions of your building "}),Object(b.jsx)("div",{className:"explaintext",children:"Help strengthen Ukrain architectural identity and sustainble vision "})]})]}),Object(b.jsx)(y,{children:"\u0412\u0417\u042f\u0422\u042c \u0423\u0427\u0410\u0421\u0422\u042c \u0422\u0423\u0422"})]})},L=n(32),E=n.n(L),C=(n(306),n.p+"static/media/Hero2.fa35b58e.png");E.a.accessToken="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";var S=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(31.1656),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(48.3794),o=Object(s.a)(i,2),l=o[0],d=o[1],u=Object(a.useState)(7),h=Object(s.a)(u,2),m=h[0],j=h[1];return Object(a.useEffect)((function(){var t=new E.a.Map({container:e.current,style:"mapbox://styles/mapbox/light-v9",center:[r,l],zoom:m});return t.addControl(new E.a.NavigationControl,"top-right"),t.on("move",(function(){c(t.getCenter().lng.toFixed(4)),d(t.getCenter().lat.toFixed(4)),j(t.getZoom().toFixed(2))})),function(){return t.remove()}}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"map-container2",ref:e}),Object(b.jsx)("img",{className:"hero22",src:C})]})},F=n.p+"static/media/Group10.f49757ed.png";var T=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"bridge",children:Object(b.jsxs)("div",{className:"bridge-container",children:[Object(b.jsx)("div",{className:"bridge-text",children:Object(b.jsx)("p",{children:" HOW DOES IT WORK?"})}),Object(b.jsx)("div",{className:"explain",children:Object(b.jsx)("img",{className:"explaintext1",src:F,alt:"blas"})})]})})})},M=(n(307),[{src:" https://images.adsttc.com/media/images/6019/cebe/f91c/8198/f400/0184/slideshow/20201013DSCF7203amikhaylov-Pano-1.jpg?1612304034"},{src:" https://images.adsttc.com/media/images/6019/cebe/f91c/8198/f400/0184/slideshow/20201013DSCF7203amikhaylov-Pano-1.jpg?1612304034"},{src:" https://images.adsttc.com/media/images/6019/cebe/f91c/8198/f400/0184/slideshow/20201013DSCF7203amikhaylov-Pano-1.jpg?1612304034"},{src:" https://images.adsttc.com/media/images/5d2b/d453/284d/d1c1/d200/0437/slideshow/IMG_3967_2.jpg?1563153421"},{src:" https://images.adsttc.com/media/images/5d2b/d453/284d/d1c1/d200/0437/slideshow/IMG_3967_2.jpg?1563153421"},{src:" https://images.adsttc.com/media/images/5d2b/d720/284d/d1dc/5c00/0001/slideshow/17-09-16_364-69.jpg?1563154105 "},{src:" https://images.adsttc.com/media/images/5d2b/d720/284d/d1dc/5c00/0001/slideshow/17-09-16_364-69.jpg?1563154105 "},{src:" https://images.adsttc.com/media/images/5d2b/d720/284d/d1dc/5c00/0001/slideshow/17-09-16_364-69.jpg?1563154105 "}]),U=[{src:"https://images.adsttc.com/media/images/5a32/793a/b22e/386c/0e00/01f0/newsletter/2.jpg?1513257261"},{src:"https://images.adsttc.com/media/images/5a32/793a/b22e/386c/0e00/01f0/newsletter/2.jpg?1513257261"},{src:"https://images.adsttc.com/media/images/53fd/5ba7/c07a/8038/8e00/094d/medium_jpg/PORTADA.jpg?1409112975"},{src:"https://images.adsttc.com/media/images/53fd/5ba7/c07a/8038/8e00/094d/medium_jpg/PORTADA.jpg?1409112975"},{src:"https://images.adsttc.com/media/images/5126/7811/b3fc/4bb0/dd00/00c0/newsletter/1_voomy_It_Park.jpg?1414427301"}],I=[{src:" https://images.adsttc.com/media/images/6070/8c91/f91c/81e2/4d00/002e/medium_jpg/76_-_LAN_-_NOLISTRA_-_Strasbourg_%C2%A9_Charly_Broyez.jpg?1617988741"},{src:"https://images.adsttc.com/media/images/6244/1e20/ab3a/8601/66fa/04f2/medium_jpg/kota-house-5.jpg?1648631348"},{src:"https://images.adsttc.com/media/images/6244/1e20/ab3a/8601/66fa/04f2/medium_jpg/kota-house-5.jpg?1648631348"},{src:"https://images.adsttc.com/media/images/6244/1e20/ab3a/8601/66fa/04f2/medium_jpg/kota-house-5.jpg?1648631348"},{src:" https://www.kathmanduandbeyond.com/wp-content/uploads/2017/10/Kiev-Quarter-Slavutych-Ukraine-3-2.jpg"},{src:" https://www.kathmanduandbeyond.com/wp-content/uploads/2017/10/Chernihiv-Quarter-Slavutych-Ukraine-1-3.jpg"},{src:" https://www.kathmanduandbeyond.com/wp-content/uploads/2017/10/Chernihiv-Quarter-Slavutych-Ukraine-1-3.jpg"}],G=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=(t[0],t[1],Object(a.useState)(M)),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"nft-panel",children:[Object(b.jsxs)("div",{className:"blockchains",children:[Object(b.jsx)("button",{className:"button",onClick:function(){return i(M)},children:"NEAR"}),Object(b.jsx)("button",{className:"button",onClick:function(){return i(U)},children:"POLYGON"}),Object(b.jsx)("button",{className:"button",onClick:function(){return i(I)},children:"Solana"})]}),Object(b.jsx)("div",{children:c.map((function(e,t){return Object(b.jsx)("img",{className:"nftimage",src:e.src,alt:"Make sure to include a alt tag, because react might throw an error at build"},t)}))})]})})};var R=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{}),Object(b.jsx)(A,{}),Object(b.jsx)(S,{}),Object(b.jsx)(k,{}),Object(b.jsx)(T,{})]})};n(308);E.a.accessToken="pk.eyJ1IjoibW1pc3RyeTIiLCJhIjoiY2trZnJzMjZhMDZncDJ3cGR3M3p0bXc1aSJ9.CdLRZiNADT91-W-HAhC5QQ";var V=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(30.91656),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(48.6794),o=Object(s.a)(i,2),l=o[0],d=o[1],u=Object(a.useState)(6),h=Object(s.a)(u,2),m=h[0],j=h[1];return Object(a.useEffect)((function(){var t=new E.a.Map({container:e.current,style:"mapbox://styles/mapbox/light-v9",center:[r,l],zoom:m});t.addControl(new E.a.NavigationControl,"top-right"),t.scrollZoom.disable();var n=document.createElement("div");n.className="markercss";var a=document.createElement("div");a.className="markercss";var i=document.createElement("div");i.className="markercss";var s=document.createElement("div");s.className="markercss";new E.a.Marker(n).setLngLat([30.91656,51.2994]).addTo(t),new E.a.Marker(a).setLngLat([31.81656,51.8994]).addTo(t),new E.a.Marker(i).setLngLat([31.70656,51.7994]).addTo(t),new E.a.Marker(s).setLngLat([32.11656,51.6994]).addTo(t);return t.on("move",(function(){new E.a.Marker(n).setLngLat([30.91656,51.2994]).addTo(t),new E.a.Marker(a).setLngLat([31.81656,51.8994]).addTo(t),new E.a.Marker(i).setLngLat([31.70656,51.7994]).addTo(t),new E.a.Marker(s).setLngLat([32.11656,51.6994]).addTo(t);c(t.getCenter().lng.toFixed(4)),d(t.getCenter().lat.toFixed(4)),j(t.getZoom().toFixed(2))})),function(){return t.remove()}}),[]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"introtext",children:["Choose a building available for NFT partial ",Object(b.jsx)("br",{})," ownership purchasing"]}),Object(b.jsx)("div",{className:"sidebarStyle",children:Object(b.jsxs)("div",{children:["Longitude: ",r," | Latitude: ",l," | Zoom: ",m]})}),Object(b.jsx)("div",{className:"map-container",ref:e}),Object(b.jsx)("img",{className:"hero2",src:C})]})};var Y=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(V,{}),Object(b.jsx)(G,{})]})};n(309);var P=function(){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsx)("div",{className:"avatarname",children:"Your voting rights start here "}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"avatar",children:"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udf3e"})," ",Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"balance",children:["You own ",Object(b.jsx)("br",{})," 124 x \ud83d\udd30"]})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"cards__container",children:[Object(b.jsx)("div",{className:"cardbutton",children:"Open to Vote"}),Object(b.jsx)("div",{className:"subject",children:"Decide on what is going to be the aditional construction"}),Object(b.jsxs)("div",{className:"description",children:["Vote for one or more alternatives in between the proposals.",Object(b.jsx)("br",{}),"Consider each alternative's Carbon Emission, e the square meter amount necessary for garanting the revenew necessary for the whole building reconstruction.  "]}),Object(b.jsx)("div",{className:"description",children:"\ud83d\udd30 Earn 10 vote tokens"})]}),";",Object(b.jsxs)("div",{className:"cards__container",children:[Object(b.jsx)("div",{className:"cardbutton",children:"Open to Vote"}),Object(b.jsx)("div",{className:"subject",children:"Vote for your prefered architectonic style "}),Object(b.jsx)("div",{className:"description",children:"From the architects firms listed, check which studio owns the portfolio with the most appealing style for the new construction."}),Object(b.jsx)("div",{className:"description",children:"\ud83d\udd30 Earn 3 vote tokens"})]}),";",Object(b.jsxs)("div",{className:"cards__container",children:[Object(b.jsx)("div",{className:"cardbutton",children:"Processing"}),Object(b.jsx)("div",{className:"subject",children:"Decide on reconstruction package alternative"}),Object(b.jsx)("div",{className:"description",children:" and anywhere"}),Object(b.jsx)("div",{className:"description",children:"\ud83d\udd30 Earn 3 vote tokens"})]}),";"]})]})};var W=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(P,{})})};var B=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(V,{}),Object(b.jsx)(G,{})]})};var J=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(k,{}),Object(b.jsx)(T,{})]})};var K=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(v,{}),Object(b.jsxs)(g.c,{children:[Object(b.jsx)(g.a,{path:"/",exact:!0,component:R}),Object(b.jsx)(g.a,{path:"/marketplace",component:Y}),Object(b.jsx)(g.a,{path:"/participate",component:J}),Object(b.jsx)(g.a,{path:"/governance",component:W}),Object(b.jsx)(g.a,{path:"/faq",component:B}),Object(b.jsx)(g.a,{path:"/privacy-policy",component:function(){return window.location.href="https://example.com/1234",null}})]})]})})};c.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(K,{}))},33:function(e,t,n){}},[[310,2,3]]]);
//# sourceMappingURL=main.fd3f447d.chunk.js.map