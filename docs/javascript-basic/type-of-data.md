# 数据类型

## 数据类型

ECMAScript有6种简单数据类型(原始类型):

1. `Undefined`
2. `Null`
3. `Boolean`
4. `Number`
5. `String`
6. `Symbol`

还有一种复杂数据类型`Object`(对象)。`Object`是一种无序名值对的集合。

Undefined类型只有一个值，就是特殊值undefined。

Null类型同样只有一个值，即特殊值null。逻辑上讲，null值表示一个空对象指针，这也是给typeof传递一个null会返回"object"的原因。

Booleanl类型有两个字面值：true和false。所有其他EACMScript类型的值都有相应布尔值的等价形式：

|  数据类型  | 转换为true的值  | 转换为false的值  |
|  ----  |  ----  |  ----  |
| String  |  非空字符串 |  空字符串 |
| Number  |  非零数值 |  0、NAN |
| Object  |  任意对象 |  null |
| Undefined  |  不存在 |  undefined |

### 原始类型与对象类型

原始值是不可更改的，任何方法都无法改变一个原始值。例如：

```javascript
let s = 'hello'     // 定义一个小写字母组成的字符串
s.toUpperCase()     // 返回'HELLO'，但是并没有改变原始值
s                   // 'hello'
```

原始值的比较是值的比较，只有在它们的值相等时他们才相等。

对象和原始值不同，它们是可变的，也就是他们的值是可以修改的。

```javascript
const o = { x: 1 }
o.x = 3
o.y = 'hello'

const a = [1, 2, 3]
a[0] = 6
```

对象的比较并非值的比较，即使两个对象包含同样的属性及相同的值，他们也不相等。对象的比较均是`引用`的比较：当且仅当他们引用同一个基对象时，它们才相等。而且将对象赋值给一个变量，仅仅是赋值的引用值，对象本身并没有复制一次。

### 数据类型的判断

#### typeof

`typeof`操作符会返回一下字符串之一：

- "undefined"：表示值未定义
- "boolean"：表示值为布尔值
- "string"：表示值未字符串
- "number"：表示值为数值
- "object"：表示值为对象（不是函数）或者null，null被认为是一个空对象的引用
- "function"：表示值为函数
- "symbol"：表示值为符号

对未初始化和未声明的变量使用调用`typeof`时，返回的结果都是`undefined`。

#### toString

可以通过`toString()`来获取每个对象的类型。

```javascript
Object.prototype.toString.call('') ;   // [object String]
Object.prototype.toString.call(1) ;    // [object Number]
Object.prototype.toString.call(true) ; // [object Boolean]
Object.prototype.toString.call(Symbol()); //[object Symbol]
Object.prototype.toString.call(undefined) ; // [object Undefined]
Object.prototype.toString.call(null) ; // [object Null]
Object.prototype.toString.call(new Function()) ; // [object Function]
Object.prototype.toString.call(function test(){}) ; // [object Function]
Object.prototype.toString.call(() => {}) ; // [object Function]
Object.prototype.toString.call(new Date()) ; // [object Date]
Object.prototype.toString.call([]) ; // [object Array]
Object.prototype.toString.call(new RegExp()) ; // [object RegExp]
Object.prototype.toString.call(new Error()) ; // [object Error]
Object.prototype.toString.call(document) ; // [object HTMLDocument]
Object.prototype.toString.call(window) ; //[object global] window 是全局对象 global 的引用
```

### 数据类型的转换

#### 隐式转换

隐式转换就是自动转换，通常发生在一些数学运算中。因为 JavaScript 是一种弱类型的语言，在一个表达式中，运算符两边的类型可以不同（比如一个字符串和一个数字相加），JavaScript 解释器会在运算之前将它们的类型进行转换：

```javascript
const str = "https://zoom.us"
const num = 666
const res = str + num   // https://zoom.us666
```

#### 显式转换

