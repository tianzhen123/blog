(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{376:function(t,a,s){"use strict";s.r(a);var e=s(44),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("[TOC]")]),t._v(" "),s("h2",{attrs:{id:"ajax-请求头中常见content-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax-请求头中常见content-type"}},[t._v("#")]),t._v(" Ajax 请求头中常见content-type")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("application/x-www-form-urlencoded")])])]),t._v(" "),s("blockquote",[s("p",[t._v("这应该是最常见的 POST 提交数据的方式了。浏览器的原生 form 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。提交的数据按照 key1=val1&key2=val2 的方式进行编码")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("strong",[t._v("multipart/form-data")])])]),t._v(" "),s("blockquote",[s("p",[t._v("这也是一个常见的 POST 数据提交的方式。我们使用表单上传文件时，就要让 form 的 enctype 等于这个值")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("strong",[t._v("application/json")])])]),t._v(" "),s("blockquote",[s("p",[t._v("用来告诉服务端消息主体是序列化后的 JSON 字符串")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("strong",[t._v("text/xml")])])]),t._v(" "),s("h2",{attrs:{id:"简单请求和非简单请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单请求和非简单请求"}},[t._v("#")]),t._v(" 简单请求和非简单请求")]),t._v(" "),s("h3",{attrs:{id:"简单请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[t._v("#")]),t._v(" 简单请求")]),t._v(" "),s("p",[t._v("满足以下条件的请求即为简单请求：")]),t._v(" "),s("ul",[s("li",[t._v("请求方法：GET、POST、HEAD")]),t._v(" "),s("li",[t._v("除了以下的请求头字段之外，没有自定义的请求头\n"),s("ul",[s("li",[t._v("Accept")]),t._v(" "),s("li",[t._v("Accept-Language")]),t._v(" "),s("li",[t._v("Content-Language")]),t._v(" "),s("li",[t._v("Content-Type")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://httpwg.org/http-extensions/client-hints.html#dpr",target:"_blank",rel:"noopener noreferrer"}},[t._v("DPR"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://httpwg.org/http-extensions/client-hints.html#downlink",target:"_blank",rel:"noopener noreferrer"}},[t._v("Downlink"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://httpwg.org/http-extensions/client-hints.html#save-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("Save-Data"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://httpwg.org/http-extensions/client-hints.html#viewport-width",target:"_blank",rel:"noopener noreferrer"}},[t._v("Viewport-Width"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://httpwg.org/http-extensions/client-hints.html#width",target:"_blank",rel:"noopener noreferrer"}},[t._v("Width"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[t._v("Content-Type的值只有以下三种"),s("code",[t._v("(Content-Type一般是指在post请求中，get请求中设置没有实际意义)")]),t._v(" "),s("ul",[s("li",[t._v("text/plain")]),t._v(" "),s("li",[t._v("multipart/form-data")]),t._v(" "),s("li",[t._v("application/x-www-form-urlencoded")])])]),t._v(" "),s("li",[t._v("请求中的任意XMLHttpRequestUpload 对象均没有注册任何事件监听器 "),s("code",[t._v("(未验证)")]),t._v(" "),s("ul",[s("li",[t._v("XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问")])])]),t._v(" "),s("li",[t._v("请求中没有使用 ReadableStream 对象 "),s("code",[t._v("(未验证)")])])]),t._v(" "),s("h3",{attrs:{id:"复杂请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复杂请求"}},[t._v("#")]),t._v(" 复杂请求")]),t._v(" "),s("p",[t._v("非简单请求即为复杂请求。复杂请求我们也可以称之为在实际进行请求之前，需要发起预检请求的请求。")]),t._v(" "),s("h2",{attrs:{id:"在浏览器输入地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器输入地址"}},[t._v("#")]),t._v(" 在浏览器输入地址")]),t._v(" "),s("ol",[s("li",[s("h4",{attrs:{id:"缓存查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存查找"}},[t._v("#")]),t._v(" 缓存查找")]),t._v(" "),s("blockquote",[s("p",[t._v("浏览器会先查看 "),s("strong",[t._v("浏览器缓存")]),t._v(" 中有没有这个地址， 如果没有那就再去 "),s("strong",[t._v("系统缓存")]),t._v("， 如果系统缓存还没有， 那就去路由器缓存找， 总之只要缓存中有， 就说明有这个资源， 那浏览器直接显示出来就好了。")])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"dns-解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析"}},[t._v("#")]),t._v(" DNS 解析")]),t._v(" "),s("blockquote",[s("ol",[s("li",[s("strong",[t._v("先到各种缓存信息中查找")])]),t._v(" "),s("li",[s("strong",[t._v("DNS服务器查找")])])])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"浏览器主机根据ip地址与服务器建立tcp连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器主机根据ip地址与服务器建立tcp连接"}},[t._v("#")]),t._v(" 浏览器主机根据ip地址与服务器建立TCP连接")]),t._v(" "),s("blockquote",[s("p",[t._v("TCP 三次握手")])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"发送http请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送http请求"}},[t._v("#")]),t._v(" 发送HTTP请求")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"服务器处理请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器处理请求"}},[t._v("#")]),t._v(" 服务器处理请求")]),t._v(" "),s("blockquote",[s("p",[t._v("服务器收到请求并响应，生成一个HTTP响应报文，通过TCP协议发送给浏览器主机")])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"断开tcp连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#断开tcp连接"}},[t._v("#")]),t._v(" 断开TCP连接")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"浏览器解析文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器解析文件"}},[t._v("#")]),t._v(" 浏览器解析文件")]),t._v(" "),s("blockquote",[s("p",[t._v("浏览器通过解析"),s("code",[t._v("HTML")]),t._v("，生成DOM树，解析"),s("code",[t._v("CSS")]),t._v("，生成CSS规则树，然后通过DOM树和CSS规则树生成渲染树。渲染树与DOM树不同，渲染树中并没有head、display为none等不必显示的节点。")])])])]),t._v(" "),s("h2",{attrs:{id:"http-请求状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-请求状态码"}},[t._v("#")]),t._v(" http 请求状态码")]),t._v(" "),s("ol",[s("li",[s("h4",{attrs:{id:"_2xx-成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2xx-成功"}},[t._v("#")]),t._v(" "),s("strong",[t._v("2xx")]),t._v("（成功）")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//成功  服务器已经成功处理了请求。通常，这表示服务器提供了请求的网页。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("201")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//已创建  请求成功并且服务器创建了新的资源")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("202")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//已接受  服务器已接受请求，但尚未处理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("203")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非授权信息  服务器已经成功处理了请求，但返回的信息可能来自另一来源")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("204")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//无内容  服务器成功处理了请求，但没有返回任何内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("205")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//重置内容  服务器成功处理了请求，但没有返回任何内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("206")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//部分内容  服务器成功处理了部分GET请求")]),t._v("\n")])])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"_3xx-重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3xx-重定向"}},[t._v("#")]),t._v(" "),s("strong",[t._v("3xx")]),t._v("（重定向）")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//永久重定向，表示请求的资源已经永久的办到了其他位置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("302")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//临时重定向，表示请求的资源临时搬到了其他位置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("303")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看其它位置  请求者应当对不同的位置使用单独的GET请求来检索响应时，服务器返回此代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("304")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//未修改  自动上次请求后，请求的网页未修改过。服务器返回此响应，不会返回网页的内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("305")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用代理  请求者只能使用代理访问请求的网页。如果服务器返回此响应，还表示请求者应使用代理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("307")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//临时性重定向  服务器目前从不同位置的网页响应请求，但请求者应继续使用原有的位置来进行以后的请求")]),t._v("\n")])])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"_4xx-请求错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4xx-请求错误"}},[t._v("#")]),t._v(" 4xx（请求错误）")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//客户端请求的语法错误，服务器无法理解")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//未授权  请求要求身份验证。对于需要登录的网页，服务器可能返回此响应")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//禁止  服务器拒绝请求")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//未找到  服务器找不到请求的网页")]),t._v("\n")])])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"_5xx-服务器错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5xx-服务器错误"}},[t._v("#")]),t._v(" 5xx（服务器错误）")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//服务器内部错误  服务器遇到错误，无法完成请求")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("501")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//尚未实施  服务器不具备完成请求的功能。例如，服务器无法识别请求方法时可能会返回此代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//错误网关  服务器作为网关或代理，从上游服务器无法收到无效响应")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//服务器不可用  服务器目前无法使用（由于超载或者停机维护）。通常，这只是暂时状态")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//网关超时  服务器作为网关代理，但是没有及时从上游服务器收到请求")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("505")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//HTTP版本不受支持  服务器不支持请求中所用的HTTP协议版本")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"你知道-302-状态码是什么嘛-你平时浏览网页的过程中遇到过哪些-302-的场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你知道-302-状态码是什么嘛-你平时浏览网页的过程中遇到过哪些-302-的场景"}},[t._v("#")]),t._v(" 你知道 302 状态码是什么嘛？你平时浏览网页的过程中遇到过哪些 302 的场景？")]),t._v(" "),s("blockquote",[s("p",[t._v("而 302 表示临时重定向，这个资源只是暂时不能被访问了，但是之后过一段时间还是可以继续访问，一般是访问某个网站的资源需要权限时，会需要用户去登录，跳转到登录页面之后登录之后，还可以继续访问。")])]),t._v(" "),s("blockquote",[s("p",[t._v("301 类似，都会跳转到一个新的网站，但是 301 代表访问的地址的资源被永久移除了，以后都不应该访问这个地址，搜索引擎抓取的时候也会用新的地址替换这个老的。可以在返回的响应的 location 首部去获取到返回的地址。301 的场景如下：")])]),t._v(" "),s("ul",[s("li",[t._v("比如从 http://baidu.com，跳转到 https://baidu.com")]),t._v(" "),s("li",[t._v("域名换了")])]),t._v(" "),s("h2",{attrs:{id:"三次握手和四次挥手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三次握手和四次挥手"}},[t._v("#")]),t._v(" 三次握手和四次挥手")]),t._v(" "),s("p",[t._v("为什么要进行三次握手：为了确认对方的发送和接收能力。")]),t._v(" "),s("h3",{attrs:{id:"三次握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[t._v("#")]),t._v(" 三次握手")]),t._v(" "),s("p",[t._v("三次握手主要流程：")]),t._v(" "),s("ul",[s("li",[t._v("一开始双方处于 CLOSED 状态，然后服务端开始监听某个端口进入 LISTEN 状态")]),t._v(" "),s("li",[t._v("然后客户端主动发起连接，发送 SYN，然后自己变为 SYN-SENT，seq = x")]),t._v(" "),s("li",[t._v("服务端收到之后，返回 SYN seq = y 和 ACK ack = x + 1（对于客户端发来的 SYN），自己变成 SYN-REVD")]),t._v(" "),s("li",[t._v("之后客户端再次发送 ACK seq = x + 1, ack = y + 1给服务端，自己变成 EASTABLISHED 状态，服务端收到 ACK，也进入 ESTABLISHED")])]),t._v(" "),s("blockquote",[s("p",[t._v("SYN 需要对端确认，所以 ACK 的序列化要加一，凡是需要对端确认的，一点要消耗 TCP 报文的序列化")])]),t._v(" "),s("h3",{attrs:{id:"为什么不是两次"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么不是两次"}},[t._v("#")]),t._v(" 为什么不是两次？")]),t._v(" "),s("blockquote",[s("p",[t._v("无法确认客户端的接收能力。")])]),t._v(" "),s("p",[t._v("如果首先客户端发送了 SYN 报文，但是滞留在网络中，TCP 以为丢包了，然后重传，两次握手建立了连接。")]),t._v(" "),s("p",[t._v("等到客户端关闭连接了。但是之后这个包如果到达了服务端，那么服务端接收到了，然后发送相应的数据表，就建立了链接，但是此时客户端已经关闭连接了，所以带来了链接资源的浪费。")]),t._v(" "),s("h3",{attrs:{id:"为什么不是四次"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么不是四次"}},[t._v("#")]),t._v(" 为什么不是四次？")]),t._v(" "),s("p",[t._v("四次以上都可以，只不过 三次就够了")]),t._v(" "),s("h3",{attrs:{id:"四次挥手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[t._v("#")]),t._v(" 四次挥手")]),t._v(" "),s("ul",[s("li",[t._v("一开始都处于 ESTABLISH 状态，然后客户端发送 FIN 报文，带上 seq = p，状态变为 FIN-WAIT-1")]),t._v(" "),s("li",[t._v("服务端收到之后，发送 ACK 确认，ack = p + 1，然后进入 CLOSE-WAIT 状态")]),t._v(" "),s("li",[t._v("客户端收到之后进入 FIN-WAIT-2 状态")]),t._v(" "),s("li",[t._v("过了一会等数据处理完，再次发送 FIN、ACK，seq = q，ack = p + 1，进入 LAST-ACK 阶段")]),t._v(" "),s("li",[t._v("客户端收到 FIN 之后，客户端收到之后进入 TIME_WAIT（等待 2MSL），然后发送 ACK 给服务端 ack = 1 + 1")]),t._v(" "),s("li",[t._v("服务端收到之后进入 CLOSED 状态")])]),t._v(" "),s("p",[t._v("客户端这个时候还需要等待两次 MSL 之后，如果没有收到服务端的重发请求，就表明 ACK 成功到达，挥手结束，客户端变为 CLOSED 状态，否则进行 ACK 重发")]),t._v(" "),s("h4",{attrs:{id:"为什么需要等待-2msl-maximum-segement-lifetime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要等待-2msl-maximum-segement-lifetime"}},[t._v("#")]),t._v(" 为什么需要等待 2MSL（Maximum Segement Lifetime）：")]),t._v(" "),s("p",[t._v("因为如果不等待的话，如果服务端还有很多数据包要给客户端发，且此时客户端端口被新应用占据，那么就会接收到无用的数据包，造成数据包混乱，所以说最保险的方法就是等服务器发来的数据包都死翘翘了再启动新应用。")]),t._v(" "),s("ul",[s("li",[t._v("1个 MSL 保证四次挥手中主动关闭方最后的 ACK 报文能最终到达对端")]),t._v(" "),s("li",[t._v("1个 MSL 保证对端没有收到 ACK 那么进行重传的 FIN 报文能够到达")])]),t._v(" "),s("h4",{attrs:{id:"为什么是四次而不是三次"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么是四次而不是三次"}},[t._v("#")]),t._v(" 为什么是四次而不是三次？")]),t._v(" "),s("p",[t._v("如果是三次的话，那么服务端的 ACK 和 FIN 合成一个挥手，那么长时间的延迟可能让 TCP 一位 FIN 没有达到服务器端，然后让客户的不断的重发 FIN")]),t._v(" "),s("h2",{attrs:{id:"session、cookie、localstorage的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session、cookie、localstorage的区别"}},[t._v("#")]),t._v(" session、cookie、localStorage的区别")]),t._v(" "),s("ul",[s("li",[t._v("相同点 都是保存在浏览器端，且同源的。")]),t._v(" "),s("li",[t._v("不同点\n"),s("ol",[s("li",[t._v("cookie数据始终在同源的http请求中携带，即cookie在浏览器和服务器间来回传递。")]),t._v(" "),s("li",[t._v("session数据放在服务器上")]),t._v(" "),s("li",[t._v("而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。")]),t._v(" "),s("li",[t._v("cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。 存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据。")]),t._v(" "),s("li",[t._v("sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。 数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；")]),t._v(" "),s("li",[t._v("localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；")]),t._v(" "),s("li",[t._v("cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。 作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；")]),t._v(" "),s("li",[t._v("localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。")])])])]),t._v(" "),s("h2",{attrs:{id:"http-常用的请求方式-区别和用途"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-常用的请求方式-区别和用途"}},[t._v("#")]),t._v(" HTTP 常用的请求方式，区别和用途？")]),t._v(" "),s("p",[s("strong",[t._v("应用层协议")])]),t._v(" "),s("p",[t._v("http/1.1 规定如下请求方法：")]),t._v(" "),s("ul",[s("li",[t._v("GET：通用获取数据")]),t._v(" "),s("li",[t._v("HEAD：获取资源的元信息")]),t._v(" "),s("li",[t._v("POST：提交数据")]),t._v(" "),s("li",[t._v("PUT：修改数据")]),t._v(" "),s("li",[t._v("DELETE：删除数据")]),t._v(" "),s("li",[t._v("CONNECT：建立连接隧道，用于代理服务器")]),t._v(" "),s("li",[t._v("OPTIONS：列出可对资源实行的请求方法，常用于跨域")]),t._v(" "),s("li",[t._v("TRACE：追踪请求-响应的传输路径")])]),t._v(" "),s("h2",{attrs:{id:"你对计算机网络的认识怎么样"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你对计算机网络的认识怎么样"}},[t._v("#")]),t._v(" 你对计算机网络的认识怎么样")]),t._v(" "),s("p",[t._v("应用层、表示层、会话层、传输层、网络层、数据链路层、物理层")]),t._v(" "),s("h2",{attrs:{id:"ajax-优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax-优缺点"}},[t._v("#")]),t._v(" ajax 优缺点")]),t._v(" "),s("blockquote",[s("p",[t._v("ajax的优点：可以实现局部刷新页面，即在页面不刷新的情况下获取数据。")]),t._v(" "),s("p",[t._v("ajax的缺点：如果网速慢，则会出现ajax请求缓慢，页面空白的情况，对客户的体验不好。ajax请求不利于搜索引擎优化，一般搜不到ajax添加到页面的信息！")]),t._v(" "),s("p",[t._v("解决的办法：可以先用服务器渲染。")])]),t._v(" "),s("h2",{attrs:{id:"数据长度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据长度"}},[t._v("#")]),t._v(" 数据长度")]),t._v(" "),s("p",[t._v("HTTP协议从未规定过GET/POST请求长度是多少，所谓的请求长度限制由浏览器和Web服务器决定的，各种浏览器和 web 服务器的设定均不一样，这依赖于各个浏览器厂家的规定或者可以根据 web 服务器的处理能力来设定。传统IE中URL的最大可用长度为2048字符，其他浏览器对URL长度限制实现上有所不同，POST请求无长度限制（目前理论上是这样的）。")]),t._v(" "),s("h2",{attrs:{id:"跨域解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域解决方案"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://segmentfault.com/a/1190000011145364",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨域解决方案"),s("OutboundLink")],1)]),t._v(" "),s("ol",[s("li",[s("p",[t._v("通过jsonp跨域")]),t._v(" "),s("blockquote",[s("p",[t._v("jsonp缺点：只能实现get一种请求。")]),t._v(" "),s("p",[t._v("只支持跨域 HTTP 请求这种情况，不能解决不同域的两个页面之间如何进行 Javascript 调用的问题。")]),t._v(" "),s("p",[t._v("具有局限性，不安全，可能会受到XSS攻击；")])])]),t._v(" "),s("li",[s("p",[t._v("document.domain + iframe跨域")]),t._v(" "),s("blockquote",[s("p",[t._v("此方案仅限主域相同，子域不同的跨域应用场景。")]),t._v(" "),s("p",[t._v("实现原理：两个页面都通过js强制设置document.domain为基础主域，就实现了同域。")])])]),t._v(" "),s("li",[s("p",[t._v("location.hash + iframe")]),t._v(" "),s("blockquote",[s("p",[t._v("实现原理： a欲与b跨域相互通信，通过中间页c来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。")])])]),t._v(" "),s("li",[s("p",[t._v("window.name + iframe跨域")]),t._v(" "),s("blockquote",[s("p",[t._v("window.name属性的独特之处：name值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB）。")])])]),t._v(" "),s("li",[s("p",[t._v("postMessage跨域")]),t._v(" "),s("blockquote",[s("p",[t._v("postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一，它可用于解决以下方面的问题：\na.） 页面和其打开的新窗口的数据传递\nb.） 多窗口之间消息传递\nc.） 页面与嵌套的iframe消息传递\nd.） 上面三个场景的跨域数据传递")]),t._v(" "),s("p",[t._v('用法：postMessage(data,origin)方法接受两个参数\ndata： html5规范支持任意基本类型或可复制的对象，但部分浏览器只支持字符串，所以传参时最好用JSON.stringify()序列化。\norigin： 协议+主机+端口号，也可以设置为"*"，表示可以传递给任意窗口，如果要指定和当前窗口同源的话设置为"/"。')])])]),t._v(" "),s("li",[s("p",[t._v("跨域资源共享（CORS）")])]),t._v(" "),s("li",[s("p",[t._v("nginx代理跨域")])]),t._v(" "),s("li",[s("p",[t._v("nodejs中间件代理跨域")])]),t._v(" "),s("li",[s("p",[t._v("WebSocket协议跨域")])])]),t._v(" "),s("h2",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" cookie")]),t._v(" "),s("p",[t._v("属性")]),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"httponly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httponly"}},[t._v("#")]),t._v(" HTTPOnly")]),t._v(" "),s("p",[t._v("设置 HTTPOnly 属性可以防止客户端脚本通过 document.cookie 等方式访问 Cookie，有助于避免 XSS 攻击。")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"samesite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#samesite"}},[t._v("#")]),t._v(" SameSite")]),t._v(" "),s("p",[t._v("SameSite 是最近非常值得一提的内容，因为 2 月份发布的 Chrome80 版本中默认屏蔽了第三方的 Cookie，这会导致阿里系的很多应用都产生问题，为此还专门成立了问题小组，推动各 BU 进行改造。")]),t._v(" "),s("h5",{attrs:{id:"作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),s("p",[t._v("我们先来看看这个属性的作用：")]),t._v(" "),s("p",[t._v("SameSite 属性可以让 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。")]),t._v(" "),s("h5",{attrs:{id:"属性值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性值"}},[t._v("#")]),t._v(" 属性值")]),t._v(" "),s("p",[t._v("SameSite 可以有下面三种值：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("Strict")]),t._v(" 仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie，即当前网页 URL 与请求目标 URL 完全一致。")]),t._v(" "),s("li",[s("strong",[t._v("Lax")]),t._v(" 允许部分第三方请求携带 Cookie")]),t._v(" "),s("li",[s("strong",[t._v("None")]),t._v(" 无论是否跨站都会发送 Cookie")])]),t._v(" "),s("p",[t._v("之前默认是 None 的，Chrome80 后默认是 Lax。")]),t._v(" "),s("h5",{attrs:{id:"解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),s("p",[t._v("解决方案就是设置 SameSite 为 none。")])])]),t._v(" "),s("h2",{attrs:{id:"https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" https")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("HTTPS 是在 HTTP 和 TCP 之间建立了一个安全层，HTTP 与 TCP 通信的时候，必须先进过一个安全层，对数据包进行加密，然后将加密后的数据包传送给 TCP，相应的 TCP 必须将数据包解密，才能传给上面的 HTTP。")]),t._v(" "),s("blockquote",[s("p",[t._v("TLS 是 SSL 的升级版本")])])])]),t._v(" "),s("h3",{attrs:{id:"https-主要用途有三个"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https-主要用途有三个"}},[t._v("#")]),t._v(" HTTPS 主要用途有三个：")]),t._v(" "),s("ol",[s("li",[t._v("通过证书等信息确认网站的真实性")]),t._v(" "),s("li",[t._v("建立加密的信息通道")]),t._v(" "),s("li",[t._v("数据内容的完整性")])]),t._v(" "),s("h3",{attrs:{id:"对称加密与非对称加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对称加密与非对称加密"}},[t._v("#")]),t._v(" 对称加密与非对称加密")]),t._v(" "),s("ul",[s("li",[t._v("HTTPS 在内容传输的加密上使用的是对称加密，非对称加密只作用在证书验证阶段。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("对称加密")]),t._v(" "),s("p",[t._v("对称加密是指加密与解密都使用同一个密钥的加密算法")]),t._v(" "),s("p",[t._v("目前常见的加密算法有："),s("strong",[t._v("DES")]),t._v("、"),s("strong",[t._v("AES")]),t._v("、"),s("strong",[t._v("IDEA")]),t._v(" 等")])]),t._v(" "),s("li",[s("p",[t._v("非对称加密")]),t._v(" "),s("p",[t._v("非对称加密使用的是两个密钥，公钥与私钥，我们会使用公钥对网站账号密码等数据进行加密，再用私钥对数据进行解密。这个公钥会发给查看网站的所有人，而私钥是只有网站服务器自己拥有。\n用户对网站输入的信息使用公钥加密，传到服务端使用私钥对数据解密")]),t._v(" "),s("p",[t._v("目前常见非对称加密算法："),s("strong",[t._v("RSA")]),t._v("，"),s("strong",[t._v("DSA")]),t._v("，"),s("strong",[t._v("DH")]),t._v("等")])])]),t._v(" "),s("h3",{attrs:{id:"https-数据加密-对称和非对称-网站认证-完整性验证-http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https-数据加密-对称和非对称-网站认证-完整性验证-http"}},[t._v("#")]),t._v(" https = 数据加密（对称和非对称） + 网站认证 + 完整性验证 + HTTP")]),t._v(" "),s("ul",[s("li",[t._v("通过上文，我们已经知道，HTTPS 就是在 HTTP 传输协议的基础上对网站进行认证，给予它独一无二的身份证明，再对网站数据进行对称加密和非对称加密，并对传输的数据进行完整性验证。")])]),t._v(" "),s("h2",{attrs:{id:"图片懒加载实现思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片懒加载实现思路"}},[t._v("#")]),t._v(" 图片懒加载实现思路")]),t._v(" "),s("p",[t._v("http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html")])])}),[],!1,null,null,null);a.default=v.exports}}]);