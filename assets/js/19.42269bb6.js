(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{375:function(_,v,t){"use strict";t.r(v);var e=t(44),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"this"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/YhV6A8dsU_sAyjfZTJevIQ",target:"_blank",rel:"noopener noreferrer"}},[_._v("this"),t("OutboundLink")],1)]),_._v(" "),t("h3",{attrs:{id:"_1-默认绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-默认绑定"}},[_._v("#")]),_._v(" 1. 默认绑定")]),_._v(" "),t("p",[_._v("先介绍一种最简单的绑定方式吧："),t("strong",[_._v("默认绑定")]),_._v("。")]),_._v(" "),t("p",[_._v("也就是我们常说的：在非严格模式下"),t("code",[_._v("this")]),_._v("指向的是全局对象"),t("code",[_._v("window")]),_._v("，而在严格模式下会绑定到"),t("code",[_._v("undefined")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"_2-隐式绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-隐式绑定"}},[_._v("#")]),_._v(" 2. 隐式绑定")]),_._v(" "),t("p",[_._v("谁最后调用的函数，函数内的"),t("code",[_._v("this")]),_._v("指向的就是谁(不考虑箭头函数)")]),_._v(" "),t("h3",{attrs:{id:"_3-隐式绑定的隐式丢失问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-隐式绑定的隐式丢失问题"}},[_._v("#")]),_._v(" 3. 隐式绑定的隐式丢失问题")]),_._v(" "),t("p",[_._v("有两种情况容易发生隐式丢失问题：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("使用另一个变量来给函数取别")]),_._v(" "),t("blockquote",[t("p",[_._v("this 指向它的最后调用者")])])]),_._v(" "),t("li",[t("p",[_._v("将函数作为参数传递时会被隐式赋值，回调函数丢失this绑定")]),_._v(" "),t("blockquote",[t("p",[_._v("如果你把一个函数当成参数传递到另一个函数的时候，也会发生隐式丢失的问题，且与包裹着它的函数的this指向无关。在非严格模式下，会把该函数的this绑定到window上，严格模式下绑定到undefined")])])])]),_._v(" "),t("h3",{attrs:{id:"_4-显式绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-显式绑定"}},[_._v("#")]),_._v(" 4. 显式绑定")]),_._v(" "),t("p",[_._v("通过"),t("code",[_._v("call()、apply()")]),_._v("或者"),t("code",[_._v("bind()")]),_._v("方法直接指定"),t("code",[_._v("this")]),_._v("的绑定对象, 如"),t("code",[_._v("foo.call(obj)")]),_._v("。")]),_._v(" "),t("p",[_._v("这里有几个知识点需要注意：")]),_._v(" "),t("ul",[t("li",[_._v("使用"),t("code",[_._v(".call()")]),_._v("或者"),t("code",[_._v(".apply()")]),_._v("的函数是会直接执行的")]),_._v(" "),t("li",[t("code",[_._v("bind()")]),_._v("是创建一个新的函数，需要手动调用才会执行")]),_._v(" "),t("li",[t("code",[_._v(".call()")]),_._v("和"),t("code",[_._v(".apply()")]),_._v("用法基本类似，不过"),t("code",[_._v("call")]),_._v("接收若干个参数，而"),t("code",[_._v("apply")]),_._v("接收的是一个数组")])]),_._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("this")]),_._v(" 永远指向最后调用它的那个对象")]),_._v(" "),t("li",[_._v("匿名函数的"),t("code",[_._v("this")]),_._v("永远指向"),t("code",[_._v("window")])]),_._v(" "),t("li",[_._v("使用"),t("code",[_._v(".call()")]),_._v("或者"),t("code",[_._v(".apply()")]),_._v("的函数是会直接执行的")]),_._v(" "),t("li",[t("code",[_._v("bind()")]),_._v("是创建一个新的函数，需要手动调用才会执行")]),_._v(" "),t("li",[_._v("如果"),t("code",[_._v("call、apply、bind")]),_._v("接收到的第一个参数是空或者"),t("code",[_._v("null、undefined")]),_._v("的话，则会忽略这个参数")]),_._v(" "),t("li",[t("code",[_._v("forEach、map、filter")]),_._v("函数的第二个参数也是能显式绑定"),t("code",[_._v("this")]),_._v("的")])]),_._v(" "),t("h3",{attrs:{id:"_6-new-绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-new-绑定"}},[_._v("#")]),_._v(" 6. new 绑定")]),_._v(" "),t("p",[_._v("使用"),t("code",[_._v("new")]),_._v("来调用一个函数，会构造一个新对象并把这个新对象绑定到调用函数中的"),t("code",[_._v("this")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"_7-箭头函数绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-箭头函数绑定"}},[_._v("#")]),_._v(" 7. 箭头函数绑定")]),_._v(" "),t("p",[_._v("箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined。且指向函数定义时的this而非执行时")]),_._v(" "),t("h3",{attrs:{id:"总结-箭头函数的指向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结-箭头函数的指向"}},[_._v("#")]),_._v(" 总结 箭头函数的指向")]),_._v(" "),t("ul",[t("li",[_._v("它里面的"),t("code",[_._v("this")]),_._v("是由外层作用域来决定的，且指向函数定义时的"),t("code",[_._v("this")]),_._v("而非执行时")]),_._v(" "),t("li",[_._v("字面量创建的对象，作用域是"),t("code",[_._v("window")]),_._v("，如果里面有箭头函数属性的话，"),t("code",[_._v("this")]),_._v("指向的是"),t("code",[_._v("window")])]),_._v(" "),t("li",[_._v("构造函数创建的对象，作用域是可以理解为是这个构造函数，且这个构造函数的"),t("code",[_._v("this")]),_._v("是指向新建的对象的，因此"),t("code",[_._v("this")]),_._v("指向这个对象。")]),_._v(" "),t("li",[_._v("箭头函数的"),t("code",[_._v("this")]),_._v("是无法通过"),t("code",[_._v("bind、call、apply")]),_._v("来"),t("strong",[_._v("直接")]),_._v("修改，但是可以通过改变作用域中"),t("code",[_._v("this")]),_._v("的指向来间接修改。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);