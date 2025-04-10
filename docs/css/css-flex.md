---
id: css-flex
title: Flex布局
sidebar_label: Flex布局
---

### Flexbox 概述

Flexbox 布局也叫 Flex 布局，弹性盒子布局。

它决定了元素如何在页面上排列，使它们能在不同的屏幕尺寸和设备下可预测地展现出来，更简便、完整、响应式地实现各种页面布局。

它的主要思想是使父元素能够调整子元素的宽度、高度、排列方式，从而更好的适应可用的布局空间。

任何一个容器都可以指定为 Flex 布局。


```js
.box{
  display: flex;
}
```

行内元素也可以使用 Flex 布局。

```js
.box{
display: inline-flex;
}
```
Webkit 内核的浏览器，必须加上-webkit前缀。

```js
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```

注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。当布局涉及到不定宽度，分布对⻬的场景时，我们可以优先考虑弹性盒布局。

### 基本概念
采用 Flex 布局的元素，称为 Flex 容器（flex container），简称”容器”。它的所有 子元素（注意是子元素，不是全部后代元素）自动成为容器成员，称为 Flex 项目（flex item），简称”项目”。


容器默认存在两根轴: 水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

容器属性
以下6个属性设置在容器上。

flex-direction
flex-wrap
flex-flow
justify-content
align-items
align-content
flex-direction
flex-direction 属性决定主轴的方向（即项目的排列方向）。

```js
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

属性值	含义
row	默认值，主轴为水平方向（水平布局），起点在左端，从左向右排列
row-reverse	主轴为水平方向（水平布局），起点在右端，从右向左排列
column	主轴为垂直方向（垂直布局），起点在上沿，从上往下排列
column-reverse	主轴为垂直方向（垂直布局），起点在下沿，从下往上排列

flex-wrap
默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。


```js
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

属性值	含义
nowrap	默认值，表示不换行
wrap	换行
wrap-reverse	换行，第一行在下方
flex-wrap: nowrap: 默认值，不换行。当主轴的长度是固定并且空间不足时，项目尺寸会随之进行调整，而不会换行。

flex-wrap: wrap: 换行，第一行在上面

wrap-reverse: 换行，第一行在下方。

flex-flow
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

```js
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

justify-content
justify-content属性定义了项目在主轴上的对齐方式。

```js
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

属性值	含义
flex-start	默认值，左对齐
flex-end	右对齐
center	居中
space-between	两端对齐，项目之间的间隔都相等
space-around	每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍

flex-start

flex-end

center

space-between

space-around
align-items
align-items属性定义项目在交叉轴上如何对齐。

```js
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

属性值	含义
flex-start	交叉轴的起点对齐
flex-end	交叉轴的终点对齐
center	交叉轴的中点对齐
baseline	项目的第一行文字的基线对齐
stretch	（默认值） 如果项目未设置高度或设为auto，将占满整个容器的高度
（1）flex-start: 交叉轴的起点对齐（上面或左边）。设置容器高度为 100px，项目高度分别为 20px、40px、60px、80px、100px，效果如图所示:


（2）flex-end: 交叉轴的终点对齐（下面或右边）。设置容器高度为 100px，项目高度分别为 20px、40px、60px、80px、100px，效果如图所示:


（3）center: 交叉轴的中点对齐。设置容器高度为 100px，项目高度分别为 20px、40px、60px、80px、100px，效果如图所示:


（4）stretch: 默认值、如果元素未设置高度或设为auto，将占满整个容器的高度。假设容器高度设置为 100px，而项目没有设置高度，则项目的高度也为 100px:


（5）baseline:以元素的第一行文字的基线对齐


align-content
align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```js
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

属性值	含义
flex-start	与交叉轴的起点对齐
flex-end	与交叉轴的终点对齐
center	与交叉轴的中点对齐
space-between	与交叉轴两端对齐，轴线之间的间隔平均分布
space-around	每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
stretch	默认值，轴线占满整个交叉轴
（1）stretch: 默认值，轴线占满整个交叉轴。这里我们先设置每个项目都是固定宽度，效果如下:


下面就去掉每个项目的高度，它会占满整个交叉轴，效果如下:


（2）flex-start: 从交叉轴开始位置填充


（3）flex-end: 从交叉轴结尾位置填充


（4）center: 与交叉轴中点对齐


（5）space-between: 与交叉轴两端对齐，轴线之前的间隔平均分布


（6）space-around: 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍


项目属性
以下6个属性设置在项目上。

order
flex-grow
flex-shrink
flex-basis
flex
align-self
order
order属性用来定义项目的排列顺序。数值越小，排列越靠前，默认为 0 。使用形式如下:

```js
.item {
    order: <integer>;
}
```

flex-grow
flex-grow属性定义项目的放大比例，默认为 0 ，即如果存在剩余空间，也不放大。

```js
.item {
  flex-grow: <number>; /* default 0 */
}
```

如果所有项目的flex-grow属性都为 1，则它们将等分剩余空间（如果有的话）。


如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。


flex-shrink
flex-shrink属性定义了项目的缩小比例，默认为 1 ，即如果空间不足，该项目将缩小。

```js
.item {
  flex-shrink: <number>; /* default 1 */
}
```

如果所有项目的flex-shrink属性都为 1，当空间不足时，都将等比例缩小。


如果一个项目的flex-shrink属性为 0，其他项目都为 1，则空间不足时，前者不缩小。


负值对该属性无效。

flex-basis
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

```js
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

当主轴设置为水平时，当设置了flex-basis，设置的项目宽度值会失效，flex-basis需要跟flex-grow和flex-shrink配合使用才能生效。有两种特殊的值:

当 flex-basis 值为 0 % 时，项目尺寸会被认为是0，因此无论项目尺寸设置多少都用；
当 flex-basis 值为 auto 时，则跟根据尺寸的设定值来设置大小。
flex
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

```js
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值auto (1 1 auto) 和 none (0 0 auto)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

（1）默认值：flex:0 1 auto，即在有剩余空间时，只放大不缩小

```js
.item {
  flex:0 1 auto;
}
.item {
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
}
```

（2）flex: none，即有剩余空间时，不放大也不缩小，最终尺寸通常表现为最大内容宽度。

```js
.item {
  flex:0 0 auto;
}
.item {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
}
```

（3）flex: 0，即当有剩余空间时，项目宽度为其内容的宽度，最终尺寸表现为最小内容宽度。

```js
.item {
  flex:0 1 0%;
}
.item {
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 0%;
}
```

（4）flex: auto，即元素尺寸可以弹性增大，也可以弹性变小，具有十足的弹性，但在尺寸不足时会优先最大化内容尺寸。

```js
.item {
  flex:1 1 auto;
}
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}
```

（5）flex: 1，即元素尺寸可以弹性增大，也可以弹性变小，具有十足的弹性，但是在尺寸不足时会优先最小化内容尺寸。

```js
.item {
  flex:1 1 0%;
}
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}
```

align-self
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

```js
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
