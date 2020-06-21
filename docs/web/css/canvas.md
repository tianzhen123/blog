## HTML5 Canvas设置Canvas元素width和height的两种不同方式

1. 通过CSS设置：

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>用CSS设置canvas大小会带来canvas.width的不正确</title>
       <style>
           body {
               background: #dddddd;
           }
    
           #canvas {
               margin: 10px;
               padding: 10px;
               background: #ffffff;
               border: thin inset #aaaaaa;
               width: 600px;
               height: 300px;
           }
       </style>
   </head>
   <body>
   <!--canvas的默认大小是300*150像素-->
   <!--设置canvas的宽高的时候，不要通过CSS来设置width和height，因为CSS只能设置Canvas的元素本身大小，不能设置元素绘图表面（drawing surface）的大小-->
   <canvas id="canvas">
       Canvas不被支持
   </canvas>
    
   </body>
   </html>
   ```

2. 通过canvas标签的属性设置

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           body {
               background: #dddddd;
           }
    
           #canvas {
               margin: 10px;
               padding: 10px;
               background: #ffffff;
               border: thin inset #aaaaaa;
    
           }
       </style>
   </head>
   <body>
   <!--canvas的默认大小是300*150像素-->
   <!--设置canvas的宽高的时候，不要通过CSS来设置width和height，因为CSS只能设置Canvas的元素本身大小，不能设置元素绘图表面（drawing surface）的大小-->
   <canvas id="canvas" width="600" height="300">
       Canvas不被支持
   </canvas>
   </body>
   </html>
   ```

总结：

> canvas实际上有两套尺寸，一个是元素本身的大小，另一个是元素绘图表面（drawing surface）的大小，通过CSS只能改变元素本身的尺寸，而通过canvas标签属性能够改变元素本身和元素绘图表面的大小。

## HTML5 Canvas API的toDataUrl()

方法介绍：

**`HTMLCanvasElement.toDataURL()`** 方法返回一个包含图片展示的 data URL。可以使用 `type` 参数其类型，默认为 [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics) 格式。图片的分辨率为96dpi。

语法：

```js
canvas.toDataURL(type, encoderOptions);
```

参数：
type 可选

图片格式，默认为 image/png

encoderOptions 可选

在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略。

示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Canvas对象的ToDataUrl方法示例</title>
</head>
<body>
<canvas id="canvas" width="5" height="6"></canvas>
 
</body>
<script>
    var canvas = document.getElementById("canvas");
  	/*
    这个格式被称为Data URLs,可以直接键入浏览器url里，以默认格式png的形式展示图片
    不过由于canvas里并没有非透明元素，所以直接浏览是看不出什么的，可以用比较画面丰富的canvas元素的Data URLs		来进行浏览
     */
    var dataUrl = canvas.toDataURL();
    console.log(dataUrl);
  // 全质量
  var fullQuality = canvas.toDataURL('image/jpeg',1);
  // 半质量
  var mediumQuality = canvas.toDataURL('image/jpeg', 0.5);
  // 低质量
  var lowQuality = canvas.toDataURL('image/webp', 0.1);
    
</script>
</html>
```

### HTML5 Canvas API的toBlob()的使用

方法介绍：

HTMLCanvasElement.toBlob() 方法创造Blob对象，用以展示canvas上的图片；这个图片文件可以被缓存或保存到本地，由用户代理端自行决定。如不特别指明，图片的类型默认为 image/png，分辨率为96dpi。

第三个参数用于针对image/jpeg格式的图片进行输出图片的质量设置。

语法：

```js
canvas.toBlob(callback, type, encoderOptions);
```

参数
callback

回调函数，可获得一个单独的Blob对象参数。

type 可选

DOMString类型，指定图片格式，默认格式为image/png。

encoderOptions 可选

Number类型，值在0与1之间，当请求图片格式为image/jpeg或者image/webp时用来指定图片展示质量。如果这个参数的值不在指定类型与范围之内，则使用默认值，其余参数将被忽略。

示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Canvas对象的toBlob方法示例</title>
</head>
<body>
<canvas id="canvas"></canvas>
</body>
<script>
    //获取canvas元素
    var canvas = document.getElementById("canvas");
 
    //第一个参数是回调函数
    canvas.toBlob(
        //传入blob对象
        function (blob) {
            //创建一个img标签
            var newImg = document.createElement("img"),
                //以blob对象为基础创建一个url
                url = URL.createObjectURL(blob);
            
                console.log(url);
                //blob:http://localhost:63342/d869ed9c-cad0-49f9-9965-e9959a15e0c0
                console.log(blob);
                //返回一个BLOB对象
            
            //加载后销毁
            newImg.onload = function () {
                // no longer need to read the blob so it's revoked
                URL.revokeObjectURL(url);
            };
 
            //img标签属性赋值
            newImg.src = url;
            //添加为子元素
            document.body.appendChild(newImg);
        });
</script>
</html>
```

