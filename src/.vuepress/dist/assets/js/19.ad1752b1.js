(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{444:function(t,e,n){var i=n(19),a=Date.prototype,s=a.toString,r=a.getTime;"Invalid Date"!=String(new Date(NaN))&&i(a,"toString",(function(){var t=r.call(this);return t==t?s.call(this):"Invalid Date"}))},469:function(t,e,n){"use strict";n.r(e);n(444);var i={name:"disqusTag",methods:{running:function(){var t=document,e=t.createElement("script");return e.src=this.$site.themeConfig.disqus+".disqus.com/embed.js",e.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(e)}},mounted:function(){this.running()}},a=n(45),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"theme-default-content",attrs:{id:"disqus_thread"}})}),[],!1,null,null,null);e.default=s.exports}}]);