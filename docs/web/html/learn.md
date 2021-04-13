[TOC]

## 有哪些常用的meta标签？

meta标签由name和content两个属性来定义，来描述一个HTML网页文档的`元信息`，例如作者、日期和时间、网页描述、关键词、页面刷新等，除了一些http标准规定了一些name作为大家使用的共识，开发者也可以自定义name。

- charset，用于描述HTML文档的编码形式

```html
 <meta charset="UTF-8" >
```

- http-equiv，顾名思义，相当于http的文件头作用,比如下面的代码就可以设置http的缓存过期日期

```html
<meta http-equiv="expires" content="Wed, 20 Jun 2019 22:33:00 GMT">
```

- viewport，移动前端最熟悉不过，Web开发人员可以控制视口的大小和比例

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```

- apple-mobile-web-app-status-bar-style,开发过PWA应用的开发者应该很熟悉，为了自定义苹果工具栏的颜色。

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

## 前端优化

`https://mp.weixin.qq.com/s/3DoBc9qOA-MJaVH260SvUw`

### 行内元素（a，strong，b，em，i，del，s，u，span）和块元素（h1~h6、p、div、ul、ol 、li）

​	之间的转换 display:inline  display:block

## translate:移动，transform的一个方法

+ 通过 translate() 方法，元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数：

​     用法transform: translate(50px, 100px);

+ transform:变形。改变

​         CSS3中主要包括 旋转：rotate() 顺时针旋转给定的角度，允许负值 rotate(30deg)

​          扭曲、缩放、 移动

+ transition: 允许CSS属性值在一定的时间区间内平滑的过渡，

​      需要事件的触发，例如单击、获取焦点、失去焦点等

​		transition:property duration timing-function delay;

​		property:CSS的属性，例如：width height 为none时停止所有的运动，可以为transform

​          duration:持续时间

​          timing-function:ease等

​          delay:延迟

## 前端有哪些页面优化方法?

- 减少 HTTP请求数
- 从设计实现层面简化页面
- 合理设置 HTTP缓存
- 资源合并与压缩
- 合并 CSS图片，减少请求数的又一个好办法。
- 将外部脚本置底（将脚本内容在页面信息内容加载后再加载）
- 多图片网页使用图片懒加载。
- 在js中尽量减少闭包的使用
- 尽量合并css和js文件
- 尽量使用字体图标或者SVG图标，来代替传统的PNG等格式的图片
- 减少对DOM的操作
- 在JS中避免“嵌套循环”和 “死循环”
- 尽可能使用事件委托（事件代理）来处理事件绑定的操作

## 当前端项目更新后，如何保证用户访问的页面是最新的

以vue为例，vue在打包的时候，css和js名字都加了哈希值，所以改动后打包生成的js和css是唯一的，页面请求的是新资源，不会有缓存问题。但是入口文件index.html会因为缓存造成更新问题，如果我们更新了，但是浏览器使用的是缓存，就会出现问题。所以需要对入口文件设置不使用强制缓存，需要每次去服务器验证文件是否修改，即使用协商缓存。

```nginx
使用nginx反向代理，在nginx.conf文件的对应server中设置，目前我自己实践出的可行的一种写法是：

server {
    listen       80;

    server_name  域名;

    root   文件目录;

    index  index.html;
    
    location / {  // 不加这一句，会出现nginx欢迎页面，无法正确加载资源

      try_files $uri /index.html;

    }
    ocation ~ .*\.(html)$ {  // 对html文件限制缓存

      add_header Cache-Control no-store;  // 不缓存

     // 或者用add_header Cache-Control no-cache; 替代上面那一句，协商缓存

      add_header Pragma no-cache;

    }
    
  }
```

1）Cache-Control: no-cache和Cache-Control: no-store区别

    看字面意思容易误解，no-cache就是不缓存，但是no-cache并不是不缓存，而是使用协商缓存，所以并不能禁止缓存，no-store才是真正的禁止缓存。从节省带宽角度讲，使用no-cache更优一点，文件未发生改变时只传输很小的报文大小，只有在文件改变时才会传输整个文件大小。而不是no-store不管什么情况都传输整个文件大小。

（2）Pragma: no-cache：和Cache-Control: no-cache区别

    Pragma: no-cache跟Cache-Control: no-cache相同，Pragma: no-cache兼容http 1.0 ，Cache-Control: no-cache是http 1.1提供的。因此，Pragma: no-cache可以应用到http 1.0 和http 1.1,而Cache-Control: no-cache只能应用于http 1.1.

## 前端安全

### 1. XSS：攻击者想尽一切办法将可以执行的代码注入到网页中

#### 转义字符

首先，对于用户的输入应该是永远不信任的。最普遍的做法就是转义输入输出的内容，对于引号、尖括号、斜杠进行转义；但是对于显示富文本，通常采用白名单过滤的办法，常用js-xss 来实现

#### CSP建立白名单，两种方式

- 设置 HTTP Header 中的 Content-Security-Policy
- 设置 meta 标签的方式 <meta http-equiv="Content-Security-Policy">

### 2. CSRF：跨站请求伪造。原理就是攻击者构造出一个后端请求地址，诱导用户点击或者通过某些途径自动发起请求。

防范 CSRF 攻击可以遵循以下几种规则：

- Get 请求不对数据进行修改
- 不让第三方网站访问到用户 Cookie
- 阻止第三方网站请求接口
- 请求时附带验证信息，比如验证码或者 Token

#### SameSite

可以对 Cookie 设置 SameSite 属性。该属性表示 Cookie 不随着跨域请求发送，可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。

#### Token

服务器下发一个随机 Token，每次发起请求时将 Token 携带上，服务器验证 Token 是否有效。

### 3. 中间人攻击

中间人攻击是攻击方同时与服务端和客户端建立起了连接，并让对方认为连接是安全的，但是实际上整个通信过程都被攻击者控制了。攻击者不仅能获得双方的通信信息，还能修改通信信息。

防御：HTTPS 就可以用来防御中间人攻击，但是并不是说使用了 HTTPS 就可以高枕无忧了，因为如果你没有完全关闭 HTTP 访问的话，攻击方可以通过某些方式将 HTTPS 降级为 HTTP 从而实现中间人攻击。