## 检查支持性

使用 getContext检查支持性

```js
var canvas = document.getElementById('tutorial');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

### 绘制矩形

不同于 [SVG](https://wiki.developer.mozilla.org/zh-CN/docs/Glossary/SVG)，[`canvas`](https://wiki.developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas) 只支持两种形式的图形绘制：矩形和路径（由一系列点连成的线段）

canvas提供了三种方法绘制矩形：

1. [`fillRect(x, y, width, height)`](https://wiki.developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillRect)

   绘制一个填充的矩形

2. [`strokeRect(x, y, width, height)`](https://wiki.developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/strokeRect)

   绘制一个矩形的边框

3. [`clearRect(x, y, width, height)`](https://wiki.developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect)

   清除指定矩形区域，让清除部分完全透明。

上面提供的方法之中每一个都包含了相同的参数。x与y指定了在canvas画布上所绘制的矩形的左上角（相对于原点）的坐标。width和height设置矩形的尺寸。

### 绘制路径

1. ```
   beginPath()
   ```

   新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。

2. ```
   closePath()
   ```

   闭合路径之后图形绘制命令又重新指向到上下文中。

3. ```
   stroke()
   ```

   通过线条来绘制图形轮廓。

4. ```
   fill()
   ```

   通过填充路径的内容区域生成实心的图形。

生成路径的第一步叫做beginPath()。本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径（线、弧形、等等）构成图形。而每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形。

**注意：当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。但是调用stroke()时不会自动闭合**。

### 移动笔触

**moveTo(x, y)**

将笔触移动到指定的坐标x以及y上。

当canvas初始化或者`beginPath()`调用后，你通常会使用`moveTo()`函数设置起点。我们也能够使用`moveTo()`绘制一些不连续的路径。

### 线

绘制直线，需要用到的方法`lineTo()`。

**lineTo(x, y)**

绘制一条从当前位置到指定x以及y位置的直线。

该方法有两个参数：x以及y ，代表坐标系中直线结束的点。开始点和之前的绘制路径有关，之前路径的结束点就是接下来的开始点，等等。。。开始点也可以通过`moveTo()`函数改变。

### 圆弧

绘制圆弧或者圆，我们使用`arc()`方法。当然可以使用`arcTo()`，不过这个的实现并不是那么的可靠，所以我们这里不作介绍。

**arc(x, y, radius, startAngle, endAngle, anticlockwise)**

画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。

**arcTo(x1, y1, x2, y2, radius)**

根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。

这里详细介绍一下arc方法，该方法有六个参数：`x,y`为绘制圆弧所在圆上的圆心坐标。`radius`为半径。`startAngle`以及`endAngle`参数用弧度定义了开始以及结束的弧度。这些都是以x轴为基准。参数`anticlockwise`为一个布尔值。为true时，是逆时针方向，否则顺时针方向。

**注意：`arc()`函数中表示角的单位是弧度，不是角度。**

**角度与弧度的js表达式:** 	**弧度=(Math.PI/180)\*角度。**

### 二次贝塞尔曲线及三次贝塞尔曲线

```
quadraticCurveTo(cp1x, cp1y, x, y)
```

绘制二次贝塞尔曲线，`cp1x,cp1y`为一个控制点，`x,y为`结束点。

```
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
```

绘制三次贝塞尔曲线，`cp1x,cp1y`为控制点一，`cp2x,cp2y`为控制点二，`x,y`为结束点。

二次贝塞尔曲线有一个开始点、一个结束点以及一个控制点，而三次贝塞尔曲线有两个控制点。

### 矩形

直接在画布上绘制矩形的三个额外方法，正如我们开始所见的[绘制矩形](https://wiki.developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#绘制矩形)，同样，也有rect()方法，将一个矩形路径增加到当前路径上。

- `rect(*x*, *y*, *width*, *height*)`

  绘制一个左上角坐标为（x,y），宽高为width以及height的矩形。

当该方法执行的时候，moveTo()方法自动设置坐标参数（0,0）。也就是说，当前笔触自动重置回默认坐标。

