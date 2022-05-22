(this["webpackJsonpnft-launch"]=this["webpackJsonpnft-launch"]||[]).push([[14],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"Provider",(function(){return n.b})),r.d(t,"BaseProvider",(function(){return s.a})),r.d(t,"Resolver",(function(){return s.b})),r.d(t,"UrlJsonRpcProvider",(function(){return b.b})),r.d(t,"FallbackProvider",(function(){return te})),r.d(t,"AlchemyProvider",(function(){return v})),r.d(t,"AlchemyWebSocketProvider",(function(){return y})),r.d(t,"AnkrProvider",(function(){return O})),r.d(t,"CloudflareProvider",(function(){return T})),r.d(t,"EtherscanProvider",(function(){return L})),r.d(t,"InfuraProvider",(function(){return ie})),r.d(t,"InfuraWebSocketProvider",(function(){return se})),r.d(t,"JsonRpcProvider",(function(){return u.a})),r.d(t,"JsonRpcBatchProvider",(function(){return ae})),r.d(t,"NodesmithProvider",(function(){return ue})),r.d(t,"PocketProvider",(function(){return he})),r.d(t,"StaticJsonRpcProvider",(function(){return b.a})),r.d(t,"Web3Provider",(function(){return fe})),r.d(t,"WebSocketProvider",(function(){return f})),r.d(t,"IpcProvider",(function(){return re})),r.d(t,"JsonRpcSigner",(function(){return u.b})),r.d(t,"getDefaultProvider",(function(){return ke})),r.d(t,"getNetwork",(function(){return o.a})),r.d(t,"isCommunityResource",(function(){return a.c})),r.d(t,"isCommunityResourcable",(function(){return a.b})),r.d(t,"showThrottleMessage",(function(){return a.d})),r.d(t,"Formatter",(function(){return a.a}));var n=r(75),o=r(104),s=r(100),i=r(9),a=r(74),c=r(40),u=r(99),l=r(6),d=r(38);let h=null;try{if(h=WebSocket,null==h)throw new Error("inject please")}catch(we){const e=new l.a(d.a);h=function(){e.throwError("WebSockets not supported in this environment",l.a.errors.UNSUPPORTED_OPERATION,{operation:"new WebSocket()"})}}var p=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(t){s(t)}}function a(e){try{c(n.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const m=new l.a(d.a);let g=1;class f extends u.a{constructor(e,t){"any"===t&&m.throwError("WebSocketProvider does not support 'any' network yet",l.a.errors.UNSUPPORTED_OPERATION,{operation:"network:any"}),super("string"===typeof e?e:"_websocket",t),this._pollingInterval=-1,this._wsReady=!1,"string"===typeof e?Object(i.d)(this,"_websocket",new h(this.connection.url)):Object(i.d)(this,"_websocket",e),Object(i.d)(this,"_requests",{}),Object(i.d)(this,"_subs",{}),Object(i.d)(this,"_subIds",{}),Object(i.d)(this,"_detectNetwork",super.detectNetwork()),this.websocket.onopen=()=>{this._wsReady=!0,Object.keys(this._requests).forEach((e=>{this.websocket.send(this._requests[e].payload)}))},this.websocket.onmessage=e=>{const t=e.data,r=JSON.parse(t);if(null!=r.id){const e=String(r.id),n=this._requests[e];if(delete this._requests[e],void 0!==r.result)n.callback(null,r.result),this.emit("debug",{action:"response",request:JSON.parse(n.payload),response:r.result,provider:this});else{let e=null;r.error?(e=new Error(r.error.message||"unknown error"),Object(i.d)(e,"code",r.error.code||null),Object(i.d)(e,"response",t)):e=new Error("unknown error"),n.callback(e,void 0),this.emit("debug",{action:"response",error:e,request:JSON.parse(n.payload),provider:this})}}else if("eth_subscription"===r.method){const e=this._subs[r.params.subscription];e&&e.processFunc(r.params.result)}else console.warn("this should not happen")};const r=setInterval((()=>{this.emit("poll")}),1e3);r.unref&&r.unref()}get websocket(){return this._websocket}detectNetwork(){return this._detectNetwork}get pollingInterval(){return 0}resetEventsBlock(e){m.throwError("cannot reset events block on WebSocketProvider",l.a.errors.UNSUPPORTED_OPERATION,{operation:"resetEventBlock"})}set pollingInterval(e){m.throwError("cannot set polling interval on WebSocketProvider",l.a.errors.UNSUPPORTED_OPERATION,{operation:"setPollingInterval"})}poll(){return p(this,void 0,void 0,(function*(){return null}))}set polling(e){e&&m.throwError("cannot set polling on WebSocketProvider",l.a.errors.UNSUPPORTED_OPERATION,{operation:"setPolling"})}send(e,t){const r=g++;return new Promise(((n,o)=>{const s=JSON.stringify({method:e,params:t,id:r,jsonrpc:"2.0"});this.emit("debug",{action:"request",request:JSON.parse(s),provider:this}),this._requests[String(r)]={callback:function(e,t){return e?o(e):n(t)},payload:s},this._wsReady&&this.websocket.send(s)}))}static defaultUrl(){return"ws://localhost:8546"}_subscribe(e,t,r){return p(this,void 0,void 0,(function*(){let n=this._subIds[e];null==n&&(n=Promise.all(t).then((e=>this.send("eth_subscribe",e))),this._subIds[e]=n);const o=yield n;this._subs[o]={tag:e,processFunc:r}}))}_startEvent(e){switch(e.type){case"block":this._subscribe("block",["newHeads"],(e=>{const t=c.a.from(e.number).toNumber();this._emitted.block=t,this.emit("block",t)}));break;case"pending":this._subscribe("pending",["newPendingTransactions"],(e=>{this.emit("pending",e)}));break;case"filter":this._subscribe(e.tag,["logs",this._getFilter(e.filter)],(t=>{null==t.removed&&(t.removed=!1),this.emit(e.filter,this.formatter.filterLog(t))}));break;case"tx":{const t=e=>{const t=e.hash;this.getTransactionReceipt(t).then((e=>{e&&this.emit(t,e)}))};t(e),this._subscribe("tx",["newHeads"],(e=>{this._events.filter((e=>"tx"===e.type)).forEach(t)}));break}case"debug":case"poll":case"willPoll":case"didPoll":case"error":break;default:console.log("unhandled:",e)}}_stopEvent(e){let t=e.tag;if("tx"===e.type){if(this._events.filter((e=>"tx"===e.type)).length)return;t="tx"}else if(this.listenerCount(e.event))return;const r=this._subIds[t];r&&(delete this._subIds[t],r.then((e=>{this._subs[e]&&(delete this._subs[e],this.send("eth_unsubscribe",[e]))})))}destroy(){return p(this,void 0,void 0,(function*(){this.websocket.readyState===h.CONNECTING&&(yield new Promise((e=>{this.websocket.onopen=function(){e(!0)},this.websocket.onerror=function(){e(!1)}}))),this.websocket.close(1e3)}))}}var b=r(150);const k=new l.a(d.a),w="_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";class y extends f{constructor(e,t){const r=new v(e,t);super(r.connection.url.replace(/^http/i,"ws").replace(".alchemyapi.",".ws.alchemyapi."),r.network),Object(i.d)(this,"apiKey",r.apiKey)}isCommunityResource(){return this.apiKey===w}}class v extends b.b{static getWebSocketProvider(e,t){return new y(e,t)}static getApiKey(e){return null==e?w:(e&&"string"!==typeof e&&k.throwArgumentError("invalid apiKey","apiKey",e),e)}static getUrl(e,t){let r=null;switch(e.name){case"homestead":r="eth-mainnet.alchemyapi.io/v2/";break;case"ropsten":r="eth-ropsten.alchemyapi.io/v2/";break;case"rinkeby":r="eth-rinkeby.alchemyapi.io/v2/";break;case"goerli":r="eth-goerli.alchemyapi.io/v2/";break;case"kovan":r="eth-kovan.alchemyapi.io/v2/";break;case"matic":r="polygon-mainnet.g.alchemy.com/v2/";break;case"maticmum":r="polygon-mumbai.g.alchemy.com/v2/";break;case"arbitrum":r="arb-mainnet.g.alchemy.com/v2/";break;case"arbitrum-rinkeby":r="arb-rinkeby.g.alchemy.com/v2/";break;case"optimism":r="opt-mainnet.g.alchemy.com/v2/";break;case"optimism-kovan":r="opt-kovan.g.alchemy.com/v2/";break;default:k.throwArgumentError("unsupported network","network",arguments[0])}return{allowGzip:!0,url:"https://"+r+t,throttleCallback:(e,r)=>(t===w&&Object(a.d)(),Promise.resolve(!0))}}isCommunityResource(){return this.apiKey===w}}const E=new l.a(d.a),P="9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";function j(e){switch(e){case"homestead":return"rpc.ankr.com/eth/";case"ropsten":return"rpc.ankr.com/eth_ropsten/";case"rinkeby":return"rpc.ankr.com/eth_rinkeby/";case"goerli":return"rpc.ankr.com/eth_goerli/";case"matic":return"rpc.ankr.com/polygon/";case"arbitrum":return"rpc.ankr.com/arbitrum/"}return E.throwArgumentError("unsupported network","name",e)}class O extends b.b{isCommunityResource(){return this.apiKey===P}static getApiKey(e){return null==e?P:e}static getUrl(e,t){null==t&&(t=P);const r={allowGzip:!0,url:"https://"+j(e.name)+t,throttleCallback:(e,r)=>(t.apiKey===P&&Object(a.d)(),Promise.resolve(!0))};return null!=t.projectSecret&&(r.user="",r.password=t.projectSecret),r}}var N=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(t){s(t)}}function a(e){try{c(n.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const _=new l.a(d.a);class T extends b.b{static getApiKey(e){return null!=e&&_.throwArgumentError("apiKey not supported for cloudflare","apiKey",e),null}static getUrl(e,t){let r=null;if("homestead"===e.name)r="https://cloudflare-eth.com/";else _.throwArgumentError("unsupported network","network",arguments[0]);return r}perform(e,t){const r=Object.create(null,{perform:{get:()=>super.perform}});return N(this,void 0,void 0,(function*(){if("getBlockNumber"===e){return(yield r.perform.call(this,"getBlock",{blockTag:"latest"})).number}return r.perform.call(this,e,t)}))}}var I=r(3),R=r(64),S=r(37),A=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(t){s(t)}}function a(e){try{c(n.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const B=new l.a(d.a);function x(e){const t={};for(let r in e){if(null==e[r])continue;let n=e[r];"type"===r&&0===n||(n={type:!0,gasLimit:!0,gasPrice:!0,maxFeePerGs:!0,maxPriorityFeePerGas:!0,nonce:!0,value:!0}[r]?Object(I.f)(Object(I.h)(n)):"accessList"===r?"["+Object(R.a)(n).map((e=>'{address:"'.concat(e.address,'",storageKeys:["').concat(e.storageKeys.join('","'),'"]}'))).join(",")+"]":Object(I.h)(n),t[r]=n)}return t}function C(e){if(0==e.status&&("No records found"===e.message||"No transactions found"===e.message))return e.result;if(1!=e.status||"OK"!=e.message){const t=new Error("invalid response");throw t.result=JSON.stringify(e),(e.result||"").toLowerCase().indexOf("rate limit")>=0&&(t.throttleRetry=!0),t}return e.result}function K(e){if(e&&0==e.status&&"NOTOK"==e.message&&(e.result||"").toLowerCase().indexOf("rate limit")>=0){const t=new Error("throttled response");throw t.result=JSON.stringify(e),t.throttleRetry=!0,t}if("2.0"!=e.jsonrpc){const t=new Error("invalid response");throw t.result=JSON.stringify(e),t}if(e.error){const t=new Error(e.error.message||"unknown error");throw e.error.code&&(t.code=e.error.code),e.error.data&&(t.data=e.error.data),t}return e.result}function U(e){if("pending"===e)throw new Error("pending not supported");return"latest"===e?e:parseInt(e.substring(2),16)}const q="9D13ZE7XSBTJ94N9BNJ2MA33VMAY2YPIRB";function D(e,t,r){if("call"===e&&t.code===l.a.errors.SERVER_ERROR){const e=t.error;if(e&&(e.message.match(/reverted/i)||e.message.match(/VM execution error/i))){let r=e.data;if(r&&(r="0x"+r.replace(/^.*0x/i,"")),Object(I.k)(r))return r;B.throwError("missing revert data in call exception",l.a.errors.CALL_EXCEPTION,{error:t,data:"0x"})}}let n=t.message;throw t.code===l.a.errors.SERVER_ERROR&&(t.error&&"string"===typeof t.error.message?n=t.error.message:"string"===typeof t.body?n=t.body:"string"===typeof t.responseText&&(n=t.responseText)),n=(n||"").toLowerCase(),n.match(/insufficient funds/)&&B.throwError("insufficient funds for intrinsic transaction cost",l.a.errors.INSUFFICIENT_FUNDS,{error:t,method:e,transaction:r}),n.match(/same hash was already imported|transaction nonce is too low|nonce too low/)&&B.throwError("nonce has already been used",l.a.errors.NONCE_EXPIRED,{error:t,method:e,transaction:r}),n.match(/another transaction with same nonce/)&&B.throwError("replacement fee too low",l.a.errors.REPLACEMENT_UNDERPRICED,{error:t,method:e,transaction:r}),n.match(/execution failed due to an exception|execution reverted/)&&B.throwError("cannot estimate gas; transaction may fail or may require manual gas limit",l.a.errors.UNPREDICTABLE_GAS_LIMIT,{error:t,method:e,transaction:r}),t}class L extends s.a{constructor(e,t){super(e),Object(i.d)(this,"baseUrl",this.getBaseUrl()),Object(i.d)(this,"apiKey",t||q)}getBaseUrl(){switch(this.network?this.network.name:"invalid"){case"homestead":return"https://api.etherscan.io";case"ropsten":return"https://api-ropsten.etherscan.io";case"rinkeby":return"https://api-rinkeby.etherscan.io";case"kovan":return"https://api-kovan.etherscan.io";case"goerli":return"https://api-goerli.etherscan.io";case"optimism":return"https://api-optimistic.etherscan.io"}return B.throwArgumentError("unsupported network","network",this.network.name)}getUrl(e,t){const r=Object.keys(t).reduce(((e,r)=>{const n=t[r];return null!=n&&(e+="&".concat(r,"=").concat(n)),e}),""),n=this.apiKey?"&apikey=".concat(this.apiKey):"";return"".concat(this.baseUrl,"/api?module=").concat(e).concat(r).concat(n)}getPostUrl(){return"".concat(this.baseUrl,"/api")}getPostData(e,t){return t.module=e,t.apikey=this.apiKey,t}fetch(e,t,r){return A(this,void 0,void 0,(function*(){const n=r?this.getPostUrl():this.getUrl(e,t),o=r?this.getPostData(e,t):null,s="proxy"===e?K:C;this.emit("debug",{action:"request",request:n,provider:this});const c={url:n,throttleSlotInterval:1e3,throttleCallback:(e,t)=>(this.isCommunityResource()&&Object(a.d)(),Promise.resolve(!0))};let u=null;o&&(c.headers={"content-type":"application/x-www-form-urlencoded; charset=UTF-8"},u=Object.keys(o).map((e=>"".concat(e,"=").concat(o[e]))).join("&"));const l=yield Object(S.a)(c,u,s||K);return this.emit("debug",{action:"response",request:n,response:Object(i.c)(l),provider:this}),l}))}detectNetwork(){return A(this,void 0,void 0,(function*(){return this.network}))}perform(e,t){const r=Object.create(null,{perform:{get:()=>super.perform}});return A(this,void 0,void 0,(function*(){switch(e){case"getBlockNumber":return this.fetch("proxy",{action:"eth_blockNumber"});case"getGasPrice":return this.fetch("proxy",{action:"eth_gasPrice"});case"getBalance":return this.fetch("account",{action:"balance",address:t.address,tag:t.blockTag});case"getTransactionCount":return this.fetch("proxy",{action:"eth_getTransactionCount",address:t.address,tag:t.blockTag});case"getCode":return this.fetch("proxy",{action:"eth_getCode",address:t.address,tag:t.blockTag});case"getStorageAt":return this.fetch("proxy",{action:"eth_getStorageAt",address:t.address,position:t.position,tag:t.blockTag});case"sendTransaction":return this.fetch("proxy",{action:"eth_sendRawTransaction",hex:t.signedTransaction},!0).catch((e=>D("sendTransaction",e,t.signedTransaction)));case"getBlock":if(t.blockTag)return this.fetch("proxy",{action:"eth_getBlockByNumber",tag:t.blockTag,boolean:t.includeTransactions?"true":"false"});throw new Error("getBlock by blockHash not implemented");case"getTransaction":return this.fetch("proxy",{action:"eth_getTransactionByHash",txhash:t.transactionHash});case"getTransactionReceipt":return this.fetch("proxy",{action:"eth_getTransactionReceipt",txhash:t.transactionHash});case"call":{if("latest"!==t.blockTag)throw new Error("EtherscanProvider does not support blockTag for call");const e=x(t.transaction);e.module="proxy",e.action="eth_call";try{return yield this.fetch("proxy",e,!0)}catch(we){return D("call",we,t.transaction)}}case"estimateGas":{const e=x(t.transaction);e.module="proxy",e.action="eth_estimateGas";try{return yield this.fetch("proxy",e,!0)}catch(we){return D("estimateGas",we,t.transaction)}}case"getLogs":{const e={action:"getLogs"};if(t.filter.fromBlock&&(e.fromBlock=U(t.filter.fromBlock)),t.filter.toBlock&&(e.toBlock=U(t.filter.toBlock)),t.filter.address&&(e.address=t.filter.address),t.filter.topics&&t.filter.topics.length>0&&(t.filter.topics.length>1&&B.throwError("unsupported topic count",l.a.errors.UNSUPPORTED_OPERATION,{topics:t.filter.topics}),1===t.filter.topics.length)){const r=t.filter.topics[0];"string"===typeof r&&66===r.length||B.throwError("unsupported topic format",l.a.errors.UNSUPPORTED_OPERATION,{topic0:r}),e.topic0=r}const r=yield this.fetch("logs",e);let n={};for(let t=0;t<r.length;t++){const e=r[t];if(null==e.blockHash){if(null==n[e.blockNumber]){const t=yield this.getBlock(e.blockNumber);t&&(n[e.blockNumber]=t.hash)}e.blockHash=n[e.blockNumber]}}return r}case"getEtherPrice":return"homestead"!==this.network.name?0:parseFloat((yield this.fetch("stats",{action:"ethprice"})).ethusd)}return r.perform.call(this,e,t)}))}getHistory(e,t,r){return A(this,void 0,void 0,(function*(){const n={action:"txlist",address:yield this.resolveName(e),startblock:null==t?0:t,endblock:null==r?99999999:r,sort:"asc"};return(yield this.fetch("account",n)).map((e=>{["contractAddress","to"].forEach((function(t){""==e[t]&&delete e[t]})),null==e.creates&&null!=e.contractAddress&&(e.creates=e.contractAddress);const t=this.formatter.transactionResponse(e);return e.timeStamp&&(t.timestamp=parseInt(e.timeStamp)),t}))}))}isCommunityResource(){return this.apiKey===q}}var F=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(t){s(t)}}function a(e){try{c(n.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const J=new l.a(d.a);function M(){return(new Date).getTime()}function G(e){let t=null;for(let r=0;r<e.length;r++){const n=e[r];if(null==n)return null;t?t.name===n.name&&t.chainId===n.chainId&&(t.ensAddress===n.ensAddress||null==t.ensAddress&&null==n.ensAddress)||J.throwArgumentError("provider mismatch","networks",e):t=n}return t}function W(e,t){e=e.slice().sort();const r=Math.floor(e.length/2);if(e.length%2)return e[r];const n=e[r-1],o=e[r];return null!=t&&Math.abs(n-o)>t?null:(n+o)/2}function H(e){if(null===e)return"null";if("number"===typeof e||"boolean"===typeof e)return JSON.stringify(e);if("string"===typeof e)return e;if(c.a.isBigNumber(e))return e.toString();if(Array.isArray(e))return JSON.stringify(e.map((e=>H(e))));if("object"===typeof e){const t=Object.keys(e);return t.sort(),"{"+t.map((t=>{let r=e[t];return r="function"===typeof r?"[function]":H(r),JSON.stringify(t)+":"+r})).join(",")+"}"}throw new Error("unknown value type: "+typeof e)}let V=1;function z(e){let t=null,r=null,n=new Promise((n=>{t=function(){r&&(clearTimeout(r),r=null),n()},r=setTimeout(t,e)}));return{cancel:t,getPromise:function(){return n},wait:e=>(n=n.then(e),n)}}const X=[l.a.errors.CALL_EXCEPTION,l.a.errors.INSUFFICIENT_FUNDS,l.a.errors.NONCE_EXPIRED,l.a.errors.REPLACEMENT_UNDERPRICED,l.a.errors.UNPREDICTABLE_GAS_LIMIT],Y=["address","args","errorArgs","errorSignature","method","transaction"];function Z(e,t){const r={weight:e.weight};return Object.defineProperty(r,"provider",{get:()=>e.provider}),e.start&&(r.start=e.start),t&&(r.duration=t-e.start),e.done&&(e.error?r.error=e.error:r.result=e.result||null),r}function Q(e,t,r){let n=H;switch(t){case"getBlockNumber":return function(t){const r=t.map((e=>e.result));let n=W(t.map((e=>e.result)),2);if(null!=n)return n=Math.ceil(n),r.indexOf(n+1)>=0&&n++,n>=e._highestBlockNumber&&(e._highestBlockNumber=n),e._highestBlockNumber};case"getGasPrice":return function(e){const t=e.map((e=>e.result));return t.sort(),t[Math.floor(t.length/2)]};case"getEtherPrice":return function(e){return W(e.map((e=>e.result)))};case"getBalance":case"getTransactionCount":case"getCode":case"getStorageAt":case"call":case"estimateGas":case"getLogs":break;case"getTransaction":case"getTransactionReceipt":n=function(e){return null==e?null:((e=Object(i.g)(e)).confirmations=-1,H(e))};break;case"getBlock":n=r.includeTransactions?function(e){return null==e?null:((e=Object(i.g)(e)).transactions=e.transactions.map((e=>((e=Object(i.g)(e)).confirmations=-1,e))),H(e))}:function(e){return null==e?null:H(e)};break;default:throw new Error("unknown method: "+t)}return function(e,t){return function(r){const n={};r.forEach((t=>{const r=e(t.result);n[r]||(n[r]={count:0,result:t.result}),n[r].count++}));const o=Object.keys(n);for(let e=0;e<o.length;e++){const r=n[o[e]];if(r.count>=t)return r.result}}}(n,e.quorum)}function $(e,t){return F(this,void 0,void 0,(function*(){const r=e.provider;return null!=r.blockNumber&&r.blockNumber>=t||-1===t?r:Object(S.b)((()=>new Promise(((n,o)=>{setTimeout((function(){return r.blockNumber>=t?n(r):e.cancelled?n(null):n(void 0)}),0)}))),{oncePoll:r})}))}function ee(e,t,r,n){return F(this,void 0,void 0,(function*(){let o=e.provider;switch(r){case"getBlockNumber":case"getGasPrice":return o[r]();case"getEtherPrice":if(o.getEtherPrice)return o.getEtherPrice();break;case"getBalance":case"getTransactionCount":case"getCode":return n.blockTag&&Object(I.k)(n.blockTag)&&(o=yield $(e,t)),o[r](n.address,n.blockTag||"latest");case"getStorageAt":return n.blockTag&&Object(I.k)(n.blockTag)&&(o=yield $(e,t)),o.getStorageAt(n.address,n.position,n.blockTag||"latest");case"getBlock":return n.blockTag&&Object(I.k)(n.blockTag)&&(o=yield $(e,t)),o[n.includeTransactions?"getBlockWithTransactions":"getBlock"](n.blockTag||n.blockHash);case"call":case"estimateGas":return n.blockTag&&Object(I.k)(n.blockTag)&&(o=yield $(e,t)),o[r](n.transaction);case"getTransaction":case"getTransactionReceipt":return o[r](n.transactionHash);case"getLogs":{let r=n.filter;return(r.fromBlock&&Object(I.k)(r.fromBlock)||r.toBlock&&Object(I.k)(r.toBlock))&&(o=yield $(e,t)),o.getLogs(r)}}return J.throwError("unknown method error",l.a.errors.UNKNOWN_ERROR,{method:r,params:n})}))}class te extends s.a{constructor(e,t){0===e.length&&J.throwArgumentError("missing providers","providers",e);const r=e.map(((e,t)=>{if(n.b.isProvider(e)){const t=Object(a.c)(e)?2e3:750,r=1;return Object.freeze({provider:e,weight:1,stallTimeout:t,priority:r})}const r=Object(i.g)(e);null==r.priority&&(r.priority=1),null==r.stallTimeout&&(r.stallTimeout=Object(a.c)(e)?2e3:750),null==r.weight&&(r.weight=1);const o=r.weight;return(o%1||o>512||o<1)&&J.throwArgumentError("invalid weight; must be integer in [1, 512]","providers[".concat(t,"].weight"),o),Object.freeze(r)})),o=r.reduce(((e,t)=>e+t.weight),0);null==t?t=o/2:t>o&&J.throwArgumentError("quorum will always fail; larger than total weight","quorum",t);let s=G(r.map((e=>e.provider.network)));null==s&&(s=new Promise(((e,t)=>{setTimeout((()=>{this.detectNetwork().then(e,t)}),0)}))),super(s),Object(i.d)(this,"providerConfigs",Object.freeze(r)),Object(i.d)(this,"quorum",t),this._highestBlockNumber=-1}detectNetwork(){return F(this,void 0,void 0,(function*(){return G(yield Promise.all(this.providerConfigs.map((e=>e.provider.getNetwork()))))}))}perform(e,t){return F(this,void 0,void 0,(function*(){if("sendTransaction"===e){const e=yield Promise.all(this.providerConfigs.map((e=>e.provider.sendTransaction(t.signedTransaction).then((e=>e.hash),(e=>e)))));for(let t=0;t<e.length;t++){const r=e[t];if("string"===typeof r)return r}throw e[0]}-1===this._highestBlockNumber&&"getBlockNumber"!==e&&(yield this.getBlockNumber());const r=Q(this,e,t),n=function(e){for(let t=(e=e.slice()).length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}(this.providerConfigs.map(i.g));n.sort(((e,t)=>e.priority-t.priority));const o=this._highestBlockNumber;let s=0,a=!0;for(;;){const c=M();let u=n.filter((e=>e.runner&&c-e.start<e.stallTimeout)).reduce(((e,t)=>e+t.weight),0);for(;u<this.quorum&&s<n.length;){const r=n[s++],a=V++;r.start=M(),r.staller=z(r.stallTimeout),r.staller.wait((()=>{r.staller=null})),r.runner=ee(r,o,e,t).then((n=>{r.done=!0,r.result=n,this.listenerCount("debug")&&this.emit("debug",{action:"request",rid:a,backend:Z(r,M()),request:{method:e,params:Object(i.c)(t)},provider:this})}),(n=>{r.done=!0,r.error=n,this.listenerCount("debug")&&this.emit("debug",{action:"request",rid:a,backend:Z(r,M()),request:{method:e,params:Object(i.c)(t)},provider:this})})),this.listenerCount("debug")&&this.emit("debug",{action:"request",rid:a,backend:Z(r,null),request:{method:e,params:Object(i.c)(t)},provider:this}),u+=r.weight}const l=[];n.forEach((e=>{!e.done&&e.runner&&(l.push(e.runner),e.staller&&l.push(e.staller.getPromise()))})),l.length&&(yield Promise.race(l));const d=n.filter((e=>e.done&&null==e.error));if(d.length>=this.quorum){const e=r(d);if(void 0!==e)return n.forEach((e=>{e.staller&&e.staller.cancel(),e.cancelled=!0})),e;a||(yield z(100).getPromise()),a=!1}const h=n.reduce(((e,t)=>{if(!t.done||null==t.error)return e;const r=t.error.code;return X.indexOf(r)>=0&&(e[r]||(e[r]={error:t.error,weight:0}),e[r].weight+=t.weight),e}),{});if(Object.keys(h).forEach((e=>{const t=h[e];if(t.weight<this.quorum)return;n.forEach((e=>{e.staller&&e.staller.cancel(),e.cancelled=!0}));const r=t.error,o={};Y.forEach((e=>{null!=r[e]&&(o[e]=r[e])})),J.throwError(r.reason||r.message,e,o)})),0===n.filter((e=>!e.done)).length)break}return n.forEach((e=>{e.staller&&e.staller.cancel(),e.cancelled=!0})),J.throwError("failed to meet quorum",l.a.errors.SERVER_ERROR,{method:e,params:t,results:n.map((e=>Z(e))),provider:this})}))}}const re=null,ne=new l.a(d.a),oe="84842078b09946638c03157f83405213";class se extends f{constructor(e,t){const r=new ie(e,t),n=r.connection;n.password&&ne.throwError("INFURA WebSocket project secrets unsupported",l.a.errors.UNSUPPORTED_OPERATION,{operation:"InfuraProvider.getWebSocketProvider()"});super(n.url.replace(/^http/i,"ws").replace("/v3/","/ws/v3/"),e),Object(i.d)(this,"apiKey",r.projectId),Object(i.d)(this,"projectId",r.projectId),Object(i.d)(this,"projectSecret",r.projectSecret)}isCommunityResource(){return this.projectId===oe}}class ie extends b.b{static getWebSocketProvider(e,t){return new se(e,t)}static getApiKey(e){const t={apiKey:oe,projectId:oe,projectSecret:null};return null==e||("string"===typeof e?t.projectId=e:null!=e.projectSecret?(ne.assertArgument("string"===typeof e.projectId,"projectSecret requires a projectId","projectId",e.projectId),ne.assertArgument("string"===typeof e.projectSecret,"invalid projectSecret","projectSecret","[REDACTED]"),t.projectId=e.projectId,t.projectSecret=e.projectSecret):e.projectId&&(t.projectId=e.projectId),t.apiKey=t.projectId),t}static getUrl(e,t){let r=null;switch(e?e.name:"unknown"){case"homestead":r="mainnet.infura.io";break;case"ropsten":r="ropsten.infura.io";break;case"rinkeby":r="rinkeby.infura.io";break;case"kovan":r="kovan.infura.io";break;case"goerli":r="goerli.infura.io";break;case"matic":r="polygon-mainnet.infura.io";break;case"maticmum":r="polygon-mumbai.infura.io";break;case"optimism":r="optimism-mainnet.infura.io";break;case"optimism-kovan":r="optimism-kovan.infura.io";break;case"arbitrum":r="arbitrum-mainnet.infura.io";break;case"arbitrum-rinkeby":r="arbitrum-rinkeby.infura.io";break;default:ne.throwError("unsupported network",l.a.errors.INVALID_ARGUMENT,{argument:"network",value:e})}const n={allowGzip:!0,url:"https://"+r+"/v3/"+t.projectId,throttleCallback:(e,r)=>(t.projectId===oe&&Object(a.d)(),Promise.resolve(!0))};return null!=t.projectSecret&&(n.user="",n.password=t.projectSecret),n}isCommunityResource(){return this.projectId===oe}}class ae extends u.a{send(e,t){const r={method:e,params:t,id:this._nextId++,jsonrpc:"2.0"};null==this._pendingBatch&&(this._pendingBatch=[]);const n={request:r,resolve:null,reject:null},o=new Promise(((e,t)=>{n.resolve=e,n.reject=t}));return this._pendingBatch.push(n),this._pendingBatchAggregator||(this._pendingBatchAggregator=setTimeout((()=>{const e=this._pendingBatch;this._pendingBatch=null,this._pendingBatchAggregator=null;const t=e.map((e=>e.request));return this.emit("debug",{action:"requestBatch",request:Object(i.c)(t),provider:this}),Object(S.a)(this.connection,JSON.stringify(t)).then((r=>{this.emit("debug",{action:"response",request:t,response:r,provider:this}),e.forEach(((e,t)=>{const n=r[t];if(n.error){const t=new Error(n.error.message);t.code=n.error.code,t.data=n.error.data,e.reject(t)}else e.resolve(n.result)}))}),(r=>{this.emit("debug",{action:"response",error:r,request:t,provider:this}),e.forEach((e=>{e.reject(r)}))}))}),10)),o}}const ce=new l.a(d.a);class ue extends b.b{static getApiKey(e){return e&&"string"!==typeof e&&ce.throwArgumentError("invalid apiKey","apiKey",e),e||"ETHERS_JS_SHARED"}static getUrl(e,t){ce.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");let r=null;switch(e.name){case"homestead":r="https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";break;case"ropsten":r="https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";break;case"rinkeby":r="https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";break;case"goerli":r="https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";break;case"kovan":r="https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";break;default:ce.throwArgumentError("unsupported network","network",arguments[0])}return r+"?apiKey="+t}}const le=new l.a(d.a),de={homestead:"6004bcd10040261633ade990",ropsten:"6004bd4d0040261633ade991",rinkeby:"6004bda20040261633ade994",goerli:"6004bd860040261633ade992"};class he extends b.b{constructor(e,t){if(null==t){const r=Object(i.e)(new.target,"getNetwork")(e);if(r){const e=de[r.name];e&&(t={applicationId:e,loadBalancer:!0})}null==t&&le.throwError("unsupported network",l.a.errors.INVALID_ARGUMENT,{argument:"network",value:e})}super(e,t)}static getApiKey(e){null==e&&le.throwArgumentError("PocketProvider.getApiKey does not support null apiKey","apiKey",e);const t={applicationId:null,loadBalancer:!1,applicationSecretKey:null};return"string"===typeof e?t.applicationId=e:null!=e.applicationSecretKey?(le.assertArgument("string"===typeof e.applicationId,"applicationSecretKey requires an applicationId","applicationId",e.applicationId),le.assertArgument("string"===typeof e.applicationSecretKey,"invalid applicationSecretKey","applicationSecretKey","[REDACTED]"),t.applicationId=e.applicationId,t.applicationSecretKey=e.applicationSecretKey,t.loadBalancer=!!e.loadBalancer):e.applicationId?(le.assertArgument("string"===typeof e.applicationId,"apiKey.applicationId must be a string","apiKey.applicationId",e.applicationId),t.applicationId=e.applicationId,t.loadBalancer=!!e.loadBalancer):le.throwArgumentError("unsupported PocketProvider apiKey","apiKey",e),t}static getUrl(e,t){let r=null;switch(e?e.name:"unknown"){case"homestead":r="eth-mainnet.gateway.pokt.network";break;case"ropsten":r="eth-ropsten.gateway.pokt.network";break;case"rinkeby":r="eth-rinkeby.gateway.pokt.network";break;case"goerli":r="eth-goerli.gateway.pokt.network";break;default:le.throwError("unsupported network",l.a.errors.INVALID_ARGUMENT,{argument:"network",value:e})}let n=null;n=t.loadBalancer?"https://".concat(r,"/v1/lb/").concat(t.applicationId):"https://".concat(r,"/v1/").concat(t.applicationId);const o={url:n,headers:{}};return null!=t.applicationSecretKey&&(o.user="",o.password=t.applicationSecretKey),o}isCommunityResource(){return this.applicationId===de[this.network.name]}}const pe=new l.a(d.a);let me=1;function ge(e,t){const r="Web3LegacyFetcher";return function(e,n){const o={method:e,params:n,id:me++,jsonrpc:"2.0"};return new Promise(((e,n)=>{this.emit("debug",{action:"request",fetcher:r,request:Object(i.c)(o),provider:this}),t(o,((t,s)=>{if(t)return this.emit("debug",{action:"response",fetcher:r,error:t,request:o,provider:this}),n(t);if(this.emit("debug",{action:"response",fetcher:r,request:o,response:s,provider:this}),s.error){const e=new Error(s.error.message);return e.code=s.error.code,e.data=s.error.data,n(e)}e(s.result)}))}))}}class fe extends u.a{constructor(e,t){null==e&&pe.throwArgumentError("missing provider","provider",e);let r=null,n=null,o=null;"function"===typeof e?(r="unknown:",n=e):(r=e.host||e.path||"",!r&&e.isMetaMask&&(r="metamask"),o=e,e.request?(""===r&&(r="eip-1193:"),n=function(e){return function(t,r){null==r&&(r=[]);const n={method:t,params:r};return this.emit("debug",{action:"request",fetcher:"Eip1193Fetcher",request:Object(i.c)(n),provider:this}),e.request(n).then((e=>(this.emit("debug",{action:"response",fetcher:"Eip1193Fetcher",request:n,response:e,provider:this}),e)),(e=>{throw this.emit("debug",{action:"response",fetcher:"Eip1193Fetcher",request:n,error:e,provider:this}),e}))}}(e)):e.sendAsync?n=ge(0,e.sendAsync.bind(e)):e.send?n=ge(0,e.send.bind(e)):pe.throwArgumentError("unsupported provider","provider",e),r||(r="unknown:")),super(r,t),Object(i.d)(this,"jsonRpcFetchFunc",n),Object(i.d)(this,"provider",o)}send(e,t){return this.jsonRpcFetchFunc(e,t)}}const be=new l.a(d.a);function ke(e,t){if(null==e&&(e="homestead"),"string"===typeof e){const t=e.match(/^(ws|http)s?:/i);if(t)switch(t[1].toLowerCase()){case"http":case"https":return new u.a(e);case"ws":case"wss":return new f(e);default:be.throwArgumentError("unsupported URL scheme","network",e)}}const r=Object(o.a)(e);return r&&r._defaultProvider||be.throwError("unsupported getDefaultProvider network",l.a.errors.NETWORK_ERROR,{operation:"getDefaultProvider",network:e}),r._defaultProvider({FallbackProvider:te,AlchemyProvider:v,AnkrProvider:O,CloudflareProvider:T,EtherscanProvider:L,InfuraProvider:ie,JsonRpcProvider:u.a,NodesmithProvider:ue,PocketProvider:he,Web3Provider:fe,IpcProvider:re},t)}}}]);
//# sourceMappingURL=14.54a37122.chunk.js.map