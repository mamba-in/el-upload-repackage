(function(e){function t(t){for(var r,o,l=t[0],u=t[1],s=t[2],c=0,f=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},3419:function(e,t,n){},"4af0":function(e,t,n){"use strict";var r=n("3419"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("upload",{attrs:{limit:3,size:5}})],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-upload",{ref:"filesUpload",staticClass:"upload-demo",attrs:{action:"",drag:e.drag,multiple:e.multiple,"on-change":e.handlePrepareFiles,"on-exceed":e.handleExceed,"before-remove":e.filesBeforeRemove,"on-remove":e.filesHadRemove,limit:e.limit,"auto-upload":!1,accept:e.accept,"list-type":e.listType}},[n("i",{staticClass:"el-icon-upload"}),!0===e.drag?n("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),n("em",[e._v("点击上传")])]):n("el-button",{attrs:{size:"small",type:"text"}},[e._v("点击上传")]),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" "+e._s("只能上传"+e.accept+"文件，数量最多为"+e.limit+"个")+" ")])],1)],1)},l=[],u=(n("b0c0"),n("a9e3"),{props:{drag:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},limit:{type:Number,default:1},accept:{type:String,default:"image/jpeg,image/png"},size:{type:Number,default:2},listType:{type:String,default:"picture"}},methods:{handlePrepareFiles:function(e,t){var n=e.size/1024/1024<this.size;if(!n)return this.$refs.filesUpload.clearFiles(),this.$message.error("上传的文件大小不能超过 ".concat(this.size,"MB!"));this.$emit("handle-prepare",{file:e,fileList:t})},handleExceed:function(){return this.$message.warning("请注意，只能上传".concat(this.limit,"个文件"))},filesBeforeRemove:function(e){return this.$confirm("确认删除".concat(e.name,"吗？"),"提示",{type:"warning"})},filesHadRemove:function(e,t){this.$emit("had-remove",{file:e,fileList:t})}}}),s=u,p=(n("4af0"),n("2877")),c=Object(p["a"])(s,o,l,!1,null,"78e7d342",null),f=c.exports,d={name:"ElUploadRepackage",components:{Upload:f}},m=d,v=(n("034f"),Object(p["a"])(m,a,i,!1,null,null,null)),h=v.exports,y=(n("9e1f"),n("450d"),n("6ed5")),g=n.n(y),b=(n("0fb7"),n("f529")),w=n.n(b),_=(n("f225"),n("89a9")),x=n.n(_),O=(n("1951"),n("eedf")),j=n.n(O);r["default"].use(j.a),r["default"].use(x.a),r["default"].prototype.$message=w.a,r["default"].prototype.$confirm=g.a.confirm;t["default"]=f;"undefined"!==typeof window&&window.Vue&&window.Vue.component("el-upload-repackage",f),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.8b745b52.js.map