# EventTarget

`EventTarget`是一个DOM接口，由可以接收事件、并且可以创建、移除侦听器的对象实现。

常见的`EventTarget`

- `window`
- `document`
- `Element`
- `XMLHttpRequest`

## 实例方法

### EventTarget.addEventListener

在EventTarget上注册特定事件类型的事件处理程序。

```javascript

target.addEventListener(type, listener, options);
target.addEventListener(type, listener, useCapture);

const xhrEvent = new XMLHttpRequest();
xhrEvent.addEventListener(type, listener, options);

```

- `type` 表示监听事件类型的字符串
- `listener` 当所监听的事件类型触发时，会接收到一个事件通知（实现了 Event 接口的对象）对象。listener 必须是一个实现了 `EventListener` 接口的对象，或者是一个函数。
- `options` 可选参数，一个指定有关 listener 属性的可选参数对象。
  - `capture` Boolean，表示listener会在该类型的事件捕获阶段传播到该 `EventTarget` 时触发
  - `once` Boolean，表示listener在添加之后最多只调用一次。如果是 true，listener会在其被调用之后自动移除。
  - `passive` Boolean，设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
- `useCapture` 可选参数，Boolean，在DOM树中，注册了listener的元素， 是否要先于它下面的EventTarget，调用该listener。 当useCapture设为true时，沿着DOM树向上冒泡的事件，不会触发listener。当一个元素嵌套了另一个元素，并且两个元素都对同一事件注册了一个处理函数时，所发生的事件冒泡和事件捕获是两种不同的事件传播方式。事件传播模式决定了元素以哪个顺序接收事件。如果没有指定，useCapture默认为false。

### EventTarget.removeEventListener

EventTarget中删除事件侦听器。

### EventTarget.dispatchEvent

将事件分派到此EventTarget。
