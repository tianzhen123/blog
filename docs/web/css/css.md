### 表格细线合并边框

+ table{border-collapse: collapse;}

### CSS3盒模型属性

* **box-sizing:content-box ：默认值，让元素维持w3c的标准盒模型。**
  * 盒模型的宽高 = content的宽高
* **box-sizing:border-box：此值会重新定义CSS2.1中盒模型组成的模式，让元素维持IE传统盒模型**。
  * 盒模型的宽高 = content的宽高 + padding + border

### css定位

+ static（默认）：按照正常文档流进行排列；
+ fixed (固定定位)：所固定的参照对像是可视窗口。

+ relative（相对定位）(自恋型)
  - 不脱离文档流，仍占有位置，参考自身静态位置通过 top, bottom, left, right 定位
+ absolute（绝对定位）(拼爹型)
  - 脱离了文档流，不占有位置，参考距其最近一个不为static的父级元素通过top, bottom, left, right 定位

* 子绝父相
  - 子元素用绝对定位，父元素用相对定位

### [flex](https://juejin.im/post/58e3a5a0a0bb9f0069fc16bb) ：轴 和 容器

+ flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto

  + `flex-grow`属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。
  + `flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
  + `flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

+ 容器：包括 父容器和子容器

  + 父容器

    + 设置子容器沿主轴排列：**justify-content**：**flex-start**/**flex-end**/**center**/**space-around**/**space-between**
    + 设置子容器如何沿交叉轴排列：**align-items**：**flex-start**/**flex-end**/**center**/**baseline**/**stretch**

  + 子容器

    + 在主轴上如何伸缩：**flex**

    + 单独设置子容器如何沿交叉轴排列：**align-self** 

      > **flex-start**：起始端对齐
      >
      > **flex-end**：末尾段对齐
      >
      > **center**：居中对齐
      >
      > **baseline**：基线对齐
      >
      > **stretch**：拉伸对齐

+ 轴：包括 主轴和交叉轴

  + 主轴:

    > 向右：`flex-direction: row`
    >
    > 向下：`flex-direction: column`
    >
    > 向左：`flex-direction: row-reverse`
    >
    > 向上：`flex-direction: column-reverse`

  + 交叉轴

    >```css
    >align-items: flex-start | flex-end | center | baseline | stretch;
    >```

### css 三大特性

* css 层叠性

* css继承性（子承父业）

* css 优先级

  | 分类                       | 权重大小 |
  | :------------------------- | -------- |
  | 继承 或 *                  | 0,0,0,0  |
  | 元素标签(例：p,div)        | 0,0,0,1  |
  | 类选择器或伪类(  .    :  ) | 0,0,1,0  |
  | ID选择器                   | 0,1,0,0  |
  | 行内样式                   | 1,0,0,0  |
  | Important                  | 最大     |

  例如：

  - div ul li 		    -------> 	0,0,0,3
  - .nav ul li           ------->     0,0,1,2
  - a:hover            -------->    0,0,1,1
  - .nav a              ---------->   0,0,1,1

### Sass、Less、Stylus区别

1. 什么事CSS预处理器?

   CSS预处理器是一种语言用来为CSS增加一些变成的特性，无需考虑浏览器兼容问题，例如你可以在CSS中使用变量，简单的程序逻辑、函数等在编程语言中的一些基本技巧，可以让CSS更加简洁，适应性更强，代码更直观等诸多好处

2. 基本语法区别

   Sass是以.sass为扩展名，Less是以.less为扩展名，Stylus是以.styl为扩展名

3. 变量的区别

   Sass 变量必须是以$开头的，然后变量和值之间使用冒号（：）隔开，和css属性是一样的。

   Less 变量是以@开头的，其余sass都是一样的。

   Stylus 对变量是没有任何设定的，可以是以$开头或者任意字符，而且变量之间可以冒号，空格隔开，但是在stylus中不能用@开头

4. 三种预处理器都有：嵌套、运算符、颜色函数、导入、继承、混入。Stylus还有一些高级特性。例如循环、判断等

### 重绘和回流

1. 当render tree中的一部分(或全部)因为元素的`规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(reflow)`。每个页面至少需要一次回流，就是在页面第一次加载的时候。`在回流的时候，浏览器会使渲染树中受到影响的部分失效`，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程成为重绘。

2. 当render tree中的一些元素需要更新属性，而这些属性只是影响**元素的外观，风格**，而`不会影响布局的，比如background-color。则就叫称为重绘`

   ##### 注意：回流必将引起重绘，而重绘不一定会引起回流。

+ #### 回流何时发生：

  **当页面布局和几何属性改变时就需要回流。下述情况会发生浏览器回流：**

  1. 添加或者删除可见的DOM元素；
  2. 元素位置改变；
  3. 元素尺寸改变——边距、填充、边框、宽度和高度
  4. 内容改变——比如文本改变或者图片大小改变而引起的计算值宽度和高度改变；
  5. 页面渲染初始化；
  6. 浏览器窗口尺寸改变——resize事件发生时；

  #### 常见引起重绘的操作

  color、background、background-position、box-shadow、border-radius等。

  #### 如何减少回流、重绘

  减少回流、重绘其实就是需要减少对render tree的操作`（合并多次多DOM和样式的修改）`，`并减少对一些style信息的请求`，尽量利用好浏览器的优化策略。具体方法有：

  1. 直接改变className，如果动态改变样式，则使用**cssText**（考虑没有优化的浏览器）
  2. 让要操作的元素进行”离线处理”，处理完后一起更新
     - 使用DocumentFragment进行缓存操作,引发一次回流和重绘；
     - 使用display:none技术，只引发两次回流和重绘；
     - 使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘；
  3. 不要经常访问会引起浏览器flush队列的属性，如果你确实要访问，利用缓存
  4. 让元素脱离动画流，减少回流的Render Tree的规模

### BFC

+ BFC 特性(功能)
  + 形成一个完全独立的空间，让空间里的子元素不会影响外面的布局。
+ 触发 BFC 最常用的方式
  1. 根元素，即html
  2. float 不为 none
  3. position 不为relative 和 static
  4. overflow 为auto、scroll 和 hidden
  5. display 的值为table-cell 或 inline-block
+ 可以解决的问题：
  1. 浮动元素高度坍塌的问题
  2. 两栏自适应布局
  3. 外边距垂直方向重合

### CSS3新增伪类有哪些？

+ p:first-of-type 选择属于其父元素的首个元素。
+ p:last-of-type  选择属于其父元素的最后元素。
+ p:only-of-type  选择属于其父元素唯一的元素。
+ p:only-child   选择属于其父元素的唯一子元素的每个元素。
+ p:nth-child(2)  选择属于其父元素的第二个子元素的每个元素。
+ :enabled  :disabled 控制表单控件的禁用状态。
+ :checked     单选框或复选框被选中。

### 哪些属性可以继承？

1. 可继承的样式：font-size font-family color, text-indent;
2. 不可继承的样式：border padding margin width height;

### 问题解决

+ Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决

+ **::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用**

  ```
  单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。:before 和 :after 这两个伪元素，是在CSS2.1里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，在CSS3的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after
  ```

### 一行 csss适配 rem 

750 是设计稿宽度：之后的单位直接 1:1使用设计稿的大小，单位是 rem

```css
html{ font-size: calc ( 100vw / 750 );}
```

