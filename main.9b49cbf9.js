parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n="https://mate-academy.github.io/phone-catalogue-static/api/phones.json",t="https://mate-academy.github.io/phone-catalogue-static/api/phones/";function e(n){return new Promise(function(t,e){fetch(n).then(function(n){return t(n.json())}).catch(function(n){return e(new Error("Error",n))})})}function r(){return e(n).then(function(n){return n.map(function(n){return n.id})})}function c(){return new Promise(function(n,c){r().then(function(n){return n.map(function(n){return e("".concat(t).concat(n,".json"))})}).then(function(n){return Promise.race(n)}).then(function(t){return n([t])}).catch(function(n){return c(new Error("Error",n))})})}function o(){return new Promise(function(n,c){r().then(function(n){return n.map(function(n){return e("".concat(t).concat(n,".json"))})}).then(function(n){return Promise.allSettled(n)}).then(function(t){var e=[];return t.forEach(function(n){"fulfilled"===n.status&&e.push(n.value)}),n(e)}).catch(function(n){return c(new Error("Error",n))})})}function u(){return new Promise(function(n,c){r().then(function(n){return n.map(function(n){return e("".concat(t).concat(n,".json"))})}).then(function(n){return Promise.all([Promise.race(n),Promise.race(n),Promise.race(n)])}).then(function(t){return n(t)}).catch(function(n){return c(new Error("Error",n))})})}function i(n,t,e){var r=document.createElement("div");document.body.append(r),r.classList.add(n),r.insertAdjacentHTML("beforeend","\n    <h2>".concat(t,'</h2>\n    <ul class="list"></ul>\n  ')),e().then(function(n){n.map(function(n){r.children[1].insertAdjacentHTML("beforeend","\n          <li>".concat(n.name," - ").concat(n.id,"</li>\n        "))})})}i("all-successful","All Successful",o),i("first-received","First Received",c),i("three-fatest","Three Fastest Received",u);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9b49cbf9.js.map