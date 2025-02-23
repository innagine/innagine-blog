---
id: ts-class
title: 类（Class）
sidebar_label: 类（Class）
---

![在这里插入图片描述](../../static/img/class.jpeg)


#### 1 类的属性与方法

在面向对象语言中，类是一种面向对象计算机编程语言的构造，是创建对象的蓝图，描述了所创建的对象共同的属性和方法。

在 TypeScript 中，我们可以通过 `Class` 关键字来定义一个类：

```typescript
class Greeter {
  // 静态属性
  static cname: string = "Greeter";
  // 成员属性
  greeting: string;

  // 构造函数 - 执行初始化操作
  constructor(message: string) {
    this.greeting = message;
  }

  // 静态方法
  static getClassName() {
    return "Class name is Greeter";
  }

  // 成员方法
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
```

那么成员属性与静态属性，成员方法与静态方法有什么区别呢？

- 上面的`constructor`方法，称为构造方法，
- `this`代表实例对象。
- `ES5` 的构造函数`Greeter`，对应 `ES6` 的`Greeter`类的构造方法。
- 类的所有成员方法都定义在类的`prototype`属性上面。
- 类必须使用`new`调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用`new`也可以执行。
- 成员属性除了定义在`constructor()`方法里面的`this`上面，也可以定义在类的最顶层。
- 静态属性指的是 `Class` 本身的属性，即`Class.propName`，而不是定义在实例对象（`this`）上的属性。
- 类相当于实例的原型，**所有在类中定义的方法，都会被实例继承**。**如果在一个方法前，加上`static`关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。**

```javascript
"use strict";
var Greeter = /** @class */ (function () {
    // 构造函数 - 执行初始化操作
    function Greeter(message) {
      this.greeting = message;
    }
    // 静态方法
    Greeter.getClassName = function () {
      return "Class name is Greeter";
    };
    // 成员方法
    Greeter.prototype.greet = function () {
      return "Hello, " + this.greeting;
    };
    // 静态属性
    Greeter.cname = "Greeter";
    return Greeter;
}());
var greeter = new Greeter("world");
```

#### 2 私有方法和私有属性

**私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。**

使用方式如下：

```typescript
class Person {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.#name}!`);
  }
}

let alan = new Person("前端收割机");

alan.#name;
//     ~~~~~
// Property '#name' is not accessible outside class 'Person'
// because it has a private identifier.
```

与常规属性（甚至使用 `private` 修饰符声明的属性）不同，私有字段要牢记以下规则：

- 私有字段以 `#` 字符开头，有时我们称之为私有名称；
- 每个私有字段名称都唯一地限定于其包含的类；
- 不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）；
- 私有字段不能在包含的类之外访问，甚至不能被检测到。

#### 3 类的继承

继承（Inheritance）是一种联结类与类的层次模型。指的是一个类（称为子类、子接口）继承另外的一个类（称为父类、父接口）的功能，并可以增加它自己的新功能的能力，继承是类与类或者接口与接口之间最常见的关系。

继承是一种 [is-a ](https://link.juejin.cn/?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FIs-a) 关系：

![img](../../static/img/class2.jpeg)

在 TypeScript 中，我们可以通过 `extends` 关键字来实现继承：

```typescript
class Animal {
  name: string;
  
  constructor(theName: string) {
    this.name = theName;
  }
  
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name); // 调用父类的构造函数
  }
  
  move(distanceInMeters = 5) { // 重写move方法
    console.log("Slithering...");
    super.move(distanceInMeters); // 调用父类的move方法
  }
}

let sam = new Snake("Sammy the Python");
sam.move();
```

- super作为函数调用时，代表父类的构造函数（ES6要求，子类的构造函数必须执行一次super函数，否则会报错）
- super作为对象时，在普通方法中指向父类的原型对象，在静态方法中则指向父类
- 注意：使用super的时候必须显式指定是作为函数、还是作为对象使用，否则会报错

```typescript
class A {
    p(){
        return 2;
    }
}

class B extends A {
    constructor() {
        super(); // 作为函数使用
        console.log(super.p()) // 2 作为对象使用
        console.log(super) // 没有显示指定，报错
    }
}
```

#### 4 抽象类

使用 `abstract` 关键字声明的类，我们称之为抽象类。抽象类不能被实例化，因为它里面包含一个或多个抽象方法。所谓的抽象方法，是指不包含具体实现的方法：

```typescript
abstract class Person {
  constructor(public name: string){}

  abstract say(words: string) :void;
}

// Cannot create an instance of an abstract class.(2511)
const lolo = new Person(); // Error
```

抽象类不能被直接实例化，我们只能实例化实现了所有抽象方法的子类。具体如下所示：

```typescript
abstract class Person {
  constructor(public name: string){}

  // 抽象方法
  abstract say(words: string) :void;
}

class Developer extends Person {
  constructor(name: string) {
    super(name);
  }
  
  say(words: string): void {
    console.log(`${this.name} says ${words}`);
  }
}

const lolo = new Developer("lolo");
lolo.say("I love ts!"); // lolo says I love ts!
```

#### 5 类方法重载

在前面的章节，我们已经介绍了函数重载。对于类的方法来说，它也支持重载。比如，在以下示例中我们重载了 `ProductService` 类的 `getProducts` 成员方法：

```typescript
class ProductService {
    getProducts(): void;
    getProducts(id: number): void;
    getProducts(id?: number) {
      if(typeof id === 'number') {
          console.log(`获取id为 ${id} 的推文`);
      } else {
          console.log(`前端收割机`);
      }  
    }
}

const productService = new ProductService();
productService.getProducts(777); // 获取id为 777 的推文
productService.getProducts(); // 前端收割机
```

