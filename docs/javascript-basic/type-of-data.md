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

Booleanl类型有两个字面值：true和false。所有其他EACMScript类型的值都有相应布尔值的等价形式。

|  数据类型  | 转换为true的值  | 转换为false的值  |
|  ----  |  ----  |  ----  |
| String  |  非空字符串 |  空字符串 |
| Number  |  非零数值 |  0、NAN |
| Object  |  任意对象 |  null |
| Undefined  |  不存在 |  undefined |

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

