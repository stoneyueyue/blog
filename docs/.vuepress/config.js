module.exports = {
  base: '/blog/',
  themeConfig: {
    sidebar: [
      {
        title: '编程基础',
        collapsable: false,
        sidebarDepth: 2,
        children: ['/basic/network.md', '/basic/domain-and-dns.md', '/basic/web-sockets.md']
      },
      {
        title: 'HTML',
        collapsable: false,
        sidebarDepth: 2,
        children: ['/html/html-semantic.md']
      },
      {
        title: 'JavaScript基础',
        collapsable: false,
        sidebarDepth: 2,
        children: ['/javascript-basic/ECMAScript-and-JavaScript.md', '/javascript-basic/type-of-data.md', '/javascript-basic/Object.md']
      },
      {
        title: 'JavaScript标准内置对象',
        collapsable: false,
        sidebarDepth: 2,
        children: ['JavaScript标准内置对象/Function.md']
      },
      {
        title: 'Web API',
        collapsable: false,
        sidebarDepth: 2,
        children: ['/web-api/event.md', '/web-api/event-target.md']
      },
      {
        title: 'Compile & Build',
        collapsable: false,
        sidebarDepth: 2,
        children: ['/compile-build/arrow-function.md']
      }
    ]
  }
}
