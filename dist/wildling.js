!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wildling",[],t):"object"==typeof exports?exports.wildling=t():n.wildling=t()}(this,(function(){return function(n){var t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)r.d(e,o,function(t){return n[t]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=0)}([function(n,t,r){var e=r(1),o=r(4);n.exports=function(n){var t=0;!function(n){n&&n.dictionaries&&Object.keys(n.dictionaries).forEach((function(t){o[t]=n.dictionaries[t]}))}(n);var r,u=function(n){var t=[];return n&&n.patterns&&n.patterns.forEach((function(n){t.push(e(n,o))})),t}(n),i=(r=0,u.forEach((function(n){r+=n.count()})),r),a={index:function(){return t},count:function(){return i},reset:function(){t=0},next:function(){return t!==i&&(t+=1,a.get(t-1))},generators:function(){return u},get:function(n){var t=0;if(n>i-1||n<0)return!1;for(var r=0;r<u.length;r+=1){var e=u[r],o=n-t;if(o<e.count())return e.get(o);t+=e.count()}return!1}};return a}},function(n,t,r){var e=r(2);n.exports=function(n,t){var r=1,o=e(n,t);return o.forEach((function(n){r*=n.count()})),{count:function(){return r},tokens:function(){return o},get:function(n){var t=[],e=n;return!(n>r-1||n<0)&&(o.forEach((function(n,r){t[r]=n.get(e%n.count()),e=Math.floor(e/n.count())})),t.join(""))}}}},function(n,t,r){var e,o=r(3),u=/(\\[%@$*#&?-]{1}|[%@$*#&?-]{1}\{.*?\}|[%@$*#&?-]{1})(?=.*)/g;function i(n){var t=/\{'(.*)'(,(\d+)-(\d+)){0,1}(,(\d+)){0,1}\}/.exec(n),r=null!==t&&t[3]&&t[4],e=null!==t&&t[6];if(r)return{string:t[1],startLength:parseInt(t[3],10),endLength:parseInt(t[4],10),src:n};if(e){var o=parseInt(t[6],10);return{string:t[1],startLength:o,endLength:o,src:n}}return null!==t&&{string:t[1],startLength:1,endLength:1,src:n}}function a(n){var t=n.split("");return function(n){var r=function(n,t){var r=/\{((\d+)-(\d+)|(\d+))\}/.exec(n),e=null!==r&&r[2],o=null!==r&&r[1],u=1,i=1;return e?(u=parseInt(r[2],10),i=parseInt(r[3],10)):o&&(i=u=parseInt(r[1],10)),{variants:t,startLength:u,endLength:i,src:n}}(n,t);return o(r)}}var c={"#":a("0123456789"),"@":a("abcdefghijklmnopqrstuvwxyz"),"*":a("abcdefghijklmnopqrstuvwxyz0123456789"),"-":a("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),"!":a("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"?":a("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),"&":a("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),"%":function(n){var t=i(n);return!1===t||!(t.string in e)?t={variants:[n],startLength:1,endLength:1,src:n}:t.variants=e[t.string],o(t)},$:function(n){var t=i(n);if(!1===t)t={variants:[n],startLength:1,endLength:1,src:n};else{var r=[],e=t.string,u=0;do{"\\,"===e.substr(u,2)?u+=2:","===e[u]?(r.push(e.substr(0,u)),e=e.substr(u+1),u=0):u+=1}while(u<e.length);r.push(e),t.variants=r.map((function(n){return n.replace("\\,",",")}))}return o(t)}};n.exports=function(n,t){var r=[],i=n.split(u).filter(Boolean);return e=t,i.forEach((function(n){return r.push(function(n){var t=n[0]in c,r=n.length>1&&"\\"===n[0]&&n[1]in c;return t?c[n[0]](n):o(r?{variants:[n.replace(/^\\/,"")],src:n}:{variants:[n],src:n})}(n))})),r}},function(n,t){function r(n,t){return"number"==typeof n&&n>=0?n:t}n.exports=function(n){for(var t=0,e=r(n.startLength,1),o=r(n.endLength,1),u=n.variants||[],i=e;i<=o;i+=1)t+=Math.pow(u.length,i);return{count:function(){return t},src:function(){return n.src},get:function(n){return!(n>t-1||n<0)&&(0===n&&0===e?"":function(n){for(var t=[],r=n.stringLength,e=n.indexWithOffset,o=0;o<r;o+=1){var i=e%u.length;e=Math.floor(e/u.length),t[o]=u[i]}return t.join("")}(function(n){var t,r;for(r=n,t=e;t<=o;t+=1){var i=Math.pow(u.length,t);if(r<i)break;r-=i}return{indexWithOffset:r,stringLength:t}}(n)))}}}},function(n,t){n.exports={colors:["red","blue","green","black","white","yellow","green","magenta","orange","purple","brown","gray","cyan","teal","pink","crimson"],planets:["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"],passwords:["123456","password","12345678","qwerty","12345","1234567","baseball","welcome","1234567890","abc123","111111","1qaz2wsx","dragon","master","monkey","letmein","login","princess","qwertyuiop","solo","passw0rd","starwars"]}}])}));