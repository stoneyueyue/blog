module.exports = {
  base: "/blog/",
  themeConfig: {
    sidebar: [
      {
        title: "编程基础",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          "/basic/network.md",
          "/basic/domain-and-dns.md",
          "/basic/web-sockets.md",
        ],
      },
      {
        title: "HTML",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/html/html-semantic.md"],
      },
      {
        title: "JavaScript基础",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          "/javascript-basic/ECMAScript-and-JavaScript.md",
          "/javascript-basic/Type-of-Data.md",
          "/javascript-basic/String.md",
          "/javascript-basic/Array.md",
          "/javascript-basic/Object.md",
        ],
      },
      {
        title: "JavaScript标准内置对象",
        collapsable: false,
        sidebarDepth: 2,
        children: ["JavaScript标准内置对象/Function.md"],
      },
      {
        title: "Canvas",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/canvas-api.md"],
      },
      {
        title: "Web API",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/web-api/Event.md", "/web-api/Event-Target.md"],
      },
      {
        title: "编译",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/compile/arrow-function.md"],
      },
      {
        title: "构建",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/build-tools/webpack.md"],
      },
    ],
  },
};
