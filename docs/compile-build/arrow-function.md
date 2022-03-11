# 箭头函数

## 箭头函数的编译

### 编译前

```javascript
function main () {
  this.value = 0

  return {
    getValue: () => {
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
      return _this.value;
    },
    setValue: function setValue(newValue) {
      return _this.value = newValue;
    }
  };
}
```
