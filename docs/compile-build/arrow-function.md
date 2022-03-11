# 箭头函数

## 箭头函数的特性

- 箭头函数没有自己的this对象
- 箭头函数不可以当作构造函数，也就是说，不可以对箭头函数使用new命令，否则会抛出一个错误
- 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用`rest`参数代替
- 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

```javascript
const headAndTail = (head, ...tail) => [head, tail];

headAndTail(1, 2, 3, 4, 5)
// [1,[2,3,4,5]]

```

对于普通函数来说，内部的`this`指向函数运行时所在的对象，但是这一点对箭头函数不成立。它没有自己的this对象，内部的this就是定义时上层作用域中的this。也就是说，箭头函数内部的this指向是固定的，相比之下，普通函数的this指向是可变的。

## 箭头函数的编译

### 编译前

```javascript
function main () {
  this.value = 0

  return {
    getValue: (...rest) => {
      console.log(rest)
      return this.value
    },
    setValue: (newValue) => {
      return this.value = newValue
    }
  }
}
```

### 编译后

```javascript
function main() {
  var _this = this;

  this.value = 0;
  return {
    getValue: function getValue() {
      for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      console.log(rest);
      return _this.value;
    },
    setValue: function setValue(newValue) {
      return _this.value = newValue;
    }
  };
}
```

通过编译结果可以发现，箭头函数编译后，转换成了普通的`function`，并且通过闭包，在变量`_this`保留了箭头函数上层作用域的`this`引用。


