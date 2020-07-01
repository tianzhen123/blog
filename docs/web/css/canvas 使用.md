### 获取元素
```js
var canvas = document.getElementById("canvas");
```
### 获取上下文
```js
var ctx = canvas.getContext('2d');
```
### 移动画笔
```js
ctx.moveTo(100,100);
```
### 开启新的路径,解决样式覆盖的问题
```js
ctx.beginPath()
```
### 自动闭合路径
```js
context.closePath()
```
### 非 0 环绕规则
canvas填充的非零环绕规则：从区域内往外画一条足够长的线，线与顺时针路径相交，计数器+1，与逆时针路径相交，计数器-1，计数器最终不为0则填充