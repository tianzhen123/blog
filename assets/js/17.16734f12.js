(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{378:function(t,s,a){"use strict";a.r(s);var n=a(44),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端错误上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端错误上报"}},[t._v("#")]),t._v(" 前端错误上报")]),t._v(" "),a("h2",{attrs:{id:"一、代码执行错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、代码执行错误"}},[t._v("#")]),t._v(" 一、代码执行错误")]),t._v(" "),a("h3",{attrs:{id:"_1、try-catch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、try-catch"}},[t._v("#")]),t._v(" 1、try-catch")]),t._v(" "),a("p",[t._v("​\t缺点：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("使用"),a("code",[t._v("try... catch")]),t._v(" 包裹，影响代码可读性。")])]),t._v(" "),a("li",[a("p",[t._v("无法处理语法错误")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),t._v("；   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中文输入法的；")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我感知不到错误'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("无法处理异步中的错误")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    error        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步错误")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我感知不到错误'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"_2、window-onerror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、window-onerror"}},[t._v("#")]),t._v(" 2、window.onerror")]),t._v(" "),a("p",[t._v("​\twindow.onerror要强那么一丢丢。无论是异步还是非异步错误，onerror 都能捕获到运行时错误。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {String}  errorMessage   错误信息\n * @param {String}  scriptURI      出错的文件\n * @param {Long}    lineNumber     出错代码的行号\n * @param {Long}    columnNumber   出错代码的列号\n * @param {Object}  errorObj       错误的详细信息，Anything\n */")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("errorMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \nscriptURI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \nlineNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\ncolumnNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nerrorObj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("​\twindow.onerror 的缺点：")]),t._v(" "),a("ol",[a("li",[t._v("监听不到资源加载的报错")]),t._v(" "),a("li",[t._v("onerror 事件处理函数只能声明一次，不会重复执行多个回调")])]),t._v(" "),a("h3",{attrs:{id:"_3、window-addeventlistener-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、window-addeventlistener-error"}},[t._v("#")]),t._v(" 3、window.addEventListener('error')")]),t._v(" "),a("p",[t._v("window.addEventListener 可以监听到资源加载报错，也可以注册多个事件处理函数。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只能监听到js执行的错误，无法监听资源加载的错误")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以监听到js执行的错误，和资源加载的错误")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("为捕获状态时（第三个参数为true）能捕获到js执行错误，也能捕获带有src的标签元素的加载错误。")]),t._v(" "),a("p",[t._v("为冒泡状态时（第三个参数为false）能捕获到js执行错误，不能捕获带有src的标签元素的加载错误。")]),t._v(" "),a("h3",{attrs:{id:"_4、promise-中的异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、promise-中的异常"}},[t._v("#")]),t._v(" 4、promise 中的异常")]),t._v(" "),a("p",[t._v("promise 的报错比较娇贵，"),a("code",[t._v("try ……catch")]),t._v(", "),a("code",[t._v("window.onerror")]),t._v(", "),a("code",[t._v("widow.addEventlistener")]),t._v(" 都无法监听到promise 的报错。")]),t._v(" "),a("p",[a("code",[t._v("promise")]),t._v(" 中的报错顺序是：")]),t._v(" "),a("ol",[a("li",[t._v("如果有catch 等捕获函数，则走catch 捕获函数。catch 捕获函数如果没有抛出新的异常，则下一个then将会认为没有什么报错，every thing is so good , 会继续执行。")]),t._v(" "),a("li",[t._v("如果没有catch 等捕获函数，我们需要注册 "),a("code",[t._v("window.addEventListener('unhandledrejection')")]),t._v(" 来处理。")])]),t._v(" "),a("h2",{attrs:{id:"如何收集-badjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何收集-badjs"}},[t._v("#")]),t._v(" 如何收集 badjs")]),t._v(" "),a("ul",[a("li",[t._v("通过 "),a("code",[t._v("errorEvent")]),t._v(" 或者 "),a("code",[t._v("window.onerror")])]),t._v(" "),a("li",[t._v("特殊情况下可以考虑使用 "),a("code",[t._v("try...catch")])])]),t._v(" "),a("h3",{attrs:{id:"badjs-上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#badjs-上报"}},[t._v("#")]),t._v(" badjs 上报")]),t._v(" "),a("ul",[a("li",[t._v("在 url 上拼接 error.stack 的信息")]),t._v(" "),a("li",[t._v("用 img 等方式发送数据，注意长度")])]),t._v(" "),a("h3",{attrs:{id:"badjs-分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#badjs-分析"}},[t._v("#")]),t._v(" badjs 分析")]),t._v(" "),a("ul",[a("li",[t._v("通过栈信息，人工回溯代码")]),t._v(" "),a("li",[t._v("通过 UA 简单判断环境和用户身份")]),t._v(" "),a("li",[t._v('对于 Script error 信息，得不到太多有用的价值，分析的时候可以跳过。但是要想办法在上报的时候把它"解构"')])]),t._v(" "),a("h3",{attrs:{id:"常见的导致-script-error-的场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的导致-script-error-的场景"}},[t._v("#")]),t._v(" 常见的导致 Script error 的场景")]),t._v(" "),a("ul",[a("li",[t._v("跨域脚本，并且未设置 crossorigin 里发生异常")]),t._v(" "),a("li",[t._v("jsonp，未设置 crossorigin，其对于的 script 生成的 js 脚本里发生异常")]),t._v(" "),a("li",[t._v("iOS 下的 跨域脚本 异步代码 内发生异常")]),t._v(" "),a("li",[t._v("iOS 下 native 主动执行 js 代码发生异常")])]),t._v(" "),a("h3",{attrs:{id:"关于异步代码需要注意的点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于异步代码需要注意的点"}},[t._v("#")]),t._v(" 关于异步代码需要注意的点")]),t._v(" "),a("ul",[a("li",[t._v("ios 下的跨域"),a("strong",[t._v("异步")]),t._v("代码无法解析 Script error")]),t._v(" "),a("li",[t._v("try catch 无法抓到"),a("strong",[t._v("异步")]),t._v("代码的错误")]),t._v(" "),a("li",[t._v("jsonp 大多是"),a("strong",[t._v("同步")]),t._v("代码")])])])}),[],!1,null,null,null);s.default=r.exports}}]);