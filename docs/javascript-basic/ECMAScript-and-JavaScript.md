# ECMAScript与JavaScript

JavaScript最早被创造的目的是为了在当年低速网络下，替代服务器语言进行数据校验的。在数据发送到服务器之前来验证某些字段是否已经填写，或者输入是否有效。

由于存在不同的浏览器软件（当年的微软和网景），意味着存在不同版本的JavaScript。因此JavaScript的标准化被提上了日程。来自微软、网景和其他对这门脚本语言有兴趣的工程师一起花费了数月时间打造出了ECMA-262，也就是ECMAScript这个新的脚语言标准。自此以后，各大浏览器均以ECMAScript作为自己JavaScript实现的依据，虽然具体实现各有不同。

完整的JavaScript包含以下几个部分

- 核心（ECMAScript）
- 文档对象模型（DOM）
- 浏览器对象模型（BOM）

## ECMAScript

`ECMAScript`即ECMA-262定义的语言，并不局限于Web浏览器。Web浏览器只是ECMAScript实现可能存在的一种`宿主环境`。宿主环境提供ECMAScript的基准实现和与环境自身交互必须的扩展。扩展（比如DOM）使用ECMAScript核心类型和语法，提供特定于环境的额外功能。

如果不涉及浏览器，ECMAScript描述了这门语言如下的部分：

- 语法
- 类型
- 语句
- 关键字
- 保留字
- 操作符
- 全局对象

ECMAScript只是对实现这个规范描述的所有方面的一门语言的称呼。JavaScript实现了ECMAScript，而Adobe ActionScript同样也实现了ECMAScript。

## DOM

`文档对象模型`（Document Object Model）是一个应用编程接口。DOM将整个页面抽象为一组分层节点。DOM通过创建表示文档的树，让开发者可以随心所欲的控制网页的内容和结构。

## BOM

`浏览器对象模型`（Browser Object Model）用于支持访问和操作浏览器的窗口。使用BOM，开发者可以操作浏览器显示页面之外的部分。BOM主要针对浏览器窗口和子窗口（frame），不过通常把任何特定于浏览器的扩展都跪在BOM的范畴内。例如：

- 弹出新浏览器窗口
- 移动、缩放和关闭浏览器窗口
- navigator对象，提供关于浏览器的详尽信息
- location对象，提供浏览器加载页面的详尽信息
- screen对象，提供关于用户屏幕分辨率的详尽信息
- performance对象，提供浏览器内存占用、导航行为和时间统计的详尽信息
- 对cookie的支持
- 其他自定义对象
  - XMLHttpRequest
  - ActiveXObject