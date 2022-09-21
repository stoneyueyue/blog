# Function

每个 JavaScript 函数实际上都是一个 Function 对象。

```javascript
(function(){}).constructor === Function // ==> true
(()=>{}).constructor === Function // ==> true
```

## 构造函数

创建一个新的 Function 对象。直接调用此构造函数可以动态创建函数，但会遇到和 eval() 类似的的安全问题和（相对较小的）性能问题。然而，与 eval() 不同的是，Function 构造函数创建的函数只能在全局作用域中运行。

## 实例属性

### Function.displayName

该特性是非标准的

当一个函数的 displayName 属性被定义，displayName属性将返回显示名称。

```javascript
function doSomething() {}

console.log(doSomething.displayName); // "undefined"

var popup = function(content) { console.log(content); };

popup.displayName = 'Show Popup';

console.log(popup.displayName); // "Show Popup"
```

### Function.length

知名函数的形参个数，形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数。

### Function.name

属性返回函数实例的名称，此属性是只读的。

```javascript
function doSomething() { }
doSomething.name;  // "doSomething"

var o = {
  foo(){}
};
o.foo.name; // "foo";
```

Function.bind()所创建的函数将会在函数的名称前加上"bound " 。

```javascript
function foo() {};
foo.bind({}).name; // "bound foo"
```

当通过 get 和 set 访问器来存取属性时, "get" 或 "set" 会出现在函数名称前。

```javascript
var o = {
  get foo(){},
  set foo(x){}
};

var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";
```

如果Symbol 被用于函数名称，并且这个symbol具有相应的描述符，那么方法的名字就是方括号中的描述符。

```javascript
var sym1 = Symbol("foo");
var sym2 = Symbol();
var o = {
  [sym1]: function(){},
  [sym2]: function(){}
};

o[sym1].name; // "[foo]"
o[sym2].name; // ""
```

## 实例方法

###Function.prototype.apply()

apply() 方法调用一个具有给定this值的函数，以及以一个数组（或类数组对象）的形式提供的参数。

```javascript
func.apply(thisArg, [argsArray])
```

参数

- `thisArg`：必选的。在 func 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。

- `argsArray`：可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。浏览器兼容性 请参阅本文底部内容。

返回值

调用有指定this值和参数的函数的结果。

```javascript
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

/* 找出数组中最大/小的数字 */
var numbers = [5, 6, 2, 3, 7];

/* 使用Math.min/Math.max以及apply 函数时的代码 */
var max = Math.max.apply(null, numbers); /* 基本等同于 Math.max(numbers[0], ...) 或 Math.max(5, 6, ..) */
var min = Math.min.apply(null, numbers);
```

###Function.prototype.bind()

bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

```javascript
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

参数

- `thisArg`: 调用绑定函数时作为 this 参数传递给目标函数的值。 如果使用new运算符构造绑定函数，则忽略该值。当使用 bind 在 setTimeout 中创建一个函数（作为回调提供）时，作为 thisArg 传递的任何原始值都将转换为 object。如果 bind 函数的参数列表为空，或者thisArg是null或undefined，执行作用域的 this 将被视为新函数的 thisArg。

- `arg1, arg2, ...`: 当目标函数被调用时，被预置入绑定函数的参数列表中的参数。

返回值

返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。

bind() 函数会创建一个新的绑定函数（bound function，BF）。绑定函数是一个 exotic function object（怪异函数对象，ECMAScript 2015 中的术语），它包装了原函数对象。调用绑定函数通常会导致执行包装函数。
绑定函数具有以下内部属性：
- [[BoundTargetFunction]] - 包装的函数对象
- [[BoundThis]] - 在调用包装函数时始终作为 this 值传递的值。
- [[BoundArguments]] - 列表，在对包装函数做任何调用都会优先用列表元素填充参数列表。
- [[Call]] - 执行与此对象关联的代码。通过函数调用表达式调用。内部方法的参数是一个this值和一个包含通过调用表达式传递给函数的参数的列表。
