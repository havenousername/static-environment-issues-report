!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}function r(e,t,r){Object.defineProperty(e,t,{get:r,enumerable:!0})}var n=e.parcelRequire0232,o={},i={};null==n&&((n=function(e){if(e in i){let t=i[e];delete i[e],t()}if(e in o)return o[e];if("undefined"!=typeof module&&"function"==typeof module.require)return module.require(e);var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,t){o[e]=t},n.registerBundle=function(e,t){i[e]=t,o[e]={}},e.parcelRequire0232=n);var s,a={},u={};s=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}};var c,f,d,l=!1;function p(e){return"[object Array]"===d.call(e)}function h(e){return void 0===e}function m(e){return null!==e&&!h(e)&&null!==e.constructor&&!h(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function v(e){return"[object ArrayBuffer]"===d.call(e)}function y(e){return"undefined"!=typeof FormData&&e instanceof FormData}function g(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function w(e){return"string"==typeof e}function b(e){return"number"==typeof e}function E(e){return null!==e&&"object"==typeof e}function j(e){if("[object Object]"!==d.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function O(e){return"[object Date]"===d.call(e)}function T(e){return"[object File]"===d.call(e)}function A(e){return"[object Blob]"===d.call(e)}function C(e){return"[object Function]"===d.call(e)}function R(e){return E(e)&&C(e.pipe)}function S(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function k(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function N(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),p(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function z(){var e={};function t(t,r){j(e[r])&&j(t)?e[r]=z(e[r],t):j(t)?e[r]=z({},t):p(t)?e[r]=t.slice():e[r]=t}for(var r=0,n=arguments.length;r<n;r++)N(arguments[r],t);return e}function L(e,t,r){return N(t,(function(t,n){e[n]=r&&"function"==typeof t?f(t,r):t})),e}function U(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}function D(){return l||(l=!0,c={},f=s,d=Object.prototype.toString,c={isArray:p,isArrayBuffer:v,isBuffer:m,isFormData:y,isArrayBufferView:g,isString:w,isNumber:b,isObject:E,isPlainObject:j,isUndefined:h,isDate:O,isFile:T,isBlob:A,isFunction:C,isStream:R,isURLSearchParams:S,isStandardBrowserEnv:k,forEach:N,merge:z,extend:L,trim:x,stripBOM:U}),c}D();var q=s;D();var B,P=!1;function F(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function M(){return P||(P=!0,B={},D(),B=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(D().isURLSearchParams(t))n=t.toString();else{var o=[];D().forEach(t,(function(e,t){null!=e&&(D().isArray(e)?t+="[]":e=[e],D().forEach(e,(function(e){D().isDate(e)?e=e.toISOString():D().isObject(e)&&(e=JSON.stringify(e)),o.push(F(t)+"="+F(e))})))})),n=o.join("&")}if(n){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}),B}var H=M();function _(){this.handlers=[]}D(),_.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},_.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},_.prototype.forEach=function(e){D().forEach(this.handlers,(function(t){null!==t&&e(t)}))};var I=_;D();D();var V,$,X=function(e,t,r){return D().forEach(r,(function(r){e=r(e,t)})),e},J=V=function(e){return!(!e||!e.__CANCEL__)},K=!1;function W(){return K||(K=!0,$={},$=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}),$}var G,Z,Q=!1;function Y(){return Q||(Q=!0,G={},Z=W(),G=function(e,t,r,n,o){var i=new Error(e);return Z(i,t,r,n,o)}),G}var ee,te,re=!1;function ne(){return re||(re=!0,ee={},te=Y(),ee=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(te("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}),ee}var oe,ie=!1;function se(){return ie||(ie=!0,oe={},D(),oe=D().isStandardBrowserEnv()?{write:function(e,t,r,n,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),D().isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),D().isString(n)&&s.push("path="+n),D().isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}),oe}var ae,ue=!1;function ce(){return ue||(ue=!0,ae={},ae=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}),ae}var fe,de=!1;function le(){return de||(de=!0,fe={},fe=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}),fe}var pe,he,me,ve=!1;function ye(){return ve||(ve=!0,pe={},he=ce(),me=le(),pe=function(e,t){return e&&!he(t)?me(e,t):t}),pe}var ge,we,be=!1;function Ee(){return be||(be=!0,ge={},D(),we=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],ge=function(e){var t,r,n,o={};return e?(D().forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=D().trim(e.substr(0,n)).toLowerCase(),r=D().trim(e.substr(n+1)),t){if(o[t]&&we.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o}),ge}var je,Oe=!1;function Te(){return Oe||(Oe=!0,je={},D(),je=D().isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=D().isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}),je}var Ae,Ce,Re,Se,xe,ke,Ne,ze=!1;function Le(){return ze||(ze=!0,Ae={},D(),Ce=ne(),se(),Re=M(),Se=ye(),xe=Ee(),ke=Te(),Ne=Y(),Ae=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;D().isFormData(n)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",a=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+a)}var u=Se(e.baseURL,e.url);if(i.open(e.method.toUpperCase(),Re(u,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in i?xe(i.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:n,config:e,request:i};Ce(t,r,o),i=null}},i.onabort=function(){i&&(r(Ne("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){r(Ne("Network Error",e,null,i)),i=null},i.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(Ne(t,e,"ECONNABORTED",i)),i=null},D().isStandardBrowserEnv()){var c=(e.withCredentials||ke(u))&&e.xsrfCookieName?se().read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}if("setRequestHeader"in i&&D().forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)})),D().isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){i&&(i.abort(),r(e),i=null)})),n||(n=null),i.send(n)}))}),Ae}var Ue,De,qe,Be,Pe=De={};function Fe(){throw new Error("setTimeout has not been defined")}function Me(){throw new Error("clearTimeout has not been defined")}function He(e){if(qe===setTimeout)return setTimeout(e,0);if((qe===Fe||!qe)&&setTimeout)return qe=setTimeout,setTimeout(e,0);try{return qe(e,0)}catch(t){try{return qe.call(null,e,0)}catch(t){return qe.call(this,e,0)}}}!function(){try{qe="function"==typeof setTimeout?setTimeout:Fe}catch(e){qe=Fe}try{Be="function"==typeof clearTimeout?clearTimeout:Me}catch(e){Be=Me}}();var _e,Ie=[],Ve=!1,$e=-1;function Xe(){Ve&&_e&&(Ve=!1,_e.length?Ie=_e.concat(Ie):$e=-1,Ie.length&&Je())}function Je(){if(!Ve){var e=He(Xe);Ve=!0;for(var t=Ie.length;t;){for(_e=Ie,Ie=[];++$e<t;)_e&&_e[$e].run();$e=-1,t=Ie.length}_e=null,Ve=!1,function(e){if(Be===clearTimeout)return clearTimeout(e);if((Be===Me||!Be)&&clearTimeout)return Be=clearTimeout,clearTimeout(e);try{Be(e)}catch(t){try{return Be.call(null,e)}catch(t){return Be.call(this,e)}}}(e)}}function Ke(e,t){this.fun=e,this.array=t}function We(){}Pe.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];Ie.push(new Ke(e,t)),1!==Ie.length||Ve||He(Je)},Ke.prototype.run=function(){this.fun.apply(null,this.array)},Pe.title="browser",Pe.browser=!0,Pe.env={},Pe.argv=[],Pe.version="",Pe.versions={},Pe.on=We,Pe.addListener=We,Pe.once=We,Pe.off=We,Pe.removeListener=We,Pe.removeAllListeners=We,Pe.emit=We,Pe.prependListener=We,Pe.prependOnceListener=We,Pe.listeners=function(e){return[]},Pe.binding=function(e){throw new Error("process.binding is not supported")},Pe.cwd=function(){return"/"},Pe.chdir=function(e){throw new Error("process.chdir is not supported")},Pe.umask=function(){return 0};var Ge=De;D();D();var Ze=function(e,t){D().forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},Qe={"Content-Type":"application/x-www-form-urlencoded"};function Ye(e,t){!D().isUndefined(e)&&D().isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var et,tt={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==Ge&&"[object process]"===Object.prototype.toString.call(Ge))&&(et=Le()),et),transformRequest:[function(e,t){return Ze(t,"Accept"),Ze(t,"Content-Type"),D().isFormData(e)||D().isArrayBuffer(e)||D().isBuffer(e)||D().isStream(e)||D().isFile(e)||D().isBlob(e)?e:D().isArrayBufferView(e)?e.buffer:D().isURLSearchParams(e)?(Ye(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):D().isObject(e)?(Ye(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};function rt(e){e.cancelToken&&e.cancelToken.throwIfRequested()}tt.headers={common:{Accept:"application/json, text/plain, */*"}},D().forEach(["delete","get","head"],(function(e){tt.headers[e]={}})),D().forEach(["post","put","patch"],(function(e){tt.headers[e]=D().merge(Qe)})),Ue=tt;var nt,ot=function(e){return rt(e),e.headers=e.headers||{},e.data=X(e.data,e.headers,e.transformRequest),e.headers=D().merge(e.headers.common||{},e.headers[e.method]||{},e.headers),D().forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Ue.adapter)(e).then((function(t){return rt(e),t.data=X(t.data,t.headers,e.transformResponse),t}),(function(t){return J(t)||(rt(e),t&&t.response&&(t.response.data=X(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))};D();var it=nt=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function a(e,t){return D().isPlainObject(e)&&D().isPlainObject(t)?D().merge(e,t):D().isPlainObject(t)?D().merge({},t):D().isArray(t)?t.slice():t}function u(n){D().isUndefined(t[n])?D().isUndefined(e[n])||(r[n]=a(void 0,e[n])):r[n]=a(e[n],t[n])}D().forEach(n,(function(e){D().isUndefined(t[e])||(r[e]=a(void 0,t[e]))})),D().forEach(o,u),D().forEach(i,(function(n){D().isUndefined(t[n])?D().isUndefined(e[n])||(r[n]=a(void 0,e[n])):r[n]=a(void 0,t[n])})),D().forEach(s,(function(n){n in t?r[n]=a(e[n],t[n]):n in e&&(r[n]=a(void 0,e[n]))}));var c=n.concat(o).concat(i).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return D().forEach(f,u),r};function st(e){this.defaults=e,this.interceptors={request:new I,response:new I}}st.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=it(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[ot,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},st.prototype.getUri=function(e){return e=it(this.defaults,e),H(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},D().forEach(["delete","get","head","options"],(function(e){st.prototype[e]=function(t,r){return this.request(it(r||{},{method:e,url:t,data:(r||{}).data}))}})),D().forEach(["post","put","patch"],(function(e){st.prototype[e]=function(t,r,n){return this.request(it(n||{},{method:e,url:t,data:r}))}}));var at=st,ut=nt;function ct(e){var t=new at(e),r=q(at.prototype.request,t);return D().extend(r,at.prototype,t),D().extend(r,t),r}var ft=ct(Ue);ft.Axios=at,ft.create=function(e){return ct(ut(ft.defaults,e))};var dt;function lt(e){this.message=e}lt.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},lt.prototype.__CANCEL__=!0,dt=lt,ft.Cancel=dt;var pt,ht=dt;function mt(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new ht(e),t(r.reason))}))}mt.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},mt.source=function(){var e;return{token:new mt((function(t){e=t})),cancel:e}},pt=mt,ft.CancelToken=pt,ft.isCancel=V,ft.all=function(e){return Promise.all(e)};var vt;vt=function(e){return function(t){return e.apply(null,t)}},ft.spread=vt;var yt;yt=function(e){return"object"==typeof e&&!0===e.isAxiosError},ft.isAxiosError=yt;var gt=ft;(u=ft).default=gt;var wt,bt=t(u),Et={},jt={},Ot="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(Ot){var Tt=new Uint8Array(16);jt=function(){return Ot(Tt),Tt}}else{var At=new Array(16);jt=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),At[t]=e>>>((3&t)<<3)&255;return At}}for(var Ct,Rt=jt,St=[],xt=0;xt<256;++xt)St[xt]=(xt+256).toString(16).substr(1);var kt,Nt,zt=Ct=function(e,t){var r=t||0,n=St;return[n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]]].join("")},Lt=0,Ut=0;var Dt=function(e,t,r){var n=t&&r||0,o=t||[],i=(e=e||{}).node||kt,s=void 0!==e.clockseq?e.clockseq:Nt;if(null==i||null==s){var a=Rt();null==i&&(i=kt=[1|a[0],a[1],a[2],a[3],a[4],a[5]]),null==s&&(s=Nt=16383&(a[6]<<8|a[7]))}var u=void 0!==e.msecs?e.msecs:(new Date).getTime(),c=void 0!==e.nsecs?e.nsecs:Ut+1,f=u-Lt+(c-Ut)/1e4;if(f<0&&void 0===e.clockseq&&(s=s+1&16383),(f<0||u>Lt)&&void 0===e.nsecs&&(c=0),c>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Lt=u,Ut=c,Nt=s;var d=(1e4*(268435455&(u+=122192928e5))+c)%4294967296;o[n++]=d>>>24&255,o[n++]=d>>>16&255,o[n++]=d>>>8&255,o[n++]=255&d;var l=u/4294967296*1e4&268435455;o[n++]=l>>>8&255,o[n++]=255&l,o[n++]=l>>>24&15|16,o[n++]=l>>>16&255,o[n++]=s>>>8|128,o[n++]=255&s;for(var p=0;p<6;++p)o[n+p]=i[p];return t||zt(o)},qt=jt,Bt=Ct;var Pt=function(e,t,r){var n=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||qt)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var i=0;i<16;++i)t[n+i]=o[i];return t||Bt(o)},Ft=Pt;Ft.v1=Dt,Ft.v4=Pt;var Mt=t(wt=Ft);class Ht{rareSpecies=!1;ozoneLayer=!1;meanTemperature=!1;plants=!1;rivers=!1;lakes=!1;soil=!1;cities=!1;other=!1;constructor(){Object.keys((e=>this[e]=!1))}static deserialize(e){const t=new Ht;for(const r of Object.keys(e)){if(!Ht.propertyDeserializers.has(r))throw Error(`No deserializer for ${r}!`);{const n=Ht.propertyDeserializers.get(r);t[r]=void 0===n?e[r]:n(t[r])}}return t}static propertyDeserializers=new Map([["rareSpecies",void 0],["ozoneLayer",void 0],["meanTemperature",void 0],["plants",void 0],["rivers",void 0],["lakes",void 0],["soil",void 0],["cities",void 0],["other",void 0]])}class _t{polutionAssault=!0;endangeredSpeciesPoaching=!1;arson=!1;dump=!1;constructor(e=0){Object.keys((t=>this[t]=t===e))}static deserialize(e){const t=new _t;for(const r of Object.keys(e)){if(!_t.propertyDeserializers.has(r))throw Error(`No deserializer for ${r}!`);{const n=_t.propertyDeserializers.get(r);t[r]=void 0===n?e[r]:n(e[r])}}return t}static propertyDeserializers=new Map([["polutionAssault",void 0],["arson",void 0],["endangeredSpeciesPoaching",void 0],["dump",void 0]])}class It{minor=!0;medium=!1;severe=!1;constructor(e=0){Object.keys((t=>this[t]=t===e))}static propertyDeserializers=new Map([["minor",void 0],["medium",void 0],["severe",void 0]]);static deserialize(e){const t=new It;for(const r of Object.keys(e)){if(!It.propertyDeserializers.has(r))throw Error(`No deserializer for ${r}!`);{const n=It.propertyDeserializers.get(r);t[r]=void 0===n?e[r]:n(e[r])}}return t}}class Vt{injuredFromAttack=new Ht;type=new _t;amountOfInjures=new It;isDomLinked(e){return!["id"].includes(e)}static create(e,t,r,n,o,i,s,a,u){const c=new Vt;return c.name=e,c.issue=t,c.email=r,c.id=n,c.injuredFromAttack=o,c.type=i,c.amountOfInjures=s,c.description=a,c.sentTime=u,c}static propertyDeserializers=new Map([["name",void 0],["email",void 0],["issue",void 0],["id",void 0],["description",void 0],["sentTime",void 0],["injuredFromAttack",Ht.deserialize],["type",_t.deserialize],["amountOfInjures",It.deserialize]]);constructor(){this.resetForm()}resetForm(){this.name="",this.issue="",this.email="",this.id=Mt(),this.injuredFromAttack=new Ht,this.type=new _t,this.amountOfInjures=new It,this.description=""}static deserialize(e){if(!e)return;const t=new Vt;for(const r of Object.keys(e)){if(!Vt.propertyDeserializers.has(r))throw Error(`No deserializer for ${r}!`);{const n=Vt.propertyDeserializers.get(r);t[r]=void 0===n?e[r]:n(e[r])}}return t}}r(Et,"default",(function(){return Vt}));const $t=new class{constructor(){this.http=bt.create({baseURL:"http://localhost:3001"}),this.globalHttp=bt.create()}async loadCountries(){const e=await this.globalHttp.get("https://api.first.org/data/v1/countries");return Object.values(e.data.data)}async loadReports(){return(await this.http.get("/reports")).data.map((e=>"number"==typeof e.id?e.report:e)).map((e=>Vt.deserialize(e)))}async sendReport(e){await this.http.post("/reports",{...e})}};r(a,"api",(function(){return $t})),n.register("2s1fH",(function(){return a})),n.register("7lbf0",(function(){return De})),n.register("5OWkL",(function(){return Et})),n.register("55ZWq",(function(){return wt}))}();
//# sourceMappingURL=contact.c2c95adc.js.map
