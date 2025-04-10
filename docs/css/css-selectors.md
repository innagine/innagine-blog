---
id: css-selectors
title: CSS 选择器
sidebar_label: CSS 选择器
---

### CSS 选择器概述

CSS 选择器是 CSS 规则的一部分，用于选择需要添加样式的 HTML 元素。选择器是 CSS 的基础，它决定了样式规则将应用到哪些元素上。

### 基本选择器

#### 1. 元素选择器

选择所有指定类型的 HTML 元素。

```css
p {
  color: red;
}
```

#### 2. 类选择器

选择具有特定 class 属性的元素。

```css
.primary {
  color: blue;
}
```

#### 3. ID 选择器

选择具有特定 id 属性的元素。

```css
#header {
  background-color: #f0f0f0;
}
```

#### 4. 通配符选择器

选择所有元素。

```css
* {
  margin: 0;
  padding: 0;
}
```

### 组合选择器

#### 1. 后代选择器

选择指定元素的所有后代元素。

```css
div p {
  color: green;
}
```

#### 2. 子元素选择器

选择指定元素的直接子元素。

```css
div > p {
  color: blue;
}
```

#### 3. 相邻兄弟选择器

选择紧接在指定元素后的兄弟元素。

```css
h2 + p {
  margin-top: 0;
}
```

#### 4. 通用兄弟选择器

选择指定元素后的所有兄弟元素。

```css
h2 ~ p {
  color: red;
}
```

### 属性选择器

#### 1. 存在属性选择器

选择具有指定属性的元素。

```css
[title] {
  color: blue;
}
```

#### 2. 属性值选择器

选择具有指定属性值的元素。

```css
[type="text"] {
  border: 1px solid #ccc;
}
```

#### 3. 属性值前缀选择器

选择属性值以指定字符串开头的元素。

```css
[class^="btn-"] {
  padding: 5px 10px;
}
```

#### 4. 属性值后缀选择器

选择属性值以指定字符串结尾的元素。

```css
[class$="-primary"] {
  background-color: blue;
}
```

#### 5. 属性值包含选择器

选择属性值包含指定字符串的元素。

```css
[class*="warning"] {
  color: orange;
}
```

### 伪类选择器

#### 1. 链接伪类

```css
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: green; }
```

#### 2. 结构伪类

```css
p:first-child { font-weight: bold; }
p:last-child { margin-bottom: 0; }
p:nth-child(2n) { background-color: #f0f0f0; }
```

#### 3. 表单伪类

```css
input:focus { outline: 2px solid blue; }
input:disabled { background-color: #eee; }
input:checked + label { font-weight: bold; }
```

### 伪元素选择器

#### 1. ::before 和 ::after

```css
p::before {
  content: "→ ";
  color: blue;
}

p::after {
  content: " ←";
  color: red;
}
```

#### 2. ::first-line 和 ::first-letter

```css
p::first-line {
  font-weight: bold;
}

p::first-letter {
  font-size: 2em;
  color: red;
}
```

### 选择器优先级

CSS 选择器的优先级由以下规则决定：

1. !important 声明
2. 内联样式
3. ID 选择器
4. 类选择器、属性选择器、伪类选择器
5. 元素选择器、伪元素选择器
6. 通配符选择器

### 实际应用示例

#### 1. 导航菜单样式

```css
.nav > li {
  display: inline-block;
  margin-right: 20px;
}

.nav > li:last-child {
  margin-right: 0;
}

.nav a:hover {
  color: red;
  text-decoration: underline;
}
```

#### 2. 表单样式

```css
input[type="text"],
input[type="email"] {
  border: 1px solid #ccc;
  padding: 5px;
}

input:focus {
  border-color: blue;
  box-shadow: 0 0 5px rgba(0,0,255,0.3);
}

input:invalid {
  border-color: red;
}
```

### 注意事项

1. 选择器越具体，优先级越高
2. 避免过度使用 ID 选择器，因为它们具有很高的优先级
3. 使用类选择器而不是元素选择器，可以提高样式的复用性
4. 合理使用组合选择器，但不要过度嵌套
5. 注意选择器的性能影响，特别是在处理大量元素时 