与隐式类型转换相反，强制类型转换需要手动进行，在 JavaScript 中，强制类型转换主要是通过调用全局函数来实现的，例如 Number()、Boolean()、parseInt()、parseFloat() 等。

```javascript
Number("10.5")      //  10.5
Number(true)        // 1
Number(false)       // 0
Number(undefined)   // NAN
```

## 变量的比较

### 等于和不等于

`==`和`!=`，比较两个操作数时，会先进行类型转换（通常称为`强制类型转换`）再确定操作数是否相等。

强制转换遵循以下规则：

- 如果任一操作数是布尔值，则将其转换为数值再比较是否相等。false转换为0，true转换为1。
- 如果一个操作数是字符串，另一个操作符是数值，则尝试将字符串转换为数值，再比较是否相等。
- 如果一个操作数是对象，另一个操作数不是，则调用对象的valueOf()方法获得其原始值，再根据前面的规则进行比较

null和undefined不能转换成其他类型再做比较，null和undefined相等。

NaN不等于NaN。

如果两个操作符都是对象，则比较他们是不是同一个对象。如果两个操作数都指向同一个对象，返回true，否则返回false。

### 全等和不全等

只有两个操作数在不转换类型的前提下相等，才可以称为全等。

### Object.is()

`Object.is()`方法判断两个值是否为同一个值

```javascript
// Case 1: Evaluation result is the same as using ===
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
Object.is(window, window);        // true
Object.is([], []);                // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);              // true
Object.is(foo, bar);              // false

// Case 2: Signed zero
Object.is(0, -0);                 // false
Object.is(+0, -0);                // false
Object.is(-0, -0);                // true
Object.is(0n, -0n);               // true

// Case 3: NaN
Object.is(NaN, 0/0);              // true
Object.is(NaN, Number.NaN)        // true
```

#### Polyfill

```javascript
if (!Object.is) {
  Object.defineProperty(Object, "is", {
    value: function (x, y) {
      // SameValue algorithm
      if (x === y) {
        // return true if x and y are not 0, OR
        // if x and y are both 0 of the same sign.
        // This checks for cases 1 and 2 above.
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // return true if both x AND y evaluate to NaN.
        // The only possibility for a variable to not be strictly equal to itself
        // is when that variable evaluates to NaN (example: Number.NaN, 0/0, NaN).
        // This checks for case 3.
        return x !== x && y !== y;
      }
    }
  });
}
```


## 对象的拷贝

### 浅拷贝

```javascript
const obj = { a: 1, b: 2, c: 'Test', d: { e: 3 } }
const objCopy = Object.assign({}, obj)
const objCopy2 = { ...obj }     // ES6 扩展运算符
const objCopy3 = obj
```

### 深拷贝

想要对一个对象进行深拷贝，一个可行的方法是先把对象序列化为字符串，然后再对它进行反序列化。

```javascript
const obj = { a: 1, b: 2, c: 'Test', d: { e: 3 } }
const objCopy = JSON.parse(JSON.stringify(obj))
```

这个方法只在对象中包含可序列化值，同时没有循环引用的情况下适用。常见的不能被序列化的就是日期对象。尽管它显示的是字符串化的 ISO 日期格式，但是`JSON.parse`只会把它解析成为一个字符串，而不是日期类型。

```javascript
const obj = { date: new Date() }
const objCopy = JSON.parse(JSON.stringify(obj))
objCopy.date         // "2022-08-16T14:06:52.911Z"
```
一个深拷贝的例子，处理了Date对象，数组，函数以及对象的深拷贝

```javascript
function deepClone(obj) {
  var copy;

  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
        copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  // Handle Function
  if (obj instanceof Function) {
    copy = function() {
      return obj.apply(this, arguments);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
      copy = {};
      for (var attr in obj) {
          if (obj.hasOwnProperty(attr)) copy[attr] = deepClone(obj[attr]);
      }
      return copy;
  }

  throw new Error("Unable to copy obj as type isn't supported " + obj.constructor.name);
}
```
