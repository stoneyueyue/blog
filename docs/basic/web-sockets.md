# WebSockets

WebSockets 是一种先进的技术。它可以在用户的浏览器和服务器之间打开交互式通信会话。使用此API，客户端可以向服务器发送消息并接收事件驱动的响应，而无需通过轮询服务器的方式以获得响应。

## 接口

- `WebSocket`: 用于连接WebSocket服务器的主要接口，之后可以在这个连接上发送和接受数据。
  
- `CloseEvent`: 连接关闭时 WebSocket 对象发送的事件。
  
- `MessageEvent`: 当从服务器获取到消息的时候 WebSocket 对象触发的事件。


## WebSocket

WebSocket对象提供了用于创建和管理WebSocket连接，以及可以通过该连接发送和接收数据的API。

```javascript
// 利用构造函数初始化socket实例.
const socket = new WebSocket('ws://localhost:8080');
```

### 常量

```javascript
WebSocket.CONNECTING    // 0
WebSocket.OPEN          // 1
WebSocket.CLOSING       // 2
WebSocket.CLOSED        // 3
```

### 属性

- `WebSocket.binaryType`：使用二进制的数据类型连接。
- `WebSocket.bufferedAmount`：未发送至服务器的字节数（只读）。
- `WebSocket.extensions`：服务器选择的扩展（只读）。
- `WebSocket.onclose`：用于指定连接关闭后的回调函数。
- `WebSocket.onerror`：用于指定连接失败后的回调函数。
- `WebSocket.onmessage`：用于指定当从服务器接受到信息时的回调函数。
- `WebSocket.onopen`：用于指定连接成功后的回调函数。
- `WebSocket.readyState`：当前的链接状态。
- `WebSocket.url`：WebSocket的绝对路径。

### 例子

 ```javascript
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
 ```

### 库

[Socket.IO](https://socket.io/)

Socket.IO是一个可靠的，稳定的，可以在客户端和服务器之间实现低延迟、双向和基于事件的通信的库。