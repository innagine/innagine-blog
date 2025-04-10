---
id: css-position
title: CSS 定位
sidebar_label: CSS 定位
---

### CSS 定位概述

CSS 定位（Positioning）是 CSS 中用于控制元素在页面中位置的重要属性。它允许我们精确地控制元素的位置，实现各种复杂的布局效果。

### 基本概念

CSS 定位主要通过 `position` 属性来实现，它有以下几个关键值：

- `static`：默认值，元素按照正常的文档流进行排列
- `relative`：相对定位
- `absolute`：绝对定位
- `fixed`：固定定位
- `sticky`：粘性定位

### 定位属性

#### 1. position: static

这是元素的默认定位方式，元素会按照正常的文档流进行排列。

```css
.box {
  position: static;
}
```

#### 2. position: relative

相对定位是相对于元素在正常文档流中的位置进行偏移。

```css
.box {
  position: relative;
  top: 20px;
  left: 30px;
}
```

可以使用以下属性来调整位置：
- `top`：上边距
- `right`：右边距
- `bottom`：下边距
- `left`：左边距

#### 3. position: absolute

绝对定位是相对于最近的已定位（非 static）祖先元素进行定位。如果没有已定位的祖先元素，则相对于初始包含块（通常是视口）进行定位。

```css
.box {
  position: absolute;
  top: 50px;
  left: 50px;
}
```

#### 4. position: fixed

固定定位是相对于浏览器窗口进行定位，即使页面滚动，元素的位置也不会改变。

```css
.box {
  position: fixed;
  top: 0;
  right: 0;
}
```

#### 5. position: sticky

粘性定位是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。

```css
.box {
  position: sticky;
  top: 0;
}
```

### z-index 属性

当多个定位元素重叠时，可以使用 `z-index` 属性来控制它们的堆叠顺序。

```css
.box1 {
  position: absolute;
  z-index: 1;
}

.box2 {
  position: absolute;
  z-index: 2;
}
```

### 实际应用示例

#### 1. 创建固定导航栏

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  z-index: 1000;
}
```

#### 2. 创建模态框

```css
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1000;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
```

#### 3. 创建粘性表头

```css
.table-header {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
}
```

### 注意事项

1. 使用绝对定位时，要确保父元素有明确的定位上下文（position 不为 static）
2. 固定定位的元素会脱离文档流，可能会影响其他元素的布局
3. 粘性定位需要指定至少一个方向（top、right、bottom 或 left）
4. z-index 只在定位元素上有效
5. 过度使用定位可能会导致布局难以维护，建议结合其他布局方式（如 Flexbox 或 Grid）使用 