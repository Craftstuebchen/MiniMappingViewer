(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"174d":function(t,a,e){"use strict";var s=e("8e54"),o=e.n(s);o.a},"1cf3":function(t,a,e){"use strict";var s=e("bfc0"),o=e.n(s);o.a},"33d9":function(t,a,e){},"478f":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",[e("div",{staticClass:"row"},[t.client?e("h3",{staticClass:"col-8",staticStyle:{margin:"10px 0 10px 0"}},[t._v("\n      Client Mojang Mappings for "+t._s(t.versionId)+"\n    ")]):t._e(),!t.client&&t.toObf?e("h3",{staticClass:"col-8",staticStyle:{margin:"10px 0 10px 0"}},[t._v("\n      Mojang -> Spigot for "+t._s(t.versionId)+"\n    ")]):t._e(),t.client||t.toObf?t._e():e("h3",{staticClass:"col-8",staticStyle:{margin:"10px 0 10px 0"}},[t._v("\n      Spigot -> Mojang for "+t._s(t.versionId)+"\n    ")]),e("q-input",{staticClass:"col-3 q-ma-sm",attrs:{placeholder:"Filter (Classes)",clearable:"",dense:"",debounce:"500",type:"search"},on:{input:t.input,clear:t.clear},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(a){t.filter=a},expression:"filter"}}),e("div",{staticClass:"col-12"},[e("q-virtual-scroll",{ref:"scroll",staticStyle:{"max-height":"calc(100vh - 120px)"},attrs:{items:t.mojangKeys,"virtual-scroll-slice-size":15,separator:""},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.item,o=a.index;return[e("q-item",{key:o},[t.client?e("Member",{staticClass:"col-12",attrs:{mojangData:t.getMojangItemData(s),toObf:t.toObf}}):e("Member",{staticClass:"col-12",attrs:{mojangData:t.getMojangItemData(s),spigotData:t.getSpigotItemData(s),toObf:t.toObf}})],1)]}}])})],1)],1)])},o=[],n=(e("8e6e"),e("8a81"),e("ac6a"),e("cadf"),e("06db"),e("456d"),e("c47a")),i=e.n(n),r=e("2f62"),l=e("cd4b"),c=(e("f559"),e("28a5"),function(t){var a={},e={},s=null,o=null,n=null;return t.split("\n").forEach((function(t){if(t.startsWith("#")||""===t);else if(t.startsWith("\t")||t.startsWith("    "))if(-1!==t.indexOf(":")?(n=t.split(":"),n&&3===n.length?t=n[2]:Object(l["a"])("Invalid member line (wlc): '"+t+"'")):t=t.substring(4),-1!==t.indexOf("("))if(n=t.split(" "),n&&4===n.length){var i=n[1].substring(0,n[1].indexOf("(")),r=n[1].substring(n[1].indexOf("(")+1,n[1].indexOf(")"));s.methods[i]={returnType:n[0],mapped:i,obf:n[3],params:r},o.methods[n[3]]={returnType:n[0],mapped:i,obf:n[3],params:r}}else Object(l["a"])("Invalid member line (m): '"+t+"'");else n=t.split(" "),n&&4===n.length?(s.fields[n[1]]={dataType:n[0],mapped:n[1],obf:n[3]},o.fields[n[3]]={dataType:n[0],mapped:n[1],obf:n[3]}):Object(l["a"])("Invalid member line (f): '"+t+"'");else s&&o&&(a[s.mapped]=s,e[o.obf]=o),n=t.split(" -> "),n&&2===n.length?(s={mapped:n[0],obf:n[1].substring(0,n[1].length-1),fields:{},methods:{}},o={mapped:n[0],obf:n[1].substring(0,n[1].length-1),fields:{},methods:{}}):Object(l["a"])("Invalid class line: '"+t+"'")})),{mappedToObf:a,obfToMapped:e}}),p=(e("a481"),function(t,a){var e={},s={},o=null;t.split("\n").forEach((function(t){if(t.startsWith("#")||""===t);else if(o=t.split(" "),o&&2===o.length){var a=o[0],n=o[1];e[n]={mapped:n,obf:a,methods:{},fields:{}},s[a]={mapped:n,obf:a,methods:{},fields:{}}}else Object(l["a"])("Invalid class line "+t)})),e["net.minecraft.server.MinecraftServer"]={mapped:"net.minecraft.server.MinecraftServer",obf:"net.minecraft.server.MinecraftServer",methods:{},fields:{}},s["net.minecraft.server.MinecraftServer"]={mapped:"net.minecraft.server.MinecraftServer",obf:"net.minecraft.server.MinecraftServer",methods:{},fields:{}};var n=null,i=null;return a.split("\n").forEach((function(t){if(t.startsWith("#")||""===t);else if(t.startsWith("net/minecraft/server/")&&(t="net.minecraft.server."+t.substring("net/minecraft/server/".length)),-1!==t.indexOf("("))if(o=t.split(" "),o&&4===o.length){n=e[o[0]];var a=d(o[2].substring(o[2].indexOf(")")+1)),r=o[2].substring(o[2].indexOf("(")+1,o[2].indexOf(")"));r=r.substring(0,r.length-1).split(";").filter((function(t){return""!==t})).map((function(t){return d(t+";")})).join(","),void 0===r&&(r=""),n?n.methods[o[3]]={returnType:a,mapped:o[3],obf:o[1],params:r,debug:o[2].substring(o[2].indexOf("(")+1,o[2].indexOf(")"))}:Object(l["a"])("error: didnt find (sm): "+o[0]),i=s[e[o[0]].obf],i?i.methods[o[1]+"("+r+")"]={returnType:a,mapped:o[3],obf:o[1],params:r,debug:o[2].substring(o[2].indexOf("(")+1,o[2].indexOf(")"))}:Object(l["a"])("error: didnt find (om): "+e[o[0]].obf)}else Object(l["a"])("Invalid line (f): "+o);else o=t.split(" "),o&&3===o.length?(n=e[o[0]],n?n.fields[o[2]]={dataType:"",mapped:o[2],obf:o[1]}:Object(l["a"])("error: didnt find (sf): "+o[0]),i=s[e[o[0]].obf],i?i.fields[o[1]]={dataType:"",mapped:o[2],obf:o[1]}:Object(l["a"])("error: didnt find (om): "+e[o[0]].obf)):Object(l["a"])("Invalid line (f): "+o)})),{mappedToObf:e,obfToMapped:s}}),d=function(t){switch(t){case"B":return"byte";case"C":return"char";case"S":return"short";case"I":return"int";case"J":return"long";case"F":return"float";case"D":return"double";case"Z":return"boolean";case"V":return"void"}return t.startsWith("L")?t.substring(1,t.length-1).replace("/","."):t},f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[!0===t.toObf&&t.mojangData?e("div",{staticStyle:{overflow:"auto"}},[e("q-item-section",[e("q-item-label",{staticClass:"text-subtitle1",staticStyle:{"background-color":"#d3d3d370"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"},[t._v("Class:")]),e("div",{staticClass:"col-11 row"},[e("div",{staticClass:"offset-3 col-3"},[t._v(t._s(t.mojangData.mapped))]),e("div",{staticClass:"col-3",staticStyle:{color:"grey"}},[t._v(t._s(t.mojangData.obf))]),t.spigotData&&t.spigotData.mapped?e("div",{staticClass:"col-3",staticStyle:{color:"red"}},[t._v("\n              "+t._s(t.spigotData.mapped)+"\n            ")]):t._e()])])])],1),t.fields.length>0?e("q-item-section",[e("span",{staticClass:"text-subtitle2"},[t._v("Fields ("+t._s(t.fields.length)+"):")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-11 offset-1 row"},[e("div",{staticClass:"col-3"},[t._v("Data Type")]),e("div",{staticClass:"col-3"},[t._v("Mojang Name")]),e("div",{staticClass:"col-3"},[t._v("Obf Name")]),e("div",{staticClass:"col-3"},[t._v("Spigot Name")])]),e("q-separator",{staticClass:"col-11 offset-1"}),t._l(t.fields,(function(a,s){return e("Field",{key:s,attrs:{mojangData:t.mojangData.fields[a],spigotData:t.mojangMemberToSpigot(a,!1),toObf:t.toObf}})}))],2)]):t._e(),t.methods.length>0?e("q-item-section",[e("span",{staticClass:"text-subtitle2"},[t._v("Methods ("+t._s(t.methods.length)+"):")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-11 offset-1 row"},[e("div",{staticClass:"col-3"},[t._v("Return Type")]),e("div",{staticClass:"col-3"},[t._v("Mojang Name")]),e("div",{staticClass:"col-3"},[t._v("Obf Name")]),e("div",{staticClass:"col-3"},[t._v("Spigot Name")])]),e("q-separator",{staticClass:"col-11 offset-1"}),t._l(t.methods,(function(a,s){return e("Method",{key:s,attrs:{mojangData:t.mojangData.methods[a],spigotData:t.mojangMemberToSpigot(a,!0),toObf:t.toObf}})}))],2)]):t._e()],1):!1===t.toObf&&t.mojangData?e("div",{staticStyle:{overflow:"auto"}},[e("q-item-section",[e("q-item-label",{staticClass:"text-subtitle1",staticStyle:{"background-color":"#d3d3d370"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"},[t._v("Class:")]),e("div",{staticClass:"col-11 row"},[t.spigotData&&t.spigotData.mapped?e("div",{staticClass:"col-3"},[t._v(t._s(t.spigotData.mapped))]):e("div",{staticClass:"col-3"},[t._v(t._s(t.mojangData.obf))]),e("div",{staticClass:"col-3",staticStyle:{color:"grey"}},[t._v(t._s(t.mojangData.obf))]),t.mojangData.mapped?e("div",{staticClass:"col-3",staticStyle:{color:"red"}},[t._v("\n              "+t._s(t.mojangData.mapped)+"\n            ")]):t._e()])])])],1),t.fields.length>0?e("q-item-section",{staticClass:"q-ma-none"},[e("span",{staticClass:"text-subtitle2"},[t._v("Fields ("+t._s(t.fields.length)+"):")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-11 offset-1 row"},[e("div",{staticClass:"col-3"},[t._v("Data Type")]),e("div",{staticClass:"col-3"},[t._v("Spigot Name (gray for obf)")]),e("div",{staticClass:"col-3"},[t._v("Mojang Name")])]),e("q-separator",{staticClass:"col-11 offset-1"}),t._l(t.fields,(function(a,s){return e("Field",{key:s,attrs:{mojangData:t.mojangData.fields[a],spigotData:t.mojangMemberToSpigot(a,!1),toObf:t.toObf}})}))],2)]):t._e(),t.methods.length>0?e("q-item-section",[e("span",{staticClass:"text-subtitle2"},[t._v("Methods ("+t._s(t.methods.length)+"):")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-11 offset-1 row"},[e("div",{staticClass:"col-3"},[t._v("Return Type")]),e("div",{staticClass:"col-3"},[t._v("Spigot Name (gray for obf)")]),e("div",{staticClass:"col-3"},[t._v("Mojang Name")])]),e("q-separator",{staticClass:"col-11 offset-1"}),t._l(t.methods,(function(a,s){return e("Method",{key:s,attrs:{mojangData:t.mojangData.methods[a],spigotData:t.mojangMemberToSpigot(a,!0),toObf:t.toObf}})}))],2)]):t._e()],1):e("q-item-section",[e("q-item-label",[t._v("Loading... "+t._s(t.mojangData))])],1)],1)},g=[],m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-11 offset-1 row"},[t.toObf?[e("div",{staticClass:"col-3"},[t._v("\n      "+t._s(t.mojangData.dataType)+"\n    ")]),e("div",{staticClass:"col-3"},[t._v("\n      "+t._s(t.mojangData.mapped)+"\n    ")]),e("div",{staticClass:"col-3",staticStyle:{color:"gray"}},[t._v("\n      "+t._s(t.mojangData.obf)+"\n    ")]),t.spigotData?e("div",{staticClass:"col-3",staticStyle:{color:"red"}},[t._v("\n      "+t._s(t.spigotData.mapped)+"\n    ")]):t._e()]:[e("div",{staticClass:"col-3"},[t._v("\n      "+t._s(t.mojangData.dataType)+"\n    ")]),t.spigotData&&t.spigotData.mapped?e("div",{staticClass:"col-3"},[t._v("\n      "+t._s(t.spigotData.mapped)+" ("+t._s(t.mojangData.obf)+")\n    ")]):e("div",{staticClass:"col-3",staticStyle:{color:"gray"}},[t._v("\n      "+t._s(t.mojangData.obf)+"\n    ")]),e("div",{staticClass:"col-3",staticStyle:{color:"red"}},[t._v("\n      "+t._s(t.mojangData.mapped)+"\n    ")])]],2)},u=[],v={name:"Field",props:{mojangData:{type:Object,required:!1},spigotData:{type:Object,required:!1},toObf:{type:Boolean,required:!0}}},b=v,h=(e("174d"),e("2877")),j=Object(h["a"])(b,m,u,!1,null,"eb3650b0",null),_=j.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-11 offset-1 row"},[t.toObf?[e("div",{staticClass:"col-3"},[t._v("\n      "+t._s(t.mojangData.returnType)+"\n    ")]),e("div",{staticClass:"col-3"},[t._v("\n      "+t._s(t.mojangData.mapped)+"("+t._s(t.mojangData.params)+")\n    ")]),e("div",{staticClass:"col-3",staticStyle:{color:"gray"}},[t._v("\n      "+t._s(t.mojangData.obf)+"("+t._s(t.mojangData.params)+")\n    ")]),t.spigotData?e("div",{staticClass:"col-3",staticStyle:{color:"red"}},[t._v("\n      "+t._s(t.spigotData.mapped)+"("+t._s(t.spigotData.params)+")\n      "),t.spigotData.warning?e("span",[t._v("\n        "+t._s(t.spigotData.warning)+"\n      ")]):t._e()]):t._e()]:[t.spigotData&&t.spigotData.returnType?e("div",{staticClass:"col-3"},[t._v("\n      "+t._s(t.spigotData.returnType)+"\n    ")]):e("div",{staticClass:"col-3"},[t._v("\n      "+t._s(t.mojangData.returnType)+" (mojang)\n    ")]),t.spigotData&&t.spigotData.mapped?e("div",{staticClass:"col-3"},[t._v("\n      "+t._s(t.spigotData.mapped)+"("+t._s(t.spigotData.params)+")\n      "),e("span",{staticStyle:{color:"gray"}},[t._v("(obf "+t._s(t.mojangData.obf)+")")]),t.spigotData.warning?e("span",[t._v("\n        "+t._s(t.spigotData.warning)+"\n      ")]):t._e()]):e("div",{staticClass:"col-3",staticStyle:{color:"gray"}},[t._v("\n      "+t._s(t.mojangData.obf)),e("span",{staticStyle:{color:"black"}},[t._v("("+t._s(t.mojangData.params)+")")])]),e("div",{staticClass:"col-3",staticStyle:{color:"red"}},[t._v("\n     "+t._s(t.mojangData.mapped)),e("span",{staticStyle:{color:"black"}},[t._v("("+t._s(t.mojangData.params)+")")])])]],2)},O=[],y={name:"Method",props:{mojangData:{type:Object,required:!1},spigotData:{type:Object,required:!1},toObf:{type:Boolean,required:!0}}},C=y,M=(e("1cf3"),Object(h["a"])(C,D,O,!1,null,"7bfbeb6a",null)),S=M.exports,w={name:"Member",components:{Method:S,Field:_},props:{mojangData:{type:Object,required:!1},spigotData:{type:Object,required:!1},toObf:{type:Boolean,required:!0}},computed:{mojangKeys:function(){return Object.keys(this.mojangData&&this.mojangData.members?this.mojangData.members:{})},fields:function(){return Object.keys(this.mojangData.fields)},methods:function(){return Object.keys(this.mojangData.methods)}},methods:{mojangMemberToSpigot:function(t,a){if(!this.spigotData)return null;var e=a?this.spigotData.methods:this.spigotData.fields;if(!e)return null;var s=a?this.mojangData.methods[t]:this.mojangData.fields[t];if(s){var o=Object.keys(e).filter((function(t){return t.startsWith(s.obf)}));if(o&&o.length>0){s.params||(s.params=""),o.forEach((function(t){e[t].params||(e[t].params="")}));var n=1===s.params.split(",").length?s.params.length>0?1:0:s.params.split(",").length;return o=o.filter((function(t){return n===(1===e[t].params.split(",").length?e[t].params.length>0?1:0:e[t].params.split(",").length)})),o&&o.length>0?1===o.length?(0!==n&&(e[o[0]].warning="maybe wrong"),e[o[0]]):(e[o[1]].warning="most likely wrong",e[o[1]]):null}return null}return null}}},x=w,I=(e("91e9"),e("eebe")),q=e.n(I),T=e("4074"),k=e("0170"),P=e("eb85"),E=Object(h["a"])(x,f,g,!1,null,"43acfe14",null),V=E.exports;function N(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function L(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?N(Object(e),!0).forEach((function(a){i()(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):N(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}q()(E,"components",{QItemSection:T["a"],QItemLabel:k["a"],QSeparator:P["a"]});var F={name:"MojangMappings",components:{Member:V},props:{versionId:{type:String,required:!0},client:{type:Boolean,required:!0},toObf:{type:Boolean,required:!0}},data:function(){return{mojangParsed:null,spigotParsed:null,filter:""}},mounted:function(){var t=this;this.versionManifest?this.loadMojang():this.loadMojangVersions().then((function(){t.loadMojang()})).catch((function(t){Object(l["a"])("Error while loading mojang versions: "+t)})),this.client||(this.spigotVersions?this.loadSpigot():this.loadSpigotVersions().then((function(){t.loadSpigot()})).catch((function(t){Object(l["a"])("Error while loading spigot versions: "+t)})))},computed:L({},Object(r["c"])({versionManifest:function(t){return t.mojang.versionManifest},versions:function(t){return t.mojang.versions},clientMappings:function(t){return t.mojang.clientMappings},serverMappings:function(t){return t.mojang.serverMappings},spigotVersions:function(t){return t.spigot.versions},spigotClasses:function(t){return t.spigot.classes},spigotMembers:function(t){return t.spigot.members}}),{mojangKeys:function(){var t=this;if(this.mojangParsed){var a=this.mojangParsed.mappedToObf;return Object.keys(a).filter((function(e){if(e.toLowerCase().indexOf(t.filter.toLowerCase())>-1)return!0;if(a[e].obf.toLowerCase().indexOf(t.filter.toLowerCase())>-1)return!0;var s=t.getSpigotItemData(e);return!(!s||!s.mapped)&&s.mapped.toLowerCase().indexOf(t.filter.toLowerCase())>-1}))}return[]}}),methods:L({},Object(r["b"])({loadMojangVersions:"mojang/loadVersions",loadMojangVersion:"mojang/loadVersion",loadMojangMappings:"mojang/loadMappings",loadSpigotVersions:"spigot/loadVersions",loadSpigotMappings:"spigot/loadMappings"}),{getMojangItemData:function(t){var a=this.mojangParsed.mappedToObf[t];return a||{}},getSpigotItemData:function(t){var a=this.getMojangItemData(t);if(!this.spigotParsed)return{};if(a){var e=this.spigotParsed.obfToMapped[a.obf];return e||{}}return{}},clear:function(){this.filter="",this.$refs.scroll.reset()},input:function(){this.$refs.scroll.reset()},loadMojang:function(){var t=this;this.loadMojangVersion({versionId:this.versionId}).then((function(){t.loadMojangMappings({versionId:t.versionId}).then((function(){t.client?t.mojangParsed=c(t.clientMappings[t.versionId]):t.mojangParsed=c(t.serverMappings[t.versionId])})).catch((function(t){Object(l["a"])("Error while loading mojang mappings: "+t)}))})).catch((function(t){Object(l["a"])("Error while loading mojang version: "+t)}))},loadSpigot:function(){var t=this;this.loadSpigotMappings({versionId:this.versionId}).then((function(){t.spigotParsed=p(t.spigotClasses[t.versionId],t.spigotMembers[t.versionId])})).catch((function(t){Object(l["a"])("Error while loading spigot mappings: "+t)}))}})},Q=F,W=e("9989"),B=e("27f9"),$=e("0016"),J=e("a12b"),K=e("66e5"),R=Object(h["a"])(Q,s,o,!1,null,"b072702c",null);a["a"]=R.exports;q()(R,"components",{QPage:W["a"],QInput:B["a"],QIcon:$["a"],QVirtualScroll:J["a"],QItem:K["a"]})},"8e54":function(t,a,e){},"91e9":function(t,a,e){"use strict";var s=e("33d9"),o=e.n(s);o.a},bfc0:function(t,a,e){},cd4b:function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));var s=e("2a19"),o=function(t){s["a"].create({message:t,color:"red-5",textColor:"white",icon:"warning"}),console.log("Error: "+t)}}}]);