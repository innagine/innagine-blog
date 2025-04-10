---
id: css-grid
title: Grid 布局
sidebar_label: Grid 布局
---

### Grid 布局概述

Grid 布局（Grid Layout）是 CSS 中最强大的布局系统之一。它是一个二维的布局系统，可以同时处理行和列，非常适合创建复杂的网页布局。

### 基本概念

Grid 布局将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，Grid 布局比 Flex 布局更加强大。

### 容器属性

#### 1. display: grid

将元素定义为网格容器。

```css
.container {
  display: grid;
}
```

#### 2. grid-template-columns 和 grid-template-rows

定义网格的列和行。

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```

可以使用 `fr` 单位来定义弹性尺寸：

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

#### 3. grid-gap

定义网格线之间的间距。

```css
.container {
  display: grid;
  grid-gap: 10px;
}
```

也可以分别设置行间距和列间距：

```css
.container {
  display: grid;
  grid-row-gap: 10px;
  grid-column-gap: 20px;
}
```

#### 4. grid-template-areas

定义网格区域。

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}
```

#### 5. justify-items 和 align-items

控制网格项在单元格内的对齐方式。

```css
.container {
  display: grid;
  justify-items: center;
  align-items: center;
}
```

### 项目属性

#### 1. grid-column 和 grid-row

指定项目的位置。

```css
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```

#### 2. grid-area

指定项目放在哪个区域。

```css
.item {
  grid-area: header;
}
```

#### 3. justify-self 和 align-self

控制单个项目在单元格内的对齐方式。

```css
.item {
  justify-self: start;
  align-self: end;
}
```

### 实际应用示例

#### 1. 创建响应式网格布局

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}
```

#### 2. 创建圣杯布局

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

#### 3. 创建图片网格

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
}

.gallery-item {
  grid-column: span 1;
  grid-row: span 1;
}

.gallery-item.wide {
  grid-column: span 2;
}

.gallery-item.tall {
  grid-row: span 2;
}
```

### 注意事项

1. Grid 布局在现代浏览器中得到了很好的支持，但在旧版本浏览器中可能需要添加前缀
2. 使用 Grid 布局时，要注意网格线的编号是从 1 开始的
3. 可以使用 `grid-auto-flow` 属性来控制自动放置的算法
4. 可以使用 `grid-auto-columns` 和 `grid-auto-rows` 来设置自动生成的网格轨道的大小
5. Grid 布局可以与 Flex 布局结合使用，以获得更灵活的布局效果 