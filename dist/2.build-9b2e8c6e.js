webpackJsonp([2],{102:function(e,t,n){var r=n(80);"string"==typeof r&&(r=[[e.i,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},11:function(e,t,n){var r,i;n(102),r=n(71);var o=n(93);i=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(i=r=r["default"]),"function"==typeof i&&(i=i.options),i.name=i.name||"newtopic",i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=r},46:function(e,t,n){t.markdown=n(47),t.parse=t.markdown.toHTML},47:function(e,t,n){!function(e){function t(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function r(){var e=n(51);return"Markdown.mk_block( "+e.inspect(this.toString())+", "+e.inspect(this.trailing)+", "+e.inspect(this.lineNumber)+" )"}function i(e){for(var t=0,n=-1;(n=e.indexOf("\n",n+1))!==-1;)t++;return t}function o(e,t){function n(e){this.len_after=e,this.name="close_"+t}var r=e+"_state",i="strong"==e?"em_state":"strong_state";return function(o,s){if(this[r][0]==t)return this[r].shift(),[o.length,new n(o.length-t.length)];var a=this[i].slice(),l=this[r].slice();this[r].unshift(t);var c=this.processInline(o.substr(t.length)),u=c[c.length-1];this[r].shift();if(u instanceof n){c.pop();var f=o.length-u.len_after;return[f,[e].concat(c)]}return this[i]=a,this[r]=l,[t.length,t]}}function s(e){for(var t=e.split(""),n=[""],r=!1;t.length;){var i=t.shift();switch(i){case" ":r?n[n.length-1]+=i:n.push("");break;case"'":case'"':r=!r;break;case"\\":i=t.shift();default:n[n.length-1]+=i}}return n}function l(e){return v(e)&&e.length>1&&"object"==typeof e[1]&&!v(e[1])?e[1]:void 0}function c(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function u(e){if("string"==typeof e)return c(e);var t=e.shift(),n={},r=[];for(!e.length||"object"!=typeof e[0]||e[0]instanceof Array||(n=e.shift());e.length;)r.push(u(e.shift()));var i="";for(var o in n)i+=" "+o+'="'+c(n[o])+'"';return"img"==t||"br"==t||"hr"==t?"<"+t+i+"/>":"<"+t+i+">"+r.join("")+"</"+t+">"}function f(e,t,n){var r;n=n||{};var i=e.slice(0);"function"==typeof n.preprocessTreeNode&&(i=n.preprocessTreeNode(i,t));var o=l(i);if(o){i[1]={};for(r in o)i[1][r]=o[r];o=i[1]}if("string"==typeof i)return i;switch(i[0]){case"header":i[0]="h"+i[1].level,delete i[1].level;break;case"bulletlist":i[0]="ul";break;case"numberlist":i[0]="ol";break;case"listitem":i[0]="li";break;case"para":i[0]="p";break;case"markdown":i[0]="html",o&&delete o.references;break;case"code_block":i[0]="pre",r=o?2:1;var s=["code"];s.push.apply(s,i.splice(r,i.length-r)),i[r]=s;break;case"inlinecode":i[0]="code";break;case"img":i[1].src=i[1].href,delete i[1].href;break;case"linebreak":i[0]="br";break;case"link":i[0]="a";break;case"link_ref":i[0]="a";var a=t[o.ref];if(!a)return o.original;delete o.ref,o.href=a.href,a.title&&(o.title=a.title),delete o.original;break;case"img_ref":i[0]="img";var a=t[o.ref];if(!a)return o.original;delete o.ref,o.src=a.href,a.title&&(o.title=a.title),delete o.original}if(r=1,o){for(var c in i[1]){r=2;break}1===r&&i.splice(r,1)}for(;r<i.length;++r)i[r]=f(i[r],t,n);return i}function h(e){for(var t=l(e)?2:1;t<e.length;)"string"==typeof e[t]?t+1<e.length&&"string"==typeof e[t+1]?e[t]+=e.splice(t+1,1)[0]:++t:(h(e[t]),++t)}var g=e.Markdown=function(e){switch(typeof e){case"undefined":this.dialect=g.dialects.Gruber;break;case"object":this.dialect=e;break;default:if(!(e in g.dialects))throw new Error("Unknown Markdown dialect '"+String(e)+"'");this.dialect=g.dialects[e]}this.em_state=[],this.strong_state=[],this.debug_indent=""};e.parse=function(e,t){var n=new g(t);return n.toTree(e)},e.toHTML=function(t,n,r){var i=e.toHTMLTree(t,n,r);return e.renderJsonML(i)},e.toHTMLTree=function(e,t,n){"string"==typeof e&&(e=this.parse(e,t));var r=l(e),i={};r&&r.references&&(i=r.references);var o=f(e,i,n);return h(o),o};var d=g.mk_block=function(e,n,i){1==arguments.length&&(n="\n\n");var o=new String(e);return o.trailing=n,o.inspect=r,o.toSource=t,void 0!=i&&(o.lineNumber=i),o};g.prototype.split_blocks=function(e,t){e=e.replace(/(\r\n|\n|\r)/g,"\n");var n,r=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,o=[],s=1;for(null!=(n=/^(\s*\n)/.exec(e))&&(s+=i(n[0]),r.lastIndex=n[0].length);null!==(n=r.exec(e));)"\n#"==n[2]&&(n[2]="\n",r.lastIndex--),o.push(d(n[1],n[2],s)),s+=i(n[0]);return o},g.prototype.processBlock=function(e,t){var n=this.dialect.block,r=n.__order__;if("__call__"in n)return n.__call__.call(this,e,t);for(var i=0;i<r.length;i++){var o=n[r[i]].call(this,e,t);if(o)return(!v(o)||o.length>0&&!v(o[0]))&&this.debug(r[i],"didn't return a proper array"),o}return[]},g.prototype.processInline=function(e){return this.dialect.inline.__call__.call(this,String(e))},g.prototype.toTree=function(e,t){var n=e instanceof Array?e:this.split_blocks(e),r=this.tree;try{for(this.tree=t||this.tree||["markdown"];n.length;){var i=this.processBlock(n.shift(),n);i.length&&this.tree.push.apply(this.tree,i)}return this.tree}finally{t&&(this.tree=r)}},g.prototype.debug=function(){var e=Array.prototype.slice.call(arguments);e.unshift(this.debug_indent),"undefined"!=typeof print&&print.apply(print,e),"undefined"!=typeof console&&"undefined"!=typeof console.log&&console.log.apply(null,e)},g.prototype.loop_re_over_block=function(e,t,n){for(var r,i=t.valueOf();i.length&&null!=(r=e.exec(i));)i=i.substr(r[0].length),n.call(this,r);return i},g.dialects={},g.dialects.Gruber={block:{atxHeader:function(e,t){var n=e.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(n){var r=["header",{level:n[1].length}];return Array.prototype.push.apply(r,this.processInline(n[2])),n[0].length<e.length&&t.unshift(d(e.substr(n[0].length),e.trailing,e.lineNumber+2)),[r]}},setextHeader:function(e,t){var n=e.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(n){var r="="===n[2]?1:2,i=["header",{level:r},n[1]];return n[0].length<e.length&&t.unshift(d(e.substr(n[0].length),e.trailing,e.lineNumber+2)),[i]}},code:function(e,t){var n=[],r=/^(?: {0,3}\t| {4})(.*)\n?/;if(e.match(r)){e:for(;;){var i=this.loop_re_over_block(r,e.valueOf(),function(e){n.push(e[1])});if(i.length){t.unshift(d(i,e.trailing));break e}if(!t.length)break e;if(!t[0].match(r))break e;n.push(e.trailing.replace(/[^\n]/g,"").substring(2)),e=t.shift()}return[["code_block",n.join("\n")]]}},horizRule:function(e,t){var n=e.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(n){var r=[["hr"]];return n[1]&&r.unshift.apply(r,this.processBlock(n[1],[])),n[3]&&t.unshift(d(n[3])),r}},lists:function(){function e(e){return new RegExp("(?:^("+l+"{0,"+e+"} {0,3})("+o+")\\s+)|(^"+l+"{0,"+(e-1)+"}[ ]{0,4})")}function t(e){return e.replace(/ {0,3}\t/g,"    ")}function n(e,t,n,r){if(t)return void e.push(["para"].concat(n));var i=e[e.length-1]instanceof Array&&"para"==e[e.length-1][0]?e[e.length-1]:e;r&&e.length>1&&n.unshift(r);for(var o=0;o<n.length;o++){var s=n[o],a="string"==typeof s;a&&i.length>1&&"string"==typeof i[i.length-1]?i[i.length-1]+=s:i.push(s)}}function r(e,t){for(var n=new RegExp("^("+l+"{"+e+"}.*?\\n?)*$"),r=new RegExp("^"+l+"{"+e+"}","gm"),i=[];t.length>0&&n.exec(t[0]);){var o=t.shift(),s=o.replace(r,"");i.push(d(s,o.trailing,o.lineNumber))}return i}function i(e,t,n){var r=e.list,i=r[r.length-1];if(!(i[1]instanceof Array&&"para"==i[1][0]))if(t+1==n.length)i.push(["para"].concat(i.splice(1,i.length-1)));else{var o=i.pop();i.push(["para"].concat(i.splice(1,i.length-1)),o)}}var o="[*+-]|\\d+\\.",s=/[*+-]/,a=new RegExp("^( {0,3})("+o+")[ \t]+"),l="(?: {0,3}\\t| {4})";return function(o,l){function c(e){var t=s.exec(e[2])?["bulletlist"]:["numberlist"];return h.push({list:t,indent:e[1]}),t}var u=o.match(a);if(u){for(var f,p,h=[],g=c(u),d=!1,v=[h[0].list];;){for(var b=o.split(/(?=\n)/),y="",_=0;_<b.length;_++){var k="",w=b[_].replace(/^\n/,function(e){return k=e,""}),x=e(h.length);if(u=w.match(x),void 0!==u[1]){y.length&&(n(f,d,this.processInline(y),k),d=!1,y=""),u[1]=t(u[1]);var T=Math.floor(u[1].length/4)+1;if(T>h.length)g=c(u),f.push(g),f=g[1]=["listitem"];else{var S=!1;for(p=0;p<h.length;p++)if(h[p].indent==u[1]){g=h[p].list,h.splice(p+1,h.length-(p+1)),S=!0;break}S||(T++,T<=h.length?(h.splice(T,h.length-T),g=h[T-1].list):(g=c(u),f.push(g))),f=["listitem"],g.push(f)}k=""}w.length>u[0].length&&(y+=k+w.substr(u[0].length))}y.length&&(n(f,d,this.processInline(y),k),d=!1,y="");var $=r(h.length,l);$.length>0&&(m(h,i,this),f.push.apply(f,this.toTree($,[])));var j=l[0]&&l[0].valueOf()||"";if(!j.match(a)&&!j.match(/^ /))break;o=l.shift();var O=this.dialect.block.horizRule(o,l);if(O){v.push.apply(v,O);break}m(h,i,this),d=!0}return v}}}(),blockquote:function(e,t){if(e.match(/^>/m)){var n=[];if(">"!=e[0]){for(var r=e.split(/\n/),i=[],o=e.lineNumber;r.length&&">"!=r[0][0];)i.push(r.shift()),o++;var s=d(i.join("\n"),"\n",e.lineNumber);n.push.apply(n,this.processBlock(s,[])),e=d(r.join("\n"),e.trailing,o)}for(;t.length&&">"==t[0][0];){var a=t.shift();e=d(e+e.trailing+a,a.trailing,e.lineNumber)}var c=e.replace(/^> ?/gm,""),u=(this.tree,this.toTree(c,["blockquote"])),f=l(u);return f&&f.references&&(delete f.references,b(f)&&u.splice(1,1)),n.push(u),n}},referenceDefn:function(e,t){var n=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(e.match(n)){l(this.tree)||this.tree.splice(1,0,{});var r=l(this.tree);void 0===r.references&&(r.references={});var i=this.loop_re_over_block(n,e,function(e){e[2]&&"<"==e[2][0]&&">"==e[2][e[2].length-1]&&(e[2]=e[2].substring(1,e[2].length-1));var t=r.references[e[1].toLowerCase()]={href:e[2]};void 0!==e[4]?t.title=e[4]:void 0!==e[5]&&(t.title=e[5])});return i.length&&t.unshift(d(i,e.trailing)),[]}},para:function(e,t){return[["para"].concat(this.processInline(e))]}}},g.dialects.Gruber.inline={__oneElement__:function(e,t,n){var r,i;t=t||this.dialect.inline.__patterns__;var o=new RegExp("([\\s\\S]*?)("+(t.source||t)+")");if(r=o.exec(e),!r)return[e.length,e];if(r[1])return[r[1].length,r[1]];var i;return r[2]in this.dialect.inline&&(i=this.dialect.inline[r[2]].call(this,e.substr(r.index),r,n||[])),i=i||[r[2].length,r[2]]},__call__:function(e,t){function n(e){"string"==typeof e&&"string"==typeof i[i.length-1]?i[i.length-1]+=e:i.push(e)}for(var r,i=[];e.length>0;)r=this.dialect.inline.__oneElement__.call(this,e,t,i),e=e.substr(r.shift()),m(r,n);return i},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(e){return this.dialect.inline.__escape__.exec(e)?[2,e.charAt(1)]:[1,"\\"]},"![":function(e){var t=e.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(t){t[2]&&"<"==t[2][0]&&">"==t[2][t[2].length-1]&&(t[2]=t[2].substring(1,t[2].length-1)),t[2]=this.dialect.inline.__call__.call(this,t[2],/\\/)[0];var n={alt:t[1],href:t[2]||""};return void 0!==t[4]&&(n.title=t[4]),[t[0].length,["img",n]]}return t=e.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),t?[t[0].length,["img_ref",{alt:t[1],ref:t[2].toLowerCase(),original:t[0]}]]:[2,"!["]},"[":function y(e){var t=String(e),n=g.DialectHelpers.inline_until_char.call(this,e.substr(1),"]");if(!n)return[1,"["];var y,r,i=1+n[0],o=n[1];e=e.substr(i);var s=e.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(s){var a=s[1];if(i+=s[0].length,a&&"<"==a[0]&&">"==a[a.length-1]&&(a=a.substring(1,a.length-1)),!s[3])for(var l=1,c=0;c<a.length;c++)switch(a[c]){case"(":l++;break;case")":0==--l&&(i-=a.length-c,a=a.substring(0,c))}return a=this.dialect.inline.__call__.call(this,a,/\\/)[0],r={href:a||""},void 0!==s[3]&&(r.title=s[3]),y=["link",r].concat(o),[i,y]}return s=e.match(/^\s*\[(.*?)\]/),s?(i+=s[0].length,r={ref:(s[1]||String(o)).toLowerCase(),original:t.substr(0,i)},y=["link_ref",r].concat(o),[i,y]):1==o.length&&"string"==typeof o[0]?(r={ref:o[0].toLowerCase(),original:t.substr(0,i)},y=["link_ref",r,o[0]],[i,y]):[1,"["]},"<":function(e){var t;return null!=(t=e.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?t[3]?[t[0].length,["link",{href:"mailto:"+t[3]},t[3]]]:"mailto"==t[2]?[t[0].length,["link",{href:t[1]},t[1].substr("mailto:".length)]]:[t[0].length,["link",{href:t[1]},t[1]]]:[1,"<"]},"`":function(e){var t=e.match(/(`+)(([\s\S]*?)\1)/);return t&&t[2]?[t[1].length+t[2].length,["inlinecode",t[3]]]:[1,"`"]},"  \n":function(e){return[3,["linebreak"]]}},g.dialects.Gruber.inline["**"]=o("strong","**"),g.dialects.Gruber.inline.__=o("strong","__"),g.dialects.Gruber.inline["*"]=o("em","*"),g.dialects.Gruber.inline._=o("em","_"),g.buildBlockOrder=function(e){var t=[];for(var n in e)"__order__"!=n&&"__call__"!=n&&t.push(n);e.__order__=t},g.buildInlinePatterns=function(e){var t=[];for(var n in e)if(!n.match(/^__.*__$/)){var r=n.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");t.push(1==n.length?r:"(?:"+r+")")}t=t.join("|"),e.__patterns__=t;var i=e.__call__;e.__call__=function(e,n){return void 0!=n?i.call(this,e,n):i.call(this,e,t)}},g.DialectHelpers={},g.DialectHelpers.inline_until_char=function(e,t){for(var n=0,r=[];;){if(e.charAt(n)==t)return n++,[n,r];if(n>=e.length)return null;var i=this.dialect.inline.__oneElement__.call(this,e.substr(n));n+=i[0],r.push.apply(r,i.slice(1))}},g.subclassDialect=function(e){function t(){}function n(){}return t.prototype=e.block,n.prototype=e.inline,{block:new t,inline:new n}},g.buildBlockOrder(g.dialects.Gruber.block),g.buildInlinePatterns(g.dialects.Gruber.inline),g.dialects.Maruku=g.subclassDialect(g.dialects.Gruber),g.dialects.Maruku.processMetaHash=function(e){for(var t=s(e),n={},r=0;r<t.length;++r)if(/^#/.test(t[r]))n.id=t[r].substring(1);else if(/^\./.test(t[r]))n["class"]?n["class"]=n["class"]+t[r].replace(/./," "):n["class"]=t[r].substring(1);else if(/\=/.test(t[r])){var i=t[r].split(/\=/);n[i[0]]=i[1]}return n},g.dialects.Maruku.block.document_meta=function(e,t){if(!(e.lineNumber>1)&&e.match(/^(?:\w+:.*\n)*\w+:.*$/)){l(this.tree)||this.tree.splice(1,0,{});var n=e.split(/\n/);for(p in n){var r=n[p].match(/(\w+):\s*(.*)$/),i=r[1].toLowerCase(),o=r[2];this.tree[1][i]=o}return[]}},g.dialects.Maruku.block.block_meta=function(e,t){var n=e.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(n){var r,i=this.dialect.processMetaHash(n[2]);if(""===n[1]){var o=this.tree[this.tree.length-1];if(r=l(o),"string"==typeof o)return;r||(r={},o.splice(1,0,r));for(a in i)r[a]=i[a];return[]}var s=e.replace(/\n.*$/,""),c=this.processBlock(s,[]);r=l(c[0]),r||(r={},c[0].splice(1,0,r));for(a in i)r[a]=i[a];return c}},g.dialects.Maruku.block.definition_list=function(e,t){var n,r,i=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,o=["dl"];if(r=e.match(i)){for(var s=[e];t.length&&i.exec(t[0]);)s.push(t.shift());for(var a=0;a<s.length;++a){var r=s[a].match(i),l=r[1].replace(/\n$/,"").split(/\n/),c=r[2].split(/\n:\s+/);for(n=0;n<l.length;++n)o.push(["dt",l[n]]);for(n=0;n<c.length;++n)o.push(["dd"].concat(this.processInline(c[n].replace(/(\n)\s+/,"$1"))))}return[o]}},g.dialects.Maruku.block.table=function _(e,t){var n,r,i=function(e,t){t=t||"\\s",t.match(/^[\\|\[\]{}?*.+^$]$/)&&(t="\\"+t);for(var n,r=[],i=new RegExp("^((?:\\\\.|[^\\\\"+t+"])*)"+t+"(.*)");n=e.match(i);)r.push(n[1]),e=n[2];return r.push(e),r},o=/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,s=/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/;if(r=e.match(o))r[3]=r[3].replace(/^\s*\|/gm,"");else if(!(r=e.match(s)))return;var _=["table",["thead",["tr"]],["tbody"]];r[2]=r[2].replace(/\|\s*$/,"").split("|");var a=[];for(m(r[2],function(e){e.match(/^\s*-+:\s*$/)?a.push({align:"right"}):e.match(/^\s*:-+\s*$/)?a.push({align:"left"}):e.match(/^\s*:-+:\s*$/)?a.push({align:"center"}):a.push({})}),r[1]=i(r[1].replace(/\|\s*$/,""),"|"),n=0;n<r[1].length;n++)_[1][1].push(["th",a[n]||{}].concat(this.processInline(r[1][n].trim())));return m(r[3].replace(/\|\s*$/gm,"").split("\n"),function(e){var t=["tr"];for(e=i(e,"|"),n=0;n<e.length;n++)t.push(["td",a[n]||{}].concat(this.processInline(e[n].trim())));_[2].push(t)},this),[_]},g.dialects.Maruku.inline["{:"]=function(e,t,n){if(!n.length)return[2,"{:"];var r=n[n.length-1];if("string"==typeof r)return[2,"{:"];var i=e.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!i)return[2,"{:"];var o=this.dialect.processMetaHash(i[1]),s=l(r);s||(s={},r.splice(1,0,s));for(var a in o)s[a]=o[a];return[i[0].length,""]},g.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,g.buildBlockOrder(g.dialects.Maruku.block),g.buildInlinePatterns(g.dialects.Maruku.inline);var m,v=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)};m=Array.prototype.forEach?function(e,t,n){return e.forEach(t,n)}:function(e,t,n){for(var r=0;r<e.length;r++)t.call(n||e,e[r],r,e)};var b=function(e){for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0};e.renderJsonML=function(e,t){t=t||{},t.root=t.root||!1;var n=[];if(t.root)n.push(u(e));else for(e.shift(),!e.length||"object"!=typeof e[0]||e[0]instanceof Array||e.shift();e.length;)n.push(u(e.shift()));return n.join("\n\n")}}(function(){return t}())},48:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function s(){d&&h&&(d=!1,h.length?g=h.concat(g):m=-1,g.length&&a())}function a(){if(!d){var e=i(s);d=!0;for(var t=g.length;t;){for(h=g,g=[];++m<t;)h&&h[m].run();m=-1,t=g.length}h=null,d=!1,o(e)}}function l(e,t){this.fun=e,this.array=t}function c(){}var u,f,p=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(e){u=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var h,g=[],d=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new l(e,t)),1!==g.length||d||i(a)},l.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},49:function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},50:function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},51:function(e,t,n){(function(e,r){function i(e,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&t._extend(r,n),k(r.showHidden)&&(r.showHidden=!1),k(r.depth)&&(r.depth=2),k(r.colors)&&(r.colors=!1),k(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=o),l(r,e,r.depth)}function o(e,t){var n=i.styles[t];return n?"["+i.colors[n][0]+"m"+e+"["+i.colors[n][1]+"m":e}function s(e,t){return e}function a(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function l(e,n,r){if(e.customInspect&&n&&$(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return y(i)||(i=l(e,i,r)),i}var o=c(e,n);if(o)return o;var s=Object.keys(n),d=a(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(n)),S(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return u(n);if(0===s.length){if($(n)){var m=n.name?": "+n.name:"";return e.stylize("[Function"+m+"]","special")}if(w(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(T(n))return e.stylize(Date.prototype.toString.call(n),"date");if(S(n))return u(n)}var v="",b=!1,_=["{","}"];if(g(n)&&(b=!0,_=["[","]"]),$(n)){var k=n.name?": "+n.name:"";v=" [Function"+k+"]"}if(w(n)&&(v=" "+RegExp.prototype.toString.call(n)),T(n)&&(v=" "+Date.prototype.toUTCString.call(n)),S(n)&&(v=" "+u(n)),0===s.length&&(!b||0==n.length))return _[0]+v+_[1];if(r<0)return w(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special");e.seen.push(n);var x;return x=b?f(e,n,r,d,s):s.map(function(t){return p(e,n,r,d,t,b)}),e.seen.pop(),h(x,v,_)}function c(e,t){if(k(t))return e.stylize("undefined","undefined");if(y(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return b(t)?e.stylize(""+t,"number"):d(t)?e.stylize(""+t,"boolean"):m(t)?e.stylize("null","null"):void 0}function u(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,i){for(var o=[],s=0,a=t.length;s<a;++s)F(t,String(s))?o.push(p(e,t,n,r,String(s),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(p(e,t,n,r,i,!0))}),o}function p(e,t,n,r,i,o){var s,a,c;if(c=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]},c.get?a=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(a=e.stylize("[Setter]","special")),F(r,i)||(s="["+i+"]"),a||(e.seen.indexOf(c.value)<0?(a=m(n)?l(e,c.value,null):l(e,c.value,n-1),a.indexOf("\n")>-1&&(a=o?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n"))):a=e.stylize("[Circular]","special")),k(s)){if(o&&i.match(/^\d+$/))return a;s=JSON.stringify(""+i),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+a}function h(e,t,n){var r=0,i=e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function g(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function m(e){return null===e}function v(e){return null==e}function b(e){return"number"==typeof e}function y(e){return"string"==typeof e}function _(e){return"symbol"==typeof e}function k(e){return void 0===e}function w(e){return x(e)&&"[object RegExp]"===O(e)}function x(e){return"object"==typeof e&&null!==e}function T(e){return x(e)&&"[object Date]"===O(e)}function S(e){return x(e)&&("[object Error]"===O(e)||e instanceof Error)}function $(e){return"function"==typeof e}function j(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function O(e){return Object.prototype.toString.call(e)}function E(e){return e<10?"0"+e.toString(10):e.toString(10)}function N(){var e=new Date,t=[E(e.getHours()),E(e.getMinutes()),E(e.getSeconds())].join(":");return[e.getDate(),A[e.getMonth()],t].join(" ")}function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var M=/%[sdj%]/g;t.format=function(e){if(!y(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(i(arguments[n]));return t.join(" ")}for(var n=1,r=arguments,o=r.length,s=String(e).replace(M,function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}}),a=r[n];n<o;a=r[++n])s+=m(a)||!x(a)?" "+a:" "+i(a);return s},t.deprecate=function(n,i){function o(){if(!s){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation?console.trace(i):console.error(i),s=!0}return n.apply(this,arguments)}if(k(e.process))return function(){return t.deprecate(n,i).apply(this,arguments)};if(r.noDeprecation===!0)return n;var s=!1;return o};var L,z={};t.debuglog=function(e){if(k(L)&&(L={NODE_ENV:production}.NODE_DEBUG||""),e=e.toUpperCase(),!z[e])if(new RegExp("\\b"+e+"\\b","i").test(L)){var n=r.pid;z[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else z[e]=function(){};return z[e]},t.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=g,t.isBoolean=d,t.isNull=m,t.isNullOrUndefined=v,t.isNumber=b,t.isString=y,t.isSymbol=_,t.isUndefined=k,t.isRegExp=w,t.isObject=x,t.isDate=T,t.isError=S,t.isFunction=$,t.isPrimitive=j,t.isBuffer=n(50);var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.log=function(){console.log("%s - %s",N(),t.format.apply(t,arguments))},t.inherits=n(49),t._extend=function(e,t){if(!t||!x(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(t,n(5),n(48))},59:function(e,t){},71:function(e,t,n){"use strict";(function(e){var r=n(9),i=n.n(r),o=n(59),s=(n.n(o),n(6)),a=n.n(s),l=n(10),c=(n.n(l),n(46)),u=n.n(c),f=n(0),p=(n.n(f),u.a.markdown,null);t["default"]={data:function(){var e=function(e,t,n){setTimeout(function(){t.length<=10?n(new Error("标题字数太少，需10字以上！")):n()},300)},t=function(e,t,n){p.value()?n():n(new Error("内容不能为空"))},n=JSON.parse(sessionStorage.editTopic||"{}");return{tagText:'<br/><br/><a class="tag" target="new" href="https://github.com/BubblyPoker/cnode-vue">来自 cnode-vue</a>',loading:{showLoading:!1,show:function(){this.showLoading=!0},hide:function(){this.showLoading=!1}},topicForm:{tab:"",title:"",content:""},rules:{tab:[{required:!0,message:"请输入板块名称",trigger:"change"}],title:[{required:!0,message:"请输入话题标题",trigger:"blur"},{validator:e,trigger:"change"}],content:[{required:!1},{validator:t,trigger:"blur"}]},editTopic:{id:this.$route.params.id,tab:n.tab,title:n.title,content:n.content}}},computed:n.i(f.mapGetters)({user:"getUserInfo"}),created:function(){this.editTopic.id&&(this.topicForm.tab=this.editTopic.tab,this.topicForm.title=this.editTopic.title,this.fetchUnmdTopic())},mounted:function(){p=new a.a({element:document.getElementsByClassName("el-textarea__inner")[0],forceSync:!0,toolbarTips:!0,showIcons:["bold","italic","strikethrough","heading","heading-smaller","heading-bigger","heading-1","heading-2","heading-3","code","quote","unordered-list","ordered-list","clean-block","link","image","table","horizontal-rule","preview","side-by-side","fullscreen","guide"]})},methods:{reset:function(){this.$refs.topicForm.resetFields(),p.value("")},submit:function(){var t=this;this.user.accesstoken?this.$refs.topicForm.validate(function(n){if(!n)return!1;var r=t;r.setLoading(!0);var i=p.value()||"",o={accesstoken:r.user.accesstoken,tab:r.topicForm.tab,title:r.topicForm.title,content:i+(i.indexOf(r.tagText)==-1&&r.tagText||"")},s="https://cnodejs.org/api/v1/topics";r.editTopic.id&&(o.topic_id=r.editTopic.id,s+="/update"),e.ajax({url:s,type:"POST",dataType:"json",data:o}).done(function(e){return r.setLoading(!1),e&&e.success?void(e.topic_id&&(r.editTopic.id?(r.$message({showClose:!0,message:"编辑成功！",type:"success"}),t.$confirm("是否前往该话题详情页面","提示",{type:"succsss"}).then(function(){r.$router.push({name:"topic",params:{id:r.editTopic.id}})})["catch"](function(){})):r.$message({showClose:!0,message:"发布成功！将自动跳转到主题详情页面",type:"success",onClose:function(){r.$router.push({name:"topic",params:{id:e.topic_id}})}}))):void r.$message({showClose:!0,message:"操作失败，"+JSON.parse(error.responseText).error_msg+", 请稍后再试",type:"warning"})}).fail(function(e){r.setLoading(!1),r.$message({showClose:!0,message:"操作失败，"+JSON.parse(e.responseText).error_msg+", 请稍后再试",type:"warning"})})}):this.$router.push({name:"login",query:{redirect:encodeURIComponent(this.$route.path)}})},fetchUnmdTopic:function(){var t=this;t.setLoading(!0),e.ajax({url:"https://cnodejs.org/api/v1/topic/"+t.editTopic.id,type:"GET",dataType:"json",data:{mdrender:!1,accesstoken:t.user.accesstoken}}).done(function(e){t.setLoading(!1),e&&e.success&&(t.topicForm.content=e.data.content,p.value(e.data.content))}).fail(function(e){t.setLoading(!1),t.$message({showClose:!0,message:JSON.parse(e.responseText).error_msg||"获取数据失败",type:"warning"})})},setLoading:function(e){this.$store.commit("setLoading",e)}},components:{cvHead:i.a}}}).call(t,n(2))},80:function(e,t,n){t=e.exports=n(3)(),t.push([e.i,"\n#content {\n  margin-right: 300px;\n  padding: 0;\n}\n#content #panel #panel-header {\n    padding: 10px;\n    background-color: #f6f6f6;\n    border-radius: 3px 3px 0 0;\n}\n#content #panel #container {\n    background-color: #fff;\n    min-height: 400px;\n    position: relative;\n    padding: 24px;\n}\n",""])},93:function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"container"}},[_h("main",{attrs:{id:"main"}},[_h("el-row",{attrs:{gutter:20}},[_h("el-col",{staticClass:"cv cv-100",attrs:{span:18,id:"content",offset:3}},[_h("div",{staticClass:"grid-content bg-purple"},[_h("el-card",{staticClass:"box-card"},[_h("header",{slot:"header",staticClass:"clearfix"},[editTopic.id?_h("span",["编辑话题"]):_h("span",["发布话题"])," "])," ",_h("main",[_h("el-form",{ref:"topicForm",staticClass:"topicForm",attrs:{model:topicForm,rules:rules,"label-width":"100px"}},[_h("el-form-item",{attrs:{label:"版块",prop:"tab"}},[_h("el-select",{directives:[{name:"model",rawName:"v-model",value:topicForm.tab,expression:"topicForm.tab"}],attrs:{placeholder:"请选择版块"},domProps:{value:topicForm.tab},on:{input:function(e){topicForm.tab=e}}},[_h("el-option",{attrs:{label:"分享",value:"share"}})," ",_h("el-option",{attrs:{label:"问答",value:"ask"}})," ",_h("el-option",{attrs:{label:"招聘",value:"job"}})])])," ",_h("el-form-item",{attrs:{label:"标题",prop:"title"}},[_h("el-input",{directives:[{name:"model",rawName:"v-model",value:topicForm.title,expression:"topicForm.title"}],attrs:{placeholder:"标题字数10字以上"},domProps:{value:topicForm.title},on:{input:function(e){topicForm.title=e}}})])," ",_h("el-form-item",{attrs:{label:"内容",prop:"content"}},[_h("el-input",{directives:[{name:"model",rawName:"v-model",value:topicForm.content,expression:"topicForm.content"}],attrs:{type:"textarea",id:"topiContent",placeholder:"请输入内容"},domProps:{value:topicForm.content},on:{input:function(e){topicForm.content=e}}})])," ",_h("el-form-item",[editTopic.id?_h("el-button",{attrs:{type:"primary",disabled:!user.loginname},nativeOn:{click:function(e){e.preventDefault(),submit(e)}}},["编辑"]):_h("el-button",{attrs:{type:"primary",disabled:!user.loginname},nativeOn:{click:function(e){e.preventDefault(),submit(e)}}},["发布"])," "," ",_h("el-button",{nativeOn:{click:function(e){e.preventDefault(),reset(e)}}},["重置"])])])])])])])])])])},staticRenderFns:[]}